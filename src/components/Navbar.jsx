import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Work", id: "projects" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Process", id: "process" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-obsidian/60 backdrop-blur-xl border-b border-white/5"
            : "py-6 bg-transparent"
        }`}
        data-testid="site-navbar"
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2"
            data-testid="navbar-logo"
          >
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
              <span className="font-display text-obsidian font-bold text-lg">D</span>
            </div>
            <span className="font-display text-white text-xl tracking-tight">
              Design Adda
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-sm text-white/70 hover:text-white transition-colors link-underline"
                data-testid={`nav-link-${l.id}`}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollTo("contact")}
            className="hidden lg:inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm text-white hover:bg-white hover:text-obsidian transition-colors"
            data-testid="nav-cta-start-project"
          >
            Start a project
            <span aria-hidden>↗</span>
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
            data-testid="nav-mobile-toggle"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`h-px bg-white transition-transform ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
              <span className={`h-px bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-px bg-white transition-transform ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
            </div>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed top-[68px] left-0 right-0 z-40 bg-obsidian/95 backdrop-blur-xl border-b border-white/10"
            data-testid="nav-mobile-menu"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className="text-left font-display text-3xl text-white"
                  data-testid={`nav-mobile-link-${l.id}`}
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="mt-4 rounded-full bg-white text-obsidian px-6 py-3 self-start"
                data-testid="nav-mobile-cta"
              >
                Start a project ↗
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
