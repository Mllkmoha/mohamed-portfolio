"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { projects } from "@/data/projects";
import { projectImages } from "@/data/projectImages";

function Preview({ src, alt, href }: { src: string; alt: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={alt}
      className="group/preview block overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950"
    >
      <div className="flex items-center gap-1.5 border-b border-zinc-800 px-3 py-2">
        <span className="size-2.5 rounded-full bg-zinc-700" />
        <span className="size-2.5 rounded-full bg-zinc-700" />
        <span className="size-2.5 rounded-full bg-zinc-700" />
        <span className="ml-3 truncate rounded bg-zinc-900 px-2 py-0.5 text-[10px] text-zinc-500">
          {new URL(href).hostname}
        </span>
      </div>
      <div className="aspect-[16/10] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          width={1200}
          height={750}
          loading="lazy"
          decoding="async"
          className="size-full object-cover object-top transition-transform duration-500 group-hover/preview:scale-105"
        />
      </div>
    </a>
  );
}

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="border-t border-zinc-800/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            {t.projects.label}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.projects.title}
          </h2>
          <p className="mt-6 text-base leading-7 text-zinc-400 sm:text-lg">
            {t.projects.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => {
            const item = t.projects.items[project.key];
            const demo = project.liveDemo ?? project.github;

            return (
              <article
                key={project.key}
                className={`flex flex-col gap-6 rounded-2xl border bg-zinc-900/30 p-5 transition-colors hover:border-zinc-700 sm:p-6 ${
                  project.featured
                    ? "border-zinc-600 lg:col-span-2 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 lg:p-8"
                    : "border-zinc-800"
                }`}
              >
                <Preview src={projectImages[project.key]} alt={item.title} href={demo} />

                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-500">
                      {project.featured ? t.projects.featuredProject : t.projects.project}
                    </span>
                    {project.featured && (
                      <span className="rounded-full border border-zinc-700 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-zinc-400">
                        {t.projects.featured}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{item.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-xs text-zinc-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-zinc-500 hover:bg-zinc-800"
                    >
                      {t.projects.github}
                    </a>
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-105"
                      >
                        {t.projects.liveDemo}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
