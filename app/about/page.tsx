import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import CTA from "@/components/CTA";
import { Award, Compass, Heart, Sprout } from "lucide-react";
import { getRemoteTeam, getRemoteMilestones } from "@/lib/api";

export const metadata = { title: "About" };

const values = [
  {
    Icon: Heart,
    title: "Warmth first",
    body: "We greet by name. We share what we know. Nobody sits alone at IKTC.",
  },
  {
    Icon: Compass,
    title: "Craft over hype",
    body: "We reward taste, rigor and finished work. Not vibes and unshipped demos.",
  },
  {
    Icon: Sprout,
    title: "Locally rooted",
    body: "We build for Ikorodu, from Ikorodu. Our zip code is a feature, not a bug.",
  },
  {
    Icon: Award,
    title: "Radically free",
    body: "Most events are free. When they cost money, students pay nothing.",
  },
];

const defaultTeam = [
  {
    name: "Timilehin Adeyemi",
    role: "Community Lead",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Chinyere Umeh",
    role: "Programs Director",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Segun Ojo",
    role: "Head of Events",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Halima Bello",
    role: "Design Lead",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Kunle Adebayo",
    role: "Engineering Lead",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Mariam Sanni",
    role: "Partnerships",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=80",
  },
];

const defaultTimeline = [
  { year: "2021", title: "Six friends, one café", body: "IKTC begins as a Saturday coffee meetup in Ikorodu." },
  { year: "2022", title: "First cohort", body: "50 members complete our inaugural frontend circle." },
  { year: "2023", title: "Ikorodu Hackathon 1.0", body: "80 hackers, 20 teams, one weekend of building for Lagos." },
  { year: "2024", title: "Annual conference", body: "600 attendees, 24 speakers, the first IKTC Awards." },
  { year: "2026", title: "Community of 3,200+", body: "Weekly circles, six programs, and a permanent home." },
];

export default async function AboutPage() {
  const [remoteTeam, remoteMilestones] = await Promise.all([
    getRemoteTeam(),
    getRemoteMilestones(),
  ]);

  const teamList = remoteTeam.length > 0 ? remoteTeam : defaultTeam;
  const timelineList =
    remoteMilestones.length > 0
      ? remoteMilestones.map((m) => ({
          year: m.year,
          title: m.title,
          body: m.description,
        }))
      : defaultTimeline;

  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A community shaped by its members."
        description="We are Ikorodu Tech Community — 3,200+ engineers, designers and product builders learning in public, in one of Lagos' fastest-growing towns."
      />

      <section className="pb-10">
        <div className="container">
          <Reveal>
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80"
                alt="Community meetup"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">Our story</span>
              <h2 className="h-display mt-3 text-4xl md:text-5xl leading-tight text-ink">
                Started small, stayed small, grew anyway.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 space-y-5 text-ink/75 leading-relaxed">
            <Reveal>
              <p>
                IKTC didn&rsquo;t start with a slide deck. It started with six
                friends complaining that every &ldquo;Lagos tech event&rdquo;
                seemed to happen an hour&rsquo;s traffic away. So we made our
                own room — a Saturday morning coffee meetup at a small café off
                Ayangburen Road.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                What started as three people showing WIP became fifteen. Then
                fifty. Then a circle for frontend, and one for backend, and one
                for design. Then a bootcamp. Then a hackathon. Then an
                annual conference the whole city started attending.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Today, IKTC is what our early members needed and could not
                find: a warm, technically serious community that meets close to
                home. We plan to keep it that way.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-ink text-canvas rounded-t-[2.5rem]">
        <div className="container">
          <Reveal>
            <span className="eyebrow text-canvas/60">What we believe</span>
            <h2 className="h-display mt-3 text-4xl md:text-5xl leading-tight">
              Four values, plainly stated.
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ Icon, title, body }) => (
              <StaggerItem key={title}>
                <div className="rounded-2xl border border-canvas/10 p-6 h-full hover:border-brand transition">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-canvas text-ink">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-6 h-display text-xl">{title}</h3>
                  <p className="mt-3 text-canvas/70 text-sm leading-relaxed">
                    {body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow">Timeline</span>
              <h2 className="h-display mt-3 text-4xl md:text-5xl leading-tight text-ink">
                Five years of showing up.
              </h2>
            </Reveal>
          </div>
          <div className="mt-14 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-line" />
            <ul className="space-y-10">
              {timelineList.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.05}>
                  <li className="relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-12">
                    <div className={i % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}>
                      <span className="chip font-mono">{t.year}</span>
                      <h3 className="mt-3 h-display text-2xl text-ink">
                        {t.title}
                      </h3>
                      <p className="mt-2 text-ink/70">{t.body}</p>
                    </div>
                    <span className="absolute left-2.5 md:left-1/2 top-1 -translate-x-1/2 h-4 w-4 rounded-full bg-brand ring-4 ring-canvas" />
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow">Team</span>
              <h2 className="h-display mt-3 text-4xl md:text-5xl leading-tight text-ink">
                The volunteers who make IKTC hum.
              </h2>
              <p className="mt-4 text-ink/70">
                24 volunteers keep the lights on. Meet six of them.
              </p>
            </Reveal>
          </div>
          <Stagger className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {teamList.map((m) => (
              <StaggerItem key={m.name}>
                <div className="group">
                  <div className="relative aspect-square overflow-hidden rounded-2xl">
                    <Image
                      src={m.img}
                      alt={m.name}
                      fill
                      sizes="(min-width:1024px) 16vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-ink">{m.name}</p>
                  <p className="text-xs text-ink/60">{m.role}</p>
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
