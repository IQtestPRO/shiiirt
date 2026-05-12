"use client";

import { useState } from "react";
import type { Product } from "@/types/product";

export function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(product.images[0]);
  const images = product.images.length > 1 ? product.images : [product.images[0], product.images[0]];

  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-md bg-white p-3 shadow-card">
        <img src={active} alt={product.name} className="aspect-[4/5] w-full rounded-md bg-white object-contain" />
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setActive(image)}
            aria-label={`Ver imagem ${index + 1}`}
            className="h-20 w-20 shrink-0 rounded-md border border-slate-200 bg-white p-1 transition hover:border-brand-blue"
          >
            <img src={image} alt="" className="h-full w-full rounded object-contain" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}
