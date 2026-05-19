"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import type { Product } from "@/types/product";
import { ProductCard } from "@/components/products/ProductCard";

export function ProductRail({
  title,
  products,
  href
}: {
  title: string;
  eyebrow?: string;
  products: Product[];
  href: string;
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  function updateButtons() {
    const rail = railRef.current;
    if (!rail) return;
    setCanPrev(rail.scrollLeft > 4);
    setCanNext(rail.scrollLeft + rail.clientWidth < rail.scrollWidth - 4);
  }

  function scrollByOneCard(direction: 1 | -1) {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector("[data-rail-item]") as HTMLElement | null;
    const step = card ? card.offsetWidth + 16 : rail.clientWidth * 0.6;
    rail.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    updateButtons();
    rail.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    return () => {
      rail.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, []);

  return (
    <section className="py-12 sm:py-16">
      <div className="container-page mb-6 flex items-end justify-between gap-4">
        <h2 className="font-poppins balance text-[clamp(1.5rem,3.2vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em] text-brand-ink">
          {title}
        </h2>
        <Link
          href={href}
          className="font-poppins group hidden items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] text-brand-ink underline decoration-brand-ink/30 decoration-2 underline-offset-[6px] transition-colors duration-200 ease-out hover:decoration-brand-ink sm:inline-flex"
        >
          Ver tudo
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
            strokeWidth={1.8}
          />
        </Link>
      </div>

      <div className="container-page relative">
        <button
          type="button"
          onClick={() => scrollByOneCard(-1)}
          aria-label="Produtos anteriores"
          disabled={!canPrev}
          className="absolute left-0 top-[42%] z-20 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-[0_4px_14px_rgba(0,0,0,0.10)] transition-all duration-200 ease-out hover:border-neutral-400 hover:text-neutral-900 disabled:cursor-not-allowed disabled:opacity-0 sm:grid"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" strokeWidth={1.8} />
        </button>
        <button
          type="button"
          onClick={() => scrollByOneCard(1)}
          aria-label="Próximos produtos"
          disabled={!canNext}
          className="absolute right-0 top-[42%] z-20 hidden h-11 w-11 -translate-y-1/2 translate-x-1/2 place-items-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-[0_4px_14px_rgba(0,0,0,0.10)] transition-all duration-200 ease-out hover:border-neutral-400 hover:text-neutral-900 disabled:cursor-not-allowed disabled:opacity-0 sm:grid"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" strokeWidth={1.8} />
        </button>

        <div
          ref={railRef}
          className="no-scrollbar -mx-2 flex gap-4 overflow-x-auto px-2 pb-2"
          style={{ scrollSnapType: "none", scrollBehavior: "smooth" }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              data-rail-item
              className="shrink-0 w-[72vw] sm:w-[calc((100%-1rem)/2)] md:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-3rem)/4)] xl:w-[calc((100%-4rem)/5)]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <div className="container-page mt-6 sm:hidden">
        <Link
          href={href}
          className="font-poppins inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-brand-ink underline decoration-brand-ink/30 decoration-2 underline-offset-[6px]"
        >
          Ver tudo
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" strokeWidth={1.8} />
        </Link>
      </div>
    </section>
  );
}
