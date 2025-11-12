"use client";
import PexGenComplianceSection from "@/components/PexGenComplianceSection";
import PexGenExploreSection from "@/components/PexGenExploreSection";
import PexGenHeader from "@/components/PexGenHeader";
import PexGenKeyCapabilitiesSection from "@/components/PexGenKeyCapabilitySection";
import PexGenManagementSection from "@/components/PexGenManagementSection";
import PexGenVideoSection from "@/components/PexGenVideoSection";
import PexGenWhyMattersSection from "@/components/PexGenWhyMattersSection";
import WhatIsPexSection from "@/components/WhatIsPexSection";

export default function PexGenPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <PexGenHeader />
      <PexGenComplianceSection />
      <PexGenVideoSection />
      <WhatIsPexSection />
      <PexGenKeyCapabilitiesSection />
      <PexGenWhyMattersSection />
      <PexGenExploreSection />
      <PexGenManagementSection />

      {/* <VideoPromoSection />
      <BusinessImprovementSlider />
      <CaseStudiesShowcase />
      <KeyPointsIntroSection />
      <ExperienceStatsSection />
      <FAQSection />
      <SocialsSection />
      <Footer /> */}
    </div>
  );
}
