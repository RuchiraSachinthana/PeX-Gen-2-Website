"use client";

import LinkedInFollowSection from "@/components/LinkedInFollowSection";
import SevenWaysBenefits from "@/components/SevenWaysBenefits";
import { useTranslation } from "../context/LanguageProvider";

import PexFoodHeader from "@/components/PexFoodHeader";
import ThreeKeyPointsSection from "@/components/ThreeKeyPointsSection";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-screen">
      <PexFoodHeader />

      <SevenWaysBenefits />

      <LinkedInFollowSection />
      <ThreeKeyPointsSection />

      {/* <PExSoftwareBenefits /> */}
    </div>
  );
}
