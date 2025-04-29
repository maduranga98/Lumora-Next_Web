import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import AboutUs from "@/components/about/AboutUs";
import ContactForm from "@/components/contact/ContactForm";
import ServiceCards from "@/components/home/ServiceCards";

export const metadata = {
  title: "Lumora Ventures - Innovative Solutions for Modern Businesses",
  description:
    "We help businesses transform their digital presence with cutting-edge technology and beautiful design.",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home">
        <Hero />
        <ServiceCards />
      </section>

      {/* About Us Section */}
      <section id="about" className="scroll-mt-20">
        <AboutUs />
      </section>

      {/* Features Section */}
      <section id="services" className="scroll-mt-20">
        <Features />
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20">
        <ContactForm />
      </section>
    </>
  );
}
