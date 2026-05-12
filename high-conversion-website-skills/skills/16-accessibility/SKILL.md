---
name: accessibility
description: Use esta skill para garantir que pessoas e tecnologias assistivas consigam entender, navegar e converter sem barreiras. Aplicar em formulários críticos, botões sem label, contraste baixo, modais ou drawers, checkout e pricing.
---

# Accessibility for Conversion

## Objetivo
Garantir que pessoas e tecnologias assistivas consigam entender, navegar e converter sem barreiras.

## Quando usar
- Formulários críticos
- Botões sem label
- Contraste baixo
- Modais ou drawers
- Checkout e pricing

## Como aplicar
1. Auditar semântica.
2. Validar teclado.
3. Checar contraste.
4. Revisar labels e erros.
5. Testar leitores de tela em fluxos críticos.
6. Adicionar foco visível.

## Checklist de implementação
- [ ] Heading sequencial
- [ ] Labels visíveis
- [ ] Botões nomeados
- [ ] Focus visible
- [ ] Contraste AA
- [ ] Erro anunciado
- [ ] Modal com escape
- [ ] Alt text útil

## Automação possível
Rodar axe/Lighthouse, varrer aria-labels, testar teclado com Playwright e gerar checklist WCAG.

## Inputs necessários
- Páginas
- Componentes
- Fluxos
- Design tokens
- Formulários

## Outputs esperados
- Relatório a11y
- Correções de componentes
- Checklist WCAG
- Testes automatizados

## Métricas impactadas
- form_submit_rate
- checkout_completion_rate
- task_success_rate
- error_rate
- legal_risk

## Exemplos práticos
- SaaS B2B: Modal de demo com foco preso e labels reais.
- E-commerce: Seleção de tamanho com aria-pressed e erro anunciado.
- Infoproduto/curso online: Vídeos com legenda e formulário navegável por teclado.

## Prompts auxiliares
- Audite estes componentes contra WCAG 2.2 AA e gere correções.
- Crie um checklist de acessibilidade para checkout.

## Assets recomendados
- Focus ring tokens
- Ícones com texto
- Tabela de contraste

## Fontes e referências
- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/) - Accessibility success criteria and conformance
- [NN/g usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) - Usability heuristics and interface diagnostics
- [NN/g UX research methods](https://www.nngroup.com/articles/which-ux-research-methods/) - Research method selection and UX evidence gathering
