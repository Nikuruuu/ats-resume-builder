import { Input } from "@/components/ui/input";

interface PhoneNumberInputProps {
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
}

export function PhoneNumberInput({
  value = "",
  onChange,
  name,
}: PhoneNumberInputProps) {
  // Extract just the digits part for display (remove +63 if it exists)
  const displayValue = value.startsWith("+63") ? value.slice(3) : value;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    // keep only digits, max 10
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    // Always include +63 prefix in the saved value
    const fullPhoneNumber = digits ? `+63${digits}` : "";
    onChange?.(fullPhoneNumber);
  }

  return (
    <div className="grid gap-2">
      <div className="flex items-center">
        <span className="px-3 py-2 bg-muted text-foreground rounded-l-md border border-input border-r-0 text-sm">
          +63
        </span>
        <Input
          id="phone"
          name={name}
          type="tel"
          inputMode="numeric"
          placeholder="9123456789"
          value={displayValue}
          onChange={handleChange}
          className="rounded-l-none"
        />
      </div>
    </div>
  );
}
