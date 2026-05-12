# Auditoria automática de performance

## Objetivo
Executar auditoria automática de performance de forma repetível, rastreável e acionável.

## Pré-requisitos
- URL ou projeto local.
- Objetivo de conversão.
- Acesso a código, analytics ou export de dados quando necessário.
- Ambiente para salvar relatórios.

## Passos
1. Rodar Lighthouse/PageSpeed.
2. Identificar LCP element.
3. Listar scripts terceiros.
4. Auditar imagens.
5. Gerar performance budget.
6. Criar tarefas por impacto.

## Saídas
- Relatório Markdown.
- Lista de tarefas priorizadas.
- Evidências com links, screenshots ou métricas.
- Critério de pronto por tarefa.

## Automação com Codex
Peça ao agente: "Execute auditoria automática de performance neste projeto, salve relatório em /reports e aplique correções de baixo risco automaticamente".
