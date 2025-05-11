// components/ScrollToButton.jsx
"use client";

import { useCallback } from "react";

export default function ScrollToButton({
  sectionId,
  children,
  className = "",
}) {
  const scrollToSection = useCallback(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [sectionId]);

  return (
    <button
      onClick={scrollToSection}
      className={`transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
}
