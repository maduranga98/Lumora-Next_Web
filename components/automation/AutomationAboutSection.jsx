"use client";

const AutomationAboutSection = () => {
  return (
    <section className="py-16 border-t border-blue-900/30">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/5 mb-10 md:mb-0">
            <div className="bg-[#0a192f] border border-blue-900/50 rounded-lg overflow-hidden">
              <div className="aspect-w-4 aspect-h-5 relative">
                <div className="w-full h-full bg-gradient-to-br from-blue-900/30 to-transparent absolute"></div>
                <img
                  src="/api/placeholder/400/500"
                  alt="Industrial Automation Expert"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="md:w-3/5 md:pl-12">
            <h2 className="text-3xl font-bold mb-6">
              About Our Automation Services
            </h2>
            <p className="text-blue-100/80 mb-4">
              Lumora Ventures provides cutting-edge automation solutions to
              modernize your operations. We combine innovative technologies with
              industry expertise to deliver reliable and scalable solutions.
            </p>
            <p className="text-blue-100/80 mb-6">
              Our team of experienced engineers and developers work closely with
              you to understand your business challenges and design automation
              systems that drive efficiency, reduce costs, and improve quality
              control.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <ul className="space-y-2">
                {[
                  "Increased operational efficiency",
                  "Reduced downtime and maintenance costs",
                  "Enhanced quality control",
                  "Data-driven decision making",
                  "Scalable solutions that grow with your business",
                  "Expert implementation and ongoing support",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-2 w-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-blue-100/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationAboutSection;
