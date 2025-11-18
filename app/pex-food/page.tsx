import type { Metadata } from "next";
import PexFoodPageClient from "./pex-food-client";

export const metadata: Metadata = {
  title: "PEx Food - Food Safety & Quality Compliance Software",
  description:
    "Comprehensive food safety and quality management software for food manufacturers and processors. Ensure compliance with food safety standards, HACCP, ISO 22000, and regulatory requirements. Streamline food safety documentation, traceability, and quality control.",
  keywords: [
    "PEx Food",
    "food safety software",
    "HACCP software",
    "ISO 22000 software",
    "food quality management",
    "food traceability software",
    "food compliance software",
    "food manufacturing software",
    "food safety management system",
    "FSMS software",
    "food industry compliance",
    "food safety documentation",
    "food quality control",
  ],
  openGraph: {
    title: "PEx Food - Food Safety & Quality Compliance Software",
    description:
      "Comprehensive food safety and quality management software for food manufacturers and processors.",
    url: "https://pex-solutions.com/pex-food",
  },
  alternates: {
    canonical: "https://pex-solutions.com/pex-food",
  },
};

export default function PexFoodPage() {
  return <PexFoodPageClient />;
}
