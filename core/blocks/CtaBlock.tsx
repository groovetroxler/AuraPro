import React from 'react'
import type { CtaBlock as CtaBlockType } from '../types/contracts'

interface Props { block: CtaBlockType }

export function CtaBlock({ block }: Props) {
  const isSecondary = block.variant === 'secondary'
  const href = block.programId
    ? `${block.href}${block.href.includes('?') ? '&' : '?'}ref=${block.programId}`
    : block.href

  return (
    <div className="flex justify-center px-6 py-6">
      <a
        href={href}
        className={
          isSecondary
            ? 'inline-block border-2 border-blue-700 text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors'
            : 'inline-block bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors'
        }
        {...(block.programId ? { 'data-program-id': block.programId } : {})}
      >
        {block.label}
      </a>
    </div>
  )
}
