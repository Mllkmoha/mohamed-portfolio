export type Project = {
  title: string;
  label: string;
  description: string;
  technologies: string[];
  github: string;
  liveDemo?: string;
  featured: boolean;
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
};

export type Education = {
  title: string;
  institution: string;
  period: string;
  description: string;
};