import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-zinc-800/60 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            Projects
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Things I&apos;ve built.
          </h2>

          <p className="mt-6 text-base leading-7 text-zinc-400 sm:text-lg">
            A selection of full-stack and frontend projects built to solve
            practical problems and strengthen my development skills.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-12 space-y-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 sm:p-8 ${
                project.featured
                  ? "border-zinc-700 bg-zinc-900/70 shadow-2xl shadow-black/20"
                  : "border-zinc-800 bg-zinc-900/30 hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-900/60"
              }`}
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/3 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                      {project.label}
                    </span>

                    {project.featured && (
                      <span className="rounded-full border border-zinc-700 bg-zinc-800/50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-zinc-300">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight text-white transition-colors group-hover:text-zinc-200 sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-zinc-800 bg-zinc-950/80 px-3 py-1.5 text-xs text-zinc-400 transition-colors group-hover:border-zinc-700 group-hover:text-zinc-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex shrink-0 flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-800"
                  >
                    GitHub
                  </a>

                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-black transition-all hover:-translate-y-0.5 hover:bg-zinc-200"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
