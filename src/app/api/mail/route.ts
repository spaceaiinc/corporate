import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, content } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: "hidenariyuda@gmail.com",
    subject: "問い合わせ",
    text: `NAME：${name}\n\nEMAIL:${email}\n\n
      お問い合わせありがとうございます。\n3営業日以内にご返信いたします。\n\n\nDear ${name},\n\nThank you for your inquiry. We will contact you as soon as possible.\n\nBest regards,\n\nSpaceAI\n\n\nContent:\n${content}`,
  };

  const mailOptionsToUser = {
    from: process.env.EMAIL_ADDRESS,
    to: email,
    subject: "お問い合わせありがとうございます / Thank you for your inquiry",
    text: `お問い合わせありがとうございます。\n3営業日以内にご返信いたします。\n\n\nDear ${name},\n\nThank you for your inquiry. We will contact you as soon as possible.\n\nBest regards,\n\nSpaceAI\n\n\nContent:\n${content}`,
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
