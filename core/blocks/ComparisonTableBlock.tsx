import React from 'react'
import type { ComparisonTableBlock as ComparisonTableBlockType } from '../types/contracts'

interface Props { block: ComparisonTableBlockType }

export function ComparisonTableBlock({ block }: Props) {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10 overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-blue-700 text-white">
            {block.headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-left font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-4 py-3 font-medium text-gray-800">{row.label}</td>
              {row.values.map((v, j) => (
                <td key={j} className="px-4 py-3 text-gray-600">{v}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
