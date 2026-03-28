import React from 'react'
import type { TableOfContentsBlock as TocBlockType } from '../types/contracts'

interface Props { block: TocBlockType }

export function TableOfContentsBlock({ block }: Props) {
  const title = block.title ?? 'Neste artigo'

  return (
    <nav className="max-w-3xl mx-auto px-6 py-4">
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
        <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
          {title}
        </h2>
        <ol className="space-y-2">
          {block.items.map((item, i) => (
            <li key={i}>
              <a
                href={`#${item.anchor}`}
                className="text-sm hover:underline flex items-center gap-2"
                style={{ color: 'var(--color-primary)' }}
              >
                <span className="text-gray-400 font-mono text-xs w-5">{i + 1}.</span>
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
