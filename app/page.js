import Navbar from "@/components/homepage/Navbar";
import HeroSection from "@/components/homepage/HeroSection";
import WhoWeAreSection from "@/components/homepage/WhoWeAreSection";
import WhatWeDoSection from "@/components/homepage/WhatWeDoSection";
import ProductsSection from "@/components/homepage/ProductsSection";
import IndustriesSection from "@/components/homepage/IndustriesSection";
import InnovationSection from "@/components/homepage/InnovationSection";
import CTASection from "@/components/homepage/CTASection";
import ContactSection from "@/components/homepage/ContactSection";
import ScrollManager from "@/components/homepage/ScrollManager";
import PageViewTracker from "@/components/homepage/PageViewTracker";
export { metadata } from "./metadata";

/**
 * Homepage - Server-rendered for optimal SEO and content visibility
 * Client-side features (scroll behavior, analytics) are handled by separate client components
 */
export default function Home() {
  return (
    <>
      {/* Client-side utilities - don't render visible content */}
      <ScrollManager />
      <PageViewTracker />

      {/* Main content - server-rendered for SEO */}
      <Navbar />

      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: Who We Are */}
      <WhoWeAreSection />

      {/* Section 3: What We Do */}
      <WhatWeDoSection />

      {/* Section 4: Our Products */}
      <ProductsSection />

      {/* Section 5: Industries We Serve */}
      <IndustriesSection />

      {/* Section 6: Innovation Highlights */}
      <InnovationSection />

      {/* Section 7: Call to Action */}
      <CTASection />

      {/* Section 8: Contact */}
      <div id="contact-wrapper">
        <ContactSection />
      </div>
    </>
  );
}
