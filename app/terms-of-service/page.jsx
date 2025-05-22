"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const TermsOfService = () => {
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    setLastUpdated("January 04, 2025");
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const offsetPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const tableOfContents = [
    { id: "agreement", title: "Agreement to Our Legal Terms" },
    { id: "our-services", title: "Our Services" },
    { id: "intellectual-property", title: "Intellectual Property Rights" },
    { id: "user-representations", title: "User Representations" },
    { id: "user-registration", title: "User Registration" },
    { id: "purchases-payment", title: "Purchases and Payment" },
    { id: "subscriptions", title: "Subscriptions" },
    { id: "software", title: "Software" },
    { id: "prohibited-activities", title: "Prohibited Activities" },
    { id: "user-contributions", title: "User Generated Contributions" },
    { id: "contribution-license", title: "Contribution License" },
    { id: "guidelines-reviews", title: "Guidelines for Reviews" },
    { id: "social-media", title: "Social Media" },
    { id: "third-party-websites", title: "Third-Party Websites and Content" },
    { id: "advertisers", title: "Advertisers" },
    { id: "services-management", title: "Services Management" },
    { id: "privacy-policy", title: "Privacy Policy" },
    { id: "copyright-infringements", title: "Copyright Infringements" },
    { id: "term-termination", title: "Term and Termination" },
    {
      id: "modifications-interruptions",
      title: "Modifications and Interruptions",
    },
    { id: "governing-law", title: "Governing Law" },
    { id: "dispute-resolution", title: "Dispute Resolution" },
    { id: "corrections", title: "Corrections" },
    { id: "disclaimer", title: "Disclaimer" },
    { id: "limitations-liability", title: "Limitations of Liability" },
    { id: "indemnification", title: "Indemnification" },
    { id: "user-data", title: "User Data" },
    { id: "electronic-communications", title: "Electronic Communications" },
    { id: "california-users", title: "California Users and Residents" },
    { id: "miscellaneous", title: "Miscellaneous" },
    { id: "contact", title: "Contact Us" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-montserrat text-4xl lg:text-5xl font-bold mb-4">
            Terms and Conditions
          </h1>
          <p className="font-inter text-xl text-gray-300 mb-6">
            These Legal Terms constitute a legally binding agreement between you
            and LUMORA VENTURES PVT LTD concerning your access to and use of our
            Services.
          </p>
          <p className="font-inter text-gray-400">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Table of Contents - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="font-montserrat text-lg font-semibold text-gray-900 mb-4">
                Table of Contents
              </h2>
              <nav className="space-y-2 max-h-96 overflow-y-auto">
                {tableOfContents.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left font-inter text-sm text-gray-600 hover:text-blue-600 transition-colors py-1 focus:outline-none focus:text-blue-600"
                  >
                    {index + 1}. {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="prose prose-lg max-w-none">
              {/* Agreement to Legal Terms */}
              <section id="agreement" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  Agreement to Our Legal Terms
                </h2>
                <p className="font-inter text-gray-700 mb-4">
                  We are <strong>LUMORA VENTURES PVT LTD</strong> ("Company,"
                  "we," "us," "our"), a company registered in England at Office
                  4157, 58 Peregrine Road, Hainault, Ilford, Essex IG6 3SZ.
                </p>
                <p className="font-inter text-gray-700 mb-4">
                  We operate the website{" "}
                  <a
                    href="https://www.lumoraventures.com/"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    https://www.lumoraventures.com/
                  </a>{" "}
                  (the "Site"), as well as any other related products and
                  services that refer or link to these legal terms (the "Legal
                  Terms") (collectively, the "Services").
                </p>
                <p className="font-inter text-gray-700 mb-4">
                  You can contact us by email at{" "}
                  <a
                    href="mailto:info@lumoraventures.com"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    info@lumoraventures.com
                  </a>{" "}
                  or by mail to Office 4157, 58 Peregrine Road, Hainault,
                  Ilford, Essex IG6 3SZ, England.
                </p>
                <p className="font-inter text-gray-700 mb-4">
                  These Legal Terms constitute a legally binding agreement made
                  between you, whether personally or on behalf of an entity
                  ("you"), and LUMORA VENTURES PVT LTD, concerning your access
                  to and use of the Services. You agree that by accessing the
                  Services, you have read, understood, and agreed to be bound by
                  all of these Legal Terms.{" "}
                  <strong>
                    IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU
                    ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU
                    MUST DISCONTINUE USE IMMEDIATELY.
                  </strong>
                </p>
                <p className="font-inter text-gray-700 mb-6">
                  The Services are intended for users who are at least 18 years
                  old. Persons under the age of 18 are not permitted to use or
                  register for the Services.
                </p>
              </section>

              {/* Our Services */}
              <section id="our-services" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  1. Our Services
                </h2>
                <p className="font-inter text-gray-700 mb-4">
                  The information provided when using the Services is not
                  intended for distribution to or use by any person or entity in
                  any jurisdiction or country where such distribution or use
                  would be contrary to law or regulation or which would subject
                  us to any registration requirement within such jurisdiction or
                  country.
                </p>
                <p className="font-inter text-gray-700 mb-6">
                  The Services are not tailored to comply with industry-specific
                  regulations (Health Insurance Portability and Accountability
                  Act (HIPAA), Federal Information Security Management Act
                  (FISMA), etc.), so if your interactions would be subjected to
                  such laws, you may not use the Services. You may not use the
                  Services in a way that would violate the Gramm-Leach-Bliley
                  Act (GLBA).
                </p>
              </section>

              {/* Intellectual Property Rights */}
              <section id="intellectual-property" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  2. Intellectual Property Rights
                </h2>

                <h3 className="font-montserrat text-xl font-semibold text-gray-800 mb-4">
                  Our Intellectual Property
                </h3>
                <p className="font-inter text-gray-700 mb-4">
                  We are the owner or the licensee of all intellectual property
                  rights in our Services, including all source code, databases,
                  functionality, software, website designs, audio, video, text,
                  photographs, and graphics in the Services (collectively, the
                  "Content"), as well as the trademarks, service marks, and
                  logos contained therein (the "Marks").
                </p>
                <p className="font-inter text-gray-700 mb-4">
                  Our Content and Marks are protected by copyright and trademark
                  laws and treaties in the United States and around the world.
                  The Content and Marks are provided in or through the Services
                  "AS IS" for your personal, non-commercial use or internal
                  business purpose only.
                </p>

                <h3 className="font-montserrat text-xl font-semibold text-gray-800 mb-4">
                  Your Use of Our Services
                </h3>
                <p className="font-inter text-gray-700 mb-4">
                  Subject to your compliance with these Legal Terms, including
                  the "PROHIBITED ACTIVITIES" section below, we grant you a
                  non-exclusive, non-transferable, revocable license to:
                </p>
                <ul className="font-inter text-gray-700 mb-4 space-y-1">
                  <li>• Access the Services; and</li>
                  <li>
                    • Download or print a copy of any portion of the Content to
                    which you have properly gained access
                  </li>
                </ul>
                <p className="font-inter text-gray-700 mb-6">
                  solely for your personal, non-commercial use or internal
                  business purpose. Any breach of these Intellectual Property
                  Rights will constitute a material breach of our Legal Terms
                  and your right to use our Services will terminate immediately.
                </p>

                <h3 className="font-montserrat text-xl font-semibold text-gray-800 mb-4">
                  Your Submissions and Contributions
                </h3>
                <p className="font-inter text-gray-700 mb-4">
                  <strong>Submissions:</strong> By directly sending us any
                  question, comment, suggestion, idea, feedback, or other
                  information about the Services ("Submissions"), you agree to
                  assign to us all intellectual property rights in such
                  Submission.
                </p>
                <p className="font-inter text-gray-700 mb-6">
                  <strong>Contributions:</strong> The Services may invite you to
                  chat, contribute to, or participate in blogs, message boards,
                  online forums, and other functionality during which you may
                  create, submit, post, display, transmit, publish, distribute,
                  or broadcast content and materials to us or through the
                  Services ("Contributions").
                </p>
              </section>

              {/* User Representations */}
              <section id="user-representations" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  3. User Representations
                </h2>
                <p className="font-inter text-gray-700 mb-4">
                  By using the Services, you represent and warrant that:
                </p>
                <ul className="font-inter text-gray-700 mb-6 space-y-2">
                  <li>
                    • All registration information you submit will be true,
                    accurate, current, and complete
                  </li>
                  <li>
                    • You will maintain the accuracy of such information and
                    promptly update such registration information as necessary
                  </li>
                  <li>
                    • You have the legal capacity and you agree to comply with
                    these Legal Terms
                  </li>
                  <li>
                    • You are not a minor in the jurisdiction in which you
                    reside
                  </li>
                  <li>
                    • You will not access the Services through automated or
                    non-human means
                  </li>
                  <li>
                    • You will not use the Services for any illegal or
                    unauthorized purpose
                  </li>
                  <li>
                    • Your use of the Services will not violate any applicable
                    law or regulation
                  </li>
                </ul>
              </section>

              {/* User Registration */}
              <section id="user-registration" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  4. User Registration
                </h2>
                <p className="font-inter text-gray-700 mb-6">
                  You may be required to register to use the Services. You agree
                  to keep your password confidential and will be responsible for
                  all use of your account and password. We reserve the right to
                  remove, reclaim, or change a username you select if we
                  determine, in our sole discretion, that such username is
                  inappropriate, obscene, or otherwise objectionable.
                </p>
              </section>

              {/* Purchases and Payment */}
              <section id="purchases-payment" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  5. Purchases and Payment
                </h2>
                <p className="font-inter text-gray-700 mb-4">
                  We accept the following forms of payment:
                </p>
                <ul className="font-inter text-gray-700 mb-4 space-y-1">
                  <li>• Visa</li>
                  <li>• Mastercard</li>
                  <li>• American Express</li>
                  <li>• PayPal</li>
                </ul>
                <p className="font-inter text-gray-700 mb-4">
                  You agree to provide current, complete, and accurate purchase
                  and account information for all purchases made via the
                  Services. Sales tax will be added to the price of purchases as
                  deemed required by us. We may change prices at any time. All
                  payments shall be in US dollars.
                </p>
                <p className="font-inter text-gray-700 mb-6">
                  We reserve the right to refuse any order placed through the
                  Services. We may, in our sole discretion, limit or cancel
                  quantities purchased per person, per household, or per order.
                </p>
              </section>

              {/* Subscriptions */}
              <section id="subscriptions" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  6. Subscriptions
                </h2>

                <h3 className="font-montserrat text-xl font-semibold text-gray-800 mb-4">
                  Billing and Renewal
                </h3>
                <p className="font-inter text-gray-700 mb-4">
                  Your subscription will continue and automatically renew unless
                  canceled. You consent to our charging your payment method on a
                  recurring basis without requiring your prior approval for each
                  recurring charge, until such time as you cancel the applicable
                  order.
                </p>

                <h3 className="font-montserrat text-xl font-semibold text-gray-800 mb-4">
                  Free Trial
                </h3>
                <p className="font-inter text-gray-700 mb-4">
                  We offer a 7-day free trial to new users who register with the
                  Services. The account will be charged according to the user's
                  chosen subscription at the end of the free trial.
                </p>

                <h3 className="font-montserrat text-xl font-semibold text-gray-800 mb-4">
                  Cancellation
                </h3>
                <p className="font-inter text-gray-700 mb-6">
                  You can cancel your subscription at any time by contacting us
                  using the contact information provided below. Your
                  cancellation will take effect at the end of the current paid
                  term.
                </p>
              </section>

              {/* Software */}
              <section id="software" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  7. Software
                </h2>
                <p className="font-inter text-gray-700 mb-6">
                  We may include software for use in connection with our
                  Services. If such software is accompanied by an end user
                  license agreement ("EULA"), the terms of the EULA will govern
                  your use of the software. If such software is not accompanied
                  by a EULA, then we grant to you a non-exclusive, revocable,
                  personal, and non-transferable license to use such software
                  solely in connection with our services and in accordance with
                  these Legal Terms.
                </p>
              </section>

              {/* Prohibited Activities */}
              <section id="prohibited-activities" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  8. Prohibited Activities
                </h2>
                <p className="font-inter text-gray-700 mb-4">
                  You may not access or use the Services for any purpose other
                  than that for which we make the Services available. As a user
                  of the Services, you agree not to:
                </p>
                <ul className="font-inter text-gray-700 mb-6 space-y-2">
                  <li>
                    • Systematically retrieve data or other content from the
                    Services to create or compile a collection, compilation,
                    database, or directory without written permission from us
                  </li>
                  <li>
                    • Trick, defraud, or mislead us and other users, especially
                    in any attempt to learn sensitive account information such
                    as user passwords
                  </li>
                  <li>
                    • Circumvent, disable, or otherwise interfere with
                    security-related features of the Services
                  </li>
                  <li>
                    • Disparage, tarnish, or otherwise harm, in our opinion, us
                    and/or the Services
                  </li>
                  <li>
                    • Use any information obtained from the Services in order to
                    harass, abuse, or harm another person
                  </li>
                  <li>
                    • Make improper use of our support services or submit false
                    reports of abuse or misconduct
                  </li>
                  <li>
                    • Use the Services in a manner inconsistent with any
                    applicable laws or regulations
                  </li>
                  <li>
                    • Engage in unauthorized framing of or linking to the
                    Services
                  </li>
                  <li>
                    • Upload or transmit viruses, Trojan horses, or other
                    material that interferes with any party's uninterrupted use
                    and enjoyment of the Services
                  </li>
                  <li>
                    • Engage in any automated use of the system, such as using
                    scripts to send comments or messages
                  </li>
                  <li>
                    • Delete the copyright or other proprietary rights notice
                    from any Content
                  </li>
                  <li>
                    • Attempt to impersonate another user or person or use the
                    username of another user
                  </li>
                  <li>
                    • Interfere with, disrupt, or create an undue burden on the
                    Services or the networks or services connected to the
                    Services
                  </li>
                  <li>
                    • Copy or adapt the Services' software, including but not
                    limited to Flash, PHP, HTML, JavaScript, or other code
                  </li>
                  <li>
                    • Use the Services as part of any effort to compete with us
                    or otherwise use the Services for any revenue-generating
                    endeavor or commercial enterprise
                  </li>
                </ul>
              </section>

              {/* User Generated Contributions */}
              <section id="user-contributions" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  9. User Generated Contributions
                </h2>
                <p className="font-inter text-gray-700 mb-4">
                  The Services may invite you to chat, contribute to, or
                  participate in blogs, message boards, online forums, and other
                  functionality, and may provide you with the opportunity to
                  create, submit, post, display, transmit, perform, publish,
                  distribute, or broadcast content and materials to us or on the
                  Services ("Contributions").
                </p>
                <p className="font-inter text-gray-700 mb-4">
                  When you create or make available any Contributions, you
                  thereby represent and warrant that:
                </p>
                <ul className="font-inter text-gray-700 mb-6 space-y-2">
                  <li>
                    • The creation, distribution, transmission, public display,
                    or performance of your Contributions do not and will not
                    infringe the proprietary rights of any third party
                  </li>
                  <li>
                    • You are the creator and owner of or have the necessary
                    licenses, rights, consents, releases, and permissions to use
                    your Contributions
                  </li>
                  <li>
                    • Your Contributions are not false, inaccurate, or
                    misleading
                  </li>
                  <li>
                    • Your Contributions are not unsolicited or unauthorized
                    advertising, promotional materials, pyramid schemes, chain
                    letters, spam, mass mailings, or other forms of solicitation
                  </li>
                  <li>
                    • Your Contributions are not obscene, lewd, lascivious,
                    filthy, violent, harassing, libelous, slanderous, or
                    otherwise objectionable
                  </li>
                  <li>
                    • Your Contributions do not violate any applicable law,
                    regulation, or rule
                  </li>
                </ul>
              </section>

              {/* Contribution License */}
              <section id="contribution-license" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  10. Contribution License
                </h2>
                <p className="font-inter text-gray-700 mb-4">
                  By posting your Contributions to any part of the Services, you
                  automatically grant, and you represent and warrant that you
                  have the right to grant, to us an unrestricted, unlimited,
                  irrevocable, perpetual, non-exclusive, transferable,
                  royalty-free, fully-paid, worldwide right, and license to
                  host, use, copy, reproduce, disclose, sell, resell, publish,
                  broadcast, retitle, archive, store, cache, publicly perform,
                  publicly display, reformat, translate, transmit, excerpt (in
                  whole or in part), and distribute such Contributions for any
                  purpose, commercial, advertising, or otherwise.
                </p>
                <p className="font-inter text-gray-700 mb-6">
                  We do not assert any ownership over your Contributions. You
                  retain full ownership of all of your Contributions and any
                  intellectual property rights or other proprietary rights
                  associated with your Contributions. We have the right, in our
                  sole and absolute discretion, to edit, redact, or otherwise
                  change any Contributions.
                </p>
              </section>

              {/* Guidelines for Reviews */}
              <section id="guidelines-reviews" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  11. Guidelines for Reviews
                </h2>
                <p className="font-inter text-gray-700 mb-4">
                  We may provide you areas on the Services to leave reviews or
                  ratings. When posting a review, you must comply with the
                  following criteria:
                </p>
                <ul className="font-inter text-gray-700 mb-6 space-y-2">
                  <li>
                    • You should have firsthand experience with the
                    person/entity being reviewed
                  </li>
                  <li>
                    • Your reviews should not contain offensive profanity, or
                    abusive, racist, offensive, or hateful language
                  </li>
                  <li>
                    • Your reviews should not contain discriminatory references
                    based on religion, race, gender, national origin, age,
                    marital status, sexual orientation, or disability
                  </li>
                  <li>
                    • Your reviews should not contain references to illegal
                    activity
                  </li>
                  <li>
                    • You should not be affiliated with competitors if posting
                    negative reviews
                  </li>
                  <li>• You may not post any false or misleading statements</li>
                </ul>
              </section>

              {/* Social Media */}
              <section id="social-media" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  12. Social Media
                </h2>
                <p className="font-inter text-gray-700 mb-6">
                  As part of the functionality of the Services, you may link
                  your account with online accounts you have with third-party
                  service providers (each such account, a "Third-Party Account")
                  by either providing your Third-Party Account login information
                  through the Services or allowing us to access your Third-Party
                  Account. By granting us access to any Third-Party Accounts,
                  you understand that we may access, make available, and store
                  any content that you have provided to and stored in your
                  Third-Party Account.
                </p>
              </section>

              {/* Third-Party Websites */}
              <section id="third-party-websites" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  13. Third-Party Websites and Content
                </h2>
                <p className="font-inter text-gray-700 mb-6">
                  The Services may contain links to other websites ("Third-Party
                  Websites") as well as articles, photographs, text, graphics,
                  pictures, designs, music, sound, video, information,
                  applications, software, and other content or items belonging
                  to or originating from third parties ("Third-Party Content").
                  Such Third-Party Websites and Third-Party Content are not
                  investigated, monitored, or checked for accuracy,
                  appropriateness, or completeness by us, and we are not
                  responsible for any Third-Party Websites accessed through the
                  Services.
                </p>
              </section>

              {/* Advertisers */}
              <section id="advertisers" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  14. Advertisers
                </h2>
                <p className="font-inter text-gray-700 mb-6">
                  We allow advertisers to display their advertisements and other
                  information in certain areas of the Services, such as sidebar
                  advertisements or banner advertisements. We simply provide the
                  space to place such advertisements, and we have no other
                  relationship with advertisers.
                </p>
              </section>

              {/* Services Management */}
              <section id="services-management" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  15. Services Management
                </h2>
                <p className="font-inter text-gray-700 mb-4">
                  We reserve the right, but not the obligation, to:
                </p>
                <ul className="font-inter text-gray-700 mb-6 space-y-2">
                  <li>
                    • Monitor the Services for violations of these Legal Terms
                  </li>
                  <li>
                    • Take appropriate legal action against anyone who violates
                    the law or these Legal Terms
                  </li>
                  <li>
                    • Refuse, restrict access to, limit the availability of, or
                    disable any of your Contributions
                  </li>
                  <li>
                    • Remove from the Services any files and content that are
                    excessive in size or burdensome to our systems
                  </li>
                  <li>
                    • Otherwise manage the Services in a manner designed to
                    protect our rights and property
                  </li>
                </ul>
              </section>

              {/* Privacy Policy */}
              <section id="privacy-policy" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  16. Privacy Policy
                </h2>
                <p className="font-inter text-gray-700 mb-6">
                  We care about data privacy and security. Please review our
                  Privacy Policy:{" "}
                  <a
                    href="https://www.lumoraventures.com/privacy"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    https://www.lumoraventures.com/privacy
                  </a>
                  . By using the Services, you agree to be bound by our Privacy
                  Policy, which is incorporated into these Legal Terms. Please
                  be advised the Services are hosted in the United Kingdom.
                </p>
              </section>

              {/* Copyright Infringements */}
              <section id="copyright-infringements" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  17. Copyright Infringements
                </h2>
                <p className="font-inter text-gray-700 mb-6">
                  We respect the intellectual property rights of others. If you
                  believe that any material available on or through the Services
                  infringes upon any copyright you own or control, please
                  immediately notify us using the contact information provided
                  below. Please be advised that pursuant to applicable law you
                  may be held liable for damages if you make material
                  misrepresentations in a notification.
                </p>
              </section>

              {/* Term and Termination */}
              <section id="term-termination" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  18. Term and Termination
                </h2>
                <p className="font-inter text-gray-700 mb-4">
                  These Legal Terms shall remain in full force and effect while
                  you use the Services.{" "}
                  <strong>
                    WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS,
                    WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT
                    NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES
                    TO ANY PERSON FOR ANY REASON OR FOR NO REASON.
                  </strong>
                </p>
                <p className="font-inter text-gray-700 mb-6">
                  If we terminate or suspend your account for any reason, you
                  are prohibited from registering and creating a new account
                  under your name, a fake or borrowed name, or the name of any
                  third party.
                </p>
              </section>

              {/* Modifications and Interruptions */}
              <section id="modifications-interruptions" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  19. Modifications and Interruptions
                </h2>
                <p className="font-inter text-gray-700 mb-4">
                  We reserve the right to change, modify, or remove the contents
                  of the Services at any time or for any reason at our sole
                  discretion without notice. However, we have no obligation to
                  update any information on our Services.
                </p>
                <p className="font-inter text-gray-700 mb-6">
                  We cannot guarantee the Services will be available at all
                  times. We may experience hardware, software, or other problems
                  or need to perform maintenance related to the Services,
                  resulting in interruptions, delays, or errors.
                </p>
              </section>

              {/* Governing Law */}
              <section id="governing-law" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  20. Governing Law
                </h2>
                <p className="font-inter text-gray-700 mb-6">
                  These Legal Terms are governed by and interpreted following
                  the laws of England and Wales, and the use of the United
                  Nations Convention of Contracts for the International Sales of
                  Goods is expressly excluded. LUMORA VENTURES PVT LTD and
                  yourself both agree to submit to the non-exclusive
                  jurisdiction of the courts of Hainault.
                </p>
              </section>

              {/* Dispute Resolution */}
              <section id="dispute-resolution" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  21. Dispute Resolution
                </h2>

                <h3 className="font-montserrat text-xl font-semibold text-gray-800 mb-4">
                  Informal Negotiations
                </h3>
                <p className="font-inter text-gray-700 mb-4">
                  To expedite resolution and control the cost of any dispute,
                  controversy, or claim related to these Legal Terms, the
                  Parties agree to first attempt to negotiate any Dispute
                  informally for at least thirty (30) days before initiating
                  arbitration.
                </p>

                <h3 className="font-montserrat text-xl font-semibold text-gray-800 mb-4">
                  Binding Arbitration
                </h3>
                <p className="font-inter text-gray-700 mb-6">
                  Any dispute arising from the relationships between the Parties
                  to these Legal Terms shall be determined by one arbitrator who
                  will be chosen in accordance with the Arbitration and Internal
                  Rules of the European Court of Arbitration. The seat of
                  arbitration shall be Hainault, England. The language of the
                  proceedings shall be English.
                </p>
              </section>

              {/* Corrections */}
              <section id="corrections" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  22. Corrections
                </h2>
                <p className="font-inter text-gray-700 mb-6">
                  There may be information on the Services that contains
                  typographical errors, inaccuracies, or omissions. We reserve
                  the right to correct any errors, inaccuracies, or omissions
                  and to change or update the information on the Services at any
                  time, without prior notice.
                </p>
              </section>

              {/* Disclaimer */}
              <section id="disclaimer" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  23. Disclaimer
                </h2>
                <p className="font-inter text-gray-700 mb-6">
                  <strong>
                    THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE
                    BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT
                    YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE
                    DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION
                    WITH THE SERVICES AND YOUR USE THEREOF.
                  </strong>
                </p>
              </section>

              {/* Limitations of Liability */}
              <section id="limitations-liability" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  24. Limitations of Liability
                </h2>
                <p className="font-inter text-gray-700 mb-6">
                  <strong>
                    IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS
                    BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT,
                    INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR
                    PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS
                    OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE
                    SERVICES.
                  </strong>
                </p>
              </section>

              {/* Indemnification */}
              <section id="indemnification" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  25. Indemnification
                </h2>
                <p className="font-inter text-gray-700 mb-6">
                  You agree to defend, indemnify, and hold us harmless,
                  including our subsidiaries, affiliates, and all of our
                  respective officers, agents, partners, and employees, from and
                  against any loss, damage, liability, claim, or demand made by
                  any third party due to or arising out of your use of the
                  Services, breach of these Legal Terms, or violation of the
                  rights of a third party.
                </p>
              </section>

              {/* User Data */}
              <section id="user-data" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  26. User Data
                </h2>
                <p className="font-inter text-gray-700 mb-6">
                  We will maintain certain data that you transmit to the
                  Services for the purpose of managing the performance of the
                  Services. Although we perform regular routine backups of data,
                  you are solely responsible for all data that you transmit or
                  that relates to any activity you have undertaken using the
                  Services.
                </p>
              </section>

              {/* Electronic Communications */}
              <section id="electronic-communications" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  27. Electronic Communications, Transactions, and Signatures
                </h2>
                <p className="font-inter text-gray-700 mb-6">
                  Visiting the Services, sending us emails, and completing
                  online forms constitute electronic communications. You consent
                  to receive electronic communications, and you agree that all
                  agreements, notices, disclosures, and other communications we
                  provide to you electronically satisfy any legal requirement
                  that such communication be in writing.
                </p>
              </section>

              {/* California Users */}
              <section id="california-users" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  28. California Users and Residents
                </h2>
                <p className="font-inter text-gray-700 mb-6">
                  If any complaint with us is not satisfactorily resolved, you
                  can contact the Complaint Assistance Unit of the Division of
                  Consumer Services of the California Department of Consumer
                  Affairs in writing at 1625 North Market Blvd., Suite N 112,
                  Sacramento, California 95834 or by telephone at (800) 952-5210
                  or (916) 445-1254.
                </p>
              </section>

              {/* Miscellaneous */}
              <section id="miscellaneous" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  29. Miscellaneous
                </h2>
                <p className="font-inter text-gray-700 mb-6">
                  These Legal Terms and any policies or operating rules posted
                  by us on the Services constitute the entire agreement and
                  understanding between you and us. Our failure to exercise or
                  enforce any right or provision of these Legal Terms shall not
                  operate as a waiver of such right or provision. If any
                  provision of these Legal Terms is determined to be unlawful,
                  void, or unenforceable, that provision is deemed severable
                  from these Legal Terms and does not affect the validity and
                  enforceability of any remaining provisions.
                </p>
              </section>

              {/* Contact Us */}
              <section id="contact" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  30. Contact Us
                </h2>
                <p className="font-inter text-gray-700 mb-4">
                  In order to resolve a complaint regarding the Services or to
                  receive further information regarding use of the Services,
                  please contact us at:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="font-inter text-gray-700 mb-2">
                    <strong>LUMORA VENTURES PVT LTD</strong>
                  </p>
                  <p className="font-inter text-gray-700 mb-2">
                    Office 4157, 58 Peregrine Road
                  </p>
                  <p className="font-inter text-gray-700 mb-2">
                    Hainault, Ilford, Essex IG6 3SZ
                  </p>
                  <p className="font-inter text-gray-700 mb-2">England</p>
                  <p className="font-inter text-gray-700">
                    Email:{" "}
                    <a
                      href="mailto:info@lumoraventures.com"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      info@lumoraventures.com
                    </a>
                  </p>
                </div>
              </section>

              {/* Back to Top */}
              <div className="text-center pt-8 border-t border-gray-200">
                <Link
                  href="/"
                  className="inline-flex items-center font-inter text-blue-600 hover:text-blue-800 transition-colors"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
