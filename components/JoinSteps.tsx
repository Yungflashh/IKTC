"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "./Motion";
import { UserPlus, CalendarCheck, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    Icon: UserPlus,
    n: "01",
    title: "Create your profile",
    body: "Tell us who you are, what you build, and what you want to learn next. Takes ninety seconds.",
  },
  {
    Icon: CalendarCheck,
    n: "02",
    title: "Book your first event",
    body: "Pick a meetup, workshop or bootcamp. Free events are one click; paid events take four.",
  },
  {
    Icon: Rocket,
    n: "03",
    title: "Show up and ship",
    body: "Meet the room, get plugged into a circle, start building. That's the whole loop.",
  },
];

export default function JoinSteps() {
  return (
    <section className="section bg-ink text-canvas rounded-t-[2.5rem]">
      <div className="container">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow text-canvas/60">Join in 3 steps</span>
            <h2 className="h-display mt-3 text-4xl md:text-5xl leading-tight">
              From lurker to member in an afternoon.
            </h2>
            <p className="mt-4 text-canvas/70">
              We keep the onboarding light on purpose. The real membership
              begins the first time you show up.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl border border-canvas/15 p-8 hover:border-brand transition"
            >
              <span className="font-mono text-xs text-canvas/50">{s.n}</span>
              <div className="mt-6 grid h-12 w-12 place-items-center rounded-xl bg-brand text-ink">
                <s.Icon size={22} />
              </div>
              <h3 className="mt-6 h-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-canvas/70 leading-relaxed">{s.body}</p>
              {i < steps.length - 1 && (
                <ArrowRight
                  size={18}
                  className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-brand"
                />
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <Link href="/events" className="btn-primary">
            Start with an event <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="btn border border-canvas/25 text-canvas hover:bg-canvas hover:text-ink"
          >
            Ask us anything
          </Link>
        </div>
      </div>
    </section>
  );
}
