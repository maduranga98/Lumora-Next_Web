// app/page.js
import { Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import ServiceOverview from "@/components/ServiceOverview";
import AboutUsSection from "@/components/AboutUsSection";
import ServiceSection from "@/components/ServiceSection";
import ContactPage from "@/components/Contact";
import OptimizedNavbar from "@/components/layout/OptimizedNavbar";
import Loading from "./loading";

// Adding export for metadata for better SEO
export const metadata = {
  title:
    "Lumora Ventures | Digital Business Transformation & Automation Solutions",
  description:
    "Transform your business with our innovative digital solutions. We offer Google Business optimization, salon management systems, and industrial automation to boost growth and streamline operations.",
  keywords: [
    "digital business transformation",
    "business automation solutions",
    "local business optimization",
    "salon management software",
    "industrial automation systems",
    "google business profile management",
    "business growth solutions",
    "streamline operations",
    "lumora ventures",
  ],
  openGraph: {
    title:
      "Lumora Ventures | Digital Business Transformation & Automation Solutions",
    description:
      "Transform your business with our innovative digital solutions. We offer Google Business optimization, salon management systems, and industrial automation to boost growth and streamline operations.",
    url: "https://lumoraventures.com/",
    siteName: "Lumora Ventures",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lumora Ventures - Digital Business Transformation Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Lumora Ventures | Digital Business Transformation & Automation Solutions",
    description:
      "Transform your business with our innovative digital solutions. We offer Google Business optimization, salon management systems, and industrial automation to boost growth and streamline operations.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  canonical: "https://lumoraventures.com/",
  verification: {
    google: "your-google-verification-code", // Add your actual verification code
  },
  alternates: {
    canonical: "https://lumoraventures.com/",
  },
};

export default function Home() {
  return (
    <>
      <OptimizedNavbar />
      <Suspense fallback={<Loading />}>
        <HeroSection />
        <ServiceOverview />
        <AboutUsSection />
        <ServiceSection />
        <ContactPage />
      </Suspense>
    </>
  );
}
