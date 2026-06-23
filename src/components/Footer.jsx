import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="relative bg-obsidian text-white border-t border-white/10 overflow-hidden"
      data-testid="footer"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.25em] text-white/45 mb-4">
              Studio
            </p>
            <p className="font-display text-2xl md:text-3xl tracking-tight max-w-md leading-snug">
              Design Adda is a one-designer studio crafting digital products,
              brands &amp; campaigns that actually convert.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.25em] text-white/45 mb-4">
              Quick Links
            </p>
            <ul className="space-y-2 text-white/70">
              {[
                ["Work", "projects"],
                ["Services", "services"],
                ["About", "about"],
                ["Process", "process"],
                ["Contact", "contact"],
              ].map(([l, id]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="link-underline hover:text-white"
                    data-testid={`footer-link-${id}`}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.25em] text-white/45 mb-4">
              Services
            </p>
            <ul className="space-y-2 text-white/70">
              {[
                "UI/UX Design",
                "Website Design",
                "Logo & Branding",
                "Marketing Creatives",
                "HTML Conversion",
              ].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.25em] text-white/45 mb-4">
              Social
            </p>
            <ul className="space-y-2 text-white/70">
              {[
                ["Instagram", "https://instagram.com"],
                ["Dribbble", "https://dribbble.com"],
                ["Behance", "https://behance.net"],
                ["LinkedIn", "https://linkedin.com"],
                ["Twitter / X", "https://x.com"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a
                    href={h}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline hover:text-white"
                    data-testid={`footer-social-${l.replace(/\W/g, "").toLowerCase()}`}
                  >
                    {l} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Massive brand text */}
        <div className="select-none overflow-hidden border-y border-white/10 py-8 md:py-12">
          <p
            className="font-display text-[18vw] md:text-[14vw] lg:text-[12vw] leading-[0.85] tracking-tighter text-white text-center md:text-left"
            data-testid="footer-massive-brand"
          >
            DESIGN ADDA<span className="text-white/30">.</span>
          </p>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm text-white/55">
          <p>© {year} Design Adda — Crafted by Mahesh. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#top" className="hover:text-white" data-testid="footer-back-to-top">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
