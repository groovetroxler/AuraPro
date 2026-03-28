import React from 'react'
import type { StatsBlock as StatsBlockType } from '../types/contracts'

interface Props { block: StatsBlockType }

export function StatsBlock({ block }: Props) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-6">
      <div className={`grid gap-4 ${
        block.items.length === 1 ? 'grid-cols-1' :
        block.items.length === 2 ? 'grid-cols-2' :
        block.items.length === 3 ? 'grid-cols-3' :
        'grid-cols-2 md:grid-cols-4'
      }`}>
        {block.items.map((item, i) => (
          <div
            key={i}
            className="text-center p-4 rounded-lg bg-gray-50 border border-gray-100"
          >
            <p
              className="text-2xl md:text-3xl font-bold"
              style={{ color: 'var(--color-primary)' }}
            >
              {item.value}
            </p>
            <p className="text-sm font-medium text-gray-700 mt-1">{item.label}</p>
            {item.description && (
              <p className="text-xs text-gray-500 mt-1">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
