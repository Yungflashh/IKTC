import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Motion";

const points = [
  "Weekly meetups since 2021",
  "Alumni across Paystack, Flutterwave, Moniepoint",
  "Free entry for students, always",
  "Run by an all-volunteer team of 24",
];

export default function AboutPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative grid grid-cols-6 grid-rows-6 gap-3 h-[520px]">
              <div className="col-span-4 row-span-4 relative overflow-hidden rounded-2xl shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
                  alt="Meetup"
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="col-span-2 row-span-3 col-start-5 relative overflow-hidden rounded-2xl shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Talk"
                  fill
                  sizes="(min-width:1024px) 20vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="col-span-3 row-span-2 row-start-5 relative overflow-hidden rounded-2xl shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80"
                  alt="Hackathon"
                  fill
                  sizes="(min-width:1024px) 25vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="col-span-3 row-span-3 col-start-4 row-start-4 relative overflow-hidden rounded-2xl shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80"
                  alt="Team"
                  fill
                  sizes="(min-width:1024px) 25vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <Reveal>
              <span className="eyebrow">About IKTC</span>
              <h2 className="h-display mt-3 text-4xl md:text-5xl leading-tight tracking-tightest text-ink">
                We build the room we wish existed
                <span className="text-brand">.</span>
              </h2>
              <p className="mt-5 text-ink/70 leading-relaxed">
                In 2021, six friends started meeting in an Ikorodu café to share
                what they were building. Five years later, IKTC is one of
                Lagos&rsquo; most active tech communities — with weekly
                circles, an annual conference, and members shipping at some of
                the continent&rsquo;s best companies.
              </p>
              <p className="mt-4 text-ink/70 leading-relaxed">
                We are volunteer-run, sponsor-supported, and stubbornly local:
                every event is planned by and for people who live and work in
                Ikorodu.
              </p>
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-ink/85">
                    <CheckCircle2 size={18} className="mt-0.5 text-brand shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <Link href="/about" className="btn-dark">
                  Read our story <ArrowUpRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
