"use client";

import { useEffect } from "react";
import CaseStudiesShowcase from "@/components/CaseStudiesShowcase";
import { ExperienceStatsSection } from "@/components/ExperienceStatsSection";
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
import { fetchBlogs } from "@/store/blogSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export default function HomePageClient() {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((state) => state.blog);

  useEffect(() => {
    if (items.length === 0 && status !== "loading") {
      dispatch(fetchBlogs({ page: 1, limit: 10 }));
    }
  }, [dispatch, items.length, status]);

  return (
    <div className="w-full min-h-screen bg-white">
      <PexGenHeader />
      <PexGenComplianceSection />
      <PexGenVideoSection />
      <WhatIsPexSection />
      <PexGenKeyCapabilitiesSection />
      {/* <PexGenWhyMattersSection /> */}
      
      <PexGenExploreSection />
      <ExperienceStatsSection />
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
