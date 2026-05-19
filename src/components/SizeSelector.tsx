"use client";

import clsx from "clsx";

type SizeSelectorProps = {
  sizes: string[];
  value?: string;
  onChange: (size: string) => void;
  compact?: boolean;
};

export function SizeSelector({ sizes, value, onChange, compact = false }: SizeSelectorProps) {
  return (
    <fieldset>
      <legend className="font-lato mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-brand-ink/55">Tamanho</legend>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            aria-pressed={value === size}
            onClick={() => onChange(size)}
            className={clsx(
              "font-poppins min-h-11 min-w-11 rounded-lg border px-3 text-[13px] font-bold transition-colors duration-200 ease-out",
              compact && "min-h-9 min-w-9 px-2 text-[11px]",
              value === size
                ? "border-brand-ink bg-brand-ink text-brand-paper"
                : "border-brand-ink/12 bg-brand-paper text-brand-ink/75 hover:border-brand-ink/40 hover:text-brand-ink"
            )}
          >
            {size}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
