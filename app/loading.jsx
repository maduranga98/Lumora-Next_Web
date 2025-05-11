// app/loading.jsx
"use client";

import { useState, useEffect } from "react";

export default function Loading() {
  const [show, setShow] = useState(false);

  // Only show loading spinner after a small delay to avoid flashes
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-blue-600 font-medium">Loading...</p>
      </div>
    </div>
  );
}
