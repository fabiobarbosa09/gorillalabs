import { mediaAssets } from "@/lib/media-assets";

type ServiceConfig = {
  slug: keyof typeof mediaAssets.services;
  name: string;
  description: string;
  accent: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
};

type ClientConfig = {
  slug: string;
  name: string;
  logo: string | null;
  logoAlt: string;
};

const services: readonly ServiceConfig[] = [
  {
    slug: "automation",
    name: "Automa\u00e7\u00e3o de IA",
    description: "Fluxos inteligentes para acelerar atendimento, marketing, opera\u00e7\u00e3o e relacionamento com leads.",
    accent: "Playbooks, automa\u00e7\u00f5es e agentes com foco pr\u00e1tico.",
    image: mediaAssets.services.automation,
    imageAlt: "",
    imagePosition: "center",
  },
  {
    slug: "rebrand",
    name: "Rebranding de marca",
    description: "Reposicionamento visual e verbal para transformar percep\u00e7\u00e3o, autoridade e consist\u00eancia.",
    accent: "Identidade forte para marcas que j\u00e1 cansaram do gen\u00e9rico.",
    image: mediaAssets.services.rebrand,
    imageAlt: "",
    imagePosition: "center 38%",
  },
  {
    slug: "social",
    name: "Social media",
    description: "Calend\u00e1rio, dire\u00e7\u00e3o criativa e conte\u00fado pensado para presen\u00e7a relevante e crescimento sustent\u00e1vel.",
    accent: "Conte\u00fado que conversa com audi\u00eancia e neg\u00f3cio ao mesmo tempo.",
    image: mediaAssets.services.social,
    imageAlt: "",
    imagePosition: "center",
  },
  {
    slug: "design",
    name: "Design",
    description: "Pe\u00e7as, p\u00e1ginas, criativos e experi\u00eancias digitais com acabamento premium e linguagem atual.",
    accent: "Est\u00e9tica forte sem perder clareza comercial.",
    image: mediaAssets.services.design,
    imageAlt: "",
    imagePosition: "center",
  },
  {
    slug: "video",
    name: "Edi\u00e7\u00e3o de v\u00eddeo",
    description: "Capta\u00e7\u00e3o de aten\u00e7\u00e3o com ritmo, narrativa visual e dire\u00e7\u00e3o de edi\u00e7\u00e3o voltada \u00e0 reten\u00e7\u00e3o.",
    accent: "V\u00eddeos com assinatura visual consistente e din\u00e2mica.",
    image: mediaAssets.services.video,
    imageAlt: "",
    imagePosition: "center",
  },
  {
    slug: "viral",
    name: "V\u00eddeos virais com IA",
    description: "Produ\u00e7\u00e3o e adapta\u00e7\u00e3o de criativos r\u00e1pidos com IA para testes, escala e velocidade de publica\u00e7\u00e3o.",
    accent: "Volume inteligente sem sacrificar identidade.",
    image: mediaAssets.services.viral,
    imageAlt: "",
    imagePosition: "center",
  },
  {
    slug: "traffic",
    name: "Gest\u00e3o de tr\u00e1fego",
    description: "Campanhas orientadas por dados, criatividade e leitura de inten\u00e7\u00e3o para gerar demanda qualificada.",
    accent: "Performance com dire\u00e7\u00e3o estrat\u00e9gica e ajuste fino.",
    image: mediaAssets.services.traffic,
    imageAlt: "",
    imagePosition: "center",
  },
  {
    slug: "research",
    name: "An\u00e1lise de mercado e concorrentes",
    description: "Mapeamento de cen\u00e1rio, diferencia\u00e7\u00e3o e oportunidades para tomar decis\u00f5es mais precisas.",
    accent: "Clareza competitiva antes de acelerar investimento.",
    image: mediaAssets.services.research,
    imageAlt: "",
    imagePosition: "center 32%",
  },
];

const clients: readonly ClientConfig[] = [
  {
    slug: "reserva-romanetto",
    name: "Reserva Romanetto",
    logo: mediaAssets.clientLogos.reservaRomanetto,
    logoAlt: "Logo da Reserva Romanetto.",
  },
  {
    slug: "microchip-marcapet",
    name: "Microchip Marcapet",
    logo: mediaAssets.clientLogos.microchipMarcapet,
    logoAlt: "Logo da Microchip Marcapet.",
  },
  {
    slug: "biotrat-saneamentos",
    name: "Biotrat Saneamentos",
    logo: mediaAssets.clientLogos.biotratSaneamentos,
    logoAlt: "Logo da Biotrat Saneamentos.",
  },
  {
    slug: "academia-the-best",
    name: "Academia The Best",
    logo: mediaAssets.clientLogos.academiaTheBest,
    logoAlt: "Logo da Academia The Best.",
  },
  {
    slug: "jessica-weber-advocacia",
    name: "Jessica Weber Advocacia",
    logo: mediaAssets.clientLogos.jessicaWeberAdvocacia,
    logoAlt: "Logo da Jessica Weber Advocacia.",
  },
  {
    slug: "corretora-erika-neutzling",
    name: "Corretora Erika Neutzling",
    logo: mediaAssets.clientLogos.corretoraErikaNeutzling,
    logoAlt: "Logo da Corretora Erika Neutzling.",
  },
  {
    slug: "chale-jabuti",
    name: "Chal\u00e9 Jabuti",
    logo: mediaAssets.clientLogos.chaleJabuti,
    logoAlt: "Logo do Chal\u00e9 Jabuti.",
  },
  {
    slug: "casa-de-campo-romanetto",
    name: "Casa de Campo Romanetto",
    logo: mediaAssets.clientLogos.casaDeCampoRomanetto,
    logoAlt: "Logo da Casa de Campo Romanetto.",
  },
  {
    slug: "abrase",
    name: "Abrase",
    logo: mediaAssets.clientLogos.abrase,
    logoAlt: "Logo da Abrase.",
  },
];

export const navItems = [
  { label: "Servi\u00e7os", href: "#servicos" },
  { label: "M\u00e9todo", href: "#metodo" },
  { label: "Time", href: "#time" },
  { label: "Clientes", href: "#clientes" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
] as const;

export const interestOptions = [
  "Automa\u00e7\u00e3o de IA",
  "Rebranding de marca",
  "Social media",
  "Design",
  "Edi\u00e7\u00e3o de v\u00eddeo",
  "V\u00eddeos virais com IA",
  "Gest\u00e3o de tr\u00e1fego",
  "An\u00e1lise de mercado e concorrentes",
  "Opera\u00e7\u00e3o completa",
] as const;

export const budgetOptions = [
  "At\u00e9 R$ 3 mil",
  "R$ 3 mil a R$ 10 mil",
  "R$ 10 mil a R$ 25 mil",
  "Acima de R$ 25 mil",
] as const;

export const siteConfig = {
  name: "Gorilla Labs",
  shortName: "Gorilla",
  description:
    "Ag\u00eancia de automa\u00e7\u00e3o de IA, branding, social media, design, v\u00eddeos virais, tr\u00e1fego pago e an\u00e1lise de mercado para marcas que querem crescer com clareza e velocidade.",
  hero: {
    badge: "Automa\u00e7\u00e3o de IA, branding e growth design para marcas em movimento",
    title: "A ag\u00eancia que combina IA, criatividade e performance para fazer sua marca ganhar tra\u00e7\u00e3o real.",
    description:
      "A Gorilla Labs desenha presen\u00e7a, conte\u00fado, posicionamento e opera\u00e7\u00e3o comercial com uma est\u00e9tica premium e uma mentalidade orientada por dados.",
    image: mediaAssets.hero.cinematic,
    imageAlt: "Gorila futurista em laborat\u00f3rio high-tech com interfaces hologr\u00e1ficas em roxo e azul.",
    imagePositionDesktop: "center 25%",
    imagePositionMobile: "62% 25%",
    primaryCta: "Falar no WhatsApp",
    secondaryCta: "Solicitar diagn\u00f3stico",
    pills: [
      "UX/UI futurista",
      "Criativos com IA",
      "Posicionamento de marca",
      "Aquisi\u00e7\u00e3o e an\u00e1lise",
    ],
    highlights: [
      { label: "Escopo", value: "Estrat\u00e9gia + execu\u00e7\u00e3o + otimiza\u00e7\u00e3o" },
      { label: "Modelo", value: "IA aplicada ao marketing e \u00e0 opera\u00e7\u00e3o" },
      { label: "Entrega", value: "Criativos premium com foco em convers\u00e3o" },
    ],
  },
  services,
  method: [
    {
      step: "01",
      title: "Diagn\u00f3stico",
      description: "Entendimento do neg\u00f3cio, gargalos de comunica\u00e7\u00e3o, funil e oportunidades de posicionamento.",
    },
    {
      step: "02",
      title: "Estrat\u00e9gia",
      description: "Defini\u00e7\u00e3o de mensagem, oferta, criativos, canais e prioridades de aquisi\u00e7\u00e3o.",
    },
    {
      step: "03",
      title: "Execu\u00e7\u00e3o",
      description: "Produ\u00e7\u00e3o da opera\u00e7\u00e3o visual, conte\u00fado, automa\u00e7\u00f5es e campanhas com padr\u00e3o premium.",
    },
    {
      step: "04",
      title: "Otimiza\u00e7\u00e3o",
      description: "Leitura de dados, ajuste de criativos, refino de convers\u00e3o e evolu\u00e7\u00e3o cont\u00ednua.",
    },
  ],
  founders: [
    {
      name: "Eduardo Neutzling",
      role: "S\u00f3cio propriet\u00e1rio",
      bio: "Conduz vis\u00e3o de neg\u00f3cio, posicionamento e relacionamento estrat\u00e9gico da Gorilla Labs.",
      image: mediaAssets.team.eduardo,
      alt: "Retrato de Eduardo Neutzling, s\u00f3cio propriet\u00e1rio da Gorilla Labs.",
      imagePosition: "center",
    },
    {
      name: "F\u00e1bio Barbosa",
      role: "S\u00f3cio propriet\u00e1rio",
      bio: "Atua na execu\u00e7\u00e3o, gest\u00e3o de processos e consist\u00eancia operacional das entregas da ag\u00eancia.",
      image: mediaAssets.team.fabio,
      alt: "Retrato de F\u00e1bio Barbosa, s\u00f3cio propriet\u00e1rio da Gorilla Labs.",
      imagePosition: "center 20%",
    },
  ],
  team: [
    {
      name: "Nathan Veiga",
      role: "Editor de v\u00eddeos",
      image: mediaAssets.team.nathan,
      alt: "Retrato de Nathan Veiga, editor de v\u00eddeos da Gorilla Labs.",
      imagePosition: "center",
    },
    {
      name: "Anny Beatriz",
      role: "Social media",
      image: mediaAssets.team.anny,
      alt: "Retrato de Anny Beatriz, social media da Gorilla Labs.",
      imagePosition: "center",
    },
    {
      name: "Matheus Meira",
      role: "Design gr\u00e1fico",
      image: mediaAssets.team.matheus,
      alt: "Retrato de Matheus Meira, designer gr\u00e1fico da Gorilla Labs.",
      imagePosition: "center",
    },
  ],
  clients,
  faq: [
    {
      question: "A Gorilla Labs atende s\u00f3 marketing ou tamb\u00e9m estrutura opera\u00e7\u00e3o com IA?",
      answer:
        "A proposta \u00e9 integrar marca, conte\u00fado, m\u00eddia, automa\u00e7\u00e3o e leitura de dados. O objetivo n\u00e3o \u00e9 entregar pe\u00e7as isoladas, e sim uma opera\u00e7\u00e3o mais inteligente e comercialmente mais forte.",
    },
    {
      question: "Voc\u00eas conseguem assumir a frente criativa completa de uma marca?",
      answer:
        "Sim. A ag\u00eancia pode estruturar identidade, narrativa, dire\u00e7\u00e3o visual, criativos, v\u00eddeo, social media e campanhas, sempre adaptando o escopo ao momento do neg\u00f3cio.",
    },
    {
      question: "Como funciona a contrata\u00e7\u00e3o?",
      answer:
        "O primeiro passo \u00e9 um diagn\u00f3stico para entender cen\u00e1rio, metas, canais e prioridades. Depois disso, a Gorilla Labs prop\u00f5e uma frente de atua\u00e7\u00e3o adequada ao est\u00e1gio da marca.",
    },
    {
      question: "Quais segmentos voc\u00eas atendem?",
      answer:
        "A Gorilla Labs j\u00e1 trabalha com marcas de hotelaria, saneamento, advocacia, fitness, pet, varejo e servi\u00e7os, mas o foco principal \u00e9 potencial de crescimento e ader\u00eancia estrat\u00e9gica.",
    },
  ],
  footer: {
    kicker: "Gorilla Labs",
    copy:
      "Estrat\u00e9gia, IA, design e m\u00eddia para marcas que querem sair do comum e crescer com presen\u00e7a forte.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
