"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";

interface MonthYearPickerProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export function MonthYearPicker({
  value,
  onChange,
  placeholder = "Select month and year",
}: MonthYearPickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(
    value ? new Date(value) : undefined
  );
  const [open, setOpen] = React.useState(false);

  const handleSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
      const formatted = format(selectedDate, "MMMM yyyy");
      onChange?.(formatted);
      setOpen(false);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <InputGroup className="cursor-pointer">
          <InputGroupInput
            value={value || ""}
            placeholder={placeholder}
            readOnly
            className="cursor-pointer"
          />
          <InputGroupAddon>
            <CalendarIcon />
          </InputGroupAddon>
        </InputGroup>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          captionLayout="dropdown"
          startMonth={new Date(1960, 0)}
          endMonth={new Date(2050, 11)}
          classNames={{
            day_button: cn("w-9 h-9 p-0 font-normal aria-selected:opacity-100"),
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
