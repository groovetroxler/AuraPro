import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getSiteByRoutePath, getAllRoutePaths } from '../../sites/registry'
import { BlockRenderer } from '../../core/renderer/BlockRenderer'
import { buildMetadata } from '../../core/seo/metadata'
import { getBaseUrl } from '../../config/env'

interface Props {
  params: Promise<{ site: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { site } = await params
  const entry = getSiteByRoutePath(site)
  if (!entry) return {}

  const home = entry.pages.find((p) => p.slug === 'home')
  if (!home) return {}

  return buildMetadata({
    page: home,
    site: entry.config,
    baseUrl: getBaseUrl(),
    routePath: site,
  })
}

export default async function SiteHomePage({ params }: Props) {
  const { site } = await params
  const entry = getSiteByRoutePath(site)
  if (!entry) notFound()

  const home = entry.pages.find((p) => p.slug === 'home')
  if (!home) notFound()

  return (
    <BlockRenderer
      blocks={home.blocks}
      publisherId={entry.config.ads.publisherId}
      testMode={entry.config.ads.testMode}
    />
  )
}

export async function generateStaticParams() {
  return getAllRoutePaths().map((site) => ({ site }))
}
