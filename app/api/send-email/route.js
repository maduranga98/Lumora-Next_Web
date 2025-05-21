// app/api/send-email/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, service, message } = data;

    // Simple validation
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create a transporter for Gmail
    // NOTE: For production, you should use an App Password for Gmail
    // or a dedicated email service like SendGrid, Mailgun, AWS SES, etc.
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Configure in .env.local
        pass: process.env.EMAIL_PASS, // App password, not regular password
      },
    });

    // Compose email content with HTML formatting
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "lumoraventures@gmail.com",
      subject: `New Contact Form Submission: ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service}</p>
          <h3 style="margin-top: 20px; color: #4b5563;">Message:</h3>
          <p style="background-color: #f9fafb; padding: 15px; border-radius: 5px; white-space: pre-line;">${message}</p>
          <p style="margin-top: 30px; font-size: 0.9em; color: #6b7280;">This message was sent from the Lumora Ventures contact form.</p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
