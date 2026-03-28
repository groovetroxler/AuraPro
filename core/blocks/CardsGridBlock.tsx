import React from 'react'
import type { CardsGridBlock as CardsGridBlockType } from '../types/contracts'

interface Props { block: CardsGridBlockType }

export function CardsGridBlock({ block }: Props) {
  const cols = block.columns ?? 3
  const gridCols =
    cols === 2 ? 'grid-cols-1 md:grid-cols-2' :
    cols === 4 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' :
    'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'

  return (
    <div className="max-w-4xl mx-auto px-6 py-6">
      <div className={`grid ${gridCols} gap-4`}>
        {block.cards.map((card, i) => (
          <a
            key={i}
            href={card.href}
            className="group block border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            {card.imageUrl && (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-40 object-cover"
                loading="lazy"
              />
            )}
            <div className="p-4">
              <h3
                className="font-semibold group-hover:underline mb-1"
                style={{ color: 'var(--color-primary)' }}
              >
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
