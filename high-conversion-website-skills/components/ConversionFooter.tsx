export type ConversionFooterProps = {
  brand: string;
  links?: Array<{ label: string; href: string }>;
  cta?: { label: string; href: string };
};

export function ConversionFooter({ brand, links = [], cta }: ConversionFooterProps) {
  return (
    <footer className="bg-slate-950 px-4 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-bold">{brand}</p>
          <p className="mt-1 text-sm text-slate-400">Clareza, velocidade e confiança para converter melhor.</p>
        </div>
        <nav aria-label="Links do rodapé" className="flex flex-wrap gap-4 text-sm text-slate-300">
          {links.map((link) => <a key={link.href} className="hover:text-white focus:outline-none focus:ring-4 focus:ring-white/20" href={link.href}>{link.label}</a>)}
        </nav>
        {/* CTA no rodapé captura usuários que chegaram ao fim e ainda estão prontos para agir. */}
        {cta ? <a className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-4 font-bold text-slate-950 hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-white/30" href={cta.href}>{cta.label}</a> : null}
      </div>
    </footer>
  );
}

export function ConversionFooterExample() {
  return <ConversionFooter brand="Growth Site" links={[{ label: "Privacidade", href: "/privacidade" }, { label: "Contato", href: "/contato" }]} cta={{ label: "Falar com especialista", href: "#lead" }} />;
}
