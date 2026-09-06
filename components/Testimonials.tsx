"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { Stagger, StaggerItem, Reveal } from "./Motion";

const items = [
  {
    quote:
      "IKTC turned my Saturdays into the best learning of my life. I got my first frontend job three months after the bootcamp.",
    name: "Bola Ajayi",
    role: "Frontend Engineer, Kuda",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "The mentorship pairing is unreal. My mentor at IKTC unblocked me on system design in a way five YouTube playlists could not.",
    name: "Emeka Okoye",
    role: "Backend Engineer, Paystack",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "I moved from marketing into product because of IKTC's product lab. The critique culture is honest, warm, and fast.",
    name: "Aisha Bello",
    role: "Product Manager, Bumpa",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "We built the first version of our startup at Ikorodu Hackathon 2.0. Two of my co-founders were in the same room that weekend.",
    name: "Femi Adeyemi",
    role: "Founder, Trove",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "As a student, IKTC felt like the internet finally showed up in Ikorodu — kind, technical, and hungry to build.",
    name: "Zainab Musa",
    role: "CS Student, UNILAG",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Our team hired three engineers from IKTC last year. The bar of taste and craft is uncommonly high.",
    name: "Damola Tayo",
    role: "Engineering Manager, Piggyvest",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">Voices from the community</span>
            <h2 className="h-display mt-3 text-4xl md:text-5xl leading-tight text-ink">
              What members say when the mic is off.
            </h2>
          </Reveal>
        </div>
        <Stagger className="mt-14 columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {items.map((t) => (
            <StaggerItem key={t.name} className="mb-6 break-inside-avoid">
              <figure className="card p-6">
                <Quote className="text-brand" size={22} />
                <blockquote className="mt-4 text-ink/85 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </span>
                  <span>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-ink/60">{t.role}</p>
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
