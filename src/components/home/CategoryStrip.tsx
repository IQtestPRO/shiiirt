import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const tiles = [
  {
    href: "/categoria/pronta-entrega",
    eyebrow: "Pronta entrega",
    title: "Envio rápido no Brasil",
    image: "/assets/category-yellow-hanger.png"
  },
  {
    href: "/categoria/selecoes",
    eyebrow: "Seleções 2026",
    title: "Camisas para a Copa",
    image: "/assets/hero-flatlay.png"
  },
  {
    href: "/categoria/personalizaveis",
    eyebrow: "Personalize",
    title: "Nome e número sob medida",
    image: "/assets/category-stack-folded.png"
  }
];

export function CategoryStrip() {
  return (
    <section className="container-page py-12 sm:py-16">
      <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-ink/55">Coleções em destaque</p>
          <h2 className="font-poppins balance mt-2 text-[clamp(1.7rem,3.6vw,2.6rem)] font-extrabold leading-[1.05] tracking-[-0.025em] text-brand-ink">
            Por onde começar
          </h2>
        </div>
        <Link
          href="/categoria/promocoes"
          className="inline-flex w-fit items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-brand-ink underline decoration-brand-ink/30 decoration-2 underline-offset-[6px] transition-colors duration-200 ease-out hover:decoration-brand-ink"
        >
          Ver promoções
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" strokeWidth={1.8} />
        </Link>
      </div>

      <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
        {tiles.map((tile) => (
          <Link
            key={tile.href}
            href={tile.href}
            className="hover-lift surface-card group relative block overflow-hidden rounded-2xl"
          >
            <div className="aspect-[5/6] overflow-hidden">
              <img
                src={tile.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/40 to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 px-5 pb-5 text-brand-paper">
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand-yellow">{tile.eyebrow}</span>
              <h3 className="font-poppins text-2xl font-extrabold leading-tight tracking-[-0.02em] sm:text-3xl">
                {tile.title}
              </h3>
              <span className="reveal-on-hover mt-2 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em]">
                Explorar
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={1.8} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
