"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="border-t border-zinc-800/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
              {t.about.label}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.about.title}
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-zinc-400 sm:text-lg">
            <p>{t.about.paragraph1}</p>

            <p>{t.about.paragraph2}</p>

            <p>{t.about.paragraph3}</p>

            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
                <p className="text-sm font-medium text-white">
                  {t.about.frontend}
                </p>

                <p className="mt-2 text-sm text-zinc-500">
                  {t.about.frontendDescription}
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
                <p className="text-sm font-medium text-white">
                  {t.about.backend}
                </p>

                <p className="mt-2 text-sm text-zinc-500">
                  {t.about.backendDescription}
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
                <p className="text-sm font-medium text-white">
                  {t.about.database}
                </p>

                <p className="mt-2 text-sm text-zinc-500">
                  {t.about.databaseDescription}
                </p>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="#projects"
                className="inline-flex items-center rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-zinc-500 hover:bg-zinc-900"
              >
                {t.hero.viewProjects}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
