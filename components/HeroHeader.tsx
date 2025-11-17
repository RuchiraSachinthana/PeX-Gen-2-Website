"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Home, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { useTranslation } from "../context/LanguageProvider";
import HomeNavbar from "./HomeNavbar";
import InlineLanguageButton from "./InlineLanguageButton";

export default function HeroHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const { t, setLang, lang } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { key: "about", label: String(t("navAbout")), href: "/about" },
      { key: "features", label: String(t("navFeatures")), href: "/features" },
      { key: "blog", label: String(t("navBlog")), href: "/blog" },
      { key: "contact", label: String(t("navContact")), href: "/contact" },
    ],
    [t]
  );

  const allPages = useMemo(
    () => [
      { key: "home", label: String(t("navPexGen")), href: "/" },
      { key: "pexFood", label: String(t("navPexFood")), href: "/pex-food" },
      {
        key: "pexQuality",
        label: String(t("navPexQuality")),
        href: "/pex-quality",
      },
    ],
    [t]
  );

  const languages = [
    { code: "en", name: "EN", fullName: "English" },
    { code: "es", name: "ES", fullName: "Español" },
    { code: "fr", name: "FR", fullName: "Français" },
    { code: "de", name: "DE", fullName: "Deutsch" },
    { code: "jp", name: "JP", fullName: "日本語" },
  ];

  const isBlogPage = pathname === "/blog";
  const homeButtonBorderColor = isBlogPage
    ? "border-green-600"
    : "border-[#04afbc]";
  const homeButtonBgColor = isBlogPage ? "bg-green-900/20" : "bg-white/10";
  const mobileOverlayBg = isBlogPage
    ? "bg-gradient-to-br from-green-900/95 to-emerald-900/95"
    : "bg-gradient-to-br from-teal-900/95 to-cyan-900/95";

  return (
    <div className="flex items-center max-w-7xl  justify-between mb-8 sm:mb-12 gap-3 sm:gap-4">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center sm:h-11"
      >
        <Image
          src="/logo.webp"
          alt="PEX Logo"
          width={180}
          height={93}
          className="h-8 w-auto sm:ml-0 ml-5 sm:h-14"
          priority
        />
      </motion.div>

      {/* Desktop Navigation - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden md:flex flex-1 items-center justify-end h-11"
      >
        <div className="flex gap-4 items-center">
          <button
            onClick={() => router.push("/")}
            className={`flex items-center gap-1.5 text-white px-2.5 py-3 rounded-full hover:scale-110 hover:border-yellow-400 backdrop-blur-md border transition-all duration-300 shadow-lg hover:shadow-xl h-9 cursor-pointer ${homeButtonBorderColor} ${homeButtonBgColor}`}
          >
            <Home size={15} />
          </button>
          <HomeNavbar />
          <InlineLanguageButton />
        </div>
      </motion.div>

      {/* Mobile Hamburger Menu Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden flex items-center justify-center bg-white/10 text-white p-2 mr-5 rounded-full backdrop-blur-md border border-[#04afbc] hover:border-yellow-400 transition-all duration-300 shadow-lg cursor-pointer z-50"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className={`md:hidden fixed inset-0 ${mobileOverlayBg} backdrop-blur-md z-40 overflow-y-auto`}
          >
            <div className="flex flex-col p-8 pt-24 space-y-6">
              {/* Home Button */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                onClick={() => {
                  router.push("/");
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-3 text-white text-xl py-3 px-4 rounded-lg hover:bg-white/10 transition-all"
              >
                <Home size={24} />
                <span>Home</span>
              </motion.button>

              {/* Page Links */}
              <div className="border-t border-white/20 pt-4">
                <p className="text-white/60 text-sm mb-3 px-4">Pages</p>
                {allPages.map((page, index) => (
                  <motion.div
                    key={page.key}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <Link
                      href={page.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block text-lg py-3 px-4 rounded-lg transition-all ${
                        pathname === page.href
                          ? "bg-yellow-400 text-teal-900 font-semibold"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      {page.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Navigation Items */}
              <div className="border-t border-white/20 pt-4">
                <p className="text-white/60 text-sm mb-3 px-4">Navigation</p>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block text-lg py-3 px-4 rounded-lg transition-all ${
                        pathname === item.href
                          ? "bg-yellow-400 text-teal-900 font-semibold"
                          : "text-white/60 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Language Selector */}
              <div className="border-t border-white/20 pt-4">
                <p className="text-white/60 text-sm mb-3 px-4">Language</p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((language, index) => (
                    <motion.button
                      key={language.code}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + index * 0.05 }}
                      onClick={() => {
                        setLang(language.code);
                      }}
                      className={`py-3 px-4 rounded-lg transition-all text-center ${
                        lang === language.code
                          ? "bg-yellow-400 text-teal-900 font-semibold"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      <div className="text-sm font-semibold">
                        {language.name}
                      </div>
                      <div className="text-xs opacity-80">
                        {language.fullName}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
