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
      <legend className={clsx("text-xs font-bold uppercase tracking-wide text-slate-600", compact && "text-[10px]")}>
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
          <label className="space-y-1 text-sm font-semibold text-slate-700">
            Nome
            <input
              value={value.name || ""}
              onChange={(event) => onChange({ ...value, name: event.target.value.toUpperCase().slice(0, 16) })}
              className={clsx("h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-brand-blue", compact && "h-9 rounded-md px-2 text-xs")}
              placeholder="Ex.: GABRIEL"
            />
          </label>
          <label className="space-y-1 text-sm font-semibold text-slate-700">
            Número
            <input
              value={value.number || ""}
              onChange={(event) => onChange({ ...value, number: event.target.value.replace(/\D/g, "").slice(0, 2) })}
              className={clsx("h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-brand-blue", compact && "h-9 rounded-md px-2 text-xs")}
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
    "min-h-11 rounded-md border px-3 text-sm font-bold transition",
    compact && "min-h-9 rounded-md px-2 text-[11px]",
    active
      ? "border-brand-blue bg-brand-blue text-white shadow-card"
      : "border-slate-200 bg-white text-slate-700 hover:border-brand-blue hover:text-brand-blue"
  );
}
