"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem, Personalization, Product } from "@/types/product";
import { getCartTotal } from "@/lib/whatsapp";

type CartState = {
  items: CartItem[];
  isCartOpen: boolean;
  lastAddedLineId?: string;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, size: string, personalization: Personalization, quantity?: number) => void;
  removeItem: (lineId: string) => void;
  updateQuantity: (lineId: string, quantity: number) => void;
  clearCart: () => void;
  total: () => number;
  count: () => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isCartOpen: false,
      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
      addItem: (product, size, personalization, quantity = 1) => {
        const lineId = buildLineId(product.id, size, personalization);
        const currentItems = get().items;
        const existing = currentItems.find((item) => item.lineId === lineId);

        const items = existing
          ? currentItems.map((item) =>
              item.lineId === lineId ? { ...item, quantity: item.quantity + quantity } : item
            )
          : [...currentItems, { lineId, product, size, personalization, quantity }];

        set({ items, isCartOpen: true, lastAddedLineId: lineId });
      },
      removeItem: (lineId) => set({ items: get().items.filter((item) => item.lineId !== lineId) }),
      updateQuantity: (lineId, quantity) =>
        set({
          items: get().items.map((item) =>
            item.lineId === lineId ? { ...item, quantity: Math.max(1, quantity) } : item
          )
        }),
      clearCart: () => set({ items: [], lastAddedLineId: undefined }),
      total: () => getCartTotal(get().items),
      count: () => get().items.reduce((total, item) => total + item.quantity, 0)
    }),
    {
      name: "central-da-tailandia-cart",
      partialize: (state) => ({ items: state.items })
    }
  )
);

function buildLineId(productId: string, size: string, personalization: Personalization) {
  const custom = personalization.enabled
    ? `${personalization.name || "nome"}-${personalization.number || "numero"}`
    : "sem-personalizacao";

  return `${productId}-${size}-${custom}`.toLowerCase();
}
