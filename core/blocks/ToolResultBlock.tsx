import React from 'react'
import type { ToolResultBlock as ToolResultBlockType } from '../types/contracts'

interface Props { block: ToolResultBlockType }

export function ToolResultBlock({ block }: Props) {
  return (
    <div
      id={`tool-result-${block.toolId}`}
      className="max-w-2xl mx-auto px-6 py-4"
      aria-live="polite"
    >
      <div
        className="rounded-lg px-5 py-4 text-sm border"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--color-primary) 8%, white)',
          borderColor: 'color-mix(in srgb, var(--color-primary) 25%, white)',
          color: 'color-mix(in srgb, var(--color-primary) 85%, black)',
        }}
      >
        <span className="text-gray-400 italic">O resultado aparecerá aqui.</span>
      </div>
    </div>
  )
}
