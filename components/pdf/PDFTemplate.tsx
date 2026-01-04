"use client";

import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { ResumeData } from "@/types/resume";

// Using built-in Helvetica font which is very similar to Arial
// react-pdf doesn't have Arial built-in, but Helvetica is nearly identical

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
    lineHeight: 1.4,
  },
  header: {
    textAlign: "center",
    borderBottom: "2pt solid black",
    paddingBottom: 10,
    marginBottom: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  contactInfo: {
    fontSize: 10,
    marginBottom: 3,
  },
  contactLine: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 2,
  },
  separator: {
    marginHorizontal: 8,
    fontSize: 10,
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  entryContainer: {
    marginBottom: 8,
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  entryTitle: {
    fontWeight: "bold",
    fontSize: 11,
  },
  entrySubtitle: {
    fontStyle: "italic",
    fontSize: 11,
  },
  entryLocation: {
    fontSize: 11,
    textAlign: "right",
  },
  entryDate: {
    fontSize: 11,
    textAlign: "right",
  },
  description: {
    fontSize: 10,
    marginTop: 4,
    lineHeight: 1.3,
  },
  skillsContainer: {
    fontSize: 10,
  },
  link: {
    color: "black",
    textDecoration: "none",
  },
});

interface PDFTemplateProps {
  resumeData: ResumeData;
}

export const PDFTemplate: React.FC<PDFTemplateProps> = ({ resumeData }) => {
  // Helper function to format contact information
  const formatContactInfo = () => {
    const contacts = [];
    if (resumeData.personalInfo.phone)
      contacts.push(resumeData.personalInfo.phone);
    if (resumeData.personalInfo.email)
      contacts.push(resumeData.personalInfo.email);
    return contacts;
  };

  const formatSocialInfo = () => {
    const socials = [];
    if (resumeData.personalInfo.linkedin)
      socials.push(resumeData.personalInfo.linkedin);
    if (resumeData.personalInfo.website)
      socials.push(resumeData.personalInfo.website);
    if (resumeData.personalInfo.github)
      socials.push(resumeData.personalInfo.github);
    return socials;
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>
            {resumeData.personalInfo.name || "Your Name"}
          </Text>
          {resumeData.personalInfo.address && (
            <Text style={styles.contactInfo}>
              {resumeData.personalInfo.address}
            </Text>
          )}

          {/* Contact Information */}
          {formatContactInfo().length > 0 && (
            <View style={styles.contactLine}>
              {formatContactInfo().map((contact, index) => (
                <React.Fragment key={index}>
                  <Text style={styles.contactInfo}>{contact}</Text>
                  {index < formatContactInfo().length - 1 && (
                    <Text style={styles.separator}>|</Text>
                  )}
                </React.Fragment>
              ))}
            </View>
          )}

          {/* Social Information */}
          {formatSocialInfo().length > 0 && (
            <View style={styles.contactLine}>
              {formatSocialInfo().map((social, index) => (
                <React.Fragment key={index}>
                  <Text style={styles.contactInfo}>{social}</Text>
                  {index < formatSocialInfo().length - 1 && (
                    <Text style={styles.separator}>|</Text>
                  )}
                </React.Fragment>
              ))}
            </View>
          )}
        </View>

        {/* Objective/Summary */}
        {resumeData.objective && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {resumeData.targetPosition?.toUpperCase() ||
                "PROFESSIONAL SUMMARY"}
            </Text>
            <Text style={styles.description}>{resumeData.objective}</Text>
          </View>
        )}

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EDUCATION</Text>
          {resumeData.education.map((edu) => (
            <View key={edu.id} style={styles.entryContainer}>
              <View style={styles.entryHeader}>
                <View>
                  <Text style={styles.entryTitle}>
                    {edu.institution || "Institution Name"}
                  </Text>
                  <Text style={styles.entrySubtitle}>
                    {edu.degree || "Degree Program"}
                  </Text>
                  {edu.gpa && <Text>GPA: {edu.gpa}</Text>}
                </View>
                <View>
                  <Text style={styles.entryLocation}>
                    {edu.location || "Location"}
                  </Text>
                  <Text style={styles.entryDate}>
                    {edu.graduationDate || "Graduation Date"}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EXPERIENCE</Text>
          {resumeData.experience.map((exp) => (
            <View key={exp.id} style={styles.entryContainer}>
              <View style={styles.entryHeader}>
                <View>
                  <Text style={styles.entryTitle}>
                    {exp.company || "Company Name"}
                  </Text>
                  <Text style={styles.entrySubtitle}>
                    {exp.position || "Position Title"}
                    {exp.type &&
                      ` (${
                        exp.type.charAt(0).toUpperCase() + exp.type.slice(1)
                      })`}
                  </Text>
                </View>
                <View>
                  <Text style={styles.entryLocation}>
                    {exp.location || "Location"}
                  </Text>
                  <Text style={styles.entryDate}>
                    {exp.startDate && exp.endDate
                      ? `${exp.startDate} - ${exp.endDate}`
                      : "Date Range"}
                  </Text>
                </View>
              </View>
              {exp.description && (
                <Text style={styles.description}>{exp.description}</Text>
              )}
            </View>
          ))}
        </View>

        {/* Skills */}
        {resumeData.skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>TECHNICAL SKILLS</Text>
            <Text style={styles.skillsContainer}>
              {resumeData.skills.join(" • ")}
            </Text>
          </View>
        )}

        {/* Certifications */}
        {resumeData.certifications.some((cert) => cert.name) && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>CERTIFICATIONS & TRAININGS</Text>
            {resumeData.certifications.map(
              (cert) =>
                cert.name && (
                  <View key={cert.id} style={styles.entryContainer}>
                    <View style={styles.entryHeader}>
                      <View>
                        <Text style={styles.entryTitle}>{cert.name}</Text>
                        <Text style={styles.entrySubtitle}>{cert.issuer}</Text>
                      </View>
                      <View>
                        <Text style={styles.entryDate}>{cert.date}</Text>
                        {cert.expirationDate && (
                          <Text style={styles.entryDate}>
                            Expires: {cert.expirationDate}
                          </Text>
                        )}
                      </View>
                    </View>
                  </View>
                )
            )}
          </View>
        )}

        {/* References */}
        {resumeData.references.some((ref) => ref.name) && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>REFERENCES</Text>
            {resumeData.references.map(
              (ref) =>
                ref.name && (
                  <View key={ref.id} style={styles.entryContainer}>
                    <Text style={styles.entryTitle}>{ref.name}</Text>
                    <Text style={styles.entrySubtitle}>
                      {ref.position} at {ref.company}
                    </Text>
                    <Text style={styles.description}>
                      Email: {ref.email} | Phone: {ref.phone}
                    </Text>
                  </View>
                )
            )}
          </View>
        )}
      </Page>
    </Document>
  );
};
