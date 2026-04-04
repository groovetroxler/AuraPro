/**
 * sites/energia-solar-br/index.ts
 * Energia Solar BR — Guia completo de energia solar residencial no Brasil
 */

import type {
  BreadcrumbBlock,
  PageSchema,
  RelatedLinksBlock,
  SiteEntry,
} from '../../core/types/contracts'
import { resolveSiteBaseUrl } from '../../config/site-url'

const SITE_KEY = 'energia-solar-br'
const ROUTE_PATH = 'energia-solar'
const BASE_URL = resolveSiteBaseUrl(ROUTE_PATH)
const PUBLISHED_AT = '2026-04-04'

const SLUG_COMO_FUNCIONA = 'como-funciona-energia-solar'
const SLUG_CUSTO = 'quanto-custa-e-quanto-economiza'
const SLUG_EQUIPAMENTOS = 'como-escolher-equipamentos'
const SLUG_INSTALADOR = 'como-escolher-instalador'
const SLUG_PASSO_A_PASSO = 'passo-a-passo-instalacao'
const SLUG_LEGISLACAO = 'legislacao-e-financiamento'
const SLUG_EDITORIAL_ERROS = 'erros-comuns-energia-solar'
const SLUG_EDITORIAL_MERCADO = 'mercado-solar-2026'
const SLUG_EDITORIAL_APTO = 'energia-solar-apartamento'

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

function allGuideLinks(currentSlug: string): RelatedLinksBlock {
  return {
    type: 'relatedLinks',
    links: [
      { label: 'Página inicial: guia de energia solar', slug: 'home' },
      { label: 'Como funciona a energia solar residencial', slug: SLUG_COMO_FUNCIONA },
      { label: 'Quanto custa e quanto você economiza', slug: SLUG_CUSTO },
      { label: 'Como escolher painel e inversor', slug: SLUG_EQUIPAMENTOS },
      { label: 'Como escolher uma empresa instaladora', slug: SLUG_INSTALADOR },
      { label: 'Passo a passo da instalação', slug: SLUG_PASSO_A_PASSO },
      { label: 'Legislação, Fio B e financiamento', slug: SLUG_LEGISLACAO },
    ]
      .filter((item) => item.slug !== currentSlug)
      .map((item) => ({ label: item.label, href: pageHref(item.slug) })),
  }
}

// HOME

const homePage: PageSchema = {
  id: 'solar-home',
  siteKey: SITE_KEY,
  type: 'home',
  slug: 'home',
  title: 'Início',
  status: 'published',
  meta: {
    title: 'Energia Solar Residencial: guia completo para instalar em 2026',
    description: 'Guia prático de energia solar residencial. Veja como funciona, quanto custa, como escolher equipamento e instalador, e o que diz a legislação em 2026.',
  },
  blocks: [
    {
      type: 'hero',
      heading: 'Energia solar residencial: vale a pena em 2026?',
      subheading: 'Um guia direto para quem quer entender custos reais, economia possível e o que mudou na legislação — sem promessa de marketing.',
    },
    {
      type: 'articleContent',
      html: `
<p>O Brasil tem mais de 3,7 milhões de sistemas solares instalados. A fonte fotovoltaica já é a segunda maior da matriz elétrica brasileira, com 64 GW de capacidade e mais de R$ 280 bilhões em investimentos acumulados desde 2012, segundo dados da ABSOLAR atualizados em janeiro de 2026.</p>

<p>Mas números grandes não respondem a pergunta que realmente importa: <strong>faz sentido para a sua casa, com a sua conta de luz, no cenário de hoje?</strong></p>

<p>A resposta curta é: para a maioria das residências com conta acima de R$ 300/mês, sim. Um sistema bem dimensionado reduz a conta de luz entre 70% e 90%, se paga em 4 a 6 anos, e dura mais de 25. Mas existem armadilhas — desde empresas mal qualificadas até regras novas da Lei 14.300 que muita gente não conhece.</p>

<p>Este guia explica tudo o que você precisa saber para tomar uma decisão informada. Sem enrolação, com números reais e com os cuidados que ninguém costuma mencionar.</p>

<h2>O que você vai encontrar neste guia</h2>

<p>Organizamos o conteúdo na ordem em que as decisões acontecem na prática. Você pode ler tudo de uma vez ou ir direto ao ponto que precisa:</p>
      `,
      author: 'Equipe Energia Solar BR',
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'cardsGrid',
      cards: [
        { title: '1. Como funciona', description: 'Painel, inversor, medidor bidirecional, créditos de energia — o sistema explicado sem jargão técnico.', href: pageHref(SLUG_COMO_FUNCIONA) },
        { title: '2. Quanto custa e quanto economiza', description: 'Valores reais de mercado em 2026, simulação por faixa de consumo e comparação com outros investimentos.', href: pageHref(SLUG_CUSTO) },
        { title: '3. Como escolher equipamentos', description: 'Critérios para painel e inversor: eficiência, garantia, certificação e o que realmente diferencia marcas.', href: pageHref(SLUG_EQUIPAMENTOS) },
        { title: '4. Como escolher o instalador', description: 'O que verificar antes de contratar, erros comuns e as perguntas que evitam dor de cabeça.', href: pageHref(SLUG_INSTALADOR) },
        { title: '5. Passo a passo da instalação', description: 'Do orçamento à ativação: cada etapa com prazo real e o que depende de você vs. o que depende da concessionária.', href: pageHref(SLUG_PASSO_A_PASSO) },
        { title: '6. Legislação e financiamento', description: 'Lei 14.300, Fio B, isenção de ICMS e linhas de crédito — o que mudou e como isso afeta quem instala agora.', href: pageHref(SLUG_LEGISLACAO) },
      ],
    },
    {
      type: 'articleContent',
      html: `
<h2>O cenário de energia solar no Brasil em 2026</h2>

<p>Energia solar não é mais novidade no Brasil. É um mercado maduro, com mais de 1,9 milhão de empregos gerados e presença em todos os estados. Mas 2026 traz um cenário específico que vale entender antes de investir:</p>

<p><strong>O que está a seu favor:</strong> as tarifas de energia subiram acima da inflação nos últimos anos, e a tendência não é de queda. Cada reajuste aumenta a economia que o sistema solar gera. Além disso, os preços dos equipamentos caíram significativamente na última década — um sistema que custava R$ 50 mil em 2015 hoje sai por menos da metade.</p>

<p><strong>O que exige atenção:</strong> a Lei 14.300 de 2022 introduziu a cobrança progressiva do Fio B — uma tarifa pelo uso da rede de distribuição — para novos sistemas. Em 2026, a cobrança está em 60% do valor cheio. Isso não inviabiliza o investimento (a economia ainda fica entre 70% e 82% da conta), mas muda o cálculo. Quem instala agora garante as condições atuais, que são melhores do que serão em 2027.</p>

<p>A Selic continua alta, perto de 15% ao ano, o que encarece o financiamento. Mas mesmo financiado, o sistema costuma se pagar antes do fim das parcelas — a economia mensal na conta de luz cobre parte ou todo o valor da prestação.</p>

<h2>Para quem este guia serve (e para quem não serve)</h2>

<p>Este guia foi pensado para quem mora em casa própria e paga mais de R$ 250/mês de luz. Se esse é o seu caso, a energia solar quase certamente faz sentido financeiro para você.</p>

<p>Se você mora em apartamento, também existem opções — como a geração distribuída por assinatura (GD compartilhada). Escrevemos um editorial específico sobre isso: <a href="${pageHref(SLUG_EDITORIAL_APTO)}">Energia solar para quem mora em apartamento</a>.</p>

<p>Se sua conta de luz é baixa (menos de R$ 150/mês), o sistema pode demorar mais para se pagar. Não é que não funcione — é que o retorno financeiro fica mais apertado. Nesse caso, vale calcular com cuidado antes de decidir.</p>

<h2>O que você precisa decidir (e em que ordem)</h2>

<p>A maioria das pessoas começa perguntando "quanto custa?" — e essa é a pergunta errada para começar. O custo depende de várias coisas que vêm antes:</p>

<p><strong>Primeiro:</strong> entenda como o sistema funciona. Não precisa virar engenheiro, mas saber o básico evita que você dependa 100% do vendedor. → <a href="${pageHref(SLUG_COMO_FUNCIONA)}">Como funciona a energia solar residencial</a></p>

<p><strong>Segundo:</strong> faça as contas. Não confie em "economia de até 95%" que aparece em propaganda. O número real depende do seu consumo, da sua tarifa e da sua região. → <a href="${pageHref(SLUG_CUSTO)}">Quanto custa e quanto você realmente economiza</a></p>

<p><strong>Terceiro:</strong> entenda o equipamento. Painel barato pode sair caro. Inversor subdimensionado limita o sistema. Garantia curta é risco. → <a href="${pageHref(SLUG_EQUIPAMENTOS)}">Como escolher painel solar e inversor</a></p>

<p><strong>Quarto:</strong> escolha bem o instalador. Essa é a decisão que mais gente erra, e a que mais custa quando dá errado. → <a href="${pageHref(SLUG_INSTALADOR)}">Como escolher uma empresa de energia solar</a></p>

<p><strong>Quinto:</strong> saiba o que vai acontecer. A instalação em si é rápida (1-3 dias), mas o processo completo envolve projeto, aprovação da concessionária e vistoria. → <a href="${pageHref(SLUG_PASSO_A_PASSO)}">Passo a passo da instalação</a></p>

<p><strong>Sexto:</strong> conheça as regras. A legislação solar brasileira mudou recentemente e afeta diretamente o retorno do investimento. Se for financiar, conheça as opções reais. → <a href="${pageHref(SLUG_LEGISLACAO)}">Legislação, Fio B e financiamento</a></p>

<h2>Três números que resumem a decisão</h2>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'stats',
      items: [
        { value: '70-90%', label: 'Redução na conta de luz com sistema bem dimensionado' },
        { value: '4-6 anos', label: 'Payback médio para residência no Sudeste' },
        { value: '25+ anos', label: 'Vida útil dos painéis solares' },
      ],
    },
    {
      type: 'articleContent',
      html: `
<p>Esses números são médias reais de mercado, não cenário otimista de vendedor. O payback varia conforme a região (no Nordeste tende a ser mais curto por causa da irradiação), a tarifa local e o dimensionamento do sistema.</p>

<h2>Erros mais comuns de quem instala energia solar</h2>

<p>Antes de mergulhar no guia, vale conhecer os erros que mais vemos. Eles aparecem em detalhe no editorial <a href="${pageHref(SLUG_EDITORIAL_ERROS)}">7 erros que mais custam caro na instalação de energia solar</a>, mas os principais são:</p>

<ul>
<li><strong>Escolher pelo menor preço.</strong> O equipamento mais barato quase sempre tem garantia curta, eficiência menor ou inversor subdimensionado. A diferença de preço se paga em 2-3 anos de produção perdida.</li>
<li><strong>Não verificar a empresa.</strong> Instalador sem homologação na ANEEL, sem CNPJ ativo ou sem portfólio verificável é risco alto. O mercado tem muita empresa oportunista.</li>
<li><strong>Superdimensionar o sistema.</strong> Instalar mais painéis do que o necessário não gera economia extra — você acumula créditos que podem virar prejuízo com as novas regras do Fio B.</li>
<li><strong>Ignorar sombreamento.</strong> Uma árvore, prédio vizinho ou caixa d'água mal posicionada pode reduzir a eficiência em até 50%. Nem toda empresa faz análise de sombra correta.</li>
</ul>

<h2>Comece pelo que importa</h2>

<p>Se você está começando do zero, a leitura mais útil é <a href="${pageHref(SLUG_COMO_FUNCIONA)}">Como funciona a energia solar residencial</a> — 10 minutos que vão fazer toda diferença nas conversas que você vai ter com integradores.</p>

<p>Se já sabe como funciona e quer ir direto aos números, vá para <a href="${pageHref(SLUG_CUSTO)}">Quanto custa e quanto você realmente economiza</a>.</p>

<p>Se já decidiu instalar e quer evitar erros, comece por <a href="${pageHref(SLUG_INSTALADOR)}">Como escolher uma empresa de energia solar</a>.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'adSlot',
      slotId: 'solar-home-mid',
      format: 'responsive',
    },
    {
      type: 'callout',
      content: 'A energia solar é a segunda maior fonte da matriz elétrica brasileira, com 24,5% da capacidade de geração. São 64 GW instalados e 3,7 milhões de sistemas em operação em todo o país.',
      calloutType: 'info',
    },
    allGuideLinks('home'),
    {
      type: 'adSlot',
      slotId: 'solar-home-bottom',
      format: 'responsive',
    },
  ],
}

// PÁGINAS INTERNAS (stubs — expandir após aprovação do tom da home)

const pageComoFunciona: PageSchema = {
  id: 'solar-como-funciona', siteKey: SITE_KEY, type: 'article', slug: SLUG_COMO_FUNCIONA,
  title: 'Como funciona a energia solar residencial', status: 'published',
  meta: { title: 'Como funciona a energia solar residencial: do painel à conta de luz', description: 'Entenda como painéis solares geram energia, o papel do inversor, como funciona o medidor bidirecional e o sistema de créditos com a concessionária.' },
  blocks: [ breadcrumb('Como funciona', SLUG_COMO_FUNCIONA), { type: 'articleContent', html: '<h2>Como funciona a energia solar residencial</h2><p>Conteúdo completo em desenvolvimento.</p>', publishedAt: PUBLISHED_AT }, allGuideLinks(SLUG_COMO_FUNCIONA) ],
}

const pageCusto: PageSchema = {
  id: 'solar-custo', siteKey: SITE_KEY, type: 'article', slug: SLUG_CUSTO,
  title: 'Quanto custa e quanto você economiza', status: 'published',
  meta: { title: 'Quanto custa instalar energia solar e quanto você realmente economiza', description: 'Valores reais de mercado em 2026, simulação por faixa de consumo, payback, comparação com investimentos e impacto do Fio B.' },
  blocks: [ breadcrumb('Quanto custa', SLUG_CUSTO), { type: 'articleContent', html: '<h2>Quanto custa e quanto você economiza</h2><p>Conteúdo completo em desenvolvimento.</p>', publishedAt: PUBLISHED_AT }, allGuideLinks(SLUG_CUSTO) ],
}

const pageEquipamentos: PageSchema = {
  id: 'solar-equipamentos', siteKey: SITE_KEY, type: 'article', slug: SLUG_EQUIPAMENTOS,
  title: 'Como escolher painel e inversor', status: 'published',
  meta: { title: 'Como escolher painel solar e inversor: o que importa de verdade', description: 'Critérios técnicos para escolher painel e inversor solar: eficiência, garantia, certificação INMETRO, marcas e dimensionamento.' },
  blocks: [ breadcrumb('Equipamentos', SLUG_EQUIPAMENTOS), { type: 'articleContent', html: '<h2>Como escolher painel solar e inversor</h2><p>Conteúdo completo em desenvolvimento.</p>', publishedAt: PUBLISHED_AT }, allGuideLinks(SLUG_EQUIPAMENTOS) ],
}

const pageInstalador: PageSchema = {
  id: 'solar-instalador', siteKey: SITE_KEY, type: 'article', slug: SLUG_INSTALADOR,
  title: 'Como escolher uma empresa instaladora', status: 'published',
  meta: { title: 'Como escolher uma empresa de energia solar sem cair em armadilha', description: 'O que verificar antes de contratar: homologação ANEEL, portfólio, garantia, perguntas essenciais e erros comuns.' },
  blocks: [ breadcrumb('Escolher instalador', SLUG_INSTALADOR), { type: 'articleContent', html: '<h2>Como escolher uma empresa de energia solar</h2><p>Conteúdo completo em desenvolvimento.</p>', publishedAt: PUBLISHED_AT }, allGuideLinks(SLUG_INSTALADOR) ],
}

const pagePassoAPasso: PageSchema = {
  id: 'solar-passo-a-passo', siteKey: SITE_KEY, type: 'article', slug: SLUG_PASSO_A_PASSO,
  title: 'Passo a passo da instalação', status: 'published',
  meta: { title: 'Passo a passo da instalação de energia solar: do orçamento ao primeiro kWh', description: 'Cada etapa da instalação solar com prazos reais: análise de consumo, projeto, aprovação, instalação, vistoria e ativação.' },
  blocks: [ breadcrumb('Passo a passo', SLUG_PASSO_A_PASSO), { type: 'articleContent', html: '<h2>Passo a passo da instalação</h2><p>Conteúdo completo em desenvolvimento.</p>', publishedAt: PUBLISHED_AT }, allGuideLinks(SLUG_PASSO_A_PASSO) ],
}

const pageLegislacao: PageSchema = {
  id: 'solar-legislacao', siteKey: SITE_KEY, type: 'article', slug: SLUG_LEGISLACAO,
  title: 'Legislação, Fio B e financiamento', status: 'published',
  meta: { title: 'Lei 14.300, Fio B e financiamento solar: o que muda para quem instala agora', description: 'Marco legal da energia solar, regras de compensação, cobrança do Fio B, isenção de ICMS e linhas de crédito em 2026.' },
  blocks: [ breadcrumb('Legislação e financiamento', SLUG_LEGISLACAO), { type: 'articleContent', html: '<h2>Legislação, Fio B e financiamento</h2><p>Conteúdo completo em desenvolvimento.</p>', publishedAt: PUBLISHED_AT }, allGuideLinks(SLUG_LEGISLACAO) ],
}

// EDITORIAIS (stubs)

const editorialErros: PageSchema = {
  id: 'solar-editorial-erros', siteKey: SITE_KEY, type: 'article', slug: SLUG_EDITORIAL_ERROS,
  title: '7 erros que mais custam caro na instalação de energia solar', status: 'published',
  meta: { title: '7 erros que mais custam caro na instalação de energia solar', description: 'Erros comuns ao instalar energia solar: escolher pelo preço, ignorar sombreamento, superdimensionar e contratar empresa sem verificar.' },
  blocks: [ breadcrumb('Erros comuns', SLUG_EDITORIAL_ERROS), { type: 'articleContent', html: '<h2>7 erros que mais custam caro</h2><p>Conteúdo completo em desenvolvimento.</p>', publishedAt: PUBLISHED_AT }, allGuideLinks(SLUG_EDITORIAL_ERROS) ],
}

const editorialMercado: PageSchema = {
  id: 'solar-editorial-mercado', siteKey: SITE_KEY, type: 'article', slug: SLUG_EDITORIAL_MERCADO,
  title: 'Energia solar em 2026: o que mudou e o que esperar', status: 'published',
  meta: { title: 'Energia solar em 2026: o que mudou e o que esperar', description: 'Cenário do mercado solar brasileiro em 2026: dados ABSOLAR, impacto do Fio B, projeções de investimento e o que muda para o consumidor.' },
  blocks: [ breadcrumb('Mercado 2026', SLUG_EDITORIAL_MERCADO), { type: 'articleContent', html: '<h2>Energia solar em 2026</h2><p>Conteúdo completo em desenvolvimento.</p>', publishedAt: PUBLISHED_AT }, allGuideLinks(SLUG_EDITORIAL_MERCADO) ],
}

const editorialApartamento: PageSchema = {
  id: 'solar-editorial-apto', siteKey: SITE_KEY, type: 'article', slug: SLUG_EDITORIAL_APTO,
  title: 'Energia solar para quem mora em apartamento', status: 'published',
  meta: { title: 'Mora em apartamento? Como usar energia solar mesmo sem telhado', description: 'Opções de energia solar para apartamento: GD compartilhada, assinatura solar e cooperativas — como funcionam e quanto economizam.' },
  blocks: [ breadcrumb('Solar em apartamento', SLUG_EDITORIAL_APTO), { type: 'articleContent', html: '<h2>Energia solar em apartamento</h2><p>Conteúdo completo em desenvolvimento.</p>', publishedAt: PUBLISHED_AT }, allGuideLinks(SLUG_EDITORIAL_APTO) ],
}

// EXPORT

export const energiaSolarBrSite: SiteEntry = {
  config: {
    siteKey: SITE_KEY,
    publicName: 'Energia Solar BR',
    routePath: ROUTE_PATH,
    locale: 'pt-BR',
    market: 'BR',
    status: 'active',
    ui: { showAllSitesLink: false },
    theme: {
      brandName: 'Energia Solar BR',
      primaryColor: '#d97706',
      accentColor: '#b45309',
      surfaceColor: '#fffbeb',
      textColor: '#1c1917',
      radius: '12px',
      fontFamilyHeading: 'system-ui, -apple-system, sans-serif',
    },
    seo: {
      siteTitle: 'Energia Solar BR',
      defaultTitleTemplate: '%s | Energia Solar BR',
      defaultDescription: 'Guia prático de energia solar residencial no Brasil. Custos reais, equipamentos, instalação, legislação e financiamento em 2026.',
      baseUrl: BASE_URL,
    },
    analytics: { ga4MeasurementId: 'G-LL5VYXQWV9', enabled: true },
    monetization: {
      ads: { enabled: process.env.NEXT_PUBLIC_ADS_TEST_MODE !== 'true', provider: 'adsense', publisherId: 'ca-pub-7072076910984234' },
      affiliates: { enabled: false, programs: [] },
    },
  },
  pages: [
    homePage,
    pageComoFunciona,
    pageCusto,
    pageEquipamentos,
    pageInstalador,
    pagePassoAPasso,
    pageLegislacao,
    editorialErros,
    editorialMercado,
    editorialApartamento,
  ],
}
