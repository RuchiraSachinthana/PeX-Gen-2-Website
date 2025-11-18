import type { Metadata } from "next";
import PexGenPageClient from "./pex-gen-client";

export const metadata: Metadata = {
  title: "PEx Gen - Next-Generation Compliance & Performance Toolkit",
  description:
    "PEx Gen is the next-generation compliance and performance toolkit featuring AI-powered insights, real-time dashboards, gamified reporting, and strategic planning integration. Built for modern SMEs seeking operational excellence and competitive advantage.",
  keywords: [
    "PEx Gen",
    "next-generation compliance software",
    "AI-powered compliance",
    "performance toolkit",
    "strategic planning software",
    "operational excellence",
    "SME performance management",
    "AI insights",
    "real-time dashboards",
    "gamified reporting",
    "SWOT analysis integration",
    "PESTLE analysis",
    "OKR integration",
    "decision support system",
    "learning management",
  ],
  openGraph: {
    title: "PEx Gen - Next-Generation Compliance & Performance Toolkit",
    description:
      "AI-powered compliance and performance toolkit with real-time dashboards and strategic planning integration.",
    url: "https://pexsoftwaresolutions.com/pex-gen",
    images: [
      {
        url: "https://pexsoftwaresolutions.com/logo.webp",
        width: 1200,
        height: 630,
        alt: "PEx Gen - Next-Generation Compliance & Performance Toolkit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PEx Gen - Next-Generation Compliance & Performance Toolkit",
    description:
      "AI-powered compliance and performance toolkit with real-time dashboards and strategic planning integration.",
    images: ["https://pexsoftwaresolutions.com/logo.webp"],
  },
  alternates: {
    canonical: "https://pexsoftwaresolutions.com/pex-gen",
  },
};

export default function PexGenPage() {
  return <PexGenPageClient />;
}
