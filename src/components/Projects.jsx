import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "p1",
    title: "Nimbus Banking",
    industry: "FinTech · SaaS",
    services: ["UI/UX", "Design System", "Web App"],
    result: "+38% activation",
    img: "https://images.pexels.com/photos/8408537/pexels-photo-8408537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "p2",
    title: "Helio Analytics",
    industry: "B2B SaaS",
    services: ["Dashboard UX", "Data Viz", "Branding"],
    result: "+52% retention",
    img: "https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "p3",
    title: "Mantra Studio",
    industry: "Lifestyle · D2C",
    services: ["Brand Identity", "Web", "Print"],
    result: "+2.4× sales",
    img: "https://images.unsplash.com/photo-1670589953882-b94c9cb380f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxkaWdpdGFsJTIwZGVzaWduJTIwYWdlbmN5JTIwbW9kZXJuJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzgyMTE3NDY1fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "p4",
    title: "Verdant Health",
    industry: "Healthcare",
    services: ["Mobile App", "Illustration", "UX Research"],
    result: "4.9★ App Store",
    img: "https://images.unsplash.com/photo-1574848296471-28f79a036f79?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGVzaWduJTIwYWdlbmN5JTIwbW9kZXJuJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzgyMTE3NDY1fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "p5",
    title: "Atlas Travel",
    industry: "Travel · Booking",
    services: ["Web Design", "Conversion", "CMS"],
    result: "+71% bookings",
    img: "https://images.pexels.com/photos/8408537/pexels-photo-8408537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;
      const isLg = window.matchMedia("(min-width: 1024px)").matches;
      if (!isLg) return;
      const total = track.scrollWidth - window.innerWidth + 96;
      const anim = gsap.to(track, {
        x: () => -total,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${total}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
      return () => anim.scrollTrigger?.kill();
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-obsidian text-white overflow-hidden py-20 lg:py-0 lg:h-screen lg:flex lg:items-center"
      data-testid="projects-section"
    >
      <div className="lg:absolute lg:top-12 lg:left-0 lg:right-0 px-6 md:px-12 lg:px-16 mb-10 lg:mb-0 z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-px bg-white/40" />
          <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/60">
            Featured Projects
          </span>
        </div>
        <div className="flex items-end justify-between flex-wrap gap-6">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tighter max-w-3xl">
            Selected work, <span className="italic text-white/55">crafted</span>{" "}
            with intention.
          </h2>
          <p className="text-white/45 text-sm uppercase tracking-[0.25em] hidden lg:block">
            Scroll →
          </p>
        </div>
      </div>

      <div className="lg:overflow-hidden w-full lg:mt-32">
        <div
          ref={trackRef}
          className="flex gap-6 md:gap-8 px-6 md:px-12 lg:px-16 flex-col lg:flex-row will-change-transform"
        >
          {projects.map((p, i) => (
            <article
              key={p.id}
              className="flex-shrink-0 w-full lg:w-[68vw] xl:w-[58vw] max-w-[1000px]"
              data-testid={`project-card-${p.id}`}
            >
              <div
                className="relative group overflow-hidden rounded-2xl aspect-[16/10] bg-neutral-900"
                data-cursor-hover="true"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
                <div className="absolute top-5 left-5 right-5 flex justify-between text-xs uppercase tracking-[0.25em] text-white/80">
                  <span>{p.industry}</span>
                  <span>0{i + 1} / 0{projects.length}</span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl text-white tracking-tight">
                      {p.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {p.services.map((s) => (
                        <span
                          key={s}
                          className="text-[11px] uppercase tracking-wider px-3 py-1 rounded-full border border-white/25 text-white/80"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right hidden md:block">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                      Result
                    </p>
                    <p className="font-display text-2xl text-white mt-1">
                      {p.result}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
          <div className="flex-shrink-0 w-px lg:w-24" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
