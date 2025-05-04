// components/pages/gmb.jsx
"use client";

import HeroSectionGMB from "../gmb/Hero";

export default function GMBPage() {
  return (
    <main>
      <HeroSectionGMB />

      {/* Placeholder sections for future implementation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              About GMB Section
            </h2>
            <p className="text-gray-600">Coming next...</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why It Matters Section
            </h2>
            <p className="text-gray-600">Coming next...</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us Section
            </h2>
            <p className="text-gray-600">Coming next...</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Services Section
            </h2>
            <p className="text-gray-600">Coming next...</p>
          </div>
        </div>
      </section>
    </main>
  );
}
