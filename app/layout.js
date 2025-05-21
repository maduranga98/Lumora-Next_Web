// app/layout.js (Optimized)
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
      "Lumora Ventures | Tech & Marketing Solutions for Modern Businesses",
    template: "%s | Lumora Ventures",
  },
  description:
    "Lumora Ventures provides smart, scalable technology and marketing solutions including Google My Business profile management, salon software, and industrial automation.",
  keywords: [
    "Lumora Ventures",
    "business technology solutions",
    "digital marketing",
    "GMB management",
    "salon management software",
    "industrial automation",
    "business transformation",
    "digital solutions",
    "tech solutions",
    "marketing automation",
  ],
  authors: [{ name: "Lumora Ventures Team" }],
  creator: "Lumora Ventures",
  publisher: "Lumora Ventures",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Lumora Ventures | Tech & Marketing for Modern Businesses",
    description:
      "Explore innovative business solutions in digital marketing, automation, and salon management software from Lumora Ventures.",
    url: "https://www.lumoraventures.com/",
    siteName: "Lumora Ventures",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lumora Ventures - Business Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumora Ventures | Tech & Marketing",
    description:
      "Grow your business with Lumora Ventures' modern solutions — from GMB to automation.",
    images: ["/twitter-image.jpg"],
    creator: "@lumoraventures",
  },
  verification: {
    google: "PUM4vN_Owfm40PwBN31rUydM45YQAm5i7VONVly6w0M",
    other: {
      "facebook-domain-verification": "[Your-Facebook-Verification-Code]",
    },
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
        color: "#3B82F6",
      },
    ],
  },
  manifest: "/site.webmanifest",
  // Add viewport settings at the layout level
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakartaSans.variable} ${outfit.variable} scroll-smooth`}
    >
      <head>
        <meta name="theme-color" content="#3B82F6" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        {/* Add any other preconnect domains you use */}
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
