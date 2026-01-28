"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  X,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/animation/AnimatedSection";

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedProduct(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProduct]);

  const products = [
    {
      name: "PulsedGym",
      shortDesc: "Gym management with face recognition attendance",
      fullDesc:
        "Modern gym management system powered by AI-driven face recognition for automated attendance tracking. Eliminate manual check-ins, prevent membership fraud, and deliver seamless member experiences with cutting-edge computer vision technology.",
      image: "/images/products/product-pulsedgym.avif",
      features: [
        "ESP32-CAM face recognition attendance (97% accuracy)",
        "Real-time member check-in/check-out tracking",
        "Automated membership management and renewals",
        "Staff scheduling and performance analytics",
      ],
      audience: "Fitness centers, gyms, yoga studios, sports facilities",
      status: "ACTIVE",
      metrics: ["97% Accuracy", "Zero Manual Check-ins", "Fraud Prevention"],
      socials: {
        facebook: "https://web.facebook.com/profile.php?id=61585879816201",
      },
    },
    {
      name: "VoxWel",
      shortDesc: "Anonymous workplace reporting platform",
      fullDesc:
        "Empower employees to report concerns safely and anonymously. End-to-end encrypted platform for workplace reporting, complaint management, and organizational transparency. Build trust while maintaining complete confidentiality.",
      image: "/images/products/product-voxwel.avif",
      features: [
        "Military-grade end-to-end encryption",
        "Completely anonymous reporting system",
        "Smart case management and categorization",
        "Real-time dashboard for HR and leadership",
      ],
      audience: "Corporations, manufacturing, healthcare, government",
      status: "ACTIVE",
      metrics: [
        "Zero-Knowledge",
        "Military-Grade Encryption",
        "100% Anonymous",
      ],
      website: "https://voxwel.com",
      socials: {
        facebook: "https://web.facebook.com/profile.php?id=61584728859176",
        instagram: "https://www.instagram.com/vox.wel/",
        linkedin: "https://www.linkedin.com/company/voxwel/",
      },
    },
    {
      name: "Curl Cipher",
      shortDesc: "Comprehensive salon management system",
      fullDesc:
        "All-in-one platform connecting salon owners, staff, and customers. Automate bookings, manage operations, and grow your beauty business with integrated owner dashboard, customer booking app, and retail marketplace—all in one system.",
      image: "/images/products/product-curl-cipher.avif",
      internalLink: "/curl-cipher",
      features: [
        "Multi-branch salon management dashboard",
        "Customer booking mobile app (iOS & Android)",
        "Integrated beauty product marketplace",
        "Staff scheduling and commission tracking",
      ],
      audience: "Hair salons, nail studios, spas, beauty centers",
      status: "ACTIVE",
      metrics: ["85% Less Admin", "90% Faster Bookings", "3X Retention"],
      socials: {
        facebook: "https://web.facebook.com/profile.php?id=61585412455422",
        instagram:
          "https://www.instagram.com/curlcipher/?fbclid=IwY2xjawPnGrRleHRuA2FlbQIxMQBicmlkETFKbndEYmhKcnFwSzhoVjI4c3J0YwZhcHBfaWQBMAABHgZnAc2F4mme_g0Ba5dU9ltK18BqnQh1SgJNF-rZXfAnZ6pu2Mf5X8gohPZq_aem_UM3eo9p4ZbbhoYCpV2ENLQ",
      },
    },
    {
      name: "VerseWing",
      shortDesc: "Creative writing and publishing platform",
      fullDesc:
        "Connect writers with readers in a thriving creative community. Publish stories, build your audience, and monetize your writing through reader subscriptions, story sales, and tips. Transform your passion for writing into sustainable income.",
      image: "/images/products/product-versewing.avif",
      website: "https://versewing.com",
      features: [
        "Publish unlimited stories and chapters",
        "Build your reader following organically",
        "Monetize through subscriptions and sales",
        "Analytics dashboard tracks your growth",
      ],
      audience: "Fiction writers, poets, bloggers, aspiring authors",
      status: "ACTIVE",
      socials: {
        facebook: "https://web.facebook.com/profile.php?id=61585042432235#",
        instagram:
          "https://www.instagram.com/verse.wing/?fbclid=IwY2xjawPnGwhleHRuA2FlbQIxMQBicmlkETFKbndEYmhKcnFwSzhoVjI4c3J0YwZhcHBfaWQBMAABHmZzkhlpP2g0k1mnllP8hjtLYuKFvgyV3ZWZsqxMALcy7F57klmOUSPJn4MN_aem_pbCYrAI0cnKRTxfcMOeY0w",
      },
    },
    {
      name: "LumoraOS",
      shortDesc: "Complete business management suite",
      fullDesc:
        'Comprehensive ERP solution tracking every aspect of your business from production to sales. Manage inventory, staff, vehicles, deliveries, and finances with revolutionary "mark sold" feature that eliminates theft and guarantees zero market returns.',
      image: "/images/products/product-lumoraos.avif",
      features: [
        "Item tracking from production to point-of-sale",
        "GPS-enabled staff attendance and field operations",
        "Sales rep mobile app with offline capability",
        'Revolutionary "mark sold" anti-theft system',
      ],
      audience: "Distribution, manufacturing, food & beverage, retail",
      status: "ACTIVE",
      metrics: ["0% Returns", "Zero Theft", "99.5% Inventory Accuracy"],
    },
    {
      name: "BPRS",
      shortDesc: "Bakery AI-powered billing and recognition",
      fullDesc:
        "Revolutionary edge computing device that recognizes bakery items and generates bills in 2-3 seconds using computer vision. Transform peak-hour chaos into seamless service with 80% queue reduction and instant billing.",
      image: "/images/products/product-bprs.avif",
      features: [
        "2-3 second billing with AI recognition",
        "98%+ product identification accuracy",
        "Works completely offline (edge computing)",
        "Handles 200+ product categories",
      ],
      audience: "Bakeries, cafeterias, food courts, QSR",
      status: "BETA TESTING",
      metrics: ["2-3 Seconds", "98% Accuracy", "80% Queue Reduction"],
    },
  ];

  return (
    <>
      <section id="products" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
              Our Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proven solutions serving businesses across Sri Lanka and beyond.
            </p>
          </AnimatedSection>

          {/* Product Grid */}
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            staggerDelay={0.1}
          >
            {products.map((product) => (
              <StaggerItem key={product.name}>
                <div
                  className="group bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 card-hover h-full overflow-hidden flex flex-col cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 text-xs font-bold uppercase tracking-wide rounded-full shadow-sm ${
                          product.status === "ACTIVE"
                            ? "bg-green-100 text-green-700 border border-green-200"
                            : "bg-yellow-100 text-yellow-800 border border-yellow-200"
                        }`}
                      >
                        {product.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-900 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4 flex-grow line-clamp-3">
                      {product.shortDesc}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-blue-600 font-medium text-sm group-hover:gap-2.5 transition-all mt-auto">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* View All Products CTA */}
          <AnimatedSection className="text-center" delay={0.3}>
            <Link
              href="#products"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-900 text-white font-semibold rounded-full hover:bg-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Product Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-y-auto overflow-x-hidden flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>

              {/* Image Side (Mobile: Top, Desktop: Left) */}
              <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-[300px]">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent md:bg-gradient-to-r" />

                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">
                    {selectedProduct.name}
                  </h3>
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border ${
                      selectedProduct.status === "ACTIVE"
                        ? "bg-green-500/20 border-green-400 text-green-100"
                        : "bg-yellow-500/20 border-yellow-400 text-yellow-100"
                    }`}
                  >
                    {selectedProduct.status}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-6 md:p-8 md:w-3/5 overflow-y-auto">
                {/* Description */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-2">
                    Overview
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {selectedProduct.fullDesc}
                  </p>
                </div>

                {/* Metrics Grid */}
                {selectedProduct.metrics && (
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {selectedProduct.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="bg-blue-50 rounded-lg p-3 text-center border border-blue-100"
                      >
                        <span className="block text-xs text-blue-600 font-bold uppercase tracking-tight mb-1">
                          {metric.split(" ").slice(1).join(" ")}
                        </span>
                        <span className="block text-sm font-bold text-gray-900 truncate">
                          {metric.split(" ")[0]}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Key Features */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {selectedProduct.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-700 text-sm"
                      >
                        <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Target Audience */}
                <div className="mb-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Designed For
                  </h4>
                  <p className="text-gray-800 font-medium text-sm">
                    {selectedProduct.audience}
                  </p>
                </div>

                {/* Links & Socials */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-gray-100">
                  {/* Action Buttons */}
                  <div className="flex gap-3 w-full sm:w-auto">
                    {selectedProduct.website && (
                      <a
                        href={selectedProduct.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors text-sm"
                      >
                        <Globe className="w-4 h-4" />
                        Visit Website
                      </a>
                    )}

                    {selectedProduct.internalLink && (
                      <Link
                        href={selectedProduct.internalLink}
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-400 transition-colors text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Product Page
                      </Link>
                    )}
                  </div>

                  {/* Social Icons */}
                  {selectedProduct.socials && (
                    <div className="flex items-center gap-4">
                      {selectedProduct.socials.facebook && (
                        <a
                          href={selectedProduct.socials.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
                        >
                          <Facebook className="w-5 h-5" />
                        </a>
                      )}
                      {selectedProduct.socials.instagram && (
                        <a
                          href={selectedProduct.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-all"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                      )}
                      {selectedProduct.socials.linkedin && (
                        <a
                          href={selectedProduct.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-blue-700 hover:bg-blue-50 rounded-full transition-all"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductsSection;
