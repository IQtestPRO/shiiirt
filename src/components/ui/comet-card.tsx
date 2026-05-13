"use client";

import { useRef } from "react";

type CometCardProps = {
  children: React.ReactNode;
  className?: string;
  /** Máximo de graus de inclinação em cada eixo. */
  maxTilt?: number;
};

/**
 * 3D tilt card wrapper inspirado no padrão CometCard da Aceternity.
 * Aplica rotateX/rotateY no filho conforme a posição do cursor, com transição
 * suave no enter/leave. Tudo via mutação direta de style (sem re-render).
 */
export function CometCard({ children, className = "", maxTilt = 8 }: CometCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const isInsideRef = useRef(false);

  function handleMove(event: React.PointerEvent<HTMLDivElement>) {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;
    const rect = container.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const rotX = (py - 0.5) * -2 * maxTilt;
    const rotY = (px - 0.5) * 2 * maxTilt;
    inner.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
    container.style.setProperty("--cc-x", `${(px * 100).toFixed(1)}%`);
    container.style.setProperty("--cc-y", `${(py * 100).toFixed(1)}%`);
  }

  function handleEnter() {
    isInsideRef.current = true;
    const inner = innerRef.current;
    if (!inner) return;
    inner.style.transitionDuration = "0ms";
  }

  function handleLeave() {
    isInsideRef.current = false;
    const inner = innerRef.current;
    const container = containerRef.current;
    if (!inner || !container) return;
    inner.style.transitionDuration = "450ms";
    inner.style.transform = "rotateX(0deg) rotateY(0deg)";
    container.style.removeProperty("--cc-x");
    container.style.removeProperty("--cc-y");
  }

  return (
    <div
      ref={containerRef}
      onPointerMove={handleMove}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      className={`group/comet relative isolate h-full [perspective:1200px] [contain:layout_style] ${className}`}
    >
      <div
        ref={innerRef}
        className="relative h-full w-full transition-transform duration-300 ease-out [transform-style:preserve-3d] will-change-transform"
      >
        {children}
        {/* Shine following the pointer */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 ease-out group-hover/comet:opacity-100"
          style={{
            background:
              "radial-gradient(220px circle at var(--cc-x, 50%) var(--cc-y, 50%), rgba(255,255,255,0.22), transparent 55%)",
            mixBlendMode: "soft-light"
          }}
        />
      </div>
    </div>
  );
}
