---
name: ab-testing-experimentation
description: Use esta skill para testar mudanças com método, métrica, amostra e decisão clara, evitando decisões por palpite. Aplicar em tráfego suficiente, mudança de alto impacto, hipóteses concorrentes, necessidade de aprender sem risco total.
---

# A/B Testing and Experimentation

## Objetivo
Testar mudanças com método, métrica, amostra e decisão clara, evitando decisões por palpite.

## Quando usar
- Tráfego suficiente
- Mudança de alto impacto
- Hipóteses concorrentes
- Necessidade de aprender sem risco total

## Como aplicar
1. Definir hipótese.
2. Escolher métrica primária.
3. Calcular amostra/MDE.
4. Criar variações.
5. QA técnico.
6. Rodar até critério definido.
7. Documentar decisão.

## Checklist de implementação
- [ ] Hipótese falsificável
- [ ] Métrica primária
- [ ] Guardrails
- [ ] Amostra estimada
- [ ] Segmentação correta
- [ ] Sem mudanças simultâneas
- [ ] Resultado documentado

## Automação possível
Criar specs de experimento, gerar feature flags, configurar eventos e produzir relatório de decisão.

## Inputs necessários
- Hipótese
- Baseline
- MDE
- Tráfego
- Métrica
- Ferramenta

## Outputs esperados
- Experiment brief
- Variações
- Configuração
- QA checklist
- Relatório

## Métricas impactadas
- conversion_rate
- uplift
- statistical_power
- revenue_per_visitor
- guardrail_metrics

## Exemplos práticos
- SaaS B2B: Testar hero orientado a dor versus resultado.
- E-commerce: Testar CTA sticky no PDP mobile.
- Infoproduto/curso online: Testar prova social no topo versus depois da oferta.

## Prompts auxiliares
- Crie um experimento A/B com hipótese, métrica, amostra e QA.
- Transforme esta ideia CRO em spec de GrowthBook/Optimizely.

## Assets recomendados
- Experiment brief
- Feature flag plan
- Decision log

## Fontes e referências
- [VWO A/B testing guide](https://vwo.com/ab-testing/) - Experimentation workflow and A/B testing concepts
- [Optimizely experiment setup](https://support.optimizely.com/hc/en-us/articles/4410289104013-Steps-to-create-an-experiment) - Experiment setup, targeting, metrics and sample size planning
- [GrowthBook documentation](https://docs.growthbook.io/) - Open source feature flags and experimentation
- [Google Analytics recommended events](https://support.google.com/analytics/answer/9267735) - GA4 events such as generate_lead, purchase, search and ecommerce events
