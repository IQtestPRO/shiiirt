import { HeroBanner } from "@/components/home/HeroBanner";
import { ProductSection } from "@/components/home/ProductSection";
import { PromoBand } from "@/components/home/PromoBand";
import { TrustBadges } from "@/components/TrustBadges";
import { products } from "@/lib/products";

export default function HomePage() {
  const bestSellers = products.filter((product) => product.discount > 0).slice(0, 8);
  const ready = products.filter((product) => product.readyToShip).slice(0, 8);
  const feminine = products.filter((product) => product.gender === "feminino").slice(0, 8);
  const customizable = products.filter((product) => product.customizable).slice(0, 8);

  return (
    <>
      <HeroBanner />
      <TrustBadges />
      <ProductSection title="Mais vendidos da semana" eyebrow="Ofertas em destaque" products={bestSellers} href="/categoria/promocoes" />
      <PromoBand />
      <ProductSection title="Pronta entrega no Brasil" eyebrow="Envio rápido" products={ready} href="/categoria/pronta-entrega" />
      <ProductSection title="Femininas selecionadas" eyebrow="Modelagem feminina" products={feminine} href="/categoria/femininas" />
      <ProductSection title="Personalize com nome e número" eyebrow="Seu jeito de jogar" products={customizable} href="/categoria/personalizaveis" />
    </>
  );
}
