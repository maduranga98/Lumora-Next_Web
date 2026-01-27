"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl animate-morph-blob" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-100/20 rounded-full blur-3xl animate-morph-blob" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-50/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-lg w-full text-center relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/" className="inline-flex items-center gap-2">
            <Image
              src="/logo.webp"
              alt="Lumora Ventures"
              width={36}
              height={36}
              className="object-contain"
            />
            <span className="font-bold text-lg text-gray-900">Lumora Ventures</span>
          </Link>
        </motion.div>

        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-8xl sm:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 animate-gradient-shift leading-none">
            404
          </h1>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto my-6"
        />

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Page Not Found
          </h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25 hover:scale-105"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>

          <Link
            href="/#services"
            className="group inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-gray-700 font-medium rounded-full hover:border-blue-300 hover:text-blue-600 transition-all duration-300 hover:shadow-md"
          >
            <Search className="w-4 h-4" />
            View Our Services
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 pt-8 border-t border-gray-100"
        >
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-4">Quick Links</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { label: "Services", href: "/#services" },
              { label: "Products", href: "/#products" },
              { label: "Curl Cipher", href: "/curl-cipher" },
              { label: "Industrial Automation", href: "/industrial-automation" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/#contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
