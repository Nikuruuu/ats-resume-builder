import { PersonalInfoForm } from "@/components/resume/PersonalInfoForm";
import { ObjectiveForm } from "@/components/resume/ObjectiveForm";
import { EducationForm } from "@/components/resume/EducationForm";
import { ExperienceForm } from "@/components/resume/ExperienceForm";
import { SkillsForm } from "@/components/resume/SkillsForm";
import { CertificationsForm } from "@/components/resume/CertificationsForm";
import { ReferencesForm } from "@/components/resume/ReferencesForm";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ResumeData,
  Education,
  Experience,
  Certification,
  Reference,
} from "@/types/resume";
import {
  User,
  Target,
  GraduationCap,
  Briefcase,
  MoreHorizontal,
  Award,
  Users,
  Wrench,
} from "lucide-react";
import { useState } from "react";

interface FormPanelProps {
  resumeData: ResumeData;
  handlers: {
    updatePersonalInfo: (field: string, value: string) => void;
    updateTargetPosition: (value: string) => void;
    updateObjective: (value: string) => void;
    updateEducation: (
      id: string,
      field: keyof Education,
      value: string
    ) => void;
    addEducation: () => void;
    removeEducation: (id: string) => void;
    updateExperience: (
      id: string,
      field: keyof Experience,
      value: string
    ) => void;
    addExperience: () => void;
    removeExperience: (id: string) => void;
    addSkill: (skill: string) => void;
    removeSkill: (skill: string) => void;
    updateCertification: (
      id: string,
      field: keyof Certification,
      value: string
    ) => void;
    addCertification: () => void;
    removeCertification: (id: string) => void;
    updateReference: (
      id: string,
      field: keyof Reference,
      value: string
    ) => void;
    addReference: () => void;
    removeReference: (id: string) => void;
  };
}

export function FormPanel({ resumeData, handlers }: FormPanelProps) {
  const [activeTab, setActiveTab] = useState("personal");

  // Check if we're on a "more" section
  const isMoreSectionActive = [
    "skills",
    "certifications",
    "references",
  ].includes(activeTab);

  return (
    <div className="w-full p-4 sm:p-6 overflow-y-auto print-hidden">
      <div className="max-w-2xl mx-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-4 sm:mb-6">
            <TabsTrigger
              value="personal"
              className="flex items-center gap-1 text-xs sm:text-sm"
            >
              <User size={14} />
              <span className="hidden sm:inline">Personal</span>
            </TabsTrigger>
            <TabsTrigger
              value="objective"
              className="flex items-center gap-1 text-xs sm:text-sm"
            >
              <Target size={14} />
              <span className="hidden sm:inline">Objective</span>
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="flex items-center gap-1 text-xs sm:text-sm"
            >
              <GraduationCap size={14} />
              <span className="hidden sm:inline">Education</span>
            </TabsTrigger>
            <TabsTrigger
              value="experience"
              className="flex items-center gap-1 text-xs sm:text-sm"
            >
              <Briefcase size={14} />
              <span className="hidden sm:inline">Experience</span>
            </TabsTrigger>

            {/* More sections via Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-1 ${
                    isMoreSectionActive
                      ? "bg-background text-foreground shadow-sm"
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  <MoreHorizontal size={14} />
                  <span className="hidden sm:inline">More</span>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-48 p-2">
                <div className="space-y-1">
                  <button
                    className="w-full text-left px-2 py-1 rounded hover:bg-gray-100 flex items-center gap-2"
                    onClick={() => setActiveTab("skills")}
                  >
                    <Wrench size={14} />
                    Skills
                  </button>
                  <button
                    className="w-full text-left px-2 py-1 rounded hover:bg-gray-100 flex items-center gap-2"
                    onClick={() => setActiveTab("certifications")}
                  >
                    <Award size={14} />
                    Certifications
                  </button>
                  <button
                    className="w-full text-left px-2 py-1 rounded hover:bg-gray-100 flex items-center gap-2"
                    onClick={() => setActiveTab("references")}
                  >
                    <Users size={14} />
                    References
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          </TabsList>

          {/* Personal Info Tab */}
          <TabsContent value="personal" className="space-y-6">
            <PersonalInfoForm
              personalInfo={resumeData.personalInfo}
              onUpdate={handlers.updatePersonalInfo}
            />
          </TabsContent>

          {/* Objective Tab */}
          <TabsContent value="objective" className="space-y-6">
            <ObjectiveForm
              targetPosition={resumeData.targetPosition}
              objective={resumeData.objective}
              onUpdatePosition={handlers.updateTargetPosition}
              onUpdateObjective={handlers.updateObjective}
            />
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education" className="space-y-6">
            <EducationForm
              education={resumeData.education}
              onUpdate={handlers.updateEducation}
              onAdd={handlers.addEducation}
              onRemove={handlers.removeEducation}
            />
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience" className="space-y-6">
            <ExperienceForm
              experience={resumeData.experience}
              onUpdate={handlers.updateExperience}
              onAdd={handlers.addExperience}
              onRemove={handlers.removeExperience}
            />
          </TabsContent>

          {/* Skills Tab (Hidden, accessed via popover) */}
          <TabsContent value="skills" className="space-y-6">
            <SkillsForm
              skills={resumeData.skills}
              onAdd={handlers.addSkill}
              onRemove={handlers.removeSkill}
            />
          </TabsContent>

          {/* Certifications Tab (Hidden, accessed via popover) */}
          <TabsContent value="certifications" className="space-y-6">
            <CertificationsForm
              certifications={resumeData.certifications}
              onUpdate={handlers.updateCertification}
              onAdd={handlers.addCertification}
              onRemove={handlers.removeCertification}
            />
          </TabsContent>

          {/* References Tab (Hidden, accessed via popover) */}
          <TabsContent value="references" className="space-y-6">
            <ReferencesForm
              references={resumeData.references}
              onUpdate={handlers.updateReference}
              onAdd={handlers.addReference}
              onRemove={handlers.removeReference}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
