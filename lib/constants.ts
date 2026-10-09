export interface NavItem {
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  level: "Learning" | "Familiar" | "Proficient";
  iconName?: string;
  category: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  badge: string;
  category: string;
  technologies: string[];
  description: string;
  features: string[];
  githubUrl: string;
  liveUrl: string;
  highlightText: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  deliverables: string[];
  icon: string;
}

export interface StatItem {
  numericValue: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel: string;
}

export const PERSONAL_INFO = {
  name: "Thanigaivel K",
  role: "Software Developer | IT Graduate",
  careerLevel: "MCA Graduate / Fresher",
  phone: "+91 9626753326",
  location: "Chennai, India",
  education: {
    mca: {
      degree: "Master of Computer Applications (MCA)",
      institution: "Annamalai University",
      period: "2021 – 2023",
      cgpa: "8.99",
      focus: "DSA, Data Analysis, Operating Systems, Mobile Computing, Data Mining",
    },
    bca: {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "St. Joseph's College of Arts & Science, Cuddalore | Thiruvalluvar University",
      period: "2018 – 2021",
      cgpa: "8.56",
    },
  },
  workExperience: {
    company: "Matrix Business Services India Pvt. Ltd., Chennai",
    period: "SEP 2024 – JAN 2026",
    role: "Executive – Academic Verification (Education Check)",
    description: "Working in a leading background verification (BGV) company specializing in academic verification.",
    responsibilities: [
      "Responsible for validating educational records, documents, and institutional authenticity.",
      "Ensuring accuracy, compliance, and timely completion of verification cases.",
      "Awarded Star Performer of the Month – July, recognizing high-quality output and performance.",
    ],
    award: "Star Performer of the Month – July",
  },
  heroRoles: [
    "Software Developer",
    "Java Developer",
    "Full Stack Developer",
    "Python & SQL Developer",
    "IT Graduate",
  ],
  heroBio:
    "Enthusiastic and analytical MCA graduate with hands-on experience in full-stack development and web technologies. Proficient in Java, Python, PHP, and SQL with a strong understanding of data structures, algorithms, and secure application development.",
  aboutParagraphs: [
    "Enthusiastic and analytical MCA graduate from Annamalai University (CGPA 8.99) with hands-on experience in full-stack development, software engineering, and web technologies.",
    "Proficient in Java, Python, PHP, and SQL with a strong understanding of data structures, algorithms, cryptographic methods (AES, Hashing), and secure application development.",
    "Known for quick learning, problem-solving, and delivering clean, efficient code. Seeking a software development role to contribute to impactful digital solutions.",
  ],
  socialLinks: {
    github: "https://github.com/Thanigaivelk-official",
    linkedin: "https://www.linkedin.com/in/thanigaivel-kannan-38328b24b?",
    youtube: "https://youtube.com/@thanigaivel-tech",
    email: "mailto:thanigaivelk.official@gmail.com",
    emailRaw: "thanigaivelk.official@gmail.com",
    phone: "tel:+919626753326",
    phoneRaw: "+91 9626753326",
  },
  resumePath: "/resume.pdf",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const STATS: StatItem[] = [
  {
    numericValue: 8.99,
    decimals: 2,
    suffix: "",
    label: "MCA CGPA",
    sublabel: "Annamalai University (2021-2023)",
  },
  {
    numericValue: 8.56,
    decimals: 2,
    suffix: "",
    label: "BCA CGPA",
    sublabel: "St. Joseph's College (2018-2021)",
  },
  {
    numericValue: 5,
    suffix: "★",
    label: "Star Performer",
    sublabel: "Matrix Business India (July) 2025",
  },
  {
    numericValue: 100,
    suffix: "%",
    label: "Dedication & Focus",
    sublabel: "Clean & Secure Engineering",
  },
];

export const CORE_SKILL_PILLS = [
  "Java",
  "Python",
  "PHP",
  "SQL",
  "MySQL",
  "Oracle",
  "JavaScript",
  "HTML5 / CSS3",
  "OOP & DSA",
  "AES & Hashing",
  "Eclipse JUNO & XAMPP",
  "NumPy",
  "Microsoft Excel",
  "Problem Solving",
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    description: "Core languages for building structured logic, secure algorithms & applications",
    skills: [
      { name: "Java", level: "Proficient", category: "Programming" },
      { name: "Python", level: "Proficient", category: "Programming" },
      { name: "PHP", level: "Proficient", category: "Programming" },
      { name: "JavaScript", level: "Proficient", category: "Programming" },
      { name: "HTML5 & CSS3", level: "Proficient", category: "Programming" },
    ],
  },
  {
    title: "Databases & RDBMS",
    description: "Relational database modeling, complex SQL queries, and DBMS administration",
    skills: [
      { name: "MySQL", level: "Proficient", category: "Databases" },
      { name: "Oracle Database", level: "Proficient", category: "Databases" },
      { name: "SQL Joins", level: "Proficient", category: "Databases" },
      { name: "DBMS / RDBMS", level: "Proficient", category: "Databases" },
      { name: "CRUD Operations", level: "Proficient", category: "Databases" },
    ],
  },
  {
    title: "Technical Concepts & Security",
    description: "Object-oriented design, algorithmic foundations, and cryptographic data protection",
    skills: [
      { name: "OOP (Object-Oriented Programming)", level: "Proficient", category: "Concepts" },
      { name: "Data Structures & Algorithms", level: "Proficient", category: "Concepts" },
      { name: "Cryptographic Methods (AES, Hashing)", level: "Proficient", category: "Concepts" },
      { name: "Data Deduplication", level: "Proficient", category: "Concepts" },
      { name: "Secure Application Development", level: "Proficient", category: "Concepts" },
    ],
  },
  {
    title: "Tools & Frameworks",
    description: "Development environments, numerical libraries, and deployment tools",
    skills: [
      { name: "Eclipse JUNO", level: "Proficient", category: "Tools" },
      { name: "XAMPP", level: "Proficient", category: "Tools" },
      { name: "NumPy", level: "Proficient", category: "Tools" },
      { name: "VS Code", level: "Proficient", category: "Tools" },
      { name: "Git & GitHub", level: "Proficient", category: "Tools" },
    ],
  },
  {
    title: "Data Analysis & Business Tools",
    description: "Data validation, analytical lookup formulas, and MIS reporting",
    skills: [
      { name: "VLOOKUP & XLOOKUP", level: "Proficient", category: "Data" },
      { name: "Pivot Tables", level: "Proficient", category: "Data" },
      { name: "MIS Reporting", level: "Proficient", category: "Data" },
      { name: "Data Validation & Conditional Formatting", level: "Proficient", category: "Data" },
      { name: "Data Analysis", level: "Proficient", category: "Data" },
    ],
  },
  {
    title: "Core Strengths",
    description: "Professional qualities and team collaboration traits",
    skills: [
      { name: "Problem-Solving", level: "Proficient", category: "Strengths" },
      { name: "Logical Thinking", level: "Proficient", category: "Strengths" },
      { name: "Quick Learning", level: "Proficient", category: "Strengths" },
      { name: "Team Collaboration", level: "Proficient", category: "Strengths" },
      { name: "Attention to Detail", level: "Proficient", category: "Strengths" },
    ],
  },
];

export const TIMELINE_JOURNEY = {
  workExperience: {
    company: "Matrix Business Services India Pvt. Ltd., Chennai",
    period: "SEP 2024 – JAN 2026",
    role: "Executive – Academic Verification (Education Check)",
    description:
      "Working in a leading background verification (BGV) company specializing in academic verification.",
    highlights: [
      "Responsible for validating educational records, documents, and institutional authenticity.",
      "Ensuring accuracy, compliance, and timely completion of verification cases.",
      "Awarded Star Performer of the Month – July 2025, recognizing high-quality output and performance.",
    ],
    award: "Awarded Star Performer of the Month – July",
  },
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Annamalai University",
      period: "2021 – 2023",
      grade: "CGPA: 8.99",
      description:
        "Focused on DSA, Data Analysis, Operating Systems, Mobile Computing, and Data Mining. Graduated with an exceptional CGPA of 8.99.",
      focusAreas: [
        "Data Structures & Algorithms (DSA)",
        "Data Analysis & Mining",
        "Operating Systems",
        "Mobile Computing",
        "Relational Database Systems",
        "Secure Application Architecture",
      ],
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "St. Joseph's College of Arts & Science, Cuddalore | Thiruvalluvar University",
      period: "2018 – 2021",
      grade: "CGPA: 8.56",
      description:
        "Comprehensive undergraduate degree in computer science fundamentals, programming languages, DBMS, and web technologies.",
      focusAreas: [
        "Programming in C / C++ / Java",
        "Database Management Systems (DBMS)",
        "Web Design & Scripting",
        "Software Engineering",
        "Computer Organization",
      ],
    },
  ],
  certifications: [
    { title: "Python", issuer: "Besant Technologies & Guvi Geek Networks" },
    { title: "SQL & JavaScript", issuer: "SkillUP (Simplilearn)" },
    { title: "PHP", issuer: "Great Learning" },
    { title: "Employment Training", issuer: "MagicBus India Foundation" },
  ],
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "secure-data-deduplication",
    title: "Secure Data Deduplication with Efficient Re-Encryption For Loan",
    badge: "Cloud Security & Java",
    category: "Software Development",
    technologies: ["Java", "MySQL", "AES Encryption", "Hashing", "Eclipse JUNO"],
    description:
      "Engineered a secure cloud-based resource-sharing system using Java and MySQL, applying AES encryption and cryptographic hashing to protect sensitive loan information while optimizing storage.",
    features: [
      "Engineered a secure cloud-based resource-sharing system using Java and MySQL",
      "Applied AES encryption and hashing to ensure data security and optimize storage usage",
      "Developed backend workflows for deduplication and re-encryption with improved efficiency",
      "Designed user-centered UI components to enhance accessibility",
      "Strict data integrity checks and transaction security guards",
    ],
    githubUrl: "https://github.com/Thanigaivelk-official/secure-data-deduplication-loan",
    liveUrl: "https://github.com/Thanigaivelk-official/secure-data-deduplication-loan",
    highlightText: "AES Encryption & Deduplication",
  },
  {
    id: "college-voting-system",
    title: "College Voting System",
    badge: "Full-Stack Web App",
    category: "Web Application",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "XAMPP"],
    description:
      "Created a functional web platform enabling secure and transparent online voting with authentication, vote validation, and real-time result computation.",
    features: [
      "Created a functional web platform enabling secure and transparent online voting",
      "Implemented authentication, vote validation, and result generation modules in PHP",
      "Designed an interactive and responsive interface using HTML, CSS & JavaScript",
      "Structured MySQL database schema ensuring one-vote-per-student integrity",
      "Real-time administrative dashboards for election auditing and tallies",
    ],
    githubUrl: "https://github.com/Thanigaivelk-official/college-voting-system",
    liveUrl: "https://github.com/Thanigaivelk-official/college-voting-system",
    highlightText: "PHP Authentication & Voting",
  },
  {
    id: "developer-portfolio",
    title: "Modern Developer Portfolio",
    badge: "Production Ready",
    category: "Frontend & Performance",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
    description:
      "A world-class, responsive developer portfolio showcasing verified education credentials, project highlights, and technical expertise.",
    features: [
      "Responsive design tested across mobile, tablet, and ultra-wide displays",
      "Modern dark glassmorphic UI with soft neon glows and fluid physics",
      "Interactive 3D Three.js particle constellation and IDE simulator",
      "Comprehensive SEO optimization, OpenGraph, JSON-LD, and accessibility compliance",
      "Targeting WCAG AA standards with prefers-reduced-motion support",
    ],
    githubUrl: "https://github.com/Thanigaivelk-official/portfoliowebsite",
    liveUrl: "https://thanigaivel.dev",
    highlightText: "Interactive 3D & Next.js",
  },
  {
    id: "data-analysis-automation",
    title: "Data Processing & MIS Automation Pipeline",
    badge: "Data & Automation",
    category: "Data Engineering",
    technologies: ["Python", "NumPy", "MySQL", "Excel Advanced", "Data Validation"],
    description:
      "Structured data workflows for automated academic and corporate verification, MIS reporting, and analytical data transformation.",
    features: [
      "Python scripts for data cleaning, sanitization, and structured transformation",
      "Direct MySQL database synchronization and query optimization",
      "Advanced Excel integration (VLOOKUP, XLOOKUP, Pivot Tables, Conditional Formatting)",
      "Automated verification pipeline reducing processing turnaround time",
      "Error detection algorithms with detailed logging and validation rules",
    ],
    githubUrl: "https://github.com/Thanigaivelk-official/data-processing-automation",
    liveUrl: "https://github.com/Thanigaivelk-official/data-processing-automation",
    highlightText: "Python & MIS Automation",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "software-dev",
    title: "Software & Java Development",
    shortDescription: "Building practical, secure software solutions in Java & Python.",
    detailedDescription:
      "Developing object-oriented desktop and enterprise software using Java and Python with clean architectural layers, robust exception handling, and database integration.",
    deliverables: [
      "Object-oriented system architecture",
      "Secure backend data workflows (AES, Hashing)",
      "Database connectivity (JDBC, MySQL, Oracle)",
      "Clean, maintainable, modular codebases",
    ],
    icon: "Cpu",
  },
  {
    id: "web-app-dev",
    title: "Web Application Development",
    shortDescription: "Developing dynamic web applications in PHP, JavaScript & React.",
    detailedDescription:
      "Translating requirements into full-stack web solutions with secure session management, responsive UI, and robust backend logic.",
    deliverables: [
      "Role-based authentication & authorization",
      "Full CRUD operations & transaction safety",
      "Responsive UI built with HTML5, CSS3, JavaScript",
      "Database schema integration & optimization",
    ],
    icon: "LayoutGrid",
  },
  {
    id: "database-dev",
    title: "Database Design & SQL Engineering",
    shortDescription: "Designing and integrating MySQL, Oracle, and relational databases.",
    detailedDescription:
      "Architecting normalized database schemas, authoring complex SQL queries with joins, and guaranteeing data integrity.",
    deliverables: [
      "Relational schema modeling (DBMS / RDBMS)",
      "Complex SQL joins, views, and queries",
      "Data integrity, keys & constraint enforcement",
      "Database indexing and query performance",
    ],
    icon: "Database",
  },
  {
    id: "frontend-dev",
    title: "Frontend Development",
    shortDescription: "Creating modern, responsive, accessible user interfaces.",
    detailedDescription:
      "Crafting pixel-perfect user experiences using modern HTML, CSS, JavaScript, and React with high visual polish and cross-device support.",
    deliverables: [
      "Fluid responsive design for all screen sizes",
      "Interactive micro-animations and user feedback",
      "WCAG AA accessibility compliance",
      "Clean UI component modularity",
    ],
    icon: "Monitor",
  },
  {
    id: "data-analysis-mis",
    title: "Data Analysis & MIS Reporting",
    shortDescription: "Data validation, analytical reporting, and Excel automation.",
    detailedDescription:
      "Organizing large datasets using advanced Excel formulas, pivot tables, and automated validation to generate actionable business intelligence.",
    deliverables: [
      "VLOOKUP, XLOOKUP & complex formula modeling",
      "Dynamic Pivot Tables & MIS summaries",
      "Data validation & conditional formatting",
      "Accuracy audits and compliance checks",
    ],
    icon: "Server",
  },
  {
    id: "system-security",
    title: "Application Security & Optimization",
    shortDescription: "Applying cryptographic methods, encryption, and optimization.",
    detailedDescription:
      "Implementing security best practices including AES encryption, hashing algorithms, input sanitization, and workflow efficiency.",
    deliverables: [
      "Cryptographic implementations (AES, SHA/MD5)",
      "Secure deduplication and data storage",
      "Input validation & defensive safeguards",
      "Performance optimization & logging",
    ],
    icon: "Zap",
  },
];
