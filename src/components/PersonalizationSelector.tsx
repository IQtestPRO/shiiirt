"use client";

import clsx from "clsx";
import type { Personalization } from "@/types/product";

type PersonalizationSelectorProps = {
  customizable: boolean;
  value: Personalization;
  onChange: (value: Personalization) => void;
  compact?: boolean;
};

export function PersonalizationSelector({
  customizable,
  value,
  onChange,
  compact = false
}: PersonalizationSelectorProps) {
  return (
    <fieldset className={clsx("space-y-3", compact && "space-y-2")}>
      <legend className={clsx("font-lato text-[10px] font-bold uppercase tracking-[0.28em] text-brand-ink/55", compact && "text-[9.5px]")}>
        Personalize aqui
      </legend>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <button
          type="button"
          aria-pressed={!value.enabled}
          onClick={() => onChange({ enabled: false })}
          className={optionClass(!value.enabled, compact)}
        >
          Sem personalização
        </button>
        <button
          type="button"
          aria-pressed={value.enabled}
          disabled={!customizable}
          onClick={() => customizable && onChange({ enabled: true, name: value.name || "", number: value.number || "" })}
          className={clsx(optionClass(value.enabled, compact), !customizable && "cursor-not-allowed opacity-45")}
        >
          Com personalização
        </button>
      </div>

      {value.enabled ? (
        <div className={clsx("grid gap-2 sm:grid-cols-[1fr_120px]", compact && "grid-cols-[1fr_72px] sm:grid-cols-[1fr_72px]")}>
          <label className="font-poppins space-y-1 text-[13px] font-semibold text-brand-ink/75">
            Nome
            <input
              value={value.name || ""}
              onChange={(event) => onChange({ ...value, name: event.target.value.toUpperCase().slice(0, 16) })}
              className={clsx("font-poppins h-11 w-full rounded-lg border border-brand-ink/15 bg-brand-paper px-3 text-[13px] text-brand-ink outline-none transition-colors duration-150 ease-out focus:border-brand-ink", compact && "h-9 px-2 text-[12px]")}
              placeholder="Ex.: GABRIEL"
            />
          </label>
          <label className="font-poppins space-y-1 text-[13px] font-semibold text-brand-ink/75">
            Número
            <input
              value={value.number || ""}
              onChange={(event) => onChange({ ...value, number: event.target.value.replace(/\D/g, "").slice(0, 2) })}
              className={clsx("font-poppins tabular h-11 w-full rounded-lg border border-brand-ink/15 bg-brand-paper px-3 text-[13px] text-brand-ink outline-none transition-colors duration-150 ease-out focus:border-brand-ink", compact && "h-9 px-2 text-[12px]")}
              inputMode="numeric"
              placeholder="10"
            />
          </label>
        </div>
      ) : null}
    </fieldset>
  );
}

function optionClass(active: boolean, compact = false) {
  return clsx(
    "font-poppins min-h-11 rounded-lg border px-3 text-[13px] font-bold transition-colors duration-200 ease-out",
    compact && "min-h-9 px-2 text-[11px]",
    active
      ? "border-brand-ink bg-brand-ink text-brand-paper"
      : "border-brand-ink/12 bg-brand-paper text-brand-ink/75 hover:border-brand-ink/40 hover:text-brand-ink"
  );
}
