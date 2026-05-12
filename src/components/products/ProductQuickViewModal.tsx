"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { PersonalizationSelector } from "@/components/PersonalizationSelector";
import { PriceBlock } from "@/components/PriceBlock";
import { SizeSelector } from "@/components/SizeSelector";
import { ProductImage } from "@/components/products/ProductImage";
import { useCartStore } from "@/store/cart-store";
import type { Personalization, Product } from "@/types/product";

export function ProductQuickViewModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const addItem = useCartStore((state) => state.addItem);
  const [size, setSize] = useState("");
  const [personalization, setPersonalization] = useState<Personalization>({ enabled: false });
  const [error, setError] = useState("");

  useEffect(() => {
    const previous = document.body.dataset.scrollLock;
    document.body.dataset.scrollLock = "true";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      if (previous) document.body.dataset.scrollLock = previous;
      else delete document.body.dataset.scrollLock;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  function buy() {
    const validation = validateSelection(size, personalization);
    if (validation) {
      setError(validation);
      return;
    }
    addItem(product, size, personalization);
    onClose();
  }

  const modal = (
    <div className="fixed inset-0 z-[92] grid place-items-center bg-slate-950/60 px-4 py-8">
      <button className="absolute inset-0" aria-label="Fechar espiar produto" onClick={onClose} />
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="quick-title"
        className="relative grid max-h-[90dvh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white shadow-soft md:grid-cols-[0.9fr_1.1fr]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center rounded-md bg-white/90 text-slate-700 shadow-card"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
        <div className="bg-brand-surface p-4 sm:p-6">
          <ProductImage product={product} priority />
        </div>
        <div className="space-y-5 p-5 sm:p-7">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand-green">Espiar produto</p>
            <h2 id="quick-title" className="mt-1 text-2xl font-extrabold text-brand-ink">
              {product.name}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{product.description}</p>
          </div>
          <PriceBlock oldPrice={product.oldPrice} price={product.price} installments={product.installments} />
          <SizeSelector sizes={product.sizes} value={size} onChange={(value) => {
            setSize(value);
            setError("");
          }} />
          <PersonalizationSelector
            customizable={product.customizable}
            value={personalization}
            onChange={(value) => {
              setPersonalization(value);
              setError("");
            }}
          />
          {error ? <p className="rounded-md bg-red-50 p-3 text-sm font-bold text-red-700">{error}</p> : null}
          <div className="grid gap-2 sm:grid-cols-2">
            <button
              type="button"
              onClick={buy}
              className="min-h-12 rounded-md bg-brand-blue px-4 text-sm font-extrabold text-white transition hover:bg-brand-blueDark"
            >
              Adicionar ao carrinho
            </button>
            <Link
              href={`/produtos/${product.slug}`}
              onClick={onClose}
              className="grid min-h-12 place-items-center rounded-md border border-brand-blue px-4 text-sm font-extrabold text-brand-blue transition hover:bg-blue-50"
            >
              Ver detalhes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );

  return createPortal(modal, document.body);
}

function validateSelection(size: string, personalization: Personalization) {
  if (!size) return "Escolha um tamanho para continuar.";
  if (personalization.enabled && (!personalization.name?.trim() || !personalization.number?.trim())) {
    return "Informe nome e número para personalizar.";
  }
  return "";
}
