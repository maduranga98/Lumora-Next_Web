// components/PrefetchLinks.jsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PrefetchLinks() {
  const router = useRouter();

  useEffect(() => {
    // Prefetch common routes
    router.prefetch("/");
    router.prefetch("/google-my-business");
    router.prefetch("/curl-cipher");
    router.prefetch("/industrial-automation");
  }, [router]);

  return null;
}
