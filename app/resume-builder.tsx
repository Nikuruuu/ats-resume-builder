"use client";

import { FormPanel } from "@/components/resume/FormPanel";
import { ResumePreview } from "@/components/resume/ResumePreview";
import { useResumeData } from "@/hooks/useResumeData";
import { useState } from "react";
import { Eye, FileEdit } from "lucide-react";

export default function ResumeBuilder() {
  const { resumeData, ...handlers } = useResumeData();
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-50">
      {/* Mobile Toggle Buttons */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 z-50 flex gap-2">
        <button
          onClick={() => setShowPreview(false)}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-md transition-colors ${
            !showPreview
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          <FileEdit size={18} />
          <span className="font-medium">Edit</span>
        </button>
        <button
          onClick={() => setShowPreview(true)}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-md transition-colors ${
            showPreview ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          <Eye size={18} />
          <span className="font-medium">Preview</span>
        </button>
      </div>

      {/* Form Panel - Hidden on mobile when preview is shown */}
      <div
        className={`${
          showPreview ? "hidden lg:flex" : "flex"
        } lg:w-1/2 w-full h-full pb-16 lg:pb-0`}
      >
        <FormPanel resumeData={resumeData} handlers={handlers} />
      </div>

      {/* Preview Panel - Hidden on mobile when form is shown */}
      <div
        className={`${
          showPreview ? "flex" : "hidden lg:flex"
        } lg:w-1/2 w-full h-full pb-16 lg:pb-0`}
      >
        <ResumePreview resumeData={resumeData} />
      </div>
    </div>
  );
}
