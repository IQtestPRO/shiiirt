"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { CartItem } from "@/types/product";

export function WhatsAppCheckoutButton({ items }: { items: CartItem[] }) {
  const disabled = items.length === 0;

  return (
    <a
      href={disabled ? undefined : buildWhatsAppUrl(items)}
      target="_blank"
      rel="noreferrer"
      aria-disabled={disabled}
      className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-brand-green px-4 text-sm font-extrabold text-white transition hover:bg-emerald-700 aria-disabled:pointer-events-none aria-disabled:opacity-45"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      Finalizar pelo WhatsApp
    </a>
  );
}
