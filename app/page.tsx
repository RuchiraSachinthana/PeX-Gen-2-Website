"use client";

import LinkedInFollowSection from "@/components/LinkedInFollowSection";
import SevenWaysBenefits from "@/components/SevenWaysBenefits";

import CaseStudiesShowcase from "@/components/CaseStudiesShowcase";
import KeyPointsIntroSection from "@/components/KeyPointsIntroSection";
import PexFoodHeader from "@/components/PexFoodHeader";
import VideoPromoSection from "@/components/VideoPromoSection";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen">
      <PexFoodHeader />

      <SevenWaysBenefits />

      <LinkedInFollowSection />
      <KeyPointsIntroSection />
      <CaseStudiesShowcase />
      <VideoPromoSection />
      {/* <PExSoftwareBenefits /> */}
    </div>
  );
}
