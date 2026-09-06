import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Users, ArrowUpRight } from "lucide-react";
import { EventItem } from "@/lib/types";
import { formatEventDate, formatEventTime, formatNaira } from "@/lib/events";

export default function EventCard({ event }: { event: EventItem }) {
  const seatsLeft = Math.max(0, event.seats - event.seatsTaken);
  const filledPct = Math.min(100, (event.seatsTaken / event.seats) * 100);

  return (
    <Link
      href={`/events/${event.slug}`}
      className="group card overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(11,18,32,0.25)] transition-all duration-300"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={event.cover}
          alt={event.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
          <span className="chip bg-canvas/95">{event.category}</span>
          <span className="chip bg-ink/85 text-canvas border-ink/30">
            {formatNaira(event.price)}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex flex-wrap items-center gap-3 text-xs text-ink/60">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={14} className="text-brand" />
            {formatEventDate(event.date)} · {formatEventTime(event.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} className="text-brand" />
            {event.location}
          </span>
        </div>
        <h3 className="h-display text-xl leading-snug text-ink">
          {event.title}
        </h3>
        <p className="text-sm text-ink/70 line-clamp-2">{event.tagline}</p>

        <div className="mt-auto pt-4">
          <div className="flex items-center justify-between text-xs text-ink/60 mb-2">
            <span className="inline-flex items-center gap-1.5">
              <Users size={13} /> {seatsLeft} seats left
            </span>
            <span>{Math.round(filledPct)}% full</span>
          </div>
          <div className="h-1.5 rounded-full bg-ink/10 overflow-hidden">
            <div
              className="h-full bg-brand"
              style={{ width: `${filledPct}%` }}
            />
          </div>
          <div className="mt-5 flex items-center justify-between">
            <span className="text-sm font-semibold text-ink">
              View & book
            </span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-canvas group-hover:bg-brand group-hover:text-ink transition">
              <ArrowUpRight size={16} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
