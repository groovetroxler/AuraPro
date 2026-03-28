import React from 'react'
import type { DetailsBlock as DetailsBlockType } from '../types/contracts'

interface Props { block: DetailsBlockType }

export function DetailsBlock({ block }: Props) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-3">
      <details className="border border-gray-200 rounded-lg group">
        <summary className="px-5 py-4 cursor-pointer font-medium text-gray-800 hover:bg-gray-50 list-none flex justify-between items-center">
          {block.summary}
          <span className="group-open:rotate-180 transition-transform" style={{ color: 'var(--color-primary)' }}>▾</span>
        </summary>
        <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
          {block.content}
        </div>
      </details>
    </div>
  )
}
