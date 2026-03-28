import React from 'react'
import type { TestimonialBlock as TestimonialBlockType } from '../types/contracts'

interface Props { block: TestimonialBlockType }

export function TestimonialBlock({ block }: Props) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-4">
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <div
          className="text-4xl leading-none mb-2 opacity-30"
          style={{ color: 'var(--color-primary)' }}
          aria-hidden="true"
        >
          &ldquo;
        </div>
        <p className="text-gray-700 italic leading-relaxed mb-4">
          {block.quote}
        </p>
        <div className="flex items-center gap-3">
          {block.avatarUrl ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={block.avatarUrl}
              alt={block.author}
              className="w-10 h-10 rounded-full object-cover"
              loading="lazy"
            />
          ) : (
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              {block.author.charAt(0).toUpperCase()}
            </div>
          )}
          <div>
            <p className="text-sm font-semibold text-gray-800">{block.author}</p>
            {block.role && (
              <p className="text-xs text-gray-500">{block.role}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
