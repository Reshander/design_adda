import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Smartphone,
  LayoutDashboard,
  Globe,
  Palette,
  Share2,
  FileText,
  Megaphone,
  Code2,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Design",
    desc: "End-to-end iOS & Android UI/UX with handoff-ready specs.",
    tag: "01",
  },
  {
    icon: LayoutDashboard,
    title: "Web App Design",
    desc: "Complex SaaS dashboards, data tooling and admin systems.",
    tag: "02",
  },
  {
    icon: Globe,
    title: "Website Development",
    desc: "Marketing sites, landing pages & WordPress, built to convert.",
    tag: "03",
  },
  {
    icon: Palette,
    title: "Logo & Branding",
    desc: "Identity systems, guidelines and corporate collateral.",
    tag: "04",
  },
  {
    icon: Share2,
    title: "Social Media Design",
    desc: "Scroll-stopping creatives, reels covers & content templates.",
    tag: "05",
  },
  {
    icon: FileText,
    title: "Brochure Design",
    desc: "Brochures, flyers, emailers & corporate documents.",
    tag: "06",
  },
  {
    icon: Megaphone,
    title: "Marketing Creatives",
    desc: "Hoardings, standees, print ads & launch campaigns.",
    tag: "07",
  },
  {
    icon: Code2,
    title: "HTML Conversion",
    desc: "Pixel-perfect HTML/CSS/JS conversion from any design.",
    tag: "08",
  },
];

const ServiceCard = ({ icon: Icon, title, desc, tag, index }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-50, 50], [8, -8]), { stiffness: 200, damping: 16 });
  const ry = useSpring(useTransform(x, [-50, 50], [-8, 8]), { stiffness: 200, damping: 16 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set(e.clientX - (r.left + r.width / 2));
    y.set(e.clientY - (r.top + r.height / 2));
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.08 }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative glass rounded-2xl p-7 md:p-9 overflow-hidden cursor-default"
      data-testid={`service-card-${tag}`}
    >
      <div
        className="absolute -top-20 -right-20 w-56 h-56 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.18), transparent 60%)",
        }}
      />
      <div className="relative z-10 flex flex-col h-full min-h-[260px]">
        <div className="flex items-start justify-between">
          <div className="w-14 h-14 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <Icon className="w-6 h-6 text-white" strokeWidth={1.4} />
          </div>
          <span className="font-mono text-xs text-white/40 tracking-widest">
            / {tag}
          </span>
        </div>

        <div className="mt-auto pt-12">
          <h3 className="font-display text-2xl md:text-3xl text-white tracking-tight leading-tight">
            {title}
          </h3>
          <p className="mt-3 text-sm md:text-base text-white/55 leading-relaxed">
            {desc}
          </p>
        </div>

        <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/40 group-hover:text-white transition-colors">
          <span>Explore</span>
          <span className="w-8 h-px bg-current" />
          <span aria-hidden>↗</span>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section
      id="services"
      className="relative bg-obsidian text-white py-24 md:py-32 lg:py-40 overflow-hidden"
      data-testid="services-section"
    >
      <div className="noise-overlay" />
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-10 h-px bg-white/40" />
          <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/60">
            Our Expertise
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          <h2 className="lg:col-span-8 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tighter">
            From a single icon to a{" "}
            <span className="italic text-white/55">full product launch</span>{" "}
            — built end-to-end, in-house.
          </h2>
          <p className="lg:col-span-4 lg:col-start-9 text-white/55 text-base md:text-lg leading-relaxed lg:pt-3">
            Eight focused services. One designer. Zero hand-offs. Every
            deliverable is owned, crafted and shipped under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
