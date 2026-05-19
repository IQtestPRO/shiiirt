"use client";

import clsx from "clsx";

export type Filters = {
  size: string;
  gender: string;
  price: string;
  ready: boolean;
  customizable: boolean;
  sort: string;
};

type FilterPanelProps = {
  filters: Filters;
  onChange: (filters: Filters) => void;
  availableSizes: string[];
};

const genders = ["todos", "masculino", "feminino", "infantil", "unissex"];
const prices = [
  { value: "all", label: "Todos os preços" },
  { value: "under-180", label: "Até R$ 180" },
  { value: "180-200", label: "R$ 180 a R$ 200" },
  { value: "over-200", label: "Acima de R$ 200" }
];
const sorts = [
  { value: "featured", label: "Destaques" },
  { value: "best", label: "Mais vendidos" },
  { value: "new", label: "Lançamentos" },
  { value: "price-asc", label: "Menor preço" },
  { value: "price-desc", label: "Maior preço" }
];

export function FilterPanel({ filters, onChange, availableSizes }: FilterPanelProps) {
  const set = (partial: Partial<Filters>) => onChange({ ...filters, ...partial });

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      {/* Mobile: collapsible details */}
      <details className="group border-y border-black/[0.08] lg:hidden">
        <summary className="font-lato flex cursor-pointer list-none items-center justify-between py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-brand-ink [&::-webkit-details-marker]:hidden">
          <span className="flex items-center gap-3">
            <span className="h-px w-6 bg-brand-ink/25" aria-hidden="true" />
            Filtros
          </span>
          <span className="font-poppins text-[11px] font-medium tracking-normal text-brand-ink/45 transition-transform duration-200 ease-out group-open:rotate-45">
            +
          </span>
        </summary>
        <div className="pb-6">
          <FilterBody filters={filters} set={set} availableSizes={availableSizes} />
        </div>
      </details>

      {/* Desktop: persistent sidebar */}
      <div className="hidden lg:block">
        <div className="pb-5">
          <h2 className="font-bebas text-brand-ink text-[clamp(1.4rem,2.4vw,1.8rem)] uppercase leading-none tracking-[0.01em]">
            Filtros
          </h2>
          <p className="font-lato mt-2 text-[13px] leading-[1.55] text-brand-ink/55">
            Refine por tamanho, gênero, preço e disponibilidade.
          </p>
        </div>
        <FilterBody filters={filters} set={set} availableSizes={availableSizes} />
      </div>
    </aside>
  );
}

function FilterBody({
  filters,
  set,
  availableSizes
}: {
  filters: Filters;
  set: (partial: Partial<Filters>) => void;
  availableSizes: string[];
}) {
  return (
    <div className="divide-y divide-black/[0.06] border-y border-black/[0.06]">
      <Section label="Ordenar por">
        <SelectField
          value={filters.sort}
          onChange={(value) => set({ sort: value })}
          options={sorts}
        />
      </Section>

      <Section label="Tamanho">
        <div className="flex flex-wrap gap-1.5">
          <Chip active={!filters.size} onClick={() => set({ size: "" })}>
            Todos
          </Chip>
          {availableSizes.map((size) => (
            <Chip key={size} active={filters.size === size} onClick={() => set({ size })}>
              {size}
            </Chip>
          ))}
        </div>
      </Section>

      <Section label="Faixa de preço">
        <SelectField
          value={filters.price}
          onChange={(value) => set({ price: value })}
          options={prices}
        />
      </Section>

      <Section label="Gênero">
        <div className="grid grid-cols-2 gap-1.5">
          {genders.map((gender) => (
            <Chip
              key={gender}
              active={filters.gender === gender}
              onClick={() => set({ gender })}
            >
              {gender === "todos" ? "Todos" : gender}
            </Chip>
          ))}
        </div>
      </Section>

      <Section label="Disponibilidade">
        <div className="space-y-1">
          <ToggleRow
            label="Pronta entrega"
            checked={filters.ready}
            onChange={(value) => set({ ready: value })}
          />
          <ToggleRow
            label="Personalizável"
            checked={filters.customizable}
            onChange={(value) => set({ customizable: value })}
          />
        </div>
      </Section>
    </div>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="py-5 first:pt-5 last:pb-5">
      <p className="font-lato mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-brand-ink/55">
        {label}
      </p>
      {children}
    </div>
  );
}

function SelectField({
  value,
  onChange,
  options
}: {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="font-poppins h-11 w-full appearance-none rounded-[6px] bg-white pl-3 pr-9 text-[13px] font-medium text-brand-ink ring-1 ring-inset ring-black/[0.08] transition-[box-shadow,background-color] duration-150 ease-out hover:bg-brand-mist focus:outline-none focus:ring-1 focus:ring-brand-ink"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span
        aria-hidden="true"
        className="font-poppins pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-brand-ink/45"
      >
        ▼
      </span>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "font-poppins inline-flex min-h-9 items-center justify-center rounded-[6px] px-3 text-[12px] font-medium capitalize tracking-[0.01em] ring-1 ring-inset transition-colors duration-150 ease-out active:scale-[0.96]",
        active
          ? "bg-brand-ink text-brand-paper ring-brand-ink"
          : "bg-white text-brand-ink/75 ring-black/[0.08] hover:bg-brand-mist hover:text-brand-ink hover:ring-black/[0.18]"
      )}
    >
      {children}
    </button>
  );
}

function ToggleRow({
  label,
  checked,
  onChange
}: {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-3 py-2">
      <span className="font-lato text-[13px] font-medium text-brand-ink">{label}</span>
      <span
        className={clsx(
          "relative inline-flex h-[22px] w-[38px] shrink-0 items-center rounded-full ring-1 ring-inset transition-colors duration-200 ease-out",
          checked ? "bg-brand-ink ring-brand-ink" : "bg-brand-mist ring-black/[0.12]"
        )}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
          className="sr-only"
        />
        <span
          aria-hidden="true"
          className={clsx(
            "ml-[2px] inline-block h-[18px] w-[18px] rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.18)] transition-transform duration-200 ease-out",
            checked ? "translate-x-[16px]" : "translate-x-0"
          )}
        />
      </span>
    </label>
  );
}
