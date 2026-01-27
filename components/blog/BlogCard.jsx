"use client";

import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const categoryColors = {
  "AI / Retail Technology": "bg-purple-100 text-purple-700",
  "Enterprise Software": "bg-blue-100 text-blue-700",
  "Beauty Tech / Product": "bg-pink-100 text-pink-700",
  "Corporate Technology": "bg-emerald-100 text-emerald-700",
  "Creative Technology": "bg-amber-100 text-amber-700",
  "Industrial Automation": "bg-green-100 text-green-700",
  "Industrial IoT": "bg-cyan-100 text-cyan-700",
};

const categoryGradients = {
  "AI / Retail Technology": "from-purple-600 to-indigo-600",
  "Enterprise Software": "from-blue-600 to-cyan-600",
  "Beauty Tech / Product": "from-pink-500 to-rose-500",
  "Corporate Technology": "from-emerald-600 to-teal-600",
  "Creative Technology": "from-amber-500 to-orange-500",
  "Industrial Automation": "from-green-600 to-emerald-600",
  "Industrial IoT": "from-cyan-600 to-blue-600",
};

const BlogCard = ({ post, index = 0, featured = false }) => {
  const gradient =
    categoryGradients[post.category] || "from-blue-600 to-cyan-600";
  const categoryColor =
    categoryColors[post.category] || "bg-gray-100 text-gray-700";

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image / Gradient */}
            <div
              className={`relative h-64 md:h-full min-h-[320px] bg-gradient-to-br ${gradient} flex items-center justify-center p-8`}
            >
              <div className="text-center text-white">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Tag className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium uppercase tracking-wider opacity-90">
                  {post.category}
                </span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${categoryColor}`}
                >
                  {post.category}
                </span>
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                  Featured
                </span>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                {post.title}
              </h2>

              <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {post.publishDate}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                <span className="inline-flex items-center gap-1 text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article
        className="relative h-full overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1 flex flex-col"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Image / Gradient Header */}
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
};

export default BlogCard;
