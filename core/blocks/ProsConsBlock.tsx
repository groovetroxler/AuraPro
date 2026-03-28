import React from 'react'
import type { ProsConsBlock as ProsConsBlockType } from '../types/contracts'

interface Props { block: ProsConsBlockType }

export function ProsConsBlock({ block }: Props) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-4">
      {block.title && (
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{block.title}</h3>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
            <span>✅</span> Vantagens
          </h4>
          <ul className="space-y-2">
            {block.pros.map((pro, i) => (
              <li key={i} className="text-sm text-green-800 flex items-start gap-2">
                <span className="mt-0.5 text-green-500">+</span>
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
            <span>❌</span> Desvantagens
          </h4>
          <ul className="space-y-2">
            {block.cons.map((con, i) => (
              <li key={i} className="text-sm text-red-800 flex items-start gap-2">
                <span className="mt-0.5 text-red-500">−</span>
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
