"use client";

import { Check, Heart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { formatCurrency } from "@/lib/format";
import { useCartStore } from "@/store/cart-store";
import type { Product } from "@/types/product";

function parseInstallments(raw: string) {
  const match = raw.match(/^(\d+)\s*x\s+de\s+(R\$\s*[\d.,]+)/i);
  if (!match) return null;
  return { times: `${match[1]}x`, price: match[2].trim() };
}

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);
  const [favorited, setFavorited] = useState(false);
  const [addedSize, setAddedSize] = useState<string | null>(null);

  const installments = parseInstallments(product.installments);
  const hasDiscount = product.discount > 0;
  const primaryImage = `${product.images[0]}?v=4`;
  const secondaryImage =
    product.images[1] && product.images[1] !== product.images[0]
      ? `${product.images[1]}?v=4`
      : null;
  const visibleSizes = product.sizes.slice(0, 5);

  function quickAdd(size: string, event: React.MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    addItem(product, size, { enabled: false });
    setAddedSize(size);
    window.setTimeout(() => setAddedSize(null), 1400);
  }

  function toggleFavorite(event: React.MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    setFavorited((value) => !value);
  }

  return (
    <article className="group relative flex h-full flex-col">
      <Link
        href={`/produtos/${product.slug}`}
        aria-label={`Ver ${product.name}`}
        className="relative block overflow-hidden rounded-xl bg-[#f6f4ef] ring-1 ring-black/[0.06] transition-shadow duration-300 ease-out md:rounded-[14px] md:hover:shadow-[0_18px_38px_-22px_rgba(11,9,7,0.22)]"
      >
        <div className="relative aspect-[4/5]">
          <img
            src={primaryImage}
            alt={product.name}
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-contain p-3 transition-opacity duration-[450ms] ease-out sm:p-5 md:p-6 ${
              secondaryImage ? "md:group-hover:opacity-0" : ""
            }`}
          />
          {secondaryImage ? (
            <img
              src={secondaryImage}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-contain p-3 opacity-0 transition-opacity duration-[450ms] ease-out sm:p-5 md:p-6 md:group-hover:opacity-100"
            />
          ) : null}
        </div>

        <div className="pointer-events-none absolute inset-x-2 top-2 flex items-start justify-between gap-2 sm:inset-x-3 sm:top-3">
          {hasDiscount ? (
            <span className="font-poppins pointer-events-auto inline-flex items-center rounded-full bg-brand-ink px-2 py-[3px] text-[10px] font-bold uppercase leading-none tracking-[0.06em] text-brand-paper sm:px-2.5 sm:py-1 sm:text-[10.5px]">
              −{product.discount}%
            </span>
          ) : (
            <span aria-hidden="true" />
          )}
          <button
            type="button"
            onClick={toggleFavorite}
            aria-label={favorited ? "Remover dos favoritos" : "Adicionar aos favoritos"}
            aria-pressed={favorited}
            className="pointer-events-auto grid h-10 w-10 place-items-center rounded-full bg-white/95 text-neutral-700 ring-1 ring-black/[0.06] backdrop-blur transition-transform duration-200 ease-out active:scale-[0.92] md:h-9 md:w-9 md:hover:text-brand-ink"
          >
            <Heart
              className={`h-4 w-4 transition-colors duration-150 md:h-[15px] md:w-[15px] ${
                favorited ? "fill-red-500 text-red-500" : ""
              }`}
              aria-hidden="true"
              strokeWidth={1.7}
            />
          </button>
        </div>

        <div className="pointer-events-none absolute inset-x-3 bottom-3 hidden translate-y-1.5 opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 md:block">
          <div className="pointer-events-auto rounded-full bg-brand-ink/[0.96] px-1.5 py-1 shadow-[0_10px_24px_-12px_rgba(11,9,7,0.45)] backdrop-blur">
            <div className="flex items-center justify-between gap-0.5">
              {visibleSizes.map((label) => {
                const isAdded = addedSize === label;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={(event) => quickAdd(label, event)}
                    aria-label={`Adicionar tamanho ${label} ao carrinho`}
                    className={`font-poppins grid h-7 min-w-[30px] place-items-center rounded-full px-2 text-[10.5px] font-semibold tracking-[0.02em] transition-colors duration-150 ease-out active:scale-[0.94] ${
                      isAdded
                        ? "bg-brand-yellow text-brand-ink"
                        : "text-brand-paper/85 hover:bg-brand-paper hover:text-brand-ink"
                    }`}
                  >
                    {isAdded ? <Check className="h-3 w-3" strokeWidth={2.6} /> : label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-1 px-0.5 pt-2.5 sm:px-1 sm:pt-3">
        <Link
          href={`/produtos/${product.slug}`}
          className="font-poppins line-clamp-2 min-h-[34px] text-[12.5px] font-medium leading-[1.35] tracking-[-0.005em] text-neutral-800 transition-colors duration-150 ease-out hover:text-brand-ink sm:min-h-[36px] sm:text-[13px]"
        >
          {product.name}
        </Link>

        <div className="mt-auto flex flex-col gap-0.5 pt-1.5">
          <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0 leading-none">
            <span className="font-poppins text-[15.5px] font-bold tracking-[-0.015em] text-brand-ink sm:text-[17px]">
              {formatCurrency(product.price)}
            </span>
            {hasDiscount ? (
              <span className="font-poppins tabular text-[11px] font-normal text-neutral-400 line-through sm:text-[11.5px]">
                {formatCurrency(product.oldPrice)}
              </span>
            ) : null}
          </div>
          {installments ? (
            <p className="font-poppins text-[10.5px] font-normal leading-[1.35] text-neutral-500">
              <span className="tabular font-medium text-neutral-700">{installments.times}</span>
              {" de "}
              <span className="tabular font-medium text-neutral-700">{installments.price}</span>
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
