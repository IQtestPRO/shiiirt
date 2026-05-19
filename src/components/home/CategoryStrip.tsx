import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const tiles = [
  {
    href: "/categoria/pronta-entrega",
    eyebrow: "Pronta entrega",
    title: "Envio rápido no Brasil",
    image: "/assets/card1.png"
  },
  {
    href: "/categoria/selecoes",
    eyebrow: "Seleções 2026",
    title: "Camisas para a Copa",
    image: "/assets/card2.png"
  },
  {
    href: "/categoria/personalizaveis",
    eyebrow: "Personalize",
    title: "Nome e número sob medida",
    image: "/assets/card3.png"
  }
];

export function CategoryStrip() {
  return (
    <section className="container-page py-12 sm:py-16">
      <div className="mb-6 flex flex-col gap-3 sm:mb-7 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-lato text-[10px] font-bold uppercase tracking-[0.28em] text-brand-ink/55 sm:text-[11px]">Coleções em destaque</p>
          <h2 className="font-bebas balance mt-2.5 text-[clamp(2.4rem,5.4vw,4.2rem)] uppercase leading-[0.95] tracking-[0.005em] text-brand-ink sm:mt-3">
            Por onde começar
          </h2>
        </div>
        <Link
          href="/categoria/promocoes"
          className="font-poppins group inline-flex w-fit items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-brand-ink underline decoration-brand-ink/30 decoration-2 underline-offset-[6px] transition-colors duration-200 ease-out hover:decoration-brand-ink sm:text-[13px]"
        >
          Ver promoções
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" strokeWidth={1.8} />
        </Link>
      </div>

      <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
        {tiles.map((tile) => (
          <Link
            key={tile.href}
            href={tile.href}
            className="hover-lift group relative block overflow-hidden rounded-2xl bg-brand-ink"
          >
            <div className="aspect-[4/5] overflow-hidden sm:aspect-[5/6]">
              <img
                src={tile.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/40 to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 px-4 pb-4 text-brand-paper sm:px-5 sm:pb-5">
              <span className="font-lato text-[10px] font-bold uppercase tracking-[0.28em] text-brand-yellow">{tile.eyebrow}</span>
              <h3 className="font-poppins text-xl font-extrabold leading-tight tracking-[-0.02em] sm:text-3xl">
                {tile.title}
              </h3>
              <span className="font-poppins mt-1.5 inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] sm:text-[11px] md:hidden">
                Explorar
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={1.8} />
              </span>
              <span className="reveal-on-hover font-poppins mt-2 hidden items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] md:inline-flex">
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
