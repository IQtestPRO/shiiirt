"use client";

import Link from "next/link";
import { ChevronRight, Heart, Pencil, Share2, Star } from "lucide-react";
import { useState } from "react";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductGrid } from "@/components/products/ProductGrid";
import { SizeChartTable } from "@/components/products/SizeChartTable";
import { formatCurrency } from "@/lib/format";
import { useCartStore } from "@/store/cart-store";
import type { Personalization, Product } from "@/types/product";

function parseInstallments(raw: string) {
  const match = raw.match(/^(\d+\s*x)\s+de\s+(R\$\s*[\d.,]+)\s*(.*)$/i);
  if (!match) return { label: raw };
  return { times: match[1].trim(), price: match[2].trim(), rest: match[3].trim() };
}

export function ProductDetails({ product, related }: { product: Product; related: Product[] }) {
  const addItem = useCartStore((state) => state.addItem);
  const [size, setSize] = useState("");
  const [showPersonalization, setShowPersonalization] = useState(false);
  const [personalization, setPersonalization] = useState<Personalization>({ enabled: false });
  const [favorited, setFavorited] = useState(false);
  const [error, setError] = useState("");

  const installments = parseInstallments(product.installments);
  const hasDiscount = product.discount > 0;

  function buy() {
    if (!size) {
      setError("Escolha um tamanho para continuar.");
      return;
    }
    if (personalization.enabled && (!personalization.name?.trim() || !personalization.number?.trim())) {
      setError("Informe nome e número para personalizar.");
      return;
    }
    setError("");
    addItem(product, size, personalization, 1);
  }

  return (
    <div className="space-y-12">
      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div>
          <ProductGallery product={product} />
        </div>

        <div className="flex flex-col gap-6">
          {/* header — title + share */}
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h1 className="font-poppins text-[clamp(1.5rem,2.6vw,2rem)] font-bold leading-[1.2] tracking-tight text-brand-ink">
                {product.name}
              </h1>
              <p className="font-poppins mt-1 text-[12.5px] font-medium text-brand-ink/55 sm:text-[13px]">
                {product.club} · {product.league} · {product.gender}
              </p>
            </div>
            <button
              type="button"
              aria-label="Compartilhar produto"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-brand-ink/12 bg-brand-paper text-brand-ink/60 transition-colors duration-200 ease-out hover:border-brand-ink/30 hover:text-brand-ink"
            >
              <Share2 className="h-4 w-4" strokeWidth={1.8} />
            </button>
          </div>

          {/* rating placeholder */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-3.5 w-3.5 fill-brand-ink/10 text-brand-ink/15" strokeWidth={1.5} />
              ))}
            </div>
            <span className="font-poppins text-[12px] font-medium text-brand-ink/50">Sem avaliações</span>
          </div>

          {/* price block */}
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-poppins tabular text-[26px] font-bold tracking-tight text-brand-ink sm:text-[28px]">
                {formatCurrency(product.price)}
              </span>
              {hasDiscount ? (
                <span className="font-poppins text-[12.5px] font-medium text-brand-ink/55 sm:text-[13px]">no Pix</span>
              ) : null}
              {hasDiscount ? (
                <span className="font-poppins tabular text-[13px] font-medium text-brand-ink/40 line-through sm:text-[14px]">
                  {formatCurrency(product.oldPrice)}
                </span>
              ) : null}
              {hasDiscount ? (
                <span className="font-poppins tabular text-[12.5px] font-bold text-brand-ink sm:text-[13px]">
                  {product.discount}% off
                </span>
              ) : null}
            </div>
            <p className="font-poppins text-[13px] font-normal text-brand-ink/60">
              ou{" "}
              {installments.times ? (
                <>
                  <span className="tabular font-medium text-brand-ink/80">{installments.times}</span>
                  {" de "}
                  <span className="tabular font-medium text-brand-ink/80">{installments.price}</span>
                  {installments.rest ? <> {installments.rest}</> : null}
                </>
              ) : (
                installments.label
              )}
            </p>
          </div>

          {/* cupom box */}
          <div className="rounded-xl border border-brand-yellow/40 bg-brand-yellow/[0.08] px-4 py-3">
            <p className="font-poppins text-[12.5px] leading-6 text-brand-ink/80 sm:text-[13px]">
              Pague com <span className="font-bold text-brand-ink">PIX</span> e ganhe{" "}
              <span className="font-bold text-brand-ink">5% de desconto</span> com o cupom{" "}
              <span className="font-bold tabular tracking-wide text-brand-ink">PRIMEIRACAMISA</span> na primeira compra.{" "}
              <Link href="#" className="font-bold text-brand-ink underline decoration-brand-ink/30 underline-offset-2 transition-colors duration-150 ease-out hover:decoration-brand-ink">
                Saiba mais
              </Link>
            </p>
          </div>

          {/* size selector */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-poppins text-[13.5px] font-bold text-brand-ink sm:text-[14px]">Tamanho e numeração</h2>
              <a
                href="#tabela-medidas"
                className="font-poppins text-[12px] font-medium text-brand-ink underline decoration-brand-ink/35 underline-offset-2 transition-colors duration-150 ease-out hover:decoration-brand-ink"
              >
                Ver tabela
              </a>
            </div>
            <div className="rounded-lg border border-brand-ink/10 bg-brand-cream/50 px-3 py-2.5">
              <p className="font-poppins text-[12px] leading-5 text-brand-ink/70">
                <span className="font-bold text-brand-ink">Dica:</span> as camisas torcedor costumam ter caimento mais ajustado.
                Se ficar entre dois tamanhos, escolha o maior.
              </p>
            </div>
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-6">
              {product.sizes.map((label) => {
                const isActive = size === label;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => {
                      setSize(label);
                      setError("");
                    }}
                    aria-pressed={isActive}
                    className={`font-poppins relative grid min-h-12 place-items-center rounded-lg border text-[13px] font-semibold transition-colors duration-200 ease-out ${
                      isActive
                        ? "border-brand-ink bg-brand-ink text-brand-paper"
                        : "border-brand-ink/12 bg-brand-paper text-brand-ink/75 hover:border-brand-ink/40"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* personalize toggle */}
          {product.customizable ? (
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  const next = !showPersonalization;
                  setShowPersonalization(next);
                  setPersonalization((current) => ({ ...current, enabled: next }));
                  setError("");
                }}
                className="font-poppins inline-flex w-fit items-center gap-2 rounded-full border border-brand-ink/20 bg-brand-paper px-5 py-2.5 text-[11.5px] font-bold uppercase tracking-[0.16em] text-brand-ink transition-colors duration-200 ease-out hover:border-brand-ink/50"
              >
                <Pencil className="h-3.5 w-3.5" strokeWidth={1.8} />
                {showPersonalization ? "Sem personalização" : "Personalize"}
              </button>
              {showPersonalization ? (
                <div className="grid gap-2 sm:grid-cols-[1fr_120px]">
                  <input
                    type="text"
                    value={personalization.name ?? ""}
                    onChange={(event) =>
                      setPersonalization((current) => ({ ...current, name: event.target.value, enabled: true }))
                    }
                    placeholder="Nome nas costas"
                    className="font-poppins h-12 rounded-lg border border-brand-ink/20 bg-brand-paper px-3 text-[14px] text-brand-ink placeholder:text-brand-ink/40 focus:border-brand-ink focus:outline-none"
                    maxLength={14}
                  />
                  <input
                    type="text"
                    inputMode="numeric"
                    value={personalization.number ?? ""}
                    onChange={(event) =>
                      setPersonalization((current) => ({
                        ...current,
                        number: event.target.value.replace(/\D/g, "").slice(0, 2),
                        enabled: true
                      }))
                    }
                    placeholder="Nº"
                    className="font-poppins tabular h-12 rounded-lg border border-brand-ink/20 bg-brand-paper px-3 text-center text-[16px] font-bold text-brand-ink placeholder:text-brand-ink/40 focus:border-brand-ink focus:outline-none"
                    maxLength={2}
                  />
                </div>
              ) : null}
            </div>
          ) : null}

          {error ? (
            <p className="font-poppins rounded-lg border border-brand-ink/15 bg-brand-cream px-3 py-2 text-[12.5px] font-medium text-brand-ink sm:text-[13px]">
              {error}
            </p>
          ) : null}

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={buy}
              className="font-poppins inline-flex min-h-14 w-full items-center justify-center rounded-full bg-brand-ink px-6 text-[13px] font-bold uppercase tracking-[0.14em] text-brand-paper transition-colors duration-200 ease-out hover:bg-brand-inkSoft sm:text-[14px]"
            >
              Adicionar ao carrinho
            </button>
            <button
              type="button"
              onClick={() => setFavorited((value) => !value)}
              aria-pressed={favorited}
              className="font-poppins inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-brand-ink/20 bg-brand-paper px-6 text-[12.5px] font-bold uppercase tracking-[0.14em] text-brand-ink transition-colors duration-200 ease-out hover:border-brand-ink/50 sm:text-[13px]"
            >
              {favorited ? "Salvo nos favoritos" : "Salvar como favorito"}
              <Heart
                className={`h-4 w-4 transition-colors duration-150 ease-out ${favorited ? "fill-brand-ink text-brand-ink" : "text-brand-ink/55"}`}
                strokeWidth={1.8}
              />
            </button>
          </div>

          {/* description */}
          <div className="border-t border-brand-ink/10 pt-5">
            <h2 className="font-poppins text-[13.5px] font-bold text-brand-ink sm:text-[14px]">Sobre essa camisa</h2>
            <p className="font-poppins pretty mt-2 text-[13px] leading-6 text-brand-ink/65">{product.description}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between gap-3">
          <h2 className="font-poppins text-[clamp(1.3rem,2.4vw,1.8rem)] font-bold tracking-tight text-brand-ink">
            Produtos relacionados
          </h2>
          <Link
            href={`/categoria/${product.category}`}
            className="font-poppins inline-flex items-center gap-1 text-[11.5px] font-bold uppercase tracking-[0.16em] text-brand-ink underline decoration-brand-ink/30 decoration-2 underline-offset-[6px] transition-colors duration-150 ease-out hover:decoration-brand-ink sm:text-[12px]"
          >
            Ver categoria
            <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.8} />
          </Link>
        </div>
        <ProductGrid products={related} />
      </section>

      <section
        id="tabela-medidas"
        className="grid gap-6 rounded-2xl bg-brand-paper p-5 ring-1 ring-brand-ink/[0.06] sm:p-8 lg:grid-cols-[0.65fr_1.35fr]"
      >
        <div>
          <p className="font-lato text-[10px] font-bold uppercase tracking-[0.28em] text-brand-ink/55">
            Guia
          </p>
          <h2 className="font-bebas mt-2 text-[clamp(2rem,3.4vw,2.6rem)] uppercase leading-[0.95] tracking-[0.005em] text-brand-ink">
            Tabela de medidas
          </h2>
          <p className="font-poppins mt-3 text-[13px] leading-[1.55] text-brand-ink/65">
            Medidas em centímetros (peso em kg) — corte unissex torcedor.
            Se ficar entre dois tamanhos, escolha o maior para um caimento mais confortável.
          </p>
          <p className="font-poppins mt-3 text-[11.5px] leading-[1.55] text-brand-ink/50">
            Comprimento medido do ombro até a barra · Largura medida de uma axila à outra.
            Variação de ±1 cm é normal entre peças.
          </p>
        </div>
        <SizeChartTable />
      </section>
    </div>
  );
}
