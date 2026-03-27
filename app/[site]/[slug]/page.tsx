import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getSiteByRoutePath, getAllSiteEntries } from '../../../sites/registry'
import { BlockRenderer } from '../../../core/renderer/BlockRenderer'
import { buildMetadata } from '../../../core/seo/metadata'
import { getBaseUrl } from '../../../config/env'

interface Props {
  params: Promise<{ site: string; slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { site, slug } = await params
  const entry = getSiteByRoutePath(site)
  if (!entry) return {}

  const page = entry.pages.find((p) => p.slug === slug)
  if (!page) return {}

  return buildMetadata({
    page,
    site: entry.config,
    baseUrl: getBaseUrl(),
    routePath: site,
  })
}

export default async function SiteSlugPage({ params }: Props) {
  const { site, slug } = await params
  const entry = getSiteByRoutePath(site)
  if (!entry) notFound()

  // home não é servida por esta rota
  if (slug === 'home') notFound()

  const page = entry.pages.find((p) => p.slug === slug)
  if (!page) notFound()

  return (
    <BlockRenderer
      blocks={page.blocks}
      publisherId={entry.config.ads.publisherId}
      testMode={entry.config.ads.testMode}
    />
  )
}

export async function generateStaticParams() {
  const entries = getAllSiteEntries()
  const params: { site: string; slug: string }[] = []

  for (const entry of entries) {
    for (const page of entry.pages) {
      if (page.slug !== 'home') {
        params.push({ site: entry.config.routePath, slug: page.slug })
      }
    }
  }
  return params
}
