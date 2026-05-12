import { storeName } from "@/lib/catalog";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span className="relative grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-md bg-white text-brand-blue shadow-card ring-1 ring-brand-gold/35">
        <span className="absolute left-1/2 top-2 h-5 w-8 -translate-x-1/2 rounded-b-full border-b-2 border-brand-gold/70" aria-hidden="true" />
        <span className="relative text-[21px] font-extrabold leading-none tracking-normal">CT</span>
        <span className="absolute bottom-2 h-px w-8 bg-brand-green/70" aria-hidden="true" />
      </span>
      {!compact ? (
        <span className="hidden min-w-0 sm:block">
          <span className="block text-2xl font-extrabold leading-6 tracking-normal text-white">{storeName}</span>
          <span className="mt-1 block text-[11px] font-bold uppercase tracking-[0.12em] text-blue-100">
            Curadoria premium
          </span>
        </span>
      ) : null}
    </span>
  );
}
