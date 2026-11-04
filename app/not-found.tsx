"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-5 py-20 text-white">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto flex w-full max-w-lg flex-col items-center text-center"
      >
        <span className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
          Page not found
        </span>

        <h1 className="mt-5 text-8xl font-bold tracking-tighter text-white sm:text-9xl">
          404<span className="text-zinc-500">.</span>
        </h1>

        <h2 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">
          Lost in the wrong direction?
        </h2>

        <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400 sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back to my portfolio.
        </p>

        <Link
          href="/"
          className="mt-9 inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-7 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-zinc-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Back to homepage
          <span aria-hidden="true" className="ml-2">
            →
          </span>
        </Link>

        <span className="mt-12 text-xs text-zinc-600">
          Mohamed Rafik Mellouk · Portfolio
        </span>
      </motion.div>
    </main>
  );
}
