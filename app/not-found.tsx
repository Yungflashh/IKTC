import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container text-center max-w-xl mx-auto">
        <p className="eyebrow">404</p>
        <h1 className="h-display mt-4 text-5xl md:text-6xl leading-none text-ink">
          We can&rsquo;t find that page.
        </h1>
        <p className="mt-4 text-ink/70">
          It may have moved. Try heading back home or browsing our events.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-dark">Back home</Link>
          <Link href="/events" className="btn-outline">Browse events</Link>
        </div>
      </div>
    </section>
  );
}
