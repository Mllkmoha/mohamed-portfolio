"use client";

import { useEffect, useState } from "react";

const words = [
  "React & Next.js.",
  "Node.js & TypeScript.",
  "Full-Stack Web Applications.",
];

export default function Typewriter() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const delay = isDeleting
      ? 100
      : text === currentWord
        ? 2200
        : 120;

    const timer = setTimeout(() => {
      if (isDeleting) {
        const newText = currentWord.slice(0, text.length - 1);

        setText(newText);

        if (newText === "") {
          setIsDeleting(false);
          setWordIndex((current) => (current + 1) % words.length);
        }
      } else {
        const newText = currentWord.slice(0, text.length + 1);

        setText(newText);

        if (newText === currentWord) {
          setIsDeleting(true);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return <>{text}</>;
}