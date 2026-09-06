import { Reveal } from "./Motion";
import { Newspaper } from "lucide-react";

const quotes = [
  {
    quote:
      "IKTC has quietly become one of the most active tech communities in Lagos.",
    outlet: "TechCabal",
  },
  {
    quote:
      "The kind of grassroots, member-first energy the ecosystem desperately needs.",
    outlet: "Benjamindada.com",
  },
  {
    quote:
      "Ikorodu Hackathon is the weekend Lagos builders now block on their calendar.",
    outlet: "Techpoint Africa",
  },
];

export default function Press() {
  return (
    <section className="section bg-canvas">
      <div className="container">
        <Reveal>
          <div className="flex items-center justify-center gap-2 text-ink/60">
            <Newspaper size={14} className="text-brand" />
            <span className="text-xs font-semibold uppercase tracking-[0.16em]">
              As featured in
            </span>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <Reveal key={q.outlet} delay={i * 0.08}>
              <figure className="card p-8 h-full">
                <blockquote className="font-display text-xl leading-snug text-ink">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm text-ink/60 font-medium">
                  — {q.outlet}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
