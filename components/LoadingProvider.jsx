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

// Styled Loading Component with ICO file
function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/95 backdrop-blur-md transition-all duration-300">
      <div className="relative flex flex-col items-center">
        {/* Logo with pulsing animation */}
        <div className="relative w-24 h-24 md:w-32 md:h-32 animate-pulse">
          <Image
            src="/favicon.ico" // Using the .ico file
            alt="Lumora Ventures"
            width={128}
            height={128}
            className="object-contain"
            priority
            // For ICO files, we should use width/height props instead of fill
          />
        </div>

        {/* Circular loading spinner around the logo */}
        <div className="absolute inset-0 w-full h-full -m-2 md:-m-3">
          <div className="w-[calc(100%+16px)] h-[calc(100%+16px)] md:w-[calc(100%+24px)] md:h-[calc(100%+24px)] rounded-full border-4 border-blue-600/20 border-t-blue-600 animate-spin"></div>
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

      {/* Optional subtle gradient background */}
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
