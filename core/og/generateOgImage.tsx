/**
 * core/og/generateOgImage.tsx
 * Gera OG images dinâmicas para qualquer página do framework.
 * Usa Next.js ImageResponse (Satori) — renderiza JSX para PNG no build.
 *
 * Design: card limpo com barra lateral na cor do site,
 * título grande, nome do site embaixo.
 */

import { ImageResponse } from 'next/og'

interface OgImageParams {
  title: string
  brandName: string
  primaryColor: string
  surfaceColor?: string
  description?: string
}

export const OG_SIZE = { width: 1200, height: 630 }

export function generateOgImage({
  title,
  brandName,
  primaryColor,
  surfaceColor,
  description,
}: OgImageParams): ImageResponse {
  const bgColor = surfaceColor || '#ffffff'

  // Truncar título se muito longo
  const displayTitle =
    title.length > 80 ? title.slice(0, 77) + '...' : title

  const displayDesc =
    description && description.length > 120
      ? description.slice(0, 117) + '...'
      : description

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: bgColor,
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Barra lateral colorida */}
        <div
          style={{
            width: '12px',
            height: '100%',
            backgroundColor: primaryColor,
            flexShrink: 0,
          }}
        />

        {/* Conteúdo */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '60px 64px 48px 52px',
          }}
        >
          {/* Título */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <div
              style={{
                fontSize: displayTitle.length > 50 ? 42 : 52,
                fontWeight: 700,
                color: '#1a1a1a',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              {displayTitle}
            </div>

            {displayDesc && (
              <div
                style={{
                  fontSize: 22,
                  color: '#6b7280',
                  lineHeight: 1.4,
                }}
              >
                {displayDesc}
              </div>
            )}
          </div>

          {/* Rodapé: brand + barra */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            {/* Dot colorido */}
            <div
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                backgroundColor: primaryColor,
                flexShrink: 0,
              }}
            />
            <div
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: primaryColor,
                letterSpacing: '0.02em',
              }}
            >
              {brandName}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
    },
  )
}
