import { Card, CardContent, CardHeader } from "@/components/ui/card";

import {
  Plus,
  Minus,
  User,
  BriefcaseBusiness,
  Building2,
  Mail,
} from "lucide-react";
import { Reference } from "@/types/resume";
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
import { Button } from "../ui/button";
import { PhoneInput } from "../custom/phoneNumberInput";

interface ReferencesFormProps {
  references: Reference[];
  onUpdate: (id: string, field: keyof Reference, value: string) => void;
  onAdd: () => void;
  onRemove: (id: string) => void;
}

export function ReferencesForm({
  references,
  onUpdate,
  onAdd,
  onRemove,
}: ReferencesFormProps) {
  return (
    <Card>
      <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <FieldSet>
          <FieldLegend className="font-extrabold">References</FieldLegend>
          <FieldDescription>
            Provide professional references who can vouch for your skills and
            work ethic.
          </FieldDescription>
        </FieldSet>
        <Button onClick={onAdd} className="w-full sm:w-auto">
          <Plus />
          Add Reference
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {references.map((ref, index) => (
          <div key={ref.id} className="border rounded-lg p-4 space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Reference {index + 1}</h3>
              {references.length > 1 && (
                <Button
                  onClick={() => onRemove(ref.id)}
                  className="text-primary hover:text-primary/80"
                  variant="ghost"
                >
                  <Minus />
                </Button>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Field>
                <FieldLabel>Full Name</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    value={ref.name}
                    onChange={(e) => onUpdate(ref.id, "name", e.target.value)}
                    placeholder="Dr. Jane Smith"
                  />
                  <InputGroupAddon>
                    <User />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              <Field>
                <FieldLabel>Position</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    value={ref.position}
                    onChange={(e) =>
                      onUpdate(ref.id, "position", e.target.value)
                    }
                    placeholder="Senior Software Engineer"
                  />
                  <InputGroupAddon>
                    <BriefcaseBusiness />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Field>
                <FieldLabel>Company</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    value={ref.company}
                    onChange={(e) =>
                      onUpdate(ref.id, "company", e.target.value)
                    }
                    placeholder="Tech Corporation"
                  />
                  <InputGroupAddon>
                    <Building2 />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              <Field>
                <FieldLabel>Email</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    value={ref.email}
                    onChange={(e) => onUpdate(ref.id, "email", e.target.value)}
                    placeholder="jane.smith@company.com"
                  />
                  <InputGroupAddon>
                    <Mail />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Field>
                <FieldLabel>Phone</FieldLabel>
                <PhoneInput
                  name="phone"
                  value={ref.phone}
                  onChange={(value) => onUpdate(ref.id, "phone", value)}
                />
              </Field>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
