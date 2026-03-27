/**
 * app/[site]/page.tsx — Home de cada site
 */

import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getSiteByRoutePath, getAllRoutePaths } from '../../sites/registry'
import { BlockRenderer } from '../../core/renderer/BlockRenderer'
import { buildMetadata, buildWebSiteJsonLd } from '../../core/seo/metadata'

interface Props {
  params: Promise<{ site: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { site } = await params
  const entry = getSiteByRoutePath(site)
  if (!entry) return {}
  const home = entry.pages.find((p) => p.slug === 'home' && p.status === 'published')
  if (!home) return {}
  return buildMetadata({ page: home, site: entry.config })
}

export default async function SiteHomePage({ params }: Props) {
  const { site } = await params
  const entry = getSiteByRoutePath(site)
  if (!entry) notFound()

  const home = entry.pages.find((p) => p.slug === 'home' && p.status === 'published')
  if (!home) notFound()

  const webSiteJsonLd = buildWebSiteJsonLd(entry.config)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: webSiteJsonLd }}
      />
      <BlockRenderer
        blocks={home.blocks}
        ads={entry.config.monetization.ads}
      />
    </>
  )
}

export async function generateStaticParams() {
  return getAllRoutePaths().map((site) => ({ site }))
}
