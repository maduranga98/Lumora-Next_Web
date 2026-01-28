const { onCall, HttpsError } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const logger = require("firebase-functions/logger");
const nodemailer = require("nodemailer");

// Initialize Firebase Admin safely
try {
  if (!admin.apps.length) {
    admin.initializeApp();
    logger.info("Firebase Admin initialized successfully");
  }
} catch (error) {
  logger.error("Error initializing Firebase Admin:", error);
  // Don't throw here, let's continue and see if we can recover
}

let stripe;

async function initializeStripe() {
  if (stripe) {
    logger.info("Stripe already initialized");
    return stripe;
  }

  // In 2nd Gen functions, use process.env directly
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  logger.info(
    "Checking for Stripe key: " + (stripeSecretKey ? "Found" : "Not found"),
  );

  if (!stripeSecretKey) {
    logger.error("Stripe secret key not found in environment variables");
    throw new HttpsError(
      "failed-precondition",
      "Stripe secret key is not configured",
    );
  }

  try {
    const stripeModule = require("stripe");
    stripe = stripeModule(stripeSecretKey);
    logger.info(
      "Stripe initialized successfully with key prefix: " +
        stripeSecretKey.substring(0, 7) +
        "...",
    );
    return stripe;
  } catch (error) {
    logger.error("Error initializing Stripe:", error);
    throw new HttpsError(
      "internal",
      "Failed to initialize Stripe: " + error.message,
    );
  }
}

// Create email transporter
const createTransporter = async () => {
  // In 2nd Gen functions, use process.env directly
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  logger.info(
    "Email credentials retrieved: " + (emailUser && emailPass ? "Yes" : "No"),
  );

  if (!emailUser || !emailPass) {
    logger.error("Missing email credentials from environment variables");
    return null;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });
    logger.info("Nodemailer transporter created successfully");
    return transporter;
  } catch (error) {
    logger.error("Error creating Nodemailer transporter:", error);
    return null;
  }
};

// Send email notification about new subscription
const sendSubscriptionEmail = async (customerData, subscriptionDetails) => {
  try {
    const transporter = await createTransporter();

    if (!transporter) {
      logger.error("Could not create email transporter");
      return false;
    }

    const date = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Colombo",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    // Get email from env var or use fallback
    const emailFrom =
      process.env.EMAIL_USER || "notifications@lumoraventures.com";

    const mailOptions = {
      from: `Lumora Ventures <${emailFrom}>`,
      to: "lumoraventures@gmail.com",
      subject: "New GBP Management Subscription",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #4f46e5; margin-bottom: 5px;">New Subscription</h1>
            <p style="color: #6b7280; font-size: 16px;">Professional GBP Management</p>
          </div>
          <div style="margin-bottom: 25px; padding: 15px; background-color: #f9fafb; border-radius: 5px;">
            <h2 style="color: #111827; font-size: 18px; margin-bottom: 15px;">Customer Information</h2>
            <p style="margin: 5px 0;"><strong>Name:</strong> ${
              customerData.name || "N/A"
            }</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${
              customerData.email || "N/A"
            }</p>
            <p style="margin: 5px 0;"><strong>Phone:</strong> ${
              customerData.phone || "N/A"
            }</p>
            <p style="margin: 5px 0;"><strong>Business Name:</strong> ${
              customerData.businessName || "N/A"
            }</p>
            <p style="margin: 5px 0;"><strong>Business Address:</strong> ${
              customerData.businessAddress || "N/A"
            }</p>
            <p style="margin: 5px 0;"><strong>Website:</strong> ${
              customerData.website || "N/A"
            }</p>
          </div>
          <div style="margin-bottom: 25px; padding: 15px; background-color: #f9fafb; border-radius: 5px;">
            <h2 style="color: #111827; font-size: 18px; margin-bottom: 15px;">Subscription Details</h2>
            <p style="margin: 5px 0;"><strong>Package:</strong> ${
              subscriptionDetails.packageName || "Professional GBP Management"
            }</p>
            <p style="margin: 5px 0;"><strong>Price:</strong> $${
              subscriptionDetails.packagePrice || "150"
            }/month</p>
            <p style="margin: 5px 0;"><strong>Subscription ID:</strong> ${
              subscriptionDetails.subscriptionId || "N/A"
            }</p>
            <p style="margin: 5px 0;"><strong>Status:</strong> ${
              subscriptionDetails.status || "N/A"
            }</p>
            <p style="margin: 5px 0;"><strong>Date:</strong> ${date}</p>
          </div>
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
            <p style="color: #6b7280; font-size: 14px;">
              This is an automated notification from your website.
              <br>Please contact the client within 24 hours to start the onboarding process.
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    logger.info("Subscription notification email sent successfully");
    return true;
  } catch (error) {
    logger.error("Error sending subscription email:", error);
    return false;
  }
};

exports.createSubscription = onCall(
  {
    region: "us-central1",
    timeoutSeconds: 300, // Increase timeout for slower operations
    memory: "1GiB", // Increase memory allocation
    minInstances: 0, // Ensure cold starts are allowed
    concurrency: 5, // Only allow 5 concurrent executions to avoid overload
    secrets: ["STRIPE_SECRET_KEY", "EMAIL_USER", "EMAIL_PASS"], // Specify which secrets to access
  },
  async (request) => {
    try {
      logger.info("Function invoked, initializing Stripe...");
      const stripe = await initializeStripe();

      const {
        paymentMethodId,
        customerData,
        priceId,
        packageName,
        packagePrice,
      } = request.data || {};

      logger.info("Subscription request received:", {
        userId: request.auth?.uid || "anonymous",
        hasPaymentMethod: Boolean(paymentMethodId),
        hasCustomerData: Boolean(customerData),
        hasPriceId: Boolean(priceId),
        priceId,
      });

      if (!paymentMethodId || !customerData || !priceId) {
        const missingFields = [];
        if (!paymentMethodId) missingFields.push("paymentMethodId");
        if (!customerData) missingFields.push("customerData");
        if (!priceId) missingFields.push("priceId");
        throw new HttpsError(
          "invalid-argument",
          `Missing required fields: ${missingFields.join(", ")}`,
        );
      }

      // Check if customer data has email
      if (!customerData.email) {
        throw new HttpsError("invalid-argument", "Customer email is required");
      }

      // Find or create customer
      let customer;
      try {
        logger.info(
          "Checking for existing customer with email:",
          customerData.email,
        );
        const existingCustomers = await stripe.customers.list({
          email: customerData.email,
          limit: 1,
        });

        if (existingCustomers.data && existingCustomers.data.length > 0) {
          customer = existingCustomers.data[0];
          logger.info(`Found existing customer: ${customer.id}`);

          logger.info("Attaching payment method to customer");
          await stripe.paymentMethods.attach(paymentMethodId, {
            customer: customer.id,
          });

          logger.info("Updating customer default payment method");
          await stripe.customers.update(customer.id, {
            invoice_settings: { default_payment_method: paymentMethodId },
          });
        } else {
          logger.info("Creating new customer");
          customer = await stripe.customers.create({
            email: customerData.email,
            name: customerData.name || undefined,
            phone: customerData.phone || undefined,
            address: customerData.businessAddress
              ? { line1: customerData.businessAddress }
              : undefined,
            payment_method: paymentMethodId,
            invoice_settings: { default_payment_method: paymentMethodId },
          });
          logger.info(`Created new customer: ${customer.id}`);
        }
      } catch (error) {
        logger.error("Error creating/updating customer:", error);
        throw new HttpsError(
          "internal",
          `Error with customer: ${error.message}`,
        );
      }

      // Retrieve price information
      logger.info("Retrieving price information");
      let price;
      try {
        price = await stripe.prices.retrieve(priceId);
        logger.info(
          `Retrieved price: ${price.id}, amount: ${price.unit_amount}`,
        );
      } catch (error) {
        logger.error("Error retrieving price:", error);
        throw new HttpsError(
          "not-found",
          `Price ID ${priceId} not found: ${error.message}`,
        );
      }

      // Create payment intent
      logger.info("Creating payment intent");
      let paymentIntent;
      try {
        paymentIntent = await stripe.paymentIntents.create({
          amount: price.unit_amount,
          currency: price.currency,
          customer: customer.id,
          payment_method: paymentMethodId,
          description: `Subscription: ${
            packageName || "Professional GBP Management"
          }`,
          setup_future_usage: "off_session",
          confirm: false,
          metadata: {
            price_id: priceId,
          },
        });
        logger.info(
          `Payment intent created: ${paymentIntent.id}, status: ${paymentIntent.status}`,
        );
      } catch (error) {
        logger.error("Error creating payment intent:", error);
        throw new HttpsError(
          "internal",
          `Error creating payment: ${error.message}`,
        );
      }

      // Create subscription
      logger.info("Creating subscription");
      let subscription;
      try {
        subscription = await stripe.subscriptions.create({
          customer: customer.id,
          items: [{ price: priceId }],
          default_payment_method: paymentMethodId,
          metadata: {
            payment_intent_id: paymentIntent.id,
          },
        });
        logger.info(
          `Subscription created: ${subscription.id}, status: ${subscription.status}`,
        );
      } catch (error) {
        logger.error("Error creating subscription:", error);
        throw new HttpsError(
          "internal",
          `Error creating subscription: ${error.message}`,
        );
      }

      // Store customer data in Firestore
      logger.info("Storing customer data in Firestore");
      try {
        await admin
          .firestore()
          .collection("customers")
          .doc(customer.id)
          .set({
            businessAddress: customerData.businessAddress || "",
            businessName: customerData.businessName || "",
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
            email: customerData.email,
            name: customerData.name,
            package: packageName || "Professional GBP Management",
            paymentMethodId: paymentMethodId,
            phone: customerData.phone || "",
            price: packagePrice || 150,
            subscriptionId: subscription.id,
            website: customerData.website || "",
            status: subscription.status,
            ...(request.auth?.uid ? { userId: request.auth.uid } : {}),
          });
        logger.info("Customer data stored in Firestore");
      } catch (error) {
        logger.error("Error storing customer data:", error);
        // Continue anyway - this is not critical for subscription creation
      }

      // Store subscription data if authenticated
      if (request.auth?.uid) {
        logger.info(
          "Storing subscription data in Firestore for authenticated user",
        );
        try {
          await admin
            .firestore()
            .collection("subscriptions")
            .doc(subscription.id)
            .set({
              userId: request.auth.uid,
              customerId: customer.id,
              status: subscription.status,
              priceId: priceId,
              paymentIntentId: paymentIntent.id,
              currentPeriodEnd: new Date(
                subscription.current_period_end * 1000,
              ),
              createdAt: admin.firestore.FieldValue.serverTimestamp(),
            });
          logger.info("Subscription data stored in Firestore");
        } catch (error) {
          logger.error("Error storing subscription data:", error);
          // Continue anyway - this is not critical for subscription creation
        }
      }

      // Send email notification
      logger.info("Sending email notification");
      const subscriptionDetails = {
        packageName: packageName || "Professional GBP Management",
        packagePrice: packagePrice || 150,
        subscriptionId: subscription.id,
        status: subscription.status,
        paymentIntentId: paymentIntent.id,
      };

      try {
        const emailSent = await sendSubscriptionEmail(
          customerData,
          subscriptionDetails,
        );
        if (!emailSent) {
          logger.warn("Could not send subscription notification email");
        } else {
          logger.info("Email notification sent successfully");
        }
      } catch (error) {
        logger.error("Error in email sending process:", error);
        // Don't fail the function if email sending fails
      }

      // Return success
      logger.info("Function completed successfully");
      return {
        clientSecret: paymentIntent.client_secret,
        subscriptionId: subscription.id,
        status: subscription.status,
        intentStatus: paymentIntent.status,
      };
    } catch (error) {
      logger.error("Error in createSubscription function:", error);
      throw new HttpsError(
        error.code || "internal",
        error.message || "An unknown error occurred",
      );
    }
  },
);

// Health check function with secrets access
exports.healthCheck = onCall(
  {
    region: "us-central1",
    timeoutSeconds: 10,
    secrets: ["STRIPE_SECRET_KEY", "EMAIL_USER", "EMAIL_PASS"], // Add this line
  },
  async (request) => {
    logger.info("Health check function called");

    // Check if Stripe key is set
    const hasStripeKey = Boolean(process.env.STRIPE_SECRET_KEY);
    logger.info(`Stripe key available: ${hasStripeKey}`);

    // Check other variables
    const hasEmailUser = Boolean(process.env.EMAIL_USER);
    const hasEmailPass = Boolean(process.env.EMAIL_PASS);

    return {
      status: "ok",
      timestamp: new Date().toISOString(),
      config: {
        hasStripeKey,
        hasEmailUser,
        hasEmailPass,
        stripeKeyPrefix: hasStripeKey
          ? process.env.STRIPE_SECRET_KEY.substring(0, 5) + "..."
          : "Not found",
      },
    };
  },
);
