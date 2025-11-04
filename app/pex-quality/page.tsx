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
import Temp from "@/components/Temp";
import Temp3 from "@/components/Temp3";
import Temp1 from "@/components/Temp1";

export default function PexQualityPage() {
  const { t } = useTranslation();
  return (
    <div className="w-full min-h-screen">
      <PexQualityHeader />
      <Temp3/>

      {/* <QualityVideoSection /> */}

      <BusinessImprovementSlider /><Temp1/>
      {/* <SuccessStoriesSection /> */}
      {/* <ThreeKeyPointsSection /> */}
      <Temp/>
      
      <ExperienceStatsSection />
      <FAQSection />
      <SocialsSection />
      <Footer />
    </div> 
  );
}
