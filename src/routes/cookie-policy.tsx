import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Abax Professional Services" },
      { name: "description", content: "Learn how Abax Professional Services uses cookies on our website." },
    ],
  }),
  component: CookiePolicyPage,
});

function CookiePolicyPage() {
  return (
    <section className="pt-44 pb-28 bg-background">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#F5C518]" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Legal</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl mb-10">Cookie Policy</h1>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <p>This website uses cookies to enhance user experience and analyze performance.</p>

            <div>
              <h2 className="font-display text-xl text-[#0D1B3E] mb-3">What are cookies?</h2>
              <p>Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and understand how you interact with our content.</p>
            </div>

            <div>
              <h2 className="font-display text-xl text-[#0D1B3E] mb-3">Types of cookies we use</h2>
              <ul className="space-y-3">
                {[
                  { name: "Essential cookies", desc: "Required for the website to function properly. These cannot be disabled." },
                  { name: "Analytics cookies", desc: "Help us understand how visitors interact with our site so we can improve it." },
                  { name: "Marketing cookies", desc: "Optional cookies used to deliver relevant content and measure campaign effectiveness." },
                ].map((c) => (
                  <li key={c.name} className="flex gap-3 items-start">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#F5C518] shrink-0" />
                    <span><span className="font-medium text-[#0D1B3E]">{c.name}</span> — {c.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl text-[#0D1B3E] mb-3">Your choices</h2>
              <p>You can accept or reject non-essential cookies at any time from the cookie banner shown at the bottom of our website. Rejecting non-essential cookies will not affect your ability to use the site.</p>
            </div>

            <div>
              <h2 className="font-display text-xl text-[#0D1B3E] mb-3">Contact us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at{" "}
                <a href="mailto:info@abaxps.com" className="text-[#1B3FA0] underline hover:text-[#F5C518] transition-colors">
                  info@abaxps.com
                </a>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}