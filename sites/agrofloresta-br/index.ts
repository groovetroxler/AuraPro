/**
 * sites/agrofloresta-br/index.ts
 */

import type { SiteEntry } from '../../core/types/contracts'

const SITE_KEY = 'agrofloresta-br'
const ROUTE_PATH = 'agrofloresta'
import { resolveSiteBaseUrl } from '../../config/site-url'
const BASE_URL = resolveSiteBaseUrl(ROUTE_PATH)

export const agroflorestaBrSite: SiteEntry = {
  config: {
    siteKey: SITE_KEY,
    publicName: 'Agrofloresta BR',
    routePath: ROUTE_PATH,
    locale: 'pt-BR',
    market: 'BR',
    status: 'active',
    ui: {
      showAllSitesLink: false,
    },
    theme: {
      brandName: 'Agrofloresta BR',
      primaryColor: '#16a34a',
    },
    seo: {
      siteTitle: 'Agrofloresta BR',
      defaultTitleTemplate: '%s | Agrofloresta BR',
      defaultDescription: 'Guia completo sobre sistemas agroflorestais no Brasil: como implantar, benefícios, espécies e produção sustentável.',
      baseUrl: BASE_URL,
    },
    analytics: {
      ga4MeasurementId: 'G-C06N4NTLKR',
      enabled: true,
    },
    monetization: {
      ads: {
        enabled: process.env.NEXT_PUBLIC_ADS_TEST_MODE !== 'true',
        provider: 'adsense',
        publisherId: 'ca-pub-7072076910984234',
      },
      affiliates: {
        enabled: false,
        programs: [
          {
            id: 'PLACEHOLDER_AFFILIATE_AGROFLORESTA',
            name: 'Programa de Afiliados Agrofloresta (placeholder)',
            baseUrl: 'https://example.com/afiliados/agrofloresta',
          },
        ],
      },
    },
  },
  pages: [
    {
      id: 'agrofloresta-home',
      siteKey: SITE_KEY,
      type: 'home',
      slug: 'home',
      title: 'Início',
      status: 'published',
      meta: {
        title: 'Agrofloresta BR — Sistemas Agroflorestais no Brasil',
        description: 'Guia completo sobre sistemas agroflorestais no Brasil: como implantar, benefícios, espécies e produção sustentável.',
      },
      blocks: [
        {
          type: 'hero',
          heading: 'Agrofloresta no Brasil',
          subheading: 'Aprenda sobre sistemas agroflorestais, produção sustentável e como integrar árvores, cultivos e animais na sua propriedade.',
          ctaLabel: 'Como implantar',
          ctaHref: `/${ROUTE_PATH}/como-implantar`,
        },
        {
          type: 'richText',
          html: `<p>A agrofloresta é um sistema produtivo que combina árvores, cultivos agrícolas e, em alguns casos, animais. No Brasil, essa prática tem se expandido como alternativa sustentável e economicamente viável para pequenos e médios produtores.</p>`,
        },
        {
          type: 'adSlot',
          slotId: 'agrofloresta-home-top',
          format: 'responsive',
        },
        {
          type: 'relatedLinks',
          links: [
            { label: 'Como implantar um sistema agroflorestal', href: `/${ROUTE_PATH}/como-implantar` },
            { label: 'Espécies recomendadas para agrofloresta', href: `/${ROUTE_PATH}/especies` },
          ],
        },
        {
          type: 'cta',
          label: 'Começar a aprender',
          href: `/${ROUTE_PATH}/como-implantar`,
          variant: 'primary',
        },
      ],
    },
    {
      id: 'agrofloresta-como-implantar',
      siteKey: SITE_KEY,
      type: 'article',
      slug: 'como-implantar',
      title: 'Como Implantar um Sistema Agroflorestal',
      status: 'published',
      meta: {
        title: 'Como Implantar um Sistema Agroflorestal',
        description: 'Passo a passo para implantar um sistema agroflorestal no Brasil: planejamento, preparo do solo, espécies e manejo.',
      },
      blocks: [
        {
          type: 'hero',
          heading: 'Como Implantar um Sistema Agroflorestal',
          subheading: 'Do planejamento ao primeiro ciclo de produção.',
        },
        {
          type: 'articleContent',
          html: `
            <h2>O que é um sistema agroflorestal?</h2>
            <p>Um sistema agroflorestal (SAF) combina deliberadamente árvores ou arbustos com cultivos agrícolas e/ou animais na mesma área, explorando as interações ecológicas e econômicas entre esses componentes.</p>
            <h2>Etapas de implantação</h2>
            <p><strong>1. Diagnóstico:</strong> Analise o solo, clima, topografia e recursos hídricos da área.</p>
            <p><strong>2. Planejamento:</strong> Defina os objetivos e escolha as espécies adequadas ao bioma.</p>
            <p><strong>3. Preparo do solo:</strong> Prefira preparo mínimo para preservar a estrutura e a biota do solo.</p>
            <p><strong>4. Plantio:</strong> Siga o arranjo planejado, respeitando espaçamento e sucessão ecológica.</p>
            <p><strong>5. Manejo:</strong> Podas, raleamentos e introdução gradual de novos componentes conforme o sistema evolui.</p>
          `,
          author: 'Equipe Agrofloresta BR',
          publishedAt: '2025-01-20',
        },
        {
          type: 'adSlot',
          slotId: 'agrofloresta-implantacao-mid',
          format: 'rectangle',
        },
        {
          type: 'faq',
          items: [
            { question: 'Agrofloresta serve para pequenos produtores?', answer: 'Sim. A agrofloresta é especialmente adequada para a agricultura familiar, pois diversifica a produção e reduz riscos de renda.' },
            { question: 'Quanto tempo leva para ver resultados?', answer: 'As primeiras culturas de ciclo curto produzem em meses. Espécies madeireiras e frutíferas de ciclo longo levam anos, mas coexistem com produções imediatas.' },
          ],
        },
        {
          type: 'cta',
          label: 'Ver espécies recomendadas',
          href: `/${ROUTE_PATH}/especies`,
          variant: 'primary',
        },
        {
          type: 'relatedLinks',
          links: [
            { label: 'Espécies recomendadas para agrofloresta', href: `/${ROUTE_PATH}/especies` },
          ],
        },
      ],
    },
    {
      id: 'agrofloresta-especies',
      siteKey: SITE_KEY,
      type: 'article',
      slug: 'especies',
      title: 'Espécies para Agrofloresta',
      status: 'published',
      meta: {
        title: 'Espécies para Agrofloresta no Brasil',
        description: 'Conheça as principais espécies recomendadas para sistemas agroflorestais no Brasil por bioma e objetivo produtivo.',
      },
      blocks: [
        {
          type: 'hero',
          heading: 'Espécies para Agrofloresta',
          subheading: 'Árvores, cultivos e plantas de apoio para diferentes biomas brasileiros.',
        },
        {
          type: 'articleContent',
          html: `
            <h2>Como escolher as espécies</h2>
            <p>A seleção de espécies deve considerar o bioma local, o objetivo do sistema, o ciclo de vida e as interações entre espécies.</p>
            <h2>Espécies de rápido crescimento (pioneiras)</h2>
            <p>Leucena, gliricídia, crotalária e feijão-guandu crescem rapidamente, fixam nitrogênio e criam condições para as espécies subsequentes.</p>
            <h2>Frutíferas</h2>
            <p>Banana, mamão, abacate, jabuticaba, açaí e cacau são amplamente usadas em SAFs, pois produzem renda enquanto as espécies madeireiras crescem.</p>
            <h2>Espécies madeireiras</h2>
            <p>Cedro, ipê, mogno e eucalipto (em casos específicos) compõem o componente de longo prazo do sistema.</p>
          `,
          author: 'Equipe Agrofloresta BR',
          publishedAt: '2025-02-05',
        },
        {
          type: 'comparisonTable',
          headers: ['Espécie', 'Ciclo', 'Função', 'Biomas Indicados'],
          rows: [
            { label: 'Gliricídia', values: ['Perene', 'Pioneira / N-fixadora', 'Mata Atlântica, Cerrado'] },
            { label: 'Banana', values: ['1–2 anos', 'Produção / Sombra', 'Todos'] },
            { label: 'Cacau', values: ['3–5 anos', 'Produção', 'Amazônia, Mata Atlântica'] },
            { label: 'Ipê', values: ['15–30 anos', 'Madeireiro', 'Cerrado, Mata Atlântica'] },
          ],
        },
        {
          type: 'adSlot',
          slotId: 'agrofloresta-especies-mid',
          format: 'responsive',
        },
        {
          type: 'cta',
          label: 'Como implantar meu SAF',
          href: `/${ROUTE_PATH}/como-implantar`,
          variant: 'secondary',
        },
        {
          type: 'relatedLinks',
          links: [
            { label: 'Como implantar um sistema agroflorestal', href: `/${ROUTE_PATH}/como-implantar` },
          ],
        },
      ],
    },
  ],
}
