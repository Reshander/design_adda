import React, { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const s = h > 0 ? window.scrollY / h : 0;
      setP(Math.min(1, Math.max(0, s)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] bg-white/5 z-[60] pointer-events-none"
      data-testid="scroll-progress"
    >
      <div
        className="h-full bg-white origin-left"
        style={{ transform: `scaleX(${p})` }}
      />
    </div>
  );
};

export default ScrollProgress;
