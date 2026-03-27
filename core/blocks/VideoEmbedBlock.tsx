import React from 'react'
import type { VideoEmbedBlock as VideoEmbedBlockType } from '../types/contracts'

interface Props { block: VideoEmbedBlockType }

function toEmbedUrl(url: string): string {
  // YouTube: converter para embed
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/)
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`
  return url
}

export function VideoEmbedBlock({ block }: Props) {
  const embedUrl = toEmbedUrl(block.url)
  return (
    <section className="max-w-3xl mx-auto px-6 py-8">
      {block.title && (
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{block.title}</h3>
      )}
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow">
        <iframe
          src={embedUrl}
          title={block.title ?? 'Vídeo'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </section>
  )
}
