import React from 'react'
import type { QuoteBlock as QuoteBlockType } from '../types/contracts'

interface Props { block: QuoteBlockType }

export function QuoteBlock({ block }: Props) {
  return (
    <blockquote className="max-w-3xl mx-auto px-6 py-4">
      <div
        className="border-l-4 pl-5 py-2"
        style={{ borderColor: 'var(--color-primary)' }}
      >
        <p className="text-lg italic text-gray-700 leading-relaxed">
          &ldquo;{block.text}&rdquo;
        </p>
        {(block.author || block.source) && (
          <footer className="mt-2 text-sm text-gray-500">
            {block.author && <span className="font-medium">{block.author}</span>}
            {block.author && block.source && <span> — </span>}
            {block.source && <cite>{block.source}</cite>}
          </footer>
        )}
      </div>
    </blockquote>
  )
}
