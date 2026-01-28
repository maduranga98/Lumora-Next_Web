"use client";

import React from "react";
import Head from "next/head";
import { Diamond, Shield, Crown, Gem, Star, Award } from "lucide-react";
import { IoLogoAndroid } from "react-icons/io";
import { FaAppStoreIos } from "react-icons/fa";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/animation/AnimatedSection";

const AppOverviewSection = () => {
  // SEO-optimized features with targeted keywords
  const features = [
    {
      icon: (
        <Diamond size={24} className="text-yellow-300" aria-hidden="true" />
      ),
      title: "Dual Premium Salon Applications",
      description:
        "Seamlessly manage your high-end salon business with sophisticated apps designed for both salon professionals and discerning clientele, creating a unified booking experience.",
    },
    {
      icon: <Shield size={24} className="text-yellow-300" aria-hidden="true" />,
      title: "Multi-Location Salon Management",
      description:
        "Command multiple luxury salon establishments with centralized control, staff scheduling, and comprehensive business analytics across all your locations.",
    },
    {
      icon: <Crown size={24} className="text-yellow-300" aria-hidden="true" />,
      title: "Elite Salon Booking Platform",
      description:
        "Orchestrate premium salon appointments, staff schedules, inventory tracking, and exclusive client relationships—all unified in one sophisticated system.",
    },
    {
      icon: <Star size={24} className="text-yellow-300" aria-hidden="true" />,
      title: "Salon Marketing & Promotion Tools",
      description:
        "Craft exclusive promotional campaigns and elevate your salon's digital presence to attract and retain elite clientele with automated marketing features.",
    },
    {
      icon: <Gem size={24} className="text-yellow-300" aria-hidden="true" />,
      title: "Salon Retail & Inventory System",
      description:
        "Curate and manage premium beauty products with advanced inventory tracking, facilitating exclusive purchases and maintaining optimal stock levels.",
    },
    {
      icon: <Award size={24} className="text-yellow-300" aria-hidden="true" />,
      title: "Secure Salon Staff Access Control",
      description:
        "Ensure protected access with customizable permission roles for salon owners, managers, stylists, and specialized staff members.",
    },
  ];

  const platforms = [
    {
      icon: (
        <FaAppStoreIos
          size={24}
          className="text-yellow-300"
          aria-hidden="true"
        />
      ),
      name: "iOS Salon Management App",
      bgHover: "hover:bg-amber-500/5",
      description:
        "Premium salon booking and management system available on Apple App Store for both clients and salon owners.",
      gradient: "from-amber-500/10 to-yellow-500/10",
    },
    {
      icon: (
        <IoLogoAndroid
          size={24}
          className="text-yellow-300"
          aria-hidden="true"
        />
      ),
      name: "Android Salon Solution",
      bgHover: "hover:bg-yellow-500/5",
      description:
        "Complete salon business management platform on Google Play Store for salon professionals and their customers.",
      gradient: "from-yellow-500/10 to-amber-500/10",
    },
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>
          Curl Cipher Features | Premium Salon Management Software | Lumora
          Ventures
        </title>
        <meta
          name="description"
          content="Discover Curl Cipher's comprehensive salon management features for high-end salons. Multi-location management, booking, inventory, staff scheduling, and marketing tools."
        />
        <meta
          name="keywords"
          content="salon management software, salon booking system, multi-location salon platform, premium salon app, salon business management, salon inventory system, salon staff scheduling"
        />

        {/* Open Graph tags for social sharing */}
        <meta
          property="og:title"
          content="Curl Cipher Features | Premium Salon Management Software"
        />
        <meta
          property="og:description"
          content="All-in-one salon management system with dual apps, multi-location control, booking, inventory, and marketing tools for high-end salons."
        />
        <meta
          property="og:url"
          content="https://www.lumoraventures.com/curl-cipher/features"
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* Schema Markup for SoftwareApplication */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Curl Cipher Salon Management Platform",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Android, iOS",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          featureList: [
            "Dual Premium Salon Applications",
            "Multi-Location Salon Management",
            "Elite Salon Booking Platform",
            "Salon Marketing & Promotion Tools",
            "Salon Retail & Inventory System",
            "Secure Salon Staff Access Control",
          ],
          description:
            "Premium salon management platform with dual apps for salon owners and clients, supporting multi-location businesses with booking, inventory, and marketing tools.",
        })}
      </script>

      <section
        className="relative py-16 md:py-20 lg:py-24 overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at center top, #330066 0%, #000000 60%, #1a0033 100%)",
        }}
        id="curl-cipher-features"
      >
        {/* Hidden semantic heading for SEO */}
        <header className="sr-only">
          <h1>Curl Cipher Premium Salon Management Software Features</h1>
          <p>
            Complete salon business management system for luxury salons and spas
          </p>
        </header>

        {/* Luxury Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/2 w-96 md:w-[600px] lg:w-[800px] h-96 md:h-[600px] lg:h-[800px] bg-amber-500 rounded-full blur-[150px] transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-1/4 w-72 md:w-[400px] lg:w-[600px] h-72 md:h-[400px] lg:h-[600px] bg-yellow-400 rounded-full blur-[120px] transform -translate-x-1/2 translate-y-1/3"></div>
        </div>

        {/* Golden Overlay Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 4px 4px, gold 1px, transparent 0)",
              backgroundSize: "64px 64px",
            }}
          ></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Elegant Section Header - SEO optimized */}
          <AnimatedSection className="text-center mb-16 md:mb-20 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif font-light mb-6 md:mb-8 lg:mb-10 text-white">
              The Complete Salon Management System:{" "}
              <span className="text-yellow-300">Curl Cipher</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
              The pinnacle of salon management excellence, offering a
              comprehensive suite of business tools designed specifically for
              high-end salons, spas, and beauty studios. Seamlessly connecting
              prestigious establishments with their distinguished clientele
              through intelligent booking and business management.
            </p>
          </AnimatedSection>

          {/* Premium Features Grid - SEO optimized with semantic HTML */}
          <section
            aria-labelledby="features-heading"
            className="mb-16 md:mb-20 lg:mb-24"
          >
            <h3 id="features-heading" className="sr-only">
              Salon Management Features
            </h3>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" staggerDelay={0.12}>
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <article
                    className="group relative overflow-hidden rounded-xl md:rounded-2xl lg:rounded-3xl p-6 md:p-8 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl border border-amber-500/20 bg-gradient-to-br from-black to-gray-900"
                  >
                    {/* Feature Icon */}
                    <div className="mb-5 md:mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-yellow-300/30 flex items-center justify-center bg-gradient-to-br from-black to-gray-900">
                        {feature.icon}
                      </div>
                    </div>

                    {/* Feature Content - SEO optimized */}
                    <h4 className="text-lg md:text-xl lg:text-xl font-serif text-white mb-3 md:mb-4">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                      {feature.description}
                    </p>

                    {/* Subtle Hover Effect */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>

          {/* Premium Platforms Section - SEO optimized */}
          <section
            aria-labelledby="platforms-heading"
            className="relative rounded-xl md:rounded-2xl lg:rounded-3xl p-8 md:p-10 lg:p-12 overflow-hidden border border-amber-500/20 bg-gradient-to-br from-black to-gray-900"
          >
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 w-72 md:w-96 lg:w-[600px] h-48 md:h-64 lg:h-[300px] bg-amber-500/10 rounded-full blur-[100px] transform -translate-x-1/2 -translate-y-1/2"></div>

            <AnimatedSection>
              <h3
                id="platforms-heading"
                className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-serif text-center mb-8 md:mb-10 lg:mb-12 text-white"
              >
                Salon Management Apps Available on All Devices
              </h3>
            </AnimatedSection>

            <StaggerContainer className="relative grid sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-4xl mx-auto" staggerDelay={0.15}>
              {platforms.map((platform, index) => (
                <StaggerItem key={index}>
                  <article
                    className={`group rounded-xl md:rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 text-center transition-all duration-500 ${platform.bgHover} border border-yellow-300/10 hover:border-yellow-300/30 hover:shadow-2xl relative overflow-hidden bg-gradient-to-br ${platform.gradient}`}
                  >
                    {/* Platform Icon */}
                    <div className="inline-flex justify-center mb-4 md:mb-5 transform transition-transform duration-500 group-hover:scale-110">
                      <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border border-yellow-300/30 flex items-center justify-center">
                        {platform.icon}
                      </div>
                    </div>

                    {/* Platform Details - SEO optimized */}
                    <h4 className="text-lg md:text-xl lg:text-xl font-serif text-white mb-2 md:mb-3">
                      {platform.name}
                    </h4>
                    <p className="text-gray-400 text-sm md:text-base">
                      {platform.description}
                    </p>

                    {/* Decorative Line */}
                    <div className="absolute bottom-0 left-1/2 w-24 md:w-28 lg:w-32 h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>

          {/* Added SEO-focused text block */}
          <AnimatedSection className="mt-16 max-w-4xl mx-auto text-center" delay={0.1}>
            <h3 className="text-xl md:text-2xl font-serif text-yellow-300 mb-4">
              Why Choose Curl Cipher for Your Salon Business?
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Curl Cipher is the preferred salon management software for
              high-end beauty businesses worldwide. Our comprehensive platform
              streamlines appointment scheduling, staff management, inventory
              control, and client communications in one elegant interface.
              Whether you operate a single luxury salon or manage multiple
              locations, Curl Cipher provides the sophisticated tools needed to
              elevate your salon operations and enhance client satisfaction.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default AppOverviewSection;
