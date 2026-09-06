import Link from "next/link";
import Logo from "./Logo";
import { Github, Instagram, Linkedin, Twitter, Youtube, Mail, MapPin, ArrowUpRight } from "lucide-react";

const groups = [
  {
    title: "Community",
    links: [
      { href: "/about", label: "About IKTC" },
      { href: "/programs", label: "Programs" },
      { href: "/events", label: "Events" },
      { href: "/gallery", label: "Gallery" },
      { href: "/blog", label: "Stories" },
    ],
  },
  {
    title: "Get involved",
    links: [
      { href: "/events", label: "Book an event" },
      { href: "/contact", label: "Become a mentor" },
      { href: "/contact", label: "Partner with us" },
      { href: "/contact", label: "Volunteer" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/blog", label: "Newsletter" },
      { href: "/blog", label: "Code of conduct" },
      { href: "/contact", label: "Press kit" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

const socials = [
  { href: "https://x.com", label: "Twitter", Icon: Twitter },
  { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
  { href: "https://youtube.com", label: "YouTube", Icon: Youtube },
  { href: "https://github.com", label: "GitHub", Icon: Github },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-ink text-canvas">
      <div className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Logo variant="light" />
            <p className="mt-6 max-w-md text-canvas/70 leading-relaxed">
              Ikorodu Tech Community is a home for engineers, designers, product
              builders and student technologists across Ikorodu and greater
              Lagos. We host events, mentorship circles and hands-on programs
              that push African tech talent forward.
            </p>
            <div className="mt-8 space-y-3 text-sm text-canvas/80">
              <p className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-brand" /> Ikorodu, Lagos, Nigeria
              </p>
              <p className="inline-flex items-center gap-2">
                <Mail size={16} className="text-brand" /> hello@ikorodutech.community
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-canvas/15 hover:bg-canvas hover:text-ink transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {groups.map((g) => (
              <div key={g.title}>
                <h4 className="text-sm font-semibold text-canvas/60 uppercase tracking-widest">
                  {g.title}
                </h4>
                <ul className="mt-5 space-y-3">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-canvas/85 hover:text-brand transition inline-flex items-center gap-1"
                      >
                        {l.label}
                        <ArrowUpRight
                          size={14}
                          className="opacity-0 -translate-x-1 group-hover:opacity-100 transition"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-canvas/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-canvas/60">
          <p>© {new Date().getFullYear()} Ikorodu Tech Community. All rights reserved.</p>
          <p className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-brand animate-pulseDot" />
            Building the next generation, one meetup at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
