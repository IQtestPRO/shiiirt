"use client";

import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { useRef } from "react";

type ReviewMedia = { kind: "image"; src: string } | { kind: "video"; src: string; poster?: string };

type Review = {
  id: string;
  name: string;
  city: string;
  product: string;
  rating: number;
  body: string;
  media: ReviewMedia;
};

const reviews: Review[] = [
  {
    id: "r1",
    name: "Rafael Mendonça",
    city: "Rio de Janeiro, RJ",
    product: "Camisa Flamengo I 2026",
    rating: 5,
    body: "A camisa do mengão chegou exatamente como na foto. Etiqueta original, tecido respirável e o escudo bem bordado. Dei de presente pro meu pai e ele amou.",
    media: { kind: "image", src: "/assets/image-review.png" }
  },
  {
    id: "r2",
    name: "Lucas Pereira",
    city: "São Paulo, SP",
    product: "Camisa Corinthians retrô — anos 90",
    rating: 5,
    body: "Pedi a retrô do Timão e veio impecável. Acabamento da gola, tecido encorpado e modelagem fiel ao modelo da época. Virou peça de coleção.",
    media: { kind: "image", src: "/assets/image-review2.png" }
  },
  {
    id: "r3",
    name: "Beatriz Cardoso",
    city: "São Paulo, SP",
    product: "Camisa Palmeiras I 2026",
    rating: 5,
    body: "Verde lindo, costura limpa e caimento certinho. Já tinha comprado em outro lugar e a qualidade do Mundo das Importadas é superior.",
    media: { kind: "image", src: "/assets/image-review3.png" }
  },
  {
    id: "r4",
    name: "Diogo Albuquerque",
    city: "Niterói, RJ",
    product: "Camisa Fluminense III 2026",
    rating: 4,
    body: "A tricolor das laranjeiras é uma peça linda, com listras bem alinhadas. Envio demorou um dia além do prazo, mas o atendimento resolveu na hora.",
    media: { kind: "image", src: "/assets/image-review4.png" }
  },
  {
    id: "r5",
    name: "Camila Tavares",
    city: "Campinas, SP",
    product: "Camisa São Paulo I 2026",
    rating: 5,
    body: "Comprei pra usar no Morumbi e ganhei elogio do estádio inteiro. Caimento certo, costura sem defeito e cores vibrantes. Já recomendei pras meninas.",
    media: { kind: "image", src: "/assets/image-review5.png" }
  },
  {
    id: "r6",
    name: "Juliana Sato",
    city: "Curitiba, PR",
    product: "Camisa importada — unboxing",
    rating: 5,
    body: "Filmei o unboxing porque foi a melhor experiência de compra que tive em loja de camisa. Embalagem caprichada e qualidade que justifica o preço.",
    media: {
      kind: "video",
      src: "/assets/br-11110103-6v65e-mhyz1lkb81dta5.16000051765122466.mp4#t=0.1"
    }
  }
];

const swatches = [
  "from-brand-yellow/30 to-brand-yellow/5",
  "from-brand-yellow/20 to-brand-paper/5",
  "from-brand-paper/25 to-brand-yellow/5",
  "from-brand-yellow/25 to-transparent",
  "from-brand-paper/15 to-brand-yellow/10",
  "from-brand-yellow/35 to-transparent"
];

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function StarShape({ value, size = 13 }: { value: 0 | 1; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path
        d="M12 2.6 L14.9 8.5 L21.4 9.4 L16.7 13.95 L17.85 20.4 L12 17.4 L6.15 20.4 L7.3 13.95 L2.6 9.4 L9.1 8.5 Z"
        fill={value ? "#F5D041" : "rgba(247,242,232,0.18)"}
        stroke={value ? "#C9962E" : "rgba(247,242,232,0.22)"}
        strokeWidth="0.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <StarShape key={index} value={index < rating ? 1 : 0} />
      ))}
    </div>
  );
}

function FeedbackMedia({ review }: { review: Review }) {
  const isVideo = review.media.kind === "video";
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-xl border border-brand-paper/10 bg-brand-ink ${
        isVideo ? "aspect-[9/16]" : "aspect-square"
      }`}
    >
      {review.media.kind === "image" ? (
        <img
          src={review.media.src}
          alt={`Foto enviada por ${review.name}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <video
          src={review.media.src}
          className="h-full w-full object-cover"
          controls
          playsInline
          preload="metadata"
          muted
        />
      )}
      {review.media.kind === "video" ? (
        <span className="pointer-events-none absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-brand-yellow px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-[0.18em] text-brand-ink">
          <Play className="h-2.5 w-2.5 fill-brand-ink" aria-hidden="true" strokeWidth={0} />
          Vídeo
        </span>
      ) : null}
    </div>
  );
}

function InitialsAvatar({ name, swatch }: { name: string; swatch: string }) {
  return (
    <span
      className={`font-poppins grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br ${swatch} text-[13px] font-bold tracking-tight text-brand-paper ring-1 ring-brand-paper/15`}
      aria-hidden="true"
    >
      {getInitials(name)}
    </span>
  );
}

export function Reviews() {
  const railRef = useRef<HTMLDivElement>(null);

  function scrollByAmount(direction: 1 | -1) {
    const rail = railRef.current;
    if (!rail) return;
    const step = rail.clientWidth * 0.6;
    rail.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <section className="bg-brand-ink text-brand-paper">
      <div className="container-page py-12 sm:py-16 md:py-24">
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-lato text-[10px] font-bold uppercase tracking-[0.28em] text-brand-paper/55 sm:text-[11px]">
              Feedbacks
            </p>
            <h2 className="font-bebas balance mt-2.5 text-[clamp(2.4rem,5vw,4rem)] uppercase leading-[0.95] tracking-[0.005em] text-brand-paper sm:mt-3">
              O que dizem por aí
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByAmount(-1)}
              aria-label="Feedback anterior"
              className="grid h-10 w-10 place-items-center rounded-full border border-brand-paper/15 bg-brand-paper/[0.04] text-brand-paper transition-colors duration-200 ease-out hover:border-brand-paper/30 hover:bg-brand-paper/[0.08] md:h-11 md:w-11"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" strokeWidth={1.8} />
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount(1)}
              aria-label="Próximo feedback"
              className="grid h-10 w-10 place-items-center rounded-full border border-brand-paper/15 bg-brand-paper/[0.04] text-brand-paper transition-colors duration-200 ease-out hover:border-brand-paper/30 hover:bg-brand-paper/[0.08] md:h-11 md:w-11"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" strokeWidth={1.8} />
            </button>
          </div>
        </div>

        <div ref={railRef} className="scroll-rail no-scrollbar flex gap-4 overflow-x-auto pb-2 sm:gap-5">
          {reviews.map((review, index) => (
            <article
              key={review.id}
              className="flex h-auto w-[86vw] shrink-0 flex-col gap-4 rounded-2xl border border-brand-paper/10 bg-brand-inkSoft/60 p-5 transition-colors duration-300 ease-out hover:border-brand-paper/20 sm:gap-5 sm:p-7 md:w-[calc(50%-0.625rem)]"
            >
              <div className="flex items-stretch gap-4 sm:gap-5">
                <div className="w-[42%] max-w-[180px] shrink-0">
                  <FeedbackMedia review={review} />
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-2.5 sm:gap-3">
                  <Stars rating={review.rating} />
                  <p className="font-poppins pretty line-clamp-6 text-[13px] font-normal leading-[1.55] text-brand-paper/85 sm:text-[14px]">
                    {review.body}
                  </p>
                </div>
              </div>
              <div className="mt-auto flex items-center gap-3 border-t border-brand-paper/10 pt-4 sm:pt-5">
                <InitialsAvatar name={review.name} swatch={swatches[index % swatches.length]} />
                <div className="min-w-0">
                  <p className="font-poppins truncate text-[13.5px] font-semibold text-brand-paper sm:text-[14px]">{review.name}</p>
                  <p className="font-poppins mt-0.5 truncate text-[10.5px] font-normal text-brand-paper/55 sm:text-[11px]">
                    {review.city} · {review.product}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
