export type GalleryItem = {
  src: string;
  alt: string;
  category: "Meetup" | "Bootcamp" | "Hackathon" | "Conference" | "Fireside" | "Studio";
  span?: "wide" | "tall" | "large";
  caption?: string;
};

export const gallery: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80",
    alt: "Monthly meetup, main hall",
    category: "Meetup",
    span: "large",
    caption: "September meetup — full house.",
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=80",
    alt: "Hackathon team building",
    category: "Hackathon",
    span: "tall",
    caption: "Ikorodu Hackathon 2.0 — hour 34.",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80",
    alt: "Frontend bootcamp",
    category: "Bootcamp",
    caption: "Frontend Mastery Weekend.",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
    alt: "Fireside chat",
    category: "Fireside",
    span: "wide",
    caption: "Fireside with senior designers.",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    alt: "Studio session",
    category: "Studio",
    caption: "Product studio critique.",
  },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    alt: "Data workshop",
    category: "Bootcamp",
    span: "tall",
    caption: "Data Foundations workshop.",
  },
  {
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1600&q=80",
    alt: "Annual conference stage",
    category: "Conference",
    span: "large",
    caption: "Annual Conference main stage.",
  },
  {
    src: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?auto=format&fit=crop&w=1400&q=80",
    alt: "Lightning talks",
    category: "Meetup",
    caption: "Lightning talks night.",
  },
  {
    src: "https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&w=1400&q=80",
    alt: "Panel discussion",
    category: "Conference",
    span: "wide",
    caption: "Panel: building for Lagos.",
  },
  {
    src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1400&q=80",
    alt: "Community demo night",
    category: "Meetup",
    caption: "Demo night showcases.",
  },
  {
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1400&q=80",
    alt: "Networking session",
    category: "Meetup",
    caption: "Networking over jollof.",
  },
  {
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1400&q=80",
    alt: "Workshop attendees",
    category: "Bootcamp",
    span: "tall",
    caption: "Workshop cohort — day one.",
  },
  {
    src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1400&q=80",
    alt: "Speaker on stage",
    category: "Conference",
    caption: "Keynote — the annual conference.",
  },
  {
    src: "https://images.unsplash.com/photo-1560523159-4a9692d222f8?auto=format&fit=crop&w=1400&q=80",
    alt: "Design lab critique",
    category: "Studio",
    span: "wide",
    caption: "Design Lab weekly critique.",
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80",
    alt: "Meetup after-party",
    category: "Meetup",
    caption: "After-party under the lights.",
  },
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=80",
    alt: "Chalkboard planning",
    category: "Studio",
    caption: "Sprint planning at the loft.",
  },
];
