import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const host = process.env.SMTP_HOST;
const port = Number(process.env.SMTP_PORT) || 465;
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;

if (!host || !user || !pass) {
  console.error("Missing SMTP env vars. Check .env for SMTP_HOST/SMTP_USER/SMTP_PASS");
  process.exit(1);
}

console.log(`Testing SMTP connection to ${host}:${port} as ${user}...`);

const transporter = nodemailer.createTransport({
  host,
  port,
  secure: port === 465,
  auth: { user, pass },
  tls: { rejectUnauthorized: false },
});

try {
  await transporter.verify();
  console.log("SMTP connection verified — credentials accepted.");
} catch (err) {
  console.error("SMTP verify failed:", err);
  if (err && err.response) console.error("Server response:", err.response);
  process.exit(2);
}

// Uncomment to actually send a small test message (optional)
/*
try {
  const info = await transporter.sendMail({
    from: `Test <${user}>`,
    to: user,
    subject: "SMTP test",
    text: "This is a test message from scripts/test-smtp.mjs",
  });
  console.log("Test message sent:", info.messageId);
} catch (sendErr) {
  console.error("Send failed:", sendErr);
}
*/

process.exit(0);
