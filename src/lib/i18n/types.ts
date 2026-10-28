import type { Certification, ProjectRecord } from "@/types";

export type SectionKey =
  | "projects"
  | "skills"
  | "services"
  | "certifications"
  | "benchmarks"
  | "contact"
  | "about";

export interface NavLinkContent {
  label: string;
  href: string;
}

export interface SectionHeadingContent {
  index: string;
  label: string;
  titleTop: string;
  titleBottom: string;
}

export interface ProjectCopy {
  title: string;
  tagline: string;
  role: string;
  objective: string;
  outcomes: string[];
  imageAlt: string;
}

/** A project record (locale-independent) merged with its localized copy. */
export type ProjectView = ProjectRecord & ProjectCopy;

export interface ServiceCopy {
  id: "landing-pages" | "full-stack-apps";
  title: string;
  description: string;
  items: string[];
}

export interface BenchmarkCopy {
  metric: string;
  label: string;
}

export interface ContactCopy {
  fieldLabels: {
    name: string;
    email: string;
    company: string;
    projectType: string;
    budget: string;
    details: string;
  };
  placeholders: {
    name: string;
    email: string;
    company: string;
    projectType: string;
    budget: string;
    details: string;
  };
  optionOther: string;
  submit: string;
  submitting: string;
  validation: {
    nameRequired: string;
    invalidEmail: string;
  };
  messages: {
    invalid: string;
    mailOffline: string;
    success: string;
    failurePrefix: string;
  };
}

export interface ProjectModalCopy {
  role: string;
  stack: string;
  objective: string;
  output: string;
  scroll: string;
  close: string;
  previousImage: string;
  nextImage: string;
  goToImage: string;
  closedTitle: string;
}

export interface AriaCopy {
  openMenu: string;
  closeMenu: string;
  startAutoScroll: string;
  stopAutoScroll: string;
  viewProject: string;
  highlights: string;
  heroPreview: string;
  profilePhoto: string;
}

export interface LanguageCopy {
  label: string;
  switchToEnglish: string;
  switchToIndonesian: string;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  site: {
    role: string;
    statusBadge: string;
    heroHeadlineTop: string;
    heroHeadlineHighlight: string;
    heroHeadlineBottom: string;
    heroTagline: string;
    navLinks: NavLinkContent[];
  };
  cta: {
    consultation: string;
    accessLogs: string;
    secureLink: string;
  };
  about: {
    location: string;
    experience: string;
    focus: string;
    availability: string;
    bio: string;
    labels: {
      location: string;
      experience: string;
      focus: string;
      availability: string;
    };
  };
  terminalLines: string[];
  marqueeItems: string[];
  sectionHeadings: Record<SectionKey, SectionHeadingContent>;
  projects: ProjectCopy[];
  services: ServiceCopy[];
  benchmarks: BenchmarkCopy[];
  testimonials: string[];
  certifications: {
    issuedBy: string;
  };
  contact: ContactCopy;
  projectModal: ProjectModalCopy;
  aria: AriaCopy;
  footer: {
    rights: string;
  };
  language: LanguageCopy;
}

/** Values merged with localized copy at render time. */
export interface BenchmarkView {
  value: string;
  metric: string;
  label: string;
}

export interface CertificationsSectionProps {
  heading: SectionHeadingContent;
  certificates: Certification[];
  issuedBy: string;
  aria: Pick<AriaCopy, "startAutoScroll" | "stopAutoScroll">;
}
