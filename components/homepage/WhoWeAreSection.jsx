"use client";

import Image from "next/image";
import AnimatedSection from "@/components/animation/AnimatedSection";

const WhoWeAreSection = () => {
  return (
    // Added overflow-hidden to prevent horizontal scroll during animation
    <section id="about" className="py-20 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Image - 40% */}
          <AnimatedSection variant="slideLeft" className="md:col-span-2">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/team-collaboration.avif"
                alt="Lumora Ventures team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </AnimatedSection>

          {/* Text - 60% */}
          <AnimatedSection
            variant="slideRight"
            delay={0.15}
            className="md:col-span-3"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
              Who We Are
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Lumora Ventures is a Sri Lankan technology startup specializing in
              software development, mobile applications, industrial automation,
              and AI/ML solutions.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We build custom technology that drives business growth,
              operational efficiency, and competitive advantage across multiple
              industries.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed italic mb-8">
              Leading the illumination pathways to innovation.
            </p>

            {/* Vision & Mission */}
            <div className="space-y-6">
              {/* Vision */}
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To be the leading technology partner that transforms
                  businesses through innovative solutions, illuminating the path
                  from traditional operations to digital excellence.
                </p>
              </div>

              {/* Mission */}
              <div className="border-l-4 border-cyan-500 pl-4">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To deliver cutting-edge software solutions, industrial
                  automation, and AI-powered systems that solve real-world
                  problems, drive measurable results, and empower businesses to
                  achieve sustainable growth.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
