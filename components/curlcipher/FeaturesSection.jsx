import React from "react";
import Image from "next/image";
import {
  Sparkles,
  Gem,
  Crown,
  Shield,
  Star,
  Diamond,
  Award,
  Heart,
} from "lucide-react";

const FeaturesSection = () => {
  // Luxury icons for each feature
  const iconMapping = {
    business: <Diamond className="w-8 h-8 text-gold" />,
    revenue: <Star className="w-8 h-8 text-gold" />,
    booking: <Crown className="w-8 h-8 text-gold" />,
    inventory: <Gem className="w-8 h-8 text-gold" />,
    customization: <Award className="w-8 h-8 text-gold" />,
    discovery: <Sparkles className="w-8 h-8 text-rose-200" />,
    payment: <Shield className="w-8 h-8 text-rose-200" />,
    personal: <Heart className="w-8 h-8 text-rose-200" />,
    beauty: <Star className="w-8 h-8 text-rose-200" />,
  };

  const audiences = [
    {
      title: "For Salon Owners & Professionals",
      appLogo: "/images/curl-cipher-manager-logo.png", // Manager app logo
      logoText: "Curl Cipher Manager",
      colorTheme: "from-amber-400 via-yellow-500 to-orange-500",
      cardGradient: "from-black via-gray-900 to-black",
      textGradient: "from-amber-300 to-yellow-200",
      borderColor: "border-amber-500/30",
      accentColor: "text-amber-300",
      bgGlow: "bg-amber-500/10",
      features: [
        {
          title: "Elite Business Management",
          description:
            "Experience the pinnacle of salon management with our premium all-in-one platform designed for discerning professionals.",
          iconKey: "business",
          imagePosition: "right",
        },
        {
          title: "Elevate Revenue & Efficiency",
          description: [
            "Streamline exclusive operations with automated luxury workflows",
            "Oversee prestigious locations with sophisticated controls",
            "Real-time tracking of premium services and high-end sales",
            "Advanced analytics for premium clientele insights",
          ],
          iconKey: "revenue",
          imagePosition: "left",
        },
        {
          title: "Premium Client Experience",
          description: [
            "Curated appointment system for VIP clientele",
            "Exclusive booking notifications and reminders",
            "Sophisticated loyalty programs for valued patrons",
            "Luxury retail integration for premium products",
          ],
          iconKey: "booking",
          imagePosition: "right",
        },
        {
          title: "Master Control Suite",
          description: [
            "Premium inventory management for luxury products",
            "Executive-level financial reporting and insights",
            "Prestigious staff management with incentive programs",
          ],
          iconKey: "inventory",
          imagePosition: "left",
        },
        {
          title: "Bespoke Solutions",
          description: [
            "Tailored for boutique salons to luxury spa estates",
            "Customized pricing for premium service offerings",
            "Secure cloud infrastructure with white-glove support",
          ],
          iconKey: "customization",
          imagePosition: "right",
        },
      ],
    },
    {
      title: "For Discerning Clients",
      appLogo: "/images/curl-cipher-app-logo.png", // Customer app logo
      logoText: "Curl Cipher",
      colorTheme: "from-rose-400 via-pink-500 to-purple-600",
      cardGradient: "from-black via-gray-900 to-black",
      textGradient: "from-rose-300 to-pink-200",
      borderColor: "border-rose-500/30",
      accentColor: "text-rose-300",
      bgGlow: "bg-rose-500/10",
      features: [
        {
          title: "Discover Luxury Experiences",
          description: [
            "Access curated selection of premium salons",
            "Filter by exclusive boutiques and luxury establishments",
            "Book coveted appointments with elite stylists",
          ],
          iconKey: "discovery",
          imagePosition: "left",
        },
        {
          title: "Elegant Transactions",
          description: [
            "Transparent pricing for premium services",
            "Secure payment through prestigious channels",
            "Receive elegant digital invoices and receipts",
          ],
          iconKey: "payment",
          imagePosition: "right",
        },
        {
          title: "Refined Personal Service",
          description: [
            "Curate your preferred stylists and salons",
            "Seamless rescheduling with devoted service",
            "Receive exclusive member-only privileges",
          ],
          iconKey: "personal",
          imagePosition: "left",
        },
        {
          title: "Luxury at Your Doorstep",
          description: [
            "Premium beauty products and salon exclusives",
            "Priority appointment reminders for VIP members",
            "Prestige points and elite salon benefits",
          ],
          iconKey: "beauty",
          imagePosition: "right",
        },
      ],
    },
  ];

  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at top left, #1a0033 0%, #000000 50%, #330a0a 100%)",
      }}
    >
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-amber-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-rose-500 rounded-full blur-[120px]"></div>
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
          <div key={auIdx} className={`mb-40 ${auIdx === 1 ? "mt-20" : ""}`}>
            {/* Luxury Header with Logo */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-32">
              {/* App Logo */}
              <div className="w-24 h-24 relative rounded-full border-2 border-gold p-1 shadow-2xl">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-black to-gray-900"></div>
                <div className="relative z-10 w-full h-full rounded-full flex items-center justify-center">
                  <Image
                    src={audience.appLogo}
                    alt={audience.logoText}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <div>
                <h2
                  className={`text-4xl sm:text-5xl lg:text-6xl font-serif font-light mb-2 bg-clip-text text-transparent bg-gradient-to-r ${audience.textGradient}`}
                >
                  {audience.title}
                </h2>
                <p
                  className={`text-sm uppercase tracking-wider ${audience.accentColor}`}
                >
                  {audience.logoText}
                </p>
              </div>
            </div>

            {/* Premium Features */}
            <div className="space-y-32">
              {audience.features.map((feature, featureIdx) => (
                <div
                  key={featureIdx}
                  className={`relative ${
                    feature.imagePosition === "right" ? "md:pr-16" : "md:pl-16"
                  }`}
                >
                  {/* Decorative Lines */}
                  <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden md:block"></div>
                  <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden md:block"></div>

                  <div
                    className={`flex flex-col ${
                      feature.imagePosition === "right"
                        ? "lg:flex-row"
                        : "lg:flex-row-reverse"
                    } gap-16 items-center`}
                  >
                    {/* Content Card */}
                    <div className="flex-1">
                      <div
                        className={`p-12 rounded-xl border ${audience.borderColor} bg-gradient-to-br ${audience.cardGradient} shadow-2xl backdrop-blur-sm`}
                      >
                        {/* Icon Header */}
                        <div className="flex items-center gap-6 mb-8">
                          <div
                            className={`p-4 rounded-lg ${audience.bgGlow} backdrop-blur-sm`}
                          >
                            {iconMapping[feature.iconKey]}
                          </div>
                          <h3 className="text-3xl font-serif text-white">
                            {feature.title}
                          </h3>
                        </div>

                        {/* Description */}
                        {Array.isArray(feature.description) ? (
                          <ul className="space-y-6">
                            {feature.description.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex gap-4 text-gray-300 items-start"
                              >
                                <span className="w-2 h-2 mt-2 rounded-full bg-gold"></span>
                                <span className="flex-1 text-lg">{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-300 text-xl leading-relaxed">
                            {feature.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Image/Illustration */}
                    <div className="flex-1">
                      <div
                        className={`relative rounded-2xl overflow-hidden shadow-2xl border-4 ${audience.borderColor}`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900"></div>
                        <div className="relative p-12 flex items-center justify-center min-h-[400px]">
                          <div className="text-center">
                            <div className="w-32 h-32 rounded-full mx-auto mb-8 border border-gold/30 flex items-center justify-center bg-gradient-to-br from-black to-gray-900">
                              {iconMapping[feature.iconKey]}
                            </div>
                            <p className="text-gray-500 text-sm">
                              Premium Feature Showcase
                            </p>
                          </div>
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
        <div className="text-center pt-20">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button className="group relative px-12 py-5 text-black bg-gradient-to-r from-amber-500 to-yellow-400 font-medium rounded-lg overflow-hidden shadow-2xl hover:shadow-amber-500/25 transition-all duration-500">
              <span className="relative z-10">Experience Excellence</span>
              <div className="absolute inset-0 bg-black transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              <span className="absolute inset-0 flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Experience Excellence
              </span>
            </button>
            <button className="group relative px-12 py-5 text-black bg-gradient-to-r from-rose-500 to-pink-400 font-medium rounded-lg overflow-hidden shadow-2xl hover:shadow-rose-500/25 transition-all duration-500">
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
