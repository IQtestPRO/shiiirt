# Otimização automática de assets

## Objetivo
Executar otimização automática de assets de forma repetível, rastreável e acionável.

## Pré-requisitos
- URL ou projeto local.
- Objetivo de conversão.
- Acesso a código, analytics ou export de dados quando necessário.
- Ambiente para salvar relatórios.

## Passos
1. Inventariar imagens.
2. Redimensionar por breakpoint.
3. Converter para WebP/AVIF.
4. Gerar blur/poster se necessário.
5. Criar alt text.
6. Atualizar manifesto.

## Saídas
- Relatório Markdown.
- Lista de tarefas priorizadas.
- Evidências com links, screenshots ou métricas.
- Critério de pronto por tarefa.

## Automação com Codex
Peça ao agente: "Execute otimização automática de assets neste projeto, salve relatório em /reports e aplique correções de baixo risco automaticamente".
