"use client";

import AdditionalContentSection from "@/components/AdditionalContentSection";
import FAQSection from "@/components/FAQSection";
import FoodCaseStudiesShowcase from "@/components/FoodCaseStudiesShowcase";
import { FoodExperienceStatsSection } from "@/components/FoodExperienceStatsSection";
import FoodThreeKeyPointsIntroSection from "@/components/FoodThreeKeyPointSection";
import FoodVideoPromoSection from "@/components/FoodVideoPromo";
import Footer from "@/components/Footer";
import LinkedInFollowSection from "@/components/LinkedInFollowSection";
import PexFoodHeader from "@/components/PexFoodHeader";
import SevenWaysBenefits from "@/components/SevenWaysBenefits";
import SocialsSection from "@/components/SocialSection";

export default function PexFoodPage() {
  return (
    <>
      <PexFoodHeader />
      <AdditionalContentSection />
      <FoodVideoPromoSection />
      <SevenWaysBenefits />
      <LinkedInFollowSection />
      <FoodCaseStudiesShowcase />
      <FoodThreeKeyPointsIntroSection />
      <FoodExperienceStatsSection />
      <FAQSection />
      <SocialsSection />
      <Footer />
    </>
  );
}
