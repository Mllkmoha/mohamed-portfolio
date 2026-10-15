export type Ring = { y: number; dir: 1 | -1; speed: number; skills: [string, string][] };

export const RINGS: Ring[] = [
  { y: -0.03, dir: 1, speed: 1, skills: [["React","#61dafb"],["Next.js","#ffffff"],["TypeScript","#3178c6"],["JavaScript","#f7df1e"],["Tailwind CSS","#38bdf8"],["Vite","#a78bfa"],["Open Source","#f472b6"]] },
  { y: 0.74, dir: -1, speed: 0.8, skills: [["Node.js","#6cc24a"],["Express","#d4d4d8"],["PostgreSQL","#5b8bd0"],["MongoDB","#4fa83d"],["Supabase","#3ecf8e"],["MySQL","#00a6c8"],["REST APIs","#a78bfa"]] },
  { y: 1.03, dir: 1, speed: 0.9, skills: [["Git","#f05032"],["GitHub","#e5e5e5"],["Linux","#fcc624"],["HTML","#e34f26"],["CSS","#1572b6"],["VS Code","#3b82f6"],["Responsive","#22c55e"]] },
];
