import type { Metadata } from "next";
import Script from "next/script";
import ConditionalNav from "../components/ConditionalNav";
import { LanguageProvider } from "../context/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pexsoftwaresolutions.com"),
  title: {
    default: "PEx Software™ - Full Compliance & Performance Toolkit for SMEs",
    template: "%s | PEx Software™",
  },
  description:
    "PEx Software™ is a full compliance and performance toolkit—not just BPM software. Transform ISO 9001, ISO 14001, ISO 45001 compliance into competitive advantage with AI-powered insights, real-time dashboards, and strategic alignment for CEOs and Quality Managers of SMEs in manufacturing, logistics, and services across Sri Lanka & India.",
  keywords: [
    "PEx Software",
    "compliance toolkit",
    "performance toolkit",
    "ISO 9001 software",
    "ISO 14001 software",
    "ISO 45001 software",
    "QMS software",
    "quality management system",
    "SME compliance software",
    "manufacturing compliance",
    "logistics compliance",
    "service industry compliance",
    "Sri Lanka compliance software",
    "India compliance software",
    "ISO certification software",
    "audit management software",
    "KPI tracking software",
    "performance management",
    "continual improvement software",
    "document control software",
    "non-conformity tracking",
    "corrective action management",
    "CEO dashboard",
    "quality manager software",
    "strategic alignment software",
    "AI-powered compliance",
    "real-time compliance dashboards",
    "audit ready software",
    "process automation",
    "operational excellence",
    "competitive advantage",
    "family-owned SME software",
  ],
  authors: [{ name: "PEx Solutions" }],
  creator: "PEx Solutions",
  publisher: "PEx Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
  alternates: {
    canonical: "https://pexsoftwaresolutions.com",
    languages: {
      en: "https://pexsoftwaresolutions.com",
      si: "https://pexsoftwaresolutions.com/si",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pexsoftwaresolutions.com",
    title: "PEx Software™ - Full Compliance & Performance Toolkit",
    description:
      "Transform ISO compliance into competitive advantage. AI-powered compliance and performance toolkit for CEOs and Quality Managers of SMEs in manufacturing, logistics, and services.",
    siteName: "PEx Software™",
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
    title: "PEx Software™ - Full Compliance & Performance Toolkit",
    description:
      "Transform ISO compliance into competitive advantage. AI-powered toolkit for SMEs.",
    images: ["https://pexsoftwaresolutions.com/logo.webp"],
  },
  category: "Business Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaMeasurementId =
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-26Y2X9D2YN";
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-P3T633TP";

  return (
    <html lang="en" suppressHydrationWarning>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
      />
      {/* Google Analytics */}
      <Script
        id="gtag-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
      />
      <Script id="gtag-inline" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaMeasurementId}');
        `}
      </Script>
      <body
        className="antialiased min-h-screen bg-gray-50 text-gray-900"
        style={{ fontFamily: "Nexa, sans-serif" }}
        suppressHydrationWarning
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        <LanguageProvider>
          <ConditionalNav />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
