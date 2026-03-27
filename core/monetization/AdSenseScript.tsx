/**
 * core/monetization/AdSenseScript.tsx
 * Injeta o script do AdSense baseado na config de monetização do site.
 * Só carrega se ads.enabled=true e publisherId tiver formato pub-XXXX válido.
 */

import Script from 'next/script'
import type { AdsConfig } from '../types/contracts'

interface Props {
  ads: AdsConfig
}

function isValidPublisherId(id?: string): boolean {
  return !!id && /^pub-\d+$/.test(id)
}

export function AdSenseScript({ ads }: Props) {
  if (!ads.enabled || !isValidPublisherId(ads.publisherId)) {
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
