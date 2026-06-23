import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "9+", label: "Years Experience" },
  { value: "150+", label: "Projects Delivered" },
  { value: "100+", label: "Happy Clients" },
  { value: "20+", label: "Industries Served" },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-alabaster text-obsidian py-24 md:py-32 lg:py-40"
      data-testid="about-section"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center gap-3 mb-14">
          <span className="w-10 h-px bg-obsidian/40" />
          <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-obsidian/60">
            About Design Adda
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Founder image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden bg-obsidian aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1767175473698-859bc73e8e64"
                alt="Mahesh - Founder of Design Adda"
                className="w-full h-full object-cover grayscale"
                loading="lazy"
                data-testid="founder-photo"
              />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="font-display text-3xl md:text-4xl text-white tracking-tight">
                    Mahesh
                  </p>
                  <p className="text-sm text-white/70 mt-1">
                    Founder · Lead Designer
                  </p>
                </div>
                <div className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 text-white text-xs uppercase tracking-[0.2em]">
                  ●  9Y+
                </div>
              </div>
            </div>
          </motion.div>

          {/* Copy + stats */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tighter"
            >
              A one-person studio that{" "}
              <span className="italic text-obsidian/60">thinks</span> like an
              agency &{" "}
              <span className="italic text-obsidian/60">moves</span> like a
              founder.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-8 text-lg md:text-xl text-obsidian/70 max-w-2xl leading-relaxed"
            >
              Design Adda is led by Mahesh — a UI/UX, web & graphic designer who has
              spent the last 9+ years shaping digital products, brands and
              campaigns for startups, SaaS teams and enterprises. We sit at the
              intersection of <span className="text-obsidian">strategy</span>,{" "}
              <span className="text-obsidian">craft</span> and{" "}
              <span className="text-obsidian">conversion</span>.
            </motion.p>

            <div
              className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 border-t border-obsidian/15 pt-10"
              data-testid="about-stats"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="flex flex-col"
                >
                  <span className="font-display text-5xl md:text-6xl tracking-tighter">
                    {s.value}
                  </span>
                  <span className="mt-2 text-xs md:text-sm uppercase tracking-[0.2em] text-obsidian/55">
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
