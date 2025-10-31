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
  const t = (key: string) =>
    translations[lang as keyof typeof translations][
      key as keyof (typeof translations)[keyof typeof translations]
    ] || key;
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
