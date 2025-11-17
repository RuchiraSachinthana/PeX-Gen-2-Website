"use client";

import { usePathname } from "next/navigation";
import HomeNavbar from "./HomeNavbar";
import InlineLanguageButton from "./InlineLanguageButton";

export default function ConditionalNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isHeroPage = [
    "/pex-food",
    "/pex-quality",
    "/pex-gen",
    "/about",
    "/features",
    "/blog",
    "/contact",
  ].includes(pathname);

  // Don't render navbar and language button on hero pages (they have HeroHeader)
  if (isHome || isHeroPage) return null;

  return (
    <div className="fixed top-4 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center h-11">
            <InlineLanguageButton />
          </div>
          <div className="flex items-center justify-end h-11">
            <HomeNavbar />
          </div>
        </div>
      </div>
    </div>
  );
}
