"use client";

import {
  Dumbbell,
  Factory,
  Heart,
  Building,
  ShoppingBag,
  UtensilsCrossed,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/animation/AnimatedSection";

const IndustriesSection = () => {
  const industries = [
    { icon: Dumbbell, name: "Fitness & Wellness" },
    { icon: Factory, name: "Manufacturing & Automation" },
    { icon: Heart, name: "Healthcare & Corporate" },
    { icon: ShoppingBag, name: "Retail & Distribution" },
    { icon: UtensilsCrossed, name: "Food & Hospitality" },
    { icon: Sparkles, name: "Beauty & Personal Care" },
  ];

  return (
    // Added overflow-hidden to prevent horizontal scroll during animation
    <section
      id="industries"
      className="py-20 md:py-24 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Image - 40% */}
          <AnimatedSection variant="slideLeft" className="md:col-span-2">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/industries-collage.avif"
                alt="Industries served by Lumora Ventures"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </AnimatedSection>

          {/* Text - 60% */}
          <AnimatedSection
            variant="slideRight"
            delay={0.15}
            className="md:col-span-3"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
              Industries We Serve
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We partner with organizations across diverse sectors, delivering
              tailored technology solutions that address unique industry
              challenges.
            </p>

            <ul className="space-y-3 mb-8">
              {industries.map((industry) => {
                const IconComponent = industry.icon;
                return (
                  <li
                    key={industry.name}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-500 flex-shrink-0" />
                    <span className="text-lg">{industry.name}</span>
                  </li>
                );
              })}
            </ul>

            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("contact");
                if (el) {
                  const navbarHeight = window.innerWidth >= 1280 ? 80 : 64;
                  const offset =
                    el.getBoundingClientRect().top +
                    window.pageYOffset -
                    navbarHeight -
                    20;
                  window.scrollTo({ top: offset, behavior: "smooth" });
                  window.history.pushState(null, "", "#contact");
                }
              }}
              className="group inline-flex items-center gap-2 text-blue-600 font-semibold text-lg hover:text-blue-800 transition-colors"
            >
              See Case Studies
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
