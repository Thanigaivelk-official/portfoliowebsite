# 🚀 Thanigaivel — Premium Software Developer Portfolio

A world-class personal portfolio web application built with **Next.js (App Router)**, **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Three.js / React Three Fiber**.

---

## 👨‍💻 Profile

- **Owner:** Thanigaivel K
- **Role:** Software Developer | IT Graduate
- **GitHub Repository:** [https://github.com/Thanigaivelk-official/portfoliowebsite](https://github.com/Thanigaivelk-official/portfoliowebsite)
- **LinkedIn:** [https://www.linkedin.com/in/thanigaivelk](https://www.linkedin.com/in/thanigaivelk)
- **Education:** MCA (CGPA 8.99, Annamalai University, 2021-2023) | BCA (CGPA 8.56, St. Joseph's College, 2018-2021)
- **Core Technologies:** Java, Python, PHP, JavaScript, SQL, MySQL, Oracle, React, Next.js, TypeScript

---

## 🎨 Design System & Palette

- **Dark Premium Interface:** `#0B1120`
- **Primary Brand:** `#4F46E5` (Indigo)
- **Secondary Brand:** `#7C3AED` (Violet)
- **Accent:** `#06B6D4` (Cyan)
- **Glassmorphism:** `rgba(255, 255, 255, 0.08)` cards with `backdrop-blur-xl`
- **Borders:** `rgba(255, 255, 255, 0.12)` subtle frosted borders
- **Typography:** Inter (Sans), Fira Code (Mono)

---

## 📂 Architecture & Directory Structure

```text
├── app/
│   ├── layout.tsx         # Root layout with fonts, OpenGraph, JSON-LD schema
│   ├── page.tsx           # Assembled single-page experience
│   ├── globals.css        # Tailwind directives, theme variables, scrollbar
│   ├── sitemap.ts         # Automated XML sitemap generation
│   └── robots.ts          # Crawl directives & sitemap location
│
├── components/
│   ├── Navbar.tsx         # Sticky glassmorphic navbar with active indicator & mobile drawer
│   ├── Hero.tsx           # Developer hero with animated typing role, bio & CTAs
│   ├── HeroWorkspace.tsx  # Interactive IDE simulator with code tabs & bash terminal
│   ├── HeroBackground3D.tsx # Three.js interactive particle constellation field
│   ├── About.tsx          # Authentic MCA background, values, animated statistics
│   ├── Skills.tsx         # Grouped skill matrix with qualitative proficiency levels
│   ├── Experience.tsx     # Development journey & academic projects timeline
│   ├── Projects.tsx       # 4 realistic engineering projects with 3D tilt cards
│   ├── Services.tsx       # 6 developer service offerings & deliverables
│   ├── Contact.tsx        # Validated contact form, direct email fallback & socials
│   ├── Footer.tsx         # Monogram, quick links, social channels & back-to-top
│   └── ui/
│       ├── GlassCard.tsx        # Frosted glass card with glow effects
│       ├── SectionHeading.tsx   # Consistent section titles & badges
│       ├── Button.tsx           # Multi-variant button & link component
│       ├── SkillBadge.tsx       # Qualitative skill badge (Learning/Familiar/Proficient)
│       ├── ProjectCard.tsx      # 3D interactive tilt project card
│       └── AnimatedCounter.tsx  # Smooth easeOutExpo scroll-triggered counter
│
├── lib/
│   ├── constants.ts       # Centralized content, projects, skills & metadata
│   ├── animations.ts      # Framer Motion animation variants & transitions
│   └── utils.ts           # Class merge utility (cn)
│
├── hooks/
│   ├── useMousePosition.ts  # Normalized mouse coordinate tracking
│   ├── useScrollProgress.ts # Scroll percentage & active section detection
│   └── useReducedMotion.ts  # Accessibility prefers-reduced-motion detection
│
└── public/
    ├── resume.pdf         # Official downloadable resume
    ├── images/
    └── icons/
```

---

## ⚡ Getting Started

### 1. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 2. Production Build
```bash
npm run build
npm run start
```

---

## ♿ Accessibility & Performance

- **WCAG AA Compliant:** Accessible contrast ratios, semantic HTML, visible keyboard focus rings, and explicit form labeling.
- **Reduced Motion Support:** Respects `prefers-reduced-motion` across Framer Motion and Three.js scenes.
- **Next.js App Router Optimization:** Server-first rendering with selective client boundaries for interactive components.
