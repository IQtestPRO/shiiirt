import { CategoryBlocks } from "@/components/home/CategoryBlocks";
import { CategoryStrip } from "@/components/home/CategoryStrip";
import { FAQ } from "@/components/home/FAQ";
import { HeroBanner } from "@/components/home/HeroBanner";
import { HowToBuyBento } from "@/components/home/HowToBuyBento";
import { LogoCloud } from "@/components/home/LogoCloud";
import { LookbookBanner } from "@/components/home/LookbookBanner";
import { Newsletter } from "@/components/home/Newsletter";
import { ProductRail } from "@/components/home/ProductRail";
import { ProductSection } from "@/components/home/ProductSection";
import { Reviews } from "@/components/home/Reviews";
import { products } from "@/lib/products";

export default function HomePage() {
  const ready = products.filter((product) => product.readyToShip).slice(0, 10);
  const bestSellers = products.filter((product) => product.discount > 0).slice(0, 8);
  const feminine = products.filter((product) => product.gender === "feminino").slice(0, 8);
  const customizable = products.filter((product) => product.customizable).slice(0, 8);

  return (
    <>
      <HeroBanner />
      <ProductRail
        title="Pronta entrega no Brasil"
        eyebrow="Estoque · Envio em 24h"
        products={ready}
        href="/categoria/pronta-entrega"
      />
      <CategoryBlocks />
      <ProductSection
        title="Mais vendidos da semana"
        eyebrow="Curadoria · Em alta"
        products={bestSellers}
        href="/categoria/promocoes"
      />
      <LogoCloud />
      <LookbookBanner />
      <ProductSection
        title="Femininas selecionadas"
        eyebrow="Modelagem · Feminina"
        products={feminine}
        href="/categoria/femininas"
      />
      <CategoryStrip />
      <ProductSection
        title="Personalize com nome e número"
        eyebrow="Sob medida · Personalizável"
        products={customizable}
        href="/categoria/personalizaveis"
      />
      <Reviews />
      <HowToBuyBento />
      <FAQ />
      <Newsletter />
    </>
  );
}
