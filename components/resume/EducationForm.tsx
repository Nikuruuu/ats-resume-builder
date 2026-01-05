import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Plus, Minus, GraduationCap, School, MapPin } from "lucide-react";
import { Education } from "@/types/resume";
import { Button } from "../ui/button";
import {
  Field,
  FieldLabel,
  FieldSet,
  FieldLegend,
  FieldDescription,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { MonthYearPicker } from "../custom/monthYearPicker";

interface EducationFormProps {
  education: Education[];
  onUpdate: (id: string, field: keyof Education, value: string) => void;
  onAdd: () => void;
  onRemove: (id: string) => void;
}

export function EducationForm({
  education,
  onUpdate,
  onAdd,
  onRemove,
}: EducationFormProps) {
  return (
    <Card>
      <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <FieldSet>
          <FieldLegend className="font-extrabold">Education</FieldLegend>
          <FieldDescription>
            List your highest education first. Include degree, school, and
            graduation date.
          </FieldDescription>
        </FieldSet>
        <Button onClick={onAdd} className="w-full sm:w-auto">
          <Plus />
          Add Education
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {education.map((edu, index) => (
          <div key={edu.id} className="border rounded-lg p-4 space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Education {index + 1}</h3>
              {education.length > 1 && (
                <Button
                  onClick={() => onRemove(edu.id)}
                  className="text-primary hover:text-primary/80"
                  variant="ghost"
                >
                  <Minus />
                </Button>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Field>
                <FieldLabel>Institution</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    value={edu.institution}
                    onChange={(e) =>
                      onUpdate(edu.id, "institution", e.target.value)
                    }
                    placeholder="University of Mindanao"
                  />
                  <InputGroupAddon>
                    <School />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              <Field>
                <FieldLabel>Degree</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    value={edu.degree}
                    onChange={(e) => onUpdate(edu.id, "degree", e.target.value)}
                    placeholder="BS in Information Technology"
                  />
                  <InputGroupAddon>
                    <GraduationCap />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <Field>
                <FieldLabel>Location</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    value={edu.location}
                    onChange={(e) =>
                      onUpdate(edu.id, "location", e.target.value)
                    }
                    placeholder="Davao City, Philippines"
                  />
                  <InputGroupAddon>
                    <MapPin />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              <Field>
                <FieldLabel>Graduation Date</FieldLabel>
                <MonthYearPicker
                  value={edu.graduationDate}
                  onChange={(value) =>
                    onUpdate(edu.id, "graduationDate", value)
                  }
                  placeholder="May 2024"
                />
              </Field>
              <Field>
                <FieldLabel>GPA (Optional)</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    value={edu.gpa || ""}
                    onChange={(e) => onUpdate(edu.id, "gpa", e.target.value)}
                    placeholder="3.8/4.0"
                  />
                </InputGroup>
              </Field>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
