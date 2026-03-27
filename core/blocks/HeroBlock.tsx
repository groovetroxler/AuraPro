import React from 'react'
import type { HeroBlock as HeroBlockType } from '../types/contracts'

interface Props { block: HeroBlockType }

export function HeroBlock({ block }: Props) {
  return (
    <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-16 px-6 text-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">{block.heading}</h1>
      {block.subheading && (
        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          {block.subheading}
        </p>
      )}
      {block.ctaLabel && block.ctaHref && (
        <a
          href={block.ctaHref}
          className="inline-block bg-white text-blue-800 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
        >
          {block.ctaLabel}
        </a>
      )}
    </section>
  )
}
