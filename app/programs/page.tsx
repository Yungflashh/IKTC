import PageHeader from "@/components/PageHeader";
import Programs from "@/components/Programs";
import CTA from "@/components/CTA";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import Image from "next/image";
import { CalendarClock, MapPin, Users } from "lucide-react";

export const metadata = { title: "Programs" };

const circles = [
  {
    title: "Frontend Circle",
    body: "React, Next.js, accessibility, performance. Weekly Wednesdays, 7pm.",
    lead: "Halima Bello",
    seats: "40 seats / cohort",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Backend Circle",
    body: "Distributed systems, databases, APIs. Mondays, 7pm.",
    lead: "Kunle Adebayo",
    seats: "35 seats / cohort",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Design Lab",
    body: "Craft, critique, portfolios. Tuesdays, 6:30pm.",
    lead: "Zara Ibrahim",
    seats: "25 seats / cohort",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Product Studio",
    body: "PRDs, discovery, metrics. Thursdays, 7pm.",
    lead: "Aisha Bello",
    seats: "30 seats / cohort",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
];

import { getRemotePrograms } from "@/lib/api";

export default async function ProgramsPage() {
  const remoteCircles = await getRemotePrograms();
  const displayCircles = remoteCircles.length > 0 ? remoteCircles : circles;

  return (
    <>
      <PageHeader
        eyebrow="Programs"
        title="Small circles. Serious craft."
        description="Programs at IKTC are led by senior members who have shipped the thing. Each is designed to be intense, kind, and finished — not open-ended."
      />

      <Programs />

      <section className="section">
        <div className="container">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow">Weekly circles</span>
              <h2 className="h-display mt-3 text-4xl md:text-5xl leading-tight text-ink">
                Four circles that run all year.
              </h2>
              <p className="mt-4 text-ink/70">
                Cohorts open every 8 weeks. Applications are lightweight — we
                care more about consistency than credentials.
              </p>
            </Reveal>
          </div>
          <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayCircles.map((c) => (
              <StaggerItem key={c.title}>
                <div className="card overflow-hidden h-full flex flex-col md:flex-row">
                  <div className="relative md:w-2/5 aspect-[4/3] md:aspect-auto">
                    <Image
                      src={c.img}
                      alt={c.title}
                      fill
                      sizes="(min-width:768px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-7 flex-1">
                    <h3 className="h-display text-2xl text-ink">{c.title}</h3>
                    <p className="mt-3 text-ink/70">{c.body}</p>
                    <ul className="mt-5 space-y-2 text-sm text-ink/70">
                      <li className="inline-flex items-center gap-2">
                        <Users size={14} className="text-brand" />
                        {c.seats}
                      </li>
                      <li className="inline-flex items-center gap-2">
                        <CalendarClock size={14} className="text-brand" />
                        8-week cohort
                      </li>
                      <li className="inline-flex items-center gap-2">
                        <MapPin size={14} className="text-brand" />
                        IKTC Learning Loft, Ikorodu
                      </li>
                    </ul>
                    <p className="mt-6 text-xs text-ink/50">
                      Led by <b className="text-ink/80">{c.lead}</b>
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTA />
    </>
  );
}
