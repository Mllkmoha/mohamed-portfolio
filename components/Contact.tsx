export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-zinc-800/60 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            Contact
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s build something together.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            I&apos;m open to junior developer opportunities, internships and
            collaborations.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:m63866157@gmail.com"
            className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Mllkmoha"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-700 bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-zinc-500 hover:bg-zinc-800"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mohamed-mellouk-a9114233a/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-700 bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-zinc-500 hover:bg-zinc-800"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}