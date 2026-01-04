import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Briefcase } from "lucide-react";

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
        <h2 className="text-xl font-semibold">Professional Objective</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Target Position
          </label>
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
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            Objective Statement
          </label>
          <InputGroup>
            <InputGroupTextarea
              value={objective}
              onChange={handleObjectiveChange}
              placeholder="A brief statement of your career goals and what you bring to the position..."
              rows={10}
            />
          </InputGroup>
        </div>
      </CardContent>
    </Card>
  );
}
