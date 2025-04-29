"use client";

import { Building2, Scissors, Share2, Zap } from "lucide-react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      id: "gmb",
      title: "Google My Business Management",
      icon: Building2,
      description:
        "Boost your business visibility with our Google My Business (GMB) Management Services. Whether you're a small local business or a growing enterprise, we ensure your GMB profile is fully optimized to attract more customers and improve local search rankings.",
      details:
        "Our services include accurate business information setup, regular updates, engaging content creation, and prompt response to customer reviews. By leveraging analytics, we refine strategies to keep your business ahead in the local search game.",
      benefits: [
        "Increased customer engagement",
        "Enhanced credibility with consistent and updated information",
        "Improved search visibility with optimized listings",
      ],
      cta: "View more",
    },
    {
      id: "salon",
      title: "Salon Management Solutions",
      icon: Scissors,
      description:
        "Revolutionize your salon operations with our all-in-one Salon Management System. Whether you run a boutique salon or a large chain, our software is designed to streamline every aspect of your business effortlessly.",
      details:
        "From appointment scheduling to inventory management, employee payroll, and customer feedback, our system provides everything you need to streamline operations and enhance customer satisfaction.",
      benefits: [
        "Save time by automating manual processes",
        "Enhance customer experience with efficient booking",
        "Monitor business performance with detailed analytics",
      ],
      cta: "Transform My Salon Today",
    },
    {
      id: "automation",
      title: "Business Process Automation",
      icon: Zap,
      description:
        "Streamline your operations and maximize efficiency with our cutting-edge Business Process Automation solutions. We help organizations of all sizes reduce manual tasks, minimize errors, and focus on growth by implementing intelligent automation systems.",
      details:
        "We analyze your current workflows, identify bottlenecks, and implement custom automation solutions tailored to your specific needs. Our team integrates various systems to create seamless processes that save time and resources.",
      benefits: [
        "Reduce operational costs by up to 40%",
        "Eliminate human error in repetitive tasks",
        "Free up employee time for high-value activities",
        "Improve scalability with standardized processes",
      ],
      cta: "Automate My Business",
    },
    {
      id: "social",
      title: "Social Media Marketing",
      icon: Share2,
      description:
        "Connect, engage, and grow your brand with our comprehensive Social Media Marketing Services. From strategy development to content creation and analytics, we handle everything to ensure your brand resonates with your audience across platforms.",
      details:
        "We design creative campaigns that align with your brand's voice and target the right audience. Through paid ad campaigns, we help you maximize ROI while building long-lasting relationships with your customers.",
      benefits: [
        "Strengthened brand identity",
        "Improved customer reach and engagement",
        "Increased conversion rates with targeted strategies",
      ],
      cta: "Start Growing My Audience",
      comingSoon: true,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a range of specialized services designed to help your
            business grow and thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
