"use client";

import LinkedInFollowSection from "@/components/LinkedInFollowSection";
import SevenWaysBenefits from "@/components/SevenWaysBenefits";
import { useTranslation } from "../context/LanguageProvider";

import PexFoodHeader from "@/components/PexFoodHeader";
import Temp from "@/components/Temp";
import Temp1 from "@/components/Temp1";
import Temp3 from "@/components/Temp3";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-screen">
      <PexFoodHeader />

      <SevenWaysBenefits />

      <LinkedInFollowSection />
      <Temp />
<Temp1/>
<Temp3/>
      {/* <PExSoftwareBenefits /> */}
    </div>
  );
}
