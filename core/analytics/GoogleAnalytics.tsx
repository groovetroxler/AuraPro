/**
 * core/analytics/GoogleAnalytics.tsx
 * Injeta GA4 por site.
 * Só carrega se analytics.enabled=true e ga4MeasurementId tiver formato G-XXXXXX válido.
 * Derivado sempre do registry — sem hardcodes paralelos.
 */

import Script from 'next/script'

interface Props {
  ga4MeasurementId: string
  enabled: boolean
}

function isValidId(id: string): boolean {
  return /^G-[A-Z0-9]+$/.test(id)
}

export function GoogleAnalytics({ ga4MeasurementId, enabled }: Props) {
  if (!enabled || !isValidId(ga4MeasurementId)) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`}
        strategy="afterInteractive"
      />
      <Script id={`ga4-init-${ga4MeasurementId}`} strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ga4MeasurementId}', {
            page_path: window.location.pathname,
            send_page_view: true
          });
        `}
      </Script>
    </>
  )
}
