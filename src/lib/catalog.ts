export const storeName = process.env.NEXT_PUBLIC_STORE_NAME || "Mundo das Importadas";
export const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5500000000000";

export const categories = [
  { slug: "pronta-entrega", label: "Pronta Entrega", description: "Camisas com envio rapido no Brasil." },
  { slug: "brasileirao", label: "Brasileirão", description: "Clubes brasileiros por estado e regiao." },
  { slug: "europa", label: "Europa", description: "Premier League, La Liga, Serie A, Ligue 1 e mais." },
  { slug: "selecoes", label: "Seleções", description: "Modelos de selecoes das Americas, Europa, Asia e Africa." },
  { slug: "resto-do-mundo", label: "Resto do Mundo", description: "MLS, Arabias, Asia, Libertadores e outros mercados." },
  { slug: "femininas", label: "Femininas", description: "Modelagens femininas nacionais e internacionais." },
  { slug: "infantil", label: "Infantil", description: "Kits e camisas para pequenos torcedores." },
  { slug: "promocoes", label: "Promoções", description: "Ofertas com desconto e frete gratis." },
  { slug: "personalizaveis", label: "Personalizáveis", description: "Camisas com nome e numero opcionais." }
];

export const megaMenu = [
  {
    label: "Brasileirão",
    slug: "brasileirao",
    groups: [
      { title: "São Paulo", links: ["Corinthians", "Palmeiras", "Santos", "São Paulo", "Bragantino"] },
      { title: "Rio de Janeiro", links: ["Flamengo", "Fluminense", "Botafogo", "Vasco"] },
      { title: "Minas e Sul", links: ["Atlético Mineiro", "Cruzeiro", "Grêmio", "Internacional", "Athletico"] },
      { title: "Norte e Nordeste", links: ["Bahia", "Fortaleza", "Ceará", "Sport", "Paysandu", "Remo"] }
    ]
  },
  {
    label: "Europa",
    slug: "europa",
    groups: [
      { title: "Premier League", links: ["Arsenal", "Chelsea", "Liverpool", "Manchester City", "Manchester United", "Tottenham"] },
      { title: "La Liga", links: ["Barcelona", "Real Madrid", "Atlético de Madrid", "Sevilla", "Valencia"] },
      { title: "Serie A", links: ["Inter de Milão", "Milan", "Napoli", "Juventus", "Roma"] },
      { title: "Outras Ligas", links: ["Paris", "Benfica", "Porto", "Ajax", "Celtic", "Birmingham"] }
    ]
  },
  {
    label: "Seleções",
    slug: "selecoes",
    groups: [
      { title: "Américas", links: ["Brasil", "Argentina", "Uruguai", "Colômbia", "México", "Estados Unidos"] },
      { title: "Europa", links: ["Portugal", "França", "Espanha", "Inglaterra", "Alemanha", "Itália"] },
      { title: "Ásia e África", links: ["Japão", "Coreia do Sul", "Marrocos", "Nigéria", "Senegal"] }
    ]
  },
  {
    label: "Resto do Mundo",
    slug: "resto-do-mundo",
    groups: [
      { title: "Arábias", links: ["Al-Hilal", "Al-Nassr", "Al-Ittihad"] },
      { title: "MLS", links: ["Inter Miami", "LA Galaxy", "Seattle", "Atlanta United"] },
      { title: "Libertadores", links: ["Boca Juniors", "River Plate", "Colo-Colo", "Monterrey"] }
    ]
  }
];
