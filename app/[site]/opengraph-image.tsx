/**
 * app/[site]/opengraph-image.tsx
 * Gera OG image para a home de cada site.
 * Next.js detecta automaticamente e injeta no metadata.
 */

import { getSiteByRoutePath, getAllRoutePaths } from '../../sites/registry'
import { generateOgImage, OG_SIZE } from '../../core/og/generateOgImage'

export const size = OG_SIZE
export const contentType = 'image/png'
export const alt = 'Open Graph Image'

interface Props {
  params: Promise<{ site: string }>
}

export default async function OgImage({ params }: Props) {
  const { site } = await params
  const entry = getSiteByRoutePath(site)
  if (!entry) {
    return new Response('Not found', { status: 404 })
  }

  const home = entry.pages.find((p) => p.slug === 'home')
  const { theme, seo } = entry.config

  return generateOgImage({
    title: home?.meta.title ?? seo.siteTitle,
    brandName: theme.brandName,
    primaryColor: theme.primaryColor,
    surfaceColor: theme.surfaceColor,
    description: home?.meta.description ?? seo.defaultDescription,
  })
}

export async function generateStaticParams() {
  return getAllRoutePaths().map((site) => ({ site }))
}
