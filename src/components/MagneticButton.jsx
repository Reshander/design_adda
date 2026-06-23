import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const MagneticButton = ({
  children,
  variant = "primary",
  href,
  onClick,
  testId,
  className = "",
  ...rest
}) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.4 });
  const tx = useTransform(sx, (v) => v);
  const ty = useTransform(sy, (v) => v);

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const mx = e.clientX - (rect.left + rect.width / 2);
    const my = e.clientY - (rect.top + rect.height / 2);
    x.set(mx * 0.25);
    y.set(my * 0.35);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClass =
    "inline-flex items-center justify-center gap-3 rounded-full font-medium text-base md:text-lg transition-colors duration-300 px-8 md:px-10 py-4 md:py-[18px] tracking-tight";
  const variantClass =
    variant === "primary"
      ? "bg-white text-obsidian hover:bg-white/90"
      : variant === "dark"
      ? "bg-obsidian text-white hover:bg-black"
      : "border border-white/25 text-white hover:bg-white hover:text-obsidian";

  const Inner = (
    <motion.span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      style={{ x: tx, y: ty }}
      className={`${baseClass} ${variantClass} ${className}`}
      data-testid={testId}
      data-cursor-hover="true"
      {...rest}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {Inner}
      </a>
    );
  }
  return Inner;
};

export default MagneticButton;
