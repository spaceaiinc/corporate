import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { email, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const content = `Thank you for your inquiry. We will contact you as soon as possible.\n\nBest regards,\n\nSpaceAI\n\n\nSent Content:\n${subject}\n\n${message}`;

  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: "hidenariyuda@gmail.com",
    subject: "Inquiry from SpaceAI Website",
    text: `EMAIL:${email}\n\nMESSAGE:\n${message}`,
  };

  const mailOptionsToUser = {
    from: process.env.EMAIL_ADDRESS,
    to: email,
    subject: "Thank you for your inquiry",
    text: content,
    // text: `お問い合わせありがとうございます。\n3営業日以内にご返信いたします。\n\n,\n\nThank you for your inquiry. We will contact you as soon as possible.\n\nBest regards,\n\nSpaceAI\n\n\nContent:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(mailOptionsToUser);
    return NextResponse.json({ message: "success" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error" });
  }
}
