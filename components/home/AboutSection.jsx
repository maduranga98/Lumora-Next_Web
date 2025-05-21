"use client";

import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute -top-20 right-0 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-3">
                About Us
              </h2>
              <div className="w-20 h-1.5 bg-blue-500 rounded-full mb-8"></div>
            </div>

            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                At Lumora Ventures, we are passionate about empowering
                businesses to unlock their full potential in the digital age.
                Founded with a vision to deliver innovative solutions, we
                specialize in software development, industrial automation,
                digital marketing, and research-driven strategies that drive
                measurable success.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Our mission is to equip businesses with the tools, technologies,
                and strategies they need to streamline operations, enhance
                customer engagement, and drive sustainable growth.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                What sets us apart is our holistic approach to problem-solving.
                We don't just implement solutions – we partner with you to
                understand your unique challenges, goals, and vision.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-2xl font-semibold text-blue-800">
                Our Core Values
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {[
                  "Innovation & Creativity",
                  "Excellence & Quality",
                  "Integrity & Transparency",
                  "Client Partnership",
                ].map((value, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                    <span className="text-gray-700">{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <Link
                href="/about"
                className="px-8 py-3 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition-colors inline-block shadow-md"
              >
                Learn More About Us
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            {/* Create subtle background colors to enhance the illustration without containing it */}
            <div className="absolute inset-0 scale-150 opacity-50">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl"></div>
              <div className="absolute top-1/3 left-1/3 w-60 h-60 bg-blue-100/40 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/3 right-1/3 w-60 h-60 bg-blue-300/20 rounded-full blur-3xl"></div>
            </div>

            {/* The illustration without any container */}
            <div className="animate-float">
              <Image
                src="/about.webp"
                width={600}
                height={500}
                alt="Lumora Ventures Illustration"
                className="w-full h-auto"
                style={{ mixBlendMode: "multiply" }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
