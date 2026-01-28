"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Filter,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Lightbulb,
} from "lucide-react";
import { blogData } from "@/app/data/blogData";
import BlogCard from "./BlogCard";
import Navbar from "@/components/homepage/Navbar";

const categories = ["All", ...new Set(blogData.map((post) => post.category))];

const BlogHome = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredPosts = useMemo(() => {
    return blogData.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = blogData[0];
  const regularPosts = filteredPosts.filter((p) =>
    selectedCategory === "All" && searchQuery === ""
      ? p.id !== featuredPost.id
      : true,
  );

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 md:pb-28 overflow-hidden min-h-[500px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/blogs/blog-hero-technology_converted.avif"
            alt="Technology Innovation and Insights"
            fill
            className="object-cover"
            priority
          />
          {/* Overlays for text readability */}
          <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-blue-300 font-medium">Blog</li>
            </ol>
          </nav>

          <div
            className={`max-w-3xl transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                <BookOpen className="w-6 h-6 text-blue-300" />
              </div>
              <span className="text-blue-200 font-semibold text-sm uppercase tracking-wider">
                Lumora Ventures Blog
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md">
              Insights & Innovation in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                Technology
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl drop-shadow-sm">
              Explore our latest case studies, technical deep-dives, and
              industry insights in AI, automation, and software development.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <BookOpen className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <span className="block text-2xl font-bold text-white">
                    {blogData.length}
                  </span>
                  <span className="text-xs text-gray-300 uppercase tracking-wide">
                    Articles
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <TrendingUp className="w-5 h-5 text-cyan-300" />
                </div>
                <div>
                  <span className="block text-2xl font-bold text-white">
                    {categories.length - 1}
                  </span>
                  <span className="text-xs text-gray-300 uppercase tracking-wide">
                    Categories
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Lightbulb className="w-5 h-5 text-purple-300" />
                </div>
                <div>
                  <span className="block text-2xl font-bold text-white">
                    Real-World
                  </span>
                  <span className="text-xs text-gray-300 uppercase tracking-wide">
                    Case Studies
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 36.7 768 43.3 864 45C960 46.7 1056 43.3 1152 38.3C1248 33.3 1344 26.7 1392 23.3L1440 20V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z"
              fill="#f9fafb"
            />
          </svg>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                aria-label="Search blog articles"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-1 w-full md:w-auto">
              <Filter className="w-4 h-4 text-gray-400 flex-shrink-0" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                  aria-label={`Filter by ${category}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="bg-gray-50 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          {selectedCategory === "All" && searchQuery === "" && (
            <div className="mb-12">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
                Featured Article
              </h2>
              <BlogCard post={featuredPost} featured={true} />
            </div>
          )}

          {/* Results Count */}
          {(selectedCategory !== "All" || searchQuery !== "") && (
            <div className="mb-6">
              <p className="text-sm text-gray-500">
                Showing{" "}
                <span className="font-semibold text-gray-700">
                  {regularPosts.length}
                </span>{" "}
                {regularPosts.length === 1 ? "article" : "articles"}
                {selectedCategory !== "All" && (
                  <span>
                    {" "}
                    in{" "}
                    <span className="font-semibold text-blue-600">
                      {selectedCategory}
                    </span>
                  </span>
                )}
                {searchQuery && (
                  <span>
                    {" "}
                    for &quot;
                    <span className="font-semibold">{searchQuery}</span>
                    &quot;
                  </span>
                )}
              </p>
            </div>
          )}

          {/* Posts Grid */}
          {regularPosts.length > 0 ? (
            <>
              {selectedCategory === "All" && searchQuery === "" && (
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
                  All Articles
                </h2>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-2xl flex items-center justify-center">
                <Search className="w-10 h-10 text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No articles found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search or filter to find what you&apos;re
                looking for.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Our team of experts can help you implement the technologies
            discussed in our articles. Let&apos;s build something great
            together.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default BlogHome;
