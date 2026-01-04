import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { PersonalInfo } from "@/types/resume";
import { PhoneNumberInput } from "../custom/phoneNumberInput";
import { Globe, Mail, MapPin, User, Linkedin, Github } from "lucide-react";

interface PersonalInfoFormProps {
  personalInfo: PersonalInfo;
  onUpdate: (field: string, value: string) => void;
}

export function PersonalInfoForm({
  personalInfo,
  onUpdate,
}: PersonalInfoFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onUpdate(name, value);
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-extrabold">Personal Information</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <InputGroup>
              <InputGroupInput
                name="name"
                value={personalInfo.name}
                onChange={handleChange}
                placeholder="John Doe"
              />
              <InputGroupAddon>
                <User />
              </InputGroupAddon>
            </InputGroup>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <InputGroup>
              <InputGroupInput
                name="email"
                type="email"
                value={personalInfo.email}
                onChange={handleChange}
                placeholder="john.doe@email.com"
              />
              <InputGroupAddon>
                <Mail />
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Phone </label>
            <PhoneNumberInput
              name="phone"
              value={personalInfo.phone}
              onChange={(value) => onUpdate("phone", value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Address</label>
            <InputGroup>
              <InputGroupInput
                name="address"
                value={personalInfo.address}
                onChange={handleChange}
                placeholder="City, State"
              />
              <InputGroupAddon>
                <MapPin />
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">LinkedIn</label>
            <InputGroup>
              <InputGroupInput
                name="linkedin"
                value={personalInfo.linkedin}
                onChange={handleChange}
                placeholder="linkedin.com/in/johndoe"
              />
              <InputGroupAddon>
                <Linkedin />
              </InputGroupAddon>
            </InputGroup>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Website</label>
            <InputGroup>
              <InputGroupInput
                name="website"
                value={personalInfo.website}
                onChange={handleChange}
                placeholder="johndoe.com"
              />
              <InputGroupAddon>
                <Globe />
              </InputGroupAddon>
            </InputGroup>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">GitHub</label>
            <InputGroup>
              <InputGroupInput
                name="github"
                value={personalInfo.github}
                onChange={handleChange}
                placeholder="github.com/johndoe"
              />
              <InputGroupAddon>
                <Github />
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
