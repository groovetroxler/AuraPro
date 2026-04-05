/**
 * app/[site]/[slug]/opengraph-image.tsx
 * Gera OG image para cada página interna de cada site.
 * Next.js detecta automaticamente e injeta no metadata.
 */

import { getSiteByRoutePath, getAllSiteEntries } from '../../../sites/registry'
import { generateOgImage, OG_SIZE } from '../../../core/og/generateOgImage'

export const size = OG_SIZE
export const contentType = 'image/png'
export const alt = 'Open Graph Image'

interface Props {
  params: Promise<{ site: string; slug: string }>
}

export default async function OgImage({ params }: Props) {
  const { site, slug } = await params
  const entry = getSiteByRoutePath(site)
  if (!entry) {
    return new Response('Not found', { status: 404 })
  }

  const page = entry.pages.find((p) => p.slug === slug)
  if (!page) {
    return new Response('Not found', { status: 404 })
  }

  const { theme } = entry.config

  return generateOgImage({
    title: page.meta.title,
    brandName: theme.brandName,
    primaryColor: theme.primaryColor,
    surfaceColor: theme.surfaceColor,
  })
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
