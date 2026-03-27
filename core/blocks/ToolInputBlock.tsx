'use client'
import React, { useState } from 'react'
import type { ToolInputBlock as ToolInputBlockType } from '../types/contracts'

interface Props { block: ToolInputBlockType }

export function ToolInputBlock({ block }: Props) {
  const [value, setValue] = useState('')
  return (
    <section className="max-w-2xl mx-auto px-6 py-8">
      <label className="block text-gray-800 font-medium mb-2" htmlFor={block.toolId}>
        {block.label}
      </label>
      <div className="flex gap-3">
        <input
          id={block.toolId}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={block.placeholder ?? 'Digite um valor'}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium"
          onClick={() => {
            // Placeholder: lógica real implementada por ferramenta específica
            console.log(`[ToolInput:${block.toolId}] valor:`, value)
          }}
        >
          Calcular
        </button>
      </div>
    </section>
  )
}
