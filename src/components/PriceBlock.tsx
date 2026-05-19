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
        <p className="font-poppins tabular text-[11px] font-medium text-brand-ink/45 line-through">{formatCurrency(oldPrice)}</p>
      ) : null}
      <p className={`font-poppins tabular font-extrabold tracking-tight text-brand-ink ${compact ? "text-xl" : "text-3xl"}`}>
        {formatCurrency(price)}
      </p>
      <p className="font-poppins text-[11px] font-semibold text-brand-ink/55">{installments}</p>
    </div>
  );
}
