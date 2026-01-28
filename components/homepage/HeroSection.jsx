"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden pt-20"
      style={{ minHeight: "100vh" }}
    >
      {/* Full-width hero background image */}
      <Image
        src="/images/hero-tech-team.avif"
        alt="Professional tech team working at Lumora Ventures"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Subtle dark overlay for depth */}
      <div className="absolute inset-0 bg-black/20 z-[1]" />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        {/* Text overlay box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 sm:p-10 md:p-12 max-w-xl shadow-elevated"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight mb-4">
            LUMORA VENTURES
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-3">
            Building tomorrow&apos;s technology solutions today.
          </p>

          <p className="text-base text-gray-600 leading-relaxed mb-8">
            From AI-powered automation to complete business management systems,
            we create software that solves real problems.
          </p>

          <Link
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("about");
              if (el) {
                const navbarHeight = window.innerWidth >= 1280 ? 80 : 64;
                const offset = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
                window.scrollTo({ top: offset, behavior: "smooth" });
                window.history.pushState(null, "", "#about");
              }
            }}
            className="group inline-flex items-center gap-2 text-blue-600 font-semibold text-lg hover:text-blue-800 transition-colors"
          >
            Read More
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
