import type { CartItem } from "@/types/product";
import { formatCurrency } from "./format";
import { storeName, whatsappNumber } from "./catalog";

export function getCartTotal(items: CartItem[]) {
  return items.reduce((total, item) => total + item.product.price * item.quantity, 0);
}

export function buildWhatsAppMessage(items: CartItem[]) {
  const lines = [`Olá, quero finalizar meu pedido na ${storeName}:`];

  items.forEach((item, index) => {
    lines.push(
      "",
      `Produto ${index + 1}:`,
      `- Nome: ${item.product.name}`,
      `- Tamanho: ${item.size}`,
      `- Personalização: ${formatPersonalization(item)}`,
      `- Quantidade: ${item.quantity}`,
      `- Valor: ${formatCurrency(item.product.price * item.quantity)}`
    );
  });

  lines.push(
    "",
    `Total: ${formatCurrency(getCartTotal(items))}`,
    "Meu nome:",
    "CEP:",
    "Observações:"
  );

  return lines.join("\n");
}

export function buildWhatsAppUrl(items: CartItem[], phone = whatsappNumber) {
  const sanitizedPhone = phone.replace(/\D/g, "");
  return `https://wa.me/${sanitizedPhone}?text=${encodeURIComponent(buildWhatsAppMessage(items))}`;
}

function formatPersonalization(item: CartItem) {
  if (!item.personalization.enabled) {
    return "Sem personalização";
  }

  return `Com personalização - Nome: ${item.personalization.name || "-"} / Número: ${
    item.personalization.number || "-"
  }`;
}
