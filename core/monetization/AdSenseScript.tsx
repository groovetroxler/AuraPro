/**
 * core/monetization/AdSenseScript.tsx
 * Injeta o script do AdSense baseado na config de monetização do site.
 * Carrega sempre que publisherId for válido (necessário para verificação do Google).
 * O flag ads.enabled controla apenas se os slots exibem anúncios reais ou placeholders.
 */

import Script from 'next/script'
import type { AdsConfig } from '../types/contracts'

interface Props {
  ads: AdsConfig
}

function isValidPublisherId(id?: string): boolean {
  return !!id && /^ca-pub-\d+$/.test(id)
}

export function AdSenseScript({ ads }: Props) {
  if (!isValidPublisherId(ads.publisherId)) {
    return null
  }

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ads.publisherId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  )
}
