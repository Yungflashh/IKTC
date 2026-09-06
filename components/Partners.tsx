import { Reveal } from "./Motion";

const partners = [
  "Paystack",
  "Flutterwave",
  "Moniepoint",
  "Andela",
  "Bumpa",
  "PiggyVest",
  "Kuda",
  "Future Africa",
  "Vercel",
  "Figma",
];

export default function Partners() {
  return (
    <section className="pt-8 pb-20 md:pb-28">
      <div className="container">
        <Reveal>
          <p className="text-center text-sm text-ink/60">
            Supported by teams building at the frontier of African tech
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-4">
          {partners.map((p) => (
            <div
              key={p}
              className="border-t border-line py-6 text-center font-display text-lg md:text-xl tracking-tightest text-ink/70 hover:text-ink transition"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
