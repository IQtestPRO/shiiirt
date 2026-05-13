import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { LocationTag } from "@/components/LocationTag";

export function AnnouncementBar() {
  return (
    <div className="bg-brand-ink text-brand-paper">
      <div className="container-wide flex min-h-10 flex-wrap items-center justify-center gap-x-6 gap-y-1.5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] sm:justify-between">
        <LocationTag className="font-poppins" />

        <span className="hidden h-3.5 w-px bg-brand-paper/20 sm:inline-block" aria-hidden="true" />

        <span className="hidden items-center gap-2 md:inline-flex">
          <Sparkles className="h-3.5 w-3.5 text-brand-yellow" aria-hidden="true" strokeWidth={1.8} />
          <span>
            Ganhe 10% off — cupom <span className="tabular text-brand-yellow">PRIMEIRACAMISA</span>
          </span>
        </span>

        <span className="hidden h-3.5 w-px bg-brand-paper/20 md:inline-block" aria-hidden="true" />

        <Link
          href="/categoria/promocoes"
          className="hidden items-center gap-1.5 text-brand-yellow underline decoration-brand-yellow/40 decoration-2 underline-offset-[5px] transition-colors duration-200 ease-out hover:decoration-brand-yellow sm:inline-flex"
        >
          Ver promoções
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={1.8} />
        </Link>
      </div>
    </div>
  );
}
