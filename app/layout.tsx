import type { Metadata } from "next";
import ConditionalNav from "../components/ConditionalNav";
import { LanguageProvider } from "../context/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PEX Solutions - Sustainable Food Technology",
    template: "%s | PEX Solutions",
  },
  description:
    "Next-generation solutions for modern challenges in food technology, quality assurance, and sustainable innovation.",
  keywords: [
    "PEX",
    "food technology",
    "quality assurance",
    "sustainable solutions",
  ],
  authors: [{ name: "PEX Solutions" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pex-solutions.com",
    title: "PEX Solutions",
    description: "Sustainable and innovative food technology solutions",
    siteName: "PEX Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "PEX Solutions",
    description: "Sustainable and innovative food technology solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased min-h-screen bg-gray-50 text-gray-900"
        style={{ fontFamily: "Nexa, sans-serif" }}
      >
        <LanguageProvider>
          <ConditionalNav />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
