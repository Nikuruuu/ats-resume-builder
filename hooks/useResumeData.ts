import { useState } from "react";
import {
  ResumeData,
  Education,
  Experience,
  Certification,
  Reference,
} from "@/types/resume";

export function useResumeData() {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      address: "",
      linkedin: "",
      website: "",
      github: "",
    },
    targetPosition: "",
    objective: "",
    education: [
      {
        id: "1",
        institution: "",
        degree: "",
        location: "",
        graduationDate: "",
        gpa: "",
      },
    ],
    experience: [
      {
        id: "1",
        company: "",
        position: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
        type: "internship",
      },
    ],
    skills: [],
    certifications: [
      {
        id: "1",
        name: "",
        issuer: "",
        date: "",
        expirationDate: "",
      },
    ],
    references: [
      {
        id: "1",
        name: "",
        position: "",
        company: "",
        email: "",
        phone: "",
      },
    ],
  });

  const updatePersonalInfo = (field: string, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value },
    }));
  };

  const updateTargetPosition = (value: string) => {
    setResumeData((prev) => ({ ...prev, targetPosition: value }));
  };

  const updateObjective = (value: string) => {
    setResumeData((prev) => ({ ...prev, objective: value }));
  };

  // Education functions
  const updateEducation = (
    id: string,
    field: keyof Education,
    value: string
  ) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    }));
  };

  const addEducation = () => {
    const newId = Date.now().toString();
    setResumeData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: newId,
          institution: "",
          degree: "",
          location: "",
          graduationDate: "",
          gpa: "",
        },
      ],
    }));
  };

  const removeEducation = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
    }));
  };

  // Experience functions
  const updateExperience = (
    id: string,
    field: keyof Experience,
    value: string
  ) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  const addExperience = () => {
    const newId = Date.now().toString();
    setResumeData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: newId,
          company: "",
          position: "",
          location: "",
          startDate: "",
          endDate: "",
          description: "",
          type: "internship",
        },
      ],
    }));
  };

  const removeExperience = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id),
    }));
  };

  // Skills functions
  const addSkill = (skill: string) => {
    if (skill.trim() && !resumeData.skills.includes(skill.trim())) {
      setResumeData((prev) => ({
        ...prev,
        skills: [...prev.skills, skill.trim()],
      }));
    }
  };

  const removeSkill = (skill: string) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skill),
    }));
  };

  // Certifications functions
  const updateCertification = (
    id: string,
    field: keyof Certification,
    value: string
  ) => {
    setResumeData((prev) => ({
      ...prev,
      certifications: prev.certifications.map((cert) =>
        cert.id === id ? { ...cert, [field]: value } : cert
      ),
    }));
  };

  const addCertification = () => {
    const newId = Date.now().toString();
    setResumeData((prev) => ({
      ...prev,
      certifications: [
        ...prev.certifications,
        {
          id: newId,
          name: "",
          issuer: "",
          date: "",
          expirationDate: "",
        },
      ],
    }));
  };

  const removeCertification = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      certifications: prev.certifications.filter((cert) => cert.id !== id),
    }));
  };

  // References functions
  const updateReference = (
    id: string,
    field: keyof Reference,
    value: string
  ) => {
    setResumeData((prev) => ({
      ...prev,
      references: prev.references.map((ref) =>
        ref.id === id ? { ...ref, [field]: value } : ref
      ),
    }));
  };

  const addReference = () => {
    const newId = Date.now().toString();
    setResumeData((prev) => ({
      ...prev,
      references: [
        ...prev.references,
        {
          id: newId,
          name: "",
          position: "",
          company: "",
          email: "",
          phone: "",
        },
      ],
    }));
  };

  const removeReference = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      references: prev.references.filter((ref) => ref.id !== id),
    }));
  };

  return {
    resumeData,
    updatePersonalInfo,
    updateTargetPosition,
    updateObjective,
    updateEducation,
    addEducation,
    removeEducation,
    updateExperience,
    addExperience,
    removeExperience,
    addSkill,
    removeSkill,
    updateCertification,
    addCertification,
    removeCertification,
    updateReference,
    addReference,
    removeReference,
  };
}
