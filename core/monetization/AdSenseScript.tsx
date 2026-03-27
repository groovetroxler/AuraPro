/**
 * core/monetization/AdSenseScript.tsx
 * Injeta o script do AdSense no head.
 * publisherId vem do registry — sem hardcodes paralelos.
 * testMode=true: script não é carregado (slots ficam em modo de teste visual).
 */

import Script from 'next/script'

interface Props {
  publisherId: string
  testMode: boolean
}

export function AdSenseScript({ publisherId, testMode }: Props) {
  // Não carrega script em modo de teste ou com publisher placeholder
  if (testMode || !publisherId || publisherId.startsWith('PLACEHOLDER')) {
    return null
  }

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  )
}
