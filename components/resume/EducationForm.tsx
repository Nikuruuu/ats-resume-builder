import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Minus } from "lucide-react";
import { Education } from "@/types/resume";
import { Button } from "../ui/button";

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
      <CardHeader className="flex flex-row items-center justify-between">
        <h2 className="text-xl font-semibold">Education</h2>
        <Button onClick={onAdd} className="flex items-center gap-2 px-3 py-1">
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
                <button
                  onClick={() => onRemove(edu.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Minus size={16} />
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Institution
                </label>
                <Input
                  value={edu.institution}
                  onChange={(e) =>
                    onUpdate(edu.id, "institution", e.target.value)
                  }
                  placeholder="Harvard University"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Degree</label>
                <Input
                  value={edu.degree}
                  onChange={(e) => onUpdate(edu.id, "degree", e.target.value)}
                  placeholder="Bachelor of Arts in Economics"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Location
                </label>
                <Input
                  value={edu.location}
                  onChange={(e) => onUpdate(edu.id, "location", e.target.value)}
                  placeholder="Cambridge, MA"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Graduation Date
                </label>
                <Input
                  value={edu.graduationDate}
                  onChange={(e) =>
                    onUpdate(edu.id, "graduationDate", e.target.value)
                  }
                  placeholder="May 2024"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  GPA (Optional)
                </label>
                <Input
                  value={edu.gpa || ""}
                  onChange={(e) => onUpdate(edu.id, "gpa", e.target.value)}
                  placeholder="3.8/4.0"
                />
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
