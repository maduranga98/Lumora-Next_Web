"use client";

import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getFunctions, httpsCallable } from "firebase/functions";
import { getApps } from "firebase/app";
import { trackCompleteRegistration } from "../lib/conversionsApi";
import { usePageView } from "../lib/usePageView";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "pk_test_your_key"
);

// production price id
const PRICE_ID = "price_1R2nOQKKYKi1ENnWCnMjdSpR";
// tesing price id
// const PRICE_ID = "price_1R2nRyKKYKi1ENnWiPY4IuMV";

function CheckoutForm({ formData }) {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [firebaseReady, setFirebaseReady] = useState(false);
  const [firebaseInstance, setFirebaseInstance] = useState(null);

  // Import Firebase only on the client side
  useEffect(() => {
    const initFirebase = async () => {
      try {
        // Dynamically import Firebase
        const firebaseModule = await import("@/app/lib/firebase");
        setFirebaseInstance({
          db: firebaseModule.db,
          functions: firebaseModule.functions,
        });
        setFirebaseReady(true);
      } catch (error) {
        console.error("Error initializing Firebase:", error);
        setErrorMessage(
          "Could not initialize payment system. Please try again later."
        );
      }
    };

    initFirebase();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe hasn't loaded yet
      setErrorMessage(
        "Payment system is still initializing. Please wait a moment."
      );
      return;
    }

    if (!firebaseReady) {
      setErrorMessage("Firebase is still initializing. Please wait a moment.");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      console.log("Creating payment method...");

      // Get Stripe payment method
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
        billing_details: {
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          address: {
            line1: formData.businessAddress,
          },
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      console.log("Payment method created:", paymentMethod.id);

      // Use the functions that was already imported
      const functions = firebaseInstance.functions || getFunctions();
      const createSubscription = httpsCallable(functions, "createSubscription");

      const customerData = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        businessName: formData.businessName,
        businessAddress: formData.businessAddress,
        website: formData.website,
      };

      // Log the data being sent to help with debugging
      console.log("Sending to Firebase function:", {
        paymentMethodId: paymentMethod.id,
        customerData,
        priceId: PRICE_ID,
      });

      try {
        const response = await createSubscription({
          paymentMethodId: paymentMethod.id,
          customerData: customerData,
          priceId: PRICE_ID,
          packageName: "Professional GBP Management",
          packagePrice: 150,
        });

        console.log("Firebase function response:", response);

        // Check if response data is valid
        if (!response.data) {
          console.error("Invalid response from Firebase function:", response);
          throw new Error(
            "Payment processing error: Invalid response from server"
          );
        }

        const { clientSecret, subscriptionId, status } = response.data;

        // Check if we need to confirm the payment or if it's already successful
        if (status === "active") {
          // Subscription is already active, no need to confirm payment
          showSuccessMessage();
          return;
        }

        // Check if we have a client secret
        if (!clientSecret) {
          console.error("Missing client secret in response:", response.data);
          throw new Error("Payment processing error: Missing client secret");
        }

        console.log("Confirming card payment with client secret...");

        // Confirm the subscription payment
        const result = await stripe.confirmCardPayment(clientSecret);

        if (result.error) {
          throw new Error(result.error.message);
        }

        // Subscription and payment succeeded
        showSuccessMessage();
      } catch (error) {
        if (error.message && error.message.includes("payment_intent")) {
          // Specific handling for payment intent errors
          console.error("Payment intent error:", error);
          setErrorMessage(
            "There was an issue processing your payment. Please check your card details and try again."
          );
        } else {
          throw error; // Re-throw other errors to be caught by the outer catch block
        }
      }
    } catch (err) {
      console.error("Payment error:", err);
      setErrorMessage(
        err.message || "An error occurred with your payment. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // Add this function to show a better success message
  const showSuccessMessage = async () => {
    // Track CompleteRegistration conversion event
    try {
      const nameParts = formData.fullName.trim().split(' ');
      await trackCompleteRegistration({
        email: formData.email,
        phone: formData.phone || null,
        firstName: nameParts[0] || null,
        lastName: nameParts.length > 1 ? nameParts.slice(1).join(' ') : null,
        value: 150,
        currency: 'USD',
        status: 'completed',
      });
    } catch (conversionError) {
      console.warn('Conversion API tracking failed:', conversionError);
    }

    // Create a custom modal or alert with more details
    const successMessage = `
      Thank you for subscribing to our Professional GBP Management service!

      Your payment was successful and your subscription has been activated.

      What happens next:
      • You'll receive an email confirmation shortly
      • Our team will contact you within 24 hours to begin the onboarding process
      • We'll work with you to set up and optimize your Google Business Profile

      If you have any questions, please contact us at info@lumoraventures.com
    `;

    alert(successMessage);
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-6">
        Your Information
      </h3>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={formData.handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={formData.handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={formData.handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      <h3 className="text-lg font-medium text-gray-900 mt-8 mb-6">
        Business Information
      </h3>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="businessName"
            className="block text-sm font-medium text-gray-700"
          >
            Business Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            required
            value={formData.businessName}
            onChange={formData.handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="businessAddress"
            className="block text-sm font-medium text-gray-700"
          >
            Business Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="businessAddress"
            name="businessAddress"
            required
            value={formData.businessAddress}
            onChange={formData.handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="website"
            className="block text-sm font-medium text-gray-700"
          >
            Website (if any)
          </label>
          <input
            type="url"
            id="website"
            name="website"
            placeholder="https://your-website.com"
            value={formData.website}
            onChange={formData.handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      <h3 className="text-lg font-medium text-gray-900 mt-8 mb-6">
        Payment Details <span className="text-red-500">*</span>
      </h3>

      <div className="border rounded-md p-6 mb-6">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
      </div>

      {errorMessage && (
        <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <p>{errorMessage}</p>
        </div>
      )}

      <div className="mt-8">
        <button
          type="submit"
          disabled={!stripe || loading || !firebaseReady}
          className={`w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white ${
            !stripe || loading || !firebaseReady
              ? "opacity-70 cursor-not-allowed"
              : "hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          }`}
        >
          {loading ? "Processing..." : "Subscribe for $150/month"}
        </button>

        <div className="mt-4 text-center">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Cancel
          </Link>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center space-x-4">
        <div className="flex items-center">
          <svg
            className="h-5 w-5 text-gray-400 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <span className="text-xs text-gray-500">SSL Secure Payment</span>
        </div>
        <div className="flex items-center">
          <svg
            className="h-5 w-5 text-gray-400 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <span className="text-xs text-gray-500">PCI DSS Compliant</span>
        </div>
        <div className="flex items-center">
          <svg
            className="h-5 w-5 text-gray-400 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
            />
          </svg>
          <span className="text-xs text-gray-500">Data Protection</span>
        </div>
      </div>
    </form>
  );
}

export default function PaymentPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    businessAddress: "",
    website: "",
  });

  // Track page view with Facebook Conversions API
  usePageView({
    contentName: 'GBP Service Payment Page',
    contentCategory: 'Checkout',
    contentIds: ['gbp-subscription'],
    value: 150
  });

  // Only render full content after component has mounted on client
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Use a simple placeholder during server rendering to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Loading payment page...
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center text-indigo-600 hover:text-indigo-800"
            >
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back
            </Link>
            <div className="flex items-center ml-4">
              <Image
                src="/logo.webp"
                alt="Lumora Ventures"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span className="ml-2 text-lg font-medium text-indigo-600">
                Lumora Ventures
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            Complete Your Purchase
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            You're just a few steps away from transforming your local online
            presence with our professional Google Business Profile management
            service.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Payment Form - Left Column */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Professional GBP Management
                    </h2>
                    <p className="text-gray-600">
                      Complete Google Business Profile solution
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-indigo-600">
                      $150
                    </div>
                    <div className="text-sm text-gray-500">/month</div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Package includes:
                </h3>
                <ul className="space-y-2">
                  {[
                    "Google Business Profile Optimization",
                    "Weekly Promotional Posts",
                    "Profile Verification",
                    "Q&A Management",
                    "Review Responses",
                    "Performance Reporting",
                    "Professional Image Management",
                    "Competitor Spam Sweep",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Elements stripe={stripePromise}>
                <CheckoutForm
                  formData={{
                    ...formData,
                    handleChange,
                  }}
                />
              </Elements>
            </div>
          </div>

          {/* Right Column - Benefits & Process */}
          <div className="md:col-span-2">
            {/* Why Choose Our Service */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="flex items-center text-lg font-medium text-gray-900 mb-4">
                <svg
                  className="h-5 w-5 text-yellow-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Why Choose Our Service
              </h3>
              <ul className="space-y-3">
                {[
                  "Enhanced local visibility in Google search results",
                  "Professionally managed business profile with weekly updates",
                  "Optimized local SEO and improved local rankings",
                  "Strategic profile management to attract local customers",
                  "Expert team handling all aspects of your Google presence",
                  "Regular performance reporting to track your ROI",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How It Works */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="flex items-center text-lg font-medium text-gray-900 mb-4">
                <svg
                  className="h-5 w-5 text-yellow-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
                How It Works
              </h3>
              <ol className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-semibold mr-3">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Sign Up Today</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Complete your purchase and our team will receive immediate
                      notification to begin the onboarding process.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-semibold mr-3">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Initial Consultation
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Within 24 hours, we'll contact you to gather information
                      about your business and discuss your specific needs and
                      goals.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-semibold mr-3">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Profile Setup & Optimization
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Our team will optimize your Google Business Profile with
                      professional descriptions, images, and strategic keywords.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-semibold mr-3">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Ongoing Management
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      We'll handle all aspects of your Google Business Profile,
                      from posting updates to responding to reviews, while
                      providing regular performance reports.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Common Questions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="flex items-center text-lg font-medium text-gray-900 mb-4">
                <svg
                  className="h-5 w-5 text-yellow-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Common Questions
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">
                    When will my service begin?
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Our team will contact you within 24 hours of your purchase
                    to begin the onboarding process.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">
                    Can I cancel my subscription?
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Yes, you can cancel anytime with no cancellation fees. We
                    don't lock you into long-term contracts.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">
                    How quickly will I see results?
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Most clients begin seeing improvements in their local
                    visibility within 30 days, with significant growth at the
                    90-day mark.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">
                  Have questions before completing your purchase?
                </p>
                <p className="font-medium text-gray-900">
                  Call us at +94 76 916 4108 or email{" "}
                  <a
                    href="mailto:info@lumoraventures.com"
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    info@lumoraventures.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
