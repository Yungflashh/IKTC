"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type Stat = { value: number; label: string; suffix?: string; prefix?: string };

const stats: Stat[] = [
  { value: 12, label: "Universities partnered", suffix: "" },
  { value: 480, label: "Members hired last year", suffix: "+" },
  { value: 8.4, label: "In scholarships (₦M)", prefix: "₦" },
  { value: 24, label: "Volunteer organisers" },
];

function Counter({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const [n, setN] = useState(0);
  const reduce = useReducedMotion();
  const decimals = String(to).includes(".") ? 1 : 0;

  useEffect(() => {
    if (reduce) {
      setN(to);
      return;
    }
    let start: number | null = null;
    const dur = 1400;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min(1, (ts - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(parseFloat((to * eased).toFixed(decimals)));
      if (p < 1) requestAnimationFrame(step);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [to, reduce, decimals]);

  return (
    <span>
      {prefix}
      {decimals ? n.toFixed(1) : n.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ImpactBand() {
  return (
    <section className="pb-4">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl bg-ink text-canvas p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <p className="h-display text-4xl md:text-5xl tracking-tightest text-canvas">
                  <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-canvas/60">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
