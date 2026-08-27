# ATS Resume Builder

Create an ATS-friendly, recruiter-ready resume with a clean split-screen editor, live preview, and polished print output.


🌐 **Live Demo:** [https://resume-builder.jeremiahdelacruz.com/](https://resume-builder.jeremiahdelacruz.com/)

## 🚀 Key Features

- **Split-screen resume workflow** with an editable form panel and live preview side by side on desktop
- **Mobile-friendly editing experience** with toggle buttons for switching between form and preview modes
- **ATS-focused Harvard-style template** designed for clean parsing and professional presentation
- **Dynamic resume sections** for personal info, objective, education, experience, skills, certifications, and references
- **Custom resume state management** powered by a centralized React hook for structured form updates
- **PDF/print-ready output** with dedicated print styles for clean resume export
- **Reusable component architecture** built with modular form, template, and UI components
- **Type-safe data model** using TypeScript interfaces for resume sections and entries

## 🛠️ Tech Stack

### Frontend
- Next.js 16
- React 19
- TypeScript
- Lucide React icons

### Styling
- Tailwind CSS v4
- tw-animate-css
- CSS variables and custom print styles
- shadcn/ui-style component architecture

### Dev Tools
- ESLint
- TypeScript compiler
- Turbopack for development and production builds
- Next.js App Router

### Backend / Database
- No backend or database layer is currently implemented
- This project is a client-side resume builder rendered through Next.js

## 📂 Project / Architecture Structure

```text
ats-resume-builder/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── print.css
│   └── resume-builder.tsx
├── components/
│   ├── pdf/
│   ├── resume/
│   ├── templates/
│   └── ui/
├── hooks/
│   └── useResumeData.ts
├── lib/
│   └── utils.ts
├── public/
├── types/
│   └── resume.ts
├── components.json
├── next.config.ts
├── package.json
└── tsconfig.json
```

## ⚙️ Getting Started / Local Setup

### Prerequisites

- **Node.js** 18.18+ recommended
- **npm**, **pnpm**, **yarn**, or **bun**
- No database required

### Step-by-step setup

1. Clone the repository:

```bash
git clone https://github.com/Nikuruuu/ats-resume-builder.git
cd ats-resume-builder
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:

```bash
cp .env.example .env.local
```

4. Add your local environment values:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

5. Start the development server:

```bash
npm run dev
```

6. Open the app in your browser:

```text
http://localhost:3000
```

### Build and production scripts

```bash
npm run build
npm run start
npm run lint
```

- `npm run dev` — start the local development server with Turbopack
- `npm run build` — create a production build
- `npm run start` — run the production server
- `npm run lint` — run ESLint

## 🔐 Environment Variables

```env
# App URL used for local development and deployment metadata
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Optional: add future integrations here
# NEXT_PUBLIC_*=
# API_*=
```
