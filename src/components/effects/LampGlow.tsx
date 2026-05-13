type LampGlowProps = {
  className?: string;
  /** Cor base do facho. Default: cream warm que casa com o spotlight do hero. */
  color?: string;
  /** Cor mais saturada do core. Default: warm cream brilhante. */
  highlight?: string;
};

/**
 * Lamp effect inspirado na demo da Aceternity, reescrito nativamente.
 * Composição: linha bright + duas elipses radial blur empilhadas, todas em mix-blend-screen
 * para somar com a luz já existente da imagem por baixo.
 *
 * Use `className` para posicionar (top/left/translate) sobre o spotlight da imagem alvo.
 */
export function LampGlow({
  className = "",
  color = "rgba(255, 232, 168, 0.65)",
  highlight = "rgba(255, 250, 220, 1)"
}: LampGlowProps) {
  return (
    <div className={`pointer-events-none absolute z-[2] mix-blend-screen ${className}`} aria-hidden="true">
      {/* Linha bright */}
      <span
        className="animate-lamp-line absolute left-1/2 top-0 h-[2px] w-[clamp(10rem,32vw,30rem)]"
        style={{
          background: `linear-gradient(to right, transparent 0%, ${highlight} 50%, transparent 100%)`,
          boxShadow: `0 0 40px 10px ${color}, 0 0 80px 24px ${color}`
        }}
      />
      {/* Elipse interna mais intensa */}
      <span
        className="animate-lamp-glow absolute left-1/2 top-0 h-[32rem] w-[clamp(16rem,46vw,42rem)] blur-2xl"
        style={{ background: `radial-gradient(ellipse 60% 50% at top, ${color}, transparent 65%)` }}
      />
      {/* Elipse externa difusa */}
      <span
        className="animate-lamp-glow-soft absolute left-1/2 top-0 h-[44rem] w-[clamp(20rem,60vw,52rem)] opacity-80 blur-3xl"
        style={{ background: `radial-gradient(ellipse 55% 45% at top, ${color}, transparent 75%)` }}
      />
      {/* Hotspot central no topo */}
      <span
        className="animate-lamp-glow absolute left-1/2 top-0 h-[14rem] w-[clamp(8rem,22vw,18rem)] blur-xl"
        style={{ background: `radial-gradient(ellipse 50% 50% at top, ${highlight}, transparent 60%)` }}
      />
    </div>
  );
}
