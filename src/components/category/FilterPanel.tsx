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
    <aside className="space-y-5 rounded-lg bg-white p-4 shadow-card ring-1 ring-slate-200/75">
      <div>
        <h2 className="text-lg font-extrabold text-brand-ink">Filtros</h2>
        <p className="mt-1 text-sm leading-5 text-slate-600">Refine por tamanho, gênero, preço e disponibilidade.</p>
      </div>

      <label className="block text-sm font-bold text-slate-700">
        Ordenar por
        <select
          value={filters.sort}
          onChange={(event) => set({ sort: event.target.value })}
          className="mt-1 h-11 w-full rounded-md border border-slate-200 bg-white px-3 outline-none focus:border-brand-blue"
        >
          {sorts.map((sort) => (
            <option key={sort.value} value={sort.value}>
              {sort.label}
            </option>
          ))}
        </select>
      </label>

      <div>
        <p className="mb-2 text-sm font-bold text-slate-700">Tamanho</p>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={() => set({ size: "" })} className={chipClass(!filters.size)}>
            Todos
          </button>
          {availableSizes.map((size) => (
            <button key={size} type="button" onClick={() => set({ size })} className={chipClass(filters.size === size)}>
              {size}
            </button>
          ))}
        </div>
      </div>

      <label className="block text-sm font-bold text-slate-700">
        Faixa de preço
        <select
          value={filters.price}
          onChange={(event) => set({ price: event.target.value })}
          className="mt-1 h-11 w-full rounded-md border border-slate-200 bg-white px-3 outline-none focus:border-brand-blue"
        >
          {prices.map((price) => (
            <option key={price.value} value={price.value}>
              {price.label}
            </option>
          ))}
        </select>
      </label>

      <div>
        <p className="mb-2 text-sm font-bold text-slate-700">Gênero</p>
        <div className="grid grid-cols-2 gap-2">
          {genders.map((gender) => (
            <button
              key={gender}
              type="button"
              onClick={() => set({ gender })}
              className={chipClass(filters.gender === gender)}
            >
              {gender === "todos" ? "Todos" : gender}
            </button>
          ))}
        </div>
      </div>

      <label className="flex items-center gap-3 rounded-md border border-slate-200 p-3 text-sm font-bold text-slate-700">
        <input
          type="checkbox"
          checked={filters.ready}
          onChange={(event) => set({ ready: event.target.checked })}
          className="h-5 w-5 accent-brand-blue"
        />
        Pronta entrega
      </label>
      <label className="flex items-center gap-3 rounded-md border border-slate-200 p-3 text-sm font-bold text-slate-700">
        <input
          type="checkbox"
          checked={filters.customizable}
          onChange={(event) => set({ customizable: event.target.checked })}
          className="h-5 w-5 accent-brand-blue"
        />
        Personalizável
      </label>
    </aside>
  );
}

function chipClass(active: boolean) {
  return clsx(
    "min-h-10 rounded-md border px-3 text-sm font-bold capitalize transition",
    active
      ? "border-brand-blue bg-brand-blue text-white"
      : "border-slate-200 bg-white text-slate-700 hover:border-brand-blue hover:text-brand-blue"
  );
}
