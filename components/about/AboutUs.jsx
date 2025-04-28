"use client";

import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section
      className="py-16 bg-gradient-to-b from-blue-50 to-blue-100"
      id="about"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">About Us</h2>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              At Lumora Ventures, we are passionate about empowering businesses
              to unlock their full potential in the digital age. Founded with a
              vision to deliver innovative solutions, we specialize in software
              development, industrial automation, digital marketing, and
              research-driven strategies that drive measurable success.
            </p>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Our mission is to equip businesses with the tools, technologies,
              and strategies they need to streamline operations, enhance
              customer engagement, and drive sustainable growth.
            </p>

            <Link
              href="/about"
              className="px-8 py-3 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition-colors inline-block"
            >
              Learn More About Our Journey
            </Link>
          </div>

          <div className="lg:w-1/2">
            <div className="relative">
              <Image
                src="/about.png"
                width={600}
                height={400}
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
              {/* Decorative elements to match the UI */}
              <div className="absolute -top-3 -right-3 w-32 h-8 bg-blue-500 rounded-full"></div>
              <div className="absolute -bottom-3 -left-3 w-8 h-32 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
