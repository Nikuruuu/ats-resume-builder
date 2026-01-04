import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Minus } from "lucide-react";
import { Experience } from "@/types/resume";

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
      <CardHeader className="flex flex-row items-center justify-between">
        <h2 className="text-xl font-semibold">Experience & Internships</h2>
        <button
          onClick={onAdd}
          className="flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <Plus size={16} />
          Add Experience
        </button>
      </CardHeader>
      <CardContent className="space-y-4">
        {experience.map((exp, index) => (
          <div key={exp.id} className="border rounded-lg p-4 space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Experience {index + 1}</h3>
              {experience.length > 1 && (
                <button
                  onClick={() => onRemove(exp.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Minus size={16} />
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Company
                </label>
                <Input
                  value={exp.company}
                  onChange={(e) => onUpdate(exp.id, "company", e.target.value)}
                  placeholder="Google"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Position
                </label>
                <Input
                  value={exp.position}
                  onChange={(e) => onUpdate(exp.id, "position", e.target.value)}
                  placeholder="Software Engineer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Type</label>
                <select
                  value={exp.type}
                  onChange={(e) => onUpdate(exp.id, "type", e.target.value)}
                  className="w-full h-9 px-3 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="internship">Internship</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="contract">Contract</option>
                  <option value="volunteer">Volunteer</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Location
                </label>
                <Input
                  value={exp.location}
                  onChange={(e) => onUpdate(exp.id, "location", e.target.value)}
                  placeholder="Mountain View, CA"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Start Date
                </label>
                <Input
                  value={exp.startDate}
                  onChange={(e) =>
                    onUpdate(exp.id, "startDate", e.target.value)
                  }
                  placeholder="June 2022"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  End Date
                </label>
                <Input
                  value={exp.endDate}
                  onChange={(e) => onUpdate(exp.id, "endDate", e.target.value)}
                  placeholder="Present"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <Textarea
                value={exp.description}
                onChange={(e) =>
                  onUpdate(exp.id, "description", e.target.value)
                }
                placeholder="• Developed and maintained web applications using React and Node.js&#10;• Collaborated with cross-functional teams to deliver high-quality software&#10;• Improved application performance by 30% through code optimization"
                rows={4}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
