"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { translations } from "../lib/translations";

interface LanguageContextType {
  lang: string;
  setLang: (lang: string) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Create a custom hook for easy access to translations
export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  const { lang, setLang } = context;

  // Fallback to 'en' if an unsupported language code is set
  const supportedLangs = Object.keys(translations);
  const effectiveLang = supportedLangs.includes(lang) ? lang : "en";

  const t = (key: string): unknown => {
    const keys = key.split(".");
    let value: unknown =
      translations[effectiveLang as keyof typeof translations];

    for (const k of keys) {
      if (value && typeof value === "object" && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        if (process.env.NODE_ENV !== "production") {
          console.warn(
            `[i18n] Missing translation key: ${key} (lang: ${effectiveLang})`
          );
        }
        return key; // Return the key if not found
      }
    }

    // Return the value regardless of type (string, array, or object)
    return value !== undefined ? value : key;
  };

  return { t, setLang, lang };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState("en");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
