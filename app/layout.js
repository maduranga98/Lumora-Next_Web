import "./globals.css";
import { Inter, Plus_Jakarta_Sans, Outfit } from "next/font/google";
import Footer from "@/components/layout/Footer";

// Font configuration
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
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
      {/* Add suppressHydrationWarning to body element */}
      <body
        className={`flex flex-col min-h-screen ${inter.className}`}
        suppressHydrationWarning={true}
      >
        {/* Main content without global navbar */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
