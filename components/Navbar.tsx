"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "@/components/LanguageProvider";

const navigation = [
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "experience", href: "#experience" },
  { key: "education", href: "#education" },
  { key: "contact", href: "#contact" },
] as const;

const languages = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "ar", label: "AR" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="group text-sm font-semibold tracking-tight text-white"
        >
          <span className="transition-colors group-hover:text-zinc-300">
            MRM
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`group relative text-sm transition-colors duration-200 hover:text-white ${
                item.key === "contact"
                  ? "rounded-lg border border-zinc-700 px-3 py-2 text-white hover:border-zinc-500"
                  : "text-zinc-400"
              }`}
            >
              {t.nav[item.key]}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-5 md:flex">
          <div className="flex items-center gap-2">
            {languages.map((language) => (
              <button
                key={language.code}
                type="button"
                onClick={() => setLocale(language.code)}
                className={`text-xs font-medium transition-colors ${
                  locale === language.code
                    ? "text-white"
                    : "text-zinc-500 hover:text-white"
                }`}
                aria-label={`Switch language to ${language.label}`}
              >
                {language.label}
              </button>
            ))}
          </div>

          <span className="h-3 w-px bg-zinc-800" />

          <a
            href="https://github.com/Mllkmoha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
          >
            GitHub <FaGithub size={16} />
          </a>

          <span className="h-3 w-px bg-zinc-800" />

          <a
            href="https://www.linkedin.com/in/mohamed-mellouk-a9114233a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
          >
            LinkedIn <FaLinkedin size={16} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="relative flex h-11 w-11 items-center justify-center rounded-lg text-zinc-400 transition-colors duration-200 hover:bg-zinc-900 hover:text-white md:hidden"
        >
          <span
            className={`absolute h-0.5 w-5 bg-current transition-transform duration-200 ${
              isOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 bg-current transition-opacity duration-200 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 bg-current transition-transform duration-200 ${
              isOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {navigation.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={closeMenu}
                className={`border-b border-zinc-800/80 py-4 text-sm transition-colors duration-200 hover:text-white ${
                  item.key === "contact"
                    ? "font-medium text-white"
                    : "text-zinc-400"
                }`}
              >
                {t.nav[item.key]}
              </Link>
            ))}

            <div className="flex items-center gap-5 pt-5">
              {languages.map((language) => (
                <button
                  key={language.code}
                  type="button"
                  onClick={() => {
                    setLocale(language.code);
                    closeMenu();
                  }}
                  className={`text-xs font-medium transition-colors ${
                    locale === language.code
                      ? "text-white"
                      : "text-zinc-500 hover:text-white"
                  }`}
                >
                  {language.label}
                </button>
              ))}

              <span className="h-3 w-px bg-zinc-800" />

              <a
                href="https://github.com/Mllkmoha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                <FaGithub size={16} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/mohamed-mellouk-a9114233a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                <FaLinkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
