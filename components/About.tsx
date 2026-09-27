export default function About() {
  return (
    <section
      id="about"
      className="border-t border-zinc-800/60 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          {/* Heading */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
              About Me
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Building with curiosity, learning with purpose.
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-6 text-base leading-8 text-zinc-400 sm:text-lg">
            <p>
              I&apos;m a Junior Full-Stack Web Developer focused on building
              modern, responsive and practical web applications.
            </p>

            <p>
              I work with React, Next.js, Node.js and TypeScript, along with
              SQL and NoSQL databases. I enjoy turning ideas into functional
              products with clean interfaces and well-structured code.
            </p>

            <p>
              Most of my experience comes from hands-on development and
              personal projects, where I continuously improve my skills by
              building, debugging and solving real development problems.
            </p>

            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
                <p className="text-sm font-medium text-white">Frontend</p>
                <p className="mt-2 text-sm text-zinc-500">
                  React &amp; Next.js
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
                <p className="text-sm font-medium text-white">Backend</p>
                <p className="mt-2 text-sm text-zinc-500">
                  Node.js &amp; Express
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
                <p className="text-sm font-medium text-white">Database</p>
                <p className="mt-2 text-sm text-zinc-500">
                  PostgreSQL &amp; MongoDB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}