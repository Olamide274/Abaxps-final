// Local dev server - mimics Vercel API functions
import express from "express";
import nodemailer from "nodemailer";
import { createServer as createViteServer } from "vite";
import { config } from "dotenv";

config(); // load .env

const app = express();
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, organisation, message } = req.body;

  if (!name || !email || !message || message.length < 5) {
    return res.status(400).json({ error: "Please fill in your name, email, and a short message." });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT) || 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    console.warn("[ContactForm] SMTP env vars not set. Would have sent:", { name, email, organisation, message });
    return res.status(200).json({ ok: true });
  }

  try {
    const transporter = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } });
    await transporter.sendMail({
      from: `"Abax Website" <${user}>`,
      to: "info@abaxps.com",
      replyTo: `"${name}" <${email}>`,
      subject: `New enquiry from ${name}${organisation ? ` (${organisation})` : ""}`,
      text: `Name: ${name}\nEmail: ${email}\nOrganisation: ${organisation || "—"}\n\nMessage:\n${message}`,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[ContactForm] SMTP error:", err);
    return res.status(500).json({ error: "We couldn't send your message right now." });
  }
});

// Start Vite dev server and attach it
const vite = await createViteServer({ server: { middlewareMode: true } });
app.use(vite.middlewares);

app.listen(5173, () => {
  console.log("Dev server running at http://localhost:5173");
});
