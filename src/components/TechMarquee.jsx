import React from "react";

const tools = [
  "Figma",
  "Adobe XD",
  "Photoshop",
  "Illustrator",
  "After Effects",
  "HTML5",
  "CSS3",
  "JavaScript",
  "WordPress",
  "Webflow",
  "Framer",
  "Notion",
];

const Marquee = ({ reverse = false, stroke = false }) => (
  <div className="overflow-hidden w-full">
    <div
      className={`flex gap-12 md:gap-20 whitespace-nowrap ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      }`}
    >
      {[...tools, ...tools].map((t, i) => (
        <span
          key={i}
          className={`font-display text-6xl md:text-8xl lg:text-9xl tracking-tighter ${
            stroke ? "stroke-text" : "text-white"
          } flex items-center gap-12 md:gap-20`}
        >
          {t}
          <span className="text-white/30 text-3xl md:text-4xl" aria-hidden>
            ✦
          </span>
        </span>
      ))}
    </div>
  </div>
);

const TechMarquee = () => {
  return (
    <section
      className="relative bg-obsidian text-white py-24 md:py-32 overflow-hidden border-y border-white/5"
      data-testid="tech-marquee-section"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-12">
        <div className="flex items-center gap-3">
          <span className="w-10 h-px bg-white/40" />
          <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/60">
            Tools of the Trade
          </span>
        </div>
      </div>
      <div className="space-y-6 md:space-y-10">
        <Marquee />
        <Marquee reverse stroke />
      </div>
    </section>
  );
};

export default TechMarquee;
