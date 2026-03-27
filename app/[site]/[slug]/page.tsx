/**
 * app/[site]/[slug]/page.tsx — Páginas internas de cada site
 */

import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getSiteByRoutePath, getAllSiteEntries } from '../../../sites/registry'
import { BlockRenderer } from '../../../core/renderer/BlockRenderer'
import { buildMetadata, buildArticleJsonLd } from '../../../core/seo/metadata'
import type { ArticleContentBlock } from '../../../core/types/contracts'

interface Props {
  params: Promise<{ site: string; slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { site, slug } = await params
  const entry = getSiteByRoutePath(site)
  if (!entry) return {}
  const page = entry.pages.find((p) => p.slug === slug && p.status === 'published')
  if (!page) return {}
  return buildMetadata({ page, site: entry.config })
}

export default async function SiteSlugPage({ params }: Props) {
  const { site, slug } = await params
  const entry = getSiteByRoutePath(site)
  if (!entry) notFound()

  if (slug === 'home') notFound()

  const page = entry.pages.find((p) => p.slug === slug && p.status === 'published')
  if (!page) notFound()

  // JSON-LD para artigos
  let articleJsonLd: string | null = null
  if (page.type === 'article') {
    const articleBlock = page.blocks.find((b): b is ArticleContentBlock => b.type === 'articleContent')
    articleJsonLd = buildArticleJsonLd({
      page,
      site: entry.config,
      author: articleBlock?.author,
      publishedAt: articleBlock?.publishedAt,
    })
  }

  return (
    <>
      {articleJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: articleJsonLd }}
        />
      )}
      <BlockRenderer
        blocks={page.blocks}
        ads={entry.config.monetization.ads}
      />
    </>
  )
}

export async function generateStaticParams() {
  const entries = getAllSiteEntries()
  const params: { site: string; slug: string }[] = []
  for (const entry of entries) {
    for (const page of entry.pages) {
      if (page.slug !== 'home' && page.status === 'published') {
        params.push({ site: entry.config.routePath, slug: page.slug })
      }
    }
  }
  return params
}
