"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

const stats = [
  { value: "99.95%", label: "Uptime Guarantee" },
  { value: "200%", label: "ROI in 18 Months" },
  { value: "24/7", label: "Expert Support" },
  { value: "50+", label: "Plants Automated" },
];

const IndustrialAutomationHero = () => {
  const [isMounted, setIsMounted] = useState(false);

  const heroSchema = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    isPartOf: {
      "@type": "WebPage",
      name: "Industrial Automation Solutions",
      url: "https://www.lumoraventures.com/industrial-automation",
    },
    name: "Industrial Automation Hero Section",
    description:
      "Lumora Ventures delivers cutting-edge industrial automation solutions that redefine productivity and operational excellence.",
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToSection = (sectionId, e) => {
    if (e) e.preventDefault();
    if (!isMounted) return;
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const offsetPosition =
        element.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  return (
    <>
      <Script
        id="hero-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(heroSchema) }}
      />

      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-slate-950"
        aria-labelledby="hero-heading"
      >
        {/* Background Image with stronger overlay */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/hero-industrial-automation.webp"
            alt=""
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-blue-950/80 to-slate-900/95" />
        </div>

        {/* Animated grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 md:pt-36 pb-16 flex items-center min-h-screen">
          <div className="w-full">
            {/* Badge */}
            <motion.div
              className="flex justify-center lg:justify-start mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-300 text-sm font-medium backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                Industry 5.0 — Next-Gen Automation
              </span>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="text-center lg:text-left">
                <motion.h1
                  id="hero-heading"
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.1]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isMounted ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Industrial Evolution
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300">
                    Through Smart Automation
                  </span>
                </motion.h1>

                <motion.p
                  className="text-lg sm:text-xl text-slate-400 mb-8 max-w-xl lg:max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isMounted ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.25 }}
                >
                  Lumora Ventures delivers cutting-edge industrial automation
                  solutions that redefine productivity, efficiency, and
                  operational excellence for manufacturing facilities.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isMounted ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Link
                    href="#contact"
                    onClick={(e) => scrollToSection("contact", e)}
                    className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:shadow-xl flex items-center justify-center gap-2 text-base"
                    aria-label="Contact us to revolutionize your manufacturing plant"
                  >
                    Revolutionize Your Plant
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>

                  <Link
                    href="#automation"
                    onClick={(e) => scrollToSection("automation", e)}
                    className="px-8 py-4 border border-slate-600 hover:border-blue-500/60 text-slate-300 hover:text-white hover:bg-white/5 font-semibold rounded-xl transition-all duration-300 text-base backdrop-blur-sm"
                    aria-label="Explore our industrial automation solutions"
                  >
                    Explore Solutions
                  </Link>
                </motion.div>
              </div>

              {/* Stats Grid */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isMounted ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                role="img"
                aria-label="Industrial automation performance metrics"
              >
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-blue-500/40 hover:bg-white/8 transition-all duration-300"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                    <div className="relative z-10">
                      <div className="text-3xl xl:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-slate-400 text-sm font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Dashboard visual */}
                <div className="col-span-2 relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 overflow-hidden">
                  <div className="text-slate-400 text-xs font-medium mb-3 uppercase tracking-wider">
                    System Performance
                  </div>
                  <div className="flex items-end gap-2 h-16">
                    {[65, 80, 55, 90, 75, 95, 70, 88, 60, 92].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-600 to-cyan-400 opacity-80"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-white text-2xl font-bold">89%</span>
                    <span className="text-green-400 text-sm font-medium flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      +12% this month
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" aria-hidden="true" />
      </section>
    </>
  );
};

export default IndustrialAutomationHero;
