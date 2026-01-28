"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/animation/AnimatedSection";

const ProductsSection = () => {
  const products = [
    {
      name: "PulsedGym",
      desc: "Gym management with face recognition attendance",
      href: null,
      image: "/images/products/product-pulsedgym.avif",
    },
    {
      name: "VoxWel",
      desc: "Anonymous workplace reporting platform",
      href: null,
      image: "/images/products/product-voxwel.avif",
    },
    {
      name: "Curl Cipher",
      desc: "Comprehensive salon management system",
      href: "/curl-cipher",
      image: "/images/products/product-curl-cipher.avif",
    },
    {
      name: "VerseWing",
      desc: "Creative writing and publishing platform",
      href: null,
      image: "/images/products/product-versewing.avif",
    },
    {
      name: "LumoraOS",
      desc: "Complete business management suite",
      href: null,
      image: "/images/products/product-lumoraos.avif",
    },
    {
      name: "BPRS",
      desc: "Bakery AI-powered billing and recognition",
      href: null,
      image: "/images/products/product-bprs.avif",
    },
  ];

  const ProductCard = ({ product, isLink }) => {
    const content = (
      <>
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <h3 className={`text-xl font-bold mb-2 transition-colors ${isLink ? "text-gray-900 group-hover:text-blue-900" : "text-gray-900"}`}>
            {product.name}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            {product.desc}
          </p>
          <span className={`inline-flex items-center gap-1.5 text-blue-600 font-medium text-sm ${isLink ? "group-hover:gap-2.5" : ""} transition-all`}>
            Learn More
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </>
    );

    const cardClass = "bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 card-hover h-full overflow-hidden";

    if (isLink) {
      return (
        <Link href={product.href} className={`group block ${cardClass}`}>
          {content}
        </Link>
      );
    }

    return <div className={`group ${cardClass}`}>{content}</div>;
  };

  return (
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

        {/* 3-column product grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          staggerDelay={0.1}
        >
          {products.map((product) => (
            <StaggerItem key={product.name}>
              <ProductCard product={product} isLink={!!product.href} />
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
  );
};

export default ProductsSection;
