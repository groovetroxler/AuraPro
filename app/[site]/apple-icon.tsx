/**
 * app/[site]/apple-icon.tsx
 * Gera Apple touch icon por site (180x180).
 * Aparece quando o usuário salva o site na tela inicial do iPhone.
 */

import { ImageResponse } from 'next/og'
import { getSiteByRoutePath, getAllRoutePaths } from '../../sites/registry'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

interface Props {
  params: Promise<{ site: string }>
}

export default async function AppleIcon({ params }: Props) {
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
          borderRadius: '36px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <span
          style={{
            fontSize: 110,
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
  return getAllRoutePaths().map((site) => ({ site }))
}
