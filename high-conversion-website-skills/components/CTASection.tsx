export type CTASectionProps = {
  title: string;
  description: string;
  cta: { label: string; href: string };
  note?: string;
};

export function CTASection({ title, description, cta, note = "Sem compromisso. Resposta em até 1 dia útil." }: CTASectionProps) {
  return (
    <section className="px-4 py-14">
      <div className="mx-auto max-w-5xl rounded-lg bg-slate-900 p-6 text-center text-white sm:p-10">
        <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-300">{description}</p>
        {/* Microcopy reduz ansiedade antes do clique. */}
        <a className="mt-7 inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 font-bold text-slate-950 hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-white/40" href={cta.href}>
          {cta.label}
        </a>
        <p className="mt-3 text-sm text-slate-400">{note}</p>
      </div>
    </section>
  );
}

export function CTASectionExample() {
  return <CTASection title="Pronto para encontrar seus gargalos?" description="Receba uma auditoria objetiva com prioridades de conversão, SEO e performance." cta={{ label: "Solicitar auditoria", href: "#form" }} />;
}
