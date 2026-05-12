# Relatório de análise e catálogo

## Fonte de referência

Foi analisado o site público `https://www.territoriodascamisas.com.br/` como benchmark de navegação, taxonomia e fluxo visual de e-commerce brasileiro de camisas de futebol.

## O que foi mapeado

- Header com topbar, atendimento, redes, busca, conta, carrinho e menu principal.
- Taxonomia por disponibilidade, clubes nacionais, ligas europeias, seleções, resto do mundo, femininas e infantil.
- Listagens com filtros por categoria, tamanho, preço, gênero, pronta entrega, personalização e ordenação.
- Cards com imagem, desconto, frete grátis, preço antigo, preço atual, parcelamento, tamanhos, personalização, compra e quick view.
- Página de produto com galeria, breadcrumb, preço, variações, personalização, tabela de medidas, informações de envio e relacionados.
- Carrinho global com item, imagem, tamanho, personalização, quantidade, subtotal e finalização por WhatsApp.
- Login como interface visual, sem autenticação real nesta etapa.
- Banner de cookies simples.

## Decisão ética e legal

Por solicitação do usuário, o projeto passou a usar imagens públicas de produtos em caráter de protótipo local sem fins comerciais. Não foram copiados contatos, telefone, e-mail, redes sociais, slogan, identidade visual ou branding do site de referência.

As imagens importadas foram salvas localmente e rastreadas em `docs/asset-rights/asset-manifest.json` e `docs/asset-rights/source-log.csv` com status `local_noncommercial_prototype_only_user_assumed_risk`. A operação real deve validar licenciamento de clubes, seleções, marcas esportivas, ligas, patrocinadores, patches e direitos de imagem antes de vender itens oficiais ou réplicas.

## Catálogo local

O catálogo está em `data/products.json` e contém 24 produtos com:

- `id`
- `slug`
- `name`
- `category`
- `subcategory`
- `club`
- `league`
- `gender`
- `oldPrice`
- `price`
- `discount`
- `installments`
- `freeShipping`
- `sizes`
- `customizable`
- `readyToShip`
- `images`
- `description`
- `tags`
- `related`
- `colors`

22 dos 24 produtos usam imagens públicas importadas para `public/assets/products/`. Dois produtos permanecem com SVG local gerado por `/api/product-art/[slug]`: Birmingham, por ausência de fonte pública baixável sem bloqueio, e o produto autoral da Central da Tailândia.

Para repetir o processo:

```bash
npm run assets:import
```

## Asset Higgsfield e hero atual

Foi usado o Higgsfield CLI autenticado para gerar um banner hero original e genérico, sem logos, escudos, marcas protegidas ou texto:

- Arquivo genérico preservado: `public/assets/hero-central-da-tailandia-v2.jpg`
- Modo: `product-photoshoot create --mode hero_banner`
- Objetivo: banner de campanha para e-commerce brasileiro com camisas esportivas genéricas, azul CBF e detalhes amarelo/verde.

O PNG original foi comprimido para JPG por performance.

A home atual usa um novo hero com a camisa principal Brasil 2026:

- Arquivo final usado na home: `public/assets/hero-brasil-copa-2026-premium.png`
- Fonte da camisa: imagem pública de produto importada para `public/assets/products/ct-002/`
- Script reprodutível: `npm run assets:hero`

## Pendências recomendadas para operação real

- Substituir mock de estoque por banco de dados ou ERP.
- Validar licenciamento de marcas, clubes, seleções e fornecedores.
- Trocar contatos placeholders por canais oficiais da Central da Tailândia.
- Adicionar frete por CEP real.
- Criar política de troca, privacidade, cookies e termos.
- Adicionar imagens reais autorizadas dos produtos.
