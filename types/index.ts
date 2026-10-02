export type Project = {
  key: "shopZone" | "nextLevelFood" | "foodOrdering";
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
  key: "fullStack" | "it";
};

export type Education = {
  key: "fullStack" | "linux";
};
