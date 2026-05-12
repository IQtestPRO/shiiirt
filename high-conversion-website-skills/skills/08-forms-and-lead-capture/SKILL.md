---
name: forms-and-lead-capture
description: Use esta skill para reduzir fricção de formulários e aumentar leads qualificados com campos, labels e feedback corretos. Aplicar em muitos inícios sem envio, formulários longos, leads ruins, erros frequentes no mobile.
---

# Forms and Lead Capture

## Objetivo
Reduzir fricção de formulários e aumentar leads qualificados com campos, labels e feedback corretos.

## Quando usar
- Muitos inícios sem envio
- Formulários longos
- Leads ruins
- Erros frequentes no mobile

## Como aplicar
1. Definir qualificação mínima.
2. Remover campos não essenciais.
3. Usar labels persistentes.
4. Adicionar validação útil.
5. Testar uma ou duas etapas.
6. Medir start, error e submit.

## Checklist de implementação
- [ ] Campos mínimos
- [ ] Labels visíveis
- [ ] Autocomplete correto
- [ ] Input types mobile
- [ ] Erros próximos ao campo
- [ ] Privacidade clara
- [ ] Evento generate_lead

## Automação possível
Criar schema de formulário, gerar componente acessível, instrumentar GA4 generate_lead e validar erros.

## Inputs necessários
- Campos necessários
- Destino do lead
- CRM
- Política de privacidade
- Critérios de qualificação

## Outputs esperados
- Formulário
- Validação
- Eventos
- Mensagem de sucesso
- Integração CRM

## Métricas impactadas
- form_start_rate
- form_submit_rate
- field_error_rate
- lead_quality
- cost_per_lead

## Exemplos práticos
- SaaS B2B: Nome, email corporativo e tamanho da empresa em formulário de demo.
- E-commerce: Captura de email para cupom com consentimento claro.
- Infoproduto/curso online: Nome, email e WhatsApp para aula gratuita em 2 etapas.

## Prompts auxiliares
- Reduza este formulário para o mínimo necessário sem perder qualificação.
- Gere um componente de lead capture acessível com validação e evento GA4.

## Assets recomendados
- Ícones de privacidade
- Selo sem spam
- Mensagem de sucesso

## Fontes e referências
- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/) - Accessibility success criteria and conformance
- [Google Analytics recommended events](https://support.google.com/analytics/answer/9267735) - GA4 events such as generate_lead, purchase, search and ecommerce events
- [NN/g usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) - Usability heuristics and interface diagnostics
