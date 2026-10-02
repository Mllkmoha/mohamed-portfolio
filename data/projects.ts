import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "ShopZone",
    label: "Featured",
    description:
      "A full-stack e-commerce application with JWT authentication, product management, and a Redux Toolkit frontend connected to a REST API.",
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
    featured: true,
  },
  {
    title: "NextLevel Food",
    label: "Project",
    description:
      "A modern food-sharing platform where users can discover community recipes and share their own meals, powered by Next.js and Supabase.",
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
    title: "Food Ordering App",
    label: "Project",
    description:
      "A full-stack food ordering application with meal discovery, cart management, checkout, order submission, loading states and API error handling.",
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
