import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Plus, Minus, Award, ShieldCheck } from "lucide-react";
import { Certification } from "@/types/resume";
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "../ui/field";
import { Button } from "../ui/button";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "../ui/input-group";
import { MonthYearPicker } from "../custom/monthYearPicker";

interface CertificationsFormProps {
  certifications: Certification[];
  onUpdate: (id: string, field: keyof Certification, value: string) => void;
  onAdd: () => void;
  onRemove: (id: string) => void;
}

export function CertificationsForm({
  certifications,
  onUpdate,
  onAdd,
  onRemove,
}: CertificationsFormProps) {
  return (
    <Card>
      <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <FieldSet>
          <FieldLegend className="font-extrabold">Certification</FieldLegend>
          <FieldDescription>
            List relevant certifications that enhance your qualifications.
          </FieldDescription>
        </FieldSet>
        <Button onClick={onAdd} className="w-full sm:w-auto">
          <Plus />
          Add Certification
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {certifications.map((cert, index) => (
          <div key={cert.id} className="border rounded-lg p-4 space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Certification {index + 1}</h3>
              {certifications.length > 1 && (
                <Button
                  onClick={() => onRemove(cert.id)}
                  className="text-primary hover:text-primary/80"
                  variant="ghost"
                >
                  <Minus />
                </Button>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Field>
                <FieldLabel>Certification Name</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    value={cert.name}
                    onChange={(e) => onUpdate(cert.id, "name", e.target.value)}
                    placeholder="AWS Certified Solutions Architect"
                  />
                  <InputGroupAddon>
                    <Award />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              <Field>
                <FieldLabel>Issuing Organization</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    value={cert.issuer}
                    onChange={(e) =>
                      onUpdate(cert.id, "issuer", e.target.value)
                    }
                    placeholder="Amazon Web Services"
                  />
                  <InputGroupAddon>
                    <ShieldCheck />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Field>
                <FieldLabel>Date Obtained</FieldLabel>
                <MonthYearPicker
                  value={cert.date}
                  onChange={(value) => onUpdate(cert.id, "date", value)}
                  placeholder="January 2024"
                />
              </Field>
              <Field>
                <FieldLabel>Expiration Date (Optional)</FieldLabel>
                <MonthYearPicker
                  value={cert.expirationDate}
                  onChange={(value) =>
                    onUpdate(cert.id, "expirationDate", value)
                  }
                  placeholder="January 2030"
                />
              </Field>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
