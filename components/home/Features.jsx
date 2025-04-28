"use client";

import { useState } from "react";
import Link from "next/link";
import { Globe, Cog, ChartBar, Lightbulb, ChevronRight } from "lucide-react";

// Feature Card component with hover effect
const FeatureCard = ({ title, icon, description, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-80 w-full mx-auto transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(!isHovered)}
    >
      {/* Base Card (always visible) */}
      <div
        className={`absolute inset-0 bg-white rounded-2xl shadow-md transition-all duration-500 ${
          isHovered ? "scale-0" : "scale-100"
        }`}
      >
        {/* Icon Container */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
            <div className="text-white w-8 h-8">{icon}</div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-12 p-6 text-center">
          <h3 className="text-xl font-bold mb-3 text-blue-800">{title}</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
        </div>
      </div>

      {/* Expanded Card (visible on hover) */}
      <div
        className={`absolute inset-0 rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ${
          isHovered ? "scale-110 z-10" : "scale-0"
        }`}
      >
        {/* Top Section with Background */}
        <div className="h-1/2 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center relative">
          {/* Icon Container */}
          <div className="bg-white p-2 rounded-xl">
            <div className="text-blue-600 w-6 h-6">{icon}</div>
          </div>

          {/* Shaped divider */}
          <div
            className="absolute bottom-0 left-0 w-full overflow-hidden"
            style={{ height: "15px" }}
          >
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <path
                d="M0,150 L0,80 C150,150 350,0 500,80 L500,150 Z"
                className="fill-white"
              ></path>
            </svg>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="h-1/2 bg-white p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-blue-800">{title}</h3>
            <p className="text-gray-600 text-sm mt-2 line-clamp-2">
              {description}
            </p>
          </div>
          <Link
            href={link || "#"}
            className="text-blue-500 font-medium text-sm flex items-center"
          >
            Learn More <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const services = [
    {
      icon: <Globe size={32} />,
      title: "Google My Business Profile Management",
      description:
        "Optimize your online presence and local visibility with our comprehensive GMB management services. We help you improve local SEO, manage reviews, and maintain accurate business information.",
      link: "/services#gmb",
    },
    {
      icon: <ChartBar size={32} />,
      title: "Salon Management Solution",
      description:
        "Streamline your salon operations with our modern management system. Handle appointments, inventory, staff scheduling, and customer relationships all in one integrated platform.",
      link: "/services#salon",
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Social Media Marketing",
      description:
        "Boost your brand presence with strategic social media marketing. We create engaging content, manage campaigns, and drive meaningful engagement across all major platforms.",
      link: "/services#social",
    },
    {
      icon: <Cog size={32} />,
      title: "Industrial Automations",
      description:
        "Transform your operations with cutting-edge industrial automation solutions. We provide innovative technologies to streamline processes, increase efficiency, and reduce costs in manufacturing and other industries.",
      link: "/services#automation",
    },
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-600">
            Our Expertise
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We specialize in delivering cutting-edge solutions that help
            businesses thrive in today's competitive digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
          {services.map((service, index) => (
            <FeatureCard
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>

        {/* Additional Services Section */}
        <div className="mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-800 mb-6">
                Comprehensive Digital Solutions for Modern Businesses
              </h2>
              <p className="text-gray-600 mb-8">
                Our team combines technical expertise with strategic insight to
                deliver solutions that drive measurable results. Whether you're
                looking to enhance your online presence or streamline your
                operations, we have the expertise to help your business succeed.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Web Development",
                  "Mobile Applications",
                  "E-commerce Solutions",
                  "CRM Implementation",
                  "Business Analytics",
                  "Cloud Migration",
                  "Content Marketing",
                  "SEO Optimization",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/services"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg inline-block"
              >
                View All Services
              </Link>
            </div>

            <div className="relative">
              <div className="bg-blue-50 p-8 rounded-2xl shadow-md relative z-10">
                <div className="flex flex-col gap-6">
                  {[
                    {
                      title: "Strategy & Planning",
                      description:
                        "We develop comprehensive strategies aligned with your business goals",
                    },
                    {
                      title: "Implementation & Development",
                      description:
                        "Our technical team brings concepts to life with quality code and design",
                    },
                    {
                      title: "Monitoring & Optimization",
                      description:
                        "Continuous improvement through analytics and performance tracking",
                    },
                  ].map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-1">
                          {step.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full z-0"></div>
              <div className="absolute bottom-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
