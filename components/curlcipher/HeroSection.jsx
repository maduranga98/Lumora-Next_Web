"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white pt-16 pb-20 lg:pt-24 lg:pb-32">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[100px]" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700 mb-6 border border-cyan-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              v2.0 Now Live
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-blue-900 mb-6">
              The Modern OS for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Forward-Thinking Salons
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Streamline appointments, manage inventory, and delight customers
              with an all-in-one platform designed for salons, spas, and barber
              shops.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="#contact"
                className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-blue-900 text-white rounded-full font-semibold hover:bg-blue-800 transition-all hover:scale-105 shadow-lg shadow-blue-900/20"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-white text-gray-700 border border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition-all hover:border-gray-300">
                <PlayCircle className="w-5 h-5 text-gray-400" />
                Watch Demo
              </button>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                <span>14-day free trial</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Image/Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl bg-gray-900/5 p-2 lg:p-4 backdrop-blur-sm border border-white/20">
              <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white aspect-[4/3]">
                <Image
                  src="/images/products/product-curl-cipher.avif" // Ensure this path matches your file
                  alt="Curl Cipher Dashboard"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Floating Badge Example */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-100 max-w-[200px]"
                >
                  <p className="text-xs text-gray-500 mb-1">Total Revenue</p>
                  <p className="text-xl font-bold text-blue-900">$12,450.00</p>
                  <div className="mt-1 flex items-center gap-1 text-[10px] text-green-600 bg-green-50 px-2 py-0.5 rounded-full w-fit">
                    <span>+12.5%</span>
                    <span>vs last month</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
