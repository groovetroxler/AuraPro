import type { Metadata } from 'next'
import { GoogleAnalytics } from '../core/analytics/GoogleAnalytics'

const title = 'Aura Pro Consulting | Digital Infrastructure and Process Consulting'
const description =
  'Aura Pro Consulting helps small and medium-sized businesses adopt more modern digital infrastructure and clearer operational processes.'
const ROOT_GA4_ID = 'G-P1QS6WD2KM'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title,
    description,
    url: '/',
    siteName: 'Aura Pro Consulting',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootPage() {
  return (
    <>
      <GoogleAnalytics ga4MeasurementId={ROOT_GA4_ID} enabled />
      <main
        className="min-h-screen bg-white text-slate-900"
        style={{ fontFamily: '"Bahnschrift", "Aptos", "Arial Narrow", Arial, sans-serif' }}
      >
        <div className="mx-auto flex min-h-screen max-w-4xl items-center justify-center px-8">
          <section className="relative w-full max-w-2xl text-center">
            <div
              aria-hidden="true"
              className="mx-auto mb-10 h-3 w-44 rounded-full bg-gradient-to-r from-slate-300 via-sky-700 to-slate-500 opacity-90 shadow-[0_0_24px_rgba(3,105,161,0.12)]"
            />

            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-slate-400">
              Aura Pro Consulting
            </p>

            <h1 className="mx-auto mt-5 max-w-xl text-2xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-[2rem]">
              We are a consulting company that helps small and medium-sized
              businesses use more modern digital infrastructure and processes.
            </h1>

            <div className="mx-auto mt-7 max-w-xl space-y-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
              <p>
                Our work is focused on practical organization, lightweight systems,
                and digital tools that make operations clearer and easier to run.
              </p>
              <p>
                We usually work with setups involving Google Workspace, Notion, and
                simple process design adapted to the real stage of each business.
              </p>
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
          </section>
        </div>
      </main>
    </>
  )
}
