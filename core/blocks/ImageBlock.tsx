import React from 'react'
import type { ImageBlock as ImageBlockType } from '../types/contracts'

interface Props { block: ImageBlockType }

export function ImageBlock({ block }: Props) {
  return (
    <figure className="max-w-3xl mx-auto px-6 py-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={block.src}
        alt={block.alt}
        width={block.width}
        height={block.height}
        className="w-full h-auto rounded-lg"
        loading="lazy"
      />
      {block.caption && (
        <figcaption className="mt-2 text-center text-sm text-gray-500">
          {block.caption}
        </figcaption>
      )}
    </figure>
  )
}
