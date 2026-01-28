"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import { Sparkles, Crown, Shield, Download } from "lucide-react";
import { IoLogoAndroid } from "react-icons/io5";

const HeroSection = () => {
  // Using useState and useEffect to handle client-side rendering
  const [isMounted, setIsMounted] = useState(false);

  // This ensures the component only renders with full functionality on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Define background style constant to avoid inline style hydration mismatch
  const backgroundStyle = {
    background:
      "radial-gradient(circle at top center, #1a0033 0%, #000000 40%, #0a1a3a 100%)",
  };

  // Define gold pattern style constant
  const goldPatternStyle = {
    backgroundImage:
      "radial-gradient(circle at 3px 3px, gold 1px, transparent 0)",
    backgroundSize: "72px 72px",
  };

  // If not mounted yet, return a placeholder with matching structure but no dynamic content
  if (!isMounted) {
    return (
      <section className="relative overflow-hidden min-h-screen px-4 lg:px-8 bg-black" />
    );
  }

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>
          Curl Cipher | Premier Salon Management Platform | Lumora Ventures
        </title>
        <meta
          name="description"
          content="Streamline your salon experience with Curl Cipher - the premium dual-app ecosystem connecting high-end salons with discerning clients. Download both apps today."
        />
        <meta
          name="keywords"
          content="salon management, salon booking app, salon software, premium salon platform, Curl Cipher, salon business management"
        />
        <link
          rel="canonical"
          href="https://www.lumoraventures.com/curl-cipher"
        />

        {/* Open Graph tags for social sharing */}
        <meta
          property="og:title"
          content="Curl Cipher | Premier Salon Management Platform"
        />
        <meta
          property="og:description"
          content="The ultimate salon management ecosystem with two apps: Curl Cipher for clients and Curl Cipher Manage for salon owners."
        />
        <meta
          property="og:image"
          content="https://www.lumoraventures.com/og-curl-cipher.jpg"
        />
        <meta
          property="og:url"
          content="https://www.lumoraventures.com/curl-cipher"
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Curl Cipher",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Android",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          description:
            "Premier salon management platform with dual apps for clients and salon owners.",
          downloadUrl:
            "https://play.google.com/store/apps/details?id=com.curl_cipher.customer_app",
          author: {
            "@type": "Organization",
            name: "Lumora Ventures",
          },
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Curl Cipher Manager",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Android",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          description:
            "Powerful salon management solution for salon owners and managers.",
          downloadUrl:
            "https://play.google.com/store/apps/details?id=com.curl_cipher_manage.saloon_app",
          author: {
            "@type": "Organization",
            name: "Lumora Ventures",
          },
        })}
      </script>

      <section
        className="relative overflow-hidden min-h-screen px-4 lg:px-8"
        style={backgroundStyle}
      >
        {/* Hidden semantic heading for SEO */}
        <header className="sr-only">
          <h1>Curl Cipher - Premier Salon Management Platform</h1>
          <p>Dual app ecosystem for salon management and client booking</p>
        </header>

        {/* Advanced Background Elements */}
        <div className="absolute inset-0">
          {/* Gold Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={goldPatternStyle}></div>
          </div>

          {/* Luxury Lighting Effects */}
          <div className="absolute top-0 left-1/4 w-96 md:w-96 lg:w-[500px] xl:w-[600px] h-96 md:h-96 lg:h-[500px] xl:h-[600px] bg-amber-500/10 rounded-full blur-[150px] transform -translate-y-1/3"></div>
          <div className="absolute bottom-0 right-1/4 w-96 md:w-96 lg:w-[600px] xl:w-[800px] h-96 md:h-96 lg:h-[600px] xl:h-[800px] bg-purple-500/10 rounded-full blur-[200px] transform translate-y-1/2"></div>
        </div>

        <div className="relative container mx-auto py-16 md:py-20 lg:py-28 xl:py-40">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            {/* Enhanced Left Content */}
            <div
              role="banner"
              className="flex-1 text-white space-y-6 md:space-y-8 lg:space-y-10 text-center lg:text-left"
            >
              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="inline-flex items-center gap-2 px-3 md:px-4 lg:px-5 py-1.5 rounded-full border border-yellow-300/30 bg-black/40 backdrop-blur-sm">
                  <Crown className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-yellow-300" />
                  <span className="text-xs md:text-sm font-medium text-yellow-300">
                    Premier Salon Management Platform
                  </span>
                </div>
              </motion.div>

              {/* SEO Optimized H1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-serif font-light leading-tight">
                  Elevate Your Salon Business with
                  <span className="block font-medium mt-2 md:mt-3 lg:mt-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-300">
                    Curl Cipher Salon Management
                  </span>
                </h1>
              </motion.div>

              {/* SEO Optimized Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  The ultimate salon management ecosystem featuring Curl Cipher
                  (for Clients) & Curl Cipher Manage (for Salon Owners) —
                  connecting premium salons with discerning clientele through
                  intuitive booking, smart scheduling, and comprehensive business
                  analytics.
                </p>
              </motion.div>

              {/* Luxury App Cards with App Logos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 my-8 lg:my-12">
                <article className="relative rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-700/5 to-orange-700/10 backdrop-blur-sm"></div>
                  <div className="relative p-4 md:p-6 lg:p-8 border border-yellow-300/20">
                    <div className="flex flex-col">
                      {/* Client App Logo */}
                      <div className="flex justify-center lg:justify-start mb-2">
                        {/* Use onLoad handler and placeholder to avoid hydration issues */}
                        <div className="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 relative">
                          <Image
                            src="/customer.webp"
                            alt="Curl Cipher Customer App Logo - Premium Salon Booking Platform"
                            fill
                            sizes="(max-width: 768px) 48px, (max-width: 1024px) 64px, 72px"
                            className="object-contain"
                            priority
                          />
                        </div>
                      </div>
                      <h3 className="text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl font-serif text-white text-center lg:text-left mb-3 md:mb-4">
                        Curl Cipher
                      </h3>
                    </div>
                    <p className="text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-gray-400 leading-relaxed text-center lg:text-left">
                      Curl Cipher is our elegant customer app, designed for
                      discerning clients who seek premium salon experiences with
                      effortless booking and service discovery.
                    </p>
                  </div>
                </article>

                <article className="relative rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-700/5 to-indigo-700/10 backdrop-blur-sm"></div>
                  <div className="relative p-4 md:p-6 lg:p-8 border border-blue-400/20">
                    <div className="flex flex-col">
                      {/* Manager App Logo */}
                      <div className="flex justify-center lg:justify-start mb-2">
                        {/* Use consistent sizing approach with container + fill */}
                        <div className="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 relative">
                          <Image
                            src="/manage-logo.webp"
                            alt="Curl Cipher Manager App Logo - Salon Business Management Solution"
                            fill
                            sizes="(max-width: 768px) 48px, (max-width: 1024px) 64px, 72px"
                            className="object-contain"
                            priority
                          />
                        </div>
                      </div>
                      <h3 className="text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl font-serif text-white text-center lg:text-left mb-3 md:mb-4">
                        Curl Cipher Manager
                      </h3>
                    </div>
                    <p className="text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-gray-400 leading-relaxed text-center lg:text-left">
                      Curl Cipher Manage is the powerful companion app for salon
                      owners and managers, enabling real-time oversight, staff
                      coordination, and intelligent service management — all
                      from a sleek, user-friendly dashboard.
                    </p>
                  </div>
                </article>
              </motion.div>

              {/* Premium CTA Buttons with Download Now */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex flex-col sm:flex-row gap-4 md:gap-5 lg:gap-6 justify-center lg:justify-start mt-8 md:mt-12 lg:mt-16">
                <a
                  href="https://play.google.com/store/apps/details?id=com.curl_cipher.customer_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 lg:px-8 lg:py-4 text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl overflow-hidden rounded-lg transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-lg"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                  <div className="flex items-center gap-2 relative z-10">
                    <IoLogoAndroid className="relative z-10 w-5 h-5 text-black group-hover:text-yellow-300 transition-colors duration-500" />
                    <span className="relative z-10 text-black group-hover:text-yellow-300 font-medium transition-colors duration-500">
                      Download Client Booking App
                    </span>
                  </div>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.curl_cipher_manage.saloon_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 lg:px-8 lg:py-4 text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl border-2 border-yellow-300 text-yellow-300 font-medium rounded-lg hover:bg-yellow-300/10 transition-all duration-300 gap-2"
                >
                  <IoLogoAndroid className="w-5 h-5" />
                  <span>Download Salon Management App</span>
                </a>
              </motion.div>
            </div>

            {/* App Mockups Using Actual Screenshots */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex-1 relative mt-12 lg:mt-0">
              <div className="relative flex justify-center items-center gap-6 md:gap-8 lg:gap-10">
                {/* Client App (Gold Theme) */}
                <div className="relative w-40 h-[340px] sm:w-48 sm:h-[390px] md:w-56 md:h-[450px] lg:w-64 lg:h-[520px] xl:w-72 xl:h-[560px] -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-700 rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl">
                    <div className="absolute inset-1 bg-black rounded-[1.8rem] lg:rounded-[2.2rem] overflow-hidden">
                      {/* Using the provided client app screenshot with priority loading */}
                      <Image
                        src="/curlcipher.webp"
                        alt="Curl Cipher Client App Screenshot - Salon Booking Interface"
                        fill
                        sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, (max-width: 1280px) 256px, 288px"
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 md:w-28 lg:w-32 h-4 md:h-5 lg:h-6 bg-black rounded-b-3xl"></div>
                  </div>
                  <div className="absolute -bottom-10 md:-bottom-12 lg:-bottom-14 left-1/2 transform -translate-x-1/2 text-white text-center">
                    <p className="font-serif text-base md:text-lg font-medium">
                      Client App
                    </p>
                    <p className="text-xs md:text-sm text-amber-300">
                      For Salon Customers
                    </p>
                  </div>
                </div>

                {/* Manager App (Blue Theme) */}
                <div className="relative w-40 h-[340px] sm:w-48 sm:h-[390px] md:w-56 md:h-[450px] lg:w-64 lg:h-[520px] xl:w-72 xl:h-[560px] rotate-6 hover:rotate-0 transition-transform duration-300 mt-12 lg:mt-16">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-indigo-800 rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl">
                    <div className="absolute inset-1 bg-black rounded-[1.8rem] lg:rounded-[2.2rem] overflow-hidden">
                      {/* Using the provided manager app screenshot with priority loading */}
                      <Image
                        src="/manage.webp"
                        alt="Curl Cipher Manager App Screenshot - Salon Management Dashboard"
                        fill
                        sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, (max-width: 1280px) 256px, 288px"
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 md:w-28 lg:w-32 h-4 md:h-5 lg:h-6 bg-black rounded-b-3xl"></div>
                  </div>
                  <div className="absolute -bottom-10 md:-bottom-12 lg:-bottom-14 left-1/2 transform -translate-x-1/2 text-white text-center">
                    <p className="font-serif text-base md:text-lg font-medium">
                      Business App
                    </p>
                    <p className="text-xs md:text-sm text-blue-300">
                      For Salon Owners
                    </p>
                  </div>
                </div>

                {/* Enhanced Floating Elements */}
                <div className="absolute -left-8 -top-8 md:-left-10 md:-top-10 lg:-left-12 lg:-top-12 w-24 md:w-32 lg:w-40 h-24 md:h-32 lg:h-40 bg-amber-400/15 rounded-full blur-2xl"></div>
                <div className="absolute -right-8 -bottom-8 md:-right-10 md:-bottom-10 lg:-right-12 lg:-bottom-12 w-20 md:w-24 lg:w-32 h-20 md:h-24 lg:h-32 bg-blue-400/15 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 md:w-48 lg:w-60 h-40 md:h-48 lg:h-60 bg-yellow-400/5 rounded-full blur-3xl"></div>
              </div>
            </motion.div>
          </div>

          {/* Luxury Bottom Gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-24 md:h-28 lg:h-32 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
