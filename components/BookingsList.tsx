"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, MapPin, Ticket, Trash2, ArrowUpRight, Copy } from "lucide-react";
import { getBookings, removeBooking } from "@/lib/bookings";
import type { Booking } from "@/lib/types";
import { formatEventDate, formatEventTime, formatNaira, getEvent } from "@/lib/events";

export default function BookingsList() {
  const [bookings, setBookings] = useState<Booking[] | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    setBookings(getBookings());
  }, []);

  const onRemove = (id: string) => {
    removeBooking(id);
    setBookings(getBookings());
  };

  const copy = (b: Booking) => {
    navigator.clipboard.writeText(b.reference).then(() => {
      setCopiedId(b.id);
      setTimeout(() => setCopiedId(null), 1500);
    });
  };

  if (bookings === null) {
    return (
      <div className="card p-10">
        <p className="text-ink/60 text-sm">Loading your bookings…</p>
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <div className="card p-14 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-ink text-canvas">
          <Ticket size={22} />
        </div>
        <h2 className="mt-6 h-display text-2xl md:text-3xl text-ink">
          You have no bookings yet.
        </h2>
        <p className="mt-3 text-ink/60 max-w-md mx-auto">
          When you reserve a seat, it&rsquo;ll show up here with a reference code
          you can present at the door.
        </p>
        <div className="mt-6">
          <Link href="/events" className="btn-primary">
            Browse events <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <AnimatePresence>
        {bookings.map((b) => {
          const event = getEvent(b.eventSlug);
          return (
            <motion.div
              key={b.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="card p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="chip">{b.ticketType} · {b.tickets}×</span>
                <button
                  onClick={() => onRemove(b.id)}
                  className="grid h-9 w-9 place-items-center rounded-full text-ink/60 hover:bg-ink hover:text-canvas transition"
                  aria-label="Remove booking"
                >
                  <Trash2 size={15} />
                </button>
              </div>
              <h3 className="mt-4 h-display text-xl text-ink leading-snug">
                {b.eventTitle}
              </h3>
              <div className="mt-3 space-y-1.5 text-sm text-ink/70">
                <p className="inline-flex items-center gap-2">
                  <Calendar size={14} className="text-brand" />
                  {formatEventDate(b.eventDate)} · {formatEventTime(b.eventDate)}
                </p>
                {event && (
                  <p className="inline-flex items-center gap-2">
                    <MapPin size={14} className="text-brand" />
                    {event.location}
                  </p>
                )}
              </div>

              <div className="mt-5 flex items-center justify-between rounded-xl bg-canvas border border-line p-3">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-ink/50">Reference</p>
                  <p className="font-mono text-sm text-ink">{b.reference}</p>
                </div>
                <button
                  onClick={() => copy(b)}
                  className="grid h-8 w-8 place-items-center rounded-full border border-ink/15 hover:bg-ink hover:text-canvas transition"
                  aria-label="Copy reference"
                >
                  <Copy size={13} />
                </button>
              </div>
              {copiedId === b.id && (
                <p className="mt-2 text-xs text-brand">Reference copied.</p>
              )}

              <div className="mt-5 flex items-center justify-between text-sm">
                <p className="text-ink/60">Total paid</p>
                <p className="font-semibold text-ink">{formatNaira(b.totalPaid)}</p>
              </div>

              {event && (
                <Link
                  href={`/events/${event.slug}`}
                  className="mt-5 btn-outline w-full"
                >
                  View event <ArrowUpRight size={14} />
                </Link>
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
