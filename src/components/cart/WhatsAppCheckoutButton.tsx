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
      className="font-poppins inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-ink px-4 text-[13px] font-extrabold uppercase tracking-[0.14em] text-brand-paper transition-colors duration-200 ease-out hover:bg-brand-inkSoft aria-disabled:pointer-events-none aria-disabled:opacity-45"
    >
      <MessageCircle className="h-5 w-5 text-brand-yellow" aria-hidden="true" strokeWidth={1.8} />
      Finalizar pelo WhatsApp
    </a>
  );
}
