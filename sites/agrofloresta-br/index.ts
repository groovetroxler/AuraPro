/**
 * sites/agrofloresta-br/index.ts
 * Pacote do site agrofloresta-br.
 */

import type { SiteEntry } from '../../core/types/contracts'

export const agroflorestaaBrSite: SiteEntry = {
  config: {
    siteId: 'agrofloresta-br',
    name: 'Agrofloresta BR',
    routePath: 'agrofloresta',
    defaultLocale: 'pt-BR',
    analytics: {
      ga4Id: process.env.NEXT_PUBLIC_GA4_AGROFLORESTA_BR ?? 'PLACEHOLDER_GA4_AGROFLORESTA_BR',
    },
    ads: {
      publisherId: process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID ?? 'PLACEHOLDER_PUBLISHER_ID',
      testMode: process.env.NEXT_PUBLIC_ADS_TEST_MODE !== 'false',
    },
    affiliates: {
      programs: [
        {
          programId: 'PLACEHOLDER_AFFILIATE_AGROFLORESTA',
          name: 'Programa de Afiliados Agrofloresta (placeholder)',
          trackingUrl: 'https://example.com/afiliados/agrofloresta',
        },
      ],
    },
  },
  pages: [
    {
      slug: 'home',
      meta: {
        title: 'Agrofloresta BR — Sistemas Agroflorestais no Brasil',
        description:
          'Guia completo sobre sistemas agroflorestais no Brasil: como implantar, benefícios, espécies e produção sustentável.',
      },
      blocks: [
        {
          type: 'hero',
          heading: 'Agrofloresta no Brasil',
          subheading:
            'Aprenda sobre sistemas agroflorestais, produção sustentável e como integrar árvores, cultivos e animais na sua propriedade.',
          ctaLabel: 'Como implantar',
          ctaHref: '/agrofloresta/como-implantar',
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
            { label: 'Como implantar um sistema agroflorestal', href: '/agrofloresta/como-implantar' },
            { label: 'Espécies recomendadas para agrofloresta', href: '/agrofloresta/especies' },
          ],
        },
      ],
    },
    {
      slug: 'como-implantar',
      meta: {
        title: 'Como Implantar um Sistema Agroflorestal | Agrofloresta BR',
        description:
          'Passo a passo para implantar um sistema agroflorestal no Brasil: planejamento, preparo do solo, espécies e manejo.',
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
            <p><strong>2. Planejamento:</strong> Defina os objetivos (produção de alimentos, madeira, renda, restauração) e escolha as espécies.</p>
            <p><strong>3. Preparo do solo:</strong> Prefira preparo mínimo para preservar a estrutura e a biota do solo.</p>
            <p><strong>4. Plantio:</strong> Siga o arranjo planejado, respeitando o espaçamento e a sucessão ecológica.</p>
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
            {
              question: 'Agrofloresta serve para pequenos produtores?',
              answer: 'Sim. A agrofloresta é especialmente adequada para a agricultura familiar, pois diversifica a produção e reduz riscos de renda.',
            },
            {
              question: 'Quanto tempo leva para ver resultados?',
              answer: 'As primeiras culturas de ciclo curto produzem em meses. As espécies madeireiras e frutíferas de ciclo longo levam anos, mas coexistem com produções imediatas.',
            },
          ],
        },
        {
          type: 'relatedLinks',
          links: [
            { label: 'Espécies recomendadas para agrofloresta', href: '/agrofloresta/especies' },
          ],
        },
      ],
    },
    {
      slug: 'especies',
      meta: {
        title: 'Espécies para Agrofloresta no Brasil | Agrofloresta BR',
        description:
          'Conheça as principais espécies recomendadas para sistemas agroflorestais no Brasil por bioma e objetivo produtivo.',
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
            <p>A seleção de espécies deve considerar o bioma local, o objetivo do sistema (alimentar, madeireiro, econômico ou restauração), o ciclo de vida e as interações entre espécies.</p>
            <h2>Espécies de rápido crescimento (pioneiras)</h2>
            <p>Leucena, gliricídia, crotalária e feijão-guandu são espécies que crescem rapidamente, fixam nitrogênio e criam condições para as espécies subsequentes.</p>
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
          type: 'relatedLinks',
          links: [
            { label: 'Como implantar um sistema agroflorestal', href: '/agrofloresta/como-implantar' },
          ],
        },
      ],
    },
  ],
}
