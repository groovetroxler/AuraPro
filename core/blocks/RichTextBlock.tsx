import React from 'react'
import type { RichTextBlock as RichTextBlockType } from '../types/contracts'

interface Props { block: RichTextBlockType }

export function RichTextBlock({ block }: Props) {
  return (
    <div
      className="prose prose-lg max-w-3xl mx-auto px-6 py-8"
      dangerouslySetInnerHTML={{ __html: block.html }}
    />
  )
}
