"use client";

import QualityVideoSection from "@/components/QualityVideoSection";
import { useTranslation } from "../../context/LanguageProvider";

import BusinessImprovementSlider from "@/components/BusinessImprovementSlider";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import ThreeKeyPointsSection from "@/components/ThreeKeyPointsSection";

import { ExperienceStatsSection } from "@/components/ExperienceStatsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import SocialsSection from "@/components/SocialSection";
import PexQualityHeader from "./../../components/PexQualityHeader";

export default function PexQualityPage() {
  const { t } = useTranslation();
  return (
    <div className="w-full min-h-screen">
      <PexQualityHeader />

      <QualityVideoSection />

      <BusinessImprovementSlider />
      <SuccessStoriesSection />
      <ThreeKeyPointsSection />
      <ExperienceStatsSection />
      <FAQSection />
      <SocialsSection />
      <Footer />
    </div>
  );
}
