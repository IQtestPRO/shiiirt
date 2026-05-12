---
name: analytics-event-tracking
description: Use esta skill para instrumentar eventos que explicam o funil de conversão, permitindo decisões por dados e testes confiáveis. Aplicar em não há dados de funil, eventos duplicados, google ads sem conversões, testes a/b sem métrica confiável.
---

# Analytics and Event Tracking

## Objetivo
Instrumentar eventos que explicam o funil de conversão, permitindo decisões por dados e testes confiáveis.

## Quando usar
- Não há dados de funil
- Eventos duplicados
- Google Ads sem conversões
- Testes A/B sem métrica confiável

## Como aplicar
1. Definir taxonomia de eventos.
2. Mapear funil por página.
3. Usar eventos GA4 recomendados.
4. Adicionar parâmetros.
5. Validar em debug.
6. Criar dashboard.

## Checklist de implementação
- [ ] Evento page_view correto
- [ ] CTA clicks
- [ ] form_start
- [ ] generate_lead
- [ ] add_to_cart
- [ ] begin_checkout
- [ ] purchase
- [ ] Consentimento e privacidade

## Automação possível
Gerar dataLayer map, wrappers TypeScript, testes de eventos e documentação de tracking.

## Inputs necessários
- Objetivos
- Páginas
- Eventos atuais
- Ferramentas
- Consentimento
- CRM

## Outputs esperados
- Plano de eventos
- Implementação
- Dashboard
- Validação
- Dicionário de dados

## Métricas impactadas
- event_coverage
- conversion_rate
- lead_quality
- ROAS
- experiment_reliability

## Exemplos práticos
- SaaS B2B: Track demo_cta_click, form_start, generate_lead e trial_start.
- E-commerce: Track view_item, add_to_cart, begin_checkout e purchase.
- Infoproduto/curso online: Track webinar_signup, video_start e purchase.

## Prompts auxiliares
- Crie uma taxonomia GA4 para este funil e gere código TypeScript.
- Audite se os eventos desta landing page medem o que importa.

## Assets recomendados
- Dicionário de eventos
- Diagrama de funil
- Dashboard

## Fontes e referências
- [Google Analytics recommended events](https://support.google.com/analytics/answer/9267735) - GA4 events such as generate_lead, purchase, search and ecommerce events
- [Google Ads conversion measurement](https://support.google.com/google-ads/answer/1722022) - Conversion tracking and ad optimization
- [Google Ads conversion measurement](https://support.google.com/google-ads/answer/1722022) - Conversion tracking and ad optimization
