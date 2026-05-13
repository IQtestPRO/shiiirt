import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LampGlow } from "@/components/effects/LampGlow";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { products } from "@/lib/products";

export function HeroBanner() {
  const featured = products.find((product) => product.slug === "camisa-brasil-i-2026-amarela") || products[0];

  return (
    <section className="relative bg-brand-paper">
      <div className="container-wide pt-3 pb-2">
        <div className="relative overflow-hidden rounded-[24px] bg-brand-ink">
          <div className="relative aspect-[21/9]">
            <img
              src="/assets/hero-jersey.png"
              alt="Camisa amarela em estúdio cinematográfico com spotlight"
              className="absolute inset-0 h-full w-full object-cover opacity-95"
              loading="eager"
            />
            {/* Lamp effect — alinhado ao spotlight da foto (centro ~67% da esquerda) */}
            <LampGlow className="left-[70%] -translate-x-1/2 sm:left-[68%] lg:left-[67%]" />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-ink/95 via-brand-ink/55 to-transparent"
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-ink/85 to-transparent" aria-hidden="true" />

            <div className="absolute inset-0 flex flex-col justify-center px-6 py-10 text-brand-paper sm:px-12 sm:py-14 lg:px-16">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.32em] text-brand-yellow">
                  <span className="h-px w-8 bg-brand-yellow/60" aria-hidden="true" />
                  Edição Copa 2026 · Pronta entrega
                </div>
                <h1 className="font-poppins mt-5 text-[clamp(2.4rem,7vw,5.6rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.035em]">
                  Rumo
                  <span className="block text-brand-yellow">ao hexa.</span>
                  <span className="block">O manto chegou.</span>
                </h1>
                <p className="mt-5 max-w-md text-[15px] font-medium leading-7 text-brand-paper/75 sm:text-base">
                  Nova camisa da seleção brasileira 2026 — edição limitada, pronta entrega e personalização opcional.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <HoverBorderGradient containerClassName="rounded-full">
                    <Link
                      href={`/produtos/${featured.slug}`}
                      className="group inline-flex min-h-12 w-full items-center justify-between gap-3 rounded-full bg-brand-yellow pl-6 pr-1.5 text-[13px] font-extrabold uppercase tracking-[0.18em] text-brand-ink transition-colors duration-200 ease-out hover:bg-white"
                    >
                      <span>Comprar agora</span>
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-ink text-brand-yellow transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" strokeWidth={1.8} />
                      </span>
                    </Link>
                  </HoverBorderGradient>
                  <Link
                    href="/categoria/pronta-entrega"
                    className="inline-flex min-h-12 items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-brand-paper underline decoration-brand-yellow/60 decoration-2 underline-offset-[8px] transition-colors duration-200 ease-out hover:decoration-brand-yellow"
                  >
                    Ver pronta entrega
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-y border-brand-ink/10 bg-brand-paper">
        <div className="container-wide flex min-h-10 items-center overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center gap-10 whitespace-nowrap pr-10 text-[11px] font-bold uppercase tracking-[0.32em] text-brand-ink/55">
            {Array.from({ length: 2 }).map((_, copy) => (
              <span key={copy} className="flex items-center gap-10">
                <span>Frete grátis acima de R$ 199</span>
                <span className="h-1 w-1 rounded-full bg-brand-ink/40" aria-hidden="true" />
                <span>Pix com 5% off · Cartão em 2x</span>
                <span className="h-1 w-1 rounded-full bg-brand-ink/40" aria-hidden="true" />
                <span>Personalize com nome e número</span>
                <span className="h-1 w-1 rounded-full bg-brand-ink/40" aria-hidden="true" />
                <span>Drops semanais · novidades toda terça</span>
                <span className="h-1 w-1 rounded-full bg-brand-ink/40" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
