"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import EventCard from "./EventCard";
import { events } from "@/lib/events";
import type { EventCategory, EventItem } from "@/lib/types";

const categories: (EventCategory | "All")[] = [
  "All",
  "Meetup",
  "Workshop",
  "Bootcamp",
  "Hackathon",
  "Fireside",
  "Conference",
];

export default function EventsListing() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo<EventItem[]>(() => {
    const now = Date.now();
    return events
      .filter((e) => (cat === "All" ? true : e.category === cat))
      .filter((e) => {
        if (!q.trim()) return true;
        const hay = `${e.title} ${e.tagline} ${e.tags.join(" ")}`.toLowerCase();
        return hay.includes(q.toLowerCase());
      })
      .sort((a, b) => {
        const at = new Date(a.date).getTime();
        const bt = new Date(b.date).getTime();
        const aUp = at >= now;
        const bUp = bt >= now;
        if (aUp && !bUp) return -1;
        if (!aUp && bUp) return 1;
        return at - bt;
      });
  }, [q, cat]);

  return (
    <section className="pb-24">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  cat === c
                    ? "bg-ink text-canvas border-ink"
                    : "bg-paper text-ink border-ink/15 hover:border-ink/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-80">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40"
            />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search events, tags, speakers..."
              className="input pl-10"
            />
          </div>
        </div>

        <div className="mt-10">
          {filtered.length === 0 ? (
            <div className="card p-14 text-center">
              <p className="h-display text-2xl text-ink">No events match that filter.</p>
              <p className="mt-2 text-ink/60">Try a different category or search term.</p>
            </div>
          ) : (
            <AnimatePresence mode="popLayout">
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((e) => (
                  <motion.div
                    key={e.slug}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <EventCard event={e} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
}
