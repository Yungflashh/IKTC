import {
  BookOpen,
  Code2,
  Handshake,
  Rocket,
  Users,
  Lightbulb,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./Motion";

const programs = [
  {
    Icon: Code2,
    title: "Engineering circles",
    body: "Small, senior-led study groups on frontend, backend, mobile and DevOps. We meet weekly, ship monthly.",
  },
  {
    Icon: Lightbulb,
    title: "Product & design lab",
    body: "A working studio for aspiring PMs and designers. Real briefs, real critique, portfolio-ready outputs.",
  },
  {
    Icon: Users,
    title: "Student chapters",
    body: "Partnerships with 12 universities across Lagos and Ogun. Chapter leads bring IKTC to their campus.",
  },
  {
    Icon: Rocket,
    title: "Founder residency",
    body: "A 12-week track for pre-seed founders in Ikorodu. Weekly office hours with operators and investors.",
  },
  {
    Icon: Handshake,
    title: "Mentorship matching",
    body: "One-on-one pairing with senior engineers and designers around the world — for growth, not gatekeeping.",
  },
  {
    Icon: BookOpen,
    title: "Scholarships",
    body: "We fund bootcamp seats, exam fees, and laptop rentals for community members who need a boost.",
  },
];

export default function Programs() {
  return (
    <section className="section">
      <div className="container">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">Programs</span>
            <h2 className="h-display mt-3 text-4xl md:text-5xl leading-tight text-ink">
              Six ways to grow with IKTC.
            </h2>
            <p className="mt-4 text-ink/70">
              Each program is designed and led by community members who have
              done the thing. Free to join, held to a high bar.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map(({ Icon, title, body }) => (
            <StaggerItem key={title}>
              <div className="group card p-7 h-full relative overflow-hidden">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-canvas group-hover:bg-brand group-hover:text-ink transition">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 h-display text-xl text-ink">{title}</h3>
                <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                  {body}
                </p>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-brand scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
