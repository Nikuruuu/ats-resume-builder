import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Briefcase } from "lucide-react";
import {
  Field,
  FieldLabel,
  FieldSet,
  FieldLegend,
  FieldDescription,
} from "@/components/ui/field";

interface ObjectiveFormProps {
  targetPosition?: string;
  objective: string;
  onUpdatePosition: (value: string) => void;
  onUpdateObjective: (value: string) => void;
}

export function ObjectiveForm({
  targetPosition,
  objective,
  onUpdatePosition,
  onUpdateObjective,
}: ObjectiveFormProps) {
  const handlePositionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdatePosition(e.target.value);
  };

  const handleObjectiveChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onUpdateObjective(e.target.value);
  };

  return (
    <Card>
      <CardHeader>
        <FieldSet>
          <FieldLegend className="font-extrabold">
            Professional Objective
          </FieldLegend>
          <FieldDescription>
            State your career goal and target role. Highlight key skills and the
            value you offer.
          </FieldDescription>
        </FieldSet>
      </CardHeader>
      <CardContent className="space-y-4">
        <Field>
          <FieldLabel>Target Position</FieldLabel>
          <InputGroup>
            <InputGroupInput
              value={targetPosition || ""}
              onChange={handlePositionChange}
              placeholder="e.g., Jr Web Developer, Software Engineer, etc."
            />
            <InputGroupAddon>
              <Briefcase />
            </InputGroupAddon>
          </InputGroup>
        </Field>
        <Field>
          <FieldLabel>Objective Statement</FieldLabel>
          <InputGroup className="h-auto min-h-[160px] items-start">
            <InputGroupTextarea
              value={objective}
              onChange={handleObjectiveChange}
              placeholder="A brief statement of your career goals and what you bring to the position..."
              rows={10}
              className="min-h-[140px] resize-none"
            />
          </InputGroup>
        </Field>
      </CardContent>
    </Card>
  );
}
