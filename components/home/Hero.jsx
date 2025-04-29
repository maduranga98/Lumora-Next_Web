"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Staggered animation for text elements
  const textContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const textItem = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Decorative elements animation
  const decorativeElements = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Button animation
  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.9,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
      transition: {
        duration: 0.3,
      },
    },
  };

  // Image animation
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-100 to-blue-500 pt-28 pb-16 overflow-hidden min-h-[85vh] flex items-center">
      {/* Background decorative elements with animations */}
      <motion.div
        initial="hidden"
        animate={isLoaded ? "show" : "hidden"}
        variants={decorativeElements}
        className="absolute top-[10%] right-[8%] w-16 h-16 rounded-full bg-blue-300/30"
      />
      <motion.div
        initial="hidden"
        animate={isLoaded ? "show" : "hidden"}
        variants={decorativeElements}
        transition={{ delay: 0.1 }}
        className="absolute bottom-[15%] left-[10%] w-12 h-12 rounded-full bg-blue-300/30"
      />
      <motion.div
        initial="hidden"
        animate={isLoaded ? "show" : "hidden"}
        variants={decorativeElements}
        transition={{ delay: 0.2 }}
        className="absolute top-[25%] right-1/4 w-8 h-8 rounded-full bg-blue-300/30"
      />
      <motion.div
        initial="hidden"
        animate={isLoaded ? "show" : "hidden"}
        variants={decorativeElements}
        transition={{ delay: 0.3 }}
        className="absolute top-1/3 left-1/4 w-16 h-16 rounded-full bg-blue-300/20"
      />
      <motion.div
        initial="hidden"
        animate={isLoaded ? "show" : "hidden"}
        variants={decorativeElements}
        transition={{ delay: 0.4 }}
        className="absolute bottom-1/4 right-1/3 w-10 h-10 rounded-full bg-blue-300/15"
      />

      {/* Large blue circle behind illustration with subtle floating animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -8, 0],
        }}
        transition={{
          opacity: { duration: 1 },
          scale: { duration: 1 },
          y: {
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
            repeatType: "reverse",
          },
        }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-blue-300/30 blur-2xl"
      />

      {/* Content container with max-width constraint for ultrawide screens */}
      <div className="container mx-auto px-6 md:px-8 relative max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left content */}
          <motion.div
            initial="hidden"
            animate={isLoaded ? "show" : "hidden"}
            variants={textContainer}
            className="md:w-[45%] z-10"
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              variants={textContainer}
            >
              <motion.span variants={textItem} className="text-blue-950">
                Shaping the
              </motion.span>
              <br />
              <motion.span variants={textItem} className="text-blue-400">
                Future
              </motion.span>
              <motion.span variants={textItem} className="text-blue-950">
                {" "}
                of{" "}
              </motion.span>
              <br />
              <motion.span variants={textItem} className="text-blue-400">
                Tech
              </motion.span>
              <motion.span variants={textItem} className="text-blue-950">
                {" "}
                and
              </motion.span>
              <br />
              <motion.span variants={textItem} className="text-blue-950">
                Marketing
              </motion.span>
            </motion.h1>

            <motion.p
              variants={textItem}
              className="text-blue-950 mb-8 text-base lg:text-lg"
            >
              At Lumora Ventures, we craft innovative technology solutions and
              marketing strategies for the digital age.
            </motion.p>

            <motion.div
              initial="initial"
              animate="animate"
              whileHover="hover"
              variants={buttonVariants}
            >
              <Link
                href="/services"
                className="inline-block bg-blue-400 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-md"
              >
                Explore Our Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side illustration - fixed positioning for ultrawide screens */}
          <motion.div
            initial="hidden"
            animate={isLoaded ? "show" : "hidden"}
            variants={imageVariants}
            className="md:w-[50%] mt-10 md:mt-0"
          >
            {/* This wrapper maintains the image size on ultrawide screens */}
            <div className="md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">
              <motion.div
                className="relative md:scale-100 lg:scale-110 origin-center"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut",
                    repeatType: "reverse",
                  },
                }}
              >
                <motion.div
                  className="absolute -inset-2 bg-blue-200/50 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                />
                <Image
                  src="/hero.png"
                  width={550}
                  height={450}
                  alt="Technology and Marketing Solutions"
                  className="w-full h-auto relative z-10"
                  priority
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "data:image/svg+xml;base64,..."; // SVG fallback here
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle wave pattern at bottom for transition with animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-8"
          style={{ fill: "#ffffff" }}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.1,118.92,163.11,62.63,321.39,56.44Z"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
