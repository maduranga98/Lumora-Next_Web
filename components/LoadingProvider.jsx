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

    // Set short timeout to simulate navigation delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname, searchParams, setIsLoading]);

  return children;
}

// Styled Loading Component with circular rotating animation around a circular logo
function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/95 backdrop-blur-md transition-all duration-300">
      <div className="relative flex flex-col items-center">
        {/* Outer rotating circle */}
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          {/* Multiple rotating circles for a more dynamic effect */}
          <div className="absolute inset-0 w-full h-full rounded-full border-4 border-blue-600/10 border-t-blue-600 animate-spin"></div>
          <div
            className="absolute inset-0 w-full h-full rounded-full border-4 border-blue-400/10 border-r-blue-400 animate-spin"
            style={{ animationDuration: "2s", animationDirection: "reverse" }}
          ></div>

          {/* Additional dot indicators rotating around the circle */}
          <div
            className="absolute inset-0 w-full h-full animate-spin"
            style={{ animationDuration: "3s" }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-600 rounded-full"></div>
          </div>
          <div
            className="absolute inset-0 w-full h-full animate-spin"
            style={{ animationDuration: "3s", animationDelay: "0.75s" }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full"></div>
          </div>
          <div
            className="absolute inset-0 w-full h-full animate-spin"
            style={{ animationDuration: "3s", animationDelay: "1.5s" }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full"></div>
          </div>
          <div
            className="absolute inset-0 w-full h-full animate-spin"
            style={{ animationDuration: "3s", animationDelay: "2.25s" }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-300 rounded-full"></div>
          </div>

          {/* Center circular logo with gentle pulse */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-md flex items-center justify-center animate-pulse p-1">
              <Image
                src="/favicon.ico"
                alt="Lumora Ventures"
                width={80}
                height={80}
                className="object-contain rounded-full"
                priority
              />
            </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="mt-8 text-center">
          <p className="text-blue-600 font-medium text-lg md:text-xl">
            Loading
          </p>
          <div className="flex justify-center mt-1 space-x-1">
            <div
              className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white/50 -z-10"></div>
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
