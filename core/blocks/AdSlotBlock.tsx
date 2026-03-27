'use client'
/**
 * core/blocks/AdSlotBlock.tsx
 * Slot de anúncio declarativo.
 * - Pré-reserva espaço para evitar CLS (Core Web Vitals — crítico para AdSense)
 * - testMode (ads.enabled=false ou publisherId inválido): exibe placeholder visual
 * - modo real: carrega AdSense via ins.adsbygoogle
 */

import React, { useEffect } from 'react'
import type { AdSlotBlock as AdSlotBlockType, AdsConfig } from '../types/contracts'

interface Props {
  block: AdSlotBlockType
  ads: AdsConfig
}

// Alturas mínimas pré-reservadas por formato — evita CLS
const MIN_HEIGHT: Record<string, number> = {
  banner: 90,
  rectangle: 250,
  leaderboard: 90,
  responsive: 100,
}

function isValidPublisherId(id?: string): boolean {
  return !!id && /^pub-\d+$/.test(id)
}

export function AdSlotBlock({ block, ads }: Props) {
  const format = block.format ?? 'responsive'
  const minHeight = MIN_HEIGHT[format] ?? 100
  const isReal = ads.enabled && isValidPublisherId(ads.publisherId)

  useEffect(() => {
    if (!isReal) return
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(window as any).adsbygoogle = (window as any).adsbygoogle || []
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(window as any).adsbygoogle.push({})
    } catch {
      // silencia erros de inicialização do adsbygoogle
    }
  }, [isReal])

  // Modo teste — placeholder visual com altura pré-reservada
  if (!isReal) {
    return (
      <div
        className="max-w-4xl mx-auto my-4 px-6"
        style={{ minHeight }}
        aria-hidden="true"
        data-slot-id={block.slotId}
        data-test-mode="true"
      >
        <div
          className="w-full h-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center rounded"
          style={{ minHeight }}
        >
          <span className="text-gray-400 text-xs font-mono">
            ANÚNCIO — {block.slotId} | {format} | MODO TESTE
          </span>
        </div>
      </div>
    )
  }

  // Modo real — AdSense com contêiner de altura pré-reservada
  return (
    <div
      className="max-w-4xl mx-auto my-4 px-6"
      style={{ minHeight }}
      data-slot-id={block.slotId}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block', minHeight }}
        data-ad-client={ads.publisherId}
        data-ad-slot={block.slotId}
        data-ad-format={format === 'responsive' ? 'auto' : format}
        data-full-width-responsive={format === 'responsive' ? 'true' : 'false'}
      />
    </div>
  )
}
