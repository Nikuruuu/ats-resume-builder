import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Minus } from "lucide-react";
import { Certification } from "@/types/resume";

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
      <CardHeader className="flex flex-row items-center justify-between">
        <h2 className="text-xl font-semibold">Certifications & Trainings</h2>
        <button
          onClick={onAdd}
          className="flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <Plus size={16} />
          Add Certification
        </button>
      </CardHeader>
      <CardContent className="space-y-4">
        {certifications.map((cert, index) => (
          <div key={cert.id} className="border rounded-lg p-4 space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Certification {index + 1}</h3>
              {certifications.length > 1 && (
                <button
                  onClick={() => onRemove(cert.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Minus size={16} />
                </button>
              )}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Certification Name
                </label>
                <Input
                  value={cert.name}
                  onChange={(e) => onUpdate(cert.id, "name", e.target.value)}
                  placeholder="AWS Certified Solutions Architect"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Issuing Organization
                </label>
                <Input
                  value={cert.issuer}
                  onChange={(e) => onUpdate(cert.id, "issuer", e.target.value)}
                  placeholder="Amazon Web Services"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Date Obtained
                </label>
                <Input
                  value={cert.date}
                  onChange={(e) => onUpdate(cert.id, "date", e.target.value)}
                  placeholder="January 2024"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Expiration Date (Optional)
                </label>
                <Input
                  value={cert.expirationDate || ""}
                  onChange={(e) =>
                    onUpdate(cert.id, "expirationDate", e.target.value)
                  }
                  placeholder="January 2027"
                />
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
