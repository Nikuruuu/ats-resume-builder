import { ResumeData } from "@/types/resume";
import { MapPin, Phone, Mail, Linkedin, Globe, Github } from "lucide-react";

interface HarvardTemplateProps {
  resumeData: ResumeData;
}

export function HarvardTemplate({ resumeData }: HarvardTemplateProps) {
  return (
    <div
      className="max-w-2xl mx-auto bg-white min-h-full resume-content"
      style={{
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <div className="text-center border-b-2 border-black pb-4 mb-6">
        <h1 className="text-3xl font-bold mb-2 tracking-wide">
          {resumeData.personalInfo.name || "Your Name"}
        </h1>
        <div className="text-sm space-y-1">
          {resumeData.personalInfo.address && (
            <div className="flex justify-center items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {resumeData.personalInfo.address}
            </div>
          )}
          <div className="flex justify-center items-center gap-2 flex-wrap">
            {resumeData.personalInfo.phone && (
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                {resumeData.personalInfo.phone}
              </span>
            )}
            {resumeData.personalInfo.phone && resumeData.personalInfo.email && (
              <span className="text-black font-bold">|</span>
            )}
            {resumeData.personalInfo.email && (
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                {resumeData.personalInfo.email}
              </span>
            )}
          </div>
          <div className="flex justify-center items-center gap-2 flex-wrap">
            {resumeData.personalInfo.linkedin && (
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5" />
                {resumeData.personalInfo.linkedin}
              </span>
            )}
            {resumeData.personalInfo.linkedin &&
              resumeData.personalInfo.website && (
                <span className="text-black font-bold">|</span>
              )}
            {resumeData.personalInfo.website && (
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5" />
                {resumeData.personalInfo.website}
              </span>
            )}
            {resumeData.personalInfo.website &&
              resumeData.personalInfo.github && (
                <span className="text-black font-bold">|</span>
              )}
            {resumeData.personalInfo.linkedin &&
              !resumeData.personalInfo.website &&
              resumeData.personalInfo.github && (
                <span className="text-black font-bold">|</span>
              )}
            {resumeData.personalInfo.github && (
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5" />
                {resumeData.personalInfo.github}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Objective/Summary */}
      {resumeData.objective && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 text-center">
            {resumeData.targetPosition?.toUpperCase() || "PROFESSIONAL SUMMARY"}
          </h2>
          <p className="text-sm leading-relaxed text-justify">
            {resumeData.objective}
          </p>
        </section>
      )}

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-lg font-bold mb-3 text-center">EDUCATION</h2>
        {resumeData.education.map((edu, index) => (
          <div key={edu.id} className={`${index > 0 ? "mt-4" : ""} text-sm`}>
            <div className="flex justify-between items-start">
              <div>
                <div className="font-bold">
                  {edu.institution || "Institution Name"}
                </div>
                <div className="italic">{edu.degree || "Degree Program"}</div>
                {edu.gpa && <div>GPA: {edu.gpa}</div>}
              </div>
              <div className="text-right">
                <div>{edu.location || "Location"}</div>
                <div>{edu.graduationDate || "Graduation Date"}</div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-lg font-bold mb-3 text-center">EXPERIENCE</h2>
        {resumeData.experience.map((exp, index) => (
          <div key={exp.id} className={`${index > 0 ? "mt-4" : ""} text-sm`}>
            <div className="flex justify-between items-start mb-1">
              <div>
                <div className="font-bold">{exp.company || "Company Name"}</div>
                <div className="italic">
                  {exp.position || "Position Title"}
                  {exp.type &&
                    ` (${
                      exp.type.charAt(0).toUpperCase() + exp.type.slice(1)
                    })`}
                </div>
              </div>
              <div className="text-right">
                <div>{exp.location || "Location"}</div>
                <div>
                  {exp.startDate && exp.endDate
                    ? `${exp.startDate} - ${exp.endDate}`
                    : "Date Range"}
                </div>
              </div>
            </div>
            {exp.description && (
              <div className="mt-2 whitespace-pre-line leading-relaxed">
                {exp.description}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Skills */}
      {resumeData.skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 text-center">
            TECHNICAL SKILLS
          </h2>
          <div className="text-sm">{resumeData.skills.join(" • ")}</div>
        </section>
      )}

      {/* Certifications */}
      {resumeData.certifications.some((cert) => cert.name) && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-3 text-center">
            CERTIFICATIONS & TRAININGS
          </h2>
          {resumeData.certifications.map(
            (cert, index) =>
              cert.name && (
                <div
                  key={cert.id}
                  className={`${index > 0 ? "mt-2" : ""} text-sm`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-bold">{cert.name}</div>
                      <div className="italic">{cert.issuer}</div>
                    </div>
                    <div className="text-right">
                      <div>{cert.date}</div>
                      {cert.expirationDate && (
                        <div className="text-xs">
                          Expires: {cert.expirationDate}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
          )}
        </section>
      )}

      {/* References */}
      {resumeData.references.some((ref) => ref.name) && (
        <section className="mb-4">
          <h2 className="text-lg font-bold mb-3 text-center">REFERENCES</h2>
          {resumeData.references.map(
            (ref, index) =>
              ref.name && (
                <div
                  key={ref.id}
                  className={`${index > 0 ? "mt-3" : ""} text-sm`}
                >
                  <div className="font-bold">{ref.name}</div>
                  <div className="italic">
                    {ref.position} at {ref.company}
                  </div>
                  <div>
                    Email: {ref.email} | Phone: {ref.phone}
                  </div>
                </div>
              )
          )}
        </section>
      )}
    </div>
  );
}
