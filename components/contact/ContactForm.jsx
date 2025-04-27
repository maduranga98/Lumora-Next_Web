"use client";

import { useState } from "react";
import { Mail, Phone, Send, MapPin } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: "Please fill in all required fields.",
      });
      return;
    }

    setFormStatus({
      ...formStatus,
      isSubmitting: true,
      isError: false,
      message: "",
    });

    // Simulate form submission
    try {
      // Replace this with your actual form submission logic
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Success
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: "Thank you! Your message has been sent successfully.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      // Error
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: "Something went wrong. Please try again later.",
      });
    }
  };

  const contactInfo = [
    {
      icon: <Phone size={20} style={{ color: "white" }} />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      gradient: "linear-gradient(135deg, #3B82F6, #60A5FA)",
    },
    {
      icon: <Mail size={20} style={{ color: "white" }} />,
      title: "Email",
      details: "info@lumoraventures.com",
      gradient: "linear-gradient(135deg, #8B5CF6, #C084FC)",
    },
    {
      icon: <MapPin size={20} style={{ color: "white" }} />,
      title: "Address",
      details: "123 Business Street, City, Country",
      gradient: "linear-gradient(135deg, #EC4899, #F472B6)",
    },
  ];

  return (
    <section
      style={{
        padding: "100px 0",
        background: "linear-gradient(to bottom, #1e1b4b, #0f172a)",
        color: "white",
      }}
      id="contact"
    >
      <div className="container">
        {/* Section header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto 60px",
          }}
        >
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              marginBottom: "16px",
              background: "linear-gradient(to right, #3B82F6, #60A5FA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Get In Touch
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255, 255, 255, 0.8)",
              lineHeight: 1.6,
            }}
          >
            Have questions or need assistance? We're here to help! Reach out to
            us and let's discuss how we can transform your business together.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
          }}
        >
          {/* Contact Information */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "20px",
            }}
          >
            {contactInfo.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "16px",
                  padding: "24px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateX(10px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div
                  style={{
                    padding: "16px",
                    background: item.gradient,
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      marginBottom: "4px",
                      color: "white",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "16px",
              padding: "40px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "white",
                marginBottom: "30px",
                textAlign: "center",
              }}
            >
              Send Us a Message
            </h2>

            {formStatus.isSubmitted ? (
              <div
                style={{
                  background: "rgba(16, 185, 129, 0.1)",
                  color: "#10B981",
                  padding: "20px",
                  borderRadius: "12px",
                  marginBottom: "20px",
                  border: "1px solid rgba(16, 185, 129, 0.2)",
                  textAlign: "center",
                }}
              >
                <p style={{ fontWeight: "500" }}>{formStatus.message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {formStatus.isError && (
                  <div
                    style={{
                      background: "rgba(239, 68, 68, 0.1)",
                      color: "#EF4444",
                      padding: "20px",
                      borderRadius: "12px",
                      marginBottom: "24px",
                      border: "1px solid rgba(239, 68, 68, 0.2)",
                    }}
                  >
                    <p style={{ fontWeight: "500" }}>{formStatus.message}</p>
                  </div>
                )}

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                    marginBottom: "20px",
                  }}
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      style={{
                        display: "block",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "rgba(255, 255, 255, 0.8)",
                        marginBottom: "8px",
                      }}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "14px",
                        borderRadius: "8px",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        color: "white",
                        fontSize: "16px",
                        transition: "border-color 0.3s ease",
                        outline: "none",
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      style={{
                        display: "block",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "rgba(255, 255, 255, 0.8)",
                        marginBottom: "8px",
                      }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "14px",
                        borderRadius: "8px",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        color: "white",
                        fontSize: "16px",
                        transition: "border-color 0.3s ease",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                    marginBottom: "20px",
                  }}
                >
                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      style={{
                        display: "block",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "rgba(255, 255, 255, 0.8)",
                        marginBottom: "8px",
                      }}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "14px",
                        borderRadius: "8px",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        color: "white",
                        fontSize: "16px",
                        transition: "border-color 0.3s ease",
                        outline: "none",
                      }}
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      style={{
                        display: "block",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "rgba(255, 255, 255, 0.8)",
                        marginBottom: "8px",
                      }}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "14px",
                        borderRadius: "8px",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        color: "white",
                        fontSize: "16px",
                        transition: "border-color 0.3s ease",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: "30px" }}>
                  <label
                    htmlFor="message"
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "rgba(255, 255, 255, 0.8)",
                      marginBottom: "8px",
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{
                      width: "100%",
                      padding: "14px",
                      borderRadius: "8px",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      color: "white",
                      fontSize: "16px",
                      transition: "border-color 0.3s ease",
                      outline: "none",
                      resize: "vertical",
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    background: "linear-gradient(to right, #3B82F6, #60A5FA)",
                    color: "white",
                    border: "none",
                    borderRadius: "30px",
                    padding: "16px",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: formStatus.isSubmitting ? "not-allowed" : "pointer",
                    opacity: formStatus.isSubmitting ? 0.7 : 1,
                    transition: "all 0.3s ease",
                    boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    if (!formStatus.isSubmitting) {
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow =
                        "0 15px 25px rgba(59, 130, 246, 0.4)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!formStatus.isSubmitting) {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 20px rgba(59, 130, 246, 0.3)";
                    }
                  }}
                >
                  {formStatus.isSubmitting ? "Sending..." : "Send Message"}
                  {!formStatus.isSubmitting && <Send size={18} />}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Social Links & Business Hours (Optional) */}
        <div
          style={{
            marginTop: "60px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "16px",
              color: "rgba(255, 255, 255, 0.6)",
              marginBottom: "20px",
            }}
          >
            Find us on social media
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              marginBottom: "40px",
            }}
          >
            {["Facebook", "Twitter", "Instagram", "LinkedIn"].map(
              (platform, index) => (
                <a
                  key={index}
                  href="#"
                  style={{
                    display: "inline-block",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "14px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(to right, #3B82F6, #60A5FA)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {platform.charAt(0)}
                </a>
              )
            )}
          </div>

          <p
            style={{
              fontSize: "14px",
              color: "rgba(255, 255, 255, 0.5)",
            }}
          >
            © {new Date().getFullYear()} Lumora Ventures. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
