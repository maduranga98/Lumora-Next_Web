"use client";

import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-amber-100 py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold text-teal-700 mb-4">
              Google My Business Management
            </h1>
            <p className="text-lg text-teal-800 mb-6 max-w-lg">
              Boost your local visibility and attract more customers with our
              expert Google My Business management services.
            </p>
            <Link
              href="#contact"
              className="inline-block bg-teal-700 text-white py-3 px-8 rounded-full font-semibold transition-all hover:bg-teal-800 hover:-translate-y-1 hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/gmb.png"
              alt="Google My Business Management"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
