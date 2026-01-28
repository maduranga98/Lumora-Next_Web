"use client";

import { ArrowRight, Code, Smartphone, Brain, Cog } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/animation/AnimatedSection";

const WhatWeDoSection = () => {
  const services = [
    { icon: Code, label: "Software Development" },
    { icon: Smartphone, label: "Mobile Applications" },
    { icon: Brain, label: "AI & Machine Learning" },
    { icon: Cog, label: "Industrial Automation" },
  ];

  return (
    <section id="services" className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Text - 60% */}
          <AnimatedSection variant="slideLeft" className="md:col-span-3 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
              What We Do
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We deliver comprehensive technology solutions from concept to
              deployment across four core areas:
            </p>

            <ul className="space-y-4 mb-8">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <li
                    key={service.label}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-4 h-4 text-blue-900" />
                    </div>
                    <span className="text-lg font-medium">{service.label}</span>
                  </li>
                );
              })}
            </ul>

            <p className="text-base text-gray-600 leading-relaxed mb-8">
              Whether you need a web application, mobile app, intelligent
              automation system, or complete digital transformation, we have the
              expertise to deliver.
            </p>

            <Link
              href="#products"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("products");
                if (el) {
                  const navbarHeight = window.innerWidth >= 1280 ? 80 : 64;
                  const offset = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
                  window.scrollTo({ top: offset, behavior: "smooth" });
                  window.history.pushState(null, "", "#products");
                }
              }}
              className="group inline-flex items-center gap-2 text-blue-600 font-semibold text-lg hover:text-blue-800 transition-colors"
            >
              Read More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>

          {/* Image - 40% */}
          <AnimatedSection variant="slideRight" delay={0.15} className="md:col-span-2 order-1 md:order-2">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/code-on-screen.avif"
                alt="Developer working on code at Lumora Ventures"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
