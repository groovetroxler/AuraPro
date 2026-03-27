/**
 * core/seo/metadata.ts
 * Gera metadata Next.js a partir de PageSchema + SiteConfig.
 * Fonte única de verdade para SEO — não duplicar em componentes.
 * Cobre: title, description, canonical, og:*, twitter:*, robots.
 */

import type { Metadata } from 'next'
import type { PageSchema, SiteConfig } from '../types/contracts'

interface BuildMetadataOptions {
  page: PageSchema
  site: SiteConfig
}

export function buildMetadata({ page, site }: BuildMetadataOptions): Metadata {
  const { seo } = site
  const slug = page.slug === 'home' ? '' : `/${page.slug}`
  const canonical = page.meta.canonical ?? `${seo.baseUrl}${slug}`

  // Título: usa template do site se a page não for home
  const title = page.slug === 'home'
    ? page.meta.title
    : seo.defaultTitleTemplate.replace('%s', page.meta.title)

  const ogImage = page.meta.ogImage ?? seo.defaultOgImage

  return {
    title,
    description: page.meta.description,
    robots: page.meta.noIndex ? 'noindex,nofollow' : 'index,follow',
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description: page.meta.description,
      url: canonical,
      siteName: seo.siteTitle,
      locale: site.locale,
      type: 'website',
      ...(ogImage ? { images: [{ url: ogImage, width: 1200, height: 630 }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: page.meta.description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  }
}

// ─────────────────────────────────────────────
// JSON-LD — dados estruturados para rich results
// ─────────────────────────────────────────────

/**
 * Gera JSON-LD para páginas do tipo article.
 * Aumenta elegibilidade para rich results no Google.
 */
export function buildArticleJsonLd({
  page,
  site,
  author,
  publishedAt,
}: {
  page: PageSchema
  site: SiteConfig
  author?: string
  publishedAt?: string
}): string {
  const { seo } = site
  const slug = page.slug === 'home' ? '' : `/${page.slug}`
  const url = `${seo.baseUrl}${slug}`
  const ogImage = page.meta.ogImage ?? seo.defaultOgImage

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.meta.title,
    description: page.meta.description,
    url,
    inLanguage: site.locale,
    publisher: {
      '@type': 'Organization',
      name: seo.siteTitle,
      url: seo.baseUrl,
    },
  }

  if (author) {
    schema.author = { '@type': 'Person', name: author }
  }
  if (publishedAt) {
    schema.datePublished = publishedAt
    schema.dateModified = publishedAt
  }
  if (ogImage) {
    schema.image = ogImage
  }

  return JSON.stringify(schema)
}

/**
 * Gera JSON-LD WebSite para a home — habilita sitelinks search box no Google.
 */
export function buildWebSiteJsonLd(site: SiteConfig): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.seo.siteTitle,
    url: site.seo.baseUrl,
    inLanguage: site.locale,
  }
  return JSON.stringify(schema)
}
