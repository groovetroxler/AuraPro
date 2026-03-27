/**
 * app/[site]/layout.tsx
 * Layout por site. Injeta:
 * - CSS custom property --color-primary derivada do theme do site
 * - GA4 se analytics.enabled=true e id válido
 * - AdSense se ads.enabled=true e publisherId válido
 * - Header e footer com brand do site
 */

import { notFound } from 'next/navigation'
import { getSiteByRoutePath } from '../../sites/registry'
import { GoogleAnalytics } from '../../core/analytics/GoogleAnalytics'
import { AdSenseScript } from '../../core/monetization/AdSenseScript'

interface Props {
  children: React.ReactNode
  params: Promise<{ site: string }>
}

export default async function SiteLayout({ children, params }: Props) {
  const { site } = await params
  const entry = getSiteByRoutePath(site)
  if (!entry) notFound()

  const { config } = entry
  const { analytics, monetization, theme, locale, seo } = config

  return (
    <html lang={locale}>
      <head>
        <AdSenseScript ads={monetization.ads} />
      </head>
      <body
        className="min-h-screen bg-white text-gray-900 antialiased"
        style={{ '--color-primary': theme.primaryColor } as React.CSSProperties}
      >
        <GoogleAnalytics
          ga4MeasurementId={analytics.ga4MeasurementId}
          enabled={analytics.enabled}
        />

        <header className="border-b border-gray-100 bg-white sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
            <a
              href={`/${site}`}
              className="font-bold text-lg"
              style={{ color: theme.primaryColor }}
            >
              {theme.brandName}
            </a>
            <nav className="text-sm text-gray-500">
              <a href="/" className="hover:underline transition-colors">
                ← Todos os sites
              </a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-gray-100 mt-16 py-8 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} {theme.brandName}. Todos os direitos reservados.
          {' · '}
          <a href={seo.baseUrl} className="hover:underline">{seo.siteTitle}</a>
        </footer>
      </body>
    </html>
  )
}

export async function generateStaticParams() {
  const { getAllRoutePaths } = await import('../../sites/registry')
  return getAllRoutePaths().map((site) => ({ site }))
}
