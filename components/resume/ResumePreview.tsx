import { Eye } from "lucide-react";
import { ResumeData } from "@/types/resume";
import { HarvardTemplate } from "@/components/templates/HarvardTemplate";
import { PDFDownloadButton } from "@/components/pdf/PDFDownloadButton";

interface ResumePreviewProps {
  resumeData: ResumeData;
}

export function ResumePreview({ resumeData }: ResumePreviewProps) {
  return (
    <div className="w-full bg-white border-l border-gray-200">
      <div className="sticky top-0 bg-white border-b border-gray-200 p-3 sm:p-4 flex items-center justify-between z-10">
        <h2 className="text-base sm:text-lg font-semibold flex items-center gap-2">
          <Eye size={18} className="sm:w-5 sm:h-5" />
          <span className="hidden sm:inline">Resume Preview</span>
          <span className="sm:hidden">Preview</span>
        </h2>
        <div className="flex items-center gap-2">
          <PDFDownloadButton resumeData={resumeData} />
        </div>
      </div>

      <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto h-full">
        <HarvardTemplate resumeData={resumeData} />
      </div>
    </div>
  );
}
