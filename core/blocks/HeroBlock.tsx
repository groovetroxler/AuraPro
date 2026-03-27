import React from 'react'
import type { HeroBlock as HeroBlockType } from '../types/contracts'

interface Props { block: HeroBlockType }

export function HeroBlock({ block }: Props) {
  return (
    <section
      className="text-white py-16 px-6 text-center"
      style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, color-mix(in srgb, var(--color-primary) 70%, black) 100%)' }}
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-4">{block.heading}</h1>
      {block.subheading && (
        <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          {block.subheading}
        </p>
      )}
      {block.ctaLabel && block.ctaHref && (
        <a
          href={block.ctaHref}
          className="inline-block bg-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          style={{ color: 'var(--color-primary)' }}
        >
          {block.ctaLabel}
        </a>
      )}
    </section>
  )
}
