---
name: mobile-first-ux
description: Use esta skill para projetar fluxos que funcionam primeiro em telas pequenas, toque, conexão variável e atenção fragmentada. Aplicar em maioria do tráfego mobile, hero corta conteúdo, botões pequenos, checkout difícil no celular, baixa conversão mobile.
---

# Mobile-First UX

## Objetivo
Projetar fluxos que funcionam primeiro em telas pequenas, toque, conexão variável e atenção fragmentada.

## Quando usar
- Maioria do tráfego mobile
- Hero corta conteúdo
- Botões pequenos
- Checkout difícil no celular
- Baixa conversão mobile

## Como aplicar
1. Começar pelo viewport 360-390px.
2. Priorizar conteúdo decisivo.
3. Usar targets de toque grandes.
4. Reduzir imagens decorativas.
5. Criar CTA sticky quando útil.
6. Testar teclado e formulários.

## Checklist de implementação
- [ ] Sem scroll horizontal
- [ ] Alvos 44px+
- [ ] Texto 16px+
- [ ] CTA visível
- [ ] Imagens informativas
- [ ] Inputs corretos
- [ ] Performance em 4G

## Automação possível
Rodar Playwright em breakpoints, detectar overflow, medir LCP mobile, validar tamanhos de toque e screenshots.

## Inputs necessários
- Páginas críticas
- Breakpoints
- Dados mobile
- Componentes

## Outputs esperados
- Relatório mobile
- Correções responsivas
- Screenshots
- Checklist de toque

## Métricas impactadas
- mobile_conversion_rate
- mobile_CTA_click_rate
- LCP_mobile
- form_submit_rate
- checkout_completion_rate

## Exemplos práticos
- SaaS B2B: CTA sticky de demo após hero e screenshot recortado para celular.
- E-commerce: Buy box acima de descrições longas e seleção de variante grande.
- Infoproduto/curso online: Inscrição em uma coluna com resumo fixo do bônus.

## Prompts auxiliares
- Audite esta página para mobile-first UX e liste ajustes por breakpoint.
- Gere uma versão mobile da hierarquia desta landing page.

## Assets recomendados
- Screenshots 390px
- CTA sticky
- Mockups mobile

## Fontes e referências
- [Tailwind responsive design](https://tailwindcss.com/docs/breakpoints) - Mobile-first responsive component implementation
- [NN/g mobile images](https://www.nngroup.com/videos/mobile-images/) - Mobile image value, load and information density
- [web.dev Web Vitals](https://web.dev/articles/vitals) - Core Web Vitals, LCP, INP, CLS, performance measurement
- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/) - Accessibility success criteria and conformance
