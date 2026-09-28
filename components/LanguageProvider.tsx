"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import en from "@/messages/en.json";
import fr from "@/messages/fr.json";
import ar from "@/messages/ar.json";

type Locale = "en" | "fr" | "ar";

const messages = {
  en,
  fr,
  ar,
};

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof en;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

function getBrowserLocale(): Locale {
  const language = navigator.language.toLowerCase();

  if (language.startsWith("fr")) {
    return "fr";
  }

  if (language.startsWith("ar")) {
    return "ar";
  }

  return "en";
}

function getInitialLocale(): Locale {
  if (typeof window === "undefined") {
    return "en";
  }

  const savedLocale = localStorage.getItem("locale");

  if (savedLocale === "en" || savedLocale === "fr" || savedLocale === "ar") {
    return savedLocale;
  }

  return getBrowserLocale();
}

export default function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    localStorage.setItem("locale", locale);

    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const value = {
    locale,
    setLocale,
    t: messages[locale],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
