"use client";

import { useState } from "react";
import Link from "next/link";
import { Globe, Cog, BarChart, Lightbulb, ChevronRight } from "lucide-react";

// Feature Card component with enhanced animations
const FeatureCard = ({ title, icon, description, id }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Generate direct path based on id
  const getPath = () => {
    if (id === "gmb") return "/gmb";
    if (id === "salon") return "/salon";
    if (id === "automation") return "/automation";
    if (id === "social") return "/social";
    return "#";
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-md h-full flex flex-col transition-all duration-300"
      style={{
        transform: isHovered ? "translateY(-10px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Section with Gradient Background */}
      <div className="h-36 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-2xl relative flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div
          className="absolute w-40 h-40 rounded-full bg-white/10 transition-all duration-700"
          style={{
            top: isHovered ? "-10%" : "-30%",
            right: isHovered ? "10%" : "-10%",
            opacity: isHovered ? 0.2 : 0.1,
          }}
        ></div>
        <div
          className="absolute w-24 h-24 rounded-full bg-white/10 transition-all duration-700"
          style={{
            bottom: isHovered ? "0%" : "-20%",
            left: isHovered ? "5%" : "-15%",
            opacity: isHovered ? 0.2 : 0.1,
          }}
        ></div>

        {/* Icon Container with animation */}
        <div
          className="bg-white p-3 rounded-xl shadow-md transition-all duration-300"
          style={{
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
        >
          <div
            className="text-blue-600 w-8 h-8 transition-all duration-300"
            style={{
              transform: isHovered ? "rotate(10deg)" : "rotate(0deg)",
            }}
          >
            {icon}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-blue-800 text-center">
          {title}
        </h3>

        <div
          className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-4 transition-all duration-300"
          style={{
            width: isHovered ? "80px" : "64px",
          }}
        ></div>

        <p className="text-gray-600 text-sm mb-6 flex-grow">{description}</p>

        {/* Expanded Content with animation */}
        {isExpanded && (
          <div
            className="mt-4 mb-4 overflow-hidden transition-all duration-500"
            style={{
              maxHeight: isExpanded ? "200px" : "0",
              opacity: isExpanded ? 1 : 0,
            }}
          >
            <p className="text-gray-600 text-sm">
              More details about {title} services and how they can benefit your
              business. Our team of experts will work closely with you to
              customize solutions that meet your specific needs and goals.
            </p>
          </div>
        )}

        <div className="mt-auto flex justify-between items-center">
          {description.length > 150 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-500 text-sm font-medium transition-all hover:text-blue-700"
            >
              {isExpanded ? "Show less" : "Read more"}
            </button>
          )}

          <Link
            href={getPath()}
            className="text-blue-600 font-medium text-sm flex items-center ml-auto group"
          >
            Learn More
            <ChevronRight
              size={16}
              className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const services = [
    {
      id: "gmb",
      icon: <Globe size={32} />,
      title: "Google My Business Profile Management",
      description:
        "Optimize your online presence and local visibility with our comprehensive GMB management services. We help you improve local SEO, manage reviews, and maintain accurate business information.",
    },
    {
      id: "salon",
      icon: <BarChart size={32} />,
      title: "Salon Management Solution",
      description:
        "Streamline your salon operations with our modern management system. Handle appointments, inventory, staff scheduling, and customer relationships all in one integrated platform.",
    },
    {
      id: "social",
      icon: <Lightbulb size={32} />,
      title: "Social Media Marketing",
      description:
        "Boost your brand presence with strategic social media marketing. We create engaging content, manage campaigns, and drive meaningful engagement across all major platforms.",
    },
    {
      id: "automation",
      icon: <Cog size={32} />,
      title: "Industrial Automations",
      description:
        "Transform your operations with cutting-edge industrial automation solutions. We provide innovative technologies to streamline processes, increase efficiency, and reduce costs in manufacturing and other industries.",
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
              id={service.id}
              title={service.title}
              icon={service.icon}
              description={service.description}
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
