import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Ticket,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";
import {
  events,
  formatEventDate,
  formatEventTime,
  formatNaira,
  getEvent,
  upcomingEvents,
} from "@/lib/events";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import EventCard from "@/components/EventCard";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const event = getEvent(params.slug);
  if (!event) return { title: "Event not found" };
  return {
    title: event.title,
    description: event.tagline,
  };
}

export default function EventDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const event = getEvent(params.slug);
  if (!event) notFound();

  const seatsLeft = Math.max(0, event.seats - event.seatsTaken);
  const filledPct = Math.min(100, (event.seatsTaken / event.seats) * 100);
  const related = upcomingEvents(4).filter((e) => e.slug !== event.slug).slice(0, 3);

  return (
    <>
      <section className="pt-6">
        <div className="container">
          <nav className="flex items-center gap-2 text-xs text-ink/60">
            <Link href="/" className="hover:text-ink">Home</Link>
            <ChevronRight size={14} />
            <Link href="/events" className="hover:text-ink">Events</Link>
            <ChevronRight size={14} />
            <span className="text-ink">{event.title}</span>
          </nav>
        </div>
      </section>

      <section className="pt-6 pb-10">
        <div className="container">
          <Reveal>
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl shadow-card">
              <Image
                src={event.cover}
                alt={event.title}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 top-0 p-6 flex items-center justify-between">
                <span className="chip bg-canvas/95">{event.category}</span>
                <span className="chip bg-ink/85 text-canvas border-ink/30">
                  {formatNaira(event.price)}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <Reveal>
              <h1 className="h-display text-4xl md:text-5xl leading-tight tracking-tightest text-ink">
                {event.title}
              </h1>
              <p className="mt-4 text-lg text-ink/70">{event.tagline}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {event.tags.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mt-10">
                <h2 className="h-display text-2xl text-ink">About this event</h2>
                <p className="mt-4 text-ink/75 leading-relaxed whitespace-pre-line">
                  {event.description}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-12">
                <h2 className="h-display text-2xl text-ink">Agenda</h2>
                <ul className="mt-6 space-y-4">
                  {event.agenda.map((a, i) => (
                    <li key={i} className="flex gap-5 items-start">
                      <span className="mt-1 shrink-0 rounded-lg bg-ink text-canvas font-mono text-xs px-2.5 py-1.5">
                        {a.time}
                      </span>
                      <div>
                        <p className="font-semibold text-ink">{a.title}</p>
                        {a.description && (
                          <p className="text-sm text-ink/60 mt-1">{a.description}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-12">
                <h2 className="h-display text-2xl text-ink">Speakers</h2>
                <Stagger className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                  {event.speakers.map((s) => (
                    <StaggerItem key={s.name}>
                      <div className="card p-5 flex items-center gap-4">
                        <span className="relative h-14 w-14 overflow-hidden rounded-full shrink-0">
                          <Image
                            src={s.avatar}
                            alt={s.name}
                            fill
                            sizes="56px"
                            className="object-cover"
                          />
                        </span>
                        <div>
                          <p className="font-semibold text-ink">{s.name}</p>
                          <p className="text-xs text-ink/60">{s.role}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </Reveal>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-28">
              <Reveal>
                <div className="card p-6">
                  <p className="eyebrow">Book your seat</p>
                  <p className="mt-3 h-display text-3xl text-ink">
                    {formatNaira(event.price)}
                  </p>
                  <p className="text-sm text-ink/60">per general admission</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <Calendar size={16} className="text-brand mt-0.5" />
                      <div>
                        <p className="font-semibold text-ink">{formatEventDate(event.date)}</p>
                        {event.endDate && new Date(event.endDate).toDateString() !== new Date(event.date).toDateString() && (
                          <p className="text-ink/60 text-xs">until {formatEventDate(event.endDate)}</p>
                        )}
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock size={16} className="text-brand mt-0.5" />
                      <p className="text-ink">
                        {formatEventTime(event.date)}
                        {event.endDate ? ` – ${formatEventTime(event.endDate)}` : ""}
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin size={16} className="text-brand mt-0.5" />
                      <div>
                        <p className="text-ink font-semibold">{event.location}</p>
                        <p className="text-ink/60 text-xs">{event.address}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users size={16} className="text-brand mt-0.5" />
                      <div className="w-full">
                        <div className="flex justify-between text-xs text-ink/60 mb-1.5">
                          <span>{seatsLeft} seats left</span>
                          <span>{Math.round(filledPct)}% full</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-ink/10 overflow-hidden">
                          <div className="h-full bg-brand" style={{ width: `${filledPct}%` }} />
                        </div>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-6 flex flex-col gap-2">
                    <Link
                      href={`/events/${event.slug}/book`}
                      className="btn-primary w-full"
                    >
                      <Ticket size={16} /> Book now
                    </Link>
                    <Link href="/events" className="btn-ghost w-full">
                      Browse other events
                    </Link>
                  </div>

                  <p className="mt-5 text-xs text-ink/50 leading-relaxed">
                    You&rsquo;ll receive a confirmation with a reference code
                    you can show at the door. Free events do not require
                    payment.
                  </p>
                </div>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="flex items-end justify-between">
            <h2 className="h-display text-3xl md:text-4xl text-ink">You might also like</h2>
            <Link href="/events" className="btn-ghost">
              Browse all <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((r) => (
              <EventCard key={r.slug} event={r} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
