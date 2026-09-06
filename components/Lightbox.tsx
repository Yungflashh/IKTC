"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "@/lib/gallery";

export default function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    if (index === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [index, onClose, onPrev, onNext]);

  const item = index === null ? null : items[index];

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-sm grid place-items-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="90vw"
                className="object-cover"
                priority
              />
            </div>
            {item.caption && (
              <p className="mt-4 text-center text-canvas/85 text-sm">
                {item.caption} · <span className="text-brand">{item.category}</span>
              </p>
            )}

            <button
              onClick={onClose}
              className="absolute -top-3 -right-3 grid h-11 w-11 place-items-center rounded-full bg-canvas text-ink hover:bg-brand transition"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <button
              onClick={onPrev}
              className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 grid h-12 w-12 place-items-center rounded-full bg-canvas text-ink hover:bg-brand transition"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={onNext}
              className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 grid h-12 w-12 place-items-center rounded-full bg-canvas text-ink hover:bg-brand transition"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
