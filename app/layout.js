// app/layout.js - Updated with LoadingProvider
import "./globals.css";
import { Inter, Plus_Jakarta_Sans, Outfit } from "next/font/google";
import Footer from "@/components/layout/Footer";
import PrefetchLinks from "@/components/PrefetchLinks";
import { LoadingProvider } from "@/components/LoadingProvider";

// Font configuration
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "Lumora Ventures | Modern Solutions",
  description:
    "Lumora Ventures - providing innovative technology and marketing solutions for modern businesses",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakartaSans.variable} ${outfit.variable} scroll-smooth`}
    >
      <body
        className={`flex flex-col min-h-screen ${inter.className}`}
        suppressHydrationWarning={true}
      >
        <LoadingProvider>
          <PrefetchLinks />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  );
}
