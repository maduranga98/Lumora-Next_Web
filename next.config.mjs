// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  output: "export",
  distDir: "out",
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      // Add any other image domains you use
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    // Optimize loading of fonts
    optimizeFonts: true,
    // Enable scroll restoration
    scrollRestoration: true,
  },
  // Cache static assets for a year
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
      {
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/favicon.ico",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  // Redirects for common URL patterns and old pages
  redirects: async () => {
    return [
      {
        source: "/services",
        destination: "/#solutions",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/#about",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: true,
      },
      // Add any other redirects you need
    ];
  },
};

// Use ES Module export syntax for .mjs files
export default nextConfig;
