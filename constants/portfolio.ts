export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
  label: string;
}

export interface SkillItem {
  name: string;
  category: "languages" | "frontend" | "backend" | "desktop" | "mobile" | "databases" | "ai" | "tools" | "architecture";
  level: "CORE" | "WORKING KNOWLEDGE" | "EXPLORING";
  description?: string;
  featured?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  description: string;
  problemSolved: string;
  keyFeatures: string[];
  technologies: string[];
  status: "Recently Deployed" | "In Active Development" | "Prototype" | "Architecture & Research" | "Completed" | "Exploring";
  architectureNote?: string;
  github?: string | null;
  demo?: string | null;
  image?: string;
  featured: boolean;
  highlightBadge?: string;
}

export interface PhilosophyStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  status: string;
  description?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  isPlaceholder: boolean;
  summary: string;
  highlights: string[];
}

export const PERSONAL_INFO = {
  name: "Kasongo Badinga Exaucé Moise",
  shortName: "Exaucé Kass",
  digitalIdentity: "BuildinCode",
  githubUsername: "Saimperfile80",
  primaryTitle: "Software Developer | AI Enthusiast | Full-Stack Developer | Product Builder",
  positioning: "Software Developer passionate about Artificial Intelligence, Web Applications, Desktop Applications and practical technology solutions for Africa.",
  slogan: "I build web, desktop and AI-powered applications that turn real-world problems into useful software.",
  secondarySlogan: "Building technology that solves real problems.",
  about: "I am a software developer passionate about building practical technology. My work spans web applications, desktop software, artificial intelligence, automation and digital products. I enjoy taking an idea from problem discovery and architecture to implementation and deployment.",
  profileImages: {
    front: "/profile/profile-front.jpeg",
    back: "/profile/profile-back.jpeg",
  },
  bioParagraphs: [
    "I am a software developer passionate about building practical technology. My work spans web applications, desktop software, artificial intelligence, automation and digital products.",
    "I enjoy taking an idea from problem discovery and architecture to implementation and deployment, creating maintainable systems built for tangible impact.",
    "My current work focuses on local-first AI architectures, voice interfaces (Whisper + Qwen + FastMCP), business software, and robust web/desktop solutions tailored for African and global use cases."
  ],
  interests: [
    "Artificial Intelligence & Local LLMs",
    "Voice AI & FastMCP Tooling",
    "Web Platforms (Laravel, Symfony, FastAPI, Rails)",
    "Frontend & React 19 Ecosystem",
    "Desktop Engineering (C# .NET, WPF, Electron, Tauri, PyQt6)",
    "Mobile Development (Flutter & Dart)",
    "Cloud & Backend Databases (Supabase, PostgreSQL, MySQL, SQLite)",
    "African Technology Solutions & Practical Impact"
  ],
  contact: {
    email: "kassexauce@gmail.com",
    emailPlaceholder: "kassexauce@gmail.com",
    github: "https://github.com/Saimperfile80",
    linkedin: "https://linkedin.com", // [YOUR LINKEDIN]
    linkedinPlaceholder: "[YOUR LINKEDIN]",
    location: "Kolwezi, Democratic Republic of the Congo",
    cvLink: "#contact",
  }
};

export const HERO_DATA = {
  badge: "BUILDINCODE // SOFTWARE & AI SYSTEMS",
  headline: "EXAUCÉ KASS",
  roleTitles: [
    "SOFTWARE DEVELOPER",
    "AI ENTHUSIAST",
    "PRODUCT BUILDER"
  ],
  description: "I build web, desktop and AI-powered applications that turn real-world problems into useful software.",
  secondaryDescription: "From deployed web platforms and business ERPs to local AI voice assistants, I engineer functional software end-to-end.",
  cta: {
    primary: "View Projects",
    secondary: "Building with AI",
    github: "View GitHub",
    contact: "Contact Me",
    downloadCV: "Download CV"
  }
};

export const PHILOSOPHY_STEPS: PhilosophyStep[] = [
  {
    number: "01",
    title: "Understand",
    tagline: "Understand the real problem.",
    description: "Deeply analyze domain workflows, user constraints, and operational bottlenecks before writing a line of code.",
    icon: "search"
  },
  {
    number: "02",
    title: "Design",
    tagline: "Design the architecture and experience.",
    description: "Structure resilient data schemas, API contracts, local-first protocols, and intuitive user experiences.",
    icon: "cube"
  },
  {
    number: "03",
    title: "Build",
    tagline: "Build clean and maintainable software.",
    description: "Develop scalable code using robust engineering patterns (MVC, MVVM, REST, FastMCP) with strong type safety.",
    icon: "code"
  },
  {
    number: "04",
    title: "Deploy",
    tagline: "Turn software into something people can actually use.",
    description: "Ship working software into production environments, configure hosting, CI/CD, database migrations and live domains.",
    icon: "rocket"
  },
  {
    number: "05",
    title: "Improve",
    tagline: "Iterate based on feedback and real-world usage.",
    description: "Continuously refine performance, optimize latency, fix edge cases, and adapt software based on actual operational data.",
    icon: "refresh"
  }
];

export const TECH_CATEGORIES = [
  {
    id: "languages",
    title: "PROGRAMMING LANGUAGES",
    description: "Core languages used across web platforms, desktop software, data science and AI tooling.",
    skills: [
      { name: "PHP", level: "CORE" },
      { name: "Python", level: "CORE" },
      { name: "JavaScript", level: "CORE" },
      { name: "TypeScript", level: "CORE" },
      { name: "C#", level: "CORE" },
      { name: "SQL", level: "CORE" },
      { name: "HTML5 / CSS3", level: "CORE" },
      { name: "Dart", level: "WORKING KNOWLEDGE" },
      { name: "Ruby", level: "WORKING KNOWLEDGE" },
    ]
  },
  {
    id: "frontend",
    title: "FRONTEND DEVELOPMENT",
    description: "Modern, responsive, high-performance UI engineering with React 19, TypeScript and modern tooling.",
    skills: [
      { name: "React 19", level: "CORE" },
      { name: "TypeScript", level: "CORE" },
      { name: "Tailwind CSS", level: "CORE" },
      { name: "Vite", level: "CORE" },
      { name: "Next.js", level: "WORKING KNOWLEDGE" },
      { name: "Vue.js", level: "WORKING KNOWLEDGE" },
      { name: "Angular", level: "EXPLORING" },
    ]
  },
  {
    id: "backend",
    title: "BACKEND & APIS",
    description: "Scalable backend services, robust REST APIs, authentication and relational business architectures.",
    skills: [
      { name: "Laravel", level: "CORE" },
      { name: "Symfony", level: "WORKING KNOWLEDGE" },
      { name: "FastAPI", level: "CORE" },
      { name: "Ruby on Rails", level: "WORKING KNOWLEDGE" },
      { name: "Node.js / Express", level: "WORKING KNOWLEDGE" },
      { name: "REST APIs & JWT", level: "CORE" },
    ]
  },
  {
    id: "desktop",
    title: "DESKTOP & SYSTEMS",
    description: "Native Windows utilities, multiplatform desktop applications and hardware/printer diagnostics.",
    skills: [
      { name: "C# / .NET", level: "CORE" },
      { name: "WPF & XAML", level: "CORE" },
      { name: "MVVM Architecture", level: "CORE" },
      { name: "Electron", level: "CORE" },
      { name: "PyQt6 / PySide6", level: "CORE" },
      { name: "Tauri", level: "WORKING KNOWLEDGE" },
    ]
  },
  {
    id: "mobile",
    title: "MOBILE DEVELOPMENT",
    description: "Cross-platform mobile applications engineered for fluid UX and localized network realities.",
    skills: [
      { name: "Flutter", level: "WORKING KNOWLEDGE" },
      { name: "Dart", level: "WORKING KNOWLEDGE" },
      { name: "Cross-Platform UI", level: "WORKING KNOWLEDGE" },
    ]
  },
  {
    id: "databases",
    title: "DATABASES & CLOUD",
    description: "Relational data modeling, SQL queries, offline-first SQLite and modern cloud backends.",
    skills: [
      { name: "SQLite / better-sqlite3", level: "CORE" },
      { name: "MySQL", level: "CORE" },
      { name: "PostgreSQL", level: "WORKING KNOWLEDGE" },
      { name: "Supabase", level: "WORKING KNOWLEDGE" },
      { name: "Relational Data Modeling", level: "CORE" },
    ]
  },
  {
    id: "ai",
    title: "ARTIFICIAL INTELLIGENCE & AGENTS",
    description: "Local-first AI architectures, quantized open LLMs, voice recognition, and FastMCP tooling.",
    skills: [
      { name: "Local LLM Architecture", level: "CORE" },
      { name: "AI Agents & FastMCP", level: "CORE" },
      { name: "Qwen / Qwen 2.5 / Qwen3", level: "CORE" },
      { name: "Whisper (Speech-to-Text)", level: "WORKING KNOWLEDGE" },
      { name: "Text-to-Speech (TTS)", level: "WORKING KNOWLEDGE" },
      { name: "Prompt Engineering", level: "CORE" },
      { name: "AI Orchestration", level: "WORKING KNOWLEDGE" },
      { name: "Scientific AI (PyTorch/Scikit)", level: "WORKING KNOWLEDGE" },
    ]
  },
  {
    id: "tools",
    title: "TOOLS & ENVIRONMENT",
    description: "Engineering workflow, version control, and development environments.",
    skills: [
      { name: "Git & GitHub", level: "CORE" },
      { name: "VS Code / PyCharm", level: "CORE" },
      { name: "Cursor / OpenCode", level: "WORKING KNOWLEDGE" },
      { name: "Linux / Windows", level: "CORE" },
      { name: "Docker", level: "EXPLORING" },
    ]
  },
  {
    id: "architecture",
    title: "ARCHITECTURE & ENGINEERING",
    description: "System design patterns for maintainable, reliable software solutions.",
    skills: [
      { name: "REST API & MVC", level: "CORE" },
      { name: "MVVM Desktop Pattern", level: "CORE" },
      { name: "Local-First Architecture", level: "CORE" },
      { name: "Authentication / RBAC", level: "CORE" },
      { name: "SNMP & IPP Protocols", level: "WORKING KNOWLEDGE" },
    ]
  }
];

export const SKILL_LEVELS = [
  {
    name: "CORE",
    badgeColor: "border-purple-500/50 bg-purple-500/10 text-purple-300",
    description: "Technologies used regularly to build production systems."
  },
  {
    name: "WORKING KNOWLEDGE",
    badgeColor: "border-cyan-500/50 bg-cyan-500/10 text-cyan-300",
    description: "Technologies used to build and integrate features."
  },
  {
    name: "EXPLORING",
    badgeColor: "border-amber-500/50 bg-amber-500/10 text-amber-300",
    description: "Technologies actively being deepened and researched."
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "needs",
    title: "NEEDS",
    subtitle: "AI-First Local Discovery & Assistance Platform",
    category: "AI / Local Services / Product / Web",
    description: "An AI-powered assistant designed to help users discover and access useful local services, products, places and solutions with real African use cases in mind.",
    problemSolved: "Finding trustworthy local service providers (computer repairers, mechanics, restaurants, artisans, transport routes) is fragmented. NEEDS provides an AI-first conversational discovery layer.",
    keyFeatures: [
      "Conversational AI assistant for natural language requests",
      "Intent recognition and multi-criteria local search",
      "Provider recommendation engine for local African use cases",
      "Responsive web and mobile interface",
      "Local-first architecture roadmap for resilient connectivity"
    ],
    technologies: ["AI Assistant", "Intent Recognition", "FastAPI", "React", "Local Search", "Conversational UI"],
    status: "In Active Development",
    highlightBadge: "AI Flagship",
    featured: true
  },
  {
    id: "243mlm-academy",
    title: "243MLM Academy",
    subtitle: "Online Training & Community Platform",
    category: "Web Application / Education / MLM Academy",
    description: "A digital educational and community platform designed for an MLM-focused academy, delivering structured training modules, user workflows and community empowerment.",
    problemSolved: "Modernizing member education, onboarding, and training management through an interactive, live web platform.",
    keyFeatures: [
      "Structured learning modules and training dashboard",
      "User authentication and membership workflow",
      "Responsive, clean modern user interface",
      "Active production deployment on custom domain",
      "Optimized for high-speed mobile and desktop access"
    ],
    technologies: ["Web Platform", "Frontend UI", "Authentication", "User Management", "Production Deployment"],
    status: "Recently Deployed",
    demo: "https://www.243mlm-academy.online/",
    highlightBadge: "Live & Deployed",
    featured: true
  },
  {
    id: "needs-voice",
    title: "NEEDS Voice / Voicebox",
    subtitle: "Local-First Voice AI Architecture",
    category: "Voice AI / Local LLM / Desktop / API",
    description: "Exploring a local-first voice AI architecture combining speech recognition, local quantized language models and voice synthesis without mandatory cloud reliance.",
    problemSolved: "Eliminating cloud API latency, recurring token fees, and internet reliance through an offline-ready pipeline: Local AI → Voice → Intent → Action.",
    keyFeatures: [
      "Speech-to-Text integration using Whisper",
      "Local LLM reasoning via Qwen models",
      "Text-to-Speech audio feedback loop",
      "FastMCP tool integration to execute system actions",
      "Cross-platform desktop integration with Tauri & React"
    ],
    technologies: ["FastAPI", "React", "Tauri", "SQLite", "Qwen", "Whisper", "TTS / STT", "FastMCP", "Local LLM"],
    status: "Architecture & Research",
    architectureNote: "USER → VOICE/TEXT → INTENT → LLM → TOOLS → ACTION",
    highlightBadge: "Local Voice AI",
    featured: true
  },
  {
    id: "metalledger-ai",
    title: "MetalLedger AI",
    subtitle: "Centralization & Analytics for Mining Operations",
    category: "AI / Mining / Industrial Software",
    description: "An AI-assisted centralization and analysis platform designed for mining and metallurgical operations to consolidate data across extraction and processing stages.",
    problemSolved: "Mining operations generate fragmented data across geology, scales, conveyors, crushers, flotation, and furnaces. MetalLedger AI unifies operational metrics for decision support.",
    keyFeatures: [
      "Laboratory & geological assay tracking (Cu, Co, Zn, Fe grades & recovery)",
      "Production flow monitoring (scales, crushers, flotation, furnaces)",
      "Tonnage monitoring and metallurgical balance accounting",
      "AI-assisted anomaly detection and decision support prototypes",
      "Centralized operational dashboards"
    ],
    technologies: ["Industrial Info Systems", "Data Centralization", "Analytics", "AI Decision Support", "Python", "SQL"],
    status: "Prototype",
    highlightBadge: "Industrial Tech",
    featured: true
  },
  {
    id: "printer-toolkit",
    title: "Printer Toolkit",
    subtitle: "Windows Network Printer Diagnostics & Management",
    category: "Desktop / Windows / System Utility",
    description: "A Windows desktop utility designed to discover, diagnose, monitor and manage network printers across enterprise environments.",
    problemSolved: "IT administrators often face complex diagnostics across multi-brand printer fleets. Printer Toolkit delivers unified discovery and diagnostics.",
    keyFeatures: [
      "Automatic subnet printer discovery and IP detection",
      "Real-time printer monitoring using SNMP and IPP protocols",
      "Brand-specific diagnostics (HP, Canon, Brother)",
      "Consumable levels, error code inspection, and queue management",
      "Local SQLite caching for fleet history"
    ],
    technologies: ["C#", ".NET", "WPF", "MVVM", "SQLite", "SNMP", "IPP"],
    status: "In Active Development",
    highlightBadge: "Native Windows",
    featured: true
  },
  {
    id: "classic-coach",
    title: "Classic Coach",
    subtitle: "Transportation Ticketing & Agency Management Platform",
    category: "Transportation / Web Application / Business Software",
    description: "A transport ticketing and multi-agency management platform designed to modernize bus seat reservations, fleet scheduling, and agency transactions.",
    problemSolved: "Replaces manual paper ticketing and overbooking with real-time seat inventory, passenger manifests, and agency reporting.",
    keyFeatures: [
      "Role-based access: Client, Guichetier, Administrateur, Chef d'agence, Taxi-bus",
      "Real-time seat reservation engine and departure timetables",
      "Agency-level revenue tracking and manifest generation",
      "Planned mobile money integration architecture (Airtel Money, M-Pesa, Orange Money)",
      "Inquiry chatbot support concept"
    ],
    technologies: ["Laravel", "PHP", "JavaScript", "SQL", "REST APIs", "RBAC"],
    github: "https://github.com/Saimperfile80/Appbilletterie",
    status: "In Active Development",
    highlightBadge: "Business Platform",
    featured: true
  },
  {
    id: "my-school-erp",
    title: "My School ERP & Desktop Suite",
    subtitle: "Academic & Administrative Management System",
    category: "Education / ERP / Desktop & Web",
    description: "A desktop and web school management platform engineered to centralize academic records, student registrations, fee tracking, and administration.",
    problemSolved: "Educational institutions require unified administrative suites that run fast locally while staying synchronized via secure APIs.",
    keyFeatures: [
      "Student registration, attendance and academic gradebook",
      "Tuition ledger and fee payment status tracking",
      "Cross-platform desktop client built with React 19 and Electron",
      "Modular PHP / REST API backend communicating with SQL database",
      "Role-based dashboards for administrators and teachers"
    ],
    technologies: ["React 19", "Vite", "Electron", "PHP API", "SQL", "Tailwind CSS"],
    github: "https://github.com/Saimperfile80/My_school_Desktop",
    status: "In Active Development",
    highlightBadge: "EdTech ERP",
    featured: true
  },
  {
    id: "hydroai",
    title: "HydroAI / Hydroapp",
    subtitle: "Hydrogeological Modelling & Scientific Computing",
    category: "Scientific Computing / Desktop / AI",
    description: "A desktop software exploring computational methods, spatial rasters, and numerical modelling for hydrogeological analysis and groundwater flow simulation.",
    problemSolved: "Provides accessible computational tooling for geoscience analysis, raster processing, and numerical simulations without proprietary suites.",
    keyFeatures: [
      "Numerical simulation pipelines powered by SciPy, NumPy, and Pandas",
      "Geospatial raster & vector processing (GeoPandas, Shapely, Rasterio, GDAL)",
      "Interactive data plotting with Matplotlib and Plotly",
      "Native desktop graphical interface developed in Python (PyQt6)",
      "Exploration of Finite Element Method (FEM) and ML parameter estimation"
    ],
    technologies: ["Python", "PyQt6", "GeoPandas", "Rasterio", "SciPy", "PyTorch / ML", "Numerical Modelling"],
    github: "https://github.com/Saimperfile80/Hydroapp",
    status: "Prototype",
    highlightBadge: "Scientific AI",
    featured: true
  }
];

export const MORE_PROJECTS: ProjectItem[] = [
  {
    id: "hostelia-project",
    title: "Hostelia Management Suite",
    category: "Hospitality ERP / Desktop & Web",
    description: "A desktop management suite for hotel operations, guest booking, automated PDF invoicing, analytics charts and SQLite local data persistence.",
    problemSolved: "Streamlining hotel check-ins, room inventory, billing invoices, and financial summaries.",
    keyFeatures: ["React 19 & Tailwind CSS UI", "Electron desktop wrapper", "better-sqlite3 local DB", "jsPDF automated invoice generator"],
    technologies: ["React 19", "Electron", "Vite", "Tailwind CSS", "better-sqlite3", "Recharts", "jsPDF"],
    github: "https://github.com/Saimperfile80/Hostelia_Project",
    status: "In Active Development",
    featured: false
  },
  {
    id: "royal-horizon-rails",
    title: "Royal Horizon & Microservices",
    category: "Web & Microservices / Ruby on Rails",
    description: "A modern backend web service engineered with Ruby on Rails 8 and PostgreSQL, showcasing secure authentication, relational modeling, and API endpoints.",
    problemSolved: "Structuring lightweight, maintainable MVC and API microservices with Ruby on Rails.",
    keyFeatures: ["Ruby on Rails 8 architecture", "PostgreSQL database integration", "Bcrypt secure authentication", "Modern asset pipeline"],
    technologies: ["Ruby", "Ruby on Rails 8", "PostgreSQL", "Puma", "Bcrypt"],
    github: "https://github.com/Saimperfile80/royal_horizon",
    status: "Completed",
    featured: false
  },
  {
    id: "edu-eval-app",
    title: "Edu-Eval Platform",
    category: "Education / Next.js / TypeScript",
    description: "Educational evaluation and assessment platform structured with Next.js and TypeScript for student evaluation and academic data reporting.",
    problemSolved: "Standardizing academic evaluations and exam reporting through structured modern web forms.",
    keyFeatures: ["Next.js React architecture", "TypeScript type-safety", "Modular component design"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Saimperfile80/edu-eval-app",
    status: "Completed",
    featured: false
  },
  {
    id: "social-network-api",
    title: "Social Network API & Test Suite",
    category: "Backend API / Node.js",
    description: "A RESTful API built with Node.js and JavaScript featuring automated database migrations, unit testing (Jest), and integration testing suites (Mocha/NYC).",
    problemSolved: "Providing robust API endpoints with test-driven coverage and automated database schema migrations.",
    keyFeatures: ["RESTful endpoints", "DB-migrate automated migrations", "Jest & Mocha test suites", "Coverage reporting"],
    technologies: ["Node.js", "JavaScript", "Jest", "Mocha", "DB-Migrate"],
    github: "https://github.com/Saimperfile80/social_network_api",
    status: "Completed",
    featured: false
  },
  {
    id: "usb-repair-tool",
    title: "USB Repair & Diagnostics Utility",
    category: "System Utility / Diagnostic Tool",
    description: "A diagnostic tool and utility interface designed to inspect, repair, and recover storage drives and corrupted USB volumes.",
    problemSolved: "Automating disk repair commands and volume recovery for corrupted flash drives.",
    keyFeatures: ["Volume health diagnostics", "Automated recovery scripts", "System partition analysis"],
    technologies: ["HTML/JS Interface", "System Shell Scripts", "Disk Diagnostics"],
    github: "https://github.com/Saimperfile80/Usb_Repair_Tool",
    status: "Completed",
    featured: false
  },
  {
    id: "fastmcp-servers",
    title: "Custom FastMCP Tool Servers",
    category: "AI Infrastructure / Model Context Protocol",
    description: "Experimental FastMCP servers bridging local language models (Qwen) with local filesystems, SQLite databases, and printer diagnostics.",
    problemSolved: "Empowering AI models to execute deterministic local tools safely via the Model Context Protocol.",
    keyFeatures: ["MCP Protocol compliance", "FastAPI Python tool definitions", "Tool schema execution"],
    technologies: ["Python", "FastMCP", "MCP Standard", "FastAPI", "SQLite"],
    status: "Exploring",
    featured: false
  }
];

export const AI_PIPELINE_STEPS = [
  {
    step: "01",
    title: "USER",
    subtitle: "Human Input",
    desc: "Voice command, natural language prompt, or sensory trigger from client devices."
  },
  {
    step: "02",
    title: "TEXT / VOICE",
    subtitle: "STT & Ingestion",
    desc: "Whisper speech-to-text processing or text streaming with low latency."
  },
  {
    step: "03",
    title: "INTENT",
    subtitle: "Semantic Parsing",
    desc: "Intent recognition, slot extraction, context routing and safety filtering."
  },
  {
    step: "04",
    title: "AI / LLM",
    subtitle: "Reasoning Core",
    desc: "Local models (Qwen, Qwen 2.5, Qwen3) or hybrid cloud models orchestrating responses."
  },
  {
    step: "05",
    title: "TOOLS / MCP",
    subtitle: "Protocol Layer",
    desc: "Model Context Protocol & FastMCP servers connecting to databases, APIs and printers."
  },
  {
    step: "06",
    title: "REAL ACTION",
    subtitle: "Execution & Feedback",
    desc: "Database mutation, ticket generation, printer command, or synthesized audio response."
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Bac+4 — Informatique / Génie Logiciel",
    field: "Software Engineering & Computer Science",
    institution: "Université de Kolwezi (UNIKOL)",
    location: "Kolwezi, DR Congo",
    status: "Completed / Graduate",
    description: "Curriculum focused on software architecture, algorithms, database design, object-oriented programming, network systems, and software engineering methodologies."
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Software Developer & Product Builder",
    company: "BuildinCode (Independent Projects & Production Systems)",
    period: "Ongoing",
    location: "Kolwezi, DR Congo",
    isPlaceholder: false,
    summary: "Engineering end-to-end digital solutions from problem analysis to functional software products across web, desktop, and AI domains.",
    highlights: [
      "Deployed 243MLM Academy (https://www.243mlm-academy.online/) — online educational & community platform.",
      "Architecting NEEDS: an AI-first conversational discovery platform tailored for African use cases.",
      "Developing native desktop suites: Printer Toolkit (C#/.NET/WPF), Hostelia (React 19/Electron/SQLite), and HydroAI (Python/PyQt6).",
      "Building backend services and REST APIs with Laravel, Symfony, FastAPI, and Ruby on Rails."
    ]
  },
  {
    role: "Software Developer",
    company: "[ADD COMPANY / ORGANISATION]",
    period: "[ADD DATE / CURRENT]",
    location: "Kolwezi, DR Congo",
    isPlaceholder: true,
    summary: "Designing, building and maintaining web systems, desktop applications and software tooling with a focus on real-world impact and reliability.",
    highlights: [
      "Developing web platforms and REST APIs using Laravel, Symfony, FastAPI, and modern frontend frameworks.",
      "Building desktop utilities for Windows using C#, .NET, WPF, and MVVM architecture.",
      "Architecting local AI solutions, voice interfaces, and intelligent automation pipelines.",
      "Designing relational database schemas (MySQL, PostgreSQL, Supabase, SQLite) and optimizing data workflows."
    ]
  }
];

export const NAV_LINKS = [
  {
    title: "About",
    link: "#about-me",
  },
  {
    title: "How I Build",
    link: "#philosophy",
  },
  {
    title: "Tech Stack",
    link: "#skills",
  },
  {
    title: "Building with AI",
    link: "#ai-architecture",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Background",
    link: "#background",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    label: "github.com/Saimperfile80",
    link: "https://github.com/Saimperfile80",
  },
  {
    name: "LinkedIn",
    label: "linkedin.com",
    link: "https://linkedin.com",
  },
  {
    name: "Email",
    label: "kass.exauce@example.com",
    link: "mailto:kass.exauce@example.com",
  }
] as const;
