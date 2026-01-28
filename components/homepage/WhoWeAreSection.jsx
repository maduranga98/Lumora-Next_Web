"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/animation/AnimatedSection";

const WhoWeAreSection = () => {
  return (
    <section id="about" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Image - 40% */}
          <AnimatedSection variant="slideLeft" className="md:col-span-2">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/about.avif"
                alt="Lumora Ventures team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </AnimatedSection>

          {/* Text - 60% */}
          <AnimatedSection variant="slideRight" delay={0.15} className="md:col-span-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
              Who We Are
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Lumora Ventures is a Sri Lankan technology company specializing in
              software development, mobile applications, industrial automation,
              and AI/ML solutions.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We build custom technology that drives business growth, operational
              efficiency, and competitive advantage across multiple industries.
            </p>

            <Link
              href="#about-detail"
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
              className="group inline-flex items-center gap-2 text-blue-600 font-semibold text-lg hover:text-blue-800 transition-colors"
            >
              Read More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
