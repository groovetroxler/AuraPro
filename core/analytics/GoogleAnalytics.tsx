/**
 * core/analytics/GoogleAnalytics.tsx
 * Componente de injeção do GA4.
 * ga4Id vem sempre do registry — sem hardcodes paralelos.
 */

import Script from 'next/script'

interface Props {
  ga4Id: string
}

/**
 * GoogleAnalytics
 * Deve ser incluído no layout do site, passando o ga4Id do config do site.
 * Se ga4Id for placeholder, o componente ainda renderiza (sem dados reais).
 */
export function GoogleAnalytics({ ga4Id }: Props) {
  if (!ga4Id || ga4Id.trim() === '') return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
        strategy="afterInteractive"
      />
      <Script id={`ga4-init-${ga4Id}`} strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ga4Id}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}
