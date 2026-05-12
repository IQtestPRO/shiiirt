---
name: pricing-page-optimization
description: Use esta skill para reduzir indecisão e comunicar valor, diferenças entre planos, risco e caminho de compra ou contato. Aplicar em baixa conversão no pricing, muitas dúvidas sobre planos, ciclo comercial lento, usuários escolhem plano errado.
---

# Pricing Page Optimization

## Objetivo
Reduzir indecisão e comunicar valor, diferenças entre planos, risco e caminho de compra ou contato.

## Quando usar
- Baixa conversão no pricing
- Muitas dúvidas sobre planos
- Ciclo comercial lento
- Usuários escolhem plano errado

## Como aplicar
1. Definir jobs por plano.
2. Destacar plano recomendado.
3. Mostrar valor antes de preço.
4. Comparar limites com clareza.
5. Adicionar FAQ e prova.
6. Rastrear cliques por plano.

## Checklist de implementação
- [ ] Planos nomeados por perfil
- [ ] Preço claro
- [ ] CTA por plano
- [ ] Tabela comparativa
- [ ] FAQ de cobrança
- [ ] Garantia ou trial
- [ ] Evento select_plan

## Automação possível
Gerar tabela de pricing a partir de JSON, validar paridade de recursos e criar eventos por plano.

## Inputs necessários
- Planos
- Preços
- Recursos
- Segmentos
- Política de trial
- Objeções

## Outputs esperados
- Pricing table
- FAQ
- Comparativo
- Eventos
- Variações de preço

## Métricas impactadas
- pricing_CTA_click_rate
- trial_start_rate
- plan_mix
- ARPU
- sales_contact_rate

## Exemplos práticos
- SaaS B2B: Plano Pro destacado para times de 5 a 20 pessoas.
- E-commerce: Bundles com economia real e assinatura opcional.
- Infoproduto/curso online: Pagamento à vista, parcelado e bônus por lote.

## Prompts auxiliares
- Reestruture esta página de pricing para reduzir indecisão por segmento.
- Crie uma matriz de planos com CTAs e eventos.

## Assets recomendados
- Tabela de planos
- Badge recomendado
- FAQ de cobrança

## Fontes e referências
- [Stripe Checkout documentation](https://docs.stripe.com/payments/checkout) - Checkout patterns and low-friction payment UX
- [CXL high converting landing page](https://cxl.com/blog/how-to-build-a-high-converting-landing-page/) - Landing page structure, trust and persuasion questions
- [Google Analytics recommended events](https://support.google.com/analytics/answer/9267735) - GA4 events such as generate_lead, purchase, search and ecommerce events
