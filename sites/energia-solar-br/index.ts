/**
 * sites/energia-solar-br/index.ts
 * Pacote do site energia-solar-br.
 */

import type { SiteEntry } from '../../core/types/contracts'

export const energiaSolarBrSite: SiteEntry = {
  config: {
    siteId: 'energia-solar-br',
    name: 'Energia Solar BR',
    routePath: 'energia-solar',
    defaultLocale: 'pt-BR',
    analytics: {
      ga4Id: process.env.NEXT_PUBLIC_GA4_ENERGIA_SOLAR_BR ?? 'PLACEHOLDER_GA4_ENERGIA_SOLAR_BR',
    },
    ads: {
      publisherId: process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID ?? 'PLACEHOLDER_PUBLISHER_ID',
      testMode: process.env.NEXT_PUBLIC_ADS_TEST_MODE !== 'false',
    },
    affiliates: {
      programs: [
        {
          programId: 'PLACEHOLDER_AFFILIATE_SOLAR',
          name: 'Programa de Afiliados Solar (placeholder)',
          trackingUrl: 'https://example.com/afiliados/solar',
        },
      ],
    },
  },
  pages: [
    {
      slug: 'home',
      meta: {
        title: 'Energia Solar BR — Guia Completo de Energia Solar no Brasil',
        description:
          'Tudo sobre energia solar no Brasil: como funciona, quanto custa, financiamento, instalação e economia na conta de luz.',
      },
      blocks: [
        {
          type: 'hero',
          heading: 'Energia Solar no Brasil',
          subheading:
            'Descubra como a energia solar pode reduzir sua conta de luz e o que você precisa saber antes de instalar.',
          ctaLabel: 'Quanto custa instalar?',
          ctaHref: '/energia-solar/custo-instalacao',
        },
        {
          type: 'richText',
          html: `<p>O Brasil tem um dos maiores potenciais de geração solar do mundo. Com a queda dos preços dos painéis e o sistema de compensação da Aneel, instalar energia solar nunca foi tão acessível.</p>`,
        },
        {
          type: 'adSlot',
          slotId: 'solar-home-top',
          format: 'responsive',
        },
        {
          type: 'relatedLinks',
          links: [
            { label: 'Quanto custa instalar energia solar?', href: '/energia-solar/custo-instalacao' },
            { label: 'Como funciona o financiamento solar?', href: '/energia-solar/financiamento-solar' },
          ],
        },
      ],
    },
    {
      slug: 'custo-instalacao',
      meta: {
        title: 'Quanto Custa Instalar Energia Solar? | Energia Solar BR',
        description:
          'Saiba quanto custa instalar um sistema de energia solar em 2025: painéis, inversores, mão de obra e retorno do investimento.',
      },
      blocks: [
        {
          type: 'hero',
          heading: 'Quanto Custa Instalar Energia Solar?',
          subheading: 'Valores médios, composição do custo e tempo de retorno do investimento.',
        },
        {
          type: 'articleContent',
          html: `
            <h2>Composição do custo</h2>
            <p>Um sistema solar fotovoltaico residencial é composto por painéis solares, inversor, estrutura de fixação, cabos e mão de obra de instalação. O custo varia com o tamanho do sistema e a região.</p>
            <h2>Valores médios em 2025</h2>
            <p>Para uma residência com consumo de 300 kWh/mês, o sistema necessário gira em torno de 3 kWp, com custo médio entre R$ 15.000 e R$ 22.000 instalado.</p>
            <h2>Tempo de retorno</h2>
            <p>Com a economia na conta de luz, o payback médio está entre 4 e 7 anos, dependendo da tarifa local e do tamanho do sistema.</p>
          `,
          author: 'Equipe Energia Solar BR',
          publishedAt: '2025-03-01',
        },
        {
          type: 'comparisonTable',
          headers: ['Porte', 'Consumo', 'Sistema', 'Custo Médio'],
          rows: [
            { label: 'Pequeno', values: ['150 kWh/mês', '1,5 kWp', 'R$ 8.000–12.000'] },
            { label: 'Médio', values: ['300 kWh/mês', '3 kWp', 'R$ 15.000–22.000'] },
            { label: 'Grande', values: ['600 kWh/mês', '6 kWp', 'R$ 28.000–40.000'] },
          ],
        },
        {
          type: 'adSlot',
          slotId: 'solar-custo-mid',
          format: 'rectangle',
        },
        {
          type: 'faq',
          items: [
            {
              question: 'O sistema solar funciona em dias nublados?',
              answer: 'Sim, mas com eficiência reduzida. Painéis modernos geram até 25% da capacidade em dias nublados.',
            },
            {
              question: 'Preciso de bateria para armazenar energia?',
              answer: 'Não necessariamente. Com o sistema de compensação (net metering), você injeta o excedente na rede e usa créditos à noite.',
            },
          ],
        },
        {
          type: 'cta',
          label: 'Solicite um orçamento gratuito',
          href: '#orcamento',
          variant: 'primary',
        },
      ],
    },
    {
      slug: 'financiamento-solar',
      meta: {
        title: 'Financiamento de Energia Solar — Como Funciona | Energia Solar BR',
        description:
          'Conheça as opções de financiamento para energia solar no Brasil: bancos, linhas de crédito e programas especiais.',
      },
      blocks: [
        {
          type: 'hero',
          heading: 'Financiamento de Energia Solar',
          subheading: 'Instale sem desembolso total — conheça as linhas de crédito disponíveis.',
        },
        {
          type: 'articleContent',
          html: `
            <h2>Principais opções de financiamento</h2>
            <p>Hoje existem diversas linhas de crédito específicas para energia solar no Brasil, com taxas menores que o crédito pessoal comum.</p>
            <h2>Financiamento bancário</h2>
            <p>Bancos como Banco do Brasil, Bradesco e Santander oferecem linhas de crédito para energia solar com prazo de até 60 meses e taxas a partir de 1,2% ao mês.</p>
            <h2>Programa Casa Eficiente</h2>
            <p>A Caixa Econômica Federal oferece o programa Casa Eficiente, com condições especiais para financiamento de energia solar residencial.</p>
          `,
          author: 'Equipe Energia Solar BR',
          publishedAt: '2025-03-10',
        },
        {
          type: 'adSlot',
          slotId: 'solar-financiamento-mid',
          format: 'responsive',
        },
        {
          type: 'relatedLinks',
          links: [
            { label: 'Quanto custa instalar energia solar?', href: '/energia-solar/custo-instalacao' },
          ],
        },
      ],
    },
  ],
}
