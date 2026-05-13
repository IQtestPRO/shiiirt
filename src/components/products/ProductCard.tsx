"use client";

import { Eye } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ProductImage } from "@/components/products/ProductImage";
import { ProductQuickViewModal } from "@/components/products/ProductQuickViewModal";
import { CometCard } from "@/components/ui/comet-card";
import { formatCurrency } from "@/lib/format";
import type { Product } from "@/types/product";

const ACTION_BLUE = "bg-[#1959D2]";

function parseInstallments(raw: string) {
  const match = raw.match(/^(\d+\s*x)\s+de\s+(R\$\s*[\d.,]+)\s*(.*)$/i);
  if (!match) return { times: "", price: "", rest: raw };
  return { times: match[1].trim(), price: match[2].trim(), rest: match[3].trim() };
}

export function ProductCard({ product }: { product: Product }) {
  const [quickOpen, setQuickOpen] = useState(false);
  const installments = parseInstallments(product.installments);

  return (
    <CometCard className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white p-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-shadow duration-300 ease-out hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      <Link href={`/produtos/${product.slug}`} aria-label={`Ver ${product.name}`} className="relative block">
        <ProductImage product={product} />

        <div className="pointer-events-none absolute left-3 top-3 flex flex-col items-start gap-2">
          {product.discount > 0 ? (
            <span
              className={`font-poppins grid h-14 w-14 place-items-center rounded-full ${ACTION_BLUE} text-center text-[11px] font-extrabold uppercase leading-[1.05] text-white shadow-[0_4px_10px_rgba(25,89,210,0.35)]`}
            >
              <span>
                {product.discount}%
                <br />
                OFF
              </span>
            </span>
          ) : (
            <span
              className={`font-poppins rounded-full ${ACTION_BLUE} px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white shadow-[0_4px_10px_rgba(25,89,210,0.30)]`}
            >
              Novo
            </span>
          )}
          {product.freeShipping ? (
            <span
              className={`font-poppins rounded-full ${ACTION_BLUE} px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white shadow-[0_4px_10px_rgba(25,89,210,0.30)]`}
            >
              Frete grátis
            </span>
          ) : null}
        </div>
      </Link>

      <div className="flex flex-1 flex-col items-center gap-3 px-2 pb-2 pt-5 text-center">
        <Link
          href={`/produtos/${product.slug}`}
          className="font-poppins block min-h-[42px] max-w-[34ch] text-balance text-[13px] font-normal leading-[1.4] text-neutral-500 transition-colors duration-150 ease-out hover:text-neutral-800"
        >
          {product.name}
        </Link>

        <div className="flex items-baseline justify-center gap-2.5">
          {product.oldPrice > product.price ? (
            <span className="font-poppins text-[13px] font-normal text-neutral-400 line-through">
              {formatCurrency(product.oldPrice)}
            </span>
          ) : null}
          <span className="font-poppins text-[20px] font-extrabold tracking-tight text-brand-ink">
            {formatCurrency(product.price)}
          </span>
        </div>

        {installments.times ? (
          <p className="font-poppins text-[12px] font-normal text-neutral-500">
            <span className="font-bold text-neutral-700">{installments.times}</span>
            {" de "}
            <span className="font-bold text-neutral-700">{installments.price}</span>
            {installments.rest ? <> {installments.rest}</> : null}
          </p>
        ) : (
          <p className="font-poppins text-[12px] font-normal text-neutral-500">{product.installments}</p>
        )}

        <div className="mt-3 grid w-full grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={() => setQuickOpen(true)}
            className="font-poppins inline-flex min-h-11 items-center justify-center rounded-full bg-brand-ink px-4 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors duration-200 ease-out hover:bg-neutral-800"
          >
            Comprar
          </button>
          <button
            type="button"
            onClick={() => setQuickOpen(true)}
            className="font-poppins inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-4 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-ink transition-colors duration-200 ease-out hover:border-neutral-400 hover:bg-neutral-50"
          >
            <Eye className="h-4 w-4" aria-hidden="true" strokeWidth={1.8} />
            Espiar
          </button>
        </div>
      </div>

      {quickOpen ? <ProductQuickViewModal product={product} onClose={() => setQuickOpen(false)} /> : null}
    </article>
    </CometCard>
  );
}
