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

  return (
    <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
      <FilterPanel filters={filters} onChange={setFilters} availableSizes={availableSizes} />
      <div>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 rounded-md bg-white px-4 py-3 text-sm font-bold text-slate-600 shadow-card">
          <span>{filteredProducts.length} produto(s) encontrado(s)</span>
          <button
            type="button"
            onClick={() => setFilters(initialFilters)}
            className="rounded-md border border-slate-200 px-3 py-2 text-brand-blue"
          >
            Limpar filtros
          </button>
        </div>
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}
