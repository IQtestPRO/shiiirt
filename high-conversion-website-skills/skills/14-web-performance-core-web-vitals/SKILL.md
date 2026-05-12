---
name: web-performance-core-web-vitals
description: Use esta skill para melhorar velocidade percebida, responsividade e estabilidade visual para apoiar seo, ux e conversão. Aplicar em lcp alto, inp ruim, cls perceptível, páginas com imagens pesadas, campanhas pagas caras.
---

# Web Performance and Core Web Vitals

## Objetivo
Melhorar velocidade percebida, responsividade e estabilidade visual para apoiar SEO, UX e conversão.

## Quando usar
- LCP alto
- INP ruim
- CLS perceptível
- Páginas com imagens pesadas
- Campanhas pagas caras

## Como aplicar
1. Medir lab e campo.
2. Identificar LCP element.
3. Otimizar imagem e fonte crítica.
4. Reduzir JS e terceiros.
5. Reservar espaço de layout.
6. Monitorar regressões.

## Checklist de implementação
- [ ] LCP <= 2.5s p75
- [ ] INP <= 200ms p75
- [ ] CLS <= 0.1 p75
- [ ] Hero otimizado
- [ ] Imagens WebP/AVIF
- [ ] Scripts deferidos
- [ ] RUM ativo

## Automação possível
Rodar Lighthouse, PageSpeed, Vercel Speed Insights, gerar relatório de assets e bloquear regressões em CI.

## Inputs necessários
- URL
- Build
- Lista de assets
- Scripts terceiros
- Dados RUM

## Outputs esperados
- Relatório CWV
- Lista de gargalos
- Plano técnico
- Budget de performance

## Métricas impactadas
- LCP
- INP
- CLS
- TTFB
- conversion_rate
- bounce_rate

## Exemplos práticos
- SaaS B2B: Trocar vídeo hero por poster otimizado e carregar demo depois.
- E-commerce: Servir imagens PDP em WebP com dimensões explícitas.
- Infoproduto/curso online: Remover scripts de tracking duplicados e lazy load de embeds.

## Prompts auxiliares
- Audite esta página para Core Web Vitals e priorize correções por impacto.
- Crie um performance budget para uma landing page em Next.js.

## Assets recomendados
- Relatório Lighthouse
- Mapa de assets
- Tabela de scripts terceiros

## Fontes e referências
- [web.dev Web Vitals](https://web.dev/articles/vitals) - Core Web Vitals, LCP, INP, CLS, performance measurement
- [web.dev Core Web Vitals thresholds](https://web.dev/articles/defining-core-web-vitals-thresholds) - Performance targets and measurement thresholds
- [Next.js Image component](https://nextjs.org/docs/pages/api-reference/components/image) - Image optimization in Next.js
- [Vercel Speed Insights](https://vercel.com/docs/speed-insights) - Core Web Vitals monitoring and production performance
