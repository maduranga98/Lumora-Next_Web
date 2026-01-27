"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Loading() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl animate-morph-blob" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-cyan-100/30 rounded-full blur-3xl animate-morph-blob" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative flex flex-col items-center">
        {/* SVG ring loader */}
        <div className="relative w-28 h-28 md:w-36 md:h-36">
          {/* Outer ring */}
          <svg className="absolute inset-0 w-full h-full loading-ring" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#e0e7ff"
              strokeWidth="3"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#gradient1)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="283"
              className="loading-dash"
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Inner ring */}
          <svg className="absolute inset-3 md:inset-4 w-[calc(100%-1.5rem)] h-[calc(100%-1.5rem)] md:w-[calc(100%-2rem)] md:h-[calc(100%-2rem)] loading-ring-reverse" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#dbeafe"
              strokeWidth="2"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="283"
              strokeDashoffset="200"
              className="loading-dash"
              style={{ animationDelay: "0.5s" }}
            />
          </svg>

          {/* Center logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 md:w-18 md:h-18 rounded-full bg-white shadow-lg flex items-center justify-center p-1">
              <Image
                src="/logo.webp"
                alt="Lumora Ventures"
                width={56}
                height={56}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Brand text */}
        <div className="mt-8 text-center">
          <p className="text-lg font-semibold text-gradient">
            Lumora Ventures
          </p>
          <div className="flex items-center gap-1 mt-2 justify-center">
            <span className="text-sm text-gray-400 tracking-wide">Loading</span>
            <span className="flex gap-0.5">
              <span className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
