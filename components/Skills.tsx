"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  const { t } = useLanguage();

  const descriptions = {
    Frontend: t.skills.frontendDescription,
    Backend: t.skills.backendDescription,
    Database: t.skills.databaseDescription,
    "Tools & Systems": t.skills.toolsDescription,
  };

  return (
    <section
      id="skills"
      className="border-t border-zinc-800/60 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            {t.skills.label}
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.skills.title}
          </h2>

          <p className="mt-6 text-base leading-7 text-zinc-400 sm:text-lg">
            {t.skills.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8"
            >
              <h3 className="text-xl font-semibold text-white">
                {group.title === "Tools & Systems"
                  ? t.skills.tools
                  : group.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                {descriptions[group.title as keyof typeof descriptions]}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
