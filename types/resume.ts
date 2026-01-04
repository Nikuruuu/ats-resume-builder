export interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  graduationDate: string;
  gpa?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  type: "internship" | "full-time" | "part-time" | "contract" | "volunteer";
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  expirationDate?: string;
}

export interface Reference {
  id: string;
  name: string;
  position: string;
  company: string;
  email: string;
  phone: string;
}

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  linkedin?: string;
  website?: string;
  github?: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  targetPosition?: string;
  objective: string;
  education: Education[];
  experience: Experience[];
  skills: string[];
  certifications: Certification[];
  references: Reference[];
}
