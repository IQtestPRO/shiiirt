"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Como funciona o pagamento e a finalização?",
    a: "Você adiciona as camisas ao carrinho e clica em finalizar pelo WhatsApp. Um atendente humano confirma medidas, personalização e envio, e te passa o link de pagamento via Pix ou cartão. Tudo combinado por mensagem, sem checkout engessado."
  },
  {
    q: "As camisas são originais?",
    a: "Trabalhamos com peças importadas equivalentes à versão torcedor. Modelagem fiel, tecido respirável e acabamento conferido peça a peça. Para versões oficiais com licenciamento, indicamos a loja do clube; somos uma alternativa de curadoria."
  },
  {
    q: "Em quantos dias chega?",
    a: "Itens marcados como 'Pronta entrega' saem em até 24h úteis do nosso estoque em São Paulo. Prazo de envio para todo Brasil entre 2 e 7 dias úteis, dependendo da região. Você recebe o código de rastreio no WhatsApp."
  },
  {
    q: "Como funciona a personalização com nome e número?",
    a: "Em modelos selecionados (indicados pela tag 'Personalizável'), você escolhe nome e número antes de adicionar ao carrinho. A confirmação visual chega por WhatsApp antes da estampa ser feita. Pedidos personalizados não têm troca por arrependimento."
  },
  {
    q: "Posso trocar se não servir?",
    a: "Sim. Trocas por tamanho em até 7 dias após o recebimento, com a camisa sem uso e etiqueta original. Custo do frete de devolução é do cliente. Personalizadas só trocam se houver defeito de fabricação."
  },
  {
    q: "Qual é a tabela de tamanhos?",
    a: "Trabalhamos do P ao XG (alguns modelos com 4XL). A tabela completa com altura, largura e indicação de modelagem está em cada página de produto. Em dúvida, chama o atendente no WhatsApp com sua altura e peso."
  }
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="container-page py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-ink/55">Perguntas frequentes</p>
          <h2 className="font-poppins balance mt-2 text-[clamp(1.7rem,3.6vw,2.8rem)] font-extrabold leading-[1.05] tracking-[-0.025em] text-brand-ink">
            Antes de comprar, isso aqui costuma resolver.
          </h2>
          <p className="pretty mt-4 max-w-md text-[15px] font-medium leading-7 text-brand-ink/65">
            Se mesmo assim ficar uma dúvida, chama no WhatsApp. Atendente humano, segunda a sexta, das 9h às 18h.
          </p>
        </div>
        <div className="divide-y divide-brand-ink/10 border-y border-brand-ink/10">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors duration-150 ease-out hover:text-brand-blue"
                >
                  <span className="text-[15px] font-bold leading-snug text-brand-ink">{item.q}</span>
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors duration-200 ease-out ${
                      isOpen
                        ? "border-brand-ink bg-brand-ink text-brand-paper"
                        : "border-brand-ink/15 bg-white text-brand-ink"
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" strokeWidth={1.8} /> : <Plus className="h-4 w-4" strokeWidth={1.8} />}
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
                  style={{ display: "grid", gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0">
                    <p className="pretty pb-5 pr-12 text-[14px] font-medium leading-7 text-brand-ink/70">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
