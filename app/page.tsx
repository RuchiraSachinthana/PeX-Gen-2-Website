"use client";

import LinkedInFollowSection from "@/components/LinkedInFollowSection";
import SevenWaysBenefits from "@/components/SevenWaysBenefits";
import { useTranslation } from "../context/LanguageProvider";

import PexFoodHeader from "@/components/PexFoodHeader";
import ThreeKeyPointsSection from "@/components/ThreeKeyPointsSection";
import MobileSocialCard from "@/components/MobileSocialCard";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-screen">
      <PexFoodHeader />

      <SevenWaysBenefits />

      <LinkedInFollowSection />
      <ThreeKeyPointsSection />
<MobileSocialCard/>
      {/* <PExSoftwareBenefits /> */}
    </div>
  );
}
