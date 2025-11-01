"use client";

import SectionTwo from "@/components/SectionTwo";
import { useTranslation } from "../../context/LanguageProvider";

import SectionFour from "@/components/SectionFour";
import SectionThree from "@/components/SectionThree";
import ThreeKeyPointsSection from "@/components/ThreeKeyPointsSection";

import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { OfficePromoSection } from "@/components/OfficePromoSection";
import SocialsSection from "@/components/SocialSection";
import PexQualityHeader from "./../../components/PexQualityHeader";

export default function PexQualityPage() {
  const { t } = useTranslation();
  return (
    <div className="w-full min-h-screen">
      <PexQualityHeader />

      <SectionTwo />

      <SectionThree />
      <SectionFour />
      <ThreeKeyPointsSection />
      <OfficePromoSection />
      <FAQSection />
      <SocialsSection />
      <Footer />
    </div>
  );
}
