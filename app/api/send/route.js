import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_EMAIL_PASS, // If you have two-factor authentication enabled, use the App Password here
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: "tomatkochi@gmail.com",
      to: "chayie.tom@gmail.com",
      subject: "New Contact Form Submission",
      html: data.content,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}
