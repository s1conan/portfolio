export interface SocialLink {
  label: string;
  href: string;
  brandColor: string;
}

export interface SiteConfig {
  name: string;
  email: string;
  socials: SocialLink[];
}

export type SkillIcon = "terminal" | "server" | "settings";

export interface Skill {
  name: string;
  proficiency: string;
}

export interface SkillCategory {
  title: string;
  icon: SkillIcon;
  skills: Skill[];
}

/** Locale-independent parts of a project; copy lives in the i18n dictionary. */
export interface ProjectRecord {
  id: string;
  stack: string[];
  images: string[];
  href: string;
}

export interface Certification {
  title: string;
  issuer: string;
  image: string;
  imageAlt: string;
  href?: string;
}
