import { CheckCircle2, CreditCard, MapPin, Package, ScanSearch, Truck } from "lucide-react";

const sizes = ["P", "M", "G", "GG", "XG"];

const featuredProducts = [
  {
    name: "Brasil II 2026 — Azul",
    image: "/assets/products/ct-001/ct-001__camisa-brasil-ii-2026-azul__front__public-reference__v1.webp",
    badge: "Pronta entrega"
  },
  {
    name: "Brasil I 2026 — Amarela",
    image: "/assets/products/ct-002/ct-002__camisa-brasil-i-2026-amarela__front__public-reference__v1.jpg",
    badge: "Em alta"
  },
  {
    name: "Flamengo I 2026",
    image: "/assets/products/ct-003/ct-003__camisa-flamengo-i-2026__front__public-reference__v1.webp",
    badge: "Personalizável"
  }
];

const timeline = [
  { label: "Pedido confirmado", status: "done" as const },
  { label: "Em separação", status: "done" as const },
  { label: "Enviado", status: "done" as const },
  { label: "Em rota", status: "current" as const },
  { label: "Entregue", status: "pending" as const }
];

function CardShell({
  step,
  title,
  body,
  className = "",
  children
}: {
  step: string;
  title: string;
  body: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-paper/10 bg-brand-inkSoft/50 p-6 transition-colors duration-300 ease-out hover:border-brand-yellow/30 sm:p-7 ${className}`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-yellow/[0.04] blur-3xl transition-opacity duration-500 ease-out group-hover:bg-brand-yellow/10" aria-hidden="true" />

      <div className="relative flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.32em] text-brand-yellow">
        <span className="font-poppins tabular text-[11px]">{step}</span>
        <span className="h-px flex-1 bg-brand-paper/15" aria-hidden="true" />
      </div>
      <h3 className="font-poppins balance mt-3 text-[clamp(1.15rem,1.8vw,1.5rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-brand-paper">
        {title}
      </h3>
      <p className="pretty mt-2 max-w-[40ch] text-[13px] font-medium leading-6 text-brand-paper/60">
        {body}
      </p>

      <div className="relative mt-5 flex-1">{children}</div>
    </article>
  );
}

function ProductCardMini({
  product,
  offsetClass,
  hoverClass
}: {
  product: (typeof featuredProducts)[number];
  offsetClass: string;
  hoverClass: string;
}) {
  return (
    <div className={`${offsetClass} transition-transform duration-500 ease-out ${hoverClass}`}>
      <div className="overflow-hidden rounded-xl border border-brand-paper/10 bg-brand-paper/[0.03] backdrop-blur">
        <div className="relative aspect-[4/5] overflow-hidden bg-brand-paper">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain p-3"
            loading="lazy"
          />
          <span className="absolute left-2 top-2 rounded-full bg-brand-ink px-2 py-0.5 text-[8px] font-extrabold uppercase tracking-[0.18em] text-brand-yellow">
            {product.badge}
          </span>
        </div>
        <div className="px-3 py-2.5">
          <p className="font-poppins line-clamp-1 text-[11px] font-semibold text-brand-paper">{product.name}</p>
          <span className="mt-1 inline-block h-1 w-12 rounded-full bg-brand-paper/30" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

export function HowToBuyBento() {
  return (
    <section className="bg-brand-ink text-brand-paper">
      <div className="container-wide py-16 md:py-24">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.36em] text-brand-yellow">Passo a passo</p>
          <h2 className="font-poppins balance mt-3 text-[clamp(2rem,4.2vw,3.4rem)] font-extrabold leading-[1.0] tracking-[-0.03em]">
            Como comprar no Mundo das Importadas
          </h2>
          <p className="pretty mt-4 text-[15px] font-medium leading-7 text-brand-paper/65 sm:text-base">
            Escolha sua camisa, personalize do seu jeito, pague com segurança e acompanhe até chegar na sua casa.
          </p>
        </header>

        <div className="mt-12 grid gap-4 sm:gap-5 md:grid-cols-4 md:grid-rows-[auto_auto_auto] md:[&>*]:min-h-[260px]">
          {/* Card 1 — big: produtos reais do catálogo */}
          <CardShell
            step="01"
            title="Escolha sua camisa"
            body="Navegue pelos modelos disponíveis e selecione a peça que mais combina com você."
            className="md:col-span-2 md:row-span-2"
          >
            <div className="relative h-full min-h-[260px]">
              <div className="absolute inset-0 grid grid-cols-3 gap-3">
                <ProductCardMini
                  product={featuredProducts[0]}
                  offsetClass=""
                  hoverClass="group-hover:-translate-y-2"
                />
                <ProductCardMini
                  product={featuredProducts[1]}
                  offsetClass="translate-y-4"
                  hoverClass="group-hover:translate-y-0"
                />
                <ProductCardMini
                  product={featuredProducts[2]}
                  offsetClass="translate-y-8"
                  hoverClass="group-hover:translate-y-4"
                />
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-inkSoft/80 to-transparent" aria-hidden="true" />
            </div>
          </CardShell>

          {/* Card 2 — tamanho e personalização */}
          <CardShell
            step="02"
            title="Defina tamanho e personalização"
            body="Escolha o tamanho ideal e informe nome e número se quiser personalizar."
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-1.5">
                {sizes.map((size, index) => (
                  <span
                    key={size}
                    className={`tabular grid h-9 min-w-[2.25rem] place-items-center rounded-full px-2 text-[12px] font-extrabold transition-colors duration-200 ease-out ${
                      index === 1
                        ? "bg-brand-yellow text-brand-ink"
                        : "border border-brand-paper/15 bg-brand-paper/[0.04] text-brand-paper/80"
                    }`}
                  >
                    {size}
                  </span>
                ))}
              </div>
              <div className="rounded-lg border border-brand-paper/10 bg-brand-paper/[0.03] px-3 py-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-paper/45">Nome</p>
                <p className="font-poppins tabular mt-1 text-[13px] font-extrabold tracking-tight text-brand-paper">SEU NOME</p>
              </div>
              <div className="rounded-lg border border-brand-paper/10 bg-brand-paper/[0.03] px-3 py-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-paper/45">Número</p>
                <p className="font-poppins tabular mt-1 text-[18px] font-extrabold leading-none tracking-tight text-brand-yellow">10</p>
              </div>
            </div>
          </CardShell>

          {/* Card 3 — endereço com backdrop do mapa */}
          <CardShell
            step="03"
            title="Informe o endereço"
            body="Preencha seus dados de entrega para calcular e preparar o envio."
          >
            <div className="relative flex h-full flex-col">
              <img
                src="/assets/bento-map.png"
                alt=""
                className="pointer-events-none absolute inset-0 h-full w-full rounded-lg object-cover opacity-25 mix-blend-luminosity"
                loading="lazy"
                aria-hidden="true"
              />
              <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-b from-brand-inkSoft/30 via-brand-inkSoft/55 to-brand-inkSoft/85" aria-hidden="true" />
              <div className="relative flex flex-col gap-2">
                {[
                  { label: "CEP", value: "00000-000" },
                  { label: "Endereço", value: "Rua, número, bairro" },
                  { label: "Cidade", value: "Sua cidade — UF" }
                ].map((field) => (
                  <div key={field.label} className="rounded-lg border border-brand-paper/10 bg-brand-ink/70 px-3 py-2 backdrop-blur">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-paper/45">{field.label}</p>
                    <p className="mt-0.5 truncate text-[12px] font-medium text-brand-paper/80">{field.value}</p>
                  </div>
                ))}
                <div className="mt-1 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-yellow">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={1.8} />
                  Calcular envio
                </div>
              </div>
            </div>
          </CardShell>

          {/* Card 4 — pagamento */}
          <CardShell
            step="04"
            title="Pague com Pix ou cartão"
            body="Finalize o pedido com pagamento seguro via Pix ou cartão pelo WhatsApp."
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-brand-yellow/40 bg-brand-yellow/5 p-4">
                <div className="flex items-center justify-between">
                  <span className="font-poppins text-[15px] font-extrabold tracking-tight text-brand-paper">Pix</span>
                  <span className="rounded-full bg-brand-yellow px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-[0.22em] text-brand-ink">
                    −5%
                  </span>
                </div>
                <p className="mt-2 text-[11px] font-medium text-brand-paper/60">Confirmação na hora</p>
              </div>
              <div className="rounded-xl border border-brand-paper/15 bg-brand-paper/[0.04] p-4">
                <div className="flex items-center justify-between">
                  <span className="font-poppins text-[15px] font-extrabold tracking-tight text-brand-paper">Cartão</span>
                  <CreditCard className="h-4 w-4 text-brand-paper/70" aria-hidden="true" strokeWidth={1.6} />
                </div>
                <p className="mt-2 text-[11px] font-medium text-brand-paper/60">Em até 2x sem juros</p>
              </div>
            </div>
          </CardShell>

          {/* Card 5 — rastreio com pacote */}
          <CardShell
            step="05"
            title="Receba o rastreio"
            body="Após a confirmação, enviamos o código para você acompanhar tudo."
          >
            <div className="grid gap-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-brand-paper/10 bg-brand-ink">
                <img
                  src="/assets/bento-package.png"
                  alt="Pacote pronto para envio"
                  className="h-full w-full object-cover opacity-90 transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-ink/85 via-transparent to-transparent" aria-hidden="true" />
                <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-2">
                  <div className="rounded-lg border border-brand-paper/10 bg-brand-ink/80 px-3 py-1.5 backdrop-blur">
                    <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-brand-paper/55">Código</p>
                    <p className="font-poppins tabular mt-0.5 text-[13px] font-extrabold tracking-tight text-brand-paper">
                      BR123456789CN
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-yellow px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-ink">
                    <ScanSearch className="h-3 w-3" aria-hidden="true" strokeWidth={2} />
                    Enviado
                  </span>
                </div>
              </div>
            </div>
          </CardShell>

          {/* Card 6 — full width com cena de entrega */}
          <CardShell
            step="06"
            title="Acompanhe até chegar"
            body="Rastreie o pedido e acompanhe cada etapa até a entrega na sua casa."
            className="md:col-span-4"
          >
            <div className="relative">
              <img
                src="/assets/bento-delivery.png"
                alt=""
                className="pointer-events-none absolute inset-0 h-full w-full rounded-xl object-cover opacity-30 mix-blend-luminosity"
                loading="lazy"
                aria-hidden="true"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-brand-inkSoft via-brand-inkSoft/60 to-brand-inkSoft" aria-hidden="true" />
              <ol className="relative mt-2 grid grid-cols-2 gap-y-6 px-2 py-4 sm:grid-cols-5 sm:gap-y-0">
                <span className="pointer-events-none absolute inset-x-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-paper/20 to-transparent sm:block" aria-hidden="true" />
                <span className="pointer-events-none absolute left-0 top-7 hidden h-px w-[58%] bg-gradient-to-r from-brand-yellow via-brand-yellow to-brand-yellow/40 sm:block" aria-hidden="true" />
                {timeline.map((step, index) => {
                  const isDone = step.status === "done";
                  const isCurrent = step.status === "current";
                  return (
                    <li key={step.label} className="relative flex flex-col items-center text-center">
                      <span
                        className={`relative grid h-7 w-7 place-items-center rounded-full transition-colors duration-300 ease-out ${
                          isCurrent
                            ? "bg-brand-yellow text-brand-ink"
                            : isDone
                              ? "bg-brand-paper/85 text-brand-ink"
                              : "border border-brand-paper/20 bg-brand-inkSoft text-brand-paper/40"
                        }`}
                      >
                        {isCurrent ? (
                          <Truck className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={1.8} />
                        ) : isDone ? (
                          <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={1.8} />
                        ) : (
                          <Package className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={1.8} />
                        )}
                        {isCurrent ? (
                          <span className="pointer-events-none absolute -inset-1 animate-ping rounded-full bg-brand-yellow/40" aria-hidden="true" />
                        ) : null}
                      </span>
                      <span
                        className={`mt-3 text-[11px] font-bold uppercase tracking-[0.18em] ${
                          isCurrent ? "text-brand-yellow" : isDone ? "text-brand-paper" : "text-brand-paper/40"
                        }`}
                      >
                        {step.label}
                      </span>
                      <span className="tabular mt-1 text-[10px] font-medium text-brand-paper/40">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>
          </CardShell>
        </div>
      </div>
    </section>
  );
}
