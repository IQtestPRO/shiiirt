# Mundo das Importadas

Loja online em Next.js para camisas esportivas importadas, personalizáveis e finalizadas pelo WhatsApp. A experiência foi inspirada em padrões de e-commerce brasileiro de camisas de futebol, com branding próprio e canais de atendimento próprios.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Zustand com persistência em `localStorage`
- Catálogo local em JSON
- Vitest para testes unitários
- Playwright para E2E desktop/mobile
- ESLint flat config

## Como instalar

```bash
npm install
```

No PowerShell deste Windows, se `npm` for bloqueado por política de execução, use:

```bash
npm.cmd install
```

## Como rodar

```bash
npm run dev
```

Ou:

```bash
npm.cmd run dev
```

Abra [http://127.0.0.1:3000](http://127.0.0.1:3000).

## WhatsApp

Crie um `.env.local` baseado em `.env.example`:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
NEXT_PUBLIC_STORE_NAME=Mundo das Importadas
```

Use apenas números com DDI e DDD. Se a variável não existir, o projeto usa o placeholder `5500000000000`.

O carrinho gera uma mensagem com produtos, tamanho, personalização, quantidade, valor e total, abrindo:

```text
https://wa.me/NUMERO_DA_LOJA?text=MENSAGEM_URL_ENCODED
```

## Catálogo

Edite `data/products.json`. Cada produto deve manter:

- `id`, `slug`, `name`
- `category`, `subcategory`, `club`, `league`, `gender`
- `oldPrice`, `price`, `discount`, `installments`
- `freeShipping`, `sizes`, `customizable`, `readyToShip`
- `images`, `description`, `tags`, `related`, `colors`

Categorias disponíveis: `pronta-entrega`, `brasileirao`, `europa`, `selecoes`, `resto-do-mundo`, `femininas`, `infantil`, `promocoes`, `personalizaveis`.

## Imagens

O catálogo agora aponta majoritariamente para assets locais em `public/assets/products/`, importados de páginas públicas de produto para uso em protótipo local sem fins comerciais.

Para repetir o import:

```bash
npm run assets:import
```

Arquivos de rastreabilidade:

- `scripts/import-public-product-assets.mjs`: mapa de URLs e importador.
- `docs/asset-rights/asset-manifest.json`: manifesto com fonte, hash e status de uso.
- `docs/asset-rights/source-log.csv`: log CSV das fontes.
- `data/image-sourcing.todo.json`: fila de pesquisa/validação.

Produtos sem imagem pública confiável continuam usando `/api/product-art/[slug]`, que cria SVGs locais a partir das cores do catálogo.

O hero atual destaca a camisa principal Brasil 2026 em uma composição premium gerada por canvas a partir da foto de produto importada:

```text
public/assets/hero-brasil-copa-2026-premium.png
```

Para recriar a composição:

```bash
npm run assets:hero
```

## Direção visual premium

A identidade atual está documentada em `docs/premium-redesign-report.md`.

Tokens principais:

- Azul CBF: `#0346A5`
- Azul noite: `#061B3A`
- Tinta premium: `#08162F`
- Amarelo seleção: `#F8D84E`
- Ouro discreto: `#CDA24A`
- Verde campo: `#14905D`
- Superfície: `#EEF2F6`

Regras rápidas:

- Use o componente `BrandMark` para aplicações da marca.
- Mantenha packshots em fundo branco/cinza claro e proporções consistentes.
- Não adicione setas/dots de carrossel sem interação real.
- Evite linguagem de protótipo em áreas públicas da loja.
- Botões e áreas tocáveis devem manter pelo menos 44px de altura.

## Testes e qualidade

```bash
npm run lint
npm run test
npm run build
npm run test:e2e
```

Resultado da última validação local:

- `npm.cmd run lint`: passou
- `npm.cmd run test`: passou
- `npm.cmd run build`: passou
- `npm.cmd run test:e2e`: passou em desktop e mobile

`npm install` reportou 2 vulnerabilidades moderadas transitivas. Não foi aplicado `npm audit fix --force` para evitar upgrades quebrando Next/Playwright; revise antes de produção.

## Deploy

Recomendado para Vercel:

1. Configure `NEXT_PUBLIC_WHATSAPP_NUMBER`.
2. Rode `npm run build` localmente.
3. Faça deploy do repositório.

Também funciona em qualquer host Node compatível com Next.js:

```bash
npm run build
npm run start
```

## Observação legal

As imagens importadas foram registradas como `local_noncommercial_prototype_only_user_assumed_risk`. Antes de vender produtos reais ou publicar comercialmente, valide direitos de uso de marcas, escudos, seleções, ligas, patrocinadores, patches, imagens e fornecedores.
