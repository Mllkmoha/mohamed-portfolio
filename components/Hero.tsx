"use client";

import { motion } from "motion/react";
import Typewriter from "@/components/Typewriter";
import { useLanguage } from "@/components/LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-6xl px-6 pt-18.25 py-24">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500"
          >
            {t.hero.role}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Mohamed Rafik
            <span className="block text-zinc-400">Mellouk.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-2xl font-medium text-white sm:text-3xl"
          >
            {t.hero.building}{" "}
            <span className="text-zinc-400">
              <Typewriter />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg"
          >
            {t.hero.description}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
            >
              {t.hero.viewProjects}
            </a>

            <a
              href="/cv/CV-Mohamed.pdf"
              download
              className="rounded-lg border border-zinc-700 bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-zinc-500 hover:bg-zinc-800"
            >
              {t.hero.downloadCv}
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex items-center gap-6"
          >
            <a
              href="https://github.com/Mllkmoha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition-colors hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/mohamed-mellouk-a9114233a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition-colors hover:text-white"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
