import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let rafId;
    let mouseX = 0, mouseY = 0;
    let posX = 0, posY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const tick = () => {
      posX += (mouseX - posX) * 0.18;
      posY += (mouseY - posY) * 0.18;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${posX - 6}px, ${posY - 6}px, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    const onOver = (e) => {
      const t = e.target;
      if (
        t.closest("a, button, [data-cursor-hover='true'], input, textarea, select, label")
      ) {
        setHovering(true);
      }
    };
    const onOut = (e) => {
      const t = e.target;
      if (
        t.closest("a, button, [data-cursor-hover='true'], input, textarea, select, label")
      ) {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${hovering ? "is-hover" : ""}`}
      data-testid="custom-cursor"
      aria-hidden
    />
  );
};

export default CustomCursor;
