import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const headlineLines = [
  "Crafting Exceptional",
  "Digital Experiences",
  "That Drive Results.",
];

const Hero = () => {
  const orbRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      if (!orbRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      orbRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-obsidian"
      data-testid="hero-section"
    >
      {/* Animated background */}
      <div
        ref={orbRef}
        className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full pointer-events-none opacity-40 blur-[120px] transition-transform duration-300 ease-out"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.18), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 gradient-radial pointer-events-none" />
      <div className="noise-overlay" />

      {/* Floating overlines */}
      <div className="absolute top-32 right-8 md:right-16 hidden md:flex flex-col items-end gap-1 text-xs uppercase tracking-[0.25em] text-white/40">
        <span>Est. 2016</span>
        <span>Bangalore · India</span>
      </div>

      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-16 pt-32 pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-10 h-px bg-white/40" />
          <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/60">
            Creative Studio · UI/UX · Branding
          </span>
        </motion.div>

        <h1
          className="font-display text-white leading-[0.92] tracking-tighter"
          data-testid="hero-headline"
        >
          {headlineLines.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1,
                  delay: 0.25 + i * 0.12,
                  ease: [0.77, 0, 0.175, 1],
                }}
                className="block text-[12vw] md:text-[9vw] lg:text-[7.2vw] font-medium"
              >
                {i === 1 ? (
                  <span className="italic font-display font-normal">{line}</span>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="md:col-span-6 text-lg md:text-xl text-white/65 max-w-xl leading-relaxed"
            data-testid="hero-subheading"
          >
            UI/UX Design, Branding, Websites & Creative Solutions for modern
            businesses — handcrafted by{" "}
            <span className="text-white">Mahesh</span> over{" "}
            <span className="text-white">9+ years</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="md:col-span-6 flex flex-wrap items-center gap-4 md:justify-end"
          >
            <MagneticButton
              variant="primary"
              onClick={() => scrollToId("projects")}
              testId="hero-cta-view-portfolio"
            >
              View Portfolio
              <span aria-hidden>↓</span>
            </MagneticButton>
            <MagneticButton
              variant="outline"
              onClick={() => scrollToId("contact")}
              testId="hero-cta-work-together"
            >
              Let's Work Together
              <span aria-hidden>↗</span>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-20 md:mt-28 flex flex-wrap items-end justify-between gap-6 border-t border-white/10 pt-8"
        >
          <div className="flex items-center gap-6 text-white/60 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for new projects
            </span>
          </div>
          <div className="flex items-center gap-3 text-white/50 text-xs uppercase tracking-[0.3em]">
            <span>Scroll</span>
            <span className="w-12 h-px bg-white/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
