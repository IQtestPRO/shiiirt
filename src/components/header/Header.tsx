"use client";

import Link from "next/link";
import { Menu, Search, ShoppingBag, UserRound } from "lucide-react";
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
  const [searchOpen, setSearchOpen] = useState(false);
  const openCart = useCartStore((state) => state.openCart);
  const count = useCartStore((state) => state.count());

  return (
    <header className="sticky top-0 z-50 border-b border-brand-ink/10 bg-brand-paper/95 backdrop-blur">
      <TopBar />
      <div className="bg-brand-paper text-brand-ink">
        <div className="container-page grid min-h-[78px] grid-cols-[auto_1fr_auto] items-center gap-3 py-3 lg:grid-cols-[280px_1fr_280px] lg:gap-10">
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-brand-ink/15 bg-white transition-colors duration-200 ease-out hover:border-brand-ink/30 hover:bg-brand-cream lg:hidden"
            aria-label="Abrir menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>

          <Link href="/" className="flex items-center gap-3" aria-label={`${storeName} - início`}>
            <BrandMark tone="dark" />
          </Link>

          <div className="hidden lg:block">
            <SearchBar id="desktop-search" />
          </div>

          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen((value) => !value)}
              className="grid h-11 w-11 place-items-center rounded-full border border-brand-ink/15 bg-white transition-colors duration-200 ease-out hover:border-brand-ink/30 hover:bg-brand-cream lg:hidden"
              aria-label="Buscar"
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setLoginOpen(true)}
              className="hidden min-h-11 items-center gap-2 rounded-full border border-brand-ink/15 bg-white px-4 text-sm font-bold tracking-wide transition-colors duration-200 ease-out hover:border-brand-ink/30 hover:bg-brand-cream sm:inline-flex"
            >
              <UserRound className="h-4 w-4" aria-hidden="true" />
              Conta
            </button>
            <button
              type="button"
              onClick={openCart}
              aria-label={`Abrir carrinho com ${count} item(s)`}
              className="relative inline-flex min-h-11 items-center gap-2 rounded-full bg-brand-ink px-4 text-sm font-extrabold uppercase tracking-[0.14em] text-brand-paper transition-colors duration-200 ease-out hover:bg-brand-blue"
            >
              <ShoppingBag className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">Carrinho</span>
              <span className="tabular grid min-h-6 min-w-6 place-items-center rounded-full bg-brand-yellow px-1.5 text-[11px] text-brand-ink">
                {count}
              </span>
            </button>
          </div>
        </div>
        {searchOpen ? (
          <div className="container-page pb-3 lg:hidden">
            <SearchBar id="mobile-search" />
          </div>
        ) : null}
      </div>
      <MegaMenu />
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </header>
  );
}
