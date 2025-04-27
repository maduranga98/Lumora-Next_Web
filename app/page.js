import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import AboutUs from "@/components/about/AboutUs";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Your Company - Innovative Solutions for Modern Businesses",
  description:
    "We help businesses transform their digital presence with cutting-edge technology and beautiful design.",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Features Section */}
      <section id="services">
        <Features />
      </section>

      {/* About Us Section */}
      <section id="about">
        <div
          style={{
            background: "linear-gradient(to right, #1e40af, #3b82f6)",
            padding: "80px 0",
            textAlign: "center",
            color: "white",
          }}
        >
          <div className="container">
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              About Us
            </h2>
            <p
              style={{
                fontSize: "18px",
                maxWidth: "600px",
                margin: "0 auto",
                opacity: 0.9,
              }}
            >
              We&apos;re passionate about creating innovative solutions that
              help businesses succeed
            </p>
          </div>
        </div>
        <AboutUs />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div
          style={{
            background: "linear-gradient(to right, #1e40af, #3b82f6)",
            padding: "80px 0",
            textAlign: "center",
            color: "white",
          }}
        >
          <div className="container">
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              Contact Us
            </h2>
            <p
              style={{
                fontSize: "18px",
                maxWidth: "600px",
                margin: "0 auto",
                opacity: 0.9,
              }}
            >
              We\&apos;d love to hear from you. Reach out to us for any
              questions or project inquiries.
            </p>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
