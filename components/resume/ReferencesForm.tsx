import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Minus } from "lucide-react";
import { Reference } from "@/types/resume";

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
      <CardHeader className="flex flex-row items-center justify-between">
        <h2 className="text-xl font-semibold">References</h2>
        <button
          onClick={onAdd}
          className="flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <Plus size={16} />
          Add Reference
        </button>
      </CardHeader>
      <CardContent className="space-y-4">
        {references.map((ref, index) => (
          <div key={ref.id} className="border rounded-lg p-4 space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Reference {index + 1}</h3>
              {references.length > 1 && (
                <button
                  onClick={() => onRemove(ref.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Minus size={16} />
                </button>
              )}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <Input
                  value={ref.name}
                  onChange={(e) => onUpdate(ref.id, "name", e.target.value)}
                  placeholder="Dr. Jane Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Position
                </label>
                <Input
                  value={ref.position}
                  onChange={(e) => onUpdate(ref.id, "position", e.target.value)}
                  placeholder="Senior Software Engineer"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Company
                </label>
                <Input
                  value={ref.company}
                  onChange={(e) => onUpdate(ref.id, "company", e.target.value)}
                  placeholder="Tech Corporation"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input
                  value={ref.email}
                  onChange={(e) => onUpdate(ref.id, "email", e.target.value)}
                  placeholder="jane.smith@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <Input
                  value={ref.phone}
                  onChange={(e) => onUpdate(ref.id, "phone", e.target.value)}
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
