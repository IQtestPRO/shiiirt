import { BadgeCheck, MessageCircle, PackageCheck, PenLine, Truck } from "lucide-react";

const badges = [
  { icon: MessageCircle, title: "Atendimento rápido", text: "Pedido orientado por WhatsApp, sem checkout engessado." },
  { icon: PenLine, title: "Personalização disponível", text: "Nome e número em modelos selecionados no próprio carrinho." },
  { icon: Truck, title: "Envio para todo Brasil", text: "Catálogo organizado por pronta entrega, linha e tamanho." },
  { icon: BadgeCheck, title: "Curadoria visual", text: "Fotos padronizadas e modelos conferidos por temporada." }
];

export function TrustBadges() {
  return (
    <section className="container-page grid gap-3 py-5 sm:grid-cols-2 lg:grid-cols-4">
      {badges.map((badge) => (
        <article key={badge.title} className="flex min-h-[112px] items-center gap-3 rounded-lg bg-white px-4 py-4 shadow-card ring-1 ring-slate-200/80">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-brand-mist ring-1 ring-slate-200">
            <badge.icon className="h-5 w-5 text-brand-blue" aria-hidden="true" />
          </span>
          <span>
            <h3 className="text-sm font-extrabold text-brand-ink">{badge.title}</h3>
            <p className="mt-1 text-xs font-semibold leading-5 text-slate-600">{badge.text}</p>
          </span>
        </article>
      ))}
      <PackageCheck className="hidden" aria-hidden="true" />
    </section>
  );
}
