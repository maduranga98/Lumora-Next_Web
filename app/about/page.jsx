import AboutUs from "@/components/about/AboutUs";

export const metadata = {
  title: "About Us | Your Company",
  description:
    "Learn about our company, our values, and the team behind our innovative solutions.",
};

export default function About() {
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
            About Us
          </h1>
          <p
            style={{
              fontSize: "18px",
              maxWidth: "600px",
              margin: "0 auto",
              opacity: 0.9,
            }}
          >
            We're passionate about creating innovative solutions that help
            businesses succeed
          </p>
        </div>
      </div>
      <AboutUs />
    </>
  );
}
