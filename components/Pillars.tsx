"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "./Motion";
import { Braces, Compass, GraduationCap, Heart } from "lucide-react";

const pillars = [
  {
    Icon: GraduationCap,
    title: "Learn together",
    body: "Weekly circles, workshops and bootcamps, all led by senior members who share what they know instead of gatekeeping.",
    stat: "6 programs",
    tone: "bg-brand/15 text-ink",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80",
  },
  {
    Icon: Braces,
    title: "Build in public",
    body: "Members ship real projects at IKTC — demo nights, hackathons and the annual conference stage put craft on display.",
    stat: "84 events / year",
    tone: "bg-ink text-canvas",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
  },
  {
    Icon: Compass,
    title: "Grow careers",
    body: "One-on-one mentorship, portfolio critique and hiring intros to some of Africa's most technical teams.",
    stat: "96% placed",
    tone: "bg-canvas border border-line text-ink",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
  },
  {
    Icon: Heart,
    title: "Give back",
    body: "Scholarships for students, laptop rentals, and free entry to almost everything we run. Community, not extraction.",
    stat: "₦8.4M in support",
    tone: "bg-ink text-canvas",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function Pillars() {
  return (
    <section className="section">
      <div className="container">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">Our pillars</span>
            <h2 className="h-display mt-3 text-4xl md:text-5xl leading-tight text-ink">
              Four things we care about, in equal measure.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {pillars.map(({ Icon, title, body, stat, tone, image }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden rounded-3xl p-8 md:p-10 min-h-[380px] flex flex-col justify-between ${tone}`}
            >
              <div>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-canvas text-ink">
                  <Icon size={22} />
                </div>
                <h3 className="mt-8 h-display text-3xl leading-tight">{title}</h3>
                <p className="mt-4 opacity-80 max-w-md leading-relaxed">{body}</p>
              </div>
              <div className="flex items-end justify-between gap-4 mt-8">
                <span className="font-mono text-xs uppercase tracking-widest opacity-70">
                  {stat}
                </span>
                <div className="relative h-24 w-40 rounded-xl overflow-hidden opacity-90">
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
