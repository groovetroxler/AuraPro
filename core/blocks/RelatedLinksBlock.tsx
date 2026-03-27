import React from 'react'
import type { RelatedLinksBlock as RelatedLinksBlockType } from '../types/contracts'

interface Props { block: RelatedLinksBlockType }

export function RelatedLinksBlock({ block }: Props) {
  return (
    <aside className="max-w-3xl mx-auto px-6 py-8">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Veja também</h3>
      <ul className="space-y-2">
        {block.links.map((link, i) => (
          <li key={i}>
            <a
              href={link.href}
              className="text-blue-700 hover:underline text-sm flex items-center gap-2"
            >
              <span className="text-blue-400">→</span>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
