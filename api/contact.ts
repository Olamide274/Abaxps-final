import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name, email, organisation, message } = req.body;

  if (!name || !email || !message || message.length < 5) {
    return res.status(400).json({ error: "Please fill in your name, email, and a short message." });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT) || 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    console.warn("[ContactForm] SMTP env vars not set. Message:", { name, email, organisation, message });
    return res.status(200).json({ ok: true });
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Abax Website" <${user}>`,
      to: "info@abaxps.com",
      replyTo: `"${name}" <${email}>`,
      subject: `New enquiry from ${name}${organisation ? ` (${organisation})` : ""}`,
      text: `Name: ${name}\nEmail: ${email}\nOrganisation: ${organisation || "—"}\n\nMessage:\n${message}`,
      html: `
        <table style="font-family:sans-serif;font-size:15px;color:#1a1a1a;width:100%;max-width:600px;">
          <tr><td style="padding:24px 0 8px;border-bottom:2px solid #1B3FA0;">
            <strong style="font-size:18px;color:#1B3FA0;">New website enquiry</strong>
          </td></tr>
          <tr><td style="padding:16px 0 4px;"><strong>Name:</strong> ${name}</td></tr>
          <tr><td style="padding:4px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:4px 0 16px;"><strong>Organisation:</strong> ${organisation || "—"}</td></tr>
          <tr><td style="padding:16px 0;border-top:1px solid #C8D4F5;white-space:pre-wrap;">${message.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</td></tr>
          <tr><td style="padding:16px 0 0;font-size:12px;color:#888;">Sent from the Abax Professional Services website contact form.</td></tr>
        </table>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[ContactForm] SMTP error:", err);
    return res.status(500).json({ error: "We couldn't send your message right now. Please try again shortly." });
  }
}
