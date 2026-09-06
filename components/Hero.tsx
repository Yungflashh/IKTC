"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-lines opacity-60" />
      <div className="absolute -top-32 -right-40 -z-10 h-[520px] w-[520px] rounded-full bg-brand/25 blur-3xl" />
      <div className="container pt-8 pb-24 md:pt-14 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="chip">
                A community for African tech builders
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="h-display mt-6 text-[44px] sm:text-6xl lg:text-7xl leading-[0.98] tracking-tightest text-ink"
            >
              Where Ikorodu&rsquo;s brightest minds
              <span className="relative inline-block ml-3">
                <span className="relative z-10">ship</span>
                <span className="absolute inset-x-0 -bottom-1 h-3 bg-brand/60 -z-0 rounded-sm" />
              </span>{" "}
              the future.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.2 }}
              className="mt-7 max-w-xl text-lg text-ink/70 leading-relaxed"
            >
              Ikorodu Tech Community (IKTC) is a home for engineers, designers,
              product builders and student technologists. We run meetups,
              bootcamps and hackathons that push African tech talent forward — every
              month, in one place.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link href="/events" className="btn-primary">
                Book an event
                <ArrowUpRight size={16} />
              </Link>
              <Link href="/about" className="btn-outline">
                <Play size={14} /> Watch our story
              </Link>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.4 }}
              className="mt-10 grid grid-cols-3 gap-4 max-w-lg"
            >
              {[
                { k: "Since", v: "2021" },
                { k: "Chapters", v: "9" },
                { k: "Alumni hired", v: "480+" },
              ].map((s) => (
                <li key={s.k} className="border-l-2 border-brand pl-3">
                  <p className="h-display text-2xl text-ink leading-none">{s.v}</p>
                  <p className="text-xs text-ink/60 mt-1">{s.k}</p>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-6 text-sm text-ink/60"
            >
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
                  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
                  "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=200&q=80",
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
                ].map((src, i) => (
                  <span
                    key={i}
                    className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-canvas"
                  >
                    <Image
                      src={src}
                      alt="Member"
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </span>
                ))}
              </div>
              <p>
                <b className="text-ink">3,200+ members</b> · rated{" "}
                <b className="text-ink">4.9</b> by attendees
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
                  alt="Community meetup"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-ink/10" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6, ease }}
                className="absolute -left-4 lg:-left-10 top-8 card p-4 w-56"
              >
                <p className="eyebrow">Live now</p>
                <p className="mt-2 text-sm font-semibold text-ink leading-snug">
                  Registrations open for our October Bootcamp
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-ink/70">
                  <span className="h-2 w-2 rounded-full bg-brand animate-pulseDot" />
                  41 / 60 seats
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6, ease }}
                className="absolute -right-4 lg:-right-8 bottom-8 card p-4 w-64"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-canvas font-display font-semibold">
                    ₦2M
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">Prize pool</p>
                    <p className="text-xs text-ink/60">Ikorodu Hackathon 3.0</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
