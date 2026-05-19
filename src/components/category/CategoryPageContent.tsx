"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/types/product";
import { ProductGrid } from "@/components/products/ProductGrid";
import { FilterPanel, type Filters } from "./FilterPanel";

const initialFilters: Filters = {
  size: "",
  gender: "todos",
  price: "all",
  ready: false,
  customizable: false,
  sort: "featured"
};

export function CategoryPageContent({ products }: { products: Product[] }) {
  const [filters, setFilters] = useState(initialFilters);

  const availableSizes = useMemo(
    () => Array.from(new Set(products.flatMap((product) => product.sizes))).sort(),
    [products]
  );

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      if (filters.size && !product.sizes.includes(filters.size)) return false;
      if (filters.gender !== "todos" && product.gender !== filters.gender) return false;
      if (filters.ready && !product.readyToShip) return false;
      if (filters.customizable && !product.customizable) return false;
      if (filters.price === "under-180" && product.price > 180) return false;
      if (filters.price === "180-200" && (product.price < 180 || product.price > 200)) return false;
      if (filters.price === "over-200" && product.price < 200) return false;
      return true;
    });

    return filtered.sort((a, b) => {
      if (filters.sort === "price-asc") return a.price - b.price;
      if (filters.sort === "price-desc") return b.price - a.price;
      if (filters.sort === "new") return b.id.localeCompare(a.id);
      if (filters.sort === "best") return Number(b.tags.includes("mais vendidos")) - Number(a.tags.includes("mais vendidos"));
      return b.discount - a.discount;
    });
  }, [filters, products]);

  const isFiltered =
    filters.size !== initialFilters.size ||
    filters.gender !== initialFilters.gender ||
    filters.price !== initialFilters.price ||
    filters.ready !== initialFilters.ready ||
    filters.customizable !== initialFilters.customizable ||
    filters.sort !== initialFilters.sort;

  const count = filteredProducts.length;
  const countLabel = count.toString().padStart(2, "0");

  return (
    <div className="grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-10">
      <FilterPanel filters={filters} onChange={setFilters} availableSizes={availableSizes} />
      <div>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-black/[0.08] pb-4">
          <p className="font-lato flex items-baseline gap-2 text-[13px] text-brand-ink/60">
            <span className="font-mono-display tabular text-[15px] font-semibold text-brand-ink">
              {countLabel}
            </span>
            <span>{count === 1 ? "produto encontrado" : "produtos encontrados"}</span>
          </p>
          {isFiltered ? (
            <button
              type="button"
              onClick={() => setFilters(initialFilters)}
              className="font-lato text-[12px] font-bold uppercase tracking-[0.18em] text-brand-ink underline decoration-brand-ink/30 decoration-1 underline-offset-[6px] transition-[text-decoration-color,color] duration-150 ease-out hover:decoration-brand-ink"
            >
              Limpar filtros
            </button>
          ) : null}
        </div>
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}
