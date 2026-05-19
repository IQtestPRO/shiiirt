"use client";

import { useState } from "react";
import { X } from "lucide-react";
import type { Product } from "@/types/product";

export function ProductGallery({ product }: { product: Product }) {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const images = product.images.length > 0 ? product.images : ["/assets/products/placeholder.png"];
  const [active, setActive] = useState(images[0]);

  const single = images.length === 1;
  const pair = images.length === 2;

  return (
    <>
      {single ? (
        <button
          type="button"
          onClick={() => setLightbox(images[0])}
          aria-label="Ampliar imagem"
          className="group relative block aspect-square w-full overflow-hidden rounded-2xl bg-[#f6f4ef] ring-1 ring-black/[0.06] transition-shadow duration-200 ease-out hover:shadow-[0_18px_38px_-22px_rgba(11,9,7,0.22)]"
        >
          <img
            src={images[0]}
            alt={product.name}
            loading="eager"
            className="absolute inset-0 h-full w-full object-contain p-6 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.03] sm:p-10"
          />
        </button>
      ) : pair ? (
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setLightbox(image)}
              aria-label={`Ampliar imagem ${index + 1}`}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-[#f6f4ef] ring-1 ring-black/[0.06] transition-shadow duration-200 ease-out hover:shadow-[0_14px_32px_-18px_rgba(11,9,7,0.22)]"
            >
              <img
                src={image}
                alt={`${product.name} — imagem ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
                className="absolute inset-0 h-full w-full object-contain p-4 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04] sm:p-6"
              />
            </button>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => setLightbox(active)}
            aria-label="Ampliar imagem principal"
            className="group relative aspect-square overflow-hidden rounded-2xl bg-[#f6f4ef] ring-1 ring-black/[0.06] transition-shadow duration-200 ease-out hover:shadow-[0_18px_38px_-22px_rgba(11,9,7,0.22)]"
          >
            <img
              src={active}
              alt={product.name}
              loading="eager"
              className="absolute inset-0 h-full w-full object-contain p-6 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.03] sm:p-10"
            />
          </button>
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {images.map((image, index) => {
              const isActive = image === active;
              return (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onMouseEnter={() => setActive(image)}
                  onFocus={() => setActive(image)}
                  onClick={() => setActive(image)}
                  aria-label={`Selecionar imagem ${index + 1}`}
                  aria-pressed={isActive}
                  className={`relative aspect-square overflow-hidden rounded-lg bg-[#f6f4ef] transition-[box-shadow,outline-color] duration-150 ease-out ${
                    isActive
                      ? "ring-[1.5px] ring-brand-ink"
                      : "ring-1 ring-black/[0.06] hover:ring-black/20"
                  }`}
                >
                  <img
                    src={image}
                    alt=""
                    loading="lazy"
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-contain p-2"
                  />
                </button>
              );
            })}
          </div>
        </div>
      )}

      {lightbox ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-ink/85 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Fechar imagem"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-brand-paper/10 text-brand-paper ring-1 ring-brand-paper/20 backdrop-blur transition-colors duration-150 ease-out hover:bg-brand-paper/20"
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>
          <img
            src={lightbox}
            alt={product.name}
            className="max-h-[90vh] max-w-[90vw] rounded-xl bg-[#f6f4ef] object-contain p-6"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </>
  );
}
