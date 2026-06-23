import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Mahesh redesigned our entire SaaS dashboard in 6 weeks. Activation jumped 38% in the first month. He thinks like a product owner, not just a designer.",
    name: "Aarav Kapoor",
    role: "Co-founder, Nimbus Banking",
  },
  {
    quote:
      "Design Adda delivered a complete brand system — identity, website, decks, social — and every piece feels like it was made by a 20-person agency.",
    name: "Priya Menon",
    role: "Head of Marketing, Helio Analytics",
  },
  {
    quote:
      "Working with Mahesh was the smoothest design process we've ever had. Crisp briefs, faster turnaround, zero ego.",
    name: "Daniel Reyes",
    role: "CEO, Mantra Studio",
  },
  {
    quote:
      "Our app store rating jumped from 3.6 to 4.9 after the redesign. The motion details and micro-interactions made everything feel premium.",
    name: "Karan Shah",
    role: "Product Lead, Verdant Health",
  },
];

const Testimonials = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);
  const t = testimonials[i];

  return (
    <section
      className="relative bg-obsidian text-white py-24 md:py-32 lg:py-40 overflow-hidden"
      data-testid="testimonials-section"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="flex items-center gap-3 mb-14">
          <span className="w-10 h-px bg-white/40" />
          <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/60">
            Kind Words
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <h2 className="lg:col-span-5 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tighter">
            Trusted by founders &{" "}
            <span className="italic text-white/55">teams</span> across 20+
            industries.
          </h2>

          <div className="lg:col-span-7 relative min-h-[320px] md:min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
                className="glass rounded-2xl p-8 md:p-12"
                data-testid={`testimonial-${i}`}
              >
                <span className="font-display text-7xl text-white/15 leading-none">
                  &ldquo;
                </span>
                <p className="font-display text-2xl md:text-3xl leading-snug tracking-tight text-white -mt-6">
                  {t.quote}
                </p>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">{t.name}</p>
                    <p className="text-white/55 text-sm">{t.role}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, j) => (
                      <button
                        key={j}
                        onClick={() => setI(j)}
                        aria-label={`Testimonial ${j + 1}`}
                        data-testid={`testimonial-dot-${j}`}
                        className={`h-1 rounded-full transition-all ${
                          j === i ? "w-8 bg-white" : "w-3 bg-white/25 hover:bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
