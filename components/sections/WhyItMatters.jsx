// components/sections/WhyItMatters.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";

export default function WhyItMatters() {
  // Add isMounted state to prevent hydration mismatches
  const [isMounted, setIsMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Check for reduced motion preference
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);

      const handleMotionPreferenceChange = (e) => {
        setPrefersReducedMotion(e.matches);
      };

      mediaQuery.addEventListener("change", handleMotionPreferenceChange);

      return () => {
        mediaQuery.removeEventListener("change", handleMotionPreferenceChange);
      };
    }
  }, []);

  // Scroll to section function with URL update for better SEO
  const scrollToSection = (sectionId, e) => {
    if (e) e.preventDefault();

    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = window.innerWidth >= 1280 ? 100 : 80;
      const offsetPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });

      // Update URL hash for better SEO and analytics tracking
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  // Schema.org structured data for benefits (FAQ format)
  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why is Google Business Profile important for local businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Google Business Profile is essential for local businesses because it increases visibility in local search, drives more website traffic and inquiries, builds trust through customer reviews, helps stand out from competitors, allows businesses to control their online narrative, boosts local SEO, enables direct customer engagement, and provides a free marketing platform with measurable ROI.",
        },
      },
      {
        "@type": "Question",
        name: "How does Google Business Profile improve local search visibility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Google Business Profile improves local search visibility by helping businesses appear prominently in Google Maps and local search results when customers actively search for products or services in their area. A well-optimized profile is a key factor in ranking higher in local search results.",
        },
      },
      {
        "@type": "Question",
        name: "What are the benefits of optimizing a Google Business Profile?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The benefits of optimizing a Google Business Profile include increased local search visibility, more website traffic and customer inquiries, enhanced trust and credibility through reviews, competitive advantage over businesses with basic listings, control over your online reputation, improved local SEO rankings, direct customer engagement opportunities, and free marketing with measurable ROI.",
        },
      },
    ],
  };

  const benefits = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
        >
          <title>Local Search Icon</title>
          <desc>Map pin icon representing local search visibility</desc>
          <path
            d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5 7 1 12 1C17 1 21 5 21 10Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "Increase Visibility in Local Search",
      description:
        "Be seen by customers actively searching for your products or services in your area. Appear prominently in Google Maps and local search results.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
        >
          <title>Website Traffic Icon</title>
          <desc>Icon representing increased website traffic and inquiries</desc>
          <path
            d="M10 13C10 14.1046 10.8954 15 12 15C13.1046 15 14 14.1046 14 13C14 11.8954 13.1046 11 12 11C10.8954 11 10 11.8954 10 13Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M2 7L12 2L22 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 13V22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Drive More Website Traffic & Inquiries",
      description:
        "GBP listing prominently displays your website link and phone number, making it easy for customers to connect and convert.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
        >
          <title>Trust and Credibility Icon</title>
          <desc>Icon representing building trust through reviews</desc>
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M9 12L12 15L15 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Build Trust and Credibility",
      description:
        "Showcase positive customer reviews and build social proof, influencing potential customers' decisions in your favor.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
        >
          <title>Competitive Advantage Icon</title>
          <desc>Clock icon representing competitive advantage</desc>
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 6V12L16 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Stand Out From Competitors",
      description:
        "A fully optimized GBP makes your business more attractive and informative than basic listings, helping you capture market share.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
        >
          <title>Online Reputation Icon</title>
          <desc>Icon representing control over online reputation</desc>
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="9"
            y1="9"
            x2="15"
            y2="15"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="15"
            y1="9"
            x2="9"
            y2="15"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Control Your Online Story",
      description:
        "Manage your business information, photos, and respond to reviews, actively shaping your online reputation.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
        >
          <title>Local SEO Icon</title>
          <desc>Document icon representing local SEO improvement</desc>
          <path
            d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 2V8H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="16"
            y1="13"
            x2="8"
            y2="13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="16"
            y1="17"
            x2="8"
            y2="17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="10"
            y1="9"
            x2="8"
            y2="9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Boost Local SEO",
      description:
        "GBP is a key factor in ranking higher in local search results, improving your overall SEO strategy and digital presence.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
        >
          <title>Customer Engagement Icon</title>
          <desc>Icon representing direct customer engagement</desc>
          <circle cx="9" cy="12" r="1" fill="currentColor" />
          <circle cx="15" cy="12" r="1" fill="currentColor" />
          <path
            d="M20 21V19C20 17.1362 18.7252 15.5701 17.0005 15M14 13C16.2091 13 18 11.2091 18 9C18 6.79086 16.2091 5 14 5M8 13H3C2.44772 13 2 13.4477 2 14V19C2 19.5523 2.44772 20 3 20H8C8.55228 20 9 19.5523 9 19V14C9 13.4477 8.55228 13 8 13Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Engage Directly with Customers",
      description:
        "Respond to reviews and questions, fostering customer loyalty and building lasting relationships that drive repeat business.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
        >
          <title>Free Marketing Icon</title>
          <desc>Icon representing free marketing opportunities</desc>
          <path
            d="M3 9L12 2L21 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 22H3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 22V9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 22V9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 22V5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Free Marketing Powerhouse",
      description:
        "GBP is a free platform offering incredible marketing reach and customer engagement opportunities with measurable ROI.",
    },
  ];

  // Conditional rendering based on mounted state
  // Show a simplified skeleton when not mounted to avoid hydration mismatches
  if (!isMounted) {
    return (
      <section
        id="why-matters"
        className="py-16 lg:py-24 bg-gradient-to-br from-teal-600 to-teal-700 relative overflow-hidden"
        aria-labelledby="why-matters-heading"
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-yellow-400 text-teal-900 font-bold mb-6">
              Don't Get Left Behind!
            </div>
            <h2
              id="why-matters-heading"
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Unlock a Flood of Local Customers: The Undeniable Importance of
              GBP
            </h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              A strong GBP is your 24/7 online storefront and customer magnet.
            </p>
          </header>

          {/* Simplified skeleton grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                role="listitem"
              >
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/20 text-white"></div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-teal-100 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            {/* CTA placeholder */}
            <div className="inline-block bg-yellow-400 text-teal-900 px-10 py-4 rounded-lg font-bold text-lg">
              Get Your GBP Optimized Now
            </div>
          </div>

          {/* Placeholder for globe */}
          <div className="mt-16" aria-hidden="true">
            <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden flex items-center justify-center">
              <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-teal-100 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Structured data for search engines */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />

      <section
        id="why-matters"
        className="py-16 lg:py-24 bg-gradient-to-br from-teal-600 to-teal-700 relative overflow-hidden"
        aria-labelledby="why-matters-heading"
      >
        {/* Background decoration - marked as aria-hidden */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-1/4 -left-24 w-96 h-96 rounded-full border-8 border-white"></div>
          <div className="absolute bottom-1/4 -right-24 w-96 h-96 rounded-full border-8 border-white"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header section with semantic HTML */}
          <header className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-yellow-400 text-teal-900 font-bold mb-6">
              Don't Get Left Behind!
            </div>
            <h2
              id="why-matters-heading"
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Unlock a Flood of Local Customers: The Undeniable Importance of
              Google Business Profile
            </h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              A strong Google Business Profile (GBP) is your 24/7 online
              storefront and local customer magnet.
            </p>
          </header>

          {/* Benefits grid with semantic HTML */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
            {benefits.map((benefit, index) => (
              <article
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition duration-300"
                role="listitem"
              >
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/20 text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-teal-100 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>

          {/* CTA Section with proper link element */}
          <div className="mt-16 text-center">
            <Link
              href="#services"
              onClick={(e) => scrollToSection("services", e)}
              className="inline-block bg-yellow-400 text-teal-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-teal-700"
              aria-label="Get Google Business Profile optimization services"
            >
              <span className="inline-flex items-center">
                Get Your GBP Optimized Now
              </span>
            </Link>
          </div>

          {/* Animated Globe Illustration */}
          <div className="mt-16">
            <GlobeIllustration prefersReducedMotion={prefersReducedMotion} />
          </div>
        </div>
      </section>
    </>
  );
}

// Animated Globe Illustration Component with accessibility improvements
const GlobeIllustration = ({ prefersReducedMotion }) => {
  // Initialize state for animation
  const [rotation, setRotation] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Use useEffect for client-side animation
  useEffect(() => {
    setMounted(true);

    // Only animate if reduced motion is not preferred
    if (!prefersReducedMotion) {
      // Create animation interval after component mounts
      const interval = setInterval(() => {
        setRotation((prev) => (prev + 0.5) % 360);
      }, 50);

      // Cleanup interval on unmount
      return () => clearInterval(interval);
    }
  }, [prefersReducedMotion]);

  // Only render animation content on client-side
  if (!mounted) {
    // Return a placeholder with consistent structure but no animation
    return (
      <div
        className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="relative h-80 w-80 flex items-center justify-center">
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-teal-100 rounded-full flex items-center justify-center">
            {/* Simple placeholder lines */}
            <div className="absolute w-full h-0.5 bg-teal-500/50"></div>
            <div className="absolute w-0.5 h-full bg-teal-500/50"></div>
          </div>
        </div>
      </div>
    );
  }

  // Icons orbiting the globe - moved outside JSX for better organization
  const icons = [
    {
      emoji: "🔍",
      label: "Local Search Visibility",
      color: "bg-yellow-400",
      delay: "0s",
    },
    {
      emoji: "⭐",
      label: "Customer Reviews",
      color: "bg-orange-300",
      delay: "0.1s",
    },
    {
      emoji: "📱",
      label: "Mobile Contact Information",
      color: "bg-teal-300",
      delay: "0.2s",
    },
    {
      emoji: "💵",
      label: "Increased Revenue",
      color: "bg-green-300",
      delay: "0.3s",
    },
    { emoji: "🌐", label: "Web Presence", color: "bg-blue-300", delay: "0.4s" },
    {
      emoji: "💬",
      label: "Customer Engagement",
      color: "bg-purple-300",
      delay: "0.5s",
    },
  ];

  // For reduced motion, create a static layout instead of animation
  if (prefersReducedMotion) {
    return (
      <div
        className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden flex items-center justify-center"
        role="img"
        aria-label="Visual representation of Google Business Profile benefits"
      >
        {/* Static central globe */}
        <div className="relative">
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-teal-100 rounded-full flex items-center justify-center">
            {/* Static grid lines */}
            <div className="absolute w-full h-0.5 bg-teal-500/50"></div>
            <div className="absolute w-0.5 h-full bg-teal-500/50"></div>
          </div>

          {/* Static grid of icons surrounding the globe */}
          <div className="absolute grid grid-cols-3 gap-4 -top-20 -left-20 w-[calc(100%+40px)]">
            {icons.map((icon, index) => (
              <div
                key={index}
                className={`flex items-center justify-center w-10 h-10 rounded-full ${icon.color}`}
                title={icon.label}
              >
                <span className="text-xl" role="img" aria-label={icon.label}>
                  {icon.emoji}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Calculate orbital positions once to improve performance
  const orbitalIcons = icons.map((icon, index) => {
    const angle = (360 / icons.length) * index + rotation;
    const radius = 100; // Distance from center
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;

    // Pre-calculate transform style
    const transformStyle = {
      transform: `translate(${x}px, ${y}px)`,
      animationDelay: icon.delay,
    };

    return {
      ...icon,
      transformStyle,
      key: index,
    };
  });

  return (
    <div
      className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden flex items-center justify-center"
      role="img"
      aria-label="Interactive visualization of Google Business Profile benefits"
    >
      {/* Background elements with ARIA hidden */}
      <div
        className="absolute w-16 h-16 bg-yellow-400/20 rounded-full top-10 left-10 animate-pulse"
        aria-hidden="true"
      ></div>
      <div
        className="absolute w-12 h-12 bg-teal-300/20 rounded-full bottom-12 right-20 animate-pulse"
        style={{ animationDelay: "1s" }}
        aria-hidden="true"
      ></div>
      <div
        className="absolute w-8 h-8 bg-orange-300/20 rounded-full top-20 right-16 animate-pulse"
        style={{ animationDelay: "1.5s" }}
        aria-hidden="true"
      ></div>

      {/* Globe container - make this the absolute center reference point */}
      <div className="relative h-80 w-80 flex items-center justify-center">
        {/* Central globe with pulse effect */}
        <div
          className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-teal-100 rounded-full flex items-center justify-center"
          aria-hidden="true"
        >
          {/* Horizontal line */}
          <div className="absolute w-full h-0.5 bg-teal-500/50"></div>

          {/* Vertical line */}
          <div className="absolute w-0.5 h-full bg-teal-500/50"></div>

          {/* Curved lines */}
          <div
            className="absolute w-full h-full rounded-full border-t-2 border-b-2 border-teal-500/30"
            style={{ transform: `rotate(${rotation}deg)` }}
          ></div>
          <div
            className="absolute w-full h-full rounded-full border-t-2 border-b-2 border-teal-500/30"
            style={{ transform: `rotate(${rotation + 45}deg)` }}
          ></div>
          <div
            className="absolute w-full h-full rounded-full border-l-2 border-r-2 border-teal-500/30"
            style={{ transform: `rotate(${rotation + 22.5}deg)` }}
          ></div>

          {/* Pulse effect */}
          <div className="absolute w-full h-full rounded-full bg-teal-400/20 animate-ping opacity-30"></div>
        </div>

        {/* Orbiting icons using pre-calculated positions */}
        {orbitalIcons.map((icon) => (
          <div
            key={icon.key}
            className={`absolute flex items-center justify-center w-10 h-10 rounded-full ${icon.color} shadow-lg transition-transform duration-300 hover:scale-110`}
            style={icon.transformStyle}
            title={icon.label}
          >
            <span className="text-xl" role="img" aria-label={icon.label}>
              {icon.emoji}
            </span>
          </div>
        ))}
      </div>

      {/* Small floating decorative elements with ARIA hidden */}
      <div
        className="absolute w-3 h-3 bg-yellow-400 rounded-full top-1/4 left-1/6 animate-bounce"
        style={{ animationDuration: "3s" }}
        aria-hidden="true"
      ></div>
      <div
        className="absolute w-2 h-2 bg-teal-300 rounded-full bottom-1/3 right-1/4 animate-bounce"
        style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
        aria-hidden="true"
      ></div>
      <div
        className="absolute w-4 h-4 bg-orange-300 rounded-full top-1/3 right-1/5 animate-bounce"
        style={{ animationDuration: "4s", animationDelay: "1s" }}
        aria-hidden="true"
      ></div>
    </div>
  );
};
