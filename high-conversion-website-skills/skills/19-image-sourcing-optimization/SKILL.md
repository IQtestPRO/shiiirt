---
name: image-sourcing-optimization
description: Use esta skill para selecionar, documentar e otimizar imagens que aumentam confiança sem criar risco legal ou prejudicar performance. Aplicar em hero precisa de imagem, produto precisa de mídia, uso de banco gratuito, página lenta por imagens.
---

# Image Sourcing and Optimization

## Objetivo
Selecionar, documentar e otimizar imagens que aumentam confiança sem criar risco legal ou prejudicar performance.

## Quando usar
- Hero precisa de imagem
- Produto precisa de mídia
- Uso de banco gratuito
- Página lenta por imagens

## Como aplicar
1. Definir função da imagem.
2. Buscar fontes permissivas.
3. Verificar licença e riscos de marca/pessoa.
4. Salvar metadados.
5. Recortar por breakpoint.
6. Converter para WebP/AVIF.
7. Criar alt text.

## Checklist de implementação
- [ ] Licença documentada
- [ ] Autor e URL salvos
- [ ] Sem marcas não autorizadas
- [ ] Sem pessoas em contexto sensível
- [ ] Dimensões corretas
- [ ] WebP/AVIF
- [ ] Alt text útil

## Automação possível
Usar Openverse/Pexels/Unsplash search, baixar candidatos aprovados, gerar manifesto, otimizar com Sharp/Squoosh e criar alt text.

## Inputs necessários
- Termos de busca
- Uso sugerido
- Nicho
- Restrições de marca
- Formato desejado

## Outputs esperados
- Manifesto de imagens
- Assets otimizados
- Prompts alternativos
- Alt texts
- Relatório de licença

## Métricas impactadas
- LCP
- conversion_rate
- engagement_rate
- legal_risk
- asset_weight

## Exemplos práticos
- SaaS B2B: Screenshot real do dashboard em vez de foto decorativa.
- E-commerce: Produto em fundo branco e lifestyle sem marcas concorrentes.
- Infoproduto/curso online: Imagem de ambiente de estudo com licença permissiva e sem endorsement falso.

## Prompts auxiliares
- Crie termos de busca e prompts seguros para imagens desta landing page.
- Audite este manifesto de imagens por licença, uso e performance.

## Assets recomendados
- Manifesto de fontes
- Prompts IA
- Planilha de direitos
- WebP/AVIF

## Fontes e referências
- [Unsplash License](https://unsplash.com/license) - Permissive commercial photo licensing checks
- [Pexels License](https://www.pexels.com/license/) - Permissive commercial photo and video licensing checks
- [Pixabay FAQ and license](https://pixabay.com/service/faq/) - Permissive media licensing checks and restrictions
- [Openverse API docs](https://docs.openverse.org/api/reference/made_with_ov.html) - Creative Commons and public domain asset discovery
- [Next.js Image component](https://nextjs.org/docs/pages/api-reference/components/image) - Image optimization in Next.js
