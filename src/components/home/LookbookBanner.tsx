import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function LookbookBanner() {
  return (
    <section className="container-wide py-12 sm:py-16">
      <div className="relative overflow-hidden rounded-[28px]">
        <img
          src="/assets/banner-store-window.png"
          alt="Vitrine boutique com três camisas em hastes de latão"
          className="aspect-[21/9] w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/72 via-brand-ink/28 to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 flex items-end px-6 py-8 sm:px-12 sm:py-12 lg:px-16 lg:py-14">
          <div className="max-w-2xl text-brand-paper">
            <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-brand-yellow">Lookbook · Edição Copa</p>
            <h2 className="font-poppins balance mt-3 text-[clamp(1.7rem,4vw,3rem)] font-extrabold leading-[1.02] tracking-[-0.025em]">
              Três camisas para abrir a temporada 2026.
            </h2>
            <p className="pretty mt-3 max-w-md text-sm font-medium leading-7 text-brand-paper/80 sm:text-base">
              Seleções, clubes europeus e camisas femininas em uma curadoria reduzida — só o que vale a pena pendurar.
            </p>
            <Link href="/categoria/selecoes" className="btn-pill mt-7 inline-flex">
              <span>Ver o lookbook</span>
              <span className="btn-pill-icon">
                <ArrowUpRight className="h-4 w-4 text-brand-paper" aria-hidden="true" strokeWidth={1.8} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
