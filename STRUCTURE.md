# 📁 Project Structure - Resume Builder

The resume builder has been refactored into a clean, modular architecture:

## 📂 Folder Structure

```
resume-builder/
├── app/
│   ├── resume-builder.tsx     # Main component (now only 40 lines!)
│   ├── page.tsx              # Next.js page
│   ├── layout.tsx            # Layout with metadata
│   └── print.css             # Print styles for PDF generation
├── components/
│   ├── resume/               # Resume-specific components
│   │   ├── PersonalInfoForm.tsx
│   │   ├── ObjectiveForm.tsx
│   │   ├── EducationForm.tsx
│   │   ├── ExperienceForm.tsx
│   │   ├── SkillsForm.tsx
│   │   ├── AdditionalSectionsForm.tsx
│   │   ├── FormPanel.tsx     # Left panel container
│   │   ├── ResumePreview.tsx # Right panel container
│   │   └── index.ts          # Export barrel
│   ├── templates/            # Resume templates
│   │   ├── HarvardTemplate.tsx
│   │   └── index.ts
│   └── ui/                   # Reusable UI components
│       ├── card.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       ├── button.tsx
│       └── form-field.tsx
├── hooks/
│   └── useResumeData.ts      # Custom hook for state management
├── types/
│   └── resume.ts             # TypeScript type definitions
└── lib/
    └── utils.ts              # Utility functions
```

## 🧩 Component Breakdown

### 🎯 **Main Components**

- **`ResumeBuilder`** - Main container (40 lines vs 800+ before)
- **`FormPanel`** - Left side form container
- **`ResumePreview`** - Right side preview container

### 📝 **Form Components**

- **`PersonalInfoForm`** - Name, email, phone, address, links
- **`ObjectiveForm`** - Professional objective section
- **`EducationForm`** - Dynamic education entries
- **`ExperienceForm`** - Dynamic work experience entries
- **`SkillsForm`** - Skill management with tags
- **`AdditionalSectionsForm`** - Certifications, languages, etc.

### 📄 **Template Components**

- **`HarvardTemplate`** - Harvard-style resume template
- Easily extensible for more templates

### 🎣 **Custom Hooks**

- **`useResumeData`** - Centralized state management for all resume data

### 🏷️ **Types**

- **`ResumeData`** - Main data structure
- **`Education`** - Education entry structure
- **`Experience`** - Work experience structure
- **`PersonalInfo`** - Personal information structure
- **`AdditionalSections`** - Additional sections structure

## ✨ Benefits of This Structure

1. **🧹 Clean Separation** - Each component has a single responsibility
2. **🔄 Reusability** - Components can be easily reused or swapped
3. **🛠️ Maintainability** - Easy to update individual sections
4. **📈 Scalability** - Easy to add new templates or form sections
5. **🔍 Debugging** - Easier to isolate and fix issues
6. **🧪 Testing** - Each component can be tested independently
7. **👥 Team Development** - Multiple developers can work on different components

## 🚀 Adding New Features

### Adding a New Resume Template:

1. Create `components/templates/ModernTemplate.tsx`
2. Export from `components/templates/index.ts`
3. Update `ResumePreview.tsx` to allow template selection

### Adding a New Form Section:

1. Create `components/resume/NewSectionForm.tsx`
2. Add to `FormPanel.tsx`
3. Update types in `types/resume.ts`
4. Update the custom hook in `hooks/useResumeData.ts`

### Adding a New Field:

1. Update the relevant type in `types/resume.ts`
2. Update the form component
3. Update the template component
4. Update the hook if needed

This modular structure makes the codebase much more maintainable and allows for easy feature additions!
