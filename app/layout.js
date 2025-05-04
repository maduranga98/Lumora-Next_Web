import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";

// Font configuration
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Lumora Ventures | Modern Solutions",
  description:
    "Lumora Ventures - providing innovative technology and marketing solutions for modern businesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        {/* Main content without global navbar */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
