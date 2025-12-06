"use client";

import BusinessImprovementSlider from "@/components/BusinessImprovementSlider";
import CaseStudiesShowcaseQuality from "@/components/CaseStudiesShowcaseQuality";
import { ExperienceStatsSection } from "@/components/ExperienceStatsSection";
import FAQSection from "@/components/FAQSectionQuality";
import Footer from "@/components/Footer";
import KeyPointsIntroSection from "@/components/KeyPointsIntroSection";
import SocialsSection from "@/components/SocialSection";
import VideoPromoSection from "@/components/VideoPromoSection";
import PexQualityHeader from "./../../components/PexQualityHeader";
import BlogCaseStudiesShowcase from "@/components/BlogCaseStudiesShowcase";

export default function PexQualityPageClient() {
  return (
    <div className="w-full min-h-screen">
      <PexQualityHeader />
      <VideoPromoSection />
      <BusinessImprovementSlider />
      <CaseStudiesShowcaseQuality />
      <KeyPointsIntroSection />
      <ExperienceStatsSection />
      <FAQSection />
      <SocialsSection />
      <Footer />     
    </div>
  );
}

