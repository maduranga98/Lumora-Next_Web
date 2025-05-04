// components/sections/ServicesGMB.jsx
"use client";

export default function ServicesGMB() {
  const initialSetup = [
    "Google Business Profile creation",
    "Claiming of pre-existing profile",
    "Profile verification",
    "Profile enhancement and optimization",
    "Photos and logo uploaded",
    "Professional business description",
    "Proper categorization and subcategorization",
    "Links to your website and appointment form",
    "A competitive online presence analysis",
    "GMB Management",
    "Q&A Management",
    "Product & Service Management",
  ];

  const monthlyServices = [
    "Weekly promotional posts",
    "New products or service listings",
    "New Questions and Answers",
    "Review Responses",
    "Image and Video Uploads",
    "Moves, adds, and edits",
    "Profile Monitoring",
    "Competitor Spam Sweep",
    "Geogrid Keyword Ranking Report",
    "Monthly Performance Report",
    "On-demand Reporting Dashboard",
    "GBP Scorecard Updates",
  ];

  const results = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5 7 1 12 1C17 1 21 5 21 10Z"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="10" r="3" stroke="#0F766E" strokeWidth="2" />
        </svg>
      ),
      title: "Increased map visibility",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 3H6C5.46957 3 4.96086 3.21071 4.58579 3.58579C4.21071 3.96086 4 4.46957 4 5V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V5C20 4.46957 19.7893 3.96086 19.4142 3.58579C19.0391 3.21071 18.5304 3 18 3Z"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 9H15"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 13H15"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 17H13"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "More website visits and calls",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#0F766E"
            strokeWidth="2"
          />
          <path
            d="M16 8L12 12L16 16"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 8L12 12L8 16"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Higher conversion rates",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 14C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10C18.8954 10 18 10.8954 18 12C18 13.1046 18.8954 14 20 14Z"
            stroke="#0F766E"
            strokeWidth="2"
          />
          <path
            d="M12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20C10 21.1046 10.8954 22 12 22Z"
            stroke="#0F766E"
            strokeWidth="2"
          />
          <path
            d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
            stroke="#0F766E"
            strokeWidth="2"
          />
          <path
            d="M18 12H14M10 12H6M4 4L12 18M18 12L20 10"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Better qualified leads",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Google Business Profile Management
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            One simple service that handles every aspect of your Google Business
            Profile to maximize your local visibility and attract more
            customers.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24" />

            <div className="relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">
                  All-Inclusive GBP Service
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">$150</span>
                  <span className="text-2xl">/month</span>
                </div>
                <p className="text-lg mb-8">
                  Initial setup and ongoing management in one simple package
                </p>
                <button className="bg-yellow-400 text-teal-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition">
                  Get Started Today
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-4 text-center mt-12">
                <div>
                  <svg
                    className="w-8 h-8 mx-auto mb-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 6V12L16 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 18L18 21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>No setup fees</p>
                </div>
                <div>
                  <svg
                    className="w-8 h-8 mx-auto mb-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  <p>No long-term contracts</p>
                </div>
                <div>
                  <svg
                    className="w-8 h-8 mx-auto mb-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>Cancel anytime</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Initial Setup */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              First, Let's Create & Optimize Your Profile
            </h3>
            <div className="space-y-3">
              {initialSetup.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-teal-600 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Services */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              After That, Each Month You'll Get
            </h3>
            <div className="space-y-3">
              {monthlyServices.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-teal-600 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            The Results You Can Expect
          </h3>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            Our clients typically see significant improvements in their local
            search performance, including:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <div
                key={index}
                className="bg-teal-50 rounded-lg p-6 text-center"
              >
                <div className="mb-4 flex justify-center">{result.icon}</div>
                <p className="font-semibold text-gray-900">{result.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Local Online Presence?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Get started today with our professional Google Business Profile
            management service and start seeing results in as little as 30 days.
          </p>
          <button className="bg-teal-600 text-white px-12 py-5 rounded-lg font-bold text-lg hover:bg-teal-700 transition duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
