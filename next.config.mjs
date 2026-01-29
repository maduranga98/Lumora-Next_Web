// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  output: "export",
  distDir: "out",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,

  images: {
    // For static export, images must be unoptimized
    unoptimized: true,
    domains: [
      "firebasestorage.googleapis.com",
      "www.lumoraventures.com",
      "lumoraventures.com",
      // Add any other image domains you use
    ],
  },

  experimental: {
    // Remove optimizeFonts - it's deprecated and handled automatically
    // Remove scrollRestoration - not needed in experimental
    // Turbo moved to turbopack config (stable now)
  },

  // Turbopack configuration (moved from experimental.turbo)
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  // Webpack configuration for better optimization
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // Optimize bundle - removed __dirname reference for ES modules
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": config.context || process.cwd(),
      };
    }

    return config;
  },

  // Compiler options for production optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN:
      process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    NEXT_PUBLIC_FIREBASE_PROJECT_ID:
      process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET:
      process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID:
      process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    NEXT_PUBLIC_FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
    NEXT_PUBLIC_FB_PIXEL_ID: process.env.NEXT_PUBLIC_FB_PIXEL_ID,
    NEXT_PUBLIC_FB_ACCESS_TOKEN: process.env.NEXT_PUBLIC_FB_ACCESS_TOKEN,
  },

  // NOTE: headers() and redirects() are commented out because they don't work with output: "export"
  // If you need these features, you have two options:
  // 1. Remove output: "export" and deploy to a server (Vercel, etc.)
  // 2. Handle redirects at the hosting level (Netlify, Apache, etc.)

  /*
  // These don't work with static export (output: "export")
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
    ];
  },
  */
};

// Use ES Module export syntax for .mjs files
export default nextConfig;
