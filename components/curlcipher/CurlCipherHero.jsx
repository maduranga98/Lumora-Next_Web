"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Crown, Shield, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden min-h-screen px-4 lg:px-8"
      style={{
        background:
          "radial-gradient(circle at top center, #1a0033 0%, #000000 40%, #0a1a3a 100%)",
      }}
    >
      {/* Advanced Background Elements */}
      <div className="absolute inset-0">
        {/* Gold Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 3px 3px, gold 1px, transparent 0)",
              backgroundSize: "72px 72px",
            }}
          ></div>
        </div>

        {/* Luxury Lighting Effects */}
        <div className="absolute top-0 left-1/4 w-96 md:w-96 lg:w-[500px] xl:w-[600px] h-96 md:h-96 lg:h-[500px] xl:h-[600px] bg-amber-500/10 rounded-full blur-[150px] transform -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-1/4 w-96 md:w-96 lg:w-[600px] xl:w-[800px] h-96 md:h-96 lg:h-[600px] xl:h-[800px] bg-purple-500/10 rounded-full blur-[200px] transform translate-y-1/2"></div>
      </div>

      <div className="relative container mx-auto py-16 md:py-20 lg:py-28 xl:py-40">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Enhanced Left Content */}
          <div className="flex-1 text-white space-y-6 md:space-y-8 lg:space-y-10 text-center lg:text-left">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-3 md:px-4 lg:px-5 py-1.5 rounded-full border border-yellow-300/30 bg-black/40 backdrop-blur-sm">
              <Crown className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-yellow-300" />
              <span className="text-xs md:text-sm font-medium text-yellow-300">
                Premier Salon Management Platform
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-serif font-light leading-tight">
              Redefine Salon Excellence with
              <span className="block font-medium mt-2 md:mt-3 lg:mt-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-300">
                Curl Cipher
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              The pinnacle of salon management technology, seamlessly connecting
              prestigious establishments with discerning clientele.
            </p>

            {/* Luxury App Cards with App Logos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 my-8 lg:my-12">
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-700/5 to-orange-700/10 backdrop-blur-sm"></div>
                <div className="relative p-4 md:p-6 lg:p-8 border border-yellow-300/20">
                  <div className="flex flex-col">
                    {/* Client App Logo */}
                    <div className="flex justify-center lg:justify-start mb-2">
                      <Image
                        src="/customer.png" // Replace with your client app logo path
                        alt="Client App Logo"
                        width={70}
                        height={70}
                        className="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 object-contain"
                      />
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-serif text-white text-center lg:text-left mb-3 md:mb-4">
                      Curl Cipher Elite
                    </h3>
                  </div>
                  <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-400 leading-relaxed text-center lg:text-left">
                    Premium experience for distinguished clientele to discover
                    and book exceptional salon services
                  </p>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-700/5 to-indigo-700/10 backdrop-blur-sm"></div>
                <div className="relative p-4 md:p-6 lg:p-8 border border-blue-400/20">
                  <div className="flex flex-col">
                    {/* Manager App Logo */}
                    <div className="flex justify-center lg:justify-start mb-2">
                      <Image
                        src="/manage.png" // Replace with your manager app logo path
                        alt="Manager App Logo"
                        width={70}
                        height={70}
                        className="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 object-contain"
                      />
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-serif text-white text-center lg:text-left mb-3 md:mb-4">
                      Curl Cipher Manager
                    </h3>
                  </div>
                  <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-400 leading-relaxed text-center lg:text-left">
                    Sophisticated management suite for salon owners to
                    orchestrate operations with unparalleled precision
                  </p>
                </div>
              </div>
            </div>

            {/* Premium CTA Buttons with Download Now */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5 lg:gap-6 justify-center lg:justify-start mt-8 md:mt-12 lg:mt-16">
              <button className="group relative px-6 py-3 md:px-8 md:py-4 lg:px-8 lg:py-4 text-sm md:text-base lg:text-lg xl:text-xl overflow-hidden rounded-lg transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <span className="relative z-10 text-black group-hover:text-yellow-300 font-medium transition-colors duration-500">
                  Experience Excellence
                </span>
              </button>

              <a
                href="#"
                className="px-6 py-3 md:px-8 md:py-4 lg:px-8 lg:py-4 text-sm md:text-base lg:text-lg xl:text-xl border-2 border-yellow-300 text-yellow-300 font-medium rounded-lg hover:bg-yellow-300/10 transition-all duration-300 flex items-center justify-center sm:justify-start gap-2"
              >
                <Download className="w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                <span>Download for Android</span>
              </a>
            </div>
          </div>

          {/* App Mockups Using Actual Screenshots */}
          <div className="flex-1 relative mt-12 lg:mt-0">
            <div className="relative flex justify-center items-center gap-6 md:gap-8 lg:gap-10">
              {/* Client App (Gold Theme) */}
              <div className="relative w-40 h-[340px] sm:w-48 sm:h-[390px] md:w-56 md:h-[450px] lg:w-64 lg:h-[520px] xl:w-72 xl:h-[560px] -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-700 rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl">
                  <div className="absolute inset-1 bg-black rounded-[1.8rem] lg:rounded-[2.2rem] overflow-hidden">
                    {/* Using the provided client app screenshot */}
                    <Image
                      src="/curlcipher.png" // Replace with your actual path to Image 1
                      alt="Curl Cipher Client App"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 md:w-28 lg:w-32 h-4 md:h-5 lg:h-6 bg-black rounded-b-3xl"></div>
                </div>
                <div className="absolute -bottom-10 md:-bottom-12 lg:-bottom-14 left-1/2 transform -translate-x-1/2 text-white text-center">
                  <p className="font-serif text-base md:text-lg font-medium">
                    Elite Client
                  </p>
                  <p className="text-xs md:text-sm text-amber-300">
                    For Valued Patrons
                  </p>
                </div>
              </div>

              {/* Manager App (Blue Theme) */}
              <div className="relative w-40 h-[340px] sm:w-48 sm:h-[390px] md:w-56 md:h-[450px] lg:w-64 lg:h-[520px] xl:w-72 xl:h-[560px] rotate-6 hover:rotate-0 transition-transform duration-300 mt-12 lg:mt-16">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-indigo-800 rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl">
                  <div className="absolute inset-1 bg-black rounded-[1.8rem] lg:rounded-[2.2rem] overflow-hidden">
                    {/* Using the provided manager app screenshot */}
                    <Image
                      src="/manage.jpg" // Replace with your actual path to Image 2
                      alt="Curl Cipher Manager App"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 md:w-28 lg:w-32 h-4 md:h-5 lg:h-6 bg-black rounded-b-3xl"></div>
                </div>
                <div className="absolute -bottom-10 md:-bottom-12 lg:-bottom-14 left-1/2 transform -translate-x-1/2 text-white text-center">
                  <p className="font-serif text-base md:text-lg font-medium">
                    Elite Manager
                  </p>
                  <p className="text-xs md:text-sm text-blue-300">
                    For Distinguished Owners
                  </p>
                </div>
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute -left-8 -top-8 md:-left-10 md:-top-10 lg:-left-12 lg:-top-12 w-24 md:w-32 lg:w-40 h-24 md:h-32 lg:h-40 bg-amber-400/15 rounded-full blur-2xl"></div>
              <div className="absolute -right-8 -bottom-8 md:-right-10 md:-bottom-10 lg:-right-12 lg:-bottom-12 w-20 md:w-24 lg:w-32 h-20 md:h-24 lg:h-32 bg-blue-400/15 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 md:w-48 lg:w-60 h-40 md:h-48 lg:h-60 bg-yellow-400/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* Luxury Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-28 lg:h-32 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;
