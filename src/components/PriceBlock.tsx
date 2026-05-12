import { formatCurrency } from "@/lib/format";

type PriceBlockProps = {
  oldPrice?: number;
  price: number;
  installments: string;
  compact?: boolean;
};

export function PriceBlock({ oldPrice = 0, price, installments, compact = false }: PriceBlockProps) {
  return (
    <div className={compact ? "space-y-0.5" : "space-y-1"}>
      {oldPrice > price ? (
        <p className="text-xs font-medium text-slate-500 line-through">{formatCurrency(oldPrice)}</p>
      ) : null}
      <p className={compact ? "text-xl font-extrabold text-brand-ink" : "text-3xl font-extrabold text-brand-ink"}>
        {formatCurrency(price)}
      </p>
      <p className="text-[11px] font-semibold text-slate-600">{installments}</p>
    </div>
  );
}
