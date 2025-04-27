"use client";

const AutomationCTASection = () => {
  return (
    <section className="py-16 border-t border-blue-900/30" id="contact">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">
              Let's Elevate Your Business Today!
            </h2>
            <p className="text-blue-100/80 mb-6">
              Contact us to start automating your operations and digital
              transformation.
            </p>

            <div className="bg-[#0a192f] border border-blue-900/50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">
                Our Automation Process
              </h3>
              <ol className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-900/50 border border-blue-400/30 flex items-center justify-center mr-4 text-blue-400 font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-400">
                      Consultation & Assessment
                    </h4>
                    <p className="text-blue-100/70 text-sm">
                      We evaluate your current systems and identify automation
                      opportunities
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-900/50 border border-blue-400/30 flex items-center justify-center mr-4 text-blue-400 font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-400">
                      Solution Design
                    </h4>
                    <p className="text-blue-100/70 text-sm">
                      Our team creates a tailored automation strategy for your
                      business
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-900/50 border border-blue-400/30 flex items-center justify-center mr-4 text-blue-400 font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-400">
                      Implementation
                    </h4>
                    <p className="text-blue-100/70 text-sm">
                      Expert deployment of automation systems with minimal
                      disruption
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-900/50 border border-blue-400/30 flex items-center justify-center mr-4 text-blue-400 font-semibold">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-400">
                      Training & Support
                    </h4>
                    <p className="text-blue-100/70 text-sm">
                      Ongoing assistance to ensure your team maximizes the
                      benefits
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div className="md:w-2/5">
            <div className="bg-[#0a192f] border border-blue-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 bg-[#071527] border border-blue-900/50 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 bg-[#071527] border border-blue-900/50 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full p-3 bg-[#071527] border border-blue-900/50 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your automation needs"
                    rows="3"
                    className="w-full p-3 bg-[#071527] border border-blue-900/50 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationCTASection;
