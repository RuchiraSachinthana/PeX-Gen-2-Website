import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Contact Us - Get Started with PEx Software™",
  description:
    "Contact PEx Solutions to learn how our compliance and performance toolkit can transform your ISO compliance into competitive advantage. Schedule a demo or consultation for SMEs in Sri Lanka & India.",
  keywords: [
    "contact PEx Software",
    "PEx Software demo",
    "PEx Software consultation",
    "ISO software demo",
    "compliance software consultation",
    "PEx Software pricing",
    "request demo",
  ],
  openGraph: {
    title: "Contact Us - Get Started with PEx Software™",
    description:
      "Schedule a demo or consultation to transform your ISO compliance into competitive advantage.",
    url: "https://pex-solutions.com/contact",
  },
  alternates: {
    canonical: "https://pex-solutions.com/contact",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ContactPage() {
  redirect("/pex-quality");
}
