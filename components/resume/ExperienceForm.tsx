import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Plus, Minus, Briefcase, MapPin, Building2 } from "lucide-react";
import { Experience } from "@/types/resume";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldLabel,
  FieldSet,
  FieldLegend,
  FieldDescription,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupInput,
  InputGroupTextarea,
  InputGroupAddon,
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MonthYearPicker } from "../custom/monthYearPicker";

interface ExperienceFormProps {
  experience: Experience[];
  onUpdate: (id: string, field: keyof Experience, value: string) => void;
  onAdd: () => void;
  onRemove: (id: string) => void;
}

export function ExperienceForm({
  experience,
  onUpdate,
  onAdd,
  onRemove,
}: ExperienceFormProps) {
  return (
    <Card>
      <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <FieldSet>
          <FieldLegend className="font-extrabold">
            Experience & Internships
          </FieldLegend>
          <FieldDescription>
            List your work experience, internships, and relevant positions.
            Include responsibilities and achievements.
          </FieldDescription>
        </FieldSet>
        <Button onClick={onAdd} className="w-full sm:w-auto">
          <Plus />
          Add Experience
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {experience.map((exp, index) => (
          <div key={exp.id} className="border rounded-lg p-4 space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Experience {index + 1}</h3>
              {experience.length > 1 && (
                <Button
                  onClick={() => onRemove(exp.id)}
                  className="text-primary hover:text-primary/80"
                  variant="ghost"
                >
                  <Minus />
                </Button>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <Field>
                <FieldLabel>Company</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    value={exp.company}
                    onChange={(e) =>
                      onUpdate(exp.id, "company", e.target.value)
                    }
                    placeholder="Google"
                  />
                  <InputGroupAddon>
                    <Building2 />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              <Field>
                <FieldLabel>Position</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    value={exp.position}
                    onChange={(e) =>
                      onUpdate(exp.id, "position", e.target.value)
                    }
                    placeholder="Software Engineer"
                  />
                  <InputGroupAddon>
                    <Briefcase />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              <Field>
                <FieldLabel>Type</FieldLabel>
                <Select
                  value={exp.type}
                  onValueChange={(value) => onUpdate(exp.id, "type", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="internship">Internship</SelectItem>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="part-time">Part-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="volunteer">Volunteer</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <Field>
                <FieldLabel>Location</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    value={exp.location}
                    onChange={(e) =>
                      onUpdate(exp.id, "location", e.target.value)
                    }
                    placeholder="Davao City, Philippines"
                  />
                  <InputGroupAddon>
                    <MapPin />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              <Field>
                <FieldLabel>Start Date</FieldLabel>
                <MonthYearPicker
                  value={exp.startDate}
                  onChange={(value) => onUpdate(exp.id, "startDate", value)}
                  placeholder="June 2022"
                />
              </Field>
              <Field>
                <FieldLabel>End Date</FieldLabel>
                <div className="space-y-2">
                  {exp.endDate === "Present" ? (
                    <InputGroup>
                      <InputGroupInput
                        value="Present"
                        readOnly
                        className="cursor-default"
                      />
                    </InputGroup>
                  ) : (
                    <MonthYearPicker
                      value={exp.endDate}
                      onChange={(value) => onUpdate(exp.id, "endDate", value)}
                      placeholder="December 2024"
                    />
                  )}
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <Checkbox
                      checked={exp.endDate === "Present"}
                      onCheckedChange={(checked) =>
                        onUpdate(exp.id, "endDate", checked ? "Present" : "")
                      }
                    />
                    <span>Currently working here</span>
                  </label>
                </div>
              </Field>
            </div>
            <Field>
              <FieldLabel>Description</FieldLabel>
              <InputGroup className="h-auto min-h-[120px] items-start">
                <InputGroupTextarea
                  value={exp.description}
                  onChange={(e) => {
                    onUpdate(exp.id, "description", e.target.value);
                  }}
                  onBlur={(e) => {
                    // Clean up if only bullet remains when user leaves the field
                    if (e.target.value.trim() === "•") {
                      onUpdate(exp.id, "description", "");
                    }
                  }}
                  onFocus={(e) => {
                    // Add initial bullet if empty
                    if (!exp.description || exp.description.trim() === "") {
                      const textarea = e.currentTarget;
                      onUpdate(exp.id, "description", "• ");
                      setTimeout(() => {
                        textarea.selectionStart = textarea.selectionEnd = 2;
                      }, 0);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      const textarea = e.currentTarget;
                      const cursorPos = textarea.selectionStart;
                      const textBefore = exp.description.substring(
                        0,
                        cursorPos
                      );
                      const textAfter = exp.description.substring(cursorPos);
                      const newText = textBefore + "\n• " + textAfter;
                      onUpdate(exp.id, "description", newText);

                      // Set cursor position after the bullet
                      setTimeout(() => {
                        textarea.selectionStart = textarea.selectionEnd =
                          cursorPos + 3;
                      }, 0);
                    }
                  }}
                  placeholder={
                    "• Developed and maintained web applications using React and Node.js\n• Collaborated with cross-functional teams to deliver high-quality software\n• Improved application performance by 30% through code optimization"
                  }
                  rows={4}
                  className="min-h-[100px] resize-none"
                />
              </InputGroup>
            </Field>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
