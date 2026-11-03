import type { Project } from "@/types";

export const projects: Project[] = [
  {
    key: "leadFlow",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "NextAuth",
      "Tailwind CSS",
      "TanStack Query",
    ],
    github: "https://github.com/Mllkmoha/LeadFlow",
    liveDemo: "https://leadflow-coral-six.vercel.app/",
    featured: true,
  },
  {
    key: "shopZone",
    technologies: [
      "React 19",
      "Vite",
      "Redux Toolkit",
      "Express 5",
      "MongoDB",
      "JWT",
      "bcryptjs",
      "Axios",
    ],
    github: "https://github.com/Mllkmoha/ShopZone",
    liveDemo: "https://shop-zone-woad.vercel.app/",
    featured: false,
  },
  {
    key: "nextLevelFood",
    technologies: [
      "Next.js 16",
      "React 19",
      "Supabase",
      "PostgreSQL",
      "Server Actions",
      "CSS Modules",
    ],
    github: "https://github.com/Mllkmoha/nextlevel-food",
    liveDemo: "https://nextlevel-food-psi.vercel.app/",
    featured: false,
  },
  {
    key: "foodOrdering",
    technologies: [
      "React 19",
      "Vite",
      "Node.js",
      "Express",
      "Context API",
      "REST API",
    ],
    github: "https://github.com/Mllkmoha/food-ordering-app",
    liveDemo: "https://food-ordering-app-l2kv.vercel.app",
    featured: false,
  },
];
