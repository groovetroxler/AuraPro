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
      <div className="bg-blue-50 border border-blue-200 rounded-lg px-5 py-4 text-blue-900 text-sm">
        {/* Resultado populado dinamicamente pela ferramenta */}
        <span className="text-gray-400 italic">O resultado aparecerá aqui.</span>
      </div>
    </div>
  )
}
