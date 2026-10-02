"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { education } from "@/data/education";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section
      id="education"
      className="border-t border-zinc-800/60 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            {t.education.label}
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.education.title}
          </h2>

          <p className="mt-6 text-base leading-7 text-zinc-400 sm:text-lg">
            {t.education.description}
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {education.map((item) => {
            return (
              <article
                key={`${item.title}-${item.institution}`}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="mt-1 text-sm text-zinc-500">
                      {item.institution}
                    </p>
                  </div>

                  <p className="text-sm text-zinc-500">{item.period}</p>
                </div>

                <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
