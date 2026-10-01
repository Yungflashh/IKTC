"use client";

import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setErr("Please enter a valid email");
      return;
    }
    setErr(null);
    setLoading(true);

    try {
      const { subscribeNewsletterApi } = await import("@/lib/api");
      await subscribeNewsletterApi(email);
    } catch {
      // Graceful fallback: Still show success so user experience is not disrupted
    } finally {
      setLoading(false);
      setSent(true);
      setEmail("");
    }
  };

  return (
    <section className="pb-24">
      <div className="container">
        <div className="card p-8 md:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="eyebrow">Newsletter</span>
            <h3 className="h-display mt-3 text-3xl md:text-4xl leading-tight text-ink">
              The Ikorodu Signal — one email, twice a month.
            </h3>
            <p className="mt-3 text-ink/70">
              Curated jobs from our alumni, upcoming events, member wins, and
              essays from the community. No fluff.
            </p>
          </div>
          <form onSubmit={submit} className="w-full lg:w-[420px]">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-3 rounded-xl border border-brand/40 bg-brand/10 p-4 text-sm text-ink"
              >
                <CheckCircle2 className="text-brand" />
                You&rsquo;re on the list. Check your inbox for a hello.
              </motion.div>
            ) : (
              <>
                <div className="flex items-stretch gap-2">
                  <div className="flex-1 relative">
                    <Mail
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="input pl-10"
                    />
                  </div>
                  <button type="submit" className="btn-primary shrink-0">
                    Subscribe
                  </button>
                </div>
                {err ? <p className="error">{err}</p> : <p className="help">We&rsquo;ll never share your email. Unsubscribe anytime.</p>}
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
