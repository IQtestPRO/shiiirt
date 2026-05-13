"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import { formatCurrency } from "@/lib/format";
import { useCartStore } from "@/store/cart-store";
import { CartItem } from "./CartItem";
import { WhatsAppCheckoutButton } from "./WhatsAppCheckoutButton";

export function CartDrawer() {
  const items = useCartStore((state) => state.items);
  const isCartOpen = useCartStore((state) => state.isCartOpen);
  const closeCart = useCartStore((state) => state.closeCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const total = useCartStore((state) => state.total);

  useEffect(() => {
    if (!isCartOpen) return;
    const previous = document.body.dataset.scrollLock;
    document.body.dataset.scrollLock = "true";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      if (previous) document.body.dataset.scrollLock = previous;
      else delete document.body.dataset.scrollLock;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isCartOpen, closeCart]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[91]">
      <button className="absolute inset-0 bg-slate-950/55" aria-label="Fechar carrinho" onClick={closeCart} />
      <aside className="absolute right-0 top-0 flex h-full w-[min(100vw,440px)] flex-col bg-brand-paper shadow-soft">
        <header className="flex items-center justify-between bg-brand-ink px-4 py-4 text-white">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-blue-100">Adicionado ao carrinho</p>
            <h2 className="text-xl font-extrabold">Meu carrinho</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Fechar carrinho"
            className="grid h-11 w-11 place-items-center rounded-md bg-white/10"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </header>
        <div className="flex-1 space-y-3 overflow-y-auto p-4">
          {items.length ? (
            items.map((item) => <CartItem key={item.lineId} item={item} />)
          ) : (
            <div className="rounded-md bg-white p-6 text-center shadow-card">
              <p className="text-lg font-extrabold text-brand-ink">Seu carrinho está vazio</p>
              <p className="mt-2 text-sm text-slate-600">Escolha uma camisa, selecione tamanho e volte para finalizar.</p>
            </div>
          )}
        </div>
        <footer className="space-y-3 border-t border-slate-200 bg-white p-4">
          <div className="flex items-center justify-between text-sm font-bold text-slate-600">
            <span>Subtotal</span>
            <span className="text-xl font-extrabold text-brand-ink">{formatCurrency(total())}</span>
          </div>
          <p className="text-xs font-semibold text-slate-500">Frete e dados do cliente serão confirmados no WhatsApp.</p>
          <WhatsAppCheckoutButton items={items} />
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={closeCart}
              className="min-h-11 rounded-md border border-brand-blue px-3 text-sm font-extrabold text-brand-blue"
            >
              Continuar comprando
            </button>
            <button
              type="button"
              onClick={clearCart}
              className="min-h-11 rounded-md border border-slate-200 px-3 text-sm font-extrabold text-slate-600"
            >
              Limpar carrinho
            </button>
          </div>
        </footer>
      </aside>
    </div>
  );
}
