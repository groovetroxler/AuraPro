/**
 * core/seo/metadata.ts
 * Gera metadata Next.js a partir de PageSchema + SiteConfig + baseUrl.
 * Fonte única de verdade para SEO — não duplicar em componentes.
 */

import type { Metadata } from 'next'
import type { PageSchema, SiteConfig } from '../types/contracts'

interface BuildMetadataOptions {
  page: PageSchema
  site: SiteConfig
  baseUrl: string
  routePath: string
}

export function buildMetadata({
  page,
  site,
  baseUrl,
  routePath,
}: BuildMetadataOptions): Metadata {
  const slug = page.slug === 'home' ? '' : `/${page.slug}`
  const canonical =
    page.meta.canonical ?? `${baseUrl}/${routePath}${slug}`

  return {
    title: page.meta.title,
    description: page.meta.description,
    robots: page.meta.noIndex ? 'noindex,nofollow' : 'index,follow',
    alternates: {
      canonical,
    },
    openGraph: {
      title: page.meta.title,
      description: page.meta.description,
      url: canonical,
      siteName: site.name,
      locale: site.defaultLocale,
      type: 'website',
    },
  }
}
