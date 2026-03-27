/**
 * sites/financas-br/index.ts
 * Pacote do site financas-br.
 */

import type { SiteEntry } from '../../core/types/contracts'

const SITE_KEY = 'financas-br'
const ROUTE_PATH = 'financas'
import { resolveSiteBaseUrl } from '../../config/site-url'
const BASE_URL = resolveSiteBaseUrl(ROUTE_PATH)

export const financasBrSite: SiteEntry = {
  config: {
    siteKey: SITE_KEY,
    publicName: 'Finanças BR',
    routePath: ROUTE_PATH,
    locale: 'pt-BR',
    market: 'BR',
    status: 'active',
    theme: {
      brandName: 'Finanças BR',
      primaryColor: '#1d4ed8',
    },
    seo: {
      siteTitle: 'Finanças BR',
      defaultTitleTemplate: '%s | Finanças BR',
      defaultDescription: 'Educação financeira prática para brasileiros: investimentos, crédito, financiamentos e planejamento.',
      baseUrl: BASE_URL,
    },
    analytics: {
      // PLACEHOLDER — substitua por NEXT_PUBLIC_GA4_FINANCAS_BR no Vercel
      ga4MeasurementId: process.env.NEXT_PUBLIC_GA4_FINANCAS_BR ?? 'PLACEHOLDER_GA4',
      enabled: process.env.NEXT_PUBLIC_GA4_FINANCAS_BR?.startsWith('G-') ?? false,
    },
    monetization: {
      ads: {
        enabled: process.env.NEXT_PUBLIC_ADS_TEST_MODE !== 'true',
        provider: 'adsense',
        publisherId: process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID,
      },
      affiliates: {
        enabled: false, // ativar quando programas reais forem configurados
        programs: [
          {
            id: 'PLACEHOLDER_AFFILIATE_FINANCAS',
            name: 'Programa de Afiliados Finanças (placeholder)',
            baseUrl: 'https://example.com/afiliados/financas',
          },
        ],
      },
    },
  },
  pages: [
    {
      id: 'financas-home',
      siteKey: SITE_KEY,
      type: 'home',
      slug: 'home',
      title: 'Início',
      status: 'published',
      meta: {
        title: 'Finanças BR — Educação Financeira e Investimentos',
        description: 'Aprenda sobre finanças pessoais, investimentos, crédito e planejamento financeiro com conteúdo claro e direto.',
      },
      blocks: [
        {
          type: 'hero',
          heading: 'Tome o controle das suas finanças',
          subheading: 'Conteúdo prático sobre investimentos, crédito, financiamentos e planejamento financeiro para brasileiros.',
          ctaLabel: 'Ver investimentos',
          ctaHref: `/${ROUTE_PATH}/investimentos`,
        },
        {
          type: 'richText',
          html: `<p>Bem-vindo ao <strong>Finanças BR</strong>, seu guia completo para educação financeira. Explore nossos conteúdos sobre investimentos, crédito e planejamento financeiro.</p>`,
        },
        {
          type: 'adSlot',
          slotId: 'financas-home-top',
          format: 'responsive',
        },
        {
          type: 'relatedLinks',
          links: [
            { label: 'Financiamento imobiliário: tudo que você precisa saber', href: `/${ROUTE_PATH}/financiamento` },
            { label: 'Como começar a investir com pouco dinheiro', href: `/${ROUTE_PATH}/investimentos` },
          ],
        },
        {
          type: 'cta',
          label: 'Explorar todos os conteúdos',
          href: `/${ROUTE_PATH}/investimentos`,
          variant: 'primary',
        },
      ],
    },
    {
      id: 'financas-financiamento',
      siteKey: SITE_KEY,
      type: 'article',
      slug: 'financiamento',
      title: 'Financiamento Imobiliário',
      status: 'published',
      meta: {
        title: 'Financiamento Imobiliário — Guia Completo',
        description: 'Entenda como funciona o financiamento imobiliário no Brasil, taxas, simulações e como escolher o melhor crédito.',
      },
      blocks: [
        {
          type: 'hero',
          heading: 'Financiamento Imobiliário',
          subheading: 'Tudo que você precisa saber antes de financiar um imóvel no Brasil.',
        },
        {
          type: 'articleContent',
          html: `
            <h2>O que é financiamento imobiliário?</h2>
            <p>O financiamento imobiliário é uma linha de crédito de longo prazo destinada à compra de imóveis residenciais ou comerciais. No Brasil, as principais modalidades são o SFH (Sistema Financeiro de Habitação) e o SFI (Sistema Financeiro Imobiliário).</p>
            <h2>Taxas e prazos</h2>
            <p>As taxas variam entre instituições financeiras e dependem do perfil do tomador, do prazo escolhido e do tipo de imóvel. O prazo máximo geralmente é de 30 anos.</p>
            <h2>Como simular</h2>
            <p>Antes de fechar um financiamento, simule em pelo menos três bancos diferentes e compare o CET (Custo Efetivo Total), não apenas a taxa de juros nominal.</p>
          `,
          author: 'Equipe Finanças BR',
          publishedAt: '2025-01-15',
        },
        {
          type: 'comparisonTable',
          headers: ['Modalidade', 'Taxa Média', 'Prazo Máximo', 'Limite'],
          rows: [
            { label: 'SFH', values: ['TR + 8,5% a.a.', '30 anos', 'R$ 1,5 milhão'] },
            { label: 'SFI', values: ['IPCA + 4% a.a.', '35 anos', 'Sem limite'] },
            { label: 'Minha Casa Minha Vida', values: ['4,5% a 7,66% a.a.', '30 anos', 'R$ 350 mil'] },
          ],
        },
        {
          type: 'adSlot',
          slotId: 'financas-financiamento-mid',
          format: 'rectangle',
        },
        {
          type: 'faq',
          items: [
            { question: 'Qual é o valor máximo que posso financiar?', answer: 'Geralmente bancos financiam até 80% do valor do imóvel. O restante deve ser pago como entrada.' },
            { question: 'Preciso ter renda comprovada?', answer: 'Sim. A parcela do financiamento não pode ultrapassar 30% da sua renda bruta mensal.' },
            { question: 'Posso usar o FGTS?', answer: 'Sim, o FGTS pode ser usado como entrada ou para amortizar parcelas em financiamentos pelo SFH.' },
          ],
        },
        {
          type: 'cta',
          label: 'Simule seu financiamento',
          href: '#simulador',
          variant: 'primary',
        },
        {
          type: 'relatedLinks',
          links: [
            { label: 'Como começar a investir', href: `/${ROUTE_PATH}/investimentos` },
          ],
        },
      ],
    },
    {
      id: 'financas-investimentos',
      siteKey: SITE_KEY,
      type: 'article',
      slug: 'investimentos',
      title: 'Como Começar a Investir',
      status: 'published',
      meta: {
        title: 'Como Investir — Guia para Iniciantes',
        description: 'Descubra como começar a investir no Brasil com segurança: Tesouro Direto, CDB, ações e fundos explicados de forma simples.',
      },
      blocks: [
        {
          type: 'hero',
          heading: 'Como Começar a Investir',
          subheading: 'Do Tesouro Direto à Bolsa de Valores — um guia claro para quem está começando.',
        },
        {
          type: 'articleContent',
          html: `
            <h2>Por que investir?</h2>
            <p>Guardar dinheiro na poupança hoje significa perder poder de compra para a inflação. Investir é a forma de fazer o dinheiro trabalhar por você e construir patrimônio ao longo do tempo.</p>
            <h2>Primeiros passos</h2>
            <p>Antes de investir, organize sua reserva de emergência (3 a 6 meses de despesas) em um investimento de alta liquidez como o Tesouro Selic ou um CDB com liquidez diária.</p>
            <h2>Perfis de investidor</h2>
            <p>Conheça seu perfil: conservador, moderado ou arrojado. Cada perfil tem uma alocação ideal entre renda fixa e variável.</p>
          `,
          author: 'Equipe Finanças BR',
          publishedAt: '2025-02-10',
        },
        {
          type: 'comparisonTable',
          headers: ['Investimento', 'Risco', 'Liquidez', 'Rentabilidade Média'],
          rows: [
            { label: 'Tesouro Selic', values: ['Baixo', 'Diária', '~CDI'] },
            { label: 'CDB 100% CDI', values: ['Baixo', 'No vencimento', '~CDI'] },
            { label: 'FII', values: ['Médio', 'Diária (bolsa)', '6–9% a.a.'] },
            { label: 'Ações', values: ['Alto', 'Diária (bolsa)', 'Variável'] },
          ],
        },
        {
          type: 'adSlot',
          slotId: 'financas-investimentos-mid',
          format: 'responsive',
        },
        {
          type: 'faq',
          items: [
            { question: 'Com quanto posso começar a investir?', answer: 'Com R$ 30 já é possível comprar Tesouro Direto. Muitos CDBs aceitam a partir de R$ 100.' },
            { question: 'Preciso pagar imposto sobre investimentos?', answer: 'Depende do tipo. Renda fixa tem IR regressivo. Ações têm isenção de IR para vendas mensais abaixo de R$ 20 mil.' },
          ],
        },
        {
          type: 'cta',
          label: 'Abrir conta em uma corretora',
          href: '#corretoras',
          variant: 'primary',
        },
        {
          type: 'relatedLinks',
          links: [
            { label: 'Entenda o financiamento imobiliário', href: `/${ROUTE_PATH}/financiamento` },
          ],
        },
      ],
    },
  ],
}
