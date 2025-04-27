import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact Us | Your Company",
  description:
    "Get in touch with our team for inquiries, support, or to discuss your project needs.",
};

export default function Contact() {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(to right, #1e40af, #3b82f6)",
          padding: "80px 0",
          textAlign: "center",
          color: "white",
        }}
      >
        <div className="container">
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            Contact Us
          </h1>
          <p
            style={{
              fontSize: "18px",
              maxWidth: "600px",
              margin: "0 auto",
              opacity: 0.9,
            }}
          >
            We'd love to hear from you. Reach out to us for any questions or
            project inquiries.
          </p>
        </div>
      </div>

      <ContactForm />
      <Map />
    </>
  );
}
