import React from 'react'
import type { LogoStripBlock as LogoStripBlockType } from '../types/contracts'

interface Props { block: LogoStripBlockType }

export function LogoStripBlock({ block }: Props) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-6">
      {block.title && (
        <p className="text-center text-sm text-gray-500 mb-4">{block.title}</p>
      )}
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {block.items.map((item, i) => {
          const img = (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={item.src}
              alt={item.name}
              className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
              loading="lazy"
            />
          )

          return item.href ? (
            <a key={i} href={item.href} title={item.name} target="_blank" rel="noopener noreferrer">
              {img}
            </a>
          ) : (
            <span key={i} title={item.name}>{img}</span>
          )
        })}
      </div>
    </div>
  )
}
