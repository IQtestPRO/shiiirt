"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import { formatCurrency } from "@/lib/format";
import { useCartStore } from "@/store/cart-store";
import type { CartItem as CartItemType } from "@/types/product";

export function CartItem({ item }: { item: CartItemType }) {
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  return (
    <article className="grid grid-cols-[72px_1fr] gap-3 rounded-2xl border border-brand-ink/10 bg-brand-paper/50 p-3">
      <img src={item.product.images[0]} alt="" className="h-24 w-[72px] rounded-xl bg-brand-cream object-cover" loading="lazy" />
      <div className="min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-poppins line-clamp-2 text-[13px] font-extrabold leading-snug text-brand-ink">{item.product.name}</h3>
            <p className="font-poppins mt-1 text-[11px] font-semibold text-brand-ink/55">
              Tam. {item.size} · {item.personalization.enabled ? "Com personalização" : "Sem personalização"}
            </p>
            {item.personalization.enabled ? (
              <p className="font-poppins tabular mt-0.5 text-[11px] font-semibold text-brand-ink/55">
                {item.personalization.name} #{item.personalization.number}
              </p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={() => removeItem(item.lineId)}
            aria-label={`Remover ${item.product.name}`}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-brand-ink/45 transition-colors duration-150 ease-out hover:bg-brand-ink/[0.06] hover:text-brand-ink"
          >
            <Trash2 className="h-4 w-4" aria-hidden="true" strokeWidth={1.8} />
          </button>
        </div>
        <div className="mt-2.5 flex items-center justify-between gap-2">
          <div className="inline-flex h-10 items-center rounded-full border border-brand-ink/12">
            <button
              type="button"
              aria-label="Diminuir quantidade"
              onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
              className="grid h-10 w-10 place-items-center text-brand-ink/70 transition-colors duration-150 ease-out hover:text-brand-ink"
            >
              <Minus className="h-4 w-4" aria-hidden="true" strokeWidth={1.8} />
            </button>
            <span className="font-poppins tabular min-w-7 text-center text-[13px] font-extrabold text-brand-ink">{item.quantity}</span>
            <button
              type="button"
              aria-label="Aumentar quantidade"
              onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
              className="grid h-10 w-10 place-items-center text-brand-ink/70 transition-colors duration-150 ease-out hover:text-brand-ink"
            >
              <Plus className="h-4 w-4" aria-hidden="true" strokeWidth={1.8} />
            </button>
          </div>
          <strong className="font-poppins tabular text-[13px] font-extrabold text-brand-ink">{formatCurrency(item.product.price * item.quantity)}</strong>
        </div>
      </div>
    </article>
  );
}
