"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/animation/AnimatedSection";

const CTASection = () => {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: "40vh", minHeight: "320px" }}
    >
      {/* Full-width background image */}
      <Image
        src="/images/modern-office-cta.avif"
        alt="Modern office technology background"
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-blue-900/80 z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>

          <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8">
            Let&apos;s discuss how technology can drive your growth.
          </p>

          <Link
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("contact");
              if (el) {
                const navbarHeight = window.innerWidth >= 1280 ? 80 : 64;
                const offset = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
                window.scrollTo({ top: offset, behavior: "smooth" });
                window.history.pushState(null, "", "#contact");
              }
            }}
            className="group inline-flex items-center gap-2 bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Schedule Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
