import Link from "next/link";
import { ArrowRight, BadgeCheck, MessageCircle, PackageCheck, Sparkles } from "lucide-react";
import { products } from "@/lib/products";

export function HeroBanner() {
  const featured = products.find((product) => product.slug === "camisa-brasil-i-2026-amarela") || products[0];

  return (
    <section className="bg-brand-ink">
      <div className="container-page relative py-3 sm:py-4">
        <div className="relative min-h-[340px] overflow-hidden rounded-lg bg-brand-ink text-white shadow-soft ring-1 ring-white/10 sm:min-h-[410px] lg:min-h-[480px]">
          <img
            src="/assets/hero-brasil-copa-2026-premium.png"
            alt="Camisa principal Brasil 2026 amarela em banner premium da Central da Tailândia"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-brand-ink/6 via-brand-ink/38 to-brand-ink/88 sm:from-brand-ink/0 sm:via-brand-ink/8 sm:to-brand-ink/84"
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-ink/50 to-transparent" aria-hidden="true" />

          <div className="relative ml-auto flex min-h-[340px] w-[76%] max-w-xl flex-col justify-center px-5 py-8 text-right sm:min-h-[410px] sm:w-auto sm:px-9 lg:min-h-[480px] lg:px-12">
            <span className="ml-auto inline-flex w-fit items-center gap-2 rounded-full bg-brand-yellow px-3 py-2 text-xs font-extrabold uppercase tracking-[0.08em] text-brand-ink shadow-card">
              <Sparkles className="h-4 w-4 text-brand-blue" aria-hidden="true" />
              Copa do Mundo 2026
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-[0.98] text-white sm:text-6xl lg:text-7xl">
              Brasil 2026: a principal chegou
            </h1>
            <p className="ml-auto mt-4 max-w-md text-sm font-semibold leading-6 text-blue-50 sm:text-lg sm:leading-7">
              A camisa amarela que abre o ciclo da Copa, com visual premium, pronta entrega e compra pelo WhatsApp.
            </p>
            <div className="ml-auto mt-5 hidden max-w-lg flex-wrap justify-end gap-2 sm:flex">
              {[
                { icon: PackageCheck, label: "Pronta entrega" },
                { icon: BadgeCheck, label: "Curadoria visual" },
                { icon: MessageCircle, label: "Pedido assistido" }
              ].map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-bold text-white ring-1 ring-white/15"
                >
                  <item.icon className="h-4 w-4 text-brand-yellow" aria-hidden="true" />
                  {item.label}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-col justify-end gap-3 sm:flex-row">
              <Link
                href={`/produtos/${featured.slug}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-yellow px-5 text-sm font-extrabold text-brand-ink shadow-card transition hover:bg-white"
              >
                Comprar Brasil 2026
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/categoria/pronta-entrega"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/70 px-5 text-sm font-extrabold text-white transition hover:bg-white hover:text-brand-blue"
              >
                Ver pronta entrega
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
