"use client";

import { usePageView } from "@/app/lib/usePageView";

/**
 * Client component to track page views with Facebook Conversions API
 */
export default function PageViewTracker() {
  usePageView({
    contentName: "Lumora Ventures Homepage",
    contentCategory: "Homepage",
    contentIds: ["homepage"],
    value: 0,
  });

  // This component doesn't render anything visible
  return null;
}
