export type FAQItem = { question: string; answer: string };

export function FAQSection({ items }: { items: FAQItem[] }) {
  return (
    <section className="px-4 py-14" aria-labelledby="faq-title">
      <div className="mx-auto max-w-3xl">
        <h2 id="faq-title" className="text-3xl font-bold text-slate-950">Perguntas frequentes</h2>
        <div className="mt-6 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
          {items.map((item) => (
            <details key={item.question} className="group p-5">
              {/* FAQ remove objeções sem alongar a seção de venda. */}
              <summary className="cursor-pointer text-base font-bold text-slate-950 focus:outline-none focus:ring-4 focus:ring-emerald-100">{item.question}</summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSectionExample() {
  return <FAQSection items={[{ question: "Quanto tempo leva?", answer: "O primeiro sprint pode ser concluído em 7 dias quando os acessos e dados estão disponíveis." }, { question: "Vocês implementam ou só auditam?", answer: "O pacote foi pensado para auditar, priorizar e implementar componentes reutilizáveis." }]} />;
}
