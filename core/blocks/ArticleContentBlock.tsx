import React from 'react'
import type { ArticleContentBlock as ArticleContentBlockType } from '../types/contracts'

interface Props { block: ArticleContentBlockType }

export function ArticleContentBlock({ block }: Props) {
  return (
    <article className="max-w-3xl mx-auto px-6 py-8">
      {(block.author || block.publishedAt) && (
        <div className="flex gap-4 text-xs text-gray-400 mb-6">
          {block.author && <span>Por {block.author}</span>}
          {block.publishedAt && (
            <time dateTime={block.publishedAt}>
              {new Date(block.publishedAt).toLocaleDateString('pt-BR', {
                day: '2-digit', month: 'long', year: 'numeric'
              })}
            </time>
          )}
        </div>
      )}
      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: block.html }}
      />
    </article>
  )
}
