"use client";

import CaseStudiesShowcase from "@/components/CaseStudiesShowcase";
import Footer from "@/components/Footer";
import PexGenComplianceSection from "@/components/PexGenComplianceSection";
import PexGenExploreSection from "@/components/PexGenExploreSection";
import PexGenHeader from "@/components/PexGenHeader";
import PexGenKeyCapabilitiesSection from "@/components/PexGenKeyCapabilitySection";
import PexGenManagementSection from "@/components/PexGenManagementSection";
import PexGenMeetLeaders from "@/components/PexGenMeetLeaders";
import PexGenPartners from "@/components/PexGenPartners";
import PexGenPhilosopySection from "@/components/PexGenPhilosopySection";
import PexGenTestamonialsSection from "@/components/PexGenTestamonialsSection";
import PexGenVideoSection from "@/components/PexGenVideoSection";
import PexGenWhoWeAreSection from "@/components/PexGenWhoWeAreSection";
import PexGenWhyMattersSection from "@/components/PexGenWhyMattersSection";
import SocialsSection from "@/components/SocialSection";
import WhatIsPexSection from "@/components/WhatIsPexSection";


export default function HomePageClient() {
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
      <PexGenTestamonialsSection />
      <PexGenPartners />
      <CaseStudiesShowcase />
      <PexGenWhoWeAreSection />
      <PexGenPhilosopySection />
       <PexGenMeetLeaders />
      <SocialsSection />
      <Footer />
    </div>
  );
}

