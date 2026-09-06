import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "./Motion";

const speakers = [
  {
    name: "Bosun Tijani",
    role: "Minister of Communications",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Iyin Aboyeji",
    role: "GP, Future Africa",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Odun Eweniyi",
    role: "COO, PiggyVest",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Shola Akinlade",
    role: "CEO, Paystack",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Bosun Olanrewaju",
    role: "Head of Eng, Flutterwave",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Kemi Adenuga",
    role: "Design Lead, Bumpa",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Adaeze Okafor",
    role: "Staff Engineer, Paystack",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Halima Yusuf",
    role: "Design Engineer, Figma",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Rita Adeyemi",
    role: "CTO, Kudi",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Tunde Bakare",
    role: "Founder, Nova Labs",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
];

export default function PastSpeakers() {
  return (
    <section className="section">
      <div className="container">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">Past speakers</span>
            <h2 className="h-display mt-3 text-4xl md:text-5xl leading-tight text-ink">
              Operators who&rsquo;ve stood at our mic.
            </h2>
            <p className="mt-4 text-ink/70">
              We invite people who ship, not people who tweet. Here are a few of
              the operators who&rsquo;ve graced IKTC stages over the years.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {speakers.map((s) => (
            <StaggerItem key={s.name}>
              <div className="group">
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src={s.avatar}
                    alt={s.name}
                    fill
                    sizes="(min-width:768px) 18vw, 45vw"
                    className="object-cover grayscale contrast-100 group-hover:grayscale-0 transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-ink/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition">
                    <p className="text-canvas text-xs font-semibold">{s.name}</p>
                    <p className="text-canvas/70 text-[10px]">{s.role}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm font-semibold text-ink">{s.name}</p>
                <p className="text-xs text-ink/60">{s.role}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
