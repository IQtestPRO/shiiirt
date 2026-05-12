"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import { formatCurrency } from "@/lib/format";
import { useCartStore } from "@/store/cart-store";
import type { CartItem as CartItemType } from "@/types/product";

export function CartItem({ item }: { item: CartItemType }) {
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  return (
    <article className="grid grid-cols-[76px_1fr] gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
      <img src={item.product.images[0]} alt="" className="h-24 w-20 rounded-md bg-slate-100 object-cover" loading="lazy" />
      <div className="min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="line-clamp-2 text-sm font-extrabold text-brand-ink">{item.product.name}</h3>
            <p className="mt-1 text-xs font-semibold text-slate-500">
              Tam. {item.size} · {item.personalization.enabled ? "Com personalização" : "Sem personalização"}
            </p>
            {item.personalization.enabled ? (
              <p className="mt-1 text-xs font-semibold text-slate-500">
                {item.personalization.name} #{item.personalization.number}
              </p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={() => removeItem(item.lineId)}
            aria-label={`Remover ${item.product.name}`}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-red-50 text-red-700"
          >
            <Trash2 className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="inline-flex h-10 items-center rounded-md border border-slate-200">
            <button
              type="button"
              aria-label="Diminuir quantidade"
              onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
              className="grid h-10 w-10 place-items-center"
            >
              <Minus className="h-4 w-4" aria-hidden="true" />
            </button>
            <span className="min-w-8 text-center text-sm font-extrabold">{item.quantity}</span>
            <button
              type="button"
              aria-label="Aumentar quantidade"
              onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
              className="grid h-10 w-10 place-items-center"
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <strong className="text-sm text-brand-ink">{formatCurrency(item.product.price * item.quantity)}</strong>
        </div>
      </div>
    </article>
  );
}
