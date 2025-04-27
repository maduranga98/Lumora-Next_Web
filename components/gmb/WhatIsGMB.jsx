"use client";

import Image from "next/image";

const WhatIsGMB = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
              What is Google My Business?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Google My Business (GMB) is a free tool that allows businesses to
              manage their online presence across Google Search and Maps. It
              helps customers find your business and learn about your offerings.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A properly optimized GMB profile is essential for local businesses
              looking to connect with customers searching online. It allows you
              to display key information like your hours, location, contact
              details, photos, and customer reviews.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Lumora Ventures, we help businesses leverage the full potential
              of their GMB profiles to increase visibility, engagement, and
              conversions.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/api/placeholder/500/400"
              alt="Google My Business Overview"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsGMB;
