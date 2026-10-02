"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Contact() {
  const { t } = useLanguage();
  const services = [
    "businessWebsites",
    "fullStackApplications",
    "dashboardsApis",
  ] as const;

  return (
    <section
      id="contact"
      className="border-t border-zinc-800/60 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            {t.contact.label}
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.contact.title}
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            {t.contact.description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {services.map((key) => (
            <article
              key={key}
              className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5"
            >
              <h3 className="text-sm font-semibold text-white">
                {t.contact.services[key].title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                {t.contact.services[key].description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:m63866157@gmail.com"
            className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            <Mail size={16} />
            {t.contact.emailMe}
          </a>

          <a
            href="https://github.com/Mllkmoha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-zinc-500 hover:bg-zinc-800"
          >
            <FaGithub size={16} />
            {t.contact.github}
          </a>

          <a
            href="https://www.linkedin.com/in/mohamed-mellouk-a9114233a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-zinc-500 hover:bg-zinc-800"
          >
            <FaLinkedin size={16} />
            {t.contact.linkedin}
          </a>
        </div>
      </div>
    </section>
  );
}
