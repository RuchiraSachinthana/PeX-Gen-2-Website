"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "../context/LanguageProvider";

export default function InlineLanguageButton() {
  const { setLang, lang } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const languages = [
    { code: "en", name: "EN", fullName: "English" },
    { code: "es", name: "ES", fullName: "Español" },
    { code: "fr", name: "FR", fullName: "Français" },
    { code: "de", name: "DE", fullName: "Deutsch" },
    { code: "jp", name: "JP", fullName: "日本語" },
  ];

  const currentLang = languages.find((l) => l.code === lang);
  const isBlogPage = pathname === "/blog";
  const buttonBgColor = isBlogPage ? "bg-green-900/20" : "bg-white/10";
  const buttonBorderColor = isBlogPage ? "border-green-600" : "border-white/30";

  return (
    <div className="relative inline-block">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-1.5 text-white px-2.5 py-1.5 rounded-full backdrop-blur-md border hover:border-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl h-9 cursor-pointer ${buttonBgColor} ${buttonBorderColor}`}
        >
          <span className="text-xs ">{currentLang?.name}</span>
          <motion.svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-sm rounded-md border border-white/20 shadow-xl overflow-hidden min-w-[100px]"
            >
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code);
                    setIsOpen(false);
                  }}
                  className={`w-full px-3 py-1.5 text-xs text-left transition-all duration-200 cursor-pointer ${
                    lang === l.code
                      ? "bg-white/30 text-white "
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span>{l.fullName}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
