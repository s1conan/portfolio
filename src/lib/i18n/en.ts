import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "DEV_ARCHITECT // Senior Frontend Engineer",
    description:
      "Industrial-grade frontend engineering for startups. Unbreakable architecture. Maximum conversion vectors.",
  },
  site: {
    role: "Senior Frontend Engineer",
    statusBadge: "SYS.STATUS: ONLINE",
    heroHeadlineTop: "FAST",
    heroHeadlineHighlight: "OUTLASTS",
    heroHeadlineBottom: "FIRST-CLASS",
    heroTagline:
      "I build fast, reliable websites and web apps for startups that will last but can't afford to look cheap.",
    navLinks: [
      { label: "PROJECTS", href: "#projects" },
      { label: "SKILLS", href: "#skills" },
      { label: "SERVICES", href: "#services" },
      { label: "ABOUT", href: "#about" },
      { label: "TESTIMONIALS", href: "#benchmarks" },
    ],
  },
  cta: {
    consultation: "EXECUTE CONSULTATION",
    accessLogs: "ACCESS LOGS",
    secureLink: "INITIALIZE SECURE LINK",
  },
  about: {
    location: "Palembang, Indonesia",
    experience: "5+ Years",
    focus: "Full-Stack Web Dev",
    availability: "Open to Projects or Work",
    bio: "I build production-grade web applications with Next.js, TypeScript, and modern tooling. Focused on performance, clean architecture, and shipping fast.",
    labels: {
      location: "LOCATION",
      experience: "EXPERIENCE",
      focus: "FOCUS",
      availability: "AVAILABILITY",
    },
  },
  terminalLines: [
    "Next.js 16.2.10 (Turbopack)",
    "Compiled successfully in 2.5s",
    "Running TypeScript ...",
    "Ready in 2.7s",
  ],
  marqueeItems: [
    "HIGH PERFORMANCE",
    "ENTERPRISE-GRADE SECURITY",
    "SEO & ACCESSIBILITY OPTIMIZED",
    "PIXEL-PERFECT IMPLEMENTATION",
    "SCALABLE ARCHITECTURE",
    "ZERO-DOWNTIME DEPLOYMENTS",
    "CUSTOM TAILORED DESIGNS",
    "LIGHTNING-FAST LOAD TIMES",
  ],
  sectionHeadings: {
    projects: {
      index: "01",
      label: "TARGETS",
      titleTop: "DEPLOYED",
      titleBottom: "ASSETS",
    },
    skills: {
      index: "02",
      label: "CAPABILITIES",
      titleTop: "TECH",
      titleBottom: "STACK",
    },
    services: {
      index: "03",
      label: "BUILD TYPES",
      titleTop: "WHAT I",
      titleBottom: "BUILD",
    },
    certifications: {
      index: "04",
      label: "CREDENTIALS",
      titleTop: "VERIFIED",
      titleBottom: "EXPERTISE",
    },
    benchmarks: {
      index: "05",
      label: "METRICS",
      titleTop: "SOCIAL",
      titleBottom: "PROOF",
    },
    contact: {
      index: "06",
      label: "INQUIRY",
      titleTop: "REQUEST",
      titleBottom: "PROPOSAL",
    },
    about: {
      index: "07",
      label: "OPERATOR",
      titleTop: "SYSTEM",
      titleBottom: "PROFILE",
    },
  },
  projects: [
    {
      title: "Distribution Management System (DMS)",
      tagline: "Fuel Distribution ERP",
      role: "Full-Stack Architect & Lead Developer",
      objective:
        "Build a bilingual operational ERP for fuel distribution — full audit trail, inventory ledger, and document verification.",
      outcomes: [
        "EVENT-SOURCED INVENTORY LEDGER",
        "QR DOCUMENT VERIFICATION",
        "RBAC WITH ROW-LEVEL SECURITY",
        "AUTOMATED EMAIL DISTRIBUTION",
      ],
      imageAlt:
        "Distribution Management System — fuel distribution ERP interface",
    },
    {
      title: "Restaurant Web",
      tagline: "Dining and Reservation Platform",
      role: "Full-Stack Developer",
      objective:
        "Build a high-end, dark-mode restaurant website for a steakhouse and Italian dining concept with dynamic menu, promo slider, and bilingual support.",
      outcomes: [
        "DYNAMIC MENU WITH DAY-AVAILABILITY",
        "FRAMER MOTION HERO SLIDER",
        "BILINGUAL (EN/ID) WITH LOCALE ROUTING",
        "SUPABASE-DRIVEN CONTENT & MENU",
      ],
      imageAlt: "High-end restaurant website with dark industrial aesthetic",
    },
    {
      title: "Company Profile Platform",
      tagline: "Industrial Fuel Distributor",
      role: "Full-Stack Developer & UI Designer",
      objective:
        "Build a bilingual company profile website for an industrial fuel distributor with dark/light theme, motion animations, and a clean corporate design system.",
      outcomes: [
        "DUAL-THEME (DARK/LIGHT) WITH CSS CUSTOM PROPERTIES",
        "BILINGUAL (EN/ID) WITH LOCALE ROUTING",
        "FRAMER MOTION PAGE REVEALS",
        "FULLY RESPONSIVE CORPORATE DESIGN",
        "STATICALLY GENERATED PAGES",
      ],
      imageAlt: "Company profile for industrial fuel distributor",
    },
  ],
  services: [
    {
      id: "landing-pages",
      title: "LANDING PAGES",
      description: "High-conversion brand & campaign pages",
      items: [
        "SAAS PRODUCT LANDING",
        "STARTUP LAUNCH PAGE",
        "EVENT / CONFERENCE SITE",
        "PERSONAL BRAND SITE",
        "COMPANY PROFILE",
      ],
    },
    {
      id: "full-stack-apps",
      title: "FULL-STACK APPS",
      description: "End-to-end web application delivery",
      items: [
        "SAAS DASHBOARD",
        "ECOMMERCE STOREFRONT",
        "CONTENT PLATFORM",
        "API-DRIVEN WEB APP",
        "E-LEARNING APP",
      ],
    },
  ],
  benchmarks: [
    { metric: "PROJECTS", label: "SHIPPED TO PRODUCTION" },
    { metric: "UPTIME", label: "SLA ACHIEVED" },
    { metric: "LCP", label: "AVERAGE ON 4G" },
    { metric: "INP", label: "AVERAGE ON 4G" },
  ],
  testimonials: [
    '"Architected our entire frontend platform. We went from stalled to GA in 6 weeks."',
    '"No one else could fix our performance issues. He reduced LCP by 60%."',
  ],
  certifications: {
    issuedBy: "Issued by:",
  },
  contact: {
    fieldLabels: {
      name: "NAME_ID",
      email: "EMAIL_ADDR",
      company: "COMPANY_ORG",
      projectType: "PROJECT_TYPE",
      budget: "BUDGET_RANGE (USD)",
      details: "PROJECT_DETAILS",
    },
    placeholders: {
      name: "ENTER NAME",
      email: "ENTER EMAIL",
      company: "ENTER COMPANY",
      projectType: "SELECT MISSION TYPE",
      budget: "ENTER RANGE (USD)",
      details: "DESCRIBE MISSION PARAMETERS",
    },
    optionOther: "OTHER",
    submit: "SUBMIT PROPOSAL",
    submitting: "TRANSMITTING...",
    validation: {
      nameRequired: "NAME REQUIRED",
      invalidEmail: "INVALID EMAIL FORMAT",
    },
    messages: {
      invalid: "VALIDATION FAILED — CHECK HIGHLIGHTED FIELDS.",
      mailOffline: "MAIL SYSTEM OFFLINE — RESEND_API_KEY NOT CONFIGURED.",
      success: "PROPOSAL RECEIVED. RESPONSE ETA: 24H.",
      failurePrefix: "TRANSMISSION FAILED:",
    },
  },
  projectModal: {
    role: "ROLE",
    stack: "STACK",
    objective: "OBJECTIVE",
    output: "OUTPUT",
    scroll: "Scroll",
    close: "Close modal",
    previousImage: "Previous image",
    nextImage: "Next image",
    goToImage: "Go to image",
    closedTitle: "Project details",
  },
  aria: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
    startAutoScroll: "Start auto-scroll",
    stopAutoScroll: "Stop auto-scroll",
    viewProject: "View project",
    highlights: "Highlights",
    heroPreview: "Project preview",
    profilePhoto: "Profile photo",
  },
  footer: {
    rights: "ALL RIGHTS SECURED.",
  },
  language: {
    label: "Select language",
    switchToEnglish: "Switch language to English",
    switchToIndonesian: "Switch language to Indonesian",
  },
};
