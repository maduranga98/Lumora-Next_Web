// components/hero/HeroSectionGMB.jsx
"use client";

export default function HeroSectionGMB() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF7ED] to-[#FED7AA] py-20 lg:py-32">
      {/* Decorative background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Dominate Local Search with
              <span className="text-teal-600 block mt-2">
                Google My Business
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
              Transform your local presence into a customer magnet. Our expert
              GMB management helps you rank higher, attract more customers, and
              grow your business effortlessly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <button className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition">
                Get Started Today
              </button>
              <button className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <GMBIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

// GMB Illustration Component
function GMBIllustration() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full max-w-lg mx-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Map background */}
      <rect x="20" y="30" width="360" height="240" rx="12" fill="#E6F7F7" />

      {/* Location pins */}
      <circle cx="100" cy="120" r="24" fill="#0F766E" opacity="0.1" />
      <circle cx="100" cy="120" r="8" fill="#0F766E" />
      <path d="M100 88 L108 108 L92 108 Z" fill="#0F766E" />

      <circle cx="280" cy="180" r="24" fill="#EA580C" opacity="0.1" />
      <circle cx="280" cy="180" r="8" fill="#EA580C" />
      <path d="M280 148 L288 168 L272 168 Z" fill="#EA580C" />

      <circle cx="200" cy="100" r="24" fill="#EAB308" opacity="0.1" />
      <circle cx="200" cy="100" r="8" fill="#EAB308" />
      <path d="M200 68 L208 88 L192 88 Z" fill="#EAB308" />

      {/* Search bar */}
      <rect x="60" y="60" width="280" height="40" rx="20" fill="white" />
      <circle cx="80" cy="80" r="6" fill="#6B7280" />
      <line x1="85" y1="85" x2="97" y2="97" stroke="#6B7280" strokeWidth="2" />
      <rect x="110" y="75" width="180" height="2" rx="1" fill="#D1D5DB" />

      {/* Phone with GMB interface */}
      <rect x="250" y="120" width="100" height="180" rx="12" fill="#1F2937" />
      <rect x="260" y="130" width="80" height="140" rx="8" fill="white" />
      <rect x="270" y="140" width="60" height="8" rx="4" fill="#10B981" />

      {/* Stars rating */}
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M${270 + i * 12} 155 L${272 + i * 12} 159 L${276 + i * 12} 159 L${
            273 + i * 12
          } 162 L${274 + i * 12} 166 L${270 + i * 12} 163 L${
            266 + i * 12
          } 166 L${267 + i * 12} 162 L${264 + i * 12} 159 L${
            268 + i * 12
          } 159 Z`}
          fill="#EAB308"
        />
      ))}

      {/* Business info cards */}
      <rect x="270" y="175" width="60" height="8" rx="2" fill="#E5E7EB" />
      <rect x="270" y="188" width="40" height="4" rx="2" fill="#D1D5DB" />
      <rect x="270" y="196" width="50" height="4" rx="2" fill="#D1D5DB" />

      {/* Google icon */}
      <circle cx="74" cy="74" r="4" fill="#EA4335" />
      <circle cx="82" cy="74" r="4" fill="#4285F4" />
      <circle cx="74" cy="86" r="4" fill="#FBBC04" />
      <circle cx="82" cy="86" r="4" fill="#34A853" />
    </svg>
  );
}
