import { describe, expect, it } from "vitest";
import { buildWhatsAppMessage, buildWhatsAppUrl } from "./whatsapp";
import { products } from "./products";
import type { CartItem } from "@/types/product";

describe("whatsapp checkout", () => {
  it("builds an encoded checkout message with product details", () => {
    const item: CartItem = {
      lineId: "line-1",
      product: products[0],
      size: "M",
      personalization: { enabled: true, name: "ARTHUR", number: "10" },
      quantity: 2
    };

    const message = buildWhatsAppMessage([item]);
    expect(message).toContain("Olá, quero finalizar meu pedido na Mundo das Importadas:");
    expect(message).toContain("- Tamanho: M");
    expect(message).toContain("ARTHUR");
    expect(message).toContain("Total:");

    const url = buildWhatsAppUrl([item], "55 (11) 99999-0000");
    expect(url).toContain("https://wa.me/5511999990000?text=");
    expect(decodeURIComponent(url)).toContain("Produto 1:");
  });
});
