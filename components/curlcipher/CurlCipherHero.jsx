"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Crown, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden min-h-[95vh] px-4 lg:px-8"
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
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] transform -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[200px] transform translate-y-1/2"></div>
      </div>

      <div className="relative container mx-auto py-32 lg:py-40">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Enhanced Left Content */}
          <div className="flex-1 text-white space-y-10 text-center lg:text-left">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-yellow-300/30 bg-black/40 backdrop-blur-sm">
              <Crown className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-medium text-yellow-300">
                Premier Salon Management Platform
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-tight">
              Redefine Salon Excellence with
              <span className="block font-medium mt-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-300">
                Curl Cipher
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              The pinnacle of salon management technology, seamlessly connecting
              prestigious establishments with discerning clientele.
            </p>

            {/* Luxury App Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-12">
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-700/5 to-orange-700/10 backdrop-blur-sm"></div>
                <div className="relative p-8 border border-yellow-300/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-amber-400" />
                    <h3 className="text-xl font-serif text-white">
                      Curl Cipher Manager
                    </h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    Sophisticated management suite for salon owners to
                    orchestrate operations with unparalleled precision
                  </p>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-700/5 to-indigo-700/10 backdrop-blur-sm"></div>
                <div className="relative p-8 border border-purple-400/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-6 h-6 text-purple-400" />
                    <h3 className="text-xl font-serif text-white">
                      Curl Cipher Elite
                    </h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    Premium experience for distinguished clientele to discover
                    and book exceptional salon services
                  </p>
                </div>
              </div>
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mt-16">
              <button className="group relative px-10 py-5 overflow-hidden rounded-lg transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <span className="relative z-10 text-black group-hover:text-yellow-300 font-medium transition-colors duration-500">
                  Experience Excellence
                </span>
              </button>

              <button className="px-10 py-5 border-2 border-yellow-300 text-yellow-300 font-medium rounded-lg hover:bg-yellow-300/10 transition-all duration-300 flex items-center gap-2">
                <span>Schedule Consultation</span>
                <Shield className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Enhanced Phone Mockups */}
          <div className="flex-1 relative">
            <div className="relative flex justify-center items-center gap-8 lg:gap-12">
              {/* Manager App - Left Phone (Premium) */}
              <div className="relative w-56 h-[460px] md:w-72 md:h-[560px] lg:w-80 lg:h-[620px] -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-700 rounded-[2.5rem] shadow-2xl">
                  <div className="absolute inset-1 bg-black rounded-[2.2rem] overflow-hidden">
                    <Image
                      src="/images/curl-cipher-manager-screenshot.png"
                      alt="Curl Cipher Manager App"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-6 bg-black rounded-b-3xl"></div>
                </div>
                <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 text-white text-center">
                  <p className="font-serif text-lg font-medium">
                    Elite Manager
                  </p>
                  <p className="text-sm text-amber-300">
                    For Distinguished Owners
                  </p>
                </div>
              </div>

              {/* Customer App - Right Phone (Elegant) */}
              <div className="relative w-56 h-[460px] md:w-72 md:h-[560px] lg:w-80 lg:h-[620px] rotate-6 hover:rotate-0 transition-transform duration-300 mt-16">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-700 to-indigo-800 rounded-[2.5rem] shadow-2xl">
                  <div className="absolute inset-1 bg-black rounded-[2.2rem] overflow-hidden">
                    <Image
                      src="/images/curl-cipher-customer-screenshot.png"
                      alt="Curl Cipher Customer App"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-6 bg-black rounded-b-3xl"></div>
                </div>
                <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 text-white text-center">
                  <p className="font-serif text-lg font-medium">Elite Client</p>
                  <p className="text-sm text-purple-300">For Valued Patrons</p>
                </div>
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute -left-12 -top-12 w-40 h-40 bg-amber-400/15 rounded-full blur-2xl"></div>
              <div className="absolute -right-12 -bottom-12 w-32 h-32 bg-purple-400/15 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-yellow-400/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* Premium Stats Section */}
        <div className="mt-48 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { value: "500+", label: "Elite Establishments", icon: Crown },
            { value: "10k+", label: "Sophisticated Clientele", icon: Sparkles },
            { value: "98%", label: "Excellence Rating", icon: Shield },
            { value: "24/7", label: "Concierge Support", icon: Shield },
          ].map((stat, index) => (
            <div key={index} className="relative text-center text-white group">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-black/80 to-gray-900/80 transform scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative z-10 py-6">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <stat.icon className="w-6 h-6 text-yellow-300" />
                  <div className="text-4xl md:text-5xl font-serif font-bold">
                    {stat.value}
                  </div>
                </div>
                <div className="text-sm md:text-base text-gray-400">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Luxury Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
