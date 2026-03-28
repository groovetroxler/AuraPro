import React from 'react'
import type { AuthorBoxBlock as AuthorBoxBlockType } from '../types/contracts'

interface Props { block: AuthorBoxBlockType }

export function AuthorBoxBlock({ block }: Props) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-4">
      <div className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-lg p-5">
        {block.avatarUrl ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={block.avatarUrl}
            alt={block.name}
            className="w-14 h-14 rounded-full object-cover flex-shrink-0"
            loading="lazy"
          />
        ) : (
          <div
            className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xl font-bold"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            {block.name.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <p className="font-semibold text-gray-800">{block.name}</p>
          {block.role && (
            <p className="text-xs text-gray-500 mb-1">{block.role}</p>
          )}
          <p className="text-sm text-gray-600 leading-relaxed">{block.bio}</p>
        </div>
      </div>
    </div>
  )
}
