"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
              key={item.name}
              href={item.href}
              className="group relative text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-200 hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop Social Links */}
        <div className="hidden items-center gap-4 md:flex">
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
          className="rounded-lg p-2 text-zinc-400 transition-colors duration-200 hover:bg-zinc-900 hover:text-white md:hidden"
        >
          <span
            className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`mt-1.5 block h-0.5 w-5 bg-current transition-opacity duration-200 ${
              isOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`mt-1.5 block h-0.5 w-5 bg-current transition-transform duration-200 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-zinc-800/80 py-4 text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                {item.name}
              </Link>
            ))}

            <div className="flex items-center gap-5 pt-5">
              <a
                href="https://github.com/Mllkmoha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                <FaGithub size={16} />
                GitHub
              </a>

              <span className="h-3 w-px bg-zinc-800" />

              <a
                href="https://www.linkedin.com/in/mohamed-mellouk-a9114233a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
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
