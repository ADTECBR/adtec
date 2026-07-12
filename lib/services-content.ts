export interface ServiceStep {
  number: string;
  title: string;
  description: string;
}

export interface ServicePlatform {
  name: string;
  description: string;
}

interface ServiceLocale {
  badge: string;
  headline: string;
  intro: string[];
  steps: Array<{ title: string; description: string }>;
  platforms?: Array<{ name: string; description: string }>;
  differentials: string[];
  ctaLabel: string;
}

export interface ServiceContent {
  slug: string;
  color: 'green' | 'blue' | 'gold';
  badge: string;
  headline: string;
  intro: string[];
  steps: ServiceStep[];
  platforms?: ServicePlatform[];
  differentials: string[];
  ctaLabel: string;
  en?: ServiceLocale;
  meta: {
    title: string;
    description: string;
  };
}

const services: ServiceContent[] = [
  {
    slug: 'paid-media',
    color: 'green',
    badge: 'Tráfego Pago',
    headline: 'Publicidade com Inteligência',
    intro: [
      'Implementamos inteligência na aquisição de tráfego B2B e B2C, integrando uma operação eficiente com profissionais altamente experientes no mercado digital — potencializados por inteligência artificial para análise de dados e otimização constante.',
      'Não gerenciamos campanhas pelo volume. Gerenciamos pelo resultado. Definimos juntos o objetivo do seu negócio — geração de leads qualificados, vendas diretas, reconhecimento de marca ou tráfego para monetização — e executamos com maestria, total transparência e foco em crescimento sustentável.',
    ],
    steps: [
      {
        number: '01',
        title: 'Diagnóstico',
        description: 'Auditamos seu histórico de campanhas, mapeamos o público-alvo, analisamos a concorrência e identificamos oportunidades de crescimento imediatas — com dados, não com suposições.',
      },
      {
        number: '02',
        title: 'Estratégia',
        description: 'Definimos juntos o objetivo e construímos um plano de mídia personalizado: canais, formatos, distribuição de budget, segmentações e KPIs claros antes de qualquer investimento.',
      },
      {
        number: '03',
        title: 'Execução',
        description: 'Implementação técnica impecável — estrutura de campanhas, criativos, pixels, eventos de conversão e integrações de dados configurados com precisão por quem faz isso há mais de 20 anos.',
      },
      {
        number: '04',
        title: 'Otimização Contínua',
        description: 'Monitoramento diário, testes A/B, ajustes de lances e segmentação guiados por dados reais. Nossa camada de inteligência artificial analisa padrões e antecipa oportunidades antes que o mercado as veja.',
      },
    ],
    platforms: [
      { name: 'Google Ads', description: 'Search, Display, YouTube, Performance Max, Shopping' },
      { name: 'Meta Ads', description: 'Facebook, Instagram, Reels, Advantage+ Campaigns' },
      { name: 'TikTok for Business', description: 'In-Feed Ads, TopView, Brand Takeover, Spark Ads' },
      { name: 'Spotify Ads Manager', description: 'Audio Ads, Video Takeover, Podcast Ads' },
      { name: 'X (Twitter) Ads', description: 'Promoted Posts, Trend Takeover, Follower Campaigns' },
    ],
    differentials: [
      'Parceiros oficiais Google e Meta — acesso antecipado a betas e suporte prioritário',
      'Dashboards em tempo real: você vê cada centavo do investimento, sempre',
      'Time sênior com mais de 20 anos de experiência em mídia digital',
      'Inteligência artificial aplicada à otimização — decisões baseadas em dados, não em feeling',
      'Relatórios semanais com análise estratégica, não apenas métricas sem contexto',
      'Atendimento direto com o estrategista responsável pela sua conta, sem intermediários',
    ],
    ctaLabel: 'Agendar Consultoria Estratégica',
    en: {
      badge: 'Paid Traffic',
      headline: 'Advertising with Intelligence',
      intro: [
        'We bring intelligence to B2B and B2C traffic acquisition, combining an efficient operation with highly experienced digital media professionals — amplified by artificial intelligence for data analysis and continuous optimization.',
        'We don\'t manage campaigns by volume. We manage by results. Together, we define your business goal — qualified lead generation, direct sales, brand awareness, or monetization traffic — and execute with mastery, full transparency, and a focus on sustainable growth.',
      ],
      steps: [
        { title: 'Diagnosis', description: 'We audit your campaign history, map your target audience, analyze the competition, and identify immediate growth opportunities — with data, not assumptions.' },
        { title: 'Strategy', description: 'Together, we define the objective and build a custom media plan: channels, formats, budget distribution, targeting, and clear KPIs before any investment.' },
        { title: 'Execution', description: 'Flawless technical implementation — campaign structure, creatives, pixels, conversion events, and data integrations configured with precision by professionals with 20+ years of experience.' },
        { title: 'Continuous Optimization', description: 'Daily monitoring, A/B testing, bid and targeting adjustments guided by real data. Our AI layer analyzes patterns and anticipates opportunities before the market sees them.' },
      ],
      platforms: [
        { name: 'Google Ads', description: 'Search, Display, YouTube, Performance Max, Shopping' },
        { name: 'Meta Ads', description: 'Facebook, Instagram, Reels, Advantage+ Campaigns' },
        { name: 'TikTok for Business', description: 'In-Feed Ads, TopView, Brand Takeover, Spark Ads' },
        { name: 'Spotify Ads Manager', description: 'Audio Ads, Video Takeover, Podcast Ads' },
        { name: 'X (Twitter) Ads', description: 'Promoted Posts, Trend Takeover, Follower Campaigns' },
      ],
      differentials: [
        'Official Google and Meta Partners — early access to betas and priority support',
        'Real-time dashboards: you see every cent of your investment, always',
        'Senior team with over 20 years of digital media experience',
        'Artificial intelligence applied to optimization — decisions based on data, not gut feeling',
        'Weekly reports with strategic analysis, not just context-free metrics',
        'Direct access to the strategist managing your account — no middlemen',
      ],
      ctaLabel: 'Schedule a Strategy Consultation',
    },
    meta: {
      title: 'Tráfego Pago — Google Ads, Meta Ads e mais | AD TEC',
      description: 'Gestão de tráfego pago B2B e B2C com inteligência artificial. Parceiros Google e Meta. Dashboards em tempo real e mais de 20 anos de experiência em mídia digital.',
    },
  },
  {
    slug: 'seo',
    color: 'blue',
    badge: 'SEO & Crescimento Orgânico',
    headline: 'Seja encontrado. Sem depender de anúncios.',
    intro: [
      'Analisamos seu website ou loja virtual de ponta a ponta — aspectos técnicos, estruturais, de conteúdo e de autoridade — para que cada página atenda às mais recentes exigências dos buscadores e dos sistemas de IA generativa.',
      'O resultado é um crescimento orgânico consistente: mais visibilidade no Google, mais tráfego qualificado e menos dependência de tráfego pago. Clientes que chegam até você porque você é relevante — não porque você pagou para aparecer.',
    ],
    steps: [
      {
        number: '01',
        title: 'Auditoria Completa',
        description: 'Rastreamos todo o site: velocidade, Core Web Vitals, indexação, erros técnicos, estrutura de URLs, dados estruturados, canonicals e cobertura de palavras-chave. Entregamos um relatório com prioridades claras.',
      },
      {
        number: '02',
        title: 'Estratégia de Palavras-chave',
        description: 'Mapeamos as intenções de busca do seu público — informacional, navegacional e transacional — e definimos quais termos têm o melhor equilíbrio entre volume, concorrência e potencial de conversão.',
      },
      {
        number: '03',
        title: 'SEO Técnico & On-page',
        description: 'Otimizamos títulos, meta descriptions, headings, imagens, velocidade de carregamento e estrutura de links internos. Implementamos dados estruturados (schema.org) para featured snippets e resultados enriquecidos.',
      },
      {
        number: '04',
        title: 'Autoridade & Resultados',
        description: 'Construímos autoridade com estratégia de conteúdo e link building relevante. Monitoramos rankings, tráfego orgânico e conversões mês a mês — com relatórios que mostram evolução real, não apenas posições.',
      },
    ],
    differentials: [
      'Análise técnica profunda além do básico — rastreamos o que ferramentas automatizadas ignoram',
      'SEO preparado para IA generativa (SGE, Perplexity, Gemini) — o futuro das buscas',
      'Integração com Google Search Console, Analytics e dados de performance reais',
      'Conteúdo estratégico otimizado — escrevemos com intenção, não apenas com palavras-chave',
      'Relatórios mensais com evolução de rankings, tráfego orgânico e impacto em receita',
      'Mais de 20 anos de experiência com sites de alto tráfego e grandes publishers',
    ],
    ctaLabel: 'Agendar Consultoria Estratégica',
    en: {
      badge: 'SEO & Organic Growth',
      headline: 'Be found. Without relying on ads.',
      intro: [
        'We analyze your website or online store from top to bottom — technical, structural, content, and authority aspects — so every page meets the latest requirements of search engines and generative AI systems.',
        'The result is consistent organic growth: more Google visibility, more qualified traffic, and less dependence on paid advertising. Customers who find you because you\'re relevant — not because you paid to appear.',
      ],
      steps: [
        { title: 'Complete Audit', description: 'We crawl your entire site: speed, Core Web Vitals, indexing, technical errors, URL structure, structured data, canonicals, and keyword coverage. We deliver a report with clear priorities.' },
        { title: 'Keyword Strategy', description: 'We map your audience\'s search intent — informational, navigational, and transactional — and define which terms offer the best balance of volume, competition, and conversion potential.' },
        { title: 'Technical & On-page SEO', description: 'We optimize titles, meta descriptions, headings, images, load speed, and internal link structure. We implement structured data (schema.org) for featured snippets and rich results.' },
        { title: 'Authority & Results', description: 'We build authority through content strategy and relevant link building. We track rankings, organic traffic, and conversions month by month — with reports that show real evolution, not just positions.' },
      ],
      differentials: [
        'Deep technical analysis beyond the basics — we track what automated tools overlook',
        'SEO ready for generative AI (SGE, Perplexity, Gemini) — the future of search',
        'Integration with Google Search Console, Analytics, and real performance data',
        'Strategically optimized content — written with intent, not just keywords',
        'Monthly reports with ranking evolution, organic traffic, and revenue impact',
        'Over 20 years of experience with high-traffic sites and major publishers',
      ],
      ctaLabel: 'Schedule a Strategy Consultation',
    },
    meta: {
      title: 'SEO & Crescimento Orgânico — Auditoria e Estratégia | AD TEC',
      description: 'Auditoria técnica completa, estratégia de palavras-chave e SEO preparado para IA generativa. Cresça organicamente no Google sem depender de tráfego pago.',
    },
  },
  {
    slug: 'web-dev',
    color: 'gold',
    badge: 'Desenvolvimento Web',
    headline: 'Presença digital que trabalha por você.',
    intro: [
      'Sua empresa ainda não está na rede — ou seu site já ficou para trás? Desenvolvemos sites institucionais, landing pages e lojas virtuais com as mais novas tecnologias, garantindo que cada projeto seja leve, rápido e transmita ao seu cliente exatamente o que ele precisa ver para tomar uma decisão.',
      'Não entregamos apenas código bonito. Entregamos performance, conversão e uma experiência digital que representa a sua marca com a seriedade que ela merece — do design ao deploy, passando por SEO técnico e Core Web Vitals desde o primeiro commit.',
    ],
    steps: [
      {
        number: '01',
        title: 'Briefing & Estratégia',
        description: 'Entendemos seu negócio, seu público e seus objetivos antes de escrever uma linha de código. Definimos arquitetura, tecnologias, fluxos de navegação e KPIs de conversão.',
      },
      {
        number: '02',
        title: 'Design & UX',
        description: 'Criamos layouts modernos e funcionais, alinhados à identidade da marca. Cada detalhe é pensado para guiar o visitante em direção à ação — seja um contato, uma compra ou um cadastro.',
      },
      {
        number: '03',
        title: 'Desenvolvimento',
        description: 'Implementamos com tecnologias atuais — Next.js, React, performance-first. Código limpo, acessível, seguro e preparado para crescer junto com o seu negócio.',
      },
      {
        number: '04',
        title: 'Lançamento & Evolução',
        description: 'Deploy otimizado, integração com Analytics, Tag Manager e ferramentas de CRO. Após o lançamento, acompanhamos métricas e evoluímos o projeto com base em dados reais.',
      },
    ],
    differentials: [
      'Sites rápidos por padrão — Core Web Vitals otimizados desde o início',
      'SEO técnico integrado ao desenvolvimento, não adicionado depois como correção',
      'Mobile-first: experiência perfeita em qualquer dispositivo e tamanho de tela',
      'Integração nativa com Google Analytics, Tag Manager, CRM e ferramentas de automação',
      'Código limpo e bem estruturado — fácil de manter, expandir e transferir',
      'Mais de 20 anos entregando projetos web para publishers, e-commerces e empresas B2B',
    ],
    ctaLabel: 'Agendar Consultoria Estratégica',
    en: {
      badge: 'Web Development',
      headline: 'Digital presence that works for you.',
      intro: [
        'Is your company still offline — or has your site fallen behind? We develop institutional sites, landing pages, and online stores with cutting-edge technologies, ensuring every project is fast, lightweight, and shows your customers exactly what they need to see to make a decision.',
        'We don\'t just deliver beautiful code. We deliver performance, conversion, and a digital experience that represents your brand with the seriousness it deserves — from design to deployment, including technical SEO and Core Web Vitals from the very first commit.',
      ],
      steps: [
        { title: 'Briefing & Strategy', description: 'We understand your business, your audience, and your objectives before writing a single line of code. We define architecture, technologies, navigation flows, and conversion KPIs.' },
        { title: 'Design & UX', description: 'We create modern, functional layouts aligned with your brand identity. Every detail is designed to guide visitors toward action — whether a contact request, a purchase, or a signup.' },
        { title: 'Development', description: 'We implement with modern technologies — Next.js, React, performance-first. Clean, accessible, secure code ready to grow with your business.' },
        { title: 'Launch & Evolution', description: 'Optimized deployment, integration with Analytics, Tag Manager, and CRO tools. After launch, we track metrics and evolve the project based on real data.' },
      ],
      differentials: [
        'Fast sites by default — Core Web Vitals optimized from the start',
        'Technical SEO integrated into development, not added later as a fix',
        'Mobile-first: perfect experience on any device and screen size',
        'Native integration with Google Analytics, Tag Manager, CRM, and automation tools',
        'Clean, well-structured code — easy to maintain, expand, and transfer',
        'Over 20 years delivering web projects for publishers, e-commerces, and B2B companies',
      ],
      ctaLabel: 'Schedule a Strategy Consultation',
    },
    meta: {
      title: 'Desenvolvimento Web — Sites Rápidos e Focados em Conversão | AD TEC',
      description: 'Criamos sites institucionais, landing pages e lojas virtuais com as novas tecnologias. Leves, rápidos, com SEO técnico integrado e foco em conversão.',
    },
  },
  {
    slug: 'adops',
    color: 'green',
    badge: 'AdOps para Publishers',
    headline: 'Seu Hub de AdOps. Nossa expertise de 26 anos.',
    intro: [
      'Com mais de 26 anos de expertise em Operações de Publicidade para Publishers, somos o parceiro que o seu time de vendas precisava: assumimos toda a operação de AdOps do dia a dia para que você foque no que importa — crescer receita e entregar resultado para os seus anunciantes.',
      'Operamos principalmente no Google Ad Manager 360 e atuamos como uma extensão do seu time — executando campanhas, realizando otimizações contínuas e apresentando resultados com clareza para seu time interno ou diretamente para os seus clientes.',
    ],
    steps: [
      {
        number: '01',
        title: 'Onboarding & Diagnóstico',
        description: 'Mapeamos toda a sua operação atual: estrutura de inventário, campanhas ativas, configurações do Ad Manager, acordos comerciais e gargalos operacionais. Entregamos um plano de ação em até 5 dias úteis.',
      },
      {
        number: '02',
        title: 'Operação de Campanhas',
        description: 'Executamos trafficking completo — criação de line items, upload de criativos, targeting, caps de frequência, pacing e monitoramento de entrega. Zero atraso para o seu time de vendas.',
      },
      {
        number: '03',
        title: 'Otimização Contínua',
        description: 'Análise diária de performance, ajustes de prioridade, resolução de conflitos de inventário e maximização do fill rate. Cada impressão entregue com eficiência máxima.',
      },
      {
        number: '04',
        title: 'Relatórios & Apresentações',
        description: 'Dashboards customizados e relatórios periódicos com linguagem acessível para o seu time comercial ou para os anunciantes finais — evidenciando entrega, viewability, CTR e valor gerado.',
      },
    ],
    differentials: [
      '26 anos de experiência exclusiva em operações de publicidade para publishers',
      'Profundo domínio do Google Ad Manager 360 — da configuração ao troubleshooting avançado',
      'Atuamos como extensão do seu time: seu time de vendas tem suporte direto e ágil',
      'Operação de campanhas diretas e programáticas no mesmo fluxo integrado',
      'Relatórios claros para anunciantes — menos reuniões de alinhamento, mais renovações de contratos',
      'Experiência com publishers de grande porte, portais de notícias e veículos especializados',
    ],
    ctaLabel: 'Agendar Consultoria Estratégica',
    en: {
      badge: 'AdOps for Publishers',
      headline: 'Your AdOps Hub. Our 26-Year Expertise.',
      intro: [
        'With over 26 years of expertise in Ad Operations for Publishers, we are the partner your sales team has been waiting for: we take over the entire day-to-day AdOps operation so you can focus on what matters — growing revenue and delivering results for your advertisers.',
        'We operate primarily in Google Ad Manager 360 and act as an extension of your team — executing campaigns, performing continuous optimizations, and presenting results clearly to your internal team or directly to your clients.',
      ],
      steps: [
        { title: 'Onboarding & Diagnosis', description: 'We map your entire current operation: inventory structure, active campaigns, Ad Manager configurations, commercial agreements, and operational bottlenecks. We deliver an action plan within 5 business days.' },
        { title: 'Campaign Operations', description: 'We execute full trafficking — line item creation, creative uploads, targeting, frequency caps, pacing, and delivery monitoring. Zero delays for your sales team.' },
        { title: 'Continuous Optimization', description: 'Daily performance analysis, priority adjustments, inventory conflict resolution, and fill rate maximization. Every impression delivered with maximum efficiency.' },
        { title: 'Reports & Presentations', description: 'Custom dashboards and periodic reports in accessible language for your commercial team or final advertisers — highlighting delivery, viewability, CTR, and generated value.' },
      ],
      differentials: [
        '26 years of exclusive experience in ad operations for publishers',
        'Deep mastery of Google Ad Manager 360 — from setup to advanced troubleshooting',
        'We act as an extension of your team: your sales team gets direct and agile support',
        'Direct and programmatic campaign operations in the same integrated flow',
        'Clear reports for advertisers — fewer alignment meetings, more contract renewals',
        'Experience with large publishers, news portals, and specialized media outlets',
      ],
      ctaLabel: 'Schedule a Strategy Consultation',
    },
    meta: {
      title: 'AdOps para Publishers — Google Ad Manager 360 | AD TEC',
      description: 'Hub de AdOps com 26 anos de expertise. Operação completa no Google Ad Manager 360, execução de campanhas, otimizações e relatórios para publishers e seu time de vendas.',
    },
  },
  {
    slug: 'adtech',
    color: 'blue',
    badge: 'Consultoria AdTech',
    headline: 'Seus dados de publicidade merecem render mais.',
    intro: [
      'Você é publisher — de qualquer tamanho, qualquer nicho — e sente que os seus números de publicidade ficam aquém do potencial? Fazemos uma consultoria completa em AdTech, analisando seus scripts, parceiros, integrações e configurações para garantir que suas métricas atendam às exigências do mercado atual.',
      'O resultado é concreto: mais viewability, anúncios que carregam mais rápido, CPMs mais altos e receita crescente — sem trocar de parceiros de mídia, apenas extraindo o máximo do que você já tem.',
    ],
    steps: [
      {
        number: '01',
        title: 'Auditoria de Stack',
        description: 'Analisamos todos os scripts de publicidade rodando no seu site — SSPs, DSPs, ferramentas de header bidding, lazy loading, wrappers — identificando conflitos, scripts desnecessários e oportunidades de ganho imediato.',
      },
      {
        number: '02',
        title: 'Diagnóstico de Viewability',
        description: 'Medimos viewability por posição, dispositivo e formato. Identificamos por que certas unidades ficam abaixo de 50% e desenhamos a correção — seja de layout, lazy load, scroll depth ou configuração de parceiro.',
      },
      {
        number: '03',
        title: 'Otimização de Velocidade',
        description: 'Scripts de publicidade são um dos principais vilões de page speed. Auditamos o impacto de cada tag no CLS, LCP e INP, e implementamos as correções — sem abrir mão da receita.',
      },
      {
        number: '04',
        title: 'Plano de Crescimento de CPM',
        description: 'Com dados reais em mãos, entregamos um roadmap de ações priorizadas pelo impacto em receita: novos parceiros a testar, configurações a ajustar, formatos a explorar e integrações a aprimorar.',
      },
    ],
    differentials: [
      'Visão de fora — enxergamos problemas que quem está dentro do dia a dia deixa de ver',
      'Experiência com publishers de todos os portes: do blog especializado ao grande portal',
      'Análise real de viewability com ferramentas de mercado, não apenas estimativas',
      'Foco em velocidade de carregamento de anúncios sem abrir mão de receita',
      'Conhecimento profundo de SSPs, header bidding, Google Ad Manager e Amazon TAM/UAM',
      'Entregamos um roadmap acionável — não um relatório que fica na gaveta',
    ],
    ctaLabel: 'Agendar Consultoria Estratégica',
    en: {
      badge: 'AdTech Consulting',
      headline: 'Your ad data deserves to perform better.',
      intro: [
        'Are you a publisher — of any size, any niche — and feel your advertising numbers fall short of their potential? We provide complete AdTech consulting, analyzing your scripts, partners, integrations, and configurations to ensure your metrics meet the demands of today\'s market.',
        'The result is concrete: higher viewability, faster-loading ads, higher CPMs, and growing revenue — without switching media partners, just extracting the maximum from what you already have.',
      ],
      steps: [
        { title: 'Stack Audit', description: 'We analyze all advertising scripts running on your site — SSPs, DSPs, header bidding tools, lazy loading, wrappers — identifying conflicts, unnecessary scripts, and immediate gain opportunities.' },
        { title: 'Viewability Diagnosis', description: 'We measure viewability by position, device, and format. We identify why certain units fall below 50% and design the fix — whether it\'s layout, lazy load, scroll depth, or partner configuration.' },
        { title: 'Speed Optimization', description: 'Advertising scripts are one of the biggest culprits of poor page speed. We audit the impact of each tag on CLS, LCP, and INP, and implement fixes — without sacrificing revenue.' },
        { title: 'CPM Growth Plan', description: 'With real data in hand, we deliver an action roadmap prioritized by revenue impact: new partners to test, configurations to adjust, formats to explore, and integrations to improve.' },
      ],
      differentials: [
        'Outside perspective — we see problems that those inside the day-to-day miss',
        'Experience with publishers of all sizes: from niche blogs to major portals',
        'Real viewability analysis with industry-standard tools, not just estimates',
        'Focus on ad load speed without sacrificing revenue',
        'Deep knowledge of SSPs, header bidding, Google Ad Manager, and Amazon TAM/UAM',
        'We deliver an actionable roadmap — not a report that gathers dust',
      ],
      ctaLabel: 'Schedule a Strategy Consultation',
    },
    meta: {
      title: 'Consultoria AdTech — Viewability, CPM e Velocidade para Publishers | AD TEC',
      description: 'Auditoria completa de scripts, parceiros e integrações de publicidade. Aumentamos viewability, melhoramos velocidade de carregamento e elevamos CPM e receita do seu site.',
    },
  },
  {
    slug: 'branding',
    color: 'gold',
    badge: 'Identidade Visual & Branding',
    headline: 'Uma marca que fica na cabeça — para sempre.',
    intro: [
      'Sabemos que uma boa identidade visual pode marcar a memória do seu cliente para sempre. Por isso, não trabalhamos com templates. Usamos uma metodologia em que sua marca conversa diretamente com seus produtos, seus valores e as pessoas que você quer alcançar.',
      'Você senta com a gente, conta a sua história e nos mostra seus produtos. A partir daí, desenvolvemos soluções de branding completas — aplicáveis em tudo: website, embalagens, comunicação interna, redes sociais e muito mais.',
    ],
    steps: [
      {
        number: '01',
        title: 'Imersão',
        description: 'Ouvimos antes de criar. Entendemos sua história, seu mercado, seus concorrentes e, principalmente, as pessoas que você quer que se apaixonem pela sua marca. Quanto mais você nos conta, mais forte fica a identidade.',
      },
      {
        number: '02',
        title: 'Estratégia de Marca',
        description: 'Definimos posicionamento, proposta de valor, tom de voz e atributos visuais que vão orientar cada decisão criativa — do ícone do favicon ao layout da embalagem.',
      },
      {
        number: '03',
        title: 'Criação Visual',
        description: 'Desenvolvemos logotipo, paleta de cores, tipografia, padrões gráficos e todos os elementos visuais que formam a identidade. Apresentamos com contexto e justificativa estratégica, não apenas estética.',
      },
      {
        number: '04',
        title: 'Brandbook & Aplicações',
        description: 'Entregamos um brandbook completo com diretrizes de uso — e aplicamos a identidade nos pontos de contato definidos juntos: website, redes sociais, embalagens, sinalização ou comunicação interna.',
      },
    ],
    differentials: [
      'Metodologia própria: a marca é construída a partir da sua história e dos seus produtos',
      'Identidade pensada para todos os pontos de contato, não apenas para o logo',
      'Brandbook completo com diretrizes claras para a equipe e fornecedores',
      'Visão integrada entre branding e marketing digital — a marca funciona no mundo real e no digital',
      'Experiência com empresas B2B, B2C, startups e rebranding de marcas consolidadas',
      'Do naming ao brandbook — atendemos desde a criação do zero até a renovação de marcas existentes',
    ],
    ctaLabel: 'Agendar Consultoria de Marca',
    en: {
      badge: 'Visual Identity & Branding',
      headline: 'A brand that sticks — forever.',
      intro: [
        'We know that a great visual identity can stay in your customer\'s memory forever. That\'s why we don\'t work with templates. We use a methodology where your brand speaks directly to your products, your values, and the people you want to reach.',
        'You sit down with us, share your story, and show us your products. From there, we develop complete branding solutions — applicable everywhere: website, packaging, internal communications, social media, and much more.',
      ],
      steps: [
        { title: 'Immersion', description: 'We listen before we create. We understand your story, your market, your competitors, and most importantly, the people you want to fall in love with your brand. The more you share, the stronger the identity.' },
        { title: 'Brand Strategy', description: 'We define positioning, value proposition, tone of voice, and visual attributes that will guide every creative decision — from the favicon icon to the packaging layout.' },
        { title: 'Visual Creation', description: 'We develop your logo, color palette, typography, graphic patterns, and all visual elements that form your identity. We present with context and strategic rationale, not just aesthetics.' },
        { title: 'Brandbook & Applications', description: 'We deliver a complete brandbook with usage guidelines — and apply the identity to the touchpoints we define together: website, social media, packaging, signage, or internal communications.' },
      ],
      differentials: [
        'Proprietary methodology: the brand is built from your story and your products',
        'Identity designed for all touchpoints, not just the logo',
        'Complete brandbook with clear guidelines for your team and suppliers',
        'Integrated vision between branding and digital marketing — the brand works in the real world and online',
        'Experience with B2B, B2C, startups, and rebranding of established brands',
        'From naming to brandbook — we serve from creation from scratch to renewal of existing brands',
      ],
      ctaLabel: 'Schedule a Brand Consultation',
    },
    meta: {
      title: 'Identidade Visual & Branding — Do Logo ao Brandbook | AD TEC',
      description: 'Criamos identidades visuais que ficam na memória. Metodologia própria, brandbook completo e aplicação em todos os pontos de contato — do website às embalagens.',
    },
  },
  {
    slug: 'whatsapp-automation',
    color: 'green',
    badge: 'Automação WhatsApp',
    headline: 'Atendimento Inteligente 24h.',
    intro: [
      'Seu WhatsApp respondendo clientes 24 horas por dia, qualificando leads automaticamente e agendando consultas — sem precisar de mais funcionários.',
      'Implementamos e configuramos um assistente virtual com GPT-4o diretamente no WhatsApp da sua empresa. Da conexão ao treinamento da IA, cuidamos de tudo para você começar a atender melhor desde o primeiro dia.',
    ],
    steps: [
      {
        number: '01',
        title: 'Diagnóstico do negócio',
        description: 'Entendemos seu fluxo de atendimento atual, mapeamos as perguntas mais frequentes dos seus clientes e definimos o perfil ideal do seu assistente virtual.',
      },
      {
        number: '02',
        title: 'Configuração e treinamento da IA',
        description: 'Conectamos o WhatsApp, configuramos o tom de voz, os horários de atendimento e treinamos a IA com o conhecimento específico do seu negócio.',
      },
      {
        number: '03',
        title: 'Ativação e monitoramento',
        description: 'Colocamos o assistente em produção e monitoramos as primeiras conversas para garantir qualidade e ajustar o comportamento da IA conforme necessário.',
      },
      {
        number: '04',
        title: 'Otimização contínua',
        description: 'Analisamos periodicamente as conversas, melhoramos as respostas e ampliamos as capacidades do assistente conforme seu negócio cresce.',
      },
    ],
    platforms: [
      { name: 'WhatsApp Business', description: 'Conexão direta via API oficial Meta ou QR code, conforme sua necessidade.' },
      { name: 'GPT-4o', description: 'Modelo de IA da OpenAI para respostas naturais, inteligentes e contextuais.' },
      { name: 'HubSpot / Pipedrive / Zoho', description: 'Integração com os principais CRMs para sincronizar leads automaticamente.' },
      { name: 'Modo Takeover', description: 'Assuma qualquer conversa manualmente com um clique quando precisar do toque humano.' },
    ],
    differentials: [
      'Experiência real com a plataforma — desenvolvemos e operamos um SaaS de automação WhatsApp que trouxemos para dentro da AD TEC como consultoria.',
      'Configuração completa e treinamento da IA inclusos — não entregamos apenas a ferramenta, implementamos a solução do início ao fim.',
      'Integração com CRM e ferramentas de marketing para que nenhum lead se perca no caminho.',
      'Monitoramento e otimização contínua das conversas para melhorar continuamente a taxa de conversão.',
      'Conformidade com LGPD: toda a arquitetura de dados segue as melhores práticas de privacidade.',
      'Atendimento que funciona 24h por dia, 7 dias por semana — sem custo adicional de equipe.',
    ],
    ctaLabel: 'Quero automatizar meu atendimento',
    en: {
      badge: 'WhatsApp Automation',
      headline: 'Intelligent 24h Customer Service.',
      intro: [
        'Your WhatsApp responding to customers 24 hours a day, automatically qualifying leads and scheduling appointments — without needing more staff.',
        'We implement and configure a virtual assistant powered by GPT-4o directly on your company\'s WhatsApp. From connection to AI training, we handle everything so you start serving customers better from day one.',
      ],
      steps: [
        { title: 'Business Diagnosis', description: 'We understand your current service flow, map your customers\' most frequent questions, and define the ideal profile for your virtual assistant.' },
        { title: 'AI Configuration & Training', description: 'We connect WhatsApp, configure the tone of voice, service hours, and train the AI with your business-specific knowledge.' },
        { title: 'Activation & Monitoring', description: 'We launch the assistant in production and monitor the first conversations to ensure quality and adjust AI behavior as needed.' },
        { title: 'Continuous Optimization', description: 'We periodically analyze conversations, improve responses, and expand the assistant\'s capabilities as your business grows.' },
      ],
      platforms: [
        { name: 'WhatsApp Business', description: 'Direct connection via official Meta API or QR code, according to your needs.' },
        { name: 'GPT-4o', description: 'OpenAI\'s AI model for natural, intelligent, and contextual responses.' },
        { name: 'HubSpot / Pipedrive / Zoho', description: 'Integration with major CRMs to automatically sync leads.' },
        { name: 'Takeover Mode', description: 'Take over any conversation manually with one click when you need the human touch.' },
      ],
      differentials: [
        'Real platform experience — we developed and operated a WhatsApp automation SaaS, now brought into AD TEC as consulting.',
        'Complete configuration and AI training included — we don\'t just deliver the tool, we implement the solution end-to-end.',
        'CRM and marketing tool integration so no lead gets lost along the way.',
        'Continuous conversation monitoring and optimization to continuously improve conversion rates.',
        'LGPD compliance: the entire data architecture follows privacy best practices.',
        'Service that works 24 hours a day, 7 days a week — at no additional staffing cost.',
      ],
      ctaLabel: 'I want to automate my customer service',
    },
    meta: {
      title: 'Automação de Atendimento via WhatsApp com IA | AD TEC',
      description: 'Implementamos assistentes virtuais com IA no seu WhatsApp: atendimento 24h, qualificação automática de leads e agendamento. Consultoria completa da AD TEC.',
    },
  },
];

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

export function getServiceContent(slug: string): ServiceContent | undefined {
  return services.find((s) => s.slug === slug);
}
