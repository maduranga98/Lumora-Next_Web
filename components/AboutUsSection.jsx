"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

// Optimized AnimatedElement component with better performance
const AnimatedElement = ({
  children,
  delay = 0,
  className = "",
  type = "fadeInUp",
  id = "",
}) => {
  // Use react-intersection-observer hook for better performance
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animation styles with support for reduced motion
  const baseStyle = { opacity: 1 };

  const getAnimationStyle = () => {
    if (!isMounted) return baseStyle;

    // Support for reduced motion preference
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return { opacity: 1 };
    }

    if (!inView) {
      switch (type) {
        case "slideInLeft":
          return {
            opacity: 0,
            transform: "translateX(-50px)",
            transition: "all 0.8s ease-out",
          };
        case "slideInRight":
          return {
            opacity: 0,
            transform: "translateX(50px)",
            transition: "all 0.8s ease-out",
          };
        case "fadeInUp":
        default:
          return {
            opacity: 0,
            transform: "translateY(30px)",
            transition: "all 0.8s ease-out",
          };
      }
    }

    return {
      opacity: 1,
      transform: "translate(0)",
      transition: "all 0.8s ease-out",
      transitionDelay: `${delay}ms`,
    };
  };

  return (
    <div ref={ref} className={className} style={{ opacity: 1 }} id={id}>
      {isMounted ? (
        <div style={getAnimationStyle()}>{children}</div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

const AboutUsSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const resizeTimerRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    setWindowWidth(window.innerWidth);

    // Throttled resize handler for better performance
    const handleResize = () => {
      if (resizeTimerRef.current) return;

      resizeTimerRef.current = setTimeout(() => {
        setWindowWidth(window.innerWidth);
        resizeTimerRef.current = null;
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeTimerRef.current) {
        clearTimeout(resizeTimerRef.current);
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = windowWidth >= 1280 ? 80 : 64;
      const offsetPosition = element.offsetTop - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  // JSON-LD structured data for organization - appropriate for a startup
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lumora Ventures",
    description:
      "Driving Business Growth Through Innovation with scalable, user-friendly digital tools and automation solutions.",
    url: "https://www.lumoraventures.com/",
    logo: "https://www.lumoraventures.com/logo.webp",
    address: {
      "@type": "PostalAddress",
      addressCountry: "LK", // Sri Lanka country code
      addressLocality: "Colombo",
      // Add more address fields if available
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "contact@lumoraventures.com", // Replace with actual email
    },
    sameAs: [
      "https://www.facebook.com/lumoraventures",
      "https://www.linkedin.com/company/lumoraventures",
      "https://www.instagram.com/lumoraventures",
      // Add other social profiles
    ],
  };

  // Additional company values for enhanced SEO
  const companyValues = [
    {
      title: "Innovation",
      description:
        "We continuously explore and implement cutting-edge technologies to provide the most effective solutions for our clients.",
    },
    {
      title: "Excellence",
      description:
        "We are committed to delivering the highest quality in every project, exceeding client expectations through attention to detail and superior service.",
    },
    {
      title: "Collaboration",
      description:
        "We work closely with our clients to create tailored solutions that address their unique challenges and objectives.",
    },
  ];

  return (
    <>
      {/* Add structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <section
        id="about"
        aria-labelledby="about-heading"
        className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 min-h-screen flex items-center py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-36 px-4 sm:px-6 lg:px-8"
        itemScope
        itemType="https://schema.org/AboutPage"
      >
        {/* Decorative background elements */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-blue-300/30 blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-blue-400/20 blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-60 h-60 rounded-full bg-blue-200/20 blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto w-full z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-16 2xl:gap-24 items-center">
            {/* Content Section with enhanced semantic structure */}
            <AnimatedElement
              type="slideInLeft"
              className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-none mx-auto lg:mx-0 lg:pr-6 xl:pr-10 2xl:pr-16"
            >
              <header>
                <h2
                  id="about-heading"
                  className="font-montserrat text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-blue-900 mb-4 lg:mb-6 2xl:mb-8"
                  itemProp="headline"
                >
                  About Lumora Ventures
                </h2>

                <p
                  className="font-inter text-base text-j sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl text-blue-700 mb-6 md:mb-8 lg:mb-10 2xl:mb-12 font-normal"
                  itemProp="description"
                >
                  Driving Business Growth Through Innovation with scalable,
                  user-friendly digital tools and automation solutions for
                  companies seeking digital transformation.
                </p>
              </header>

              <div className="space-y-6 md:space-y-8 lg:space-y-10 2xl:space-y-12">
                <AnimatedElement delay={200} type="fadeInUp">
                  <article itemProp="mainContentOfPage">
                    <h3 className="font-montserrat text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-semibold text-blue-800 mb-2 lg:mb-3 2xl:mb-4">
                      Our Mission
                    </h3>
                    <p className="font-inter text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-xl text-gray-800 leading-relaxed">
                      To empower businesses with scalable, user-friendly digital
                      and automation tools designed to accelerate growth and
                      efficiency. We focus on delivering measurable results that
                      drive sustainable business transformation.
                    </p>
                  </article>
                </AnimatedElement>

                <AnimatedElement delay={400} type="fadeInUp">
                  <article>
                    <h3 className="font-montserrat text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-semibold text-blue-800 mb-2 lg:mb-3 2xl:mb-4">
                      Our Vision
                    </h3>
                    <p className="font-inter text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-xl text-gray-800 leading-relaxed">
                      To be the leading partner for businesses seeking
                      transformative growth through innovative technology and
                      strategic automation. We aim to revolutionize how
                      businesses operate in the digital landscape.
                    </p>
                  </article>
                </AnimatedElement>

                {/* Added company values section for enhanced SEO content */}
                <AnimatedElement delay={500} type="fadeInUp">
                  <article>
                    <h3 className="font-montserrat text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-semibold text-blue-800 mb-2 lg:mb-3 2xl:mb-4">
                      Our Values
                    </h3>
                    <ul className="space-y-3">
                      {companyValues.map((value, index) => (
                        <li
                          key={index}
                          className="font-inter text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-xl text-gray-800 leading-relaxed"
                        >
                          <strong className="text-blue-700">
                            {value.title}:
                          </strong>{" "}
                          {value.description}
                        </li>
                      ))}
                    </ul>
                  </article>
                </AnimatedElement>
              </div>

              <AnimatedElement
                delay={600}
                type="fadeInUp"
                className="mt-8 lg:mt-10 2xl:mt-12 flex flex-wrap gap-4"
              >
                <button
                  className="group inline-flex items-center px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 lg:px-8 lg:py-4 xl:px-10 xl:py-5 2xl:px-12 2xl:py-5 bg-blue-600 text-white font-montserrat font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl tracking-wide shadow-lg hover:shadow-xl"
                  onClick={() => scrollToSection("solutions")}
                  aria-label="Learn more about Lumora Ventures services"
                >
                  Explore Our Solutions
                  <svg
                    className="ml-2 w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6 transition-transform duration-300 group-hover:translate-x-1"
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
                </button>

                {/* Added additional CTA for better conversion */}
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 lg:px-8 lg:py-4 xl:px-10 xl:py-5 2xl:px-12 2xl:py-5 bg-blue-100 text-blue-800 font-montserrat font-semibold rounded-lg hover:bg-blue-200 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl tracking-wide"
                  aria-label="Contact Lumora Ventures"
                >
                  Get In Touch
                </Link>
              </AnimatedElement>
            </AnimatedElement>

            {/* Illustration Section with Next.js Image component */}
            <AnimatedElement
              delay={200}
              type="slideInRight"
              className="mt-12 lg:mt-0 relative lg:pl-6 xl:pl-10 2xl:pl-16"
            >
              <div className="relative z-10 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none mx-auto">
                <div
                  className="absolute -inset-10 lg:-inset-20 2xl:-inset-32 bg-gradient-to-br from-blue-300/10 to-blue-500/10 rounded-full blur-3xl"
                  aria-hidden="true"
                />

                {!isMounted ? (
                  <div className="relative z-10 w-full aspect-[4/3] bg-blue-100/20 rounded-lg flex items-center justify-center">
                    <div className="text-blue-400">Loading image...</div>
                  </div>
                ) : (
                  <div className="relative z-10 rounded-lg shadow-lg overflow-hidden">
                    <Image
                      src="/about.webp"
                      alt="Lumora Ventures team working on innovative business solutions and digital transformation"
                      width={700}
                      height={525}
                      className="w-full h-auto"
                      priority={false}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                      itemProp="image"
                    />
                  </div>
                )}
              </div>
            </AnimatedElement>
          </div>

          {/* Added startup journey section - appropriate for a new company */}
          <AnimatedElement
            delay={800}
            type="fadeInUp"
            className="mt-16 lg:mt-24"
          >
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 md:p-8 lg:p-10">
              <h3 className="text-center font-montserrat text-xl md:text-2xl lg:text-3xl font-semibold text-blue-800 mb-6">
                Our Journey
              </h3>
              <p className="text-center font-inter text-gray-700 text-base md:text-lg max-w-3xl mx-auto">
                As a young tech startup, we're passionate about helping
                businesses embrace digital transformation. Our team brings
                together expertise in software development, marketing, and
                automation to deliver innovative solutions tailored to your
                specific needs.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection;
