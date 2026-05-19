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
      <button className="absolute inset-0 bg-brand-ink/55" aria-label="Fechar carrinho" onClick={closeCart} />
      <aside className="absolute right-0 top-0 flex h-full w-[min(100vw,440px)] flex-col bg-brand-paper shadow-soft">
        <header className="flex items-center justify-between gap-3 bg-brand-ink px-4 py-4 text-brand-paper sm:px-5">
          <div className="min-w-0">
            <p className="font-lato text-[10px] font-bold uppercase tracking-[0.28em] text-brand-yellow">Carrinho</p>
            <h2 className="font-poppins mt-0.5 text-[18px] font-extrabold tracking-tight sm:text-xl">Meu carrinho</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Fechar carrinho"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-paper/10 text-brand-paper transition-colors duration-150 ease-out hover:bg-brand-paper/20"
          >
            <X className="h-5 w-5" aria-hidden="true" strokeWidth={1.8} />
          </button>
        </header>
        <div className="flex-1 space-y-3 overflow-y-auto p-4">
          {items.length ? (
            items.map((item) => <CartItem key={item.lineId} item={item} />)
          ) : (
            <div className="rounded-2xl border border-brand-ink/10 bg-brand-paper/60 p-6 text-center">
              <p className="font-poppins text-[16px] font-extrabold text-brand-ink sm:text-lg">Seu carrinho está vazio</p>
              <p className="font-poppins mt-2 text-[13px] leading-6 text-brand-ink/60">Escolha uma camisa, selecione tamanho e volte para finalizar.</p>
            </div>
          )}
        </div>
        <footer className="space-y-3 border-t border-brand-ink/10 bg-brand-paper p-4">
          <div className="flex items-center justify-between gap-3 font-poppins text-[13px] font-bold text-brand-ink/65">
            <span>Subtotal</span>
            <span className="tabular text-[18px] font-extrabold text-brand-ink sm:text-xl">{formatCurrency(total())}</span>
          </div>
          <p className="font-poppins text-[11px] font-medium text-brand-ink/50">Frete e dados do cliente serão confirmados no WhatsApp.</p>
          <WhatsAppCheckoutButton items={items} />
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={closeCart}
              className="font-poppins min-h-11 rounded-full border border-brand-ink/15 px-3 text-[12px] font-extrabold uppercase tracking-[0.12em] text-brand-ink transition-colors duration-150 ease-out hover:border-brand-ink/35"
            >
              Continuar
            </button>
            <button
              type="button"
              onClick={clearCart}
              className="font-poppins min-h-11 rounded-full border border-brand-ink/10 px-3 text-[12px] font-extrabold uppercase tracking-[0.12em] text-brand-ink/55 transition-colors duration-150 ease-out hover:text-brand-ink"
            >
              Limpar
            </button>
          </div>
        </footer>
      </aside>
    </div>
  );
}
