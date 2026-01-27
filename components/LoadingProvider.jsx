"use client";

import {
  useState,
  useEffect,
  createContext,
  useContext,
  Suspense,
} from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";

// Create context
const LoadingContext = createContext({
  isLoading: false,
  setIsLoading: () => {},
});

// Component that uses useSearchParams
function LoadingProviderContent({ children, setIsLoading }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Reset loading state when route changes
  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname, searchParams, setIsLoading]);

  return children;
}

// Professional Loading Screen
function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 transition-all duration-300">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-16 w-56 h-56 bg-blue-100/30 rounded-full blur-3xl animate-morph-blob" />
        <div className="absolute bottom-1/4 -right-16 w-64 h-64 bg-cyan-100/20 rounded-full blur-3xl animate-morph-blob" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative flex flex-col items-center">
        {/* SVG ring animation */}
        <div className="relative w-28 h-28 md:w-36 md:h-36">
          {/* Background ring */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#e0e7ff"
              strokeWidth="2.5"
            />
          </svg>

          {/* Animated ring 1 */}
          <svg className="absolute inset-0 w-full h-full loading-ring" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#loadingGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="283"
              className="loading-dash"
            />
            <defs>
              <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Animated ring 2 (reverse) */}
          <svg className="absolute inset-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] loading-ring-reverse" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#93c5fd"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="60 223"
            />
          </svg>

          {/* Center logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-lg shadow-blue-100/50 flex items-center justify-center p-1">
              <Image
                src="/logo.webp"
                alt="Lumora Ventures"
                width={48}
                height={48}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Brand text and progress */}
        <div className="mt-8 text-center">
          <p className="text-lg font-semibold text-gradient">
            Lumora Ventures
          </p>

          {/* Progress bar */}
          <div className="mt-4 w-48 h-1 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transition-all duration-200 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <Suspense fallback={<LoadingScreen />}>
        <LoadingProviderContent setIsLoading={setIsLoading}>
          {children}
        </LoadingProviderContent>
      </Suspense>

      {isLoading && <LoadingScreen />}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}
