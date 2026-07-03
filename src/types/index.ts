export interface Project {
  id: string;
  index: string;
  title: string;
  description: string;
  stack: string[];
  href?: string;
  repo?: string;
  featured?: boolean;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  id: string;
  role: string;
  org: string;
  period: string;
  summary: string;
}

export interface SocialLink {
  label: string;
  href: string;
}
