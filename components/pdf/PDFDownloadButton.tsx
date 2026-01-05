"use client";

import React from "react";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { Download } from "lucide-react";
import { PDFTemplate } from "./PDFTemplate";
import { ResumeData } from "@/types/resume";
import { Button } from "@/components/ui/button";

interface PDFDownloadButtonProps {
  resumeData: ResumeData;
  fileName?: string;
}

export const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({
  resumeData,
  fileName,
}) => {
  const generateFileName = () => {
    // Use provided fileName or generate from resumeData
    if (fileName) {
      return fileName;
    }

    const name = resumeData.personalInfo.name?.trim() || "Resume";
    const position = resumeData.targetPosition?.trim() || "General";

    // Clean the strings for filename (remove special characters)
    const cleanName = name.replace(/[^a-zA-Z0-9\s]/g, "").replace(/\s+/g, "_");
    const cleanPosition = position
      .replace(/[^a-zA-Z0-9\s]/g, "")
      .replace(/\s+/g, "_");

    return `${cleanName}_${cleanPosition}`;
  };

  const handleDownload = async () => {
    try {
      // Generate PDF blob
      const blob = await pdf(<PDFTemplate resumeData={resumeData} />).toBlob();

      // Generate filename
      const finalFileName = generateFileName();

      // Save the file
      saveAs(blob, `${finalFileName}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    }
  };

  return (
    <Button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 px-4 py-2"
    >
      <Download size={16} />
      Download PDF
    </Button>
  );
};
