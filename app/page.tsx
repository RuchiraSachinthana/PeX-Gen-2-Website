import type { Metadata } from "next";
import HomePageClient from "./home-client";

export const metadata: Metadata = {
  title: "PEx Software™ - Transform ISO Compliance into Competitive Advantage",
  description:
    "PEx Software™ transforms ISO 9001, ISO 14001, ISO 45001 from static compliance into a dynamic, AI-powered engine for growth. Real-time dashboards, KPI tracking, and strategic alignment for CEOs and Quality Managers of SMEs in manufacturing, logistics, and services across Sri Lanka & India.",
  keywords: [
    "PEx Software",
    "ISO 9001 software",
    "ISO compliance software",
    "SME compliance toolkit",
    "performance management software",
    "CEO dashboard",
    "quality management system",
    "continual improvement",
    "operational excellence",
    "competitive advantage",
    "Sri Lanka compliance",
    "India compliance",
    "manufacturing compliance",
    "logistics compliance",
  ],
  openGraph: {
    title: "PEx Software™ - Transform ISO Compliance into Competitive Advantage",
    description:
      "AI-powered compliance and performance toolkit transforming ISO certification into strategic growth for SMEs.",
    url: "https://pexsoftwaresolutions.com",
    images: [
      {
        url: "https://pexsoftwaresolutions.com/logo.webp",
        width: 1200,
        height: 630,
        alt: "PEx Software™ - Compliance and Performance Toolkit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PEx Software™ - Transform ISO Compliance into Competitive Advantage",
    description:
      "AI-powered compliance and performance toolkit transforming ISO certification into strategic growth for SMEs.",
    images: ["https://pexsoftwaresolutions.com/logo.webp"],
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
