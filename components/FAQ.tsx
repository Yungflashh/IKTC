"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, HelpCircle } from "lucide-react";
import { Reveal } from "./Motion";
import Link from "next/link";

const faqs = [
  {
    q: "Do I need to be a professional developer to join?",
    a: "Not at all. IKTC welcomes students, self-taught learners, designers, product folks and everyone curious about building software. What matters is that you show up, stay kind, and are willing to learn in public.",
  },
  {
    q: "How much does membership cost?",
    a: "Membership is free. Some events (bootcamps, hackathons, conference) have a ticket price to cover venue, food and materials — but students and scholarship recipients pay nothing.",
  },
  {
    q: "Where do you meet?",
    a: "Most events are hosted at Ikorodu Innovation Hub (24 Ayangburen Rd) or the IKTC Learning Loft (12 Owutu Rd). We occasionally take over larger venues for the hackathon and annual conference.",
  },
  {
    q: "How do I get into the weekly circles?",
    a: "Cohorts open every 8 weeks. There's a short form (about you, your goals, your current level) — no CVs, no code tests. We select by consistency and fit, not credentials.",
  },
  {
    q: "Can my company sponsor or partner?",
    a: "Yes. We work with sponsors that genuinely care about African tech talent. Email hello@ikorodutech.community with what you have in mind — we reply within 48 hours.",
  },
  {
    q: "Do you have a code of conduct?",
    a: "Yes. IKTC is a place for warmth, craft and honest feedback. Harassment, gatekeeping or bad faith isn't tolerated. Our code of conduct is linked in the footer.",
  },
  {
    q: "Do you offer online-only participation?",
    a: "Our talks are streamed and archived on YouTube. Circles and workshops are in-person only — the room is a big part of the value.",
  },
  {
    q: "What if I'm outside Ikorodu?",
    a: "Come anyway. We have members from across Lagos, Ogun and even remote members who fly in for the hackathon and annual conference.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <Reveal>
            <span className="eyebrow">
              <HelpCircle size={14} className="text-brand" /> FAQ
            </span>
            <h2 className="h-display mt-3 text-4xl md:text-5xl leading-tight text-ink">
              Everything you might ask before joining.
            </h2>
            <p className="mt-4 text-ink/70">
              Can&rsquo;t find your answer? We&rsquo;re a small team but we
              reply personally.
            </p>
            <Link href="/contact" className="mt-6 btn-outline w-fit">
              Contact us
            </Link>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <ul className="divide-y divide-line rounded-2xl border border-line bg-paper overflow-hidden">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-6 text-left px-6 py-5 hover:bg-canvas/50 transition"
                  >
                    <span className="font-display text-lg text-ink leading-snug">
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="mt-1 grid h-8 w-8 place-items-center rounded-full bg-ink text-canvas shrink-0"
                    >
                      <Plus size={16} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-ink/75 leading-relaxed">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
