// app/page.js
import HeroSection from "@/components/HeroSection";
import ServiceOverview from "@/components/ServiceOverview";
import AboutUsSection from "@/components/AboutUsSection";
import ServiceSection from "@/components/ServiceSection";
import ContactPage from "@/components/Contact";
// import Hero from "@/components/home/Hero";
// import AboutSection from "@/components/home/AboutSection";
// import Features from "@/components/home/Features";
// import ServiceCards from "@/components/home/ServiceCards";
import Navbar from "@/components/layout/Navbar";
// import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <ServiceOverview />
        <AboutUsSection />
        <ServiceSection />
        <ContactPage />
      </main>
    </>
  );
}
