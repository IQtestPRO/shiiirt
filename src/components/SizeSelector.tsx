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
      <legend className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-600">Tamanho</legend>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            aria-pressed={value === size}
            onClick={() => onChange(size)}
            className={clsx(
              "min-h-11 min-w-11 rounded-md border px-3 text-sm font-bold transition",
              compact && "min-h-9 min-w-9 rounded-md px-2 text-[11px]",
              value === size
                ? "border-brand-blue bg-brand-blue text-white shadow-card"
                : "border-slate-200 bg-white text-slate-700 hover:border-brand-blue hover:text-brand-blue"
            )}
          >
            {size}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
