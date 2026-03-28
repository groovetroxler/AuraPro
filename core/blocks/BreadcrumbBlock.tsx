import React from 'react'
import type { BreadcrumbBlock as BreadcrumbBlockType } from '../types/contracts'

interface Props { block: BreadcrumbBlockType }

export function BreadcrumbBlock({ block }: Props) {
  return (
    <nav className="max-w-3xl mx-auto px-6 py-3" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
        {block.items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <span className="text-gray-300" aria-hidden="true">/</span>}
            {i < block.items.length - 1 ? (
              <a
                href={item.href}
                className="hover:underline"
                style={{ color: 'var(--color-primary)' }}
              >
                {item.label}
              </a>
            ) : (
              <span className="text-gray-700 font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
