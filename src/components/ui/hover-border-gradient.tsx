"use client";

type HoverBorderGradientProps = {
  children: React.ReactNode;
  /** Tailwind classes do wrapper externo (controla rounded, etc). */
  containerClassName?: string;
  /** Espessura do anel animado em pixels. */
  thickness?: number;
  /** Duração de uma volta completa do gradiente, em segundos. */
  duration?: number;
  /** Cor principal do gradiente (segmento 1). */
  colorFrom?: string;
  /** Cor de highlight do gradiente (segmento 2). */
  colorHighlight?: string;
};

/**
 * Wrapper inline com borda em conic-gradient rotativo.
 * Inspirado no padrão HoverBorderGradient da Aceternity, reescrito nativamente.
 * Use `containerClassName="rounded-full"` para botões pill.
 */
export function HoverBorderGradient({
  children,
  containerClassName = "",
  thickness = 2,
  duration = 2.8,
  colorFrom = "#F5D041",
  colorHighlight = "#FFFADC"
}: HoverBorderGradientProps) {
  return (
    <span
      className={`hbg group/hbg relative isolate inline-flex overflow-hidden ${containerClassName}`}
      style={{ padding: `${thickness}px` } as React.CSSProperties}
    >
      <span
        aria-hidden="true"
        className="hbg-spin pointer-events-none absolute left-1/2 top-1/2 h-[max(220%,420px)] w-[max(220%,420px)] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: `conic-gradient(from 0deg,
            ${colorFrom} 0deg,
            ${colorHighlight} 28deg,
            rgba(0,0,0,0) 96deg,
            rgba(0,0,0,0) 264deg,
            ${colorFrom} 332deg,
            ${colorFrom} 360deg)`,
          animationDuration: `${duration}s`
        }}
      />
      <span className="relative z-[1] inline-flex w-full">{children}</span>
    </span>
  );
}
