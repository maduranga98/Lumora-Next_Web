"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = ({ scrollToSection }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { value: "250+", label: "Projects" },
    { value: "50+", label: "Clients" },
    { value: "99%", label: "Satisfaction" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/hero.avif"
        alt="Lumora Ventures hero background"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(135deg, rgba(37,99,235,0.88) 0%, rgba(30,64,175,0.9) 50%, rgba(30,58,138,0.92) 100%)",
        }}
      />

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-[2]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-40 -left-40 w-80 h-80 md:w-[500px] md:h-[500px] bg-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="absolute -bottom-40 -right-40 w-80 h-80 md:w-[500px] md:h-[500px] bg-cyan-400/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-indigo-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm text-blue-100 font-medium">Full-Spectrum Technology Partner</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Technology That
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
              Transforms Business
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            We build intelligent software solutions — from web and mobile apps
            to advanced AI systems and industrial automation.
          </motion.p>

          {/* Single CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mb-14"
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="group inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Let&apos;s Talk About Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Statistics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex items-center justify-center gap-8 sm:gap-12 md:gap-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center relative">
                {index > 0 && (
                  <div className="absolute -left-4 sm:-left-6 md:-left-8 top-1/2 -translate-y-1/2 w-px h-10 bg-white/20" />
                )}
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-blue-200 text-sm sm:text-base mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-[3]">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
