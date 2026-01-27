"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Clock,
  BookOpen,
  Tag,
} from "lucide-react";
import { blogData } from "@/app/data/blogData";

const categoryGradients = {
  "AI / Retail Technology": "from-purple-600 to-indigo-600",
  "Enterprise Software": "from-blue-600 to-cyan-600",
  "Beauty Tech / Product": "from-pink-500 to-rose-500",
  "Corporate Technology": "from-emerald-600 to-teal-600",
  "Creative Technology": "from-amber-500 to-orange-500",
  "Industrial Automation": "from-green-600 to-emerald-600",
  "Industrial IoT": "from-cyan-600 to-blue-600",
};

const categoryColors = {
  "AI / Retail Technology": "bg-purple-100 text-purple-700",
  "Enterprise Software": "bg-blue-100 text-blue-700",
  "Beauty Tech / Product": "bg-pink-100 text-pink-700",
  "Corporate Technology": "bg-emerald-100 text-emerald-700",
  "Creative Technology": "bg-amber-100 text-amber-700",
  "Industrial Automation": "bg-green-100 text-green-700",
  "Industrial IoT": "bg-cyan-100 text-cyan-700",
};

const BlogPreviewSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Show latest 3 posts
  const previewPosts = blogData.slice(0, 3);

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="py-20 md:py-28 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BookOpen className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              From Our Blog
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Latest Insights &{" "}
            <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover how we solve real-world challenges with innovative
            technology solutions.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {previewPosts.map((post, index) => {
            const gradient =
              categoryGradients[post.category] ||
              "from-blue-600 to-cyan-600";
            const categoryColor =
              categoryColors[post.category] || "bg-gray-100 text-gray-700";

            return (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block h-full"
              >
                <article
                  className={`relative h-full overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1 flex flex-col ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: `${(index + 1) * 150}ms`,
                  }}
                >
                  {/* Gradient Header */}
                  <div
                    className={`relative h-48 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}
                  >
                    <div className="text-center text-white">
                      <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <Tag className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-medium uppercase tracking-wider opacity-80">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <span
                      className={`self-start inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-3 ${categoryColor}`}
                    >
                      {post.category}
                    </span>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.publishDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1 text-blue-600 font-semibold text-xs group-hover:gap-2 transition-all">
                        Read
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* View All Button */}
        <div
          className={`text-center transition-all duration-700 delay-500 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
