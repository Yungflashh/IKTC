import type { EventItem } from "./types";

export const events: EventItem[] = [
  {
    slug: "iktc-monthly-meetup-october",
    title: "IKTC Monthly Meetup: Ship Your First AI Feature",
    tagline: "A cozy evening of demos, code and jollof.",
    description:
      "Our flagship monthly meetup brings together builders from across Ikorodu for lightning talks, live demos, and a hands-on segment on shipping AI-powered features into real products. Expect three tight talks, a fireside with a founder, and unlimited jollof — because community begins over food.",
    category: "Meetup",
    date: "2026-09-14T17:00:00+01:00",
    endDate: "2026-09-14T20:30:00+01:00",
    location: "Ikorodu Innovation Hub",
    address: "24 Ayangburen Rd, Ikorodu, Lagos",
    price: 0,
    seats: 180,
    seatsTaken: 132,
    cover:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80",
    tags: ["AI", "Community", "Demos"],
    speakers: [
      {
        name: "Adaeze Okafor",
        role: "Staff Engineer, Paystack",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Tunde Bakare",
        role: "Founder, Nova Labs",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Zara Ibrahim",
        role: "Product Designer, Flutterwave",
        avatar:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      },
    ],
    agenda: [
      { time: "5:00 PM", title: "Doors open + networking" },
      { time: "5:45 PM", title: "Welcome + community updates" },
      {
        time: "6:00 PM",
        title: "Lightning talks (3 × 12 mins)",
        description: "AI-first product patterns, shipping to prod, cost math.",
      },
      { time: "7:00 PM", title: "Fireside with Tunde Bakare" },
      { time: "7:45 PM", title: "Open mic + demos + food" },
    ],
  },
  {
    slug: "frontend-mastery-weekend",
    title: "Frontend Mastery Weekend",
    tagline: "Two intense days on modern React, Next.js and design systems.",
    description:
      "A weekend bootcamp for intermediate frontend engineers. Deep dives on React 18 concurrency, Next.js App Router, accessible component APIs and design tokens. Every attendee ships a portfolio-ready project by Sunday night.",
    category: "Bootcamp",
    date: "2026-10-04T09:00:00+01:00",
    endDate: "2026-10-05T18:00:00+01:00",
    location: "IKTC Learning Loft",
    address: "12 Owutu Rd, Ikorodu, Lagos",
    price: 25000,
    seats: 60,
    seatsTaken: 41,
    cover:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80",
    tags: ["React", "Next.js", "Design Systems"],
    speakers: [
      {
        name: "Chinedu Eze",
        role: "Senior Engineer, Vercel",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Halima Yusuf",
        role: "Design Engineer, Figma",
        avatar:
          "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80",
      },
    ],
    agenda: [
      { time: "Sat 9:00", title: "Kickoff + React 18 fundamentals refresher" },
      { time: "Sat 12:00", title: "Lunch + pair programming" },
      { time: "Sat 14:00", title: "Next.js App Router deep dive" },
      { time: "Sun 9:00", title: "Design tokens + component API design" },
      { time: "Sun 14:00", title: "Project build + review" },
      { time: "Sun 17:30", title: "Showcase + closing" },
    ],
  },
  {
    slug: "ikorodu-hackathon-3",
    title: "Ikorodu Hackathon 3.0 · Build for Lagos",
    tagline: "48 hours. 40 teams. One city to serve.",
    description:
      "Our biggest hackathon of the year returns. Teams of up to 4 will build products that solve problems for everyday Lagosians — mobility, energy, education, informal commerce. ₦2,000,000 in prizes, mentorship from senior operators, and a demo night open to press and investors.",
    category: "Hackathon",
    date: "2026-11-21T09:00:00+01:00",
    endDate: "2026-11-23T18:00:00+01:00",
    location: "The Zone, Ikorodu",
    address: "Plot 5A, Isawo-Agric Rd, Ikorodu, Lagos",
    price: 5000,
    seats: 200,
    seatsTaken: 187,
    cover:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80",
    tags: ["Hackathon", "Prizes", "Mentorship"],
    speakers: [
      {
        name: "Damilola Okonkwo",
        role: "Partner, Ventures Africa",
        avatar:
          "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Rita Adeyemi",
        role: "CTO, Kudi",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
      },
    ],
    agenda: [
      { time: "Fri 9:00", title: "Registration + team formation" },
      { time: "Fri 11:00", title: "Opening keynote + tracks reveal" },
      { time: "Sat all day", title: "Build sprints + mentor office hours" },
      { time: "Sun 14:00", title: "Judging round 1" },
      { time: "Sun 17:00", title: "Finalists demo + awards" },
    ],
  },
  {
    slug: "product-design-fireside",
    title: "Fireside: The Craft of Product Design in Africa",
    tagline: "An intimate conversation with three senior designers.",
    description:
      "A candid, off-record fireside on what it really takes to build a design career on the continent — hiring bars, feedback culture, portfolio myths, and the joy of shipping products used by millions. Small room, big conversation.",
    category: "Fireside",
    date: "2026-09-28T18:30:00+01:00",
    endDate: "2026-09-28T21:00:00+01:00",
    location: "Ikorodu Innovation Hub · Studio B",
    address: "24 Ayangburen Rd, Ikorodu, Lagos",
    price: 3000,
    seats: 45,
    seatsTaken: 29,
    cover:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
    tags: ["Design", "Careers", "Fireside"],
    speakers: [
      {
        name: "Kemi Adenuga",
        role: "Design Lead, Bumpa",
        avatar:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Ola Fashola",
        role: "Design Director, Andela",
        avatar:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
      },
    ],
    agenda: [
      { time: "6:30 PM", title: "Doors + welcome drink" },
      { time: "7:00 PM", title: "Fireside conversation" },
      { time: "8:15 PM", title: "Audience Q&A" },
      { time: "8:45 PM", title: "Networking" },
    ],
  },
  {
    slug: "data-engineering-workshop",
    title: "Data Engineering Foundations Workshop",
    tagline: "From zero to your first pipeline in one Saturday.",
    description:
      "A one-day, laptop-in-hand workshop for engineers curious about data. We cover SQL power moves, batch vs streaming, dbt fundamentals, and ship a small pipeline together. Bring a laptop with Docker installed.",
    category: "Workshop",
    date: "2026-10-18T10:00:00+01:00",
    endDate: "2026-10-18T17:00:00+01:00",
    location: "IKTC Learning Loft",
    address: "12 Owutu Rd, Ikorodu, Lagos",
    price: 12000,
    seats: 40,
    seatsTaken: 22,
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    tags: ["Data", "SQL", "dbt"],
    speakers: [
      {
        name: "Ifeoma Nwosu",
        role: "Analytics Engineer, Moniepoint",
        avatar:
          "https://images.unsplash.com/photo-1596635746629-ef42e0a68d05?auto=format&fit=crop&w=400&q=80",
      },
    ],
    agenda: [
      { time: "10:00", title: "SQL power moves" },
      { time: "12:00", title: "Batch vs streaming" },
      { time: "13:00", title: "Lunch" },
      { time: "14:00", title: "dbt fundamentals" },
      { time: "15:30", title: "Ship your first pipeline" },
    ],
  },
  {
    slug: "iktc-annual-conference",
    title: "IKTC Annual Conference · Made in Ikorodu",
    tagline: "A one-day celebration of everything we've built.",
    description:
      "The IKTC Annual Conference is a day of talks, showcases, and community awards. Hear from operators building at scale, watch our members demo the year's best projects, and stay for the after-party. Tickets include lunch, swag, and drinks.",
    category: "Conference",
    date: "2026-12-13T09:00:00+01:00",
    endDate: "2026-12-13T22:00:00+01:00",
    location: "Balmoral Convention Centre",
    address: "Federal Palace Way, Ikorodu, Lagos",
    price: 15000,
    seats: 600,
    seatsTaken: 214,
    cover:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1600&q=80",
    tags: ["Conference", "Showcase", "Awards"],
    speakers: [
      {
        name: "Bosun Tijani",
        role: "Minister of Communications",
        avatar:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Iyin Aboyeji",
        role: "GP, Future Africa",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Odun Eweniyi",
        role: "COO, PiggyVest",
        avatar:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
      },
    ],
    agenda: [
      { time: "9:00", title: "Registration + coffee" },
      { time: "10:00", title: "Opening keynote" },
      { time: "12:00", title: "Track sessions × 3" },
      { time: "15:00", title: "IKTC Awards ceremony" },
      { time: "18:00", title: "After-party" },
    ],
  },
];

export function getEvent(slug: string) {
  return events.find((e) => e.slug === slug);
}

export function upcomingEvents(limit?: number) {
  const now = Date.now();
  const list = events
    .filter((e) => new Date(e.date).getTime() >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  return limit ? list.slice(0, limit) : list;
}

export function formatEventDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
export function formatEventTime(iso: string) {
  const d = new Date(iso);
  return d.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}
export function formatNaira(n: number) {
  if (n === 0) return "Free";
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(n);
}
