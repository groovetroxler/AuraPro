import React from 'react'
import type { CtaBlock as CtaBlockType } from '../types/contracts'

interface Props { block: CtaBlockType }

export function CtaBlock({ block }: Props) {
  const isSecondary = block.variant === 'secondary'
  // programId é appended como query param para rastreamento de afiliados
  const href = block.programId
    ? `${block.href}${block.href.includes('?') ? '&' : '?'}ref=${block.programId}`
    : block.href

  return (
    <div className="flex justify-center px-6 py-6">
      <a
        href={href}
        className={
          isSecondary
            ? 'inline-block border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold px-8 py-3 rounded-lg hover:bg-[var(--color-primary)]/10 transition-colors'
            : 'inline-block bg-[var(--color-primary)] text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity'
        }
        {...(block.programId ? { 'data-program-id': block.programId } : {})}
      >
        {block.label}
      </a>
    </div>
  )
}
