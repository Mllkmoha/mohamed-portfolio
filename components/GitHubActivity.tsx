"use client";

import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { GitFork, Star } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { projects } from "@/data/projects";

const USER = "Mllkmoha";
const MAX_REPOS = 4;

type Repository = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
};

// Repos already shown in the Projects section are not repeated here.
const featuredUrls = new Set(projects.map((project) => project.github.toLowerCase()));

export default function GitHubActivity() {
  const { t } = useLanguage();
  const [repositories, setRepositories] = useState<Repository[] | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(
      `https://api.github.com/users/${USER}/repos?sort=pushed&direction=desc&per_page=30`,
      { signal: controller.signal },
    )
      .then((response) => {
        if (!response.ok) throw new Error("GitHub request failed");
        return response.json() as Promise<Repository[]>;
      })
      .then((data) =>
        setRepositories(
          data
            .filter(
              (repo) =>
                !repo.fork &&
                repo.description &&
                !featuredUrls.has(repo.html_url.toLowerCase()),
            )
            .slice(0, MAX_REPOS),
        ),
      )
      .catch((error: Error) => {
        if (error.name !== "AbortError") setRepositories([]);
      });

    return () => controller.abort();
  }, []);

  if (!repositories || repositories.length === 0) return null;

  return (
    <section className="border-t border-zinc-800/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              {t.github.label}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.github.title}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-500">
              {t.github.description}
            </p>
          </div>

          <a
            href={`https://github.com/${USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
          >
            <FaGithub size={18} />
            {t.github.viewGithub}
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {repositories.map((repo) => (
            <a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 transition-colors hover:border-zinc-700 hover:bg-zinc-900/50"
            >
              <h3 className="font-semibold text-white transition-colors group-hover:text-zinc-300">
                {repo.name}
              </h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-zinc-500">{repo.description}</p>
              <div className="mt-5 flex items-center gap-5 text-xs text-zinc-500">
                {repo.language && <span>{repo.language}</span>}
                <span className="flex items-center gap-1">
                  <Star size={14} />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={14} />
                  {repo.forks_count}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
