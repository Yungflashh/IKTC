"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Ticket,
  User2,
  Utensils,
  Copy,
  Calendar,
  MapPin,
} from "lucide-react";
import type { EventItem, Booking } from "@/lib/types";
import { formatEventDate, formatEventTime, formatNaira } from "@/lib/events";
import { generateReference, saveBooking } from "@/lib/bookings";

type TicketType = Booking["ticketType"];

const ticketOptions: {
  id: TicketType;
  label: string;
  multiplier: number;
  desc: string;
}[] = [
  { id: "General", label: "General", multiplier: 1, desc: "Standard entry, everything included." },
  { id: "Student", label: "Student", multiplier: 0.5, desc: "50% off — bring student ID at the door." },
  { id: "VIP", label: "VIP", multiplier: 2, desc: "Front row, dinner with speakers, IKTC swag." },
];

const steps = [
  { id: 1, label: "Attendee", Icon: User2 },
  { id: 2, label: "Tickets", Icon: Ticket },
  { id: 3, label: "Extras", Icon: Utensils },
  { id: 4, label: "Payment", Icon: CreditCard },
];

export default function BookingForm({ event }: { event: EventItem }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    ticketType: "General" as TicketType,
    tickets: 1,
    dietary: "",
    notes: "",
    paymentMethod: "card" as "card" | "transfer" | "atDoor",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmed, setConfirmed] = useState<Booking | null>(null);
  const [copied, setCopied] = useState(false);

  const unit = useMemo(() => {
    const opt = ticketOptions.find((t) => t.id === form.ticketType)!;
    return Math.round(event.price * opt.multiplier);
  }, [event.price, form.ticketType]);

  const subtotal = unit * form.tickets;
  const fee = event.price === 0 ? 0 : Math.round(subtotal * 0.03);
  const total = subtotal + fee;

  const validateStep = (target: number): boolean => {
    const errs: Record<string, string> = {};
    if (target > 1) {
      if (!form.fullName.trim()) errs.fullName = "Please enter your full name";
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
        errs.email = "Enter a valid email";
      if (!/^\+?[0-9\s-]{7,}$/.test(form.phone))
        errs.phone = "Enter a valid phone number";
    }
    if (target > 2) {
      if (form.tickets < 1 || form.tickets > 6)
        errs.tickets = "1–6 tickets per booking";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const next = () => {
    if (validateStep(step + 1)) setStep((s) => Math.min(4, s + 1));
  };
  const back = () => setStep((s) => Math.max(1, s - 1));

  const finalize = () => {
    if (!validateStep(4)) return;
    const booking: Booking = {
      id: crypto.randomUUID(),
      eventSlug: event.slug,
      eventTitle: event.title,
      eventDate: event.date,
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      tickets: form.tickets,
      ticketType: form.ticketType,
      dietary: form.dietary.trim() || undefined,
      notes: form.notes.trim() || undefined,
      createdAt: new Date().toISOString(),
      totalPaid: total,
      reference: generateReference(),
    };
    saveBooking(booking);
    setConfirmed(booking);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyRef = () => {
    if (!confirmed) return;
    navigator.clipboard.writeText(confirmed.reference).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  };

  if (confirmed) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="card p-8 md:p-12"
      >
        <div className="text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand/20 text-brand">
            <CheckCircle2 size={32} />
          </div>
          <h2 className="mt-6 h-display text-3xl md:text-4xl text-ink">
            You&rsquo;re in, {confirmed.fullName.split(" ")[0]}!
          </h2>
          <p className="mt-3 text-ink/70 max-w-md mx-auto">
            We&rsquo;ve sent a confirmation email to <b>{confirmed.email}</b>.
            Show the reference below at the door.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-line bg-canvas p-6">
            <p className="eyebrow">Reference</p>
            <div className="mt-3 flex items-center gap-3">
              <p className="font-mono text-2xl text-ink">{confirmed.reference}</p>
              <button
                type="button"
                onClick={copyRef}
                className="grid h-9 w-9 place-items-center rounded-full border border-ink/15 hover:bg-ink hover:text-canvas transition"
                aria-label="Copy reference"
              >
                <Copy size={14} />
              </button>
            </div>
            {copied && <p className="mt-2 text-xs text-brand">Copied.</p>}

            <div className="mt-6 space-y-3 text-sm text-ink/80">
              <p className="inline-flex items-center gap-2">
                <Calendar size={14} className="text-brand" />
                {formatEventDate(confirmed.eventDate)} · {formatEventTime(confirmed.eventDate)}
              </p>
              <p className="inline-flex items-center gap-2">
                <MapPin size={14} className="text-brand" />
                {event.location}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-canvas p-6">
            <p className="eyebrow">Order summary</p>
            <dl className="mt-3 text-sm space-y-2">
              <div className="flex justify-between">
                <dt className="text-ink/60">Event</dt>
                <dd className="text-ink font-medium text-right">{confirmed.eventTitle}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink/60">Tickets</dt>
                <dd className="text-ink">
                  {confirmed.tickets} × {confirmed.ticketType}
                </dd>
              </div>
              <div className="flex justify-between border-t border-line pt-3 mt-3">
                <dt className="text-ink/60">Total paid</dt>
                <dd className="text-ink font-semibold">{formatNaira(confirmed.totalPaid)}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/bookings" className="btn-dark">View my bookings</Link>
          <Link href="/events" className="btn-outline">Book another event</Link>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-8">
        <div className="card p-6 md:p-10">
          {/* Stepper */}
          <ol className="flex items-center gap-2 md:gap-4 mb-8 flex-wrap">
            {steps.map(({ id, label, Icon }, idx) => (
              <li key={id} className="flex items-center gap-2">
                <span
                  className={`grid h-8 w-8 place-items-center rounded-full text-xs font-semibold ${
                    step === id
                      ? "bg-ink text-canvas"
                      : step > id
                      ? "bg-brand text-ink"
                      : "bg-ink/10 text-ink/60"
                  }`}
                >
                  {step > id ? <CheckCircle2 size={14} /> : <Icon size={14} />}
                </span>
                <span
                  className={`text-sm ${
                    step === id ? "font-semibold text-ink" : "text-ink/60"
                  }`}
                >
                  {label}
                </span>
                {idx < steps.length - 1 && (
                  <span className="mx-1 hidden md:inline-block h-px w-8 bg-line" />
                )}
              </li>
            ))}
          </ol>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <h2 className="h-display text-2xl text-ink">
                      Who&rsquo;s attending?
                    </h2>
                    <p className="text-sm text-ink/60 mt-1">
                      We use these details to check you in.
                    </p>
                  </div>
                  <div>
                    <label htmlFor="fn" className="label">Full name</label>
                    <input
                      id="fn"
                      className="input"
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    />
                    {errors.fullName && <p className="error">{errors.fullName}</p>}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="em" className="label">Email</label>
                      <input
                        id="em"
                        type="email"
                        className="input"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                      {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="ph" className="label">Phone</label>
                      <input
                        id="ph"
                        className="input"
                        placeholder="+234"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                      {errors.phone && <p className="error">{errors.phone}</p>}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="h-display text-2xl text-ink">Pick your ticket</h2>
                    <p className="text-sm text-ink/60 mt-1">
                      Up to 6 tickets per booking.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {ticketOptions.map((t) => {
                      const price = Math.round(event.price * t.multiplier);
                      const selected = form.ticketType === t.id;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setForm({ ...form, ticketType: t.id })}
                          className={`text-left rounded-2xl border p-5 transition ${
                            selected
                              ? "border-ink bg-ink text-canvas"
                              : "border-line bg-paper hover:border-ink/40"
                          }`}
                        >
                          <p className={`text-xs uppercase tracking-widest ${selected ? "text-canvas/70" : "text-ink/60"}`}>
                            {t.label}
                          </p>
                          <p className={`mt-2 h-display text-2xl ${selected ? "text-canvas" : "text-ink"}`}>
                            {formatNaira(price)}
                          </p>
                          <p className={`mt-2 text-xs ${selected ? "text-canvas/70" : "text-ink/60"}`}>
                            {t.desc}
                          </p>
                        </button>
                      );
                    })}
                  </div>

                  <div>
                    <label htmlFor="tk" className="label">Number of tickets</label>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setForm({ ...form, tickets: Math.max(1, form.tickets - 1) })}
                        className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 hover:bg-ink/5"
                      >
                        −
                      </button>
                      <input
                        id="tk"
                        type="number"
                        min={1}
                        max={6}
                        className="input w-24 text-center"
                        value={form.tickets}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            tickets: Math.max(1, Math.min(6, Number(e.target.value) || 1)),
                          })
                        }
                      />
                      <button
                        type="button"
                        onClick={() => setForm({ ...form, tickets: Math.min(6, form.tickets + 1) })}
                        className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 hover:bg-ink/5"
                      >
                        +
                      </button>
                    </div>
                    {errors.tickets && <p className="error">{errors.tickets}</p>}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-5">
                  <div>
                    <h2 className="h-display text-2xl text-ink">Anything else?</h2>
                    <p className="text-sm text-ink/60 mt-1">Optional. Skip if not applicable.</p>
                  </div>
                  <div>
                    <label htmlFor="dt" className="label">Dietary requirements</label>
                    <input
                      id="dt"
                      className="input"
                      placeholder="Vegetarian, halal, gluten-free..."
                      value={form.dietary}
                      onChange={(e) => setForm({ ...form, dietary: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="nt" className="label">Anything the team should know?</label>
                    <textarea
                      id="nt"
                      rows={4}
                      className="input"
                      placeholder="Accessibility needs, arrival time..."
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-5">
                  <div>
                    <h2 className="h-display text-2xl text-ink">Choose how to pay</h2>
                    <p className="text-sm text-ink/60 mt-1">
                      All bookings are held for you once confirmed.
                    </p>
                  </div>

                  {event.price === 0 ? (
                    <div className="rounded-2xl border border-brand/40 bg-brand/10 p-6">
                      <p className="font-semibold text-ink">This event is free.</p>
                      <p className="text-sm text-ink/70 mt-1">
                        Confirm your booking to reserve your seat.
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {[
                        { id: "card" as const, label: "Card", desc: "Visa / Mastercard" },
                        { id: "transfer" as const, label: "Transfer", desc: "Bank transfer" },
                        { id: "atDoor" as const, label: "At the door", desc: "Pay on arrival" },
                      ].map((opt) => {
                        const selected = form.paymentMethod === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setForm({ ...form, paymentMethod: opt.id })}
                            className={`text-left rounded-2xl border p-5 transition ${
                              selected
                                ? "border-ink bg-ink text-canvas"
                                : "border-line bg-paper hover:border-ink/40"
                            }`}
                          >
                            <p className={`font-semibold ${selected ? "text-canvas" : "text-ink"}`}>
                              {opt.label}
                            </p>
                            <p className={`text-xs mt-1 ${selected ? "text-canvas/70" : "text-ink/60"}`}>
                              {opt.desc}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  <div className="text-xs text-ink/50">
                    By confirming, you agree to IKTC&rsquo;s code of conduct
                    and event terms.
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-between">
            <button
              type="button"
              onClick={back}
              disabled={step === 1}
              className={`btn-ghost ${step === 1 ? "opacity-40 pointer-events-none" : ""}`}
            >
              <ArrowLeft size={16} /> Back
            </button>
            {step < 4 ? (
              <button type="button" onClick={next} className="btn-dark">
                Continue <ArrowRight size={16} />
              </button>
            ) : (
              <button type="button" onClick={finalize} className="btn-primary">
                Confirm booking <CheckCircle2 size={16} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Summary */}
      <aside className="lg:col-span-4">
        <div className="sticky top-28 card p-6">
          <p className="eyebrow">Order summary</p>
          <div className="mt-4">
            <p className="h-display text-lg text-ink leading-snug">{event.title}</p>
            <p className="text-xs text-ink/60 mt-1">
              {formatEventDate(event.date)} · {formatEventTime(event.date)}
            </p>
            <p className="text-xs text-ink/60">{event.location}</p>
          </div>
          <dl className="mt-6 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-ink/60">Ticket type</dt>
              <dd className="text-ink">{form.ticketType}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-ink/60">Tickets</dt>
              <dd className="text-ink">{form.tickets}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-ink/60">Subtotal</dt>
              <dd className="text-ink">{formatNaira(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-ink/60">Service fee</dt>
              <dd className="text-ink">{formatNaira(fee)}</dd>
            </div>
            <div className="flex justify-between border-t border-line pt-3 mt-3">
              <dt className="text-ink font-semibold">Total</dt>
              <dd className="text-ink font-semibold">{formatNaira(total)}</dd>
            </div>
          </dl>
          <p className="mt-6 text-xs text-ink/50 leading-relaxed">
            Free events skip payment. For paid events, a service fee of 3%
            supports community operations.
          </p>
        </div>
      </aside>
    </div>
  );
}
