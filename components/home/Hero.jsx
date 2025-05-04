"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 to-transparent"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-10 right-20 w-16 h-16 rounded-full bg-blue-400/10"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 rounded-lg bg-purple-400/10"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      />
      <motion.div
        className="absolute top-40 left-32 w-8 h-8 rounded-full bg-indigo-400/10"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div className="flex-1 text-center lg:text-left mb-16 lg:mb-0">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Transform Your Business Today
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Transform Your Business with
              <span className="block text-blue-600">Digital Excellence</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Boost your local presence, streamline operations, and drive
              sustainable growth with our innovative solutions.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center px-8 py-4 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 rounded-full border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-all duration-300"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Feature Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12"
            >
              <div className="flex items-center text-gray-600">
                <Shield className="w-5 h-5 mr-2 text-blue-600" />
                <span className="text-sm">Secure & Trusted</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Zap className="w-5 h-5 mr-2 text-blue-600" />
                <span className="text-sm">Fast Implementation</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Sparkles className="w-5 h-5 mr-2 text-blue-600" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div className="flex-1 relative" variants={itemVariants}>
            <div className="relative z-10">
              {/* Main Illustration Placeholder */}
              <div className="relative w-full aspect-square max-w-[600px] mx-auto">
                {/* Illustration SVG */}
                <svg
                  className="w-full h-full"
                  viewBox="0 0 600 600"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background Circle */}
                  <circle
                    cx="300"
                    cy="300"
                    r="250"
                    fill="url(#gradient)"
                    opacity="0.1"
                  />

                  {/* Main Business Figure */}
                  <path
                    d="M250 300 C250 280, 280 280, 300 280 C320 280, 350 280, 350 300 C350 320, 300 350, 300 350 C300 350, 250 320, 250 300Z"
                    fill="#3B82F6"
                    opacity="0.9"
                  />

                  {/* Tech Elements */}
                  <rect
                    x="320"
                    y="240"
                    width="80"
                    height="40"
                    rx="8"
                    fill="#8B5CF6"
                    opacity="0.7"
                  />
                  <rect
                    x="200"
                    y="260"
                    width="40"
                    height="60"
                    rx="8"
                    fill="#10B981"
                    opacity="0.7"
                  />

                  {/* Growth Arrow */}
                  <path
                    d="M400 360 L450 310 L500 350"
                    stroke="#F59E0B"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Floating Elements */}
                  <circle
                    cx="150"
                    cy="150"
                    r="15"
                    fill="#8B5CF6"
                    opacity="0.6"
                  />
                  <circle
                    cx="450"
                    cy="180"
                    r="10"
                    fill="#3B82F6"
                    opacity="0.6"
                  />
                  <circle
                    cx="120"
                    cy="380"
                    r="12"
                    fill="#10B981"
                    opacity="0.6"
                  />

                  {/* Gradients */}
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Animated Rings */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-4 border-blue-400/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-4 border-purple-400/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.1,118.92,163.11,62.63,321.39,56.44Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
