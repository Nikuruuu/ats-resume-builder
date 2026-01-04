import ResumeBuilder from "./resume-builder";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-extrabold text-primary">
            Professional Resume Builder
          </h1>
          <p className="text-gray-600">Create your ATS friendly resume</p>
        </div>
      </header>
      <ResumeBuilder />
    </div>
  );
}
