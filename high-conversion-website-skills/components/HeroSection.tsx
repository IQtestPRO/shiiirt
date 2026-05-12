import type { ReactNode } from "react";

export type HeroSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  proof?: string[];
  media?: ReactNode;
};

export function HeroSection({ eyebrow = "Alta conversão", title, subtitle, primaryCta, secondaryCta, proof = [], media }: HeroSectionProps) {
  return (
    <section className="bg-slate-950 px-4 py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {/* CTA principal aparece cedo porque usuários de campanha decidem rápido. */}
            <a className="inline-flex min-h-12 items-center justify-center rounded-md bg-emerald-400 px-6 text-base font-bold text-slate-950 transition hover:bg-emerald-300 focus:outline-none focus:ring-4 focus:ring-emerald-200" href={primaryCta.href}>
              {primaryCta.label}
            </a>
            {secondaryCta ? (
              <a className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/25 px-6 text-base font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/25" href={secondaryCta.href}>
                {secondaryCta.label}
              </a>
            ) : null}
          </div>
          {proof.length ? (
            <ul className="mt-7 grid gap-2 text-sm text-slate-300 sm:grid-cols-3">
              {proof.map((item) => <li key={item} className="rounded-md bg-white/10 px-3 py-2">{item}</li>)}
            </ul>
          ) : null}
        </div>
        {media ? <div className="rounded-lg bg-white/5 p-3 ring-1 ring-white/10">{media}</div> : null}
      </div>
    </section>
  );
}

export function HeroSectionExample() {
  return <HeroSection title="Converta mais visitantes em clientes" subtitle="Uma página rápida, clara e mensurável para campanhas que precisam gerar resultado." primaryCta={{ label: "Quero otimizar meu site", href: "#lead" }} secondaryCta={{ label: "Ver exemplos", href: "#proof" }} proof={["Setup em 7 dias", "Eventos GA4", "Mobile-first"]} />;
}
