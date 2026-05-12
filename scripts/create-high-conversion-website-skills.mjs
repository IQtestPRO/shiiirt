import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("high-conversion-website-skills");

const sources = [
  { name: "web.dev Web Vitals", url: "https://web.dev/articles/vitals", use: "Core Web Vitals, LCP, INP, CLS, performance measurement" },
  { name: "web.dev Core Web Vitals thresholds", url: "https://web.dev/articles/defining-core-web-vitals-thresholds", use: "Performance targets and measurement thresholds" },
  { name: "W3C WCAG 2.2", url: "https://www.w3.org/TR/WCAG22/", use: "Accessibility success criteria and conformance" },
  { name: "Baymard Checkout Usability", url: "https://baymard.com/research/checkout-usability", use: "Checkout UX, abandonment reduction, ecommerce usability" },
  { name: "Baymard Checkout Flow UX", url: "https://baymard.com/learn/checkout-flow-ux-optimization", use: "Checkout optimization research and prioritization" },
  { name: "Google Analytics recommended events", url: "https://support.google.com/analytics/answer/9267735", use: "GA4 events such as generate_lead, purchase, search and ecommerce events" },
  { name: "Google Ads conversion measurement", url: "https://support.google.com/google-ads/answer/1722022", use: "Conversion tracking and ad optimization" },
  { name: "Google Search ecommerce SEO", url: "https://developers.google.com/search/docs/specialty/ecommerce", use: "Ecommerce SEO, product discovery and indexing" },
  { name: "Google SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide", use: "Search fundamentals and content quality" },
  { name: "Schema.org Product", url: "https://schema.org/Product", use: "Product structured data and JSON-LD modeling" },
  { name: "Next.js Image component", url: "https://nextjs.org/docs/pages/api-reference/components/image", use: "Image optimization in Next.js" },
  { name: "Vercel Speed Insights", url: "https://vercel.com/docs/speed-insights", use: "Core Web Vitals monitoring and production performance" },
  { name: "Tailwind responsive design", url: "https://tailwindcss.com/docs/breakpoints", use: "Mobile-first responsive component implementation" },
  { name: "Stripe Checkout documentation", url: "https://docs.stripe.com/payments/checkout", use: "Checkout patterns and low-friction payment UX" },
  { name: "Stripe Optimized Checkout Suite", url: "https://support.stripe.com/questions/what-is-stripe-s-optimized-checkout-suite-%28ocs%29", use: "Payment method optimization and checkout conversion" },
  { name: "Shopify product details page", url: "https://help.shopify.com/en/manual/products/details/product-details-page", use: "Product content, variants, media and SEO fields" },
  { name: "Unbounce Conversion Benchmark Report", url: "https://unbounce.com/conversion-benchmark-report/", use: "Landing page benchmarks and conversion recommendations" },
  { name: "Unbounce average landing page conversion rate", url: "https://unbounce.com/average-conversion-rates-landing-pages/", use: "Landing page benchmark context" },
  { name: "CXL high converting landing page", url: "https://cxl.com/blog/how-to-build-a-high-converting-landing-page/", use: "Landing page structure, trust and persuasion questions" },
  { name: "HubSpot landing page ROI guide", url: "https://blog.hubspot.com/marketing/landing-page-mistakes", use: "Landing page CTAs, video and personalization" },
  { name: "NN/g usability heuristics", url: "https://www.nngroup.com/articles/ten-usability-heuristics/", use: "Usability heuristics and interface diagnostics" },
  { name: "NN/g UX research methods", url: "https://www.nngroup.com/articles/which-ux-research-methods/", use: "Research method selection and UX evidence gathering" },
  { name: "NN/g mobile images", url: "https://www.nngroup.com/videos/mobile-images/", use: "Mobile image value, load and information density" },
  { name: "VWO A/B testing guide", url: "https://vwo.com/ab-testing/", use: "Experimentation workflow and A/B testing concepts" },
  { name: "Optimizely experiment setup", url: "https://support.optimizely.com/hc/en-us/articles/4410289104013-Steps-to-create-an-experiment", use: "Experiment setup, targeting, metrics and sample size planning" },
  { name: "GrowthBook documentation", url: "https://docs.growthbook.io/", use: "Open source feature flags and experimentation" },
  { name: "Unsplash License", url: "https://unsplash.com/license", use: "Permissive commercial photo licensing checks" },
  { name: "Pexels License", url: "https://www.pexels.com/license/", use: "Permissive commercial photo and video licensing checks" },
  { name: "Pixabay FAQ and license", url: "https://pixabay.com/service/faq/", use: "Permissive media licensing checks and restrictions" },
  { name: "Openverse API docs", url: "https://docs.openverse.org/api/reference/made_with_ov.html", use: "Creative Commons and public domain asset discovery" }
];

const sourceBy = (names) => names.map((name) => sources.find((source) => source.name === name)).filter(Boolean);

const skills = [
  {
    rank: 1,
    slug: "01-cro-strategy",
    name: "CRO Strategy",
    area: "Strategy",
    objective: "Transformar metas de negócio em um sistema priorizado de hipóteses, métricas, experimentos e entregas de conversão.",
    when: ["Novo site sem plano de conversão", "Queda de leads ou vendas sem causa clara", "Antes de investir em mídia paga", "Quando há muitas opiniões e pouca evidência"],
    process: ["Definir conversão primária e secundária", "Mapear funil de aquisição até pós-conversão", "Levantar dados quantitativos e qualitativos", "Criar hipóteses usando impacto, confiança e esforço", "Priorizar backlog e medir impacto por sprint"],
    checklist: ["Definir KPI principal e guardrails", "Mapear páginas críticas", "Coletar baseline de 14 a 30 dias", "Documentar objeções e fricções", "Criar backlog ICE/PIE", "Definir owner e cadência semanal"],
    automation: "Um agente pode auditar analytics, extrair eventos, comparar páginas, gerar matriz ICE e abrir tarefas por prioridade.",
    inputs: ["Objetivo de negócio", "Tráfego por canal", "Taxas atuais", "Oferta", "Público", "Páginas críticas"],
    outputs: ["Mapa do funil", "Backlog CRO priorizado", "Plano de testes", "Checklist de instrumentação", "Resumo executivo"],
    metrics: ["conversion_rate", "lead_rate", "revenue_per_visitor", "CAC", "CTR", "bounce_rate"],
    examples: {
      saas: "Reduzir trial abandonado priorizando hero, pricing, prova social e evento sign_up_started.",
      ecommerce: "Aumentar add-to-cart auditando PDP, frete, avaliações e checkout.",
      course: "Elevar leads com nova isca, prova de transformação e formulário em 2 etapas."
    },
    prompts: ["Audite este site como CRO lead e gere 10 hipóteses priorizadas por ICE.", "Crie um plano de experimentos de 30 dias para esta landing page."],
    assets: ["Mapa de funil", "Heatmap", "Dashboard de eventos", "Tabela de hipóteses"],
    refs: sourceBy(["CXL high converting landing page", "Unbounce Conversion Benchmark Report", "Google Analytics recommended events", "NN/g UX research methods"])
  },
  {
    rank: 2,
    slug: "02-landing-page-architecture",
    name: "Landing Page Architecture",
    area: "Landing Pages",
    objective: "Estruturar páginas focadas em uma ação, com narrativa, prova, objeções e CTA coerente do topo ao final.",
    when: ["Campanhas pagas", "Lançamentos", "Captação de leads", "Webinars", "Validação de oferta"],
    process: ["Escolher uma conversão única", "Alinhar mensagem com anúncio e intenção", "Criar hero com promessa clara", "Sequenciar benefícios, prova e objeções", "Repetir CTA em pontos lógicos", "Remover distrações não essenciais"],
    checklist: ["Uma oferta por página", "Mensagem acima da dobra em 5 segundos", "CTA primário visível", "Prova social próxima ao topo", "FAQ de objeções", "Sem navegação excessiva", "Mobile revisado"],
    automation: "Gerar wireframe por tipo de oferta, validar seções obrigatórias, verificar densidade de links e criar copy inicial por nicho.",
    inputs: ["Oferta", "Canal de tráfego", "Persona", "Objeções", "Provas", "CTA"],
    outputs: ["Mapa de seções", "Wireframe textual", "Copy inicial", "Checklist de QA"],
    metrics: ["landing_conversion_rate", "CTA_click_rate", "scroll_depth", "form_submit_rate", "cost_per_lead"],
    examples: {
      saas: "Hero com promessa, logos, demo CTA, problema, workflow, cases, pricing teaser e FAQ.",
      ecommerce: "Landing de campanha com produto, oferta, bundles, prova, garantia e checkout bridge.",
      course: "Página de aula gratuita com transformação, autoridade, módulos, bônus e inscrição."
    },
    prompts: ["Crie a arquitetura de uma landing page para esta oferta com seções e objetivo de cada seção.", "Reorganize esta landing page para remover distrações e reforçar uma conversão única."],
    assets: ["Hero product mockup", "Logos de clientes", "Depoimentos", "Ícones de benefícios"],
    refs: sourceBy(["Unbounce Conversion Benchmark Report", "CXL high converting landing page", "HubSpot landing page ROI guide"])
  },
  {
    rank: 3,
    slug: "03-ux-research",
    name: "UX Research for Conversion",
    area: "Research",
    objective: "Encontrar fricções reais que impedem visitantes de avançar no funil, combinando analytics, entrevistas, testes e observação.",
    when: ["Taxa de conversão abaixo do benchmark", "Alto tráfego com baixa intenção", "Muitas dúvidas recorrentes no suporte", "Antes de redesenhar páginas críticas"],
    process: ["Definir perguntas de pesquisa", "Selecionar métodos rápidos", "Revisar analytics e gravações", "Executar testes de tarefa", "Agrupar achados por severidade", "Transformar achados em hipóteses"],
    checklist: ["Perguntas claras", "Segmentos separados por canal", "5 a 8 testes qualitativos", "Eventos de funil conferidos", "Achados com evidência", "Recomendação acionável"],
    automation: "Codex pode criar roteiro de teste, matriz de severidade, síntese de entrevistas e backlog de problemas por página.",
    inputs: ["Dados de analytics", "Sessões gravadas", "Feedback do suporte", "Páginas críticas", "Perfis de usuário"],
    outputs: ["Plano de pesquisa", "Roteiro de teste", "Relatório de achados", "Backlog UX"],
    metrics: ["task_success_rate", "time_on_task", "conversion_rate", "dropoff_rate", "support_questions"],
    examples: {
      saas: "Testar se usuários entendem o valor do produto antes de clicar em demo.",
      ecommerce: "Observar como usuários escolhem tamanho, frete e variação.",
      course: "Identificar objeções sobre autoridade, garantia e tempo disponível."
    },
    prompts: ["Crie um roteiro de teste de usabilidade para esta página de produto.", "Transforme estas gravações/anotações em achados priorizados para CRO."],
    assets: ["Planilha de entrevistas", "Modelo de tarefa", "Matriz severidade x frequência"],
    refs: sourceBy(["NN/g UX research methods", "NN/g usability heuristics", "Baymard Checkout Usability"])
  },
  {
    rank: 4,
    slug: "04-conversion-copywriting",
    name: "Conversion Copywriting",
    area: "Copy",
    objective: "Escrever mensagens que conectam dor, desejo, prova e ação usando linguagem clara e específica.",
    when: ["Hero genérico", "Oferta difícil de entender", "CTAs fracos", "Pouca diferenciação", "Páginas com baixa leitura"],
    process: ["Coletar voz do cliente", "Definir promessa e mecanismo", "Escrever headline clara", "Converter features em outcomes", "Adicionar prova e objeções", "Testar versões de CTA"],
    checklist: ["Headline específica", "Subheadline com contexto", "Benefícios concretos", "Prova em linguagem verificável", "CTA com ação e resultado", "Sem jargão interno"],
    automation: "Um agente pode extrair objeções, gerar matriz feature-benefit-outcome, produzir variações e criar testes de copy.",
    inputs: ["Oferta", "Persona", "Depoimentos", "Objeções", "Diferenciais", "Tom de marca"],
    outputs: ["Hero copy", "Bullets de benefício", "CTAs", "FAQ", "Variações para teste"],
    metrics: ["CTA_click_rate", "conversion_rate", "scroll_depth", "lead_quality", "bounce_rate"],
    examples: {
      saas: "Trocar 'Plataforma completa' por 'Feche relatórios financeiros em 40% menos tempo'.",
      ecommerce: "Trocar 'Alta qualidade' por 'Tecido respirável, não transparente e com troca em 30 dias'.",
      course: "Trocar 'Aprenda marketing' por 'Monte sua primeira campanha lucrativa em 7 dias'."
    },
    prompts: ["Reescreva esta copy usando voz do cliente, benefício específico e prova.", "Crie 12 CTAs para esta oferta, separados por intenção."],
    assets: ["Banco de frases do cliente", "Matriz de objeções", "Tabela de promessas"],
    refs: sourceBy(["CXL high converting landing page", "HubSpot landing page ROI guide", "Unbounce Conversion Benchmark Report"])
  },
  {
    rank: 5,
    slug: "05-hero-section-optimization",
    name: "Hero Section Optimization",
    area: "Hero",
    objective: "Fazer a primeira dobra comunicar para quem é, qual resultado entrega, por que confiar e qual ação tomar.",
    when: ["Alta rejeição", "Baixo CTA click", "Hero com imagem decorativa", "Mensagem pouco clara em mobile"],
    process: ["Definir promessa principal", "Selecionar imagem informativa", "Adicionar prova curta", "Criar CTA primário e secundário", "Validar leitura em 5 segundos", "Testar mobile primeiro"],
    checklist: ["H1 literal e específico", "Subheadline com contexto", "CTA primário acima da dobra", "Imagem com função", "Prova visível", "Sem carrossel obrigatório", "LCP otimizado"],
    automation: "Gerar variações de hero, auditar contraste, detectar CTA ausente, checar imagem LCP e criar testes A/B.",
    inputs: ["Promessa", "Persona", "Prova", "Oferta", "Imagem ou mockup", "CTA"],
    outputs: ["Hero pronto", "Variações de headline", "Checklist LCP", "Plano de teste"],
    metrics: ["CTA_click_rate", "bounce_rate", "LCP", "scroll_depth", "conversion_rate"],
    examples: {
      saas: "Hero com screenshot do dashboard e promessa de economia de tempo.",
      ecommerce: "Hero com produto real, preço/oferta e prova de entrega.",
      course: "Hero com resultado final do aluno e CTA para aula gratuita."
    },
    prompts: ["Crie 5 variações de hero para esta oferta e classifique por clareza.", "Audite este hero por clareza, prova, CTA, imagem e performance."],
    assets: ["Mockup de produto", "Screenshot real", "Foto lifestyle permissiva", "Selo de prova"],
    refs: sourceBy(["web.dev Web Vitals", "Next.js Image component", "CXL high converting landing page", "NN/g mobile images"])
  },
  {
    rank: 6,
    slug: "06-visual-hierarchy",
    name: "Visual Hierarchy",
    area: "UI",
    objective: "Guiar o olhar para a informação certa na ordem certa, reduzindo esforço cognitivo e aumentando ação.",
    when: ["Página poluída", "Muitos CTAs competindo", "Usuários não chegam ao formulário", "Baixa compreensão da oferta"],
    process: ["Definir prioridade de informação", "Criar escala tipográfica", "Usar contraste com parcimônia", "Agrupar por proximidade", "Reduzir elementos competidores", "Validar em mobile"],
    checklist: ["Um H1 dominante", "CTA primário visualmente claro", "Espaçamento consistente", "Cards sem excesso de texto", "Contraste AA", "Hierarquia preservada em mobile"],
    automation: "Lint visual com tokens, varredura de classes Tailwind, detecção de múltiplos CTAs primários e screenshots comparativos.",
    inputs: ["Mapa de seções", "Design tokens", "Conteúdo", "Objetivo da página"],
    outputs: ["Sistema de hierarquia", "Regras de tokens", "Correções UI", "Checklist visual"],
    metrics: ["CTA_click_rate", "scroll_depth", "time_on_page", "task_success_rate"],
    examples: {
      saas: "Dashboard mockup maior que bullets secundários.",
      ecommerce: "Preço e botão de compra dominam buy box.",
      course: "Oferta, data e inscrição aparecem antes de longas biografias."
    },
    prompts: ["Audite a hierarquia visual desta página e liste o que compete com o CTA.", "Crie tokens de tipografia e espaçamento para esta landing page."],
    assets: ["Mapa de atenção", "Sistema de tokens", "Wireframe anotado"],
    refs: sourceBy(["NN/g usability heuristics", "Tailwind responsive design", "W3C WCAG 2.2"])
  },
  {
    rank: 7,
    slug: "07-cta-design",
    name: "CTA Design",
    area: "CTA",
    objective: "Criar chamadas para ação claras, acessíveis e posicionadas no momento certo da decisão.",
    when: ["Baixo clique no botão", "Múltiplas ações concorrentes", "CTA genérico", "Botões difíceis de tocar no mobile"],
    process: ["Definir ação principal", "Escrever microcopy orientada a resultado", "Escolher contraste acessível", "Posicionar após motivação e prova", "Criar estados hover/focus/disabled", "Medir cliques por seção"],
    checklist: ["Texto específico", "Alvo mínimo 44px", "Contraste AA", "Estado de foco visível", "CTA repetido sem excesso", "Evento de clique rastreado"],
    automation: "Gerar CTAs por intenção, instrumentar eventos, auditar contraste e tamanho de toque.",
    inputs: ["Ação desejada", "Oferta", "Estágio do funil", "Tom de marca"],
    outputs: ["Botões", "Microcopy", "Eventos de tracking", "Plano de teste"],
    metrics: ["CTA_click_rate", "conversion_rate", "form_start_rate", "purchase_start_rate"],
    examples: {
      saas: "Trocar 'Enviar' por 'Agendar minha demo'.",
      ecommerce: "Botão sticky 'Adicionar ao carrinho' com preço visível.",
      course: "CTA 'Quero assistir à aula gratuita' após prova e módulos."
    },
    prompts: ["Crie CTAs para topo, meio e fundo da página considerando intenção do usuário.", "Audite acessibilidade e clareza destes botões."],
    assets: ["Estados de botão", "Mapa de CTAs por seção", "Ícones de seta/check em SVG"],
    refs: sourceBy(["W3C WCAG 2.2", "HubSpot landing page ROI guide", "Google Analytics recommended events"])
  },
  {
    rank: 8,
    slug: "08-forms-and-lead-capture",
    name: "Forms and Lead Capture",
    area: "Forms",
    objective: "Reduzir fricção de formulários e aumentar leads qualificados com campos, labels e feedback corretos.",
    when: ["Muitos inícios sem envio", "Formulários longos", "Leads ruins", "Erros frequentes no mobile"],
    process: ["Definir qualificação mínima", "Remover campos não essenciais", "Usar labels persistentes", "Adicionar validação útil", "Testar uma ou duas etapas", "Medir start, error e submit"],
    checklist: ["Campos mínimos", "Labels visíveis", "Autocomplete correto", "Input types mobile", "Erros próximos ao campo", "Privacidade clara", "Evento generate_lead"],
    automation: "Criar schema de formulário, gerar componente acessível, instrumentar GA4 generate_lead e validar erros.",
    inputs: ["Campos necessários", "Destino do lead", "CRM", "Política de privacidade", "Critérios de qualificação"],
    outputs: ["Formulário", "Validação", "Eventos", "Mensagem de sucesso", "Integração CRM"],
    metrics: ["form_start_rate", "form_submit_rate", "field_error_rate", "lead_quality", "cost_per_lead"],
    examples: {
      saas: "Nome, email corporativo e tamanho da empresa em formulário de demo.",
      ecommerce: "Captura de email para cupom com consentimento claro.",
      course: "Nome, email e WhatsApp para aula gratuita em 2 etapas."
    },
    prompts: ["Reduza este formulário para o mínimo necessário sem perder qualificação.", "Gere um componente de lead capture acessível com validação e evento GA4."],
    assets: ["Ícones de privacidade", "Selo sem spam", "Mensagem de sucesso"],
    refs: sourceBy(["W3C WCAG 2.2", "Google Analytics recommended events", "NN/g usability heuristics"])
  },
  {
    rank: 9,
    slug: "09-trust-signals-social-proof",
    name: "Trust Signals and Social Proof",
    area: "Trust",
    objective: "Aumentar confiança usando provas verificáveis, depoimentos específicos, garantias, logos, reviews e sinais de segurança.",
    when: ["Oferta nova", "Preço alto", "Marca desconhecida", "Usuários abandonam perto da decisão"],
    process: ["Listar objeções de confiança", "Selecionar provas reais", "Posicionar prova perto da decisão", "Usar depoimentos com contexto", "Adicionar garantias e políticas", "Evitar claims vagos"],
    checklist: ["Depoimento com nome/contexto permitido", "Métrica ou resultado verificável", "Garantia clara", "Políticas perto do CTA", "Logos com permissão", "Reviews úteis por objeção"],
    automation: "Extrair provas do CRM, classificar depoimentos por objeção, gerar blocos de prova e validar uso de logos.",
    inputs: ["Depoimentos", "Clientes", "Reviews", "Garantias", "Certificações", "Políticas"],
    outputs: ["Blocos de prova social", "Trust badges", "FAQ de confiança", "Regras legais"],
    metrics: ["conversion_rate", "checkout_start_rate", "refund_rate", "CTA_click_rate"],
    examples: {
      saas: "Logos de clientes, SOC2 se aplicável, case curto e número de usuários.",
      ecommerce: "Reviews com fotos, troca fácil, prazo de entrega e formas de pagamento.",
      course: "Antes/depois, depoimentos de alunos e garantia incondicional."
    },
    prompts: ["Organize estas provas por objeção e indique onde usar na página.", "Crie trust badges objetivos e sem promessas exageradas."],
    assets: ["Logos autorizados", "Fotos de depoimentos com consentimento", "Ícones de segurança", "Review cards"],
    refs: sourceBy(["CXL high converting landing page", "Baymard Checkout Usability", "Shopify product details page"])
  },
  {
    rank: 10,
    slug: "10-pricing-page-optimization",
    name: "Pricing Page Optimization",
    area: "Pricing",
    objective: "Reduzir indecisão e comunicar valor, diferenças entre planos, risco e caminho de compra ou contato.",
    when: ["Baixa conversão no pricing", "Muitas dúvidas sobre planos", "Ciclo comercial lento", "Usuários escolhem plano errado"],
    process: ["Definir jobs por plano", "Destacar plano recomendado", "Mostrar valor antes de preço", "Comparar limites com clareza", "Adicionar FAQ e prova", "Rastrear cliques por plano"],
    checklist: ["Planos nomeados por perfil", "Preço claro", "CTA por plano", "Tabela comparativa", "FAQ de cobrança", "Garantia ou trial", "Evento select_plan"],
    automation: "Gerar tabela de pricing a partir de JSON, validar paridade de recursos e criar eventos por plano.",
    inputs: ["Planos", "Preços", "Recursos", "Segmentos", "Política de trial", "Objeções"],
    outputs: ["Pricing table", "FAQ", "Comparativo", "Eventos", "Variações de preço"],
    metrics: ["pricing_CTA_click_rate", "trial_start_rate", "plan_mix", "ARPU", "sales_contact_rate"],
    examples: {
      saas: "Plano Pro destacado para times de 5 a 20 pessoas.",
      ecommerce: "Bundles com economia real e assinatura opcional.",
      course: "Pagamento à vista, parcelado e bônus por lote."
    },
    prompts: ["Reestruture esta página de pricing para reduzir indecisão por segmento.", "Crie uma matriz de planos com CTAs e eventos."],
    assets: ["Tabela de planos", "Badge recomendado", "FAQ de cobrança"],
    refs: sourceBy(["Stripe Checkout documentation", "CXL high converting landing page", "Google Analytics recommended events"])
  },
  {
    rank: 11,
    slug: "11-checkout-optimization",
    name: "Checkout Optimization",
    area: "Checkout",
    objective: "Reduzir abandono removendo surpresa, fricção, campos desnecessários e insegurança no momento de pagamento.",
    when: ["Carrinho cheio e poucas compras", "Abandono em frete/pagamento", "Checkout lento", "Usuários reclamam de cadastro obrigatório"],
    process: ["Medir funil do checkout", "Mostrar custos cedo", "Permitir guest checkout", "Reduzir campos", "Adicionar pagamento local", "Manter resumo visível", "Validar mobile"],
    checklist: ["Resumo do pedido visível", "Frete e taxas transparentes", "Guest checkout", "Campos com autocomplete", "Pagamentos relevantes", "Erro claro", "Evento purchase"],
    automation: "Auditar etapas, medir abandono por campo, validar eventos ecommerce e sugerir simplificações.",
    inputs: ["Funil checkout", "Métodos de pagamento", "Campos", "Políticas", "Erros", "Dados de abandono"],
    outputs: ["Plano de redução de abandono", "Checklist de checkout", "Eventos ecommerce", "Copy de confiança"],
    metrics: ["cart_abandonment_rate", "checkout_completion_rate", "purchase_rate", "payment_error_rate", "AOV"],
    examples: {
      saas: "Checkout de assinatura com trial e cobrança clara.",
      ecommerce: "Carrinho com frete estimado, Pix/cartão e resumo sticky.",
      course: "Checkout com garantia, parcelamento e suporte visível."
    },
    prompts: ["Audite este checkout contra boas práticas de Baymard e Stripe.", "Crie um plano para reduzir abandono por etapa."],
    assets: ["Ícones de pagamento", "Resumo de pedido", "Trust badges", "Indicador de progresso"],
    refs: sourceBy(["Baymard Checkout Usability", "Baymard Checkout Flow UX", "Stripe Checkout documentation", "Stripe Optimized Checkout Suite"])
  },
  {
    rank: 12,
    slug: "12-product-page-optimization",
    name: "Product Page Optimization",
    area: "Product",
    objective: "Transformar páginas de produto em páginas de decisão com informação, mídia, prova, preço e compra sem atrito.",
    when: ["Baixo add-to-cart", "Usuários não entendem variantes", "Muitas devoluções", "SEO de produto fraco"],
    process: ["Revisar buy box", "Padronizar imagens", "Explicar benefícios e specs", "Mostrar frete e política perto do CTA", "Adicionar reviews úteis", "Implementar structured data"],
    checklist: ["Nome claro", "Preço e oferta visíveis", "Galeria completa", "Variações fáceis", "CTA sticky mobile", "Reviews por objeção", "Product JSON-LD"],
    automation: "Gerar páginas a partir de catálogo, validar campos obrigatórios, criar alt text e JSON-LD Product.",
    inputs: ["Catálogo", "Imagens", "Preço", "Variantes", "Reviews", "Políticas", "Dados SEO"],
    outputs: ["PDP otimizada", "JSON-LD", "Alt texts", "Checklist de mídia", "Eventos ecommerce"],
    metrics: ["add_to_cart_rate", "product_conversion_rate", "revenue_per_session", "organic_clicks", "return_rate"],
    examples: {
      saas: "Página de produto com features, casos de uso, integração e CTA demo.",
      ecommerce: "PDP com galeria, tamanhos, frete, troca, reviews e FAQ.",
      course: "Página com módulos, bônus, depoimentos, garantia e checkout CTA."
    },
    prompts: ["Otimize esta página de produto com foco em add-to-cart e SEO.", "Gere JSON-LD Product e alt texts para este catálogo."],
    assets: ["Packshots", "Vídeo curto", "Tabela de specs", "Review media"],
    refs: sourceBy(["Shopify product details page", "Google Search ecommerce SEO", "Schema.org Product", "Baymard Checkout Usability"])
  },
  {
    rank: 13,
    slug: "13-mobile-first-ux",
    name: "Mobile-First UX",
    area: "Mobile",
    objective: "Projetar fluxos que funcionam primeiro em telas pequenas, toque, conexão variável e atenção fragmentada.",
    when: ["Maioria do tráfego mobile", "Hero corta conteúdo", "Botões pequenos", "Checkout difícil no celular", "Baixa conversão mobile"],
    process: ["Começar pelo viewport 360-390px", "Priorizar conteúdo decisivo", "Usar targets de toque grandes", "Reduzir imagens decorativas", "Criar CTA sticky quando útil", "Testar teclado e formulários"],
    checklist: ["Sem scroll horizontal", "Alvos 44px+", "Texto 16px+", "CTA visível", "Imagens informativas", "Inputs corretos", "Performance em 4G"],
    automation: "Rodar Playwright em breakpoints, detectar overflow, medir LCP mobile, validar tamanhos de toque e screenshots.",
    inputs: ["Páginas críticas", "Breakpoints", "Dados mobile", "Componentes"],
    outputs: ["Relatório mobile", "Correções responsivas", "Screenshots", "Checklist de toque"],
    metrics: ["mobile_conversion_rate", "mobile_CTA_click_rate", "LCP_mobile", "form_submit_rate", "checkout_completion_rate"],
    examples: {
      saas: "CTA sticky de demo após hero e screenshot recortado para celular.",
      ecommerce: "Buy box acima de descrições longas e seleção de variante grande.",
      course: "Inscrição em uma coluna com resumo fixo do bônus."
    },
    prompts: ["Audite esta página para mobile-first UX e liste ajustes por breakpoint.", "Gere uma versão mobile da hierarquia desta landing page."],
    assets: ["Screenshots 390px", "CTA sticky", "Mockups mobile"],
    refs: sourceBy(["Tailwind responsive design", "NN/g mobile images", "web.dev Web Vitals", "W3C WCAG 2.2"])
  },
  {
    rank: 14,
    slug: "14-web-performance-core-web-vitals",
    name: "Web Performance and Core Web Vitals",
    area: "Performance",
    objective: "Melhorar velocidade percebida, responsividade e estabilidade visual para apoiar SEO, UX e conversão.",
    when: ["LCP alto", "INP ruim", "CLS perceptível", "Páginas com imagens pesadas", "Campanhas pagas caras"],
    process: ["Medir lab e campo", "Identificar LCP element", "Otimizar imagem e fonte crítica", "Reduzir JS e terceiros", "Reservar espaço de layout", "Monitorar regressões"],
    checklist: ["LCP <= 2.5s p75", "INP <= 200ms p75", "CLS <= 0.1 p75", "Hero otimizado", "Imagens WebP/AVIF", "Scripts deferidos", "RUM ativo"],
    automation: "Rodar Lighthouse, PageSpeed, Vercel Speed Insights, gerar relatório de assets e bloquear regressões em CI.",
    inputs: ["URL", "Build", "Lista de assets", "Scripts terceiros", "Dados RUM"],
    outputs: ["Relatório CWV", "Lista de gargalos", "Plano técnico", "Budget de performance"],
    metrics: ["LCP", "INP", "CLS", "TTFB", "conversion_rate", "bounce_rate"],
    examples: {
      saas: "Trocar vídeo hero por poster otimizado e carregar demo depois.",
      ecommerce: "Servir imagens PDP em WebP com dimensões explícitas.",
      course: "Remover scripts de tracking duplicados e lazy load de embeds."
    },
    prompts: ["Audite esta página para Core Web Vitals e priorize correções por impacto.", "Crie um performance budget para uma landing page em Next.js."],
    assets: ["Relatório Lighthouse", "Mapa de assets", "Tabela de scripts terceiros"],
    refs: sourceBy(["web.dev Web Vitals", "web.dev Core Web Vitals thresholds", "Next.js Image component", "Vercel Speed Insights"])
  },
  {
    rank: 15,
    slug: "15-seo-for-conversion",
    name: "SEO for Conversion",
    area: "SEO",
    objective: "Atrair tráfego orgânico com intenção e converter esse tráfego usando conteúdo, estrutura, snippets e experiência alinhados.",
    when: ["Tráfego orgânico sem leads", "Páginas indexadas com baixa intenção", "Ecommerce sem dados estruturados", "Conteúdo sem CTA"],
    process: ["Mapear intenção por página", "Criar title/meta orientados a clique qualificado", "Adicionar estrutura H1-H3", "Criar links internos para conversão", "Implementar JSON-LD", "Medir conversões por landing orgânica"],
    checklist: ["Intenção clara", "Title único", "Meta com valor", "H1 alinhado", "CTA contextual", "Schema correto", "Links internos", "Search Console monitorado"],
    automation: "Gerar metadata por página, auditar headings, criar JSON-LD e mapear páginas com tráfego sem conversão.",
    inputs: ["Keywords", "Páginas", "Oferta", "Catálogo", "Dados Search Console", "Conversões"],
    outputs: ["Mapa SEO x conversão", "Metadados", "Briefs", "JSON-LD", "Plano de links internos"],
    metrics: ["organic_clicks", "CTR_serp", "organic_conversion_rate", "qualified_leads", "revenue_from_organic"],
    examples: {
      saas: "Página de alternativa/comparação com CTA para demo.",
      ecommerce: "Categoria com texto útil, filtros rastreáveis e Product schema.",
      course: "Artigo educativo com lead magnet contextual e FAQ."
    },
    prompts: ["Otimize esta página para SEO com foco em conversão, não só ranking.", "Gere title, meta, H1, FAQ e schema para este produto."],
    assets: ["Mapa de keywords", "Snippet preview", "JSON-LD"],
    refs: sourceBy(["Google SEO Starter Guide", "Google Search ecommerce SEO", "Google Search ecommerce SEO", "Schema.org Product"])
  },
  {
    rank: 16,
    slug: "16-accessibility",
    name: "Accessibility for Conversion",
    area: "Accessibility",
    objective: "Garantir que pessoas e tecnologias assistivas consigam entender, navegar e converter sem barreiras.",
    when: ["Formulários críticos", "Botões sem label", "Contraste baixo", "Modais ou drawers", "Checkout e pricing"],
    process: ["Auditar semântica", "Validar teclado", "Checar contraste", "Revisar labels e erros", "Testar leitores de tela em fluxos críticos", "Adicionar foco visível"],
    checklist: ["Heading sequencial", "Labels visíveis", "Botões nomeados", "Focus visible", "Contraste AA", "Erro anunciado", "Modal com escape", "Alt text útil"],
    automation: "Rodar axe/Lighthouse, varrer aria-labels, testar teclado com Playwright e gerar checklist WCAG.",
    inputs: ["Páginas", "Componentes", "Fluxos", "Design tokens", "Formulários"],
    outputs: ["Relatório a11y", "Correções de componentes", "Checklist WCAG", "Testes automatizados"],
    metrics: ["form_submit_rate", "checkout_completion_rate", "task_success_rate", "error_rate", "legal_risk"],
    examples: {
      saas: "Modal de demo com foco preso e labels reais.",
      ecommerce: "Seleção de tamanho com aria-pressed e erro anunciado.",
      course: "Vídeos com legenda e formulário navegável por teclado."
    },
    prompts: ["Audite estes componentes contra WCAG 2.2 AA e gere correções.", "Crie um checklist de acessibilidade para checkout."],
    assets: ["Focus ring tokens", "Ícones com texto", "Tabela de contraste"],
    refs: sourceBy(["W3C WCAG 2.2", "NN/g usability heuristics", "NN/g UX research methods"])
  },
  {
    rank: 17,
    slug: "17-analytics-event-tracking",
    name: "Analytics and Event Tracking",
    area: "Analytics",
    objective: "Instrumentar eventos que explicam o funil de conversão, permitindo decisões por dados e testes confiáveis.",
    when: ["Não há dados de funil", "Eventos duplicados", "Google Ads sem conversões", "Testes A/B sem métrica confiável"],
    process: ["Definir taxonomia de eventos", "Mapear funil por página", "Usar eventos GA4 recomendados", "Adicionar parâmetros", "Validar em debug", "Criar dashboard"],
    checklist: ["Evento page_view correto", "CTA clicks", "form_start", "generate_lead", "add_to_cart", "begin_checkout", "purchase", "Consentimento e privacidade"],
    automation: "Gerar dataLayer map, wrappers TypeScript, testes de eventos e documentação de tracking.",
    inputs: ["Objetivos", "Páginas", "Eventos atuais", "Ferramentas", "Consentimento", "CRM"],
    outputs: ["Plano de eventos", "Implementação", "Dashboard", "Validação", "Dicionário de dados"],
    metrics: ["event_coverage", "conversion_rate", "lead_quality", "ROAS", "experiment_reliability"],
    examples: {
      saas: "Track demo_cta_click, form_start, generate_lead e trial_start.",
      ecommerce: "Track view_item, add_to_cart, begin_checkout e purchase.",
      course: "Track webinar_signup, video_start e purchase."
    },
    prompts: ["Crie uma taxonomia GA4 para este funil e gere código TypeScript.", "Audite se os eventos desta landing page medem o que importa."],
    assets: ["Dicionário de eventos", "Diagrama de funil", "Dashboard"],
    refs: sourceBy(["Google Analytics recommended events", "Google Ads conversion measurement", "Google Ads conversion measurement"])
  },
  {
    rank: 18,
    slug: "18-ab-testing-experimentation",
    name: "A/B Testing and Experimentation",
    area: "Experimentation",
    objective: "Testar mudanças com método, métrica, amostra e decisão clara, evitando decisões por palpite.",
    when: ["Tráfego suficiente", "Mudança de alto impacto", "Hipóteses concorrentes", "Necessidade de aprender sem risco total"],
    process: ["Definir hipótese", "Escolher métrica primária", "Calcular amostra/MDE", "Criar variações", "QA técnico", "Rodar até critério definido", "Documentar decisão"],
    checklist: ["Hipótese falsificável", "Métrica primária", "Guardrails", "Amostra estimada", "Segmentação correta", "Sem mudanças simultâneas", "Resultado documentado"],
    automation: "Criar specs de experimento, gerar feature flags, configurar eventos e produzir relatório de decisão.",
    inputs: ["Hipótese", "Baseline", "MDE", "Tráfego", "Métrica", "Ferramenta"],
    outputs: ["Experiment brief", "Variações", "Configuração", "QA checklist", "Relatório"],
    metrics: ["conversion_rate", "uplift", "statistical_power", "revenue_per_visitor", "guardrail_metrics"],
    examples: {
      saas: "Testar hero orientado a dor versus resultado.",
      ecommerce: "Testar CTA sticky no PDP mobile.",
      course: "Testar prova social no topo versus depois da oferta."
    },
    prompts: ["Crie um experimento A/B com hipótese, métrica, amostra e QA.", "Transforme esta ideia CRO em spec de GrowthBook/Optimizely."],
    assets: ["Experiment brief", "Feature flag plan", "Decision log"],
    refs: sourceBy(["VWO A/B testing guide", "Optimizely experiment setup", "GrowthBook documentation", "Google Analytics recommended events"])
  },
  {
    rank: 19,
    slug: "19-image-sourcing-optimization",
    name: "Image Sourcing and Optimization",
    area: "Assets",
    objective: "Selecionar, documentar e otimizar imagens que aumentam confiança sem criar risco legal ou prejudicar performance.",
    when: ["Hero precisa de imagem", "Produto precisa de mídia", "Uso de banco gratuito", "Página lenta por imagens"],
    process: ["Definir função da imagem", "Buscar fontes permissivas", "Verificar licença e riscos de marca/pessoa", "Salvar metadados", "Recortar por breakpoint", "Converter para WebP/AVIF", "Criar alt text"],
    checklist: ["Licença documentada", "Autor e URL salvos", "Sem marcas não autorizadas", "Sem pessoas em contexto sensível", "Dimensões corretas", "WebP/AVIF", "Alt text útil"],
    automation: "Usar Openverse/Pexels/Unsplash search, baixar candidatos aprovados, gerar manifesto, otimizar com Sharp/Squoosh e criar alt text.",
    inputs: ["Termos de busca", "Uso sugerido", "Nicho", "Restrições de marca", "Formato desejado"],
    outputs: ["Manifesto de imagens", "Assets otimizados", "Prompts alternativos", "Alt texts", "Relatório de licença"],
    metrics: ["LCP", "conversion_rate", "engagement_rate", "legal_risk", "asset_weight"],
    examples: {
      saas: "Screenshot real do dashboard em vez de foto decorativa.",
      ecommerce: "Produto em fundo branco e lifestyle sem marcas concorrentes.",
      course: "Imagem de ambiente de estudo com licença permissiva e sem endorsement falso."
    },
    prompts: ["Crie termos de busca e prompts seguros para imagens desta landing page.", "Audite este manifesto de imagens por licença, uso e performance."],
    assets: ["Manifesto de fontes", "Prompts IA", "Planilha de direitos", "WebP/AVIF"],
    refs: sourceBy(["Unsplash License", "Pexels License", "Pixabay FAQ and license", "Openverse API docs", "Next.js Image component"])
  },
  {
    rank: 20,
    slug: "20-design-system-for-conversion",
    name: "Design System for Conversion",
    area: "Design System",
    objective: "Criar componentes e tokens que preservam consistência, acessibilidade, velocidade e padrões de conversão em escala.",
    when: ["Múltiplas landing pages", "Equipe criando páginas sem padrão", "CTAs inconsistentes", "Redesign frequente", "Site com stack moderna"],
    process: ["Definir tokens de cor/tipo/spacing", "Criar componentes de conversão", "Documentar estados e variantes", "Adicionar exemplos", "Validar acessibilidade", "Versionar mudanças"],
    checklist: ["Tokens semânticos", "Componentes mobile-first", "Props tipadas", "Estados acessíveis", "Exemplos de uso", "Sem dependências desnecessárias", "Versionamento"],
    automation: "Gerar componentes React/Tailwind, lint de tokens, previews, testes visuais e templates por tipo de página.",
    inputs: ["Marca", "Stack", "Páginas alvo", "Tokens", "Componentes existentes", "Métricas"],
    outputs: ["Biblioteca de componentes", "Templates", "Guidelines", "Checklist QA", "Roadmap"],
    metrics: ["build_speed", "design_consistency", "conversion_rate", "a11y_score", "defect_rate"],
    examples: {
      saas: "Sistema com HeroSection, PricingTable, FAQ e LeadCaptureForm.",
      ecommerce: "ProductFeatureGrid, SocialProof e CheckoutSummary reutilizáveis.",
      course: "CTASection, TestimonialGrid e ConversionFooter para lançamentos."
    },
    prompts: ["Crie um design system de conversão em React/Tailwind para este nicho.", "Audite estes componentes por consistência, acessibilidade e CRO."],
    assets: ["Tokens", "Componentes", "Exemplos", "Ícones SVG"],
    refs: sourceBy(["Tailwind responsive design", "W3C WCAG 2.2", "NN/g usability heuristics", "Next.js Image component"])
  }
];

function list(items) {
  return items.map((item) => `- ${item}`).join("\n");
}

function sourceList(refs) {
  return refs.map((ref) => `- [${ref.name}](${ref.url}) - ${ref.use}`).join("\n");
}

function skillMarkdown(skill) {
  return `---
name: ${skill.slug.slice(3)}
description: Use esta skill para ${skill.objective.toLowerCase()} Aplicar em ${skill.when.join(", ").toLowerCase()}.
---

# ${skill.name}

## Objetivo
${skill.objective}

## Quando usar
${list(skill.when)}

## Como aplicar
${skill.process.map((item, index) => `${index + 1}. ${item}.`).join("\n")}

## Checklist de implementação
${list(skill.checklist.map((item) => `[ ] ${item}`))}

## Automação possível
${skill.automation}

## Inputs necessários
${list(skill.inputs)}

## Outputs esperados
${list(skill.outputs)}

## Métricas impactadas
${list(skill.metrics)}

## Exemplos práticos
- SaaS B2B: ${skill.examples.saas}
- E-commerce: ${skill.examples.ecommerce}
- Infoproduto/curso online: ${skill.examples.course}

## Prompts auxiliares
${list(skill.prompts)}

## Assets recomendados
${list(skill.assets)}

## Fontes e referências
${sourceList(skill.refs)}
`;
}

function checklistMarkdown(skill) {
  return `# Checklist operacional - ${skill.name}

## Preparação
${list(skill.inputs.map((item) => `[ ] Confirmar ${item.toLowerCase()}`))}

## Execução
${list(skill.process.map((item) => `[ ] ${item}`))}

## QA
${list(skill.checklist.map((item) => `[ ] ${item}`))}

## Métricas para conferir
${list(skill.metrics.map((metric) => `[ ] ${metric}`))}

## Critério de pronto
- A recomendação está ligada a uma métrica.
- A mudança tem dono, prazo e forma de validação.
- O impacto esperado está documentado antes da publicação.
`;
}

function examplesMarkdown(skill) {
  return `# Exemplos - ${skill.name}

## SaaS B2B
${skill.examples.saas}

Aplicação prática:
- Página alvo: homepage, pricing ou demo.
- Conversão: demo, trial ou contato comercial.
- Evento recomendado: generate_lead, sign_up, select_plan ou CTA click.

## E-commerce
${skill.examples.ecommerce}

Aplicação prática:
- Página alvo: produto, categoria, carrinho ou checkout.
- Conversão: add_to_cart, begin_checkout ou purchase.
- Evento recomendado: view_item, add_to_cart, begin_checkout, purchase.

## Infoproduto/curso online
${skill.examples.course}

Aplicação prática:
- Página alvo: captura, webinar, sales page ou checkout.
- Conversão: lead, inscrição, compra ou qualificação.
- Evento recomendado: generate_lead, webinar_signup, begin_checkout, purchase.

## Anti-padrões comuns
- Aplicar mudança sem baseline.
- Copiar benchmark sem adaptar ao nicho.
- Trocar copy ou layout sem medir evento específico.
- Otimizar estética sacrificando clareza, acessibilidade ou velocidade.
`;
}

function assetsMarkdown(skill) {
  return `# Assets recomendados - ${skill.name}

## Tipos de assets
${list(skill.assets)}

## Termos de busca seguros
- "high converting landing page ${skill.area.toLowerCase()} interface"
- "business website ${skill.area.toLowerCase()} clean ui"
- "saas dashboard screenshot generic no logo"
- "ecommerce product photography white background"
- "lead form website mockup clean"

## Fontes permissivas recomendadas
- Unsplash: verificar se a imagem não implica endorsement de pessoa, marca ou produto.
- Pexels: uso comercial permitido, mas evitar pessoas identificáveis em contexto sensível.
- Pixabay: verificar restrições para marcas, logos e redistribuição.
- Openverse: preferir CC0, CC BY ou domínio público e registrar atribuição.

## Metadados obrigatórios
- Nome do arquivo.
- URL de origem.
- Autor.
- Licença.
- Termo de busca usado.
- Skill relacionada.
- Uso sugerido.
- Data de acesso.

## Prompt alternativo de geração
Crie uma imagem para ${skill.name} em estilo editorial moderno, sem marcas, sem logos, sem pessoas identificáveis, com fundo limpo, iluminação natural, espaço para texto e proporção 16:9 para desktop e 4:5 para mobile.
`;
}

function promptsMarkdown(skill) {
  return `# Prompts - ${skill.name}

## Prompt de auditoria
Você é especialista em ${skill.name}. Audite a página abaixo com foco em ${skill.metrics.join(", ")}. Gere achados priorizados, impacto esperado, esforço, evidência necessária e próximos passos.

## Prompt de implementação
Use a skill ${skill.name} para implementar melhorias em um projeto Next.js/React/Tailwind. Preserve padrões existentes, gere componentes acessíveis e adicione eventos de analytics quando aplicável.

## Prompt de nicho SaaS B2B
Adapte ${skill.name} para SaaS B2B com foco em demo/trial. Use prova social B2B, objeções de risco, segurança, integração e ROI.

## Prompt de nicho E-commerce
Adapte ${skill.name} para e-commerce com foco em add-to-cart, checkout e compra. Priorize imagens, frete, troca, reviews, preço e confiança.

## Prompt de nicho Infoproduto
Adapte ${skill.name} para curso online com foco em lead e venda. Priorize transformação, autoridade, módulos, garantia, bônus e urgência ética.

## Prompts específicos
${list(skill.prompts)}
`;
}

const templates = [
  {
    file: "landing-page-template.md",
    title: "Landing page de alta conversão",
    goal: "Converter tráfego de campanha em lead, demo, compra ou inscrição.",
    sections: ["Hero com promessa e CTA", "Prova curta", "Problema e consequência", "Solução e mecanismo", "Benefícios", "Social proof", "Oferta", "FAQ", "CTA final"],
    copy: "Pare de perder leads por páginas lentas e genéricas. Lance uma landing clara, rápida e mensurável em poucos dias.",
    metrics: ["conversion_rate", "CTA_click_rate", "form_submit_rate", "CPL", "scroll_depth"]
  },
  {
    file: "homepage-template.md",
    title: "Página inicial de SaaS",
    goal: "Explicar o produto, direcionar para demo/trial e qualificar visitantes.",
    sections: ["Hero segmentado", "Logos", "Problemas", "Workflow", "Features", "Casos de uso", "Pricing teaser", "FAQ", "Footer"],
    copy: "Centralize o trabalho do seu time e veja gargalos antes que eles virem custo.",
    metrics: ["demo_click_rate", "trial_start_rate", "qualified_leads", "scroll_depth"]
  },
  {
    file: "product-page-template.md",
    title: "Página de produto e-commerce",
    goal: "Aumentar add-to-cart e compra com informação completa e confiança.",
    sections: ["Galeria", "Buy box", "Variações", "Frete e troca", "Descrição", "Specs", "Reviews", "Relacionados", "FAQ"],
    copy: "Produto pronto para envio, com troca simples e suporte antes da compra.",
    metrics: ["add_to_cart_rate", "begin_checkout_rate", "purchase_rate", "return_rate"]
  },
  {
    file: "checkout-page-template.md",
    title: "Página de checkout otimizada",
    goal: "Reduzir abandono e completar pagamento com clareza.",
    sections: ["Resumo do pedido", "Contato", "Entrega", "Pagamento", "Cupom discreto", "Garantia", "CTA final", "Suporte"],
    copy: "Revise seu pedido. Frete, prazo e pagamento aparecem antes de finalizar.",
    metrics: ["checkout_completion_rate", "cart_abandonment_rate", "payment_error_rate", "AOV"]
  },
  {
    file: "lead-capture-page-template.md",
    title: "Página de captura de leads",
    goal: "Capturar leads qualificados com isca clara e formulário sem fricção.",
    sections: ["Hero da isca", "O que recebe", "Para quem é", "Formulário", "Prova", "Privacidade", "FAQ"],
    copy: "Receba o checklist que mostra onde sua página perde conversão hoje.",
    metrics: ["form_start_rate", "form_submit_rate", "lead_quality", "email_confirm_rate"]
  },
  {
    file: "pricing-page-template.md",
    title: "Página de pricing",
    goal: "Ajudar o usuário a escolher plano e iniciar compra ou conversa.",
    sections: ["Resumo de valor", "Tabela de planos", "Plano recomendado", "Comparativo", "FAQ", "Garantia", "CTA final"],
    copy: "Escolha o plano pelo tamanho do seu time. Troque ou cancele quando precisar.",
    metrics: ["select_plan_rate", "trial_start_rate", "sales_contact_rate", "ARPU"]
  },
  {
    file: "case-study-testimonials-template.md",
    title: "Página de case study/depoimentos",
    goal: "Converter céticos com prova específica e narrativa de transformação.",
    sections: ["Resumo do resultado", "Contexto", "Problema", "Solução", "Métricas", "Depoimento", "Como replicar", "CTA"],
    copy: "Veja como uma equipe reduziu o tempo de fechamento em 38% sem aumentar o time.",
    metrics: ["case_CTA_click_rate", "assisted_conversion_rate", "time_on_page"]
  }
];

function templateMarkdown(template) {
  return `# ${template.title}

## Objetivo
${template.goal}

## Estrutura da página
${template.sections.map((section, index) => `${index + 1}. ${section} - conduzir o usuário para a próxima decisão.`).join("\n")}

## Componentes recomendados
- HeroSection
- CTASection
- SocialProof
- TestimonialGrid
- FAQSection
- ConversionFooter

## Texto exemplo
${template.copy}

## Regras de UX
- Uma ação principal por tela.
- Texto legível em 390px.
- CTA com alvo mínimo de 44px.
- Prova social antes de pedidos de alto compromisso.
- Erros e estados vazios com instrução concreta.

## Regras de copy
- Headline específica.
- Benefício antes de feature.
- Prova antes de urgência.
- CTA orientado a resultado.
- FAQ baseado em objeções reais.

## Métricas a acompanhar
${list(template.metrics)}

## Sugestões de imagens
- Hero informativo, não decorativo.
- Screenshot real para SaaS.
- Produto em fundo claro para e-commerce.
- Foto contextual permissiva para cursos, sem endorsement implícito.
`;
}

const workflows = [
  {
    file: "cro-audit-workflow.md",
    title: "Auditoria automática de CRO",
    steps: ["Coletar páginas críticas", "Capturar screenshots desktop/mobile", "Extrair CTAs, forms e links", "Mapear eventos existentes", "Comparar com checklist das 20 skills", "Gerar backlog ICE"]
  },
  {
    file: "seo-audit-workflow.md",
    title: "Auditoria automática de SEO",
    steps: ["Crawlear URLs", "Validar title/meta/H1", "Checar canonical e sitemap", "Auditar structured data", "Mapear intenção e CTA", "Gerar plano de correção"]
  },
  {
    file: "performance-audit-workflow.md",
    title: "Auditoria automática de performance",
    steps: ["Rodar Lighthouse/PageSpeed", "Identificar LCP element", "Listar scripts terceiros", "Auditar imagens", "Gerar performance budget", "Criar tarefas por impacto"]
  },
  {
    file: "image-search-workflow.md",
    title: "Busca e organização automática de imagens",
    steps: ["Definir função da imagem", "Buscar Unsplash/Pexels/Pixabay/Openverse", "Verificar licença", "Salvar metadados", "Baixar apenas candidatos seguros", "Gerar prompts alternativos"]
  },
  {
    file: "asset-optimization-workflow.md",
    title: "Otimização automática de assets",
    steps: ["Inventariar imagens", "Redimensionar por breakpoint", "Converter para WebP/AVIF", "Gerar blur/poster se necessário", "Criar alt text", "Atualizar manifesto"]
  },
  {
    file: "landing-page-generation-workflow.md",
    title: "Geração automática de landing page",
    steps: ["Selecionar template", "Coletar oferta/persona/prova", "Gerar wireframe", "Criar copy", "Gerar componentes", "Instrumentar analytics", "Validar mobile"]
  },
  {
    file: "copy-generation-workflow.md",
    title: "Geração automática de copy",
    steps: ["Coletar voz do cliente", "Mapear objeções", "Criar promessa", "Gerar headlines e CTAs", "Criar FAQ", "Preparar variações para teste"]
  },
  {
    file: "analytics-events-setup-workflow.md",
    title: "Setup automático de eventos de analytics",
    steps: ["Mapear funil", "Escolher eventos GA4 recomendados", "Criar dataLayer contract", "Implementar helpers TypeScript", "Validar debug", "Documentar dicionário"]
  },
  {
    file: "ab-testing-workflow.md",
    title: "Planejamento automático de testes A/B",
    steps: ["Criar hipótese", "Definir métrica primária", "Estimar amostra", "Criar variações", "Configurar feature flag", "QA e monitoramento", "Registrar decisão"]
  }
];

function workflowMarkdown(workflow) {
  return `# ${workflow.title}

## Objetivo
Executar ${workflow.title.toLowerCase()} de forma repetível, rastreável e acionável.

## Pré-requisitos
- URL ou projeto local.
- Objetivo de conversão.
- Acesso a código, analytics ou export de dados quando necessário.
- Ambiente para salvar relatórios.

## Passos
${workflow.steps.map((step, index) => `${index + 1}. ${step}.`).join("\n")}

## Saídas
- Relatório Markdown.
- Lista de tarefas priorizadas.
- Evidências com links, screenshots ou métricas.
- Critério de pronto por tarefa.

## Automação com Codex
Peça ao agente: "Execute ${workflow.title.toLowerCase()} neste projeto, salve relatório em /reports e aplique correções de baixo risco automaticamente".
`;
}

const imageSources = [
  {
    file: "saas-dashboard-hero.webp",
    url: "https://unsplash.com/s/photos/saas-dashboard",
    author: "Vários autores Unsplash, escolher no download",
    license: "Unsplash License, uso comercial permitido com restrições",
    search: "saas dashboard workspace clean",
    skill: "Hero Section Optimization",
    use: "Hero SaaS ou seção de produto. Baixar apenas imagem sem marcas reconhecíveis."
  },
  {
    file: "ecommerce-product-white-background.webp",
    url: "https://www.pexels.com/search/product%20white%20background/",
    author: "Vários autores Pexels, escolher no download",
    license: "Pexels License, uso comercial permitido com restrições",
    search: "product white background ecommerce",
    skill: "Product Page Optimization",
    use: "Exemplo de PDP e card de produto."
  },
  {
    file: "checkout-payment-desk.webp",
    url: "https://www.pexels.com/search/online%20payment/",
    author: "Vários autores Pexels, escolher no download",
    license: "Pexels License, uso comercial permitido com restrições",
    search: "online payment checkout laptop",
    skill: "Checkout Optimization",
    use: "Banner educativo de checkout, evitando marcas de cartão visíveis."
  },
  {
    file: "team-testimonial.webp",
    url: "https://unsplash.com/s/photos/team-business-meeting",
    author: "Vários autores Unsplash, escolher no download",
    license: "Unsplash License, uso comercial permitido com restrições",
    search: "team business meeting no logo",
    skill: "Trust Signals and Social Proof",
    use: "Imagem de case study, com cuidado para não implicar endorsement."
  },
  {
    file: "lead-capture-form-abstract.webp",
    url: "https://openverse.org/search/image?q=form%20website%20interface",
    author: "Conforme obra selecionada",
    license: "Creative Commons ou domínio público, verificar obra individual",
    search: "form website interface",
    skill: "Forms and Lead Capture",
    use: "Referência visual de formulário, baixar somente com licença verificada."
  }
];

function imageSourcesMarkdown() {
  const rows = imageSources.map((item) => `| ${item.file} | ${item.url} | ${item.author} | ${item.license} | ${item.search} | ${item.skill} | ${item.use} |`).join("\n");
  return `# Image Sources

Nenhum arquivo fotográfico binário foi baixado automaticamente nesta geração, porque as APIs públicas sem chave não retornaram metadados de autor/licença com segurança suficiente para uso comercial. Em vez disso, este pacote documenta fontes permitidas, termos de busca e prompts alternativos. Baixe somente depois de verificar a página individual da imagem.

| Nome do arquivo planejado | URL | Autor | Licença | Termo de busca | Skill relacionada | Uso sugerido |
|---|---|---|---|---|---|---|
${rows}

## Prompt alternativo geral
Imagem editorial moderna para site de alta conversão, sem logos, sem marcas reconhecíveis, sem pessoas identificáveis em contexto sensível, iluminação natural, fundo limpo, espaço para texto, composição premium, versões 16:9 desktop e 4:5 mobile.

## Regras legais
- Registrar URL final da imagem, autor, licença e data de acesso.
- Não usar foto com marca, celebridade, rosto identificável ou produto protegido quando o uso sugerir endorsement.
- Preferir imagens próprias, screenshots reais do produto ou assets gerados especificamente para a marca.
`;
}

function sourcesReport() {
  return `# Fontes usadas

${sources.map((source) => `## ${source.name}\n- URL: ${source.url}\n- Uso no pacote: ${source.use}`).join("\n\n")}
`;
}

function summaryReport() {
  const rows = skills.map((skill) => `| ${skill.rank} | ${skill.name} | ${skill.area} | Alto | ${skill.rank <= 5 ? "Média" : skill.rank <= 14 ? "Média/Alta" : "Alta"} | ${skill.metrics.join(", ")} | ${skill.rank <= 8 ? "P0" : skill.rank <= 15 ? "P1" : "P2"} |`).join("\n");
  return `# Ranking das 20 skills

| Rank | Skill | Área | Impacto esperado | Automação possível | Métricas afetadas | Prioridade |
|---:|---|---|---|---|---|---|
${rows}

## Por que foram escolhidas
As 20 skills cobrem o caminho completo de conversão: estratégia, pesquisa, arquitetura, copy, UI, formulários, prova, pricing, checkout, produto, mobile, performance, SEO, acessibilidade, analytics, experimentação, assets e design system. Foram priorizadas por impacto direto em CTR, leads, vendas, abandono, velocidade e capacidade de automação em stacks modernas.

## Grau de dificuldade
- Baixo: CTA, copy pontual, trust badges e ajustes de imagem.
- Médio: landing architecture, forms, mobile UX, SEO e product pages.
- Alto: checkout, analytics, experimentação e performance sistêmica.

## Grau de automação
- Alto para auditorias, checklists, templates, geração de componentes e eventos.
- Médio para pesquisa UX e copy, pois exigem evidências do público.
- Baixo para decisões legais/licenciamento final, que exigem validação humana.
`;
}

function roadmapReport() {
  return `# Implementation Roadmap

## Plano de 7 dias
1. Dia 1: Definir CRO Strategy, métricas e baseline.
2. Dia 2: Auditar Landing Page Architecture, Hero e CTA.
3. Dia 3: Corrigir Forms, Trust Signals e Mobile-First UX.
4. Dia 4: Auditar Performance/Core Web Vitals e imagens.
5. Dia 5: Implementar Analytics/Event Tracking.
6. Dia 6: Aplicar SEO for Conversion e structured data.
7. Dia 7: Criar backlog de A/B Testing e documentação.

## Plano de 30 dias
1. Semana 1: Auditoria completa, quick wins e instrumentação.
2. Semana 2: Redesign de páginas críticas com componentes do pacote.
3. Semana 3: Otimização de produto/pricing/checkout e performance.
4. Semana 4: Experimentos, análise de resultados e design system versionado.

## Ordem ideal para projeto novo
1. CRO Strategy.
2. UX Research.
3. Landing Page Architecture.
4. Conversion Copywriting.
5. Design System for Conversion.
6. Componentes e templates.
7. Analytics/Event Tracking.
8. Performance, SEO e Accessibility.
9. A/B Testing.

## Ordem ideal para site existente
1. Analytics/Event Tracking.
2. CRO audit.
3. Performance/Core Web Vitals.
4. Hero, CTA, Forms e Trust.
5. Product/Pricing/Checkout conforme tipo de negócio.
6. SEO for Conversion.
7. Experimentation.
`;
}

function readme() {
  return `# high-conversion-website-skills

Pacote prático para criar e otimizar sites de alta conversão com skills, checklists, templates, workflows, fontes e componentes React/Next.js + Tailwind.

## Como usar as skills
1. Escolha a skill mais próxima do problema atual.
2. Leia o SKILL.md para entender objetivo, inputs e outputs.
3. Use checklist.md para execução.
4. Use prompts.md para delegar a um agente ou LLM.
5. Use examples.md para adaptar a SaaS B2B, e-commerce ou infoproduto.
6. Registre métricas antes e depois.

## Ordem recomendada
1. CRO Strategy
2. UX Research
3. Landing Page Architecture
4. Conversion Copywriting
5. Hero, CTA, Forms e Trust
6. Product/Pricing/Checkout quando aplicável
7. Mobile, Performance, SEO e Accessibility
8. Analytics e A/B Testing
9. Design System for Conversion

## Como adaptar por nicho
- SaaS B2B: priorize demo, trial, ROI, segurança, integrações e prova B2B.
- E-commerce: priorize imagens, preço, frete, troca, reviews, buy box e checkout.
- Infoproduto/curso: priorize transformação, autoridade, módulos, bônus, garantia e lead capture.

## Como usar com Codex
Peça: "Use a skill /high-conversion-website-skills/skills/XX-nome para auditar e implementar melhorias neste projeto". Para geração de páginas, combine templates com componentes.

## Next.js
- Copie componentes de /components.
- Use App Router, metadata, JSON-LD e next/image.
- Adicione eventos GA4 em helpers tipados.
- Rode lint, build, Lighthouse e Playwright mobile.

## WordPress/headless
- Transforme templates em blocos.
- Preserve headings, schema, campos de SEO e performance de mídia.
- Use o checklist de assets para imagens.

## Shopify
- Aplique Product Page Optimization, Checkout Optimization, SEO for Conversion e Image Optimization.
- Documente limitações do tema e apps que afetam performance.

## Webflow
- Use templates como estrutura visual.
- Adicione labels, alt text, heading order e eventos via GTM.

## HTML estático
- Use componentes como referência de markup.
- Adicione CSS responsivo, eventos e structured data manualmente.

## Cuidados legais com imagens e dados
- Não use imagens sem licença clara.
- Evite marcas, logos e pessoas identificáveis quando houver risco de endorsement.
- Documente autor, URL, licença, termo de busca e finalidade.
- Respeite consentimento, privacidade e políticas de analytics.

## Versionamento
- Versione cada skill como documentação viva.
- Registre mudanças com data, hipótese e métrica impactada.
- Não sobrescreva experimentos sem decision log.
`;
}

const components = {
  "HeroSection.tsx": `import type { ReactNode } from "react";

export type HeroSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  proof?: string[];
  media?: ReactNode;
};

export function HeroSection({ eyebrow = "Alta conversão", title, subtitle, primaryCta, secondaryCta, proof = [], media }: HeroSectionProps) {
  return (
    <section className="bg-slate-950 px-4 py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {/* CTA principal aparece cedo porque usuários de campanha decidem rápido. */}
            <a className="inline-flex min-h-12 items-center justify-center rounded-md bg-emerald-400 px-6 text-base font-bold text-slate-950 transition hover:bg-emerald-300 focus:outline-none focus:ring-4 focus:ring-emerald-200" href={primaryCta.href}>
              {primaryCta.label}
            </a>
            {secondaryCta ? (
              <a className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/25 px-6 text-base font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/25" href={secondaryCta.href}>
                {secondaryCta.label}
              </a>
            ) : null}
          </div>
          {proof.length ? (
            <ul className="mt-7 grid gap-2 text-sm text-slate-300 sm:grid-cols-3">
              {proof.map((item) => <li key={item} className="rounded-md bg-white/10 px-3 py-2">{item}</li>)}
            </ul>
          ) : null}
        </div>
        {media ? <div className="rounded-lg bg-white/5 p-3 ring-1 ring-white/10">{media}</div> : null}
      </div>
    </section>
  );
}

export function HeroSectionExample() {
  return <HeroSection title="Converta mais visitantes em clientes" subtitle="Uma página rápida, clara e mensurável para campanhas que precisam gerar resultado." primaryCta={{ label: "Quero otimizar meu site", href: "#lead" }} secondaryCta={{ label: "Ver exemplos", href: "#proof" }} proof={["Setup em 7 dias", "Eventos GA4", "Mobile-first"]} />;
}
`,
  "CTASection.tsx": `export type CTASectionProps = {
  title: string;
  description: string;
  cta: { label: string; href: string };
  note?: string;
};

export function CTASection({ title, description, cta, note = "Sem compromisso. Resposta em até 1 dia útil." }: CTASectionProps) {
  return (
    <section className="px-4 py-14">
      <div className="mx-auto max-w-5xl rounded-lg bg-slate-900 p-6 text-center text-white sm:p-10">
        <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-300">{description}</p>
        {/* Microcopy reduz ansiedade antes do clique. */}
        <a className="mt-7 inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 font-bold text-slate-950 hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-white/40" href={cta.href}>
          {cta.label}
        </a>
        <p className="mt-3 text-sm text-slate-400">{note}</p>
      </div>
    </section>
  );
}

export function CTASectionExample() {
  return <CTASection title="Pronto para encontrar seus gargalos?" description="Receba uma auditoria objetiva com prioridades de conversão, SEO e performance." cta={{ label: "Solicitar auditoria", href: "#form" }} />;
}
`,
  "SocialProof.tsx": `export type SocialProofProps = {
  logos?: string[];
  stats?: Array<{ value: string; label: string }>;
};

export function SocialProof({ logos = ["Acme", "Northstar", "Orbit"], stats = [] }: SocialProofProps) {
  return (
    <section id="proof" className="px-4 py-10" aria-labelledby="social-proof-title">
      <div className="mx-auto max-w-6xl">
        <h2 id="social-proof-title" className="text-center text-sm font-semibold uppercase tracking-wide text-slate-500">Usado por equipes que medem conversão</h2>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {logos.map((logo) => <div key={logo} className="rounded-md border border-slate-200 bg-white px-4 py-4 text-center font-bold text-slate-700">{logo}</div>)}
        </div>
        {stats.length ? (
          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-lg bg-slate-50 p-5 text-center">
                <dt className="text-sm text-slate-600">{stat.label}</dt>
                <dd className="mt-1 text-3xl font-bold text-slate-950">{stat.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  );
}

export function SocialProofExample() {
  return <SocialProof stats={[{ value: "+18%", label: "lift em leads" }, { value: "2.1s", label: "LCP mobile" }, { value: "7 dias", label: "primeiro sprint" }]} />;
}
`,
  "PricingTable.tsx": `export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  highlighted?: boolean;
};

export function PricingTable({ plans }: { plans: PricingPlan[] }) {
  return (
    <section className="px-4 py-14" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-6xl">
        <h2 id="pricing-title" className="text-3xl font-bold text-slate-950">Planos claros para decisões rápidas</h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className={\`rounded-lg border p-6 \${plan.highlighted ? "border-emerald-500 bg-emerald-50 shadow-lg" : "border-slate-200 bg-white"}\`}>
              {plan.highlighted ? <p className="mb-3 text-sm font-bold text-emerald-700">Mais escolhido</p> : null}
              <h3 className="text-xl font-bold text-slate-950">{plan.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{plan.description}</p>
              <p className="mt-5 text-4xl font-bold text-slate-950">{plan.price}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {plan.features.map((feature) => <li key={feature}>✓ {feature}</li>)}
              </ul>
              {/* CTA por plano permite medir intenção e mix de planos. */}
              <a className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-slate-950 px-4 font-bold text-white hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300" href={plan.cta.href}>
                {plan.cta.label}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingTableExample() {
  return <PricingTable plans={[{ name: "Start", price: "R$ 990", description: "Para validar uma landing.", features: ["1 página", "Eventos básicos", "Checklist CRO"], cta: { label: "Começar", href: "#lead" } }, { name: "Growth", price: "R$ 2.900", description: "Para otimizar funil completo.", features: ["3 páginas", "GA4", "Teste A/B"], cta: { label: "Escolher Growth", href: "#lead" }, highlighted: true }, { name: "Scale", price: "Sob consulta", description: "Para times com múltiplas páginas.", features: ["Design system", "Roadmap", "QA contínuo"], cta: { label: "Falar com especialista", href: "#lead" } }]} />;
}
`,
  "LeadCaptureForm.tsx": `"use client";

export type LeadCaptureFormProps = {
  title?: string;
  description?: string;
  onSubmit?: (data: { name: string; email: string; company: string }) => void;
};

export function LeadCaptureForm({ title = "Receba a auditoria de conversão", description = "Informe seus dados e enviaremos prioridades acionáveis para o seu site.", onSubmit }: LeadCaptureFormProps) {
  return (
    <form
      id="lead"
      className="mx-auto max-w-xl rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
      onSubmit={(event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        onSubmit?.({ name: String(form.get("name") || ""), email: String(form.get("email") || ""), company: String(form.get("company") || "") });
      }}
    >
      <h2 className="text-2xl font-bold text-slate-950">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      <div className="mt-5 grid gap-3">
        <label className="text-sm font-semibold text-slate-700">Nome<input name="name" required autoComplete="name" className="mt-1 h-12 w-full rounded-md border border-slate-300 px-3 focus:outline-none focus:ring-4 focus:ring-emerald-100" /></label>
        <label className="text-sm font-semibold text-slate-700">E-mail profissional<input name="email" required type="email" autoComplete="email" className="mt-1 h-12 w-full rounded-md border border-slate-300 px-3 focus:outline-none focus:ring-4 focus:ring-emerald-100" /></label>
        <label className="text-sm font-semibold text-slate-700">Empresa<input name="company" autoComplete="organization" className="mt-1 h-12 w-full rounded-md border border-slate-300 px-3 focus:outline-none focus:ring-4 focus:ring-emerald-100" /></label>
      </div>
      {/* Campos mínimos melhoram envio; qualificação pode continuar após o lead. */}
      <button className="mt-5 min-h-12 w-full rounded-md bg-emerald-600 px-4 font-bold text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200" type="submit">
        Quero receber a auditoria
      </button>
      <p className="mt-3 text-xs leading-5 text-slate-500">Sem spam. Usaremos seus dados apenas para responder esta solicitação.</p>
    </form>
  );
}

export function LeadCaptureFormExample() {
  return <LeadCaptureForm onSubmit={(data) => console.log("generate_lead", data)} />;
}
`,
  "TestimonialGrid.tsx": `export type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  result?: string;
};

export function TestimonialGrid({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="px-4 py-14" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-6xl">
        <h2 id="testimonials-title" className="text-3xl font-bold text-slate-950">Prova social com contexto</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.name} className="rounded-lg border border-slate-200 bg-white p-5">
              {item.result ? <p className="mb-4 text-sm font-bold text-emerald-700">{item.result}</p> : null}
              <blockquote className="text-base leading-7 text-slate-700">“{item.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-slate-950">{item.name}{item.role ? <span className="block font-normal text-slate-500">{item.role}</span> : null}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialGridExample() {
  return <TestimonialGrid testimonials={[{ quote: "A página ficou mais clara e os leads passaram a chegar com contexto.", name: "Marina Alves", role: "Head de Growth", result: "+22% em leads" }, { quote: "O checkout ficou mais simples de explicar para clientes mobile.", name: "João Lima", role: "E-commerce Manager" }, { quote: "Agora sabemos quais CTAs funcionam por canal.", name: "Renata Costa", role: "CMO" }]} />;
}
`,
  "FAQSection.tsx": `export type FAQItem = { question: string; answer: string };

export function FAQSection({ items }: { items: FAQItem[] }) {
  return (
    <section className="px-4 py-14" aria-labelledby="faq-title">
      <div className="mx-auto max-w-3xl">
        <h2 id="faq-title" className="text-3xl font-bold text-slate-950">Perguntas frequentes</h2>
        <div className="mt-6 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
          {items.map((item) => (
            <details key={item.question} className="group p-5">
              {/* FAQ remove objeções sem alongar a seção de venda. */}
              <summary className="cursor-pointer text-base font-bold text-slate-950 focus:outline-none focus:ring-4 focus:ring-emerald-100">{item.question}</summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSectionExample() {
  return <FAQSection items={[{ question: "Quanto tempo leva?", answer: "O primeiro sprint pode ser concluído em 7 dias quando os acessos e dados estão disponíveis." }, { question: "Vocês implementam ou só auditam?", answer: "O pacote foi pensado para auditar, priorizar e implementar componentes reutilizáveis." }]} />;
}
`,
  "CheckoutSummary.tsx": `export type CheckoutLine = { label: string; value: string };

export function CheckoutSummary({ lines, total, ctaLabel = "Finalizar pedido" }: { lines: CheckoutLine[]; total: string; ctaLabel?: string }) {
  return (
    <aside className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" aria-labelledby="checkout-summary-title">
      <h2 id="checkout-summary-title" className="text-xl font-bold text-slate-950">Resumo do pedido</h2>
      <dl className="mt-4 space-y-3">
        {lines.map((line) => (
          <div key={line.label} className="flex justify-between gap-4 text-sm">
            <dt className="text-slate-600">{line.label}</dt>
            <dd className="font-semibold text-slate-950">{line.value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-4 flex justify-between border-t border-slate-200 pt-4 text-lg font-bold text-slate-950">
        <span>Total</span>
        <span>{total}</span>
      </div>
      {/* Resumo persistente reduz surpresa de custo no checkout. */}
      <button className="mt-5 min-h-12 w-full rounded-md bg-slate-950 px-4 font-bold text-white hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300" type="button">
        {ctaLabel}
      </button>
      <p className="mt-3 text-xs leading-5 text-slate-500">Pagamento seguro. Você revisa tudo antes da confirmação.</p>
    </aside>
  );
}

export function CheckoutSummaryExample() {
  return <CheckoutSummary lines={[{ label: "Produto", value: "R$ 199" }, { label: "Frete", value: "Grátis" }]} total="R$ 199" />;
}
`,
  "ProductFeatureGrid.tsx": `export type ProductFeature = { title: string; description: string };

export function ProductFeatureGrid({ features }: { features: ProductFeature[] }) {
  return (
    <section className="px-4 py-14" aria-labelledby="features-title">
      <div className="mx-auto max-w-6xl">
        <h2 id="features-title" className="text-3xl font-bold text-slate-950">Benefícios que removem dúvida</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="mb-4 h-2 w-12 rounded-full bg-emerald-500" aria-hidden="true" />
              <h3 className="text-lg font-bold text-slate-950">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductFeatureGridExample() {
  return <ProductFeatureGrid features={[{ title: "Mais rápido", description: "Componentes prontos reduzem tempo de publicação." }, { title: "Mensurável", description: "Eventos e métricas são definidos antes do lançamento." }, { title: "Acessível", description: "Labels, foco e contraste entram no fluxo padrão." }]} />;
}
`,
  "ConversionFooter.tsx": `export type ConversionFooterProps = {
  brand: string;
  links?: Array<{ label: string; href: string }>;
  cta?: { label: string; href: string };
};

export function ConversionFooter({ brand, links = [], cta }: ConversionFooterProps) {
  return (
    <footer className="bg-slate-950 px-4 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-bold">{brand}</p>
          <p className="mt-1 text-sm text-slate-400">Clareza, velocidade e confiança para converter melhor.</p>
        </div>
        <nav aria-label="Links do rodapé" className="flex flex-wrap gap-4 text-sm text-slate-300">
          {links.map((link) => <a key={link.href} className="hover:text-white focus:outline-none focus:ring-4 focus:ring-white/20" href={link.href}>{link.label}</a>)}
        </nav>
        {cta ? <a className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-4 font-bold text-slate-950 hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-white/30" href={cta.href}>{cta.label}</a> : null}
      </div>
    </footer>
  );
}

export function ConversionFooterExample() {
  return <ConversionFooter brand="Growth Site" links={[{ label: "Privacidade", href: "/privacidade" }, { label: "Contato", href: "/contato" }]} cta={{ label: "Falar com especialista", href: "#lead" }} />;
}
`
};

async function write(p, content) {
  await mkdir(path.dirname(p), { recursive: true });
  await writeFile(p, content.trimStart(), "utf8");
}

async function main() {
  await rm(root, { recursive: true, force: true });
  await mkdir(root, { recursive: true });
  await mkdir(path.join(root, "assets/images"), { recursive: true });
  await mkdir(path.join(root, "assets/icons"), { recursive: true });
  await mkdir(path.join(root, "assets/references"), { recursive: true });

  for (const skill of skills) {
    const dir = path.join(root, "skills", skill.slug);
    await write(path.join(dir, "SKILL.md"), skillMarkdown(skill));
    await write(path.join(dir, "checklist.md"), checklistMarkdown(skill));
    await write(path.join(dir, "examples.md"), examplesMarkdown(skill));
    await write(path.join(dir, "assets.md"), assetsMarkdown(skill));
    await write(path.join(dir, "prompts.md"), promptsMarkdown(skill));
  }

  for (const template of templates) await write(path.join(root, "templates", template.file), templateMarkdown(template));
  for (const workflow of workflows) await write(path.join(root, "automation", workflow.file), workflowMarkdown(workflow));
  for (const [file, content] of Object.entries(components)) await write(path.join(root, "components", file), content);

  await write(path.join(root, "README.md"), readme());
  await write(path.join(root, "reports/top-20-skills-summary.md"), summaryReport());
  await write(path.join(root, "reports/sources.md"), sourcesReport());
  await write(path.join(root, "reports/implementation-roadmap.md"), roadmapReport());
  await write(path.join(root, "assets/references/image-sources.md"), imageSourcesMarkdown());
  await write(path.join(root, "assets/images/ai-image-prompts.md"), `# AI image prompts\n\n${imageSources.map((item) => `## ${item.file}\nPrompt: Crie uma imagem para ${item.use.toLowerCase()} Estilo premium, realista, sem logos, sem marcas reconhecíveis, sem pessoas identificáveis em contexto sensível, iluminação natural, composição limpa.\n`).join("\n")}`);
  await write(path.join(root, "assets/icons/conversion-icons.svg"), `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="80" viewBox="0 0 320 80" role="img" aria-labelledby="title desc"><title id="title">Conversion icons</title><desc id="desc">Original simple line icons for trust, performance, analytics and testing.</desc><g fill="none" stroke="#0f172a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M24 42l10 10 22-26"/><rect x="12" y="14" width="56" height="52" rx="8"/><path d="M104 54V28m18 26V18m18 36V38"/><rect x="92" y="12" width="60" height="56" rx="8"/><path d="M188 54l14-14 12 9 20-26"/><circle cx="188" cy="54" r="4"/><circle cx="202" cy="40" r="4"/><circle cx="214" cy="49" r="4"/><circle cx="234" cy="23" r="4"/><rect x="176" y="12" width="72" height="56" rx="8"/><path d="M280 24h28M280 40h20M280 56h12"/><rect x="268" y="12" width="40" height="56" rx="8"/></g></svg>`);
  await write(path.join(root, "assets/references/asset-license-policy.md"), `# Asset License Policy\n\n- Use only assets with clear commercial permission.\n- Store source URL, author, license, search term, purpose and access date.\n- Avoid recognizable brands, logos and people when the image could imply endorsement.\n- Prefer original screenshots, original product photography or generated assets for final commercial work.\n- Verify individual Openverse results because license metadata can be inaccurate.`);
}

main();
