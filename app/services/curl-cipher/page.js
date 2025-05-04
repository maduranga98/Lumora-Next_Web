import AppOverviewSection from "@/components/curlcipher/AppOverviewSection";
import ContactSection from "@/components/curlcipher/ContactSection";
import HeroSection from "@/components/curlcipher/CurlCipherHero";
import FeaturesSection from "@/components/curlcipher/FeaturesSection";
import Navbar from "@/components/curlcipher/Navbar";
import PricingSection from "@/components/curlcipher/PricingSection";

export default function CurlCipherPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <section id="overview">
          <AppOverviewSection />
        </section>
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </>
  );
}
