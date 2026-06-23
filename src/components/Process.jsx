import React from "react";
import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Discover", desc: "Kickoff workshops, audits and goal mapping to define what success looks like." },
  { n: "02", title: "Research", desc: "User interviews, competitor study and benchmarking against best-in-class." },
  { n: "03", title: "Wireframe", desc: "Information architecture, low-fi flows and rapid clickable structures." },
  { n: "04", title: "Design", desc: "Pixel-perfect UI, component systems, motion specs and stakeholder reviews." },
  { n: "05", title: "Prototype", desc: "Interactive prototypes for usability testing and dev alignment." },
  { n: "06", title: "Develop", desc: "Front-end build, HTML conversion or CMS integration — production ready." },
  { n: "07", title: "Launch", desc: "QA, handoff, launch support and post-launch iteration sprints." },
];

const Process = () => {
  return (
    <section
      id="process"
      className="relative bg-alabaster text-obsidian py-24 md:py-32 lg:py-40"
      data-testid="process-section"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sticky label */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-px bg-obsidian/40" />
                <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-obsidian/60">
                  Our Process
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tighter">
                Seven steps. <span className="italic text-obsidian/55">Zero</span>{" "}
                guesswork.
              </h2>
              <p className="mt-6 text-obsidian/65 max-w-md text-base md:text-lg leading-relaxed">
                Every engagement runs on the same proven rails — from the first
                conversation to the day you ship.
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="lg:col-span-8 relative">
            <div className="absolute left-[18px] top-2 bottom-2 w-px bg-obsidian/15 hidden md:block" />
            <div className="space-y-10 md:space-y-14">
              {steps.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: i * 0.05 }}
                  className="relative flex gap-6 md:gap-10"
                  data-testid={`process-step-${s.n}`}
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-obsidian text-white text-xs font-mono flex items-center justify-center">
                      {s.n}
                    </div>
                  </div>
                  <div className="flex-1 pb-8 border-b border-obsidian/15">
                    <h3 className="font-display text-3xl md:text-4xl tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-obsidian/65 text-base md:text-lg leading-relaxed max-w-xl">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
