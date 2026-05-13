"use client";

import { AnnouncementBar } from "@/components/AnnouncementBar";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { NavbarDarkShadow } from "@/components/header/NavbarDarkShadow";

export function ShopChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnnouncementBar />
      <NavbarDarkShadow />
      <main id="conteudo" className="min-h-dvh">
        {children}
      </main>
      <Footer />
      <CartDrawer />
      <CookieBanner />
    </>
  );
}
