import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { upcomingEvents } from "@/lib/events";
import EventCard from "./EventCard";
import { Reveal } from "./Motion";

export default function UpcomingEvents() {
  const list = upcomingEvents(3);
  return (
    <section className="section bg-ink text-canvas rounded-t-[2.5rem]">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal className="max-w-2xl">
            <span className="eyebrow text-canvas/60">Upcoming events</span>
            <h2 className="h-display mt-3 text-4xl md:text-5xl leading-tight text-canvas">
              What&rsquo;s on the calendar next.
            </h2>
            <p className="mt-4 text-canvas/70 max-w-xl">
              Reserve your seat early — most events fill within a week of going
              live. All bookings are held for you at the door.
            </p>
          </Reveal>
          <Link href="/events" className="btn bg-brand text-ink hover:bg-brand-400 shadow-cta">
            Browse all events
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((e) => (
            <EventCard key={e.slug} event={e} />
          ))}
        </div>
      </div>
    </section>
  );
}
