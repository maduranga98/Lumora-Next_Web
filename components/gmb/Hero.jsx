// components/hero/HeroSectionGMB.jsx
"use client";

import Image from "next/image";

export default function HeroSectionGMB() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[#FFF7ED] to-[#FED7AA]">
      {/* Decorative background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Background image with proper blending */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-full h-full lg:w-1/2 opacity-10 lg:opacity-20">
        <Image
          src="/gmb-hero.png"
          alt=""
          fill
          className="object-contain"
          priority
          aria-hidden="true"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full py-20">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 lg:mb-8 leading-tight">
              Dominate Local Search with
              <span className="text-teal-600 block mt-2">
                Google My Business
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 lg:mb-10 max-w-2xl">
              Transform your local presence into a customer magnet. Our expert
              GMB management helps you rank higher, attract more customers, and
              grow your business effortlessly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-center justify-center lg:justify-start">
              <button className="bg-teal-600 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-lg font-semibold text-base lg:text-lg hover:bg-teal-700 transition">
                Get Started Today
              </button>
              <button className="border-2 border-teal-600 text-teal-600 px-8 py-4 lg:px-10 lg:py-5 rounded-lg font-semibold text-base lg:text-lg hover:bg-teal-50 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Main visible Hero Image */}
          <div className="relative w-full h-[400px] lg:h-[500px]">
            <Image
              src="/gmb-hero.png"
              alt="Google My Business Management"
              fill
              className="object-contain z-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
