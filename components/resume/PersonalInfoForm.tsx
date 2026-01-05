import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Field,
  FieldLabel,
  FieldSet,
  FieldLegend,
  FieldDescription,
} from "@/components/ui/field";
import { PersonalInfo } from "@/types/resume";
import { PhoneInput } from "../custom/phoneNumberInput";
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
        <FieldSet>
          <FieldLegend className="font-extrabold">
            Personal Information
          </FieldLegend>
          <FieldDescription>Add essential contact details.</FieldDescription>
        </FieldSet>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field>
            <FieldLabel>Full Name</FieldLabel>
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
          </Field>
          <Field>
            <FieldLabel>Email</FieldLabel>
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
          </Field>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field>
            <FieldLabel>Phone</FieldLabel>
            <PhoneInput
              name="phone"
              value={personalInfo.phone}
              onChange={(value) => onUpdate("phone", value)}
            />
          </Field>
          <Field>
            <FieldLabel>Address</FieldLabel>
            <InputGroup>
              <InputGroupInput
                name="address"
                value={personalInfo.address}
                onChange={handleChange}
                placeholder="City, Country"
              />
              <InputGroupAddon>
                <MapPin />
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Field>
            <FieldLabel>LinkedIn</FieldLabel>
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
          </Field>
          <Field>
            <FieldLabel>Website</FieldLabel>
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
          </Field>
          <Field>
            <FieldLabel>GitHub</FieldLabel>
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
          </Field>
        </div>
      </CardContent>
    </Card>
  );
}
