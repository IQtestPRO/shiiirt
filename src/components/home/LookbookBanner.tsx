import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function LookbookBanner() {
  return (
    <section className="container-wide py-10 sm:py-16">
      <div className="relative overflow-hidden rounded-2xl sm:rounded-[28px]">
        <div className="relative aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-[21/9]">
          <Image
            src="/assets/jerss.png"
            alt="Três camisas penduradas em araras de latão em ambiente minimalista"
            fill
            sizes="(min-width: 1024px) 1400px, 100vw"
            className="object-cover"
          />
        </div>
        {/* Mobile: strong bottom gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/65 via-45% to-transparent sm:hidden"
          aria-hidden="true"
        />
        {/* Tablet/desktop: side gradient */}
        <div
          className="absolute inset-0 hidden bg-gradient-to-r from-brand-ink/78 via-brand-ink/30 to-transparent sm:block"
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex items-end px-5 py-6 sm:px-12 sm:py-12 lg:px-16 lg:py-14">
          <div className="max-w-2xl text-brand-paper">
            <p className="font-lato text-[10px] font-bold uppercase tracking-[0.26em] text-brand-yellow sm:text-[11px] sm:tracking-[0.32em]">
              Lookbook · Edição Copa
            </p>
            <h2 className="font-bebas balance mt-2 text-[clamp(2rem,8vw,2.6rem)] uppercase leading-[0.95] tracking-[0.005em] sm:mt-3 sm:text-[clamp(2.4rem,6vw,4.4rem)]">
              Três camisas para abrir a temporada 2026.
            </h2>
            <p className="font-lato pretty mt-2.5 max-w-md text-[13px] font-medium leading-[1.55] text-brand-paper/80 sm:mt-3 sm:text-base sm:leading-7">
              Seleções, clubes europeus e camisas femininas em uma curadoria reduzida — só o que vale a pena pendurar.
            </p>
            <Link href="/categoria/selecoes" className="btn-pill mt-4 inline-flex sm:mt-7">
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
