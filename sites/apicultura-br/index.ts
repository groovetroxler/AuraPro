import type {
  AuthorBoxBlock,
  BreadcrumbBlock,
  PageSchema,
  RelatedLinksBlock,
  SiteEntry,
} from '../../core/types/contracts'
import { resolveSiteBaseUrl } from '../../config/site-url'

const SITE_KEY = 'apicultura-br'
const ROUTE_PATH = 'apicultura'
const BASE_URL = resolveSiteBaseUrl(ROUTE_PATH)
const OG_IMAGE = `${BASE_URL}/abelhas-sem-ferrao-meliponario.jpg`
const PUBLISHED_AT = '2026-03-28'

const SLUG_SPECIES = 'especie-certa-para-sua-regiao'
const SLUG_BOXES = 'caixa-certa-para-cada-especie'
const SLUG_LOCATION = 'onde-instalar-meliponario'
const SLUG_FIRST_MONTH = 'primeiro-mes-da-colonia'
const SLUG_HEALTH = 'alimentacao-sanidade-e-erros'
const SLUG_LEGAL = 'legalizacao-meliponicultura'

const COLOR_PAPER = '#f4efe4'
const COLOR_PAPER_SOFT = '#fbf8f1'
const COLOR_GREEN = '#355241'
const COLOR_HONEY = '#b67a1c'
const COLOR_WAX = '#dcc79c'
const COLOR_INK = '#2d2618'
const COLOR_MUTED = '#5f665d'
const COLOR_LINE = '#d7ccb5'
const STEP_LINK_STYLE = `color:${COLOR_MUTED};font-weight:500;text-decoration-color:rgba(182,122,28,0.45);text-decoration-thickness:1px;text-underline-offset:0.14em;`
const AFFILIATE_PROGRAM_ID = 'mercadolivre-abelhas-sem-ferrao'

const PRODUCT_KIT_START = {
  productName: 'Kit com 3 caixas para abelhas sem ferrão',
  href: 'https://www.mercadolivre.com.br/kit-3-caixas-para-abelha-sem-ferrao--asf--jatai-mirim-irai/up/MLBU1113303396',
  description: 'Kit voltado a espécies pequenas como jataí, mirim e iraí, útil para quem quer começar com uma base mais completa.',
  ctaLabel: 'Ver kit no Mercado Livre',
}

const PRODUCT_SMART_BOX = {
  productName: '3 caixas jataí modelo casa inteligente',
  href: 'https://www.mercadolivre.com.br/3-caixa--abelhas-sem-ferrao-jatai-modelo-casa-inteligente/up/MLBU1965467871',
  description: 'Modelo modular para jataí, com foco em estrutura organizada e manejo prático desde o começo.',
  ctaLabel: 'Ver modelo no Mercado Livre',
}

const PRODUCT_INPA = {
  productName: 'Kit 2 caixas INPA 20x20 com atrativo',
  href: 'https://www.mercadolivre.com.br/2-caixa-inpa-20x20-abelha-sem-ferrao--atrativo-captura/up/MLBU3107840824',
  description: 'Conjunto voltado a caixas maiores no padrão INPA, acompanhado de atrativo para captura.',
  ctaLabel: 'Ver kit INPA',
}

const PRODUCT_ISCA = {
  productName: 'Caixa isca para abelha jataí com atrativo',
  href: 'https://produto.mercadolivre.com.br/MLB-5371523922-caixa-isca-para-abelha-jatai-criaco-de-abelhas-sem-ferro-_JM',
  description: 'Solução compacta para quem quer testar captura e dar o primeiro passo com jataí.',
  imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_932496-MLB89659504645_082025-O-caixa-isca-para-abelha-jatai-criaco-de-abelhas-sem-ferro.webp',
  ctaLabel: 'Ver caixa isca',
}

const pageHref = (slug: string) =>
  slug === 'home' ? `/${ROUTE_PATH}` : `/${ROUTE_PATH}/${slug}`

function breadcrumb(label: string, slug: string): BreadcrumbBlock {
  return {
    type: 'breadcrumb',
    items: [
      { label: 'Início', href: pageHref('home') },
      { label, href: pageHref(slug) },
    ],
  }
}

function relatedLinks(items: Array<{ label: string; slug: string }>): RelatedLinksBlock {
  return {
    type: 'relatedLinks',
    links: items.map((item) => ({
      label: item.label,
      href: pageHref(item.slug),
    })),
  }
}

function allDetailLinks(): RelatedLinksBlock {
  return relatedLinks([
    { label: 'Passo 1: espécie certa para a sua região', slug: SLUG_SPECIES },
    { label: 'Passo 2: caixa certa para cada espécie', slug: SLUG_BOXES },
    { label: 'Passo 3: onde instalar o meliponário', slug: SLUG_LOCATION },
    { label: 'Passo 4: o primeiro mês da colônia', slug: SLUG_FIRST_MONTH },
    { label: 'Passo 5: alimentação, sanidade e erros', slug: SLUG_HEALTH },
    { label: 'Leitura de apoio: legalização da meliponicultura', slug: SLUG_LEGAL },
  ])
}

function allPageLinks(currentSlug: string): RelatedLinksBlock {
  return relatedLinks(
    [
      { label: 'Página inicial: guia principal', slug: 'home' },
      { label: 'Passo 1: espécie certa para a sua região', slug: SLUG_SPECIES },
      { label: 'Passo 2: caixa certa para cada espécie', slug: SLUG_BOXES },
      { label: 'Passo 3: onde instalar o meliponário', slug: SLUG_LOCATION },
      { label: 'Passo 4: o primeiro mês da colônia', slug: SLUG_FIRST_MONTH },
      { label: 'Passo 5: alimentação, sanidade e erros', slug: SLUG_HEALTH },
      { label: 'Leitura de apoio: legalização da meliponicultura', slug: SLUG_LEGAL },
    ].filter((item) => item.slug !== currentSlug)
  )
}

const authorBox: AuthorBoxBlock = {
  type: 'authorBox',
  name: 'Equipe Abelhas sem Ferrão',
  role: 'Curadoria editorial',
  bio: 'Conteúdo voltado a iniciantes, com foco em clareza, responsabilidade e prazer de leitura antes da compra.',
}

function affiliateCard(
  product: {
    productName: string
    href: string
    description: string
    ctaLabel: string
    imageUrl?: string
  }
) {
  return {
    type: 'affiliateCard' as const,
    productName: product.productName,
    href: product.href,
    programId: AFFILIATE_PROGRAM_ID,
    description: product.description,
    imageUrl: product.imageUrl,
    ctaLabel: product.ctaLabel,
  }
}

const homePage: PageSchema = {
  id: 'apicultura-home',
  siteKey: SITE_KEY,
  type: 'home',
  slug: 'home',
  title: 'Início',
  status: 'published',
  meta: {
    title: 'Abelhas sem Ferrão',
    description: 'Introdução completa e guia passo a passo para começar com abelhas sem ferrão no Brasil.',
    ogImage: OG_IMAGE,
  },
  blocks: [
    {
      type: 'richText',
      html: `
        <section style="padding:4px 0 18px;border-top:3px solid ${COLOR_HONEY};">
          <h1 style="margin:0 0 14px;color:${COLOR_INK};font-size:clamp(2.2rem,4vw,3.7rem);line-height:1.08;max-width:15ch;">Abelhas sem ferrão: por que conquistam tantas pessoas e como iniciar na criação</h1>
          <p style="font-size:1.18rem;line-height:1.82;color:${COLOR_MUTED};max-width:56rem;">Abelhas sem ferrão são abelhas nativas brasileiras criadas na meliponicultura. Para quem vem da ideia mais conhecida de colmeia, a diferença principal em relação à <em>Apis mellifera</em> é esta: o manejo costuma ser mais tranquilo e mais compatível com quintal, jardim ou pequeno sítio, mas a colônia é menor, a produção de mel por caixa tende a ser mais baixa e a escolha da espécie depende muito mais da região onde você vive.</p>
          <p style="margin:18px 0 18px;color:${COLOR_GREEN};font-size:0.94rem;font-weight:700;letter-spacing:0.03em;">Polinização · Biodiversidade · Mel delicado · Hobby útil</p>
          <p style="color:${COLOR_INK};line-height:1.84;max-width:56rem;">Elas importam por três razões reais. A primeira é ecológica: ajudam na polinização e fazem parte da biodiversidade do Brasil. A segunda é prática: cabem melhor numa rotina doméstica de observação, cuidado e aprendizado. A terceira é sensorial: o mel delas tem aroma, sabor e valor muito próprios, e isso costuma atrair quem quer um hobby útil, prazeroso e ligado à natureza.</p>
          <p style="color:${COLOR_INK};line-height:1.84;max-width:56rem;">Ao mesmo tempo, meliponicultura não é compra decorativa de caixa nem atalho para tirar mel rápido. O mel de abelhas sem ferrão é mais sensível, com maior umidade e maior risco de fermentação se a colheita for feita cedo demais, sem higiene ou com pote ainda aberto. E a colônia responde ao ambiente com muita clareza: espécie errada, caixa errada e local ruim costumam aparecer rápido no comportamento do enxame.</p>
          <p style="margin-bottom:0;color:${COLOR_INK};line-height:1.84;max-width:56rem;">O melhor começo, portanto, não é o mais barulhento. É o mais coerente. Primeiro você entende qual espécie faz sentido para o seu lugar. Depois escolhe a caixa compatível. Em seguida resolve onde essa caixa vai ficar. Só então pensa em rotina, alimentação, sanidade e expectativas de mel.</p>
        </section>
      `,
    },
    {
      type: 'richText',
      html: `
        <section style="padding:24px 0 6px;">
          <div style="display:flex;align-items:center;gap:14px;margin-bottom:12px;">
            <span style="display:inline-flex;color:${COLOR_GREEN};font-size:0.76rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">Comece por Aqui</span>
            <span style="flex:1;height:1px;background:${COLOR_LINE};"></span>
          </div>
          <h2 style="margin:0 0 10px;color:${COLOR_INK};font-size:clamp(1.8rem,3vw,2.4rem);">Guia passo a passo para iniciante</h2>
          <p style="margin:0;color:${COLOR_MUTED};line-height:1.78;">Se você quiser resumir tudo em uma sequência simples, use esta ordem: espécie, caixa, local, primeiro mês e sanidade. Abaixo, cada passo já aparece explicado de forma prática. No fim de cada um, há um link para o detalhamento daquela etapa.</p>
        </section>
      `,
    },
    {
      type: 'richText',
      html: `
        <section style="padding:24px 0 6px;border-top:1px solid ${COLOR_LINE};">
          <div style="display:inline-flex;color:${COLOR_HONEY};font-size:0.78rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">Passo 1</div>
          <h2 style="margin:12px 0 10px;color:${COLOR_INK};">Escolha a espécie pelo seu lugar, não pela fama</h2>
          <p>O iniciante quase sempre começa pela pergunta errada: “qual abelha dá mais mel?”. A pergunta útil é outra: “qual espécie faz sentido para a minha região, para o meu clima, para a flora ao meu redor e para o espaço que eu realmente tenho?”. Em abelhas sem ferrão, território vem antes de preferência.</p>
          <p style="margin-bottom:0;">Isso muda muito o começo. Jataí, mandaçaia, jandaíra, mirins e outras espécies aparecem o tempo todo em vídeos e conversas, mas nenhuma delas funciona como resposta universal. Uma espécie famosa pode ser ótima em outro estado e pouco coerente no seu. O critério mais seguro continua sendo ocorrência natural, procedência da colônia e apoio local de manejo; <a href="${pageHref(SLUG_SPECIES)}" style="${STEP_LINK_STYLE}">aqui você vê esse passo em mais detalhe</a>.</p>
        </section>
      `,
    },
    {
      type: 'richText',
      html: `
        <section style="padding:24px 0 6px;border-top:1px solid ${COLOR_LINE};">
          <div style="display:inline-flex;color:${COLOR_GREEN};font-size:0.78rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">Passo 2</div>
          <h2 style="margin:12px 0 10px;color:${COLOR_INK};">Escolha a caixa de acordo com a espécie</h2>
          <p>Em meliponicultura, a caixa não é um acessório genérico. Ela faz parte do manejo. Espécies pequenas, como jataí, iraí e várias mirins, pedem caixas compactas e com pouco volume sobrando. Espécies maiores, como mandaçaia, uruçu, tiúba e outras <em>Melipona</em>, precisam de módulos maiores e de mais estabilidade térmica.</p>
          <p style="margin-bottom:0;">O erro comum aqui é comprar a caixa primeiro e tentar encaixar a espécie depois. Quando a caixa é grande demais, a colônia gasta energia fechando espaço e regulando temperatura. Quando é pequena demais, ela aperta o desenvolvimento do ninho. A regra simples é esta: primeiro defina o perfil da espécie, depois escolha a caixa proporcional; <a href="${pageHref(SLUG_BOXES)}" style="${STEP_LINK_STYLE}">nesta página o raciocínio da caixa fica mais detalhado</a>.</p>
        </section>
      `,
    },
    {
      type: 'richText',
      html: `
        <section style="padding:24px 0 6px;border-top:1px solid ${COLOR_LINE};">
          <div style="display:inline-flex;color:${COLOR_HONEY};font-size:0.78rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">Passo 3</div>
          <h2 style="margin:12px 0 10px;color:${COLOR_INK};">Prepare o local do meliponário antes de qualquer pressa</h2>
          <p>A caixa precisa ficar em um ponto limpo, sombreado, protegido de vento, com pouco calor forte da tarde e com acesso fácil para observação. Em documentos da Embrapa, a flora do entorno aparece como uma das partes mais importantes do sucesso do meliponário. Isso quer dizer que a colônia depende não só da caixa, mas de tudo o que está ao redor dela.</p>
          <p style="margin-bottom:0;">Também entram nessa conta a altura do suporte, a chuva direta, o calor refletido por parede ou telha, a fumaça, a pulverização e a presença de água e flores ao longo do ano. Muita perda boba no começo não vem da espécie. Vem do ponto errado dentro do quintal; <a href="${pageHref(SLUG_LOCATION)}" style="${STEP_LINK_STYLE}">aqui você aprofunda só a leitura do local</a>.</p>
        </section>
      `,
    },
    affiliateCard(PRODUCT_KIT_START),
    {
      type: 'richText',
      html: `
        <section style="padding:24px 0 6px;border-top:1px solid ${COLOR_LINE};">
          <div style="display:inline-flex;color:${COLOR_GREEN};font-size:0.78rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">Passo 4</div>
          <h2 style="margin:12px 0 10px;color:${COLOR_INK};">Atravesse o primeiro mês com mais observação do que intervenção</h2>
          <p>O primeiro mês não é a fase de “mexer bem”. É a fase de estabilizar a colônia. E isso começa antes da revisão: começa entendendo como esse enxame chegou à caixa. Para a maioria dos iniciantes, a colônia vem já instalada numa caixa racional, ou chega por transferência/divisão feita por alguém experiente. Não é uma situação de “jogar as abelhas para dentro” e esperar que elas se organizem sozinhas.</p>
          <p style="margin-bottom:0;">Depois da chegada, o foco deve estar na entrada e saída de campeiras, na chegada de pólen, na reação ao calor, à chuva e ao vento, e nos sinais de que o local realmente está funcionando. Nesse começo, menos impulso é quase sempre melhor. O criador observa, corrige sombra, protege o suporte e evita abrir a caixa por curiosidade; <a href="${pageHref(SLUG_FIRST_MONTH)}" style="${STEP_LINK_STYLE}">nesta leitura o primeiro mês fica destrinchado etapa por etapa, incluindo a chegada da colônia e a fase de estabilização</a>.</p>
        </section>
      `,
    },
    {
      type: 'richText',
      html: `
        <section style="padding:24px 0 6px;border-top:1px solid ${COLOR_LINE};">
          <div style="display:inline-flex;color:${COLOR_HONEY};font-size:0.78rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">Passo 5</div>
          <h2 style="margin:12px 0 10px;color:${COLOR_INK};">Cuide de alimentação, sanidade e expectativa de mel</h2>
          <p>Abelhas sem ferrão dependem de flora, pólen, néctar, água e resinas. Alimentação suplementar existe, mas ela precisa ser entendida de modo concreto: às vezes é apoio energético, como xarope 1:1 em pequena quantidade; às vezes é reforço proteico em situação específica de colônia fraca, transferência ou escassez. Não é para substituir um ambiente ruim nem para empurrar a colônia artificialmente o tempo todo.</p>
          <p style="margin-bottom:0;">É aqui que entram também os problemas mais comuns: formigas, forídeos, mofo, excesso de umidade, cheiro estranho, alimentação fermentando e colheita precoce de mel. O começo maduro aceita uma verdade simples: antes de colher, multiplicar ou sonhar com volume, você precisa manter a colônia forte, limpa e estável; <a href="${pageHref(SLUG_HEALTH)}" style="${STEP_LINK_STYLE}">o detalhamento deste passo explica que alimentação é essa, quando usar e o que evitar</a>.</p>
        </section>
      `,
    },
    {
      type: 'richText',
      html: `
        <section style="padding:26px 0 4px;border-top:1px solid ${COLOR_LINE};border-bottom:1px solid ${COLOR_LINE};">
          <h2 style="margin:12px 0 10px;color:${COLOR_INK};">Conclusão</h2>
          <p>Se você reduzir a meliponicultura a uma única diretriz, ela fica assim: comece pequeno, com espécie nativa coerente, caixa proporcional, local estável e pouca ansiedade. Esse tipo de começo parece simples demais para quem está empolgado, mas é justamente o que transforma curiosidade em aprendizado real.</p>
          <p style="margin-bottom:0;">Quando espécie, caixa, local, primeiro mês e sanidade entram em ordem, quase tudo melhora: a leitura da colônia, a qualidade do mel no futuro, a chance de manter o enxame vivo e a satisfação de estar criando abelhas sem ferrão de um jeito mais responsável.</p>
        </section>
      `,
    },
    {
      type: 'cta',
      label: 'Abrir o detalhamento do passo 1',
      href: pageHref(SLUG_SPECIES),
      variant: 'primary',
    },
    affiliateCard(PRODUCT_ISCA),
    allPageLinks('home'),
  ],
}

const speciesPage: PageSchema = {
  id: 'apicultura-especie-certa',
  siteKey: SITE_KEY,
  type: 'article',
  slug: SLUG_SPECIES,
  title: 'Espécie certa para a sua região',
  status: 'published',
  meta: {
    title: 'Espécie certa para a sua região',
    description: 'Como escolher a espécie de abelha sem ferrão pelo lugar, pelo manejo e pela procedência, e não pela fama.',
    ogImage: OG_IMAGE,
  },
  blocks: [
    breadcrumb('Espécie certa para a sua região', SLUG_SPECIES),
    {
      type: 'richText',
      html: `
        <section style="padding:4px 0 18px;border-top:2px solid ${COLOR_HONEY};border-bottom:1px solid ${COLOR_LINE};">
          <div style="display:inline-flex;color:${COLOR_HONEY};font-size:0.78rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">Passo 1</div>
          <h1 style="margin:14px 0 10px;color:${COLOR_INK};">Como escolher a espécie certa para a sua região</h1>
          <p style="margin:0;font-size:1.15rem;line-height:1.75;color:${COLOR_MUTED};">A escolha mais importante do começo não é a da caixa, nem a do kit. É a da espécie. E o melhor critério continua sendo o mais simples: território antes de fama.</p>
        </section>
      `,
    },
    {
      type: 'articleContent',
      author: authorBox.name,
      publishedAt: PUBLISHED_AT,
      html: `
        <h2>Comece pelo mapa, não pelo vídeo</h2>
        <p>Abelhas sem ferrão têm distribuição natural muito ligada ao território. Isso quer dizer que a espécie precisa combinar com clima, flora, altitude, oferta local de manejo e procedência da colônia. Quando o iniciante ignora isso e escolhe pela internet, ele troca uma dúvida boa por um risco ruim.</p>

        <h2>O que olhar antes de escolher</h2>
        <p>Na prática, quatro perguntas resolvem boa parte da decisão. Essa espécie ocorre naturalmente na minha região? Existe colônia com procedência confiável perto de mim? O meu espaço combina com o porte e com o comportamento dela? Há alguém no meu contexto que já maneja essa espécie e pode servir de referência? Quando essas quatro respostas caminham juntas, o começo fica muito mais claro.</p>

        <h2>Como pensar jataí, mandaçaia e jandaíra sem transformar isso em ranking</h2>
        <p><strong>Jataí</strong> costuma entrar bem na conversa de quem quer uma porta de entrada mais observacional, com colônia menor e caixa compacta. <strong>Mandaçaia</strong> costuma fazer mais sentido quando o ambiente já comporta uma estrutura um pouco mais robusta. <strong>Jandaíra</strong> aparece muito onde existe tradição regional forte. O ponto central é este: essas espécies servem como referência de raciocínio, não como pódio nacional.</p>
      `,
    },
    affiliateCard(PRODUCT_KIT_START),
    {
      type: 'articleContent',
      html: `
        <h2>A procedência pesa tanto quanto o nome da espécie</h2>
        <p>Mesmo quando a espécie parece correta, a origem da colônia continua sendo decisiva. O iniciante precisa saber de onde aquele material veio e se ele está chegando por um caminho minimamente confiável. Colônia sem contexto costuma trazer problemas que aparecem depois como se fossem falha do criador.</p>

        <h2>Rede local vale muito</h2>
        <p>Meliponicultura melhora quando existe linguagem comum de manejo. Clima parecido, florada parecida e gente olhando para o mesmo ambiente que você costumam valer mais do que fama digital. Em dúvida entre duas espécies, a presença de referência local séria quase sempre deve pesar bastante.</p>

        <h2>Erros comuns nessa etapa</h2>
        <p>Escolher pela aparência, pelo volume de mel prometido, pela espécie da moda ou pela caixa que apareceu mais barata. Em quase todos esses casos, a decisão foi tomada cedo demais e com pouco contexto.</p>
      `,
    },
    {
      type: 'callout',
      calloutType: 'info',
      title: 'Regra prática',
      content: 'Se você ainda não sabe explicar por que a espécie faz sentido no seu lugar, a escolha ainda não está pronta.',
    },
    {
      type: 'cta',
      label: 'Avançar para o passo 2',
      href: pageHref(SLUG_BOXES),
      variant: 'primary',
    },
    affiliateCard(PRODUCT_ISCA),
    allPageLinks(SLUG_SPECIES),
  ],
}

const boxesPage: PageSchema = {
  id: 'apicultura-caixa-certa',
  siteKey: SITE_KEY,
  type: 'article',
  slug: SLUG_BOXES,
  title: 'Caixa certa para cada espécie',
  status: 'published',
  meta: {
    title: 'Caixa certa para cada espécie',
    description: 'Como pensar o tamanho, a lógica e a estrutura da caixa de acordo com o perfil da espécie.',
    ogImage: OG_IMAGE,
  },
  blocks: [
    breadcrumb('Caixa certa para cada espécie', SLUG_BOXES),
    {
      type: 'richText',
      html: `
        <section style="padding:4px 0 18px;border-top:2px solid ${COLOR_GREEN};border-bottom:1px solid ${COLOR_LINE};">
          <div style="display:inline-flex;color:${COLOR_GREEN};font-size:0.78rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">Passo 2</div>
          <h1 style="margin:14px 0 10px;color:${COLOR_INK};">Como pensar a caixa certa para cada espécie</h1>
          <p style="margin:0;font-size:1.15rem;line-height:1.75;color:${COLOR_MUTED};">A caixa vem depois da espécie porque ela precisa servir à biologia da colônia. Em abelhas sem ferrão, tamanho e conforto térmico pesam de verdade.</p>
        </section>
      `,
    },
    {
      type: 'articleContent',
      author: authorBox.name,
      publishedAt: PUBLISHED_AT,
      html: `
        <h2>Não existe uma caixa universal para todas as nativas</h2>
        <p>Esse é um dos pontos que mais diferenciam meliponicultura de apicultura com <em>Apis</em>. Em abelhas sem ferrão, as caixas racionais variam porque as espécies também variam em porte, arquitetura de ninho, volume de colônia e tolerância térmica. Por isso, comprar a caixa primeiro costuma ser o atalho mais ruim do começo.</p>

        <h2>Espécies pequenas pedem caixas compactas</h2>
        <p>Jataí, iraí, mirins e outros perfis pequenos trabalham melhor em caixas com pouco volume sobrando, boa vedação e revisão simples. Quando o iniciante coloca uma espécie pequena dentro de uma caixa grande demais, a colônia gasta energia regulando um espaço que ela não precisava ter.</p>

        <h2>Espécies maiores pedem módulo maior e mais estabilidade</h2>
        <p>Mandaçaia, uruçu, tiúba e outras <em>Melipona</em> costumam pedir mais massa, mais módulo e mais equilíbrio térmico. É aqui que o modelo INPA aparece bastante como referência de raciocínio, porque organiza ninho, sobreninho e melgueiras de forma compatível com espécies maiores.</p>
      `,
    },
    affiliateCard(PRODUCT_SMART_BOX),
    {
      type: 'articleContent',
      html: `
        <h2>Caixas regionais também fazem sentido</h2>
        <p>Para espécies com tradição local forte, como jandaíra e outros perfis mais regionais, vale muito seguir o padrão já consolidado no seu contexto. O que importa não é achar a caixa perfeita na internet. É usar um modelo que respeite o porte da colônia, seja bem vedado e já tenha lógica de manejo conhecida perto de você.</p>

        <h2>O que observar na prática</h2>
        <ul>
          <li>Se a espécie é pequena, fuja de caixa superdimensionada.</li>
          <li>Se a espécie é maior, fuja de caixa apertada demais e de suporte frágil.</li>
          <li>Prefira estrutura que permita entender ninho, sobreninho e expansão sem bagunça.</li>
          <li>Pense em higiene futura, não só em aparência.</li>
        </ul>

        <h2>Erros comuns nessa etapa</h2>
        <p>Comprar pela estética, comprar só pelo preço, achar que o mesmo modelo resolve qualquer espécie e exagerar no kit antes de entender a rotina. A melhor caixa do começo costuma ser mais simples e mais coerente do que parece.</p>
      `,
    },
    {
      type: 'comparisonTable',
      headers: ['Perfil de espécie', 'Como a caixa deve ser', 'Maior risco do iniciante'],
      rows: [
        {
          label: 'Jataí, iraí e mirins',
          values: [
            'Compacta, bem vedada e sem volume sobrando',
            'Comprar caixa grande demais',
          ],
        },
        {
          label: 'Mandaçaia e outras Melipona',
          values: [
            'Módulos maiores, estrutura estável e boa lógica de expansão',
            'Improvisar em caixa apertada ou local instável',
          ],
        },
        {
          label: 'Espécies regionais fortes',
          values: [
            'Padrão já usado localmente, com foco em proporção e conforto térmico',
            'Ignorar o repertório regional e copiar uma solução qualquer',
          ],
        },
      ],
    },
    {
      type: 'cta',
      label: 'Avançar para o passo 3',
      href: pageHref(SLUG_LOCATION),
      variant: 'primary',
    },
    affiliateCard(PRODUCT_ISCA),
    allPageLinks(SLUG_BOXES),
  ],
}

const locationPage: PageSchema = {
  id: 'apicultura-onde-instalar',
  siteKey: SITE_KEY,
  type: 'article',
  slug: SLUG_LOCATION,
  title: 'Onde instalar o meliponário',
  status: 'published',
  meta: {
    title: 'Onde instalar o meliponário',
    description: 'Como escolher o local da caixa, pensar microclima, flora, suporte e evitar os erros mais comuns do ponto de instalação.',
    ogImage: OG_IMAGE,
  },
  blocks: [
    breadcrumb('Onde instalar o meliponário', SLUG_LOCATION),
    {
      type: 'richText',
      html: `
        <section style="padding:4px 0 18px;border-top:2px solid ${COLOR_HONEY};border-bottom:1px solid ${COLOR_LINE};">
          <div style="display:inline-flex;color:${COLOR_HONEY};font-size:0.78rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">Passo 3</div>
          <h1 style="margin:14px 0 10px;color:${COLOR_INK};">Onde instalar o meliponário e o que observar no local</h1>
          <p style="margin:0;font-size:1.15rem;line-height:1.75;color:${COLOR_MUTED};">Uma boa espécie em uma boa caixa ainda pode fracassar se o ponto escolhido for ruim. Em meliponicultura, o lugar pesa muito.</p>
        </section>
      `,
    },
    {
      type: 'articleContent',
      author: authorBox.name,
      publishedAt: PUBLISHED_AT,
      html: `
        <h2>O melhor lugar não é o mais bonito, é o mais estável</h2>
        <p>A caixa precisa ficar em um ponto limpo, sombreado, protegido de vento, com acesso fácil para observação e sem chuva direta. A grande pergunta aqui não é “onde ela vai ficar mais charmosa?”, mas “onde ela vai sofrer menos variação e menos estresse?”.</p>

        <h2>Sol, vento e chuva entram no cálculo</h2>
        <p>Caixa tomando sol forte da tarde, caixa pegando vento direto ou caixa recebendo água na tampa e nas frestas já começa errado. A estabilidade térmica pesa muito porque a colônia trabalha o tempo todo para manter o ninho em condição adequada.</p>

        <h2>Suporte e altura também importam</h2>
        <p>Em materiais técnicos da Embrapa, as caixas aparecem em geral em torno de 0,5 metro do chão, sobre cavaletes ou suportes firmes. Isso ajuda a reduzir umidade, melhora acesso e dificulta parte dos problemas com solo, formigas e respingos de chuva.</p>
      `,
    },
    affiliateCard(PRODUCT_ISCA),
    {
      type: 'articleContent',
      html: `
        <h2>O entorno da caixa faz parte do meliponário</h2>
        <p>Flora ao redor, presença de água, resinas vegetais, ausência de fumaça e de pulverização e pouca circulação agressiva de pessoas e animais contam tanto quanto a caixa. Não basta a colônia ficar “na sombra”. Ela precisa viver em um entorno minimamente coerente.</p>

        <h2>Microclima ruim cobra caro</h2>
        <p>Parede muito quente, telha refletindo calor, canto abafado, umidade acumulada e vento canalizado parecem detalhes pequenos quando a caixa ainda está vazia. Depois que a colônia entra, esses detalhes viram rotina de estresse.</p>

        <h2>Erros comuns nessa etapa</h2>
        <p>Escolher o local pela conveniência do criador, não pela estabilidade da colônia; ignorar o sol da tarde; subestimar vento; esquecer a flora do entorno; e tratar o ponto da caixa como se ele pudesse ser corrigido com manejo frequente depois.</p>
      `,
    },
    {
      type: 'callout',
      calloutType: 'tip',
      title: 'Teste simples',
      content: 'Se o lugar muda demais ao longo do dia ou força a caixa a tomar calor, vento ou umidade em excesso, ele provavelmente não é um bom ponto.',
    },
    {
      type: 'cta',
      label: 'Avançar para o passo 4',
      href: pageHref(SLUG_FIRST_MONTH),
      variant: 'primary',
    },
    affiliateCard(PRODUCT_ISCA),
    allPageLinks(SLUG_LOCATION),
  ],
}

const firstMonthPage: PageSchema = {
  id: 'apicultura-primeiro-mes',
  siteKey: SITE_KEY,
  type: 'article',
  slug: SLUG_FIRST_MONTH,
  title: 'O primeiro mês da colônia',
  status: 'published',
  meta: {
    title: 'O primeiro mês da colônia',
    description: 'Como atravessar o primeiro mês com menos ansiedade, mais observação e menos perda por manejo excessivo.',
    ogImage: OG_IMAGE,
  },
  blocks: [
    breadcrumb('O primeiro mês da colônia', SLUG_FIRST_MONTH),
    {
      type: 'richText',
      html: `
        <section style="padding:4px 0 18px;border-top:2px solid ${COLOR_GREEN};border-bottom:1px solid ${COLOR_LINE};">
          <div style="display:inline-flex;color:${COLOR_GREEN};font-size:0.78rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">Passo 4</div>
          <h1 style="margin:14px 0 10px;color:${COLOR_INK};">O que fazer no primeiro mês da colônia</h1>
          <p style="margin:0;font-size:1.15rem;line-height:1.75;color:${COLOR_MUTED};">O primeiro mês não serve para provar que você sabe manejar. Serve para estabilizar a colônia, entender o ritmo da entrada e corrigir o ambiente sem abrir a caixa por ansiedade.</p>
        </section>
      `,
    },
    {
      type: 'articleContent',
      author: authorBox.name,
      publishedAt: PUBLISHED_AT,
      html: `
        <h2>Primeira regra: observe muito, abra pouco</h2>
        <p>O erro clássico do iniciante é abrir a caixa cedo demais e com frequência demais. No começo, a colônia ainda está se ajustando ao local, à temperatura e à rotina do entorno. A observação externa costuma ensinar mais do que uma sequência de aberturas mal planejadas.</p>

        <h2>Como as abelhas chegam para dentro da caixa</h2>
        <p>Essa é uma dúvida importante, porque muita gente imagina uma cena parecida com enxameação de <em>Apis mellifera</em>. Na meliponicultura, o caminho mais comum do iniciante é outro: a colônia já chega instalada numa caixa racional, ou entra nessa caixa por transferência, divisão ou ocupação de isca conduzida por alguém que já domina esse processo. O ponto prático é este: você normalmente recebe uma colônia já organizada, com entrada, ninho e alimento, e o seu papel inicial não é “montar” a colônia do zero. É não atrapalhar a adaptação.</p>

        <h2>O que fazer no dia em que a colônia chega</h2>
        <p>O melhor cenário é a caixa já ir direto para o ponto definitivo. O suporte precisa estar firme, nivelado, protegido de formigas e fora de sol forte, vento direto e chuva batendo. Depois da instalação, o trabalho mais inteligente é reduzir manipulação: observar a entrada, confirmar se a caixa está estável e deixar a colônia reconhecer o novo entorno.</p>

        <h2>O que observar na entrada</h2>
        <p>Entrada e saída de campeiras, presença de pólen, ritmo de movimento ao longo do dia e reação ao clima já dizem bastante. Se a entrada está ativa, há ida e volta regular e a colônia parece organizada, isso costuma ser um bom sinal. Se há queda brusca de atividade, cheiro estranho ou movimentação muito desordenada, vale acender alerta.</p>

        <h2>Quando mexer no ambiente em vez de mexer na caixa</h2>
        <p>Se o problema parece ser calor, chuva, vento, formiga no suporte ou exposição excessiva, a primeira correção quase sempre está fora da caixa. Ajustar sombra, proteção e suporte costuma ser mais útil do que abrir o ninho por impulso.</p>
      `,
    },
    affiliateCard(PRODUCT_ISCA),
    {
      type: 'articleContent',
      html: `
        <h2>Como estabelecer a colônia nas primeiras semanas</h2>
        <p>Estabelecer a colônia significa fazer com que ela reconheça o ponto, mantenha entrada ativa, retome coleta de pólen e néctar e não perca energia com mudanças desnecessárias. Na prática, isso pede três coisas: caixa parada no lugar certo, ambiente estável e baixa ansiedade do criador. Ficar mudando orientação da entrada, abrindo a tampa cedo demais ou mexendo em módulos sem necessidade atrasa justamente essa fase de assentamento.</p>

        <h2>Revisão interna pede critério</h2>
        <p>Em linhas gerais, a revisão mais cuidadosa costuma fazer sentido depois de um período inicial de estabilização, e não como ritual semanal. Quando ela acontecer, o objetivo deve ser confirmar sanidade, alimento e organização do ninho, não satisfazer curiosidade.</p>

        <h2>Não fique mudando a caixa de lugar</h2>
        <p>Outra ansiedade comum é a de reposicionar a colônia cedo demais. Mudanças repetidas confundem a orientação das campeiras e bagunçam a adaptação. Se o ponto foi escolhido com critério, o melhor geralmente é dar tempo para a colônia se assentar.</p>

        <h2>O foco do primeiro mês</h2>
        <ul>
          <li>Confirmar que o local funciona.</li>
          <li>Observar atividade normal na entrada.</li>
          <li>Perceber sinais de umidade, calor ou invasores.</li>
          <li>Evitar manejo teatral.</li>
          <li>Entender o ritmo da colônia antes de querer acelerar qualquer coisa.</li>
        </ul>
      `,
    },
    {
      type: 'callout',
      calloutType: 'warning',
      title: 'Erro clássico',
      content: 'Abrir a caixa toda semana para ver como ela está costuma ensinar menos do que observar bem a entrada e o ambiente.',
    },
    {
      type: 'cta',
      label: 'Avançar para o passo 5',
      href: pageHref(SLUG_HEALTH),
      variant: 'primary',
    },
    affiliateCard(PRODUCT_ISCA),
    allPageLinks(SLUG_FIRST_MONTH),
  ],
}

const healthPage: PageSchema = {
  id: 'apicultura-alimentacao-sanidade',
  siteKey: SITE_KEY,
  type: 'article',
  slug: SLUG_HEALTH,
  title: 'Alimentação, sanidade e erros',
  status: 'published',
  meta: {
    title: 'Alimentação, sanidade e erros',
    description: 'Como pensar flora, suplementação, forídeos, umidade, mel e os erros que mais derrubam colônias de iniciantes.',
    ogImage: OG_IMAGE,
  },
  blocks: [
    breadcrumb('Alimentação, sanidade e erros', SLUG_HEALTH),
    {
      type: 'richText',
      html: `
        <section style="padding:4px 0 18px;border-top:2px solid ${COLOR_HONEY};border-bottom:1px solid ${COLOR_LINE};">
          <div style="display:inline-flex;color:${COLOR_HONEY};font-size:0.78rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">Passo 5</div>
          <h1 style="margin:14px 0 10px;color:${COLOR_INK};">Alimentação, sanidade e erros que derrubam colônias</h1>
          <p style="margin:0;font-size:1.15rem;line-height:1.75;color:${COLOR_MUTED};">Depois que espécie, caixa e local estão resolvidos, o que mantém a colônia viva é rotina boa, flora boa e pouco improviso.</p>
        </section>
      `,
    },
    {
      type: 'articleContent',
      author: authorBox.name,
      publishedAt: PUBLISHED_AT,
      html: `
        <h2>Flora continua sendo a base</h2>
        <p>Abelhas sem ferrão dependem de néctar, pólen, água e resinas. O melhor sistema é aquele em que o entorno oferece recurso ao longo do ano. Alimentação suplementar existe, mas não substitui ambiente ruim nem corrige local pobre em florada por muito tempo.</p>

        <h2>Quando a suplementação faz sentido</h2>
        <p>Ela entra como apoio: fase de escassez, colônia fraca, transferência recente, recuperação ou momento específico de necessidade. Em materiais da Embrapa, o xarope 1:1 aparece como referência de suporte energético, em pequena quantidade e para consumo rápido, não como base permanente.</p>

        <h2>Que alimentação é essa, na prática</h2>
        <p>No dia a dia, o reforço mais citado para emergência é o energético: xarope 1:1, feito com uma parte de água e uma parte de açúcar, em volume pequeno e com consumo rápido para não fermentar. Em colônias pequenas, isso costuma significar poucos mililitros; em colônias maiores, um pouco mais, sempre com cuidado para não sobrar alimento velho dentro da caixa. Quando a carência é de proteína, entram formulações proteicas ou apoio com base em pólen, mas esse já é um terreno em que improviso ruim costuma custar caro.</p>

        <h2>Sanidade começa com colônia forte</h2>
        <p>Forídeos, formigas, mofo, excesso de umidade, sujeira e cheiro estranho costumam pesar mais em colônias fracas ou mal instaladas. Por isso, sanidade não começa no remédio. Começa em espécie certa, caixa certa, local certo e revisão com critério.</p>
      `,
    },
    affiliateCard(PRODUCT_INPA),
    {
      type: 'articleContent',
      html: `
        <h2>Forídeos merecem atenção especial</h2>
        <p>Essas pequenas moscas aparecem com frequência na literatura técnica porque podem comprometer pólen, cria e organização interna, principalmente em colônias debilitadas. Prevenção básica passa por evitar danos desnecessários durante o manejo, manter a caixa limpa e fortalecer a colônia em vez de agredi-la com revisões ruins.</p>

        <h2>Quando alimentar e quando não alimentar</h2>
        <p>Se a colônia está forte, com entrada ativa e boa oferta de flora, alimentar por hábito costuma ser mais erro do que cuidado. A suplementação faz mais sentido em escassez, em transferência recente, em colônia fraca ou logo depois de divisão, sempre em pouca quantidade e com observação de consumo. Alimentador vazando, xarope esquecido e resto fermentando fazem o oposto do que o iniciante queria fazer.</p>

        <h2>Mel entra depois, e com cuidado</h2>
        <p>O mel de abelhas sem ferrão é mais delicado. Isso muda a lógica do iniciante. Colher cedo, retirar de potes abertos ou manipular sem higiene é a forma mais rápida de perder qualidade. O começo maduro aceita que o objetivo inicial não é produzir. É consolidar a colônia.</p>

        <h2>Erros mais comuns</h2>
        <ul>
          <li>Alimentar demais e deixar fermentar.</li>
          <li>Abrir a caixa mais do que o necessário.</li>
          <li>Ignorar formigas, umidade e cheiro estranho.</li>
          <li>Tentar colher mel cedo demais.</li>
          <li>Querer multiplicar antes de saber manter a colônia forte.</li>
        </ul>
      `,
    },
    {
      type: 'comparisonTable',
      headers: ['Tema', 'Abordagem madura', 'Erro comum'],
      rows: [
        {
          label: 'Flora',
          values: [
            'Melhorar o entorno e observar sazonalidade',
            'Achar que xarope resolve tudo',
          ],
        },
        {
          label: 'Suplementação',
          values: [
            'Usar como apoio pontual',
            'Transformar em rotina crônica',
          ],
        },
        {
          label: 'Mel',
          values: [
            'Esperar a colônia ficar forte e colher com higiene',
            'Querer retirar cedo e de qualquer jeito',
          ],
        },
      ],
    },
    {
      type: 'cta',
      label: 'Voltar ao guia completo',
      href: pageHref('home'),
      variant: 'primary',
    },
    affiliateCard(PRODUCT_ISCA),
    allPageLinks(SLUG_HEALTH),
  ],
}

const legalPage: PageSchema = {
  id: 'apicultura-legalizacao',
  siteKey: SITE_KEY,
  type: 'article',
  slug: SLUG_LEGAL,
  title: 'Legalização da meliponicultura',
  status: 'published',
  meta: {
    title: 'Legalização da meliponicultura',
    description: 'Leitura de apoio sobre ocorrência natural, Catálogo Nacional, origem, transporte e regra local na meliponicultura.',
    ogImage: OG_IMAGE,
  },
  blocks: [
    breadcrumb('Legalização da meliponicultura', SLUG_LEGAL),
    {
      type: 'richText',
      html: `
        <section style="padding:4px 0 18px;border-top:2px solid ${COLOR_GREEN};border-bottom:1px solid ${COLOR_LINE};">
          <div style="display:inline-flex;color:${COLOR_GREEN};font-size:0.78rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">Leitura de Apoio</div>
          <h1 style="margin:14px 0 10px;color:${COLOR_INK};">Legalização da meliponicultura: leitura de apoio para origem e regra local</h1>
          <p style="margin:0;font-size:1.15rem;line-height:1.75;color:${COLOR_MUTED};">Esta página não é o centro do guia, mas explica por que procedência, território e regra local aparecem tão cedo na meliponicultura. Quando você entende isso, a conversa sobre espécie deixa de ser gosto pessoal e vira contexto ecológico e técnico.</p>
        </section>
      `,
    },
    {
      type: 'articleContent',
      author: authorBox.name,
      publishedAt: PUBLISHED_AT,
      html: `
        <h2>Fauna nativa exige mais contexto</h2>
        <p>Meliponicultura lida com abelhas nativas e, por isso, a conversa sobre ocorrência natural, origem da colônia, transporte e manejo não pode ser tratada como detalhe irrelevante. É esse pano de fundo que explica por que espécie e procedência aparecem tão cedo nas decisões do iniciante.</p>

        <h2>O que a regra federal ajuda a organizar</h2>
        <p>A Resolução CONAMA nº 496/2020 é uma referência federal importante porque organiza conceitos ligados a meliponário, meliponicultor, recipientes-isca, resgate e hipóteses de autorização. Ela também amarra a lógica de que espécies manejadas devem respeitar a área de ocorrência natural, salvo situações analisadas pelo órgão competente.</p>

        <h2>Por que o Catálogo Nacional importa tanto</h2>
        <p>Uma das curiosidades mais úteis dessa conversa é que o tema não depende só de “nome popular”. Existe um Catálogo Nacional de Abelhas-Nativas-Sem-Ferrão ligado justamente à noção de ocorrência natural. Na prática, isso ajuda a responder uma pergunta muito concreta: essa espécie é nativa aí ou não? O mesmo nome que parece banal numa conversa pode mudar completamente de status conforme o estado.</p>

        <h2>A mesma abelha pode ser nativa em um lugar e exótica em outro</h2>
        <p>Esse é um ponto que costuma surpreender quem está começando. Em meliponicultura, não basta dizer “é abelha brasileira”. A pergunta é se ela ocorre naturalmente naquele território. É por isso que um criador pode estar lidando com uma espécie coerente em um estado e com uma situação bem mais sensível em outro.</p>
      `,
    },
    affiliateCard(PRODUCT_KIT_START),
    {
      type: 'articleContent',
      html: `

        <h2>Recipientes-isca, resgate e transporte não são detalhe</h2>
        <p>Quando a norma cita recipientes-isca e resgate, ela mostra que a obtenção de colônias não é um gesto neutro. Isso é interessante porque desmonta uma fantasia comum: a de que qualquer enxame encontrado ou qualquer caixa oferecida por aí já seria automaticamente um bom começo. Não é assim. Origem e contexto continuam importando.</p>

        <h2>Por que o estado continua pesando</h2>
        <p>Na prática, o procedimento concreto varia por estado. Alguns órgãos explicam melhor como funciona cadastro, autorização e trânsito; outros exigem mais leitura e contato direto. O que não muda é a lógica: o iniciante prudente não trata origem e território como burocracia chata. Trata como parte da decisão técnica de começar direito.</p>

        <h2>O que a faixa de até 49 colônias realmente sugere</h2>
        <p>Em discussões sobre a resolução federal, aparece bastante a faixa de até 49 colônias sem exploração econômica. O ponto interessante aqui é entender o que isso não quer dizer: não significa que o tema virou terra sem regra, nem que espécie e origem deixaram de importar. Significa apenas que existem situações com enquadramento mais simples no plano federal, sem apagar a leitura estadual.</p>

        <h2>O alerta mais simples</h2>
        <p>Se a compra parece fácil demais, ninguém fala de procedência, ninguém menciona território natural e tudo é vendido como se fosse só escolher a caixa mais bonita, vale desconfiar. Em meliponicultura, conforto excessivo no primeiro contato costuma esconder contexto insuficiente.</p>

        <h2>Por que isso melhora até a experiência do hobby</h2>
        <p>À primeira vista, legalização parece um assunto seco. Na prática, ela melhora a experiência inteira. Quando a espécie faz sentido no seu lugar, a origem é mais confiável e o contexto é conhecido, o manejo fica mais previsível, a chance de erro cai e o hobby deixa de começar em cima de uma dúvida mal resolvida.</p>
      `,
    },
    {
      type: 'cta',
      label: 'Voltar ao guia principal',
      href: pageHref('home'),
      variant: 'secondary',
    },
    affiliateCard(PRODUCT_ISCA),
    allPageLinks(SLUG_LEGAL),
  ],
}

export const apiculturaBrSite: SiteEntry = {
  config: {
    siteKey: SITE_KEY,
    publicName: 'Abelhas sem Ferrão',
    routePath: ROUTE_PATH,
    locale: 'pt-BR',
    market: 'BR',
    status: 'active',
    theme: {
      brandName: 'Abelhas sem Ferrão',
      primaryColor: COLOR_GREEN,
      accentColor: COLOR_HONEY,
      surfaceColor: COLOR_PAPER,
      textColor: COLOR_INK,
      radius: '20px',
      fontFamilyHeading: 'Georgia, "Times New Roman", serif',
    },
    seo: {
      siteTitle: 'Abelhas sem Ferrão',
      defaultTitleTemplate: '%s | Abelhas sem Ferrão',
      defaultDescription: 'Introdução completa e guia passo a passo para começar com abelhas sem ferrão no Brasil.',
      baseUrl: BASE_URL,
      defaultOgImage: OG_IMAGE,
    },
    analytics: {
      ga4MeasurementId: 'G-G04VC9SZ3Z',
      enabled: true,
    },
    monetization: {
      ads: {
        enabled: process.env.NEXT_PUBLIC_ADS_TEST_MODE !== 'true',
        provider: 'adsense',
        publisherId: 'ca-pub-7072076910984234',
      },
      affiliates: {
        enabled: true,
        programs: [
          {
            id: AFFILIATE_PROGRAM_ID,
            name: 'Mercado Livre - Abelhas sem Ferrão',
            baseUrl: 'https://www.mercadolivre.com.br',
          },
        ],
      },
    },
  },
  pages: [
    homePage,
    speciesPage,
    boxesPage,
    locationPage,
    firstMonthPage,
    healthPage,
    legalPage,
  ],
}
