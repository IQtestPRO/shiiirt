"use client";

import Link from "next/link";
import { Heart, Ruler, Truck } from "lucide-react";
import { useState } from "react";
import { PersonalizationSelector } from "@/components/PersonalizationSelector";
import { PriceBlock } from "@/components/PriceBlock";
import { SizeSelector } from "@/components/SizeSelector";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductGrid } from "@/components/products/ProductGrid";
import { useCartStore } from "@/store/cart-store";
import type { Personalization, Product } from "@/types/product";

export function ProductDetails({ product, related }: { product: Product; related: Product[] }) {
  const addItem = useCartStore((state) => state.addItem);
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [personalization, setPersonalization] = useState<Personalization>({ enabled: false });
  const [error, setError] = useState("");

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
    addItem(product, size, personalization, quantity);
  }

  return (
    <div className="space-y-10">
      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <ProductGallery product={product} />
        <div className="rounded-lg bg-white p-5 shadow-card ring-1 ring-slate-200/75 sm:p-7">
          <div className="flex flex-wrap items-center gap-2">
            {product.discount > 0 ? (
              <span className="rounded-full bg-brand-ink px-2.5 py-1 text-xs font-extrabold text-white">{product.discount}% OFF</span>
            ) : null}
            {product.freeShipping ? (
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-extrabold text-brand-green ring-1 ring-emerald-100">Frete grátis</span>
            ) : null}
            {product.readyToShip ? (
              <span className="rounded-full bg-brand-yellow px-2.5 py-1 text-xs font-extrabold text-brand-ink">Pronta entrega</span>
            ) : null}
          </div>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl">{product.name}</h1>
          <p className="mt-2 text-sm font-semibold text-slate-500">
            {product.club} · {product.league} · {product.gender}
          </p>
          <p className="mt-5 text-base leading-7 text-slate-600">{product.description}</p>
          <div className="mt-6">
            <PriceBlock oldPrice={product.oldPrice} price={product.price} installments={product.installments} />
          </div>
          <div className="mt-6 space-y-5">
            <SizeSelector sizes={product.sizes} value={size} onChange={(value) => {
              setSize(value);
              setError("");
            }} />
            <PersonalizationSelector
              customizable={product.customizable}
              value={personalization}
              onChange={(value) => {
                setPersonalization(value);
                setError("");
              }}
            />
            <label className="block max-w-[140px] text-sm font-bold text-slate-700">
              Quantidade
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(event) => setQuantity(Math.max(1, Number(event.target.value) || 1))}
                className="mt-1 h-11 w-full rounded-md border border-slate-200 px-3 outline-none focus:border-brand-blue"
              />
            </label>
            {error ? <p className="rounded-md bg-red-50 p-3 text-sm font-bold text-red-700">{error}</p> : null}
            <button
              type="button"
              onClick={buy}
              className="min-h-12 w-full rounded-md bg-brand-blue px-5 text-sm font-extrabold text-white transition hover:bg-brand-blueDark"
            >
              Comprar
            </button>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { icon: Truck, title: "Frete", text: "Confirmado no WhatsApp" },
              { icon: Ruler, title: "Medidas", text: "P ao 4XL conforme modelo" },
              { icon: Heart, title: "Acabamento", text: "Tecido leve torcedor" }
            ].map((item) => (
              <div key={item.title} className="rounded-md bg-brand-surface p-3">
                <item.icon className="h-5 w-5 text-brand-blue" aria-hidden="true" />
                <strong className="mt-2 block text-sm text-brand-ink">{item.title}</strong>
                <span className="text-xs font-semibold text-slate-600">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-5 rounded-lg bg-white p-5 shadow-card ring-1 ring-slate-200/75 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-extrabold text-brand-ink">Guia rápido de medidas</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            As medidas podem variar conforme fabricante e lote. Para operação real, substitua esta tabela por medidas oficiais do fornecedor.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[420px] text-left text-sm">
            <thead className="bg-brand-surface text-brand-ink">
              <tr>
                <th className="p-3">Tamanho</th>
                <th className="p-3">Altura</th>
                <th className="p-3">Largura</th>
                <th className="p-3">Indicação</th>
              </tr>
            </thead>
            <tbody>
              {["P", "M", "G", "GG", "XG"].map((label, index) => (
                <tr key={label} className="border-b border-slate-100">
                  <td className="p-3 font-extrabold">{label}</td>
                  <td className="p-3">{68 + index * 2} cm</td>
                  <td className="p-3">{50 + index * 3} cm</td>
                  <td className="p-3">Torcedor adulto</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand-green">Continue olhando</p>
            <h2 className="text-2xl font-extrabold text-brand-ink">Produtos relacionados</h2>
          </div>
          <Link href={`/categoria/${product.category}`} className="text-sm font-extrabold text-brand-blue hover:underline">
            Ver categoria
          </Link>
        </div>
        <ProductGrid products={related} />
      </section>
    </div>
  );
}
