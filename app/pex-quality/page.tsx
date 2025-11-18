import type { Metadata } from "next";
import PexQualityPageClient from "./pex-quality-client";

export const metadata: Metadata = {
  title: "PEx Quality - ISO 9001 QMS Software for Quality Managers & CEOs",
  description:
    "Reduce documentation work by 90% with PEx Quality. Be audit-ready anytime with smart automation, real-time visibility, and strategic alignment. Built for Quality Managers who want to lead, not just comply. Transform ISO 9001 from paperwork burden into a dynamic system for visibility, influence, and impact.",
  keywords: [
    "PEx Quality",
    "ISO 9001 software",
    "QMS software",
    "quality management system",
    "quality manager software",
    "audit ready software",
    "documentation automation",
    "non-conformity tracking",
    "corrective action management",
    "audit management",
    "SME quality software",
    "quality compliance software",
    "ISO certification software",
    "continual improvement software",
    "document control software",
    "version control",
    "smart templates",
    "semantic search",
    "gamified recognition",
    "CEO dashboard",
    "strategic alignment",
  ],
  openGraph: {
    title: "PEx Quality - ISO 9001 QMS Software | Reduce Documentation by 90%",
    description:
      "Be audit-ready anytime. Smart automation, real-time visibility, and strategic alignment for Quality Managers.",
    url: "https://pexsoftwaresolutions.com/pex-quality",
    images: [
      {
        url: "https://pexsoftwaresolutions.com/logo.webp",
        width: 1200,
        height: 630,
        alt: "PEx Quality - ISO 9001 QMS Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PEx Quality - ISO 9001 QMS Software | Reduce Documentation by 90%",
    description:
      "Be audit-ready anytime. Smart automation, real-time visibility, and strategic alignment for Quality Managers.",
    images: ["https://pexsoftwaresolutions.com/logo.webp"],
  },
  alternates: {
    canonical: "https://pexsoftwaresolutions.com/pex-quality",
  },
};

export default function PexQualityPage() {
  return <PexQualityPageClient />;
}
