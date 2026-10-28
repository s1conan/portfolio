import type {
  Certification,
  ProjectRecord,
  SiteConfig,
  SkillCategory,
} from "@/types";

/**
 * Locale-independent portfolio data.
 * User-facing copy lives in `src/lib/i18n/{en,id}.ts` — keep both in sync.
 */

export const siteConfig: SiteConfig = {
  name: "Cakra_Ariesa",
  email: "cakra.ariesa@gmail.com",
  socials: [
    {
      label: "[ LINKEDIN ]",
      href: "https://www.linkedin.com/in/cakra-ariesa/",
      brandColor: "#0A66C2",
    },
    {
      label: "[ Whatsapp ]",
      href: "http://wa.me/6281373431111",
      brandColor: "#25D366",
    },
  ],
};

export const aboutInfo = {
  profileImage: "/images/Cakra.png",
};

export const projectRecords: ProjectRecord[] = [
  {
    id: "ALPHA_01",
    stack: [
      "NEXT.JS 16",
      "TYPESCRIPT",
      "SUPABASE",
      "POSTGRES",
      "RADIX UI",
      "TIPTAP",
    ],
    images: ["/images/projects/nexus.jpg"],
    href: "#",
  },
  {
    id: "BETA_02",
    stack: [
      "NEXT.JS 16",
      "TYPESCRIPT",
      "SUPABASE",
      "FRAMER MOTION",
      "TAILWIND CSS",
    ],
    images: ["/images/projects/butcher.jpg"],
    href: "#",
  },
  {
    id: "GAMMA_03",
    stack: ["NEXT.JS 16", "TYPESCRIPT", "FRAMER MOTION", "TAILWIND CSS"],
    images: ["/images/projects/abs.jpg", "/images/projects/abs-2.jpg"],
    href: "#",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "FRONTEND",
    icon: "terminal",
    skills: [
      { name: "REACT / NEXT.JS 16", proficiency: "[++]" },
      { name: "TYPESCRIPT", proficiency: "[++]" },
      { name: "TAILWIND CSS", proficiency: "[++]" },
      { name: "FRAMER MOTION", proficiency: "[++]" },
    ],
  },
  {
    title: "BACKEND",
    icon: "server",
    skills: [
      { name: "SUPABASE", proficiency: "[++]" },
      { name: "POSTGRESQL", proficiency: "[++]" },
      { name: "ROW LEVEL SECURITY", proficiency: "[++]" },
      { name: "API ROUTES", proficiency: "[++]" },
    ],
  },
  {
    title: "TOOLS & LIBRARIES",
    icon: "settings",
    skills: [
      { name: "RADIX UI", proficiency: "[++]" },
      { name: "TIPTAP EDITOR", proficiency: "[++]" },
      { name: "RESEND EMAIL", proficiency: "[++]" },
      { name: "REACT-PDF / QR", proficiency: "[++]" },
    ],
  },
];

/** Values only; metrics and labels are localized. Order matches `benchmarks`. */
export const benchmarkValues = ["10+", "98.8%", "0.8S", "< 200 ms"];

export const certificationRecords: Certification[] = [
  {
    title: "Responsive Web Design Certificate",
    issuer: "freeCodeCamp",
    image: "/images/certs/responsive_web_design.png",
    imageAlt: "freeCodeCamp Responsive Web Design Certificate",
    href: "https://www.freecodecamp.org/certification/s1conan/responsive-web-design-v9",
  },
  {
    title: "Javasscript Certificate",
    issuer: "freeCodeCamp",
    image: "/images/certs/Javascript.png",
    imageAlt: "freeCodeCamp Javascript Certificate",
    href: "https://www.freecodecamp.org/certification/s1conan/javascript-v9",
  },
  {
    title: "Relational Database Certificate",
    issuer: "freeCodeCamp",
    image: "/images/certs/Relational_Database.png",
    imageAlt: "freeCodeCamp Relational Database Certificate",
    href: "https://www.freecodecamp.org/certification/s1conan/relational-databases-v9",
  },
  {
    title: "EF English Certificate",
    issuer: "EF",
    image: "/images/certs/EF.png",
    imageAlt: "EF English Certificate",
    href: "https://cert.efset.org/DD44A6",
  },
];
