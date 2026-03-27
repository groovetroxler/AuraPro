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

  const { analytics, ads, name, defaultLocale } = entry.config

  return (
    <html lang={defaultLocale}>
      <head>
        <AdSenseScript
          publisherId={ads.publisherId}
          testMode={ads.testMode}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <GoogleAnalytics ga4Id={analytics.ga4Id} />

        {/* Header mínimo do site */}
        <header className="border-b border-gray-100 bg-white sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
            <a href={`/${site}`} className="font-bold text-blue-700 text-lg">
              {name}
            </a>
            <nav className="text-sm text-gray-500">
              <a href="/" className="hover:text-blue-700 transition-colors">
                ← Todos os sites
              </a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        {/* Footer mínimo */}
        <footer className="border-t border-gray-100 mt-16 py-8 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} {name}. Todos os direitos reservados.
        </footer>
      </body>
    </html>
  )
}

export async function generateStaticParams() {
  const { getAllRoutePaths } = await import('../../sites/registry')
  return getAllRoutePaths().map((site) => ({ site }))
}
