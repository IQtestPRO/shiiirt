import { MessageCircle, PenLine, ShieldCheck, Truck } from "lucide-react";

const badges = [
  { icon: MessageCircle, title: "WhatsApp 1:1", text: "Atendente humano finaliza seu pedido com calma." },
  { icon: PenLine, title: "Personalização", text: "Nome e número opcionais em modelos selecionados." },
  { icon: Truck, title: "Envio rápido", text: "Frete grátis acima de R$ 199. Brasil inteiro." },
  { icon: ShieldCheck, title: "Curadoria", text: "Foto fiel. Modelagem conferida peça a peça." }
];

export function TrustBadges() {
  return (
    <section className="border-y border-brand-ink/10 bg-brand-mist">
      <div className="container-page grid grid-cols-2 gap-x-6 gap-y-5 py-7 lg:grid-cols-4">
        {badges.map((badge) => (
          <div key={badge.title} className="flex items-start gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-brand-ink/15 bg-brand-paper text-brand-ink">
              <badge.icon className="h-4 w-4" aria-hidden="true" strokeWidth={1.6} />
            </span>
            <span className="min-w-0">
              <h3 className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-brand-ink">{badge.title}</h3>
              <p className="mt-0.5 text-[12px] font-medium leading-5 text-brand-ink/60">{badge.text}</p>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
