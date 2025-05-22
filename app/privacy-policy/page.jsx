"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const PrivacyPolicy = () => {
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
    { id: "summary", title: "Summary of Key Points" },
    { id: "information-collection", title: "What Information Do We Collect?" },
    {
      id: "information-processing",
      title: "How Do We Process Your Information?",
    },
    { id: "legal-bases", title: "What Legal Bases Do We Rely On?" },
    {
      id: "information-sharing",
      title: "When and With Whom Do We Share Information?",
    },
    { id: "third-party-websites", title: "Our Stance on Third-Party Websites" },
    { id: "cookies", title: "Cookies and Tracking Technologies" },
    { id: "social-logins", title: "How We Handle Social Logins" },
    { id: "retention", title: "How Long Do We Keep Your Information?" },
    { id: "minors", title: "Do We Collect Information from Minors?" },
    { id: "privacy-rights", title: "What Are Your Privacy Rights?" },
    { id: "do-not-track", title: "Controls for Do-Not-Track Features" },
    { id: "us-residents", title: "US Residents Privacy Rights" },
    { id: "other-regions", title: "Other Regions Privacy Rights" },
    { id: "updates", title: "Do We Make Updates to This Notice?" },
    { id: "contact", title: "How Can You Contact Us?" },
    { id: "review-update-delete", title: "Review, Update, or Delete Data" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-montserrat text-4xl lg:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="font-inter text-xl text-blue-100 mb-6">
            This Privacy Notice for LUMORA VENTURES PVT LTD describes how and
            why we might access, collect, store, use, and/or share your personal
            information when you use our services.
          </p>
          <p className="font-inter text-blue-200">
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
              <nav className="space-y-2">
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
              {/* Introduction */}
              <div className="mb-12">
                <p className="font-inter text-gray-700 leading-relaxed mb-4">
                  This Privacy Notice for{" "}
                  <strong>LUMORA VENTURES PVT LTD</strong> ("we," "us," or
                  "our"), describes how and why we might access, collect, store,
                  use, and/or share ("process") your personal information when
                  you use our services ("Services"), including when you:
                </p>
                <ul className="font-inter text-gray-700 mb-6 space-y-2">
                  <li>
                    • Visit our website at{" "}
                    <a
                      href="https://www.lumoraventures.com/"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      https://www.lumoraventures.com/
                    </a>
                    , or any website of ours that links to this Privacy Notice
                  </li>
                  <li>
                    • Engage with us in other related ways, including any sales,
                    marketing, or events
                  </li>
                </ul>
                <p className="font-inter text-gray-700 leading-relaxed">
                  <strong>Questions or concerns?</strong> Reading this Privacy
                  Notice will help you understand your privacy rights and
                  choices. We are responsible for making decisions about how
                  your personal information is processed. If you do not agree
                  with our policies and practices, please do not use our
                  Services. If you still have any questions or concerns, please
                  contact us at{" "}
                  <a
                    href="mailto:info@lumoraventures.com"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    info@lumoraventures.com
                  </a>
                  .
                </p>
              </div>

              {/* Summary of Key Points */}
              <section id="summary" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  Summary of Key Points
                </h2>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <p className="font-inter text-gray-700 mb-4">
                    This summary provides key points from our Privacy Notice,
                    but you can find out more details about any of these topics
                    by using our table of contents to find the section you are
                    looking for.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-montserrat font-semibold text-gray-800 mb-2">
                      What personal information do we process?
                    </h4>
                    <p className="font-inter text-gray-700">
                      When you visit, use, or navigate our Services, we may
                      process personal information depending on how you interact
                      with us and the Services, the choices you make, and the
                      products and features you use.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-montserrat font-semibold text-gray-800 mb-2">
                      Do we process any sensitive personal information?
                    </h4>
                    <p className="font-inter text-gray-700">
                      Some of the information may be considered "special" or
                      "sensitive" in certain jurisdictions. We may process
                      sensitive personal information when necessary with your
                      consent or as otherwise permitted by applicable law.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-montserrat font-semibold text-gray-800 mb-2">
                      Do we collect any information from third parties?
                    </h4>
                    <p className="font-inter text-gray-700">
                      We do not collect any information from third parties.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-montserrat font-semibold text-gray-800 mb-2">
                      How do we process your information?
                    </h4>
                    <p className="font-inter text-gray-700">
                      We process your information to provide, improve, and
                      administer our Services, communicate with you, for
                      security and fraud prevention, and to comply with law. We
                      may also process your information for other purposes with
                      your consent.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-montserrat font-semibold text-gray-800 mb-2">
                      What are your rights?
                    </h4>
                    <p className="font-inter text-gray-700">
                      Depending on where you are located geographically, the
                      applicable privacy law may mean you have certain rights
                      regarding your personal information.
                    </p>
                  </div>
                </div>
              </section>

              {/* Information Collection */}
              <section id="information-collection" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  1. What Information Do We Collect?
                </h2>

                <h3 className="font-montserrat text-xl font-semibold text-gray-800 mb-4">
                  Personal Information You Disclose to Us
                </h3>
                <p className="font-inter text-gray-700 mb-4">
                  <strong>In Short:</strong> We collect personal information
                  that you provide to us.
                </p>
                <p className="font-inter text-gray-700 mb-4">
                  We collect personal information that you voluntarily provide
                  to us when you register on the Services, express an interest
                  in obtaining information about us or our products and
                  Services, when you participate in activities on the Services,
                  or otherwise when you contact us.
                </p>

                <h4 className="font-montserrat font-semibold text-gray-800 mb-3">
                  Personal Information Provided by You
                </h4>
                <p className="font-inter text-gray-700 mb-4">
                  The personal information that we collect depends on the
                  context of your interactions with us and the Services, the
                  choices you make, and the products and features you use. The
                  personal information we collect may include the following:
                </p>
                <ul className="font-inter text-gray-700 mb-6 space-y-1">
                  <li>• Names</li>
                  <li>• Phone numbers</li>
                  <li>• Email addresses</li>
                  <li>• Usernames</li>
                  <li>• Passwords</li>
                  <li>• Contact preferences</li>
                  <li>• Billing addresses</li>
                  <li>• Debit/credit card numbers</li>
                </ul>

                <h4 className="font-montserrat font-semibold text-gray-800 mb-3">
                  Sensitive Information
                </h4>
                <p className="font-inter text-gray-700 mb-4">
                  When necessary, with your consent or as otherwise permitted by
                  applicable law, we process the following categories of
                  sensitive information:
                </p>
                <ul className="font-inter text-gray-700 mb-6 space-y-1">
                  <li>• Financial data</li>
                  <li>• Credit worthiness data</li>
                </ul>

                <h4 className="font-montserrat font-semibold text-gray-800 mb-3">
                  Payment Data
                </h4>
                <p className="font-inter text-gray-700 mb-4">
                  We may collect data necessary to process your payment if you
                  choose to make purchases, such as your payment instrument
                  number, and the security code associated with your payment
                  instrument. All payment data is handled and stored by Stripe,
                  PayPal, Payoneer and Wise. You may find their privacy notice
                  links here:
                </p>
                <ul className="font-inter text-gray-700 mb-6 space-y-1">
                  <li>
                    •{" "}
                    <a
                      href="https://stripe.com/privacy"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Stripe Privacy Policy
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a
                      href="https://www.paypal.com/us/legalhub/paypal/privacy-full"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      PayPal Privacy Policy
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a
                      href="https://www.payoneer.com.cn/legal/privacy-policy/"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Payoneer Privacy Policy
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a
                      href="https://wise.com/help/articles/2932697/whats-your-privacy-policy"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Wise Privacy Policy
                    </a>
                  </li>
                </ul>

                <h3 className="font-montserrat text-xl font-semibold text-gray-800 mb-4">
                  Information Automatically Collected
                </h3>
                <p className="font-inter text-gray-700 mb-4">
                  <strong>In Short:</strong> Some information — such as your
                  Internet Protocol (IP) address and/or browser and device
                  characteristics — is collected automatically when you visit
                  our Services.
                </p>
                <p className="font-inter text-gray-700 mb-4">
                  We automatically collect certain information when you visit,
                  use, or navigate the Services. This information does not
                  reveal your specific identity but may include device and usage
                  information, such as your IP address, browser and device
                  characteristics, operating system, language preferences,
                  referring URLs, device name, country, location, information
                  about how and when you use our Services, and other technical
                  information.
                </p>

                <h4 className="font-montserrat font-semibold text-gray-800 mb-3">
                  The information we collect includes:
                </h4>
                <ul className="font-inter text-gray-700 mb-6 space-y-2">
                  <li>
                    • <strong>Log and Usage Data:</strong> Service-related,
                    diagnostic, usage, and performance information our servers
                    automatically collect when you access or use our Services
                  </li>
                  <li>
                    • <strong>Device Data:</strong> Information about your
                    computer, phone, tablet, or other device you use to access
                    the Services
                  </li>
                  <li>
                    • <strong>Location Data:</strong> Information about your
                    device's location, which can be either precise or imprecise
                  </li>
                </ul>
              </section>

              {/* Information Processing */}
              <section id="information-processing" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  2. How Do We Process Your Information?
                </h2>
                <p className="font-inter text-gray-700 mb-4">
                  <strong>In Short:</strong> We process your information to
                  provide, improve, and administer our Services, communicate
                  with you, for security and fraud prevention, and to comply
                  with law. We may also process your information for other
                  purposes with your consent.
                </p>
                <p className="font-inter text-gray-700 mb-4">
                  We process your personal information for a variety of reasons,
                  depending on how you interact with our Services, including:
                </p>
                <ul className="font-inter text-gray-700 mb-6 space-y-2">
                  <li>
                    •{" "}
                    <strong>
                      To facilitate account creation and authentication:
                    </strong>{" "}
                    We may process your information so you can create and log in
                    to your account, as well as keep your account in working
                    order.
                  </li>
                  <li>
                    • <strong>To request feedback:</strong> We may process your
                    information when necessary to request feedback and to
                    contact you about your use of our Services.
                  </li>
                  <li>
                    •{" "}
                    <strong>
                      To send you marketing and promotional communications:
                    </strong>{" "}
                    We may process the personal information you send to us for
                    our marketing purposes, if this is in accordance with your
                    marketing preferences.
                  </li>
                  <li>
                    • <strong>To deliver targeted advertising:</strong> We may
                    process your information to develop and display personalized
                    content and advertising tailored to your interests,
                    location, and more.
                  </li>
                  <li>
                    • <strong>To protect our Services:</strong> We may process
                    your information as part of our efforts to keep our Services
                    safe and secure, including fraud monitoring and prevention.
                  </li>
                  <li>
                    • <strong>To identify usage trends:</strong> We may process
                    information about how you use our Services to better
                    understand how they are being used so we can improve them.
                  </li>
                </ul>
              </section>

              {/* Legal Bases */}
              <section id="legal-bases" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  3. What Legal Bases Do We Rely On to Process Your Information?
                </h2>
                <p className="font-inter text-gray-700 mb-4">
                  <strong>In Short:</strong> We only process your personal
                  information when we believe it is necessary and we have a
                  valid legal reason (i.e., legal basis) to do so under
                  applicable law, like with your consent, to comply with laws,
                  to provide you with services to enter into or fulfill our
                  contractual obligations, to protect your rights, or to fulfill
                  our legitimate business interests.
                </p>

                <h3 className="font-montserrat text-xl font-semibold text-gray-800 mb-4">
                  If you are located in the EU or UK
                </h3>
                <p className="font-inter text-gray-700 mb-4">
                  The General Data Protection Regulation (GDPR) and UK GDPR
                  require us to explain the valid legal bases we rely on in
                  order to process your personal information. As such, we may
                  rely on the following legal bases:
                </p>
                <ul className="font-inter text-gray-700 mb-6 space-y-2">
                  <li>
                    • <strong>Consent:</strong> We may process your information
                    if you have given us permission to use your personal
                    information for a specific purpose.
                  </li>
                  <li>
                    • <strong>Legitimate Interests:</strong> We may process your
                    information when we believe it is reasonably necessary to
                    achieve our legitimate business interests.
                  </li>
                  <li>
                    • <strong>Legal Obligations:</strong> We may process your
                    information where we believe it is necessary for compliance
                    with our legal obligations.
                  </li>
                  <li>
                    • <strong>Vital Interests:</strong> We may process your
                    information where we believe it is necessary to protect your
                    vital interests or the vital interests of a third party.
                  </li>
                </ul>

                <h3 className="font-montserrat text-xl font-semibold text-gray-800 mb-4">
                  If you are located in Canada
                </h3>
                <p className="font-inter text-gray-700 mb-6">
                  We may process your information if you have given us specific
                  permission (i.e., express consent) to use your personal
                  information for a specific purpose, or in situations where
                  your permission can be inferred (i.e., implied consent). You
                  can withdraw your consent at any time.
                </p>
              </section>

              {/* Information Sharing */}
              <section id="information-sharing" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  4. When and With Whom Do We Share Your Personal Information?
                </h2>
                <p className="font-inter text-gray-700 mb-4">
                  <strong>In Short:</strong> We may share information in
                  specific situations described in this section and/or with the
                  following third parties.
                </p>
                <p className="font-inter text-gray-700 mb-4">
                  We may need to share your personal information in the
                  following situations:
                </p>
                <ul className="font-inter text-gray-700 mb-6 space-y-2">
                  <li>
                    • <strong>Business Transfers:</strong> We may share or
                    transfer your information in connection with, or during
                    negotiations of, any merger, sale of company assets,
                    financing, or acquisition of all or a portion of our
                    business to another company.
                  </li>
                  <li>
                    • <strong>When we use Google Maps Platform APIs:</strong> We
                    may share your information with certain Google Maps Platform
                    APIs. We obtain and store on your device ("cache") your
                    location for three (3) months.
                  </li>
                </ul>
              </section>

              {/* Third-Party Websites */}
              <section id="third-party-websites" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  5. What Is Our Stance on Third-Party Websites?
                </h2>
                <p className="font-inter text-gray-700 mb-4">
                  <strong>In Short:</strong> We are not responsible for the
                  safety of any information that you share with third parties
                  that we may link to or who advertise on our Services, but are
                  not affiliated with, our Services.
                </p>
                <p className="font-inter text-gray-700 mb-6">
                  The Services may link to third-party websites, online
                  services, or mobile applications and/or contain advertisements
                  from third parties that are not affiliated with us. We do not
                  make any guarantee regarding any such third parties, and we
                  will not be liable for any loss or damage caused by the use of
                  such third-party websites, services, or applications. We
                  cannot guarantee the safety and privacy of data you provide to
                  any third-party websites.
                </p>
              </section>

              {/* Cookies */}
              <section id="cookies" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  6. Do We Use Cookies and Other Tracking Technologies?
                </h2>
                <p className="font-inter text-gray-700 mb-4">
                  <strong>In Short:</strong> We may use cookies and other
                  tracking technologies to collect and store your information.
                </p>
                <p className="font-inter text-gray-700 mb-4">
                  We may use cookies and similar tracking technologies (like web
                  beacons and pixels) to gather information when you interact
                  with our Services. Some online tracking technologies help us
                  maintain the security of our Services and your account,
                  prevent crashes, fix bugs, save your preferences, and assist
                  with basic site functions.
                </p>

                <h3 className="font-montserrat text-xl font-semibold text-gray-800 mb-4">
                  Google Analytics
                </h3>
                <p className="font-inter text-gray-700 mb-6">
                  We may share your information with Google Analytics to track
                  and analyze the use of the Services. To opt out of being
                  tracked by Google Analytics across the Services, visit{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    https://tools.google.com/dlpage/gaoptout
                  </a>
                  .
                </p>
              </section>

              {/* Social Logins */}
              <section id="social-logins" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  7. How Do We Handle Your Social Logins?
                </h2>
                <p className="font-inter text-gray-700 mb-4">
                  <strong>In Short:</strong> If you choose to register or log in
                  to our Services using a social media account, we may have
                  access to certain information about you.
                </p>
                <p className="font-inter text-gray-700 mb-6">
                  Our Services offer you the ability to register and log in
                  using your third-party social media account details (like your
                  Facebook or X logins). Where you choose to do this, we will
                  receive certain profile information about you from your social
                  media provider. The profile information we receive may vary
                  depending on the social media provider concerned, but will
                  often include your name, email address, friends list, and
                  profile picture, as well as other information you choose to
                  make public on such a social media platform.
                </p>
              </section>

              {/* Data Retention */}
              <section id="retention" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  8. How Long Do We Keep Your Information?
                </h2>
                <p className="font-inter text-gray-700 mb-4">
                  <strong>In Short:</strong> We keep your information for as
                  long as necessary to fulfill the purposes outlined in this
                  Privacy Notice unless otherwise required by law.
                </p>
                <p className="font-inter text-gray-700 mb-6">
                  We will only keep your personal information for as long as it
                  is necessary for the purposes set out in this Privacy Notice,
                  unless a longer retention period is required or permitted by
                  law. No purpose in this notice will require us keeping your
                  personal information for longer than the period of time in
                  which users have an account with us.
                </p>
              </section>

              {/* Minors */}
              <section id="minors" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  9. Do We Collect Information from Minors?
                </h2>
                <p className="font-inter text-gray-700 mb-4">
                  <strong>In Short:</strong> We do not knowingly collect data
                  from or market to children under 18 years of age.
                </p>
                <p className="font-inter text-gray-700 mb-6">
                  We do not knowingly collect, solicit data from, or market to
                  children under 18 years of age, nor do we knowingly sell such
                  personal information. By using the Services, you represent
                  that you are at least 18 or that you are the parent or
                  guardian of such a minor and consent to such minor dependent's
                  use of the Services. If we learn that personal information
                  from users less than 18 years of age has been collected, we
                  will deactivate the account and take reasonable measures to
                  promptly delete such data from our records.
                </p>
              </section>

              {/* Privacy Rights */}
              <section id="privacy-rights" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  10. What Are Your Privacy Rights?
                </h2>
                <p className="font-inter text-gray-700 mb-4">
                  <strong>In Short:</strong> Depending on your state of
                  residence in the US or in some regions, such as the European
                  Economic Area (EEA), United Kingdom (UK), Switzerland, and
                  Canada, you have rights that allow you greater access to and
                  control over your personal information.
                </p>
                <p className="font-inter text-gray-700 mb-4">
                  In some regions (like the EEA, UK, Switzerland, and Canada),
                  you have certain rights under applicable data protection laws.
                  These may include the right:
                </p>
                <ul className="font-inter text-gray-700 mb-6 space-y-1">
                  <li>
                    • To request access and obtain a copy of your personal
                    information
                  </li>
                  <li>• To request rectification or erasure</li>
                  <li>
                    • To restrict the processing of your personal information
                  </li>
                  <li>• If applicable, to data portability</li>
                  <li>• Not to be subject to automated decision-making</li>
                </ul>

                <h3 className="font-montserrat text-xl font-semibold text-gray-800 mb-4">
                  Account Information
                </h3>
                <p className="font-inter text-gray-700 mb-4">
                  If you would at any time like to review or change the
                  information in your account or terminate your account, you
                  can:
                </p>
                <ul className="font-inter text-gray-700 mb-6 space-y-1">
                  <li>
                    • Log in to your account settings and update your user
                    account
                  </li>
                  <li>• Contact us using the contact information provided</li>
                </ul>
              </section>

              {/* Do-Not-Track */}
              <section id="do-not-track" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  11. Controls for Do-Not-Track Features
                </h2>
                <p className="font-inter text-gray-700 mb-6">
                  Most web browsers and some mobile operating systems and mobile
                  applications include a Do-Not-Track ("DNT") feature or setting
                  you can activate to signal your privacy preference not to have
                  data about your online browsing activities monitored and
                  collected. At this stage, no uniform technology standard for
                  recognizing and implementing DNT signals has been finalized.
                  As such, we do not currently respond to DNT browser signals or
                  any other mechanism that automatically communicates your
                  choice not to be tracked online.
                </p>
              </section>

              {/* US Residents Rights */}
              <section id="us-residents" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  12. Do United States Residents Have Specific Privacy Rights?
                </h2>
                <p className="font-inter text-gray-700 mb-4">
                  <strong>In Short:</strong> If you are a resident of
                  California, Colorado, Connecticut, Delaware, Florida, Indiana,
                  Iowa, Kentucky, Minnesota, Montana, Nebraska, New Hampshire,
                  New Jersey, Oregon, Tennessee, Texas, Utah, or Virginia, you
                  may have the right to request access to and receive details
                  about the personal information we maintain about you and how
                  we have processed it, correct inaccuracies, get a copy of, or
                  delete your personal information.
                </p>

                <h3 className="font-montserrat text-xl font-semibold text-gray-800 mb-4">
                  Your Rights
                </h3>
                <p className="font-inter text-gray-700 mb-4">
                  You have rights under certain US state data protection laws.
                  These rights include:
                </p>
                <ul className="font-inter text-gray-700 mb-6 space-y-1">
                  <li>
                    • Right to know whether or not we are processing your
                    personal data
                  </li>
                  <li>• Right to access your personal data</li>
                  <li>• Right to correct inaccuracies in your personal data</li>
                  <li>• Right to request the deletion of your personal data</li>
                  <li>
                    • Right to obtain a copy of the personal data you previously
                    shared with us
                  </li>
                  <li>
                    • Right to non-discrimination for exercising your rights
                  </li>
                </ul>
              </section>

              {/* Other Regions */}
              <section id="other-regions" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  13. Do Other Regions Have Specific Privacy Rights?
                </h2>
                <p className="font-inter text-gray-700 mb-4">
                  <strong>In Short:</strong> You may have additional rights
                  based on the country you reside in.
                </p>

                <h3 className="font-montserrat text-xl font-semibold text-gray-800 mb-4">
                  Australia and New Zealand
                </h3>
                <p className="font-inter text-gray-700 mb-4">
                  We collect and process your personal information under the
                  obligations and conditions set by Australia's Privacy Act 1988
                  and New Zealand's Privacy Act 2020 (Privacy Act).
                </p>

                <h3 className="font-montserrat text-xl font-semibold text-gray-800 mb-4">
                  Republic of South Africa
                </h3>
                <p className="font-inter text-gray-700 mb-6">
                  At any time, you have the right to request access to or
                  correction of your personal information. If you are
                  unsatisfied with the manner in which we address any complaint
                  with regard to our processing of personal information, you can
                  contact the office of the regulator, the Information Regulator
                  (South Africa).
                </p>
              </section>

              {/* Updates */}
              <section id="updates" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  14. Do We Make Updates to This Notice?
                </h2>
                <p className="font-inter text-gray-700 mb-4">
                  <strong>In Short:</strong> Yes, we will update this notice as
                  necessary to stay compliant with relevant laws.
                </p>
                <p className="font-inter text-gray-700 mb-6">
                  We may update this Privacy Notice from time to time. The
                  updated version will be indicated by an updated "Revised" date
                  at the top of this Privacy Notice. If we make material changes
                  to this Privacy Notice, we may notify you either by
                  prominently posting a notice of such changes or by directly
                  sending you a notification. We encourage you to review this
                  Privacy Notice frequently to be informed of how we are
                  protecting your information.
                </p>
              </section>

              {/* Contact */}
              <section id="contact" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  15. How Can You Contact Us About This Notice?
                </h2>
                <p className="font-inter text-gray-700 mb-4">
                  If you have questions or comments about this notice, you may
                  email us at{" "}
                  <a
                    href="mailto:info@lumoraventures.com"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    info@lumoraventures.com
                  </a>{" "}
                  or contact us by post at:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <p className="font-inter text-gray-700 mb-2">
                    <strong>LUMORA VENTURES PVT LTD</strong>
                  </p>
                  <p className="font-inter text-gray-700 mb-2">
                    Office 4157, 58 Peregrine Road
                  </p>
                  <p className="font-inter text-gray-700 mb-2">
                    Hainault, Ilford, Essex IG6 3SZ
                  </p>
                  <p className="font-inter text-gray-700">England</p>
                </div>
              </section>

              {/* Review, Update, Delete */}
              <section id="review-update-delete" className="mb-12">
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-6">
                  16. How Can You Review, Update, or Delete the Data We Collect
                  from You?
                </h2>
                <p className="font-inter text-gray-700 mb-6">
                  Based on the applicable laws of your country or state of
                  residence in the US, you may have the right to request access
                  to the personal information we collect from you, details about
                  how we have processed it, correct inaccuracies, or delete your
                  personal information. You may also have the right to withdraw
                  your consent to our processing of your personal information.
                  These rights may be limited in some circumstances by
                  applicable law.
                </p>
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

export default PrivacyPolicy;
