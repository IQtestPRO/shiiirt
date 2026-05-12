import type { Metadata } from "next";
import { ShopChrome } from "@/components/ShopChrome";
import { storeName } from "@/lib/catalog";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://central-da-tailandia.local"),
  title: {
    default: `${storeName} | Camisas importadas e personalizadas`,
    template: `%s | ${storeName}`
  },
  description: "Loja brasileira de camisas esportivas importadas, prontas para envio e finalizadas pelo WhatsApp.",
  openGraph: {
    title: storeName,
    description: "Camisas importadas, personalizadas e prontas para jogo.",
    type: "website",
    locale: "pt_BR"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body>
        <ShopChrome>{children}</ShopChrome>
      </body>
    </html>
  );
}
