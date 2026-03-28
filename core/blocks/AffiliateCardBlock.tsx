import React from 'react'
import type { AffiliateCardBlock as AffiliateCardBlockType } from '../types/contracts'

interface Props { block: AffiliateCardBlockType }

export function AffiliateCardBlock({ block }: Props) {
  const href = `${block.href}${block.href.includes('?') ? '&' : '?'}ref=${block.programId}`
  const ctaLabel = block.ctaLabel ?? 'Ver oferta'

  return (
    <div className="max-w-3xl mx-auto px-6 py-4">
      <div className="border border-gray-200 rounded-lg overflow-hidden flex flex-col md:flex-row shadow-sm">
        {block.imageUrl && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={block.imageUrl}
            alt={block.productName}
            className="w-full md:w-48 h-48 md:h-auto object-cover"
            loading="lazy"
          />
        )}
        <div className="p-5 flex flex-col justify-between flex-1">
          <div>
            <h3 className="font-semibold text-gray-800 text-lg mb-1">
              {block.productName}
            </h3>
            {block.description && (
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                {block.description}
              </p>
            )}
            {block.price && (
              <p className="text-xl font-bold mb-3" style={{ color: 'var(--color-primary)' }}>
                {block.price}
              </p>
            )}
          </div>
          <a
            href={href}
            className="inline-block text-center text-white font-semibold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm"
            style={{ backgroundColor: 'var(--color-primary)' }}
            data-program-id={block.programId}
            target="_blank"
            rel="noopener noreferrer sponsored"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </div>
  )
}
