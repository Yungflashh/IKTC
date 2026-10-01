"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { gallery, type GalleryItem } from "@/lib/gallery";
import Lightbox from "./Lightbox";

const categories: Array<GalleryItem["category"] | "All"> = [
  "All",
  "Meetup",
  "Bootcamp",
  "Hackathon",
  "Conference",
  "Fireside",
  "Studio",
];

function spanClass(item: GalleryItem) {
  if (item.span === "large") return "sm:col-span-2 sm:row-span-2 aspect-square";
  if (item.span === "wide") return "sm:col-span-2 aspect-[16/9]";
  if (item.span === "tall") return "sm:row-span-2 aspect-[3/4] sm:aspect-auto";
  return "aspect-[4/3]";
}

export default function GalleryFull() {
  const [items, setItems] = useState<GalleryItem[]>(gallery);
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);

  // Fetch dynamic compressed WebP images from MySQL database
  useState(() => {
    import("@/lib/api").then(({ getRemoteGallery }) => {
      getRemoteGallery().then((remoteItems) => {
        if (remoteItems.length > 0) {
          setItems(remoteItems as GalleryItem[]);
        }
      });
    });
  });

  const filtered = useMemo(
    () => (cat === "All" ? items : items.filter((g) => g.category === cat)),
    [cat, items]
  );

  return (
    <section className="pb-24">
      <div className="container">
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                cat === c
                  ? "bg-ink text-canvas border-ink"
                  : "bg-paper text-ink border-ink/15 hover:border-ink/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4"
          >
            {filtered.map((g, i) => (
              <motion.button
                type="button"
                key={g.src + cat}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.01 }}
                onClick={() => setOpen(i)}
                className={`group relative overflow-hidden rounded-2xl ${spanClass(g)}`}
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
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <Lightbox
        items={filtered}
        index={open}
        onClose={() => setOpen(null)}
        onPrev={() =>
          setOpen((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length))
        }
        onNext={() =>
          setOpen((i) => (i === null ? null : (i + 1) % filtered.length))
        }
      />
    </section>
  );
}
