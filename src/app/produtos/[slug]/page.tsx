import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductDetails } from "@/components/products/ProductDetails";
import { categories } from "@/lib/catalog";
import { getProductBySlug, getRelatedProducts, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images
    }
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = categories.find((item) => item.slug === product.category);

  return (
    <div className="container-page py-8">
      <Breadcrumbs
        items={[
          { label: category?.label || product.category, href: `/categoria/${product.category}` },
          { label: product.name }
        ]}
      />
      <ProductDetails product={product} related={getRelatedProducts(product)} />
    </div>
  );
}
