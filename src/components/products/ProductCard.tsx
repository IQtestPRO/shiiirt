"use client";

import { Eye, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { PersonalizationSelector } from "@/components/PersonalizationSelector";
import { PriceBlock } from "@/components/PriceBlock";
import { SizeSelector } from "@/components/SizeSelector";
import { ProductImage } from "@/components/products/ProductImage";
import { ProductQuickViewModal } from "@/components/products/ProductQuickViewModal";
import { useCartStore } from "@/store/cart-store";
import type { Personalization, Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);
  const lastAddedLineId = useCartStore((state) => state.lastAddedLineId);
  const [size, setSize] = useState("");
  const [personalization, setPersonalization] = useState<Personalization>({ enabled: false });
  const [error, setError] = useState("");
  const [quickOpen, setQuickOpen] = useState(false);

  const added = lastAddedLineId?.startsWith(`${product.id}-${size}`.toLowerCase());

  function buy() {
    if (!size) {
      setError("Escolha um tamanho.");
      return;
    }

    if (personalization.enabled && (!personalization.name?.trim() || !personalization.number?.trim())) {
      setError("Informe nome e número.");
      return;
    }

    setError("");
    addItem(product, size, personalization);
  }

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-card ring-1 ring-slate-200/75 transition duration-200 hover:-translate-y-0.5 hover:shadow-premium">
      <Link href={`/produtos/${product.slug}`} aria-label={`Ver ${product.name}`}>
        <ProductImage product={product} />
      </Link>

      <div className="absolute left-3 top-3 flex flex-col gap-1">
        {product.discount > 0 ? (
          <span className="rounded-full bg-brand-ink px-2.5 py-1 text-[11px] font-extrabold text-white ring-1 ring-white/15">{product.discount}% OFF</span>
        ) : (
          <span className="rounded-full bg-brand-yellow px-2.5 py-1 text-[11px] font-extrabold text-brand-ink">Novo</span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-3.5">
        <div>
          <Link href={`/produtos/${product.slug}`} className="line-clamp-2 min-h-10 text-[13px] font-bold leading-5 text-brand-ink hover:text-brand-blue">
            {product.name}
          </Link>
          <div className="mt-1 flex flex-wrap items-center gap-1.5">
            <p className="text-[11px] font-bold uppercase text-slate-500">{product.club}</p>
            {product.freeShipping ? (
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-extrabold uppercase text-brand-green ring-1 ring-emerald-100">
                Frete grátis
              </span>
            ) : null}
          </div>
        </div>

        <PriceBlock oldPrice={product.oldPrice} price={product.price} installments={product.installments} compact />
        <SizeSelector sizes={product.sizes} value={size} onChange={(value) => {
          setSize(value);
          setError("");
        }} compact />
        <PersonalizationSelector
          customizable={product.customizable}
          value={personalization}
          onChange={(value) => {
            setPersonalization(value);
            setError("");
          }}
          compact
        />
        {error ? <p className="rounded-md bg-red-50 px-3 py-2 text-xs font-bold text-red-700">{error}</p> : null}
        {added ? <p className="rounded-md bg-green-50 px-3 py-2 text-xs font-extrabold text-brand-green">Adicionado ao carrinho!</p> : null}

        <div className="mt-auto grid grid-cols-[1fr_auto] gap-2 pt-1">
          <button
            type="button"
            onClick={buy}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-brand-blue px-3 text-xs font-extrabold uppercase text-white transition hover:bg-brand-blueDark"
          >
            <ShoppingBag className="h-4 w-4" aria-hidden="true" />
            Adicionar
          </button>
          <button
            type="button"
            onClick={() => setQuickOpen(true)}
            className="grid h-11 w-11 place-items-center rounded-md border border-brand-blue/35 text-brand-blue transition hover:bg-blue-50"
            aria-label={`Espiar ${product.name}`}
          >
            <Eye className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {quickOpen ? <ProductQuickViewModal product={product} onClose={() => setQuickOpen(false)} /> : null}
    </article>
  );
}
