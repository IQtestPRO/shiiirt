"use client";

import Link from "next/link";
import { Menu, ShoppingBag, UserRound } from "lucide-react";
import { useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { storeName } from "@/lib/catalog";
import { useCartStore } from "@/store/cart-store";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";
import { SearchBar } from "./SearchBar";
import { TopBar } from "./TopBar";
import { LoginModal } from "./LoginModal";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const openCart = useCartStore((state) => state.openCart);
  const count = useCartStore((state) => state.count());

  return (
    <header className="sticky top-0 z-50 shadow-lg shadow-slate-950/15">
      <TopBar />
      <div className="bg-[linear-gradient(135deg,#0346A5_0%,#06347C_46%,#08162F_100%)] text-white">
        <div className="container-page grid min-h-[82px] grid-cols-[auto_1fr_auto] items-center gap-3 py-3 lg:grid-cols-[300px_1fr_275px] lg:gap-8">
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-md bg-white/10 ring-1 ring-white/15 transition hover:bg-white/15 lg:hidden"
            aria-label="Abrir menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>

          <Link href="/" className="flex items-center gap-3" aria-label={`${storeName} - início`}>
            <BrandMark />
          </Link>

          <div className="hidden lg:block">
            <SearchBar id="desktop-search" />
          </div>

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => setLoginOpen(true)}
              className="hidden min-h-12 items-center gap-2 rounded-md bg-white/10 px-4 text-sm font-bold ring-1 ring-white/15 transition hover:bg-white/15 sm:inline-flex"
            >
              <UserRound className="h-5 w-5" aria-hidden="true" />
              Minha conta
            </button>
            <button
              type="button"
              onClick={openCart}
              aria-label={`Abrir carrinho com ${count} item(s)`}
              className="relative inline-flex min-h-12 items-center gap-2 rounded-md bg-brand-yellow px-4 text-sm font-extrabold text-brand-ink shadow-card transition hover:bg-white"
            >
              <ShoppingBag className="h-5 w-5" aria-hidden="true" />
              <span className="hidden sm:inline">Meu carrinho</span>
              <span className="grid min-h-6 min-w-6 place-items-center rounded-full bg-brand-blue px-1 text-xs text-white">
                {count}
              </span>
            </button>
          </div>
        </div>
        <div className="container-page pb-3 lg:hidden">
          <SearchBar id="mobile-search" />
        </div>
      </div>
      <MegaMenu />
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </header>
  );
}
