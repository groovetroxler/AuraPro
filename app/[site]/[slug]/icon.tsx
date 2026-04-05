/**
 * app/[site]/[slug]/icon.tsx
 * Gera favicon para páginas internas — mesmo ícone do site pai.
 */

import { ImageResponse } from 'next/og'
import { getSiteByRoutePath, getAllSiteEntries } from '../../../sites/registry'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

interface Props {
  params: Promise<{ site: string; slug: string }>
}

export default async function Icon({ params }: Props) {
  const { site } = await params
  const entry = getSiteByRoutePath(site)
  if (!entry) {
    return new Response('Not found', { status: 404 })
  }

  const { primaryColor, brandName } = entry.config.theme
  const initial = brandName.charAt(0).toUpperCase()

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: primaryColor,
          borderRadius: '6px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <span
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1,
          }}
        >
          {initial}
        </span>
      </div>
    ),
    { ...size },
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
