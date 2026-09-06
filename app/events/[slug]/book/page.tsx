import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { events, getEvent } from "@/lib/events";
import BookingForm from "@/components/BookingForm";
import PageHeader from "@/components/PageHeader";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const event = getEvent(params.slug);
  return { title: event ? `Book · ${event.title}` : "Book event" };
}

export default function BookPage({ params }: { params: { slug: string } }) {
  const event = getEvent(params.slug);
  if (!event) notFound();

  return (
    <>
      <section className="pt-6">
        <div className="container">
          <nav className="flex items-center gap-2 text-xs text-ink/60 flex-wrap">
            <Link href="/" className="hover:text-ink">Home</Link>
            <ChevronRight size={14} />
            <Link href="/events" className="hover:text-ink">Events</Link>
            <ChevronRight size={14} />
            <Link href={`/events/${event.slug}`} className="hover:text-ink">
              {event.title}
            </Link>
            <ChevronRight size={14} />
            <span className="text-ink">Book</span>
          </nav>
        </div>
      </section>

      <PageHeader
        eyebrow="Booking"
        title="Reserve your seat."
        description="Four quick steps. You can pay online or at the door. Free events skip payment entirely."
      />

      <section className="pb-24">
        <div className="container">
          <BookingForm event={event} />
        </div>
      </section>
    </>
  );
}
