---
name: visual-hierarchy
description: Use esta skill para guiar o olhar para a informação certa na ordem certa, reduzindo esforço cognitivo e aumentando ação. Aplicar em página poluída, muitos ctas competindo, usuários não chegam ao formulário, baixa compreensão da oferta.
---

# Visual Hierarchy

## Objetivo
Guiar o olhar para a informação certa na ordem certa, reduzindo esforço cognitivo e aumentando ação.

## Quando usar
- Página poluída
- Muitos CTAs competindo
- Usuários não chegam ao formulário
- Baixa compreensão da oferta

## Como aplicar
1. Definir prioridade de informação.
2. Criar escala tipográfica.
3. Usar contraste com parcimônia.
4. Agrupar por proximidade.
5. Reduzir elementos competidores.
6. Validar em mobile.

## Checklist de implementação
- [ ] Um H1 dominante
- [ ] CTA primário visualmente claro
- [ ] Espaçamento consistente
- [ ] Cards sem excesso de texto
- [ ] Contraste AA
- [ ] Hierarquia preservada em mobile

## Automação possível
Lint visual com tokens, varredura de classes Tailwind, detecção de múltiplos CTAs primários e screenshots comparativos.

## Inputs necessários
- Mapa de seções
- Design tokens
- Conteúdo
- Objetivo da página

## Outputs esperados
- Sistema de hierarquia
- Regras de tokens
- Correções UI
- Checklist visual

## Métricas impactadas
- CTA_click_rate
- scroll_depth
- time_on_page
- task_success_rate

## Exemplos práticos
- SaaS B2B: Dashboard mockup maior que bullets secundários.
- E-commerce: Preço e botão de compra dominam buy box.
- Infoproduto/curso online: Oferta, data e inscrição aparecem antes de longas biografias.

## Prompts auxiliares
- Audite a hierarquia visual desta página e liste o que compete com o CTA.
- Crie tokens de tipografia e espaçamento para esta landing page.

## Assets recomendados
- Mapa de atenção
- Sistema de tokens
- Wireframe anotado

## Fontes e referências
- [NN/g usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) - Usability heuristics and interface diagnostics
- [Tailwind responsive design](https://tailwindcss.com/docs/breakpoints) - Mobile-first responsive component implementation
- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/) - Accessibility success criteria and conformance
