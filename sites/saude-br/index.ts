/**
 * sites/saude-br/index.ts
 * Gerado pelo scaffold — Fase 1B
 * Conteúdo placeholder — substituir por conteúdo real via Rotina 2
 */

import type { SiteEntry } from '../../core/types/contracts'

const SITE_KEY = 'saude-br'
const ROUTE_PATH = 'saude'
import { resolveSiteBaseUrl } from '../../config/site-url'
const BASE_URL = resolveSiteBaseUrl(ROUTE_PATH)

export const saudeBrSite: SiteEntry = {
  config: {
    siteKey: SITE_KEY,
    publicName: 'Saúde BR',
    routePath: ROUTE_PATH,
    locale: 'pt-BR',
    market: 'BR',
    status: 'active',
    theme: {
      brandName: 'Saúde BR',
      primaryColor: '#dc2626',
    },
    seo: {
      siteTitle: 'Saúde BR',
      defaultTitleTemplate: '%s | Saúde BR',
      defaultDescription: '/* PLACEHOLDER — substituir por descrição real do site */',
      baseUrl: BASE_URL,
    },
    analytics: {
      ga4MeasurementId: '',
      enabled: false,
    },
    monetization: {
      ads: {
        enabled: process.env.NEXT_PUBLIC_ADS_TEST_MODE !== 'true',
        provider: 'adsense',
        publisherId: 'ca-pub-7072076910984234',
      },
      affiliates: {
        enabled: false,
        programs: [],
      },
    },
  },
  pages: [
    {
      id: 'saude-br-home',
      siteKey: SITE_KEY,
      type: 'home',
      slug: 'home',
      title: 'Início',
      status: 'published',
      meta: {
        title: 'Saúde BR — Guia Completo',
        description: '/* PLACEHOLDER — substituir por descrição real da home */',
      },
      blocks: [
        {
          type: 'hero',
          heading: 'Saúde BR',
          subheading: '/* PLACEHOLDER — substituir por subtítulo real */',
          ctaLabel: 'Saiba mais',
          ctaHref: `/${ROUTE_PATH}/introducao`,
        },
        {
          type: 'richText',
          html: '<p>/* PLACEHOLDER — substituir por conteúdo real da home */</p>',
        },
        {
          type: 'adSlot',
          slotId: 'saude-home-top',
          format: 'responsive',
        },
        {
          type: 'relatedLinks',
          links: [
            { label: 'Introdução', href: `/${ROUTE_PATH}/introducao` },
          ],
        },
        {
          type: 'cta',
          label: 'Começar a ler',
          href: `/${ROUTE_PATH}/introducao`,
          variant: 'primary',
        },
      ],
    },
    {
      id: 'saude-br-introducao',
      siteKey: SITE_KEY,
      type: 'article',
      slug: 'introducao',
      title: 'Introdução',
      status: 'published',
      meta: {
        title: 'Introdução — Saúde BR',
        description: '/* PLACEHOLDER — substituir por descrição real */',
      },
      blocks: [
        {
          type: 'hero',
          heading: 'Introdução',
          subheading: '/* PLACEHOLDER — substituir por subtítulo real */',
        },
        {
          type: 'articleContent',
          html: `
            <h2>/* PLACEHOLDER */</h2>
            <p>Este conteúdo é placeholder e deve ser substituído por conteúdo real via Rotina 2 (ver CONTENT_GUIDE.md).</p>
          `,
        },
        {
          type: 'adSlot',
          slotId: 'saude-introducao-mid',
          format: 'rectangle',
        },
        {
          type: 'cta',
          label: 'Voltar para a home',
          href: `/${ROUTE_PATH}`,
          variant: 'secondary',
        },
      ],
    },
  ],
}
