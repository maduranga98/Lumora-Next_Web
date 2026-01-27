"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/animation/AnimatedSection";

const ProductsSection = () => {
  const products = [
    {
      name: "Curl Cipher",
      desc: "Complete salon management platform with dual apps for salon owners and clients. Appointment scheduling, staff management, inventory tracking, and business analytics.",
      industry: "Beauty & Personal Care",
      href: "/curl-cipher",
      color: "from-amber-500 to-orange-500",
      bgLight: "bg-amber-50",
      textColor: "text-amber-600",
      hasPage: true,
    },
    {
      name: "Industrial Automation",
      desc: "Smart factory solutions with IoT integration, predictive maintenance, control systems, and R&D development for manufacturing facilities.",
      industry: "Manufacturing & Production",
      href: "/industrial-automation",
      color: "from-emerald-500 to-teal-500",
      bgLight: "bg-emerald-50",
      textColor: "text-emerald-600",
      hasPage: true,
    },
    {
      name: "PulsedGym",
      desc: "Smart gym management with face recognition for seamless check-ins and member tracking.",
      industry: "Fitness & Wellness",
      color: "from-blue-500 to-indigo-500",
      bgLight: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      name: "VoxWel",
      desc: "Anonymous workplace reporting system that promotes transparency and healthy work culture.",
      industry: "Corporate & HR",
      color: "from-violet-500 to-purple-500",
      bgLight: "bg-violet-50",
      textColor: "text-violet-600",
    },
    {
      name: "VerseWing",
      desc: "Creative writing community platform connecting writers, readers, and publishers.",
      industry: "Media & Publishing",
      color: "from-rose-500 to-pink-500",
      bgLight: "bg-rose-50",
      textColor: "text-rose-600",
    },
  ];

  return (
    <section
      id="products"
      className="py-20 md:py-28 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Our Products</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Solutions We&apos;ve Built
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Proven products serving diverse industries with cutting-edge technology
          </p>
        </AnimatedSection>

        {/* Featured Products (with links) */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8" staggerDelay={0.15}>
          {products.filter(p => p.hasPage).map((product) => (
            <StaggerItem key={product.name}>
              <Link
                href={product.href}
                className="group block bg-white p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-400 card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className={`inline-block w-10 h-1 rounded-full bg-gradient-to-r ${product.color} mb-4`} />
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{product.desc}</p>
                <span className={`inline-flex items-center gap-1.5 text-sm font-medium ${product.textColor} ${product.bgLight} px-3 py-1 rounded-full`}>
                  {product.industry}
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Other Products */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
          {products.filter(p => !p.hasPage).map((product) => (
            <StaggerItem key={product.name}>
              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 card-hover h-full">
                <div className={`inline-block w-8 h-1 rounded-full bg-gradient-to-r ${product.color} mb-4`} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{product.desc}</p>
                <span className={`text-xs font-medium ${product.textColor}`}>
                  {product.industry}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ProductsSection;
