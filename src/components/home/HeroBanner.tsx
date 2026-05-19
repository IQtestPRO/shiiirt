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
        <div className="relative overflow-hidden rounded-2xl bg-brand-ink sm:rounded-[24px]">
          <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[21/9]">
            <img
              src="/assets/hero-jersey.png"
              alt="Camisa amarela em estúdio cinematográfico com spotlight"
              className="absolute inset-0 h-full w-full object-cover object-[60%_center] opacity-95 sm:object-center"
              loading="eager"
            />
            <LampGlow
              className="left-1/2 -translate-x-1/2"
              color="rgba(255, 232, 168, 0.32)"
              highlight="rgba(255, 250, 220, 0.65)"
            />
            {/* Mobile: strong bottom gradient so text is readable over photo */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/70 via-40% to-transparent sm:hidden"
              aria-hidden="true"
            />
            {/* Tablet/desktop: side + bottom gradient */}
            <div
              className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-brand-ink/95 via-brand-ink/55 to-transparent sm:block"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-1/2 bg-gradient-to-t from-brand-ink/85 to-transparent sm:block"
              aria-hidden="true"
            />

            <div className="absolute inset-0 flex flex-col justify-end px-5 py-6 text-brand-paper sm:justify-center sm:px-12 sm:py-14 lg:px-16">
              <div className="max-w-2xl">
                <div className="font-lato inline-flex items-center gap-2 text-[9.5px] font-bold uppercase tracking-[0.26em] text-brand-yellow sm:gap-3 sm:text-[10px] sm:tracking-[0.32em]">
                  <span className="h-px w-6 bg-brand-yellow/60 sm:w-8" aria-hidden="true" />
                  Edição Copa 2026 · Pronta entrega
                </div>
                <h1 className="font-bebas mt-3 text-[clamp(2.6rem,11vw,3.6rem)] uppercase leading-[0.92] tracking-[0.005em] sm:mt-5 sm:text-[clamp(3rem,8.5vw,6.8rem)]">
                  Rumo
                  <span className="block text-brand-yellow">ao hexa.</span>
                  <span className="block">O manto chegou.</span>
                </h1>
                <p className="font-lato mt-3 max-w-md text-[13.5px] font-medium leading-[1.55] text-brand-paper/80 sm:mt-5 sm:text-base sm:leading-7">
                  Nova camisa da seleção brasileira 2026 — edição limitada, pronta entrega e personalização opcional.
                </p>
                <div className="mt-5 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:items-center sm:gap-3">
                  <HoverBorderGradient containerClassName="rounded-full">
                    <Link
                      href={`/produtos/${featured.slug}`}
                      className="group inline-flex min-h-12 w-full items-center justify-between gap-3 rounded-full bg-brand-yellow pl-5 pr-1.5 text-[12px] font-extrabold uppercase tracking-[0.16em] text-brand-ink transition-colors duration-200 ease-out hover:bg-white sm:pl-6 sm:text-[13px] sm:tracking-[0.18em]"
                    >
                      <span>Comprar agora</span>
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-ink text-brand-yellow transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" strokeWidth={1.8} />
                      </span>
                    </Link>
                  </HoverBorderGradient>
                  <Link
                    href="/categoria/pronta-entrega"
                    className="inline-flex min-h-11 items-center justify-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.18em] text-brand-paper underline decoration-brand-yellow/60 decoration-2 underline-offset-[6px] transition-colors duration-200 ease-out hover:decoration-brand-yellow sm:justify-start sm:text-[12px] sm:tracking-[0.22em] sm:underline-offset-[8px]"
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
