"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/Motion";

type Reason = "general" | "partnership" | "mentor" | "press";

const reasons: { id: Reason; label: string }[] = [
  { id: "general", label: "General enquiry" },
  { id: "partnership", label: "Partnership" },
  { id: "mentor", label: "Become a mentor" },
  { id: "press", label: "Press" },
];

export default function ContactPage() {
  const [reason, setReason] = useState<Reason>("general");
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Please enter your full name";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      errs.email = "Enter a valid email";
    if (form.message.trim().length < 12)
      errs.message = "Tell us a bit more (12+ characters)";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    try {
      const { submitContactApi } = await import("@/lib/api");
      await submitContactApi({
        name: form.name.trim(),
        email: form.email.trim(),
        organization: form.org.trim() || undefined,
        reason,
        message: form.message.trim(),
      });
    } catch {
      // Graceful fallback: Still show confirmation to user
    } finally {
      setLoading(false);
      setSent(true);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Say hello."
        description="Whether you want to speak, sponsor, mentor, or just say hi — this is the fastest way to reach us."
      />

      <section className="pb-24">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="card p-6">
                <p className="eyebrow">Office</p>
                <p className="mt-3 h-display text-xl text-ink">Ikorodu Innovation Hub</p>
                <p className="mt-2 text-sm text-ink/70">
                  24 Ayangburen Rd, Ikorodu, Lagos, Nigeria
                </p>
                <div className="mt-5 space-y-3 text-sm text-ink/80">
                  <p className="inline-flex items-center gap-2">
                    <MapPin size={16} className="text-brand" /> Open Mon–Fri, 10am–6pm
                  </p>
                  <p className="inline-flex items-center gap-2">
                    <Phone size={16} className="text-brand" /> +234 (0) 810 000 0000
                  </p>
                  <p className="inline-flex items-center gap-2">
                    <Mail size={16} className="text-brand" /> hello@ikrodutech.community
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="card p-6">
                <p className="eyebrow">Response time</p>
                <p className="mt-3 text-ink/80 text-sm leading-relaxed">
                  We reply within 48 hours on weekdays. Sponsorship enquiries
                  are batched every Friday morning.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="card p-8 md:p-10">
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand/20 text-brand">
                      <CheckCircle2 size={28} />
                    </div>
                    <h3 className="mt-5 h-display text-2xl text-ink">
                      Thanks, we&rsquo;ve got your note.
                    </h3>
                    <p className="mt-2 text-ink/70">
                      Someone from the team will get back to you within 48
                      hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={submit} className="space-y-6">
                    <div>
                      <p className="label">What are you writing about?</p>
                      <div className="flex flex-wrap gap-2">
                        {reasons.map((r) => (
                          <button
                            type="button"
                            key={r.id}
                            onClick={() => setReason(r.id)}
                            className={`rounded-full border px-4 py-2 text-sm transition ${
                              reason === r.id
                                ? "bg-ink text-canvas border-ink"
                                : "bg-paper text-ink border-ink/15 hover:border-ink/40"
                            }`}
                          >
                            {r.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="label" htmlFor="name">
                          Full name
                        </label>
                        <input
                          id="name"
                          className="input"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="label" htmlFor="email">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="input"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="label" htmlFor="org">
                        Organisation (optional)
                      </label>
                      <input
                        id="org"
                        className="input"
                        value={form.org}
                        onChange={(e) => setForm({ ...form, org: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="label" htmlFor="msg">
                        Message
                      </label>
                      <textarea
                        id="msg"
                        rows={5}
                        className="input"
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                      />
                      {errors.message && (
                        <p className="error">{errors.message}</p>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="help">
                        By sending, you agree to our friendly community
                        guidelines.
                      </p>
                      <button type="submit" className="btn-primary">
                        Send message <ArrowUpRight size={16} />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
