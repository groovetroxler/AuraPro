'use client'
import React, { useEffect } from 'react'
import type { AdSlotBlock as AdSlotBlockType } from '../types/contracts'

interface Props {
  block: AdSlotBlockType
  publisherId?: string
  testMode?: boolean
}

/**
 * AdSlotBlock
 * - testMode=true: exibe placeholder visual marcado como "ANÚNCIO (modo teste)"
 * - testMode=false + publisherId real: carrega AdSense real
 * - sem publisherId: exibe aviso de configuração pendente
 */
export function AdSlotBlock({ block, publisherId, testMode = false }: Props) {
  const formatClass: Record<string, string> = {
    banner: 'h-24',
    rectangle: 'h-64',
    leaderboard: 'h-24',
    responsive: 'min-h-24',
  }
  const heightClass = formatClass[block.format ?? 'responsive'] ?? 'min-h-24'

  // Modo de teste explícito — sem AdSense real
  if (testMode || !publisherId || publisherId.startsWith('PLACEHOLDER')) {
    return (
      <div
        className={`max-w-4xl mx-auto my-4 mx-6 ${heightClass} bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center rounded`}
        data-slot-id={block.slotId}
        data-test-mode="true"
      >
        <span className="text-gray-400 text-xs font-mono">
          ANÚNCIO — slot: {block.slotId} | formato: {block.format ?? 'responsive'} | MODO TESTE
        </span>
      </div>
    )
  }

  // Modo real — AdSense
  useEffect(() => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(window as any).adsbygoogle = (window as any).adsbygoogle || []
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(window as any).adsbygoogle.push({})
    } catch {}
  }, [])

  return (
    <div className="max-w-4xl mx-auto my-4 px-6">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={publisherId}
        data-ad-slot={block.slotId}
        data-ad-format={block.format ?? 'auto'}
        data-full-width-responsive="true"
      />
    </div>
  )
}
