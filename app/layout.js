import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Font configuration
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Your Company Name | Modern Solutions",
  description:
    "Your company description goes here - providing innovative solutions for businesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
