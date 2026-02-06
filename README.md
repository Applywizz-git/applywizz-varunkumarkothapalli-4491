# Varun Kumar Kothapalli - AI/ML Engineer Portfolio

A cinematic, high-end portfolio website for an AI / Machine Learning Engineer built with modern web technologies.

## 🚀 Project Overview

This portfolio showcases the professional experience, projects, and skills of Varun Kumar Kothapalli, an AI/ML Engineer with 5+ years of experience designing, building, and operating production-ready machine learning systems.

## 🛠️ Tech Stack

- **React** + **Vite** - Fast, modern React development
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animations (3D hover, elastic, counters)
- **AOS.js** - Scroll reveal animations
- **Swiper.js** - Touch-enabled slider for projects
- **react-scroll** - Smooth scrolling navigation
- **Lucide React** - Beautiful, consistent icons
- **Canvas Confetti** - Celebration animations

## ✨ Features

### Design
- 🎨 Futuristic AI/ML themed design with glassmorphism
- 🌓 Dark/Light theme toggle
- 🎭 Cinematic preloader with sequential letter animation
- 🖼️ AI-generated hero and project images
- 📱 Fully responsive design

### Animations & Interactions
- 🎬 3D tilt effects on hover
- ⚡ Elastic animations on buttons
- 📊 Animated skill rings with counters
- 🔄 Flip card certifications with shimmer
- ↕️ Smooth parallax scrolling
- ✍️ Typewriter effect in hero section
- 🎉 Confetti on contact form submission

### Sections
1. **Header** - Sticky glass header with smooth scroll navigation
2. **Hero** - Two-column layout with profile photo and typewriter
3. **About** - Professional summary and core expertise areas
4. **Experience** - Timeline of professional experience
5. **Projects** - Swiper carousel with project details
6. **Skills** - Animated rings and categorized skills
7. **Certifications** - Flip cards with shimmer effect
8. **Education** - Education history with icons
9. **Contact** - Floating label form with validation
10. **Footer** - Social links and scroll-to-top FAB

## 📁 Folder Structure

```text
.
├── public/                # Static assets (images, PDF)
├── src/
│   ├── assets/            # Project-specific images
│   ├── components/        # React components (Section-based)
│   │   ├── ui/            # Reusable UI components (shadcn)
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   └── ...
│   ├── pages/             # Page layouts
│   ├── lib/               # Utility functions
│   ├── index.css          # Global styles & Tailwind layers
│   └── main.tsx           # Application entry point
├── package.json           # Project dependencies
├── tailwind.config.ts     # Tailwind configuration
└── vite.config.ts         # Vite configuration
```

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Gold | #FBC246 | Accents, highlights |
| Orange | #FE9135 | Primary actions, CTAs |
| Flame | #E05F1D | Gradients, borders |
| Rust | #B43E0E | Secondary elements |
| Crimson | #8F1A00 | Dark backgrounds |

## 🚦 Setup & Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Build for production**
   \`\`\`bash
   npm run build
   \`\`\`

## 🌓 Theme Switching

The portfolio supports dark and light themes:
- Click the sun/moon icon in the header to toggle
- Theme preference is saved to localStorage
- Defaults to system preference on first visit

## 📄 Resume Replacement Guide

To update the resume PDF:

1. Replace the file at `public/assets/resume.pdf` with your new resume
2. Keep the same filename or update the download link in `src/components/Hero.tsx`

## 📝 Content Updates

All content is stored in the respective component files:
- **Experience**: `src/components/Experience.tsx`
- **Projects**: `src/components/Projects.tsx`
- **Skills**: `src/components/Skills.tsx`
- **Certifications**: `src/components/Certifications.tsx`
- **Education**: `src/components/Education.tsx`
- **Contact Info**: `src/components/Contact.tsx`

## 📧 Contact

- **Email**: Varun88645@gmail.com
- **Phone**: +1 (314) 556-4833
- **Location**: Saint Louis, MO (Open to Relocate)

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion
