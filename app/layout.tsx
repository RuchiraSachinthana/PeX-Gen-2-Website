import type { Metadata } from "next";
import ConditionalNav from "../components/ConditionalNav";
import { LanguageProvider } from "../context/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pex-solutions.com"),
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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pex-solutions.com",
    title: "PEX Solutions",
    description: "Sustainable and innovative food technology solutions",
    siteName: "PEX Solutions",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "PEX Solutions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PEX Solutions",
    description: "Sustainable and innovative food technology solutions",
    images: ["/logo.webp"],
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
