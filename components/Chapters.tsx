import Image from "next/image";
import { MapPin, Users } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./Motion";

const chapters = [
  { name: "Ikorodu Central", members: 620, active: true, since: "2021" },
  { name: "Ikorodu North", members: 410, active: true, since: "2022" },
  { name: "Ijede", members: 285, active: true, since: "2022" },
  { name: "Igbogbo", members: 240, active: true, since: "2023" },
  { name: "Imota", members: 190, active: true, since: "2023" },
  { name: "Ebute", members: 320, active: true, since: "2023" },
  { name: "Isawo", members: 175, active: true, since: "2024" },
  { name: "Bayeku", members: 140, active: true, since: "2024" },
  { name: "Agura", members: 95, active: false, since: "coming 2026" },
];

export default function Chapters() {
  return (
    <section className="section">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="eyebrow">Chapters</span>
            <h2 className="h-display mt-3 text-4xl md:text-5xl leading-tight text-ink">
              Nine neighbourhoods, one community.
            </h2>
            <p className="mt-4 text-ink/70">
              IKTC members meet in nine active neighbourhood chapters across
              Ikorodu — plus one chapter opening in Agura in 2026. Every
              chapter runs its own monthly meetup.
            </p>
            <div className="mt-8 relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1400&q=80"
                alt="Map of Ikorodu"
                fill
                sizes="(min-width:1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-ink/30" />
              <div className="absolute inset-0 grid-lines opacity-30" />
              <div className="absolute inset-0 p-6 flex items-end">
                <div className="chip bg-canvas/95">
                  <MapPin size={14} className="text-brand" />
                  Ikorodu, Lagos, Nigeria
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {chapters.map((c) => (
              <StaggerItem key={c.name}>
                <div
                  className={`card p-5 flex items-center justify-between gap-4 ${
                    c.active ? "" : "opacity-70"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          c.active ? "bg-brand animate-pulseDot" : "bg-ink/30"
                        }`}
                      />
                      <p className="h-display text-lg text-ink">{c.name}</p>
                    </div>
                    <p className="mt-1 text-xs text-ink/60">Since {c.since}</p>
                  </div>
                  <div className="text-right">
                    <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                      <Users size={13} className="text-brand" /> {c.members}
                    </p>
                    <p className="text-xs text-ink/60">members</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
