import { NextResponse } from "next/server";

// ── ZeptoMail (Zoho) transactional email ──────────────────────────────
// Env vars (set these on the server that runs this route):
//   ZEPTOMAIL_TOKEN  – the "Send Mail" token from ZeptoMail (Mail Agent).
//                      Used as:  Authorization: Zoho-enczapikey <TOKEN>
//   ZEPTOMAIL_FROM   – a verified sender on your ZeptoMail domain,
//                      e.g. "noreply@oprimetech.com.ng"
//   CONTACT_TO       – inbox that receives submissions (default below)
//
// Data-centre note: default API host is .com. If your Zoho account is in
// the EU / IN / AU data centre, set ZEPTOMAIL_API_URL accordingly, e.g.
//   https://api.zeptomail.eu/v1.1/email
// ──────────────────────────────────────────────────────────────────────

const ZEPTO_URL =
  process.env.ZEPTOMAIL_API_URL || "https://api.zeptomail.com/v1.1/email";
const ZEPTO_TOKEN = process.env.ZEPTOMAIL_TOKEN;
const FROM_EMAIL = process.env.ZEPTOMAIL_FROM || "noreply@oprimetech.com.ng";
const TO_EMAIL = process.env.CONTACT_TO || "hello@oprimetech.com.ng";

const escapeHtml = (str = "") =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!ZEPTO_TOKEN) {
      console.error("ZEPTOMAIL_TOKEN is not set");
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

    const payload = {
      from: { address: FROM_EMAIL, name: "Oprime Tech Website" },
      to: [{ email_address: { address: TO_EMAIL, name: "Oprime Tech" } }],
      // Reply straight to the person who filled the form:
      reply_to: [{ address: email, name: email }],
      subject: `New enquiry — ${subject}`,
      htmlbody: `
        <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#1a1a1a;line-height:1.6">
          <h2 style="margin:0 0 16px">New contact form submission</h2>
          <p><strong>From:</strong> ${safeEmail}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space:pre-wrap">${safeMessage}</p>
          <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0"/>
          <p style="font-size:12px;color:#888">Sent from the oprimetech.com.ng contact form.</p>
        </div>
      `,
      textbody: `New contact form submission\n\nFrom: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    };

    const res = await fetch(ZEPTO_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Zoho-enczapikey ${ZEPTO_TOKEN}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("ZeptoMail error:", data);
      return NextResponse.json(
        { error: data?.message || "Failed to send email" },
        { status: res.status }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
