import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_VUrEibTX_3Fc4fJDa5EMx4t7E8fUVGZPk");
const fromEmail = "info@oprimetech.com.ng";

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: fromEmail,
      to: fromEmail, // <-- your inbox (you’ll receive it here)
      subject: `New message from ${email}: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
