const items = [
  "Meetups",
  "Bootcamps",
  "Hackathons",
  "Mentorship",
  "Product",
  "Design",
  "AI",
  "Data",
  "Cloud",
  "Careers",
  "Fireside",
  "Community",
];

export default function Marquee() {
  return (
    <div className="border-y border-line bg-ink text-canvas py-5 overflow-hidden">
      <div className="marquee-track animate-marquee">
        {[...items, ...items, ...items].map((it, i) => (
          <span
            key={i}
            className="mx-8 inline-flex items-center gap-3 font-display text-2xl md:text-3xl tracking-tightest"
          >
            {it}
            <span className="text-brand">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
