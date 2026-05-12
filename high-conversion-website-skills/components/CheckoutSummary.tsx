export type CheckoutLine = { label: string; value: string };

export function CheckoutSummary({ lines, total, ctaLabel = "Finalizar pedido" }: { lines: CheckoutLine[]; total: string; ctaLabel?: string }) {
  return (
    <aside className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" aria-labelledby="checkout-summary-title">
      <h2 id="checkout-summary-title" className="text-xl font-bold text-slate-950">Resumo do pedido</h2>
      <dl className="mt-4 space-y-3">
        {lines.map((line) => (
          <div key={line.label} className="flex justify-between gap-4 text-sm">
            <dt className="text-slate-600">{line.label}</dt>
            <dd className="font-semibold text-slate-950">{line.value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-4 flex justify-between border-t border-slate-200 pt-4 text-lg font-bold text-slate-950">
        <span>Total</span>
        <span>{total}</span>
      </div>
      {/* Resumo persistente reduz surpresa de custo no checkout. */}
      <button className="mt-5 min-h-12 w-full rounded-md bg-slate-950 px-4 font-bold text-white hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300" type="button">
        {ctaLabel}
      </button>
      <p className="mt-3 text-xs leading-5 text-slate-500">Pagamento seguro. Você revisa tudo antes da confirmação.</p>
    </aside>
  );
}

export function CheckoutSummaryExample() {
  return <CheckoutSummary lines={[{ label: "Produto", value: "R$ 199" }, { label: "Frete", value: "Grátis" }]} total="R$ 199" />;
}
