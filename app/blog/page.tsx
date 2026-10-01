import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import Newsletter from "@/components/Newsletter";
import { ArrowUpRight } from "lucide-react";

export const metadata = { title: "Stories & essays" };

const posts = [
  {
    title: "How we ran our first hackathon in Ikorodu",
    excerpt:
      "A long, honest look at the logistics, budgeting and lessons of running Ikorodu Hackathon 1.0 on a shoestring.",
    author: "Timilehin Adeyemi",
    date: "Feb 12, 2026",
    tag: "Community",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "The taste bar: how IKTC critiques design",
    excerpt:
      "Craft is a muscle. Here's how the Design Lab runs weekly critiques that feel warm and land honestly.",
    author: "Zara Ibrahim",
    date: "Mar 04, 2026",
    tag: "Design",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Shipping AI features without setting money on fire",
    excerpt:
      "A pragmatic guide from three IKTC engineers who ship AI-powered features to real users in production.",
    author: "Adaeze Okafor",
    date: "Apr 22, 2026",
    tag: "AI",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "From Ikorodu to Paystack: a member story",
    excerpt:
      "How weekly circles, mentorship and a small hackathon led Emeka to his first senior engineering role.",
    author: "Emeka Okoye",
    date: "May 18, 2026",
    tag: "Career",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "What ₦2M in prizes buys a hackathon",
    excerpt:
      "The economics behind Ikorodu Hackathon 3.0 — how we allocate prizes, sponsorships and community wins.",
    author: "Segun Ojo",
    date: "Jun 09, 2026",
    tag: "Operations",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Weekly circles: our teaching model",
    excerpt:
      "Small groups, senior leads, shipped projects. A field guide to the pedagogy behind IKTC circles.",
    author: "Chinyere Umeh",
    date: "Jul 01, 2026",
    tag: "Learning",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80",
  },
];

import { getRemoteBlogPosts } from "@/lib/api";

export default async function BlogPage() {
  const remotePosts = await getRemoteBlogPosts();
  const displayPosts = remotePosts.length > 0 ? remotePosts : posts;
  const [featured, ...rest] = displayPosts;
  return (
    <>
      <PageHeader
        eyebrow="Stories"
        title="Essays, member stories and field notes."
        description="Written by IKTC members, edited by IKTC members. About what we build, what we teach, and what we learn."
      />

      <section>
        <div className="container">
          <Reveal>
            <Link
              href="#"
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center card overflow-hidden"
            >
              <div className="relative lg:col-span-7 aspect-[16/9] lg:aspect-[4/3]">
                <Image
                  src={featured.img}
                  alt={featured.title}
                  fill
                  priority
                  sizes="(min-width:1024px) 55vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="lg:col-span-5 p-8 md:p-10">
                <span className="chip">{featured.tag}</span>
                <h2 className="h-display mt-5 text-3xl md:text-4xl leading-tight text-ink">
                  {featured.title}
                </h2>
                <p className="mt-4 text-ink/70">{featured.excerpt}</p>
                <p className="mt-6 text-sm text-ink/60">
                  {featured.author} · {featured.date}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink group-hover:text-brand transition">
                  Read essay <ArrowUpRight size={16} />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => (
              <StaggerItem key={p.title}>
                <Link
                  href="#"
                  className="group card overflow-hidden flex flex-col h-full"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="chip w-fit">{p.tag}</span>
                    <h3 className="mt-4 h-display text-xl text-ink leading-snug">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink/70 line-clamp-3">
                      {p.excerpt}
                    </p>
                    <p className="mt-auto pt-6 text-xs text-ink/50">
                      {p.author} · {p.date}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
