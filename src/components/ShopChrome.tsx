"use client";

import { CartDrawer } from "@/components/cart/CartDrawer";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/header/Header";

export function ShopChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="conteudo" className="min-h-dvh">
        {children}
      </main>
      <Footer />
      <CartDrawer />
      <CookieBanner />
    </>
  );
}
