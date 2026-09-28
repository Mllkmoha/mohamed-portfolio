"use client";

import {
  createContext,
  useContext,
  useSyncExternalStore,
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

function getStoredLocale(): Locale {
  const savedLocale = localStorage.getItem("locale");

  if (savedLocale === "en" || savedLocale === "fr" || savedLocale === "ar") {
    return savedLocale;
  }

  return getBrowserLocale();
}

function subscribe(callback: () => void) {
  const handleStorageChange = () => {
    callback();
  };

  window.addEventListener("storage", handleStorageChange);
  window.addEventListener("locale-change", handleStorageChange);

  return () => {
    window.removeEventListener("storage", handleStorageChange);
    window.removeEventListener("locale-change", handleStorageChange);
  };
}

function getServerLocale(): Locale {
  return "en";
}

export default function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const locale = useSyncExternalStore(
    subscribe,
    getStoredLocale,
    getServerLocale,
  );

  const setLocale = (nextLocale: Locale) => {
    localStorage.setItem("locale", nextLocale);

    document.documentElement.lang = nextLocale;
    document.documentElement.dir = nextLocale === "ar" ? "rtl" : "ltr";

    window.dispatchEvent(new Event("locale-change"));
  };

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
