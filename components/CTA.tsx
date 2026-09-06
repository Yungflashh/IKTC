import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Motion";

export default function CTA() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink text-canvas p-10 md:p-16">
            <div className="absolute inset-0 dots opacity-20" />
            <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <span className="chip bg-canvas/10 border-canvas/20 text-canvas/80">
                  Join IKTC
                </span>
                <h2 className="h-display mt-5 text-4xl md:text-5xl leading-tight tracking-tightest">
                  Come build with us in Ikorodu
                  <span className="text-brand">.</span>
                </h2>
                <p className="mt-4 text-canvas/70 max-w-xl">
                  Whether you&rsquo;re shipping your first component or your
                  fiftieth service, there&rsquo;s a seat at the table. It&rsquo;s
                  free to join, and always will be.
                </p>
              </div>
              <div className="md:col-span-4 flex md:justify-end">
                <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto">
                  <Link href="/events" className="btn-primary">
                    Book an event <ArrowUpRight size={16} />
                  </Link>
                  <Link
                    href="/contact"
                    className="btn border border-canvas/20 text-canvas hover:bg-canvas hover:text-ink"
                  >
                    Become a mentor
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
