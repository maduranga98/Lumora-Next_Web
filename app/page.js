// app/page.js
import { Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import ServiceOverview from "@/components/ServiceOverview";
import AboutUsSection from "@/components/AboutUsSection";
import ServiceSection from "@/components/ServiceSection";
import ContactPage from "@/components/Contact";
import OptimizedNavbar from "@/components/layout/OptimizedNavbar";
import Loading from "./loading";

export default function Home() {
  return (
    <>
      <OptimizedNavbar />
      <Suspense fallback={<Loading />}>
        <HeroSection />
        <ServiceOverview />
        <AboutUsSection />
        <ServiceSection />
        <ContactPage />
      </Suspense>
    </>
  );
}
