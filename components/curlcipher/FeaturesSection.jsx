import React from "react";
import Image from "next/image";

const FeaturesSection = () => {
  // Image mapping with correct paths
  const imageMapping = {
    business: "/cc-images/image1.webp",
    revenue: "/cc-images/image2.webp",
    booking: "/cc-images/image3.webp",
    inventory: "/cc-images/image4.webp",
    customization: "/cc-images/image5.webp",
    discovery: "/cc-images/image6.webp",
    payment: "/cc-images/image7.webp",
    personal: "/cc-images/image8.webp",
    beauty: "/cc-images/image9.webp",
  };

  const audiences = [
    {
      title: "For Salon Owners & Professionals",
      appLogo: "/manage.png", // Manager app logo
      logoText: "Curl Cipher Manager",
      colorTheme: "from-amber-400 via-yellow-500 to-orange-500",
      cardGradient: "from-black via-gray-900 to-black",
      textGradient: "from-amber-300 to-yellow-200",
      borderColor: "border-amber-500/30",
      accentColor: "text-amber-300",
      bgGlow: "bg-amber-500/10",
      features: [
        {
          title: "All-in-One Business Management",
          description:
            "Say goodbye to multiple apps and spreadsheets! Curl Cipher combines appointment scheduling, staff management, payroll, inventory tracking, and financial reports in a single platform.",
          imageKey: "business",
          imagePosition: "right",
        },
        {
          title: "Boost Salon Efficiency & Revenue",
          description: [
            "Automate daily operations and reduce manual workload",
            "Manage multiple branches and staff with ease",
            "Track commissions, sales, and expenses in real time",
            "Gain insights through detailed analytics and financial reports",
          ],
          imageKey: "revenue",
          imagePosition: "left",
        },
        {
          title: "Smarter Booking & Customer Engagement",
          description: [
            "Enable real-time appointment scheduling with stylist preferences",
            "Reduce no-shows with automated reminders and confirmations",
            "Create and promote exclusive deals and loyalty programs",
            "Increase product sales with an integrated online store",
          ],
          imageKey: "booking",
          imagePosition: "right",
        },
        {
          title: "Inventory & Financial Control",
          description: [
            "Monitor stock levels and automate inventory management",
            "Generate commission, tax, and cash flow reports with a single click",
            "Track payroll, staff incentives, and salon earnings in one place",
          ],
          imageKey: "inventory",
          imagePosition: "left",
        },
        {
          title: "Customization & Scalability",
          description: [
            "Suitable for small salons, high-end boutiques, and large franchises",
            "Flexible pricing models based on gender, staff levels, and service type",
            "Cloud-based for easy access across devices, with data security ensured",
          ],
          imageKey: "customization",
          imagePosition: "right",
        },
      ],
    },
    {
      title: "For Customers",
      appLogo: "/customer.png", // Customer app logo
      logoText: "Curl Cipher",
      colorTheme: "from-rose-400 via-pink-500 to-purple-600",
      cardGradient: "from-black via-gray-900 to-black",
      textGradient: "from-rose-300 to-pink-200",
      borderColor: "border-rose-500/30",
      accentColor: "text-rose-300",
      bgGlow: "bg-rose-500/10",
      features: [
        {
          title: "Effortless Salon Discovery & Booking",
          description: [
            "Find top-rated salons near you with detailed service listings",
            "Filter by luxury, budget-friendly, or specialty salons",
            "Book your favorite stylists and choose available time slots instantly",
          ],
          imageKey: "discovery",
          imagePosition: "left",
        },
        {
          title: "Transparent Pricing & Secure Payments",
          description: [
            "View upfront pricing for services before booking",
            "Pay securely via multiple payment options or at the salon",
            "Get instant confirmation and digital invoices for your bookings",
          ],
          imageKey: "payment",
          imagePosition: "right",
        },
        {
          title: "Personalized Experience & Convenience",
          description: [
            "Save favorite salons & stylists for quick future bookings",
            "Reschedule or cancel appointments with zero hassle",
            "Get personalized offers & exclusive discounts",
          ],
          imageKey: "personal",
          imagePosition: "left",
        },
        {
          title: "Beauty at Your Fingertips",
          description: [
            "Order salon-recommended beauty products for home delivery",
            "Receive appointment reminders & exclusive promotions",
            "Earn loyalty points and unlock premium salon benefits",
          ],
          imageKey: "beauty",
          imagePosition: "right",
        },
      ],
    },
  ];

  return (
    <section
      className="relative py-16 md:py-20 lg:py-24 overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at top left, #1a0033 0%, #000000 50%, #330a0a 100%)",
      }}
    >
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-72 md:w-96 lg:w-[600px] h-72 md:h-96 lg:h-[600px] bg-amber-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-0 w-72 md:w-96 lg:w-[600px] h-72 md:h-96 lg:h-[600px] bg-rose-500 rounded-full blur-[120px]"></div>
      </div>

      {/* Elegant Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 3px 3px, gold 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        ></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {audiences.map((audience, auIdx) => (
          <div
            key={auIdx}
            className={`mb-20 lg:mb-24 ${auIdx === 1 ? "mt-16 lg:mt-20" : ""}`}
          >
            {/* Luxury Header with Logo */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-8 mb-16 lg:mb-20">
              {/* App Logo */}
              <div className="w-16 h-16 md:w-20 md:h-20 relative rounded-full border-2 border-gold p-1 shadow-xl">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-black to-gray-900"></div>
                <div className="relative z-10 w-full h-full rounded-full flex items-center justify-center">
                  <Image
                    src={audience.appLogo}
                    alt={audience.logoText}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <div>
                <h2
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-serif font-light mb-1 md:mb-2 bg-clip-text text-transparent bg-gradient-to-r ${audience.textGradient}`}
                >
                  {audience.title}
                </h2>
                <p
                  className={`text-xs md:text-sm uppercase tracking-wider ${audience.accentColor}`}
                >
                  {audience.logoText}
                </p>
              </div>
            </div>

            {/* Premium Features */}
            <div className="space-y-12 md:space-y-16 lg:space-y-20">
              {audience.features.map((feature, featureIdx) => (
                <div
                  key={featureIdx}
                  className={`relative ${
                    feature.imagePosition === "right"
                      ? "md:pr-8 lg:pr-12"
                      : "md:pl-8 lg:pl-12"
                  }`}
                >
                  {/* Decorative Lines */}
                  <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden md:block"></div>
                  <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden md:block"></div>

                  <div
                    className={`flex flex-col ${
                      feature.imagePosition === "right"
                        ? "lg:flex-row"
                        : "lg:flex-row-reverse"
                    } gap-6 md:gap-8 lg:gap-10 items-center`}
                  >
                    {/* Content Card */}
                    <div className="w-full lg:w-7/12">
                      <div
                        className={`p-5 md:p-6 lg:p-8 rounded-lg border ${audience.borderColor} bg-gradient-to-br ${audience.cardGradient} shadow-md backdrop-blur-sm`}
                      >
                        {/* Feature Title */}
                        <h3 className="text-xl md:text-2xl lg:text-2xl font-serif text-white mb-4 md:mb-6">
                          {feature.title}
                        </h3>

                        {/* Description */}
                        {Array.isArray(feature.description) ? (
                          <ul className="space-y-3 md:space-y-4">
                            {feature.description.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex gap-3 text-gray-300 items-start"
                              >
                                <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-gold"></span>
                                <span className="flex-1 text-sm md:text-base">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
                            {feature.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Feature Image */}
                    <div className="w-full lg:w-5/12">
                      <div
                        className={`relative rounded-lg overflow-hidden shadow-md border ${audience.borderColor} max-w-xs mx-auto`}
                      >
                        <div className="aspect-[4/3] w-full relative">
                          <Image
                            src={imageMapping[feature.imageKey]}
                            alt={feature.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 25vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Luxury CTA */}
        <div className="text-center pt-10 md:pt-12 lg:pt-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8">
            <button className="group relative px-6 md:px-8 lg:px-10 py-3 md:py-4 text-sm md:text-base text-black bg-gradient-to-r from-amber-500 to-yellow-400 font-medium rounded-lg overflow-hidden shadow-xl hover:shadow-amber-500/25 transition-all duration-500">
              <span className="relative z-10">Experience Excellence</span>
              <div className="absolute inset-0 bg-black transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              <span className="absolute inset-0 flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Experience Excellence
              </span>
            </button>
            <button className="group relative px-6 md:px-8 lg:px-10 py-3 md:py-4 text-sm md:text-base text-black bg-gradient-to-r from-rose-500 to-pink-400 font-medium rounded-lg overflow-hidden shadow-xl hover:shadow-rose-500/25 transition-all duration-500">
              <span className="relative z-10">Reserve Your Studio</span>
              <div className="absolute inset-0 bg-black transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              <span className="absolute inset-0 flex items-center justify-center text-rose-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Reserve Your Studio
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
