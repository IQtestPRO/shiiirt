import { storeName } from "@/lib/catalog";

type BrandMarkProps = {
  compact?: boolean;
  tone?: "light" | "dark";
  size?: "sm" | "md" | "lg";
};

export function BrandMark({ compact = false, tone = "light", size = "md" }: BrandMarkProps) {
  const isDark = tone === "dark";
  const wordTone = isDark ? "text-brand-ink" : "text-brand-paper";
  const subTone = isDark ? "text-brand-ink/55" : "text-brand-paper/70";

  const dim = size === "lg" ? "h-14 w-14" : size === "sm" ? "h-9 w-9" : "h-12 w-12";
  const monoSize = size === "lg" ? "text-[20px]" : size === "sm" ? "text-[12px]" : "text-[15px]";
  const ringStroke = isDark ? "stroke-brand-ink" : "stroke-brand-paper";
  const monoColor = isDark ? "text-brand-ink" : "text-brand-paper";
  const dotColor = isDark ? "fill-brand-ink" : "fill-brand-yellow";

  return (
    <span className="inline-flex items-center gap-3">
      <span className={`relative grid ${dim} shrink-0 place-items-center`}>
        <svg viewBox="0 0 64 64" className={`absolute inset-0 ${ringStroke}`} fill="none" aria-hidden="true">
          <circle cx="32" cy="32" r="30" strokeWidth="2" />
          <circle cx="32" cy="32" r="24" strokeWidth="1" strokeDasharray="2 3" opacity="0.65" />
          <defs>
            <path id="bm-ring" d="M32 6 a26 26 0 1 1 -0.1 0" />
          </defs>
          <text className={`font-poppins fill-current ${monoColor}`} fontSize="6" letterSpacing="3" fontWeight="800">
            <textPath href="#bm-ring" startOffset="2%">
              MUNDO · DAS · IMPORTADAS · 2026 ·
            </textPath>
          </text>
          <circle cx="32" cy="10" r="1.4" className={dotColor} strokeWidth="0" />
        </svg>
        <span className={`relative font-poppins font-extrabold tracking-[-0.04em] ${monoSize} ${monoColor}`}>
          MI
        </span>
      </span>
      {!compact ? (
        <span className="hidden min-w-0 sm:flex sm:flex-col">
          <span className={`font-poppins block text-[19px] font-extrabold leading-[1.0] tracking-[-0.025em] ${wordTone}`}>
            {storeName}
          </span>
          <span className={`mt-0.5 block text-[9.5px] font-bold uppercase tracking-[0.28em] ${subTone}`}>
            Camisas · importadas · pronta entrega
          </span>
        </span>
      ) : null}
    </span>
  );
}
