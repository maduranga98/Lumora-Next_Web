// app/layout.js
import "./globals.css";
import { Inter, Plus_Jakarta_Sans, Outfit } from "next/font/google";
import Footer from "@/components/layout/Footer";
import PrefetchLinks from "@/components/PrefetchLinks";
import { LoadingProvider } from "@/components/LoadingProvider";
import JsonLdSchema from "@/components/JsonLdSchema";

// Font configuration with preload
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  preload: true,
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
});

export const metadata = {
  metadataBase: new URL("https://www.lumoraventures.com"),
  title: {
    default:
      "Lumora Ventures | Complete Technology Solutions: From Apps to AI",
    template: "%s | Lumora Ventures",
  },
  description:
    "Full-spectrum technology company delivering web apps, mobile applications, AI/ML solutions, and industrial automation. From concept to deployment - 250+ projects delivered.",
  keywords: [
    "software development",
    "mobile apps",
    "AI",
    "machine learning",
    "computer vision",
    "IoT",
    "industrial automation",
    "web development",
    "Flutter",
    "React",
    "Next.js",
    "predictive maintenance",
    "digital twins",
    "custom software",
    "SaaS development",
    "enterprise solutions",
    "Sri Lanka",
    "Lumora Ventures",
  ],
  authors: [{ name: "Lumora Ventures Team" }],
  creator: "Lumora Ventures",
  publisher: "Lumora Ventures PVT LTD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Lumora Ventures | Complete Technology Solutions: From Apps to AI",
    description:
      "We build everything your business needs: elegant web and mobile applications, intelligent automation systems, and advanced AI solutions that drive real results.",
    url: "https://www.lumoraventures.com/",
    siteName: "Lumora Ventures",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lumora Ventures - Complete Technology Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumora Ventures | Complete Technology Solutions",
    description:
      "Software, Mobile, AI & Automation solutions that drive real results",
    images: ["/twitter-image.jpg"],
    creator: "@lumoraventures",
  },
  verification: {
    google: "PUM4vN_Owfm40PwBN31rUydM45YQAm5i7VONVly6w0M",
  },
  alternates: {
    canonical: "https://www.lumoraventures.com",
    languages: {
      "en-US": "https://www.lumoraventures.com",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#2563EB",
      },
    ],
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  category: "technology",
};

// Structured data for organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lumora Ventures PVT LTD",
  url: "https://www.lumoraventures.com",
  logo: "https://www.lumoraventures.com/logo.png",
  description:
    "Complete technology solutions including software development, mobile applications, AI/ML, and industrial automation",
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kandy",
    addressRegion: "Central Province",
    addressCountry: "LK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+94-77-986-1174",
    contactType: "sales",
    email: "info@lumoraventures.com",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://www.linkedin.com/company/lumora-ventures-pvt-ltd/",
    "https://github.com/lumoraventures",
    "https://twitter.com/lumoraventures",
  ],
  knowsAbout: [
    "Software Development",
    "Mobile App Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Industrial Automation",
    "IoT",
    "Predictive Maintenance",
    "Digital Twins",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakartaSans.variable} ${outfit.variable} scroll-smooth`}
    >
      <head>
        <meta name="theme-color" content="#2563EB" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`flex flex-col min-h-screen ${inter.className}`}
        suppressHydrationWarning={true}
      >
        <LoadingProvider>
          <PrefetchLinks />
          <JsonLdSchema />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  );
}
