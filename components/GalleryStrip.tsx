"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Camera } from "lucide-react";
import Lightbox from "./Lightbox";
import { gallery } from "@/lib/gallery";
import { Reveal, Stagger, StaggerItem } from "./Motion";

const featured = gallery.slice(0, 8);

const layoutClasses = [
  "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto",
  "md:col-span-1 md:row-span-1 aspect-[4/3] md:aspect-square",
  "md:col-span-1 md:row-span-1 aspect-[4/3] md:aspect-square",
  "md:col-span-1 md:row-span-2 aspect-[4/3] md:aspect-[3/4]",
  "md:col-span-1 md:row-span-1 aspect-[4/3] md:aspect-square",
  "md:col-span-1 md:row-span-1 aspect-[4/3] md:aspect-square",
  "md:col-span-2 md:row-span-1 aspect-[16/9]",
  "md:col-span-2 md:row-span-1 aspect-[16/9]",
];

export default function GalleryStrip() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">
              <Camera size={14} className="text-brand" /> Gallery
            </span>
            <h2 className="h-display mt-3 text-4xl md:text-5xl leading-tight text-ink">
              Snapshots from the community.
            </h2>
            <p className="mt-4 text-ink/70">
              Every month, our members show up, ship, and celebrate. A small
              window into what happens when they do.
            </p>
          </Reveal>
          <Link href="/gallery" className="btn-dark">
            View full gallery <ArrowUpRight size={16} />
          </Link>
        </div>

        <Stagger className="mt-12 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {featured.map((g, i) => (
            <StaggerItem key={g.src} className={layoutClasses[i]}>
              <motion.button
                type="button"
                onClick={() => setOpen(i)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="group relative block h-full w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width:1024px) 25vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition" />
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition">
                  <span className="chip bg-canvas/90">{g.category}</span>
                  {g.caption && (
                    <p className="mt-2 text-sm text-canvas font-medium line-clamp-1">
                      {g.caption}
                    </p>
                  )}
                </div>
              </motion.button>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <Lightbox
        items={featured}
        index={open}
        onClose={() => setOpen(null)}
        onPrev={() =>
          setOpen((i) => (i === null ? null : (i - 1 + featured.length) % featured.length))
        }
        onNext={() =>
          setOpen((i) => (i === null ? null : (i + 1) % featured.length))
        }
      />
    </section>
  );
}
