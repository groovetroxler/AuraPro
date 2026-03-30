import { getCanonicalBaseUrl } from '../../config/env'
import { GoogleAnalytics } from '../../core/analytics/GoogleAnalytics'
import { LanguageSwitcher } from './LanguageSwitcher'
import { getRootPageContent, type RootLocale } from './rootLandingContent'

const ROOT_GA4_ID = 'G-P1QS6WD2KM'

interface RootLandingProps {
  locale: RootLocale
}

export function RootLanding({ locale }: RootLandingProps) {
  const copy = getRootPageContent(locale)
  const canonicalBaseUrl = getCanonicalBaseUrl()
  const currentPath = locale === 'en' ? '' : '/pt'
  const pageUrl = `${canonicalBaseUrl}${currentPath}`

  const webPageJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: copy.metaTitle,
    description: copy.metaDescription,
    url: pageUrl,
    inLanguage: copy.inLanguage,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Aura Pro Consulting',
      url: canonicalBaseUrl,
    },
  })

  return (
    <>
      <GoogleAnalytics ga4MeasurementId={ROOT_GA4_ID} enabled />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: webPageJsonLd }} />
      <main
        className="min-h-screen bg-white text-slate-900"
        style={{ fontFamily: '"Bahnschrift", "Aptos", "Arial Narrow", Arial, sans-serif' }}
      >
        <div className="mx-auto flex min-h-screen max-w-4xl px-8">
          <section className="relative mx-auto flex w-full max-w-2xl items-center justify-center py-10 text-center">
            <div className="absolute right-0 top-3 sm:top-4">
              <LanguageSwitcher currentLocale={locale} />
            </div>

            <div className="w-full pt-18 sm:pt-12">
              <div
                aria-hidden="true"
                className="mx-auto mb-10 h-3 w-44 rounded-full bg-gradient-to-r from-slate-300 via-sky-700 to-slate-500 opacity-90 shadow-[0_0_24px_rgba(3,105,161,0.12)]"
              />

              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-slate-400">
                {copy.pretitle}
              </p>

              <h1 className="mx-auto mt-5 max-w-xl text-2xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-[2rem]">
                {copy.headline}
              </h1>

              <div className="mx-auto mt-7 max-w-xl space-y-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
                <p>{copy.paragraphs[0]}</p>
                <p>{copy.paragraphs[1]}</p>
              </div>

              <div className="mt-10 flex items-center justify-center gap-4 text-sm text-slate-500">
                <span className="h-px w-10 bg-slate-200" />
                <a
                  href="mailto:mateus@aurapro-consulting.com"
                  className="text-sky-700 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-sky-800"
                >
                  mateus@aurapro-consulting.com
                </a>
                <span className="h-px w-10 bg-slate-200" />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
