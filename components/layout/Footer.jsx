"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Web Development", href: "/services#web" },
        { label: "Mobile Apps", href: "/services#mobile" },
        { label: "UI/UX Design", href: "/services#design" },
        { label: "Consulting", href: "/services#consulting" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: <Twitter size={20} />,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <Instagram size={20} />,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
  ];

  const contactInfo = [
    { icon: <Mail size={16} />, text: "info@yourcompany.com" },
    { icon: <Phone size={16} />, text: "+1 (555) 123-4567" },
    { icon: <MapPin size={16} />, text: "123 Business Street, City, Country" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <div className="relative h-8 w-32">
                <Image
                  src="/logo.png"
                  alt="Company Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Providing cutting-edge solutions for businesses since 2010. We
              bring your ideas to life with modern technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">{item.icon}</span>
                  <span className="text-gray-400">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Your Company Name. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
