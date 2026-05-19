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
    <div className="fixed inset-0 z-[92] grid place-items-center bg-brand-ink/60 px-4 py-8">
      <button className="absolute inset-0" aria-label="Fechar espiar produto" onClick={onClose} />
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="quick-title"
        className="relative grid max-h-[90dvh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-brand-paper shadow-soft md:grid-cols-[0.9fr_1.1fr]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-brand-paper/90 text-brand-ink/70 ring-1 ring-brand-ink/10 transition-colors duration-150 ease-out hover:text-brand-ink"
        >
          <X className="h-5 w-5" aria-hidden="true" strokeWidth={1.8} />
        </button>
        <div className="bg-brand-cream p-4 sm:p-6">
          <ProductImage product={product} priority />
        </div>
        <div className="space-y-5 p-5 sm:p-7">
          <div>
            <p className="font-lato text-[10px] font-bold uppercase tracking-[0.28em] text-brand-ink/55">Espiar produto</p>
            <h2 id="quick-title" className="font-poppins mt-1 text-xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-2xl">
              {product.name}
            </h2>
            <p className="font-poppins pretty mt-2 text-[13px] leading-6 text-brand-ink/65">{product.description}</p>
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
          {error ? <p className="font-poppins rounded-lg border border-brand-ink/15 bg-brand-cream px-3 py-2 text-[13px] font-medium text-brand-ink">{error}</p> : null}
          <div className="grid gap-2 sm:grid-cols-2">
            <button
              type="button"
              onClick={buy}
              className="font-poppins min-h-12 rounded-full bg-brand-ink px-4 text-[12.5px] font-extrabold uppercase tracking-[0.14em] text-brand-paper transition-colors duration-200 ease-out hover:bg-brand-inkSoft"
            >
              Adicionar
            </button>
            <Link
              href={`/produtos/${product.slug}`}
              onClick={onClose}
              className="font-poppins grid min-h-12 place-items-center rounded-full border border-brand-ink/20 px-4 text-[12.5px] font-extrabold uppercase tracking-[0.14em] text-brand-ink transition-colors duration-200 ease-out hover:border-brand-ink/50"
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
