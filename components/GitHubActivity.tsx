"use client";

import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { GitFork, Star } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

type Repository = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
};

export default function GitHubActivity() {
  const { t } = useLanguage();
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRepositories = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Mllkmoha/repos?sort=pushed&direction=desc&per_page=6",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub repositories");
        }

        const data: Repository[] = await response.json();

        const allowedRepositories = [
          "ShopZone",
          "nextlevel-food",
          "react-events",
          "food-ordering-app",
        ];

        const filteredRepositories = data.filter((repo) =>
          allowedRepositories.includes(repo.name),
        );

        setRepositories(filteredRepositories);
      } catch {
        setRepositories([]);
      } finally {
        setLoading(false);
      }
    };

    loadRepositories();
  }, []);

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
            href="https://github.com/Mllkmoha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
          >
            <FaGithub size={18} />
            {t.github.viewGithub}
          </a>
        </div>

        <div className="mt-10">
          {loading ? (
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 text-sm text-zinc-500">
              {t.github.loading}
            </div>
          ) : repositories.length === 0 ? (
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 text-sm text-zinc-500">
              {t.github.empty}
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
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

                  <p className="mt-2 min-h-12 text-sm leading-6 text-zinc-500">
                    {repo.description || t.github.noDescription}
                  </p>

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
          )}
        </div>
      </div>
    </section>
  );
}
