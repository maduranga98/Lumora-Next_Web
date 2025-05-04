// app/page.js
import HeroSection from "@/components/HeroSection";
import ServiceOverview from "@/components/ServiceOverview";
import AboutUsSection from "@/components/AboutUsSection";
import ServiceSection from "@/components/ServiceSection";
import ContactPage from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServiceOverview />
      <AboutUsSection />
      <ServiceSection />
      <ContactPage />
    </main>
  );
}
