import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CirclePlus, Trash2 } from "lucide-react";
import { useState } from "react";
import { FieldDescription, FieldLegend, FieldSet } from "../ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";
import { Button } from "../ui/button";

interface SkillsFormProps {
  skills: string[];
  onAdd: (skill: string) => void;
  onRemove: (skill: string) => void;
}

export function SkillsForm({ skills, onAdd, onRemove }: SkillsFormProps) {
  const [skillInput, setSkillInput] = useState("");

  const handleAddSkill = () => {
    if (skillInput.trim()) {
      onAdd(skillInput);
      setSkillInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill();
    }
  };

  return (
    <Card>
      <CardHeader>
        <FieldSet>
          <FieldLegend className="font-extrabold">Skills</FieldLegend>
          <FieldDescription>Add your relevant skills.</FieldDescription>
        </FieldSet>
      </CardHeader>
      <CardContent className="space-y-4">
        <InputGroup>
          <InputGroupInput
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            placeholder="Add a skill..."
            onKeyDown={handleKeyDown}
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              title="Add skill"
              aria-label="Add skill"
              size="sm"
              className="text-primary hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={handleAddSkill}
            >
              <CirclePlus size={16} />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="outline"
              className="inline-flex items-center gap-1 text-sm border border-primary bg-transparent text-primary"
            >
              {skill}
              <Button
                onClick={() => onRemove(skill)}
                variant="ghost"
                className="h-4 w-4 text-primary hover:text-primary/80"
                title={`Remove ${skill}`}
                aria-label={`Remove ${skill}`}
              >
                <Trash2 />
              </Button>
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
