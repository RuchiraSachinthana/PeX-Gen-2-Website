"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useMemo, useState } from "react";
import { useTranslation } from "../context/LanguageProvider";

interface NavLinkProps {
  href: string;
  currentPath: string;
  children: ReactNode;
  layoutId: string;
  disabled?: boolean;
}

const NavLink = ({
  href,
  currentPath,
  children,
  layoutId,
  disabled = false,
}: NavLinkProps) => {
  const content = (
    <>
      {children}
      {currentPath === href && (
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400"
          layoutId={layoutId}
        />
      )}
    </>
  );

  if (disabled) {
    return (
      <span
        className={`relative text-sm text-white transition-colors duration-200 ${
          currentPath === href ? "text-white" : ""
        }`}
      >
        {content}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={`relative text-sm text-white hover:text-yellow-400 transition-colors duration-200 ${
        currentPath === href ? "text-white" : ""
      }`}
    >
      {content}
    </Link>
  );
};

export default function HomeNavbar() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const currentPageName = useMemo(
    () =>
      allPages.find((page) => page.href === pathname)?.label ||
      allPages[0]?.label ||
      "",
    [pathname, allPages]
  );

  const dropdownItems = useMemo(
    () => allPages.filter((page) => page.href !== pathname),
    [allPages, pathname]
  );

  const isBlogPage = pathname === "/blog";
  const navbarBorderColor = isBlogPage
    ? "border-green-600"
    : "border-[#04afbc]";
  const navbarBgColor = isBlogPage ? "bg-green-900/20" : "bg-white/10";

  return (
    <nav className="w-full mt-7 max-w-6xl flex justify-end mb-4 sm:mb-6">
      <div
        className={`flex items-center h-11 rounded-full border shadow-lg px-3 sm:px-5 ${navbarBorderColor} ${navbarBgColor}`}
      >
        <div className="flex items-center space-x-3 sm:space-x-6">
          {/* Page Selector Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="relative text-sm text-white hover:text-yellow-400 transition-colors duration-300 flex items-center px-2 sm:px-3 py-1.5 cursor-pointer">
              {String(currentPageName)}
              <motion.svg
                className="w-4 h-4 ml-1.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </motion.svg>
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-2 w-48 bg-[#9bd4aa] text-[#0e685b]  rounded-md  py-1 z-50  overflow-hidden"
                >
                  {dropdownItems.map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      className="block px-4 py-2 text-xs text-[#0e685b]  hover:bg-yellow-400 transition-all duration-200"
                    >
                      {String(item.label)}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other Nav Items - Hidden on small screens */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                href={item.href}
                currentPath={pathname}
                layoutId="underline-home"
                disabled={false}
              >
                {String(item.label)}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
