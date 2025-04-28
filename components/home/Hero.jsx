"use client";

import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-100 to-blue-200 pt-28 pb-16 overflow-hidden min-h-[85vh] flex items-center">
      {/* Background decorative elements */}
      <div className="absolute top-[10%] right-[8%] w-16 h-16 rounded-full bg-blue-300/30"></div>
      <div className="absolute bottom-[15%] left-[10%] w-12 h-12 rounded-full bg-blue-300/30"></div>
      <div className="absolute top-[25%] right-1/4 w-8 h-8 rounded-full bg-blue-300/30"></div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 rounded-full bg-blue-300/20"></div>
      <div className="absolute bottom-1/4 right-1/3 w-10 h-10 rounded-full bg-blue-300/15"></div>

      {/* Large blue circle behind illustration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-blue-300/30 blur-2xl"></div>

      {/* Content container with max-width constraint for ultrawide screens */}
      <div className="container mx-auto px-6 md:px-8 relative max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left content */}
          <div className="md:w-[45%] z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-blue-950">Shaping the</span>
              <br />
              <span className="text-blue-400">Future</span>
              <span className="text-blue-950"> of </span>
              <br />
              <span className="text-blue-400">Tech</span>
              <span className="text-blue-950"> and</span>
              <br />
              <span className="text-blue-950">Marketing</span>
            </h1>

            <p className="text-blue-950 mb-8 text-base lg:text-lg">
              At Lumora Ventures, we craft innovative technology solutions and
              marketing strategies for the digital age.
            </p>

            <Link
              href="/services"
              className="inline-block bg-blue-400 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Right side illustration - fixed positioning for ultrawide screens */}
          <div className="md:w-[50%] mt-10 md:mt-0">
            {/* This wrapper maintains the image size on ultrawide screens */}
            <div className="md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">
              <div className="relative md:scale-100 lg:scale-110 origin-center">
                <div className="absolute -inset-2 bg-blue-200/50 rounded-full blur-xl"></div>
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle wave pattern at bottom for transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-8"
          style={{ fill: "#ffffff" }}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.1,118.92,163.11,62.63,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
