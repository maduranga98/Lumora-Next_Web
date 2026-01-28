"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/animation/AnimatedSection";

const InnovationSection = () => {
  const innovations = [
    {
      name: "BPRS - Bakery AI Recognition",
      description: "2-3 second billing with computer vision",
      metric: "80% queue reduction",
      status: "Beta Testing",
      statusColor: "bg-yellow-100 text-yellow-800",
      image: "/images/innovation-bprs.avif",
      imageAlt: "BPRS bakery AI recognition system",
    },
    {
      name: "GymNex - Smart Gym System",
      description: "ESP32-CAM face recognition attendance",
      metric: "Attendance automation",
      status: "Active Deployments",
      statusColor: "bg-green-100 text-green-800",
      image: "/images/innovation-gymnex.avif",
      imageAlt: "GymNex face recognition attendance system",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Innovation in Action
          </h2>
        </AnimatedSection>

        {/* 2-column innovation cards */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12"
          staggerDelay={0.15}
        >
          {innovations.map((item) => (
            <StaggerItem key={item.name}>
              <div className="bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 card-hover h-full overflow-hidden">
                <div className="relative w-full aspect-[3/2]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.name}
                    </h3>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-3 ${item.statusColor}`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg">
                    <span className="text-sm font-semibold text-blue-900">
                      {item.metric}
                    </span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <AnimatedSection className="text-center" delay={0.3}>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-blue-600 font-semibold text-lg hover:text-blue-800 transition-colors"
          >
            View Our Technology
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default InnovationSection;
