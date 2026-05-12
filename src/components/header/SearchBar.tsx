"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { products, searchProducts } from "@/lib/products";

export function SearchBar({ onNavigate, id = "global-search" }: { onNavigate?: () => void; id?: string }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const suggestions = useMemo(() => {
    if (query.trim().length < 2) {
      return products.slice(0, 5);
    }

    return searchProducts(query).slice(0, 6);
  }, [query]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = query.trim();
    if (!value) return;
    setIsFocused(false);
    event.currentTarget.querySelector("input")?.blur();
    onNavigate?.();
    router.push(`/busca?q=${encodeURIComponent(value)}`);
  }

  return (
    <div className="relative w-full">
      <form onSubmit={submit} role="search" className="relative">
        <label htmlFor={id} className="sr-only">
          Buscar por produto, clube, categoria ou liga
        </label>
        <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <input
          id={id}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => window.setTimeout(() => setIsFocused(false), 160)}
          className="h-12 w-full rounded-md border border-white/20 bg-white pl-10 pr-11 text-sm font-semibold text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand-yellow"
          placeholder="Buscar camisas, clubes, seleções..."
        />
        {query ? (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Limpar busca"
            className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-md text-slate-500 transition hover:bg-slate-100"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        ) : null}
      </form>

      {isFocused ? (
        <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-md border border-slate-200 bg-white shadow-soft">
          <div className="border-b border-slate-100 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-slate-500">
            Sugestões
          </div>
          <div className="max-h-80 overflow-auto p-2">
            {suggestions.length ? (
              suggestions.map((product) => (
                <Link
                  key={product.id}
                  href={`/produtos/${product.slug}`}
                  onClick={onNavigate}
                  className="flex items-center gap-3 rounded-md p-2 transition hover:bg-slate-50"
                >
                  <img
                    src={product.images[0]}
                    alt=""
                    className="h-12 w-12 rounded-md bg-slate-100 object-cover"
                    loading="lazy"
                  />
                  <span>
                    <span className="line-clamp-1 text-sm font-bold text-brand-ink">{product.name}</span>
                    <span className="text-xs font-semibold text-slate-500">{product.club} · {product.subcategory}</span>
                  </span>
                </Link>
              ))
            ) : (
              <p className="px-3 py-5 text-sm font-semibold text-slate-500">
                Nenhum produto encontrado para essa busca.
              </p>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
