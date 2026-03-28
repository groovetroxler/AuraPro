import React from 'react'
import type { DividerBlock as DividerBlockType } from '../types/contracts'

interface Props { block: DividerBlockType }

export function DividerBlock({ block }: Props) {
  const style = block.style ?? 'line'

  if (style === 'space') {
    return <div className="py-6" aria-hidden="true" />
  }

  if (style === 'dots') {
    return (
      <div className="max-w-3xl mx-auto px-6 py-6 text-center" aria-hidden="true">
        <span className="text-gray-300 tracking-[0.5em]">•••</span>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-6" aria-hidden="true">
      <hr className="border-gray-200" />
    </div>
  )
}
