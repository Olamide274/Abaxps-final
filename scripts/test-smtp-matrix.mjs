import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const host = process.env.SMTP_HOST;
const userEnv = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;

if (!host || !userEnv || !pass) {
  console.error("Missing SMTP env vars. Set SMTP_HOST/SMTP_USER/SMTP_PASS in .env");
  process.exit(1);
}

const usernameVariants = [userEnv, userEnv.split("@")[0]];
const ports = [465, 587];
const authMethods = [undefined, "PLAIN", "LOGIN"];

for (const port of ports) {
  for (const user of usernameVariants) {
    for (const authMethod of authMethods) {
      const secure = port === 465;
      const opts = { host, port, secure, auth: { user, pass }, tls: { rejectUnauthorized: false } };
      if (authMethod) opts.authMethod = authMethod;

      console.log(`\nTrying host=${host} port=${port} user=${user} authMethod=${authMethod || "auto"} secure=${secure}`);

      const transporter = nodemailer.createTransport(opts);
      try {
        // verify() will attempt connection and auth
        // eslint-disable-next-line no-await-in-loop
        await transporter.verify();
        console.log("SUCCESS: verified with these settings");
        process.exit(0);
      } catch (err) {
        console.error("FAILED:", err && err.response ? err.response : err.message || err);
      }
    }
  }
}

console.error("All attempts failed.");
process.exit(2);
