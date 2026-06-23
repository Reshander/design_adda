import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 9, suffix: "+", label: "Years of design craft" },
  { value: 150, suffix: "+", label: "Projects shipped" },
  { value: 100, suffix: "+", label: "Clients worldwide" },
  { value: 98, suffix: "%", label: "Satisfaction rate" },
];

const Counter = ({ value, suffix, active }) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let frame;
    const start = performance.now();
    const duration = 1600;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);
  return (
    <span className="font-display text-[18vw] md:text-[10vw] lg:text-[8vw] leading-[0.85] tracking-tighter">
      {n}
      {suffix}
    </span>
  );
};

const WhyUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section
      ref={ref}
      className="relative bg-obsidian text-white py-24 md:py-32 lg:py-40 overflow-hidden"
      data-testid="why-us-section"
    >
      <div className="noise-overlay" />
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="flex items-center gap-3 mb-12">
          <span className="w-10 h-px bg-white/40" />
          <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/60">
            Why Design Adda
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tighter max-w-4xl mb-20">
          The numbers behind the{" "}
          <span className="italic text-white/55">craft</span>.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-24 gap-x-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="flex flex-col border-t border-white/10 pt-6"
              data-testid={`counter-${i}`}
            >
              <Counter value={s.value} suffix={s.suffix} active={inView} />
              <span className="mt-4 text-sm md:text-base uppercase tracking-[0.25em] text-white/55">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
