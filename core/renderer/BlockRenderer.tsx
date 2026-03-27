/**
 * core/renderer/BlockRenderer.tsx
 * Renderer central — mapeia tipos de bloco para componentes React.
 * Não aceita blocos não declarados no catálogo.
 */

import React from 'react'
import type { Block } from '../types/contracts'
import { VALID_BLOCK_TYPES } from '../types/contracts'

import { HeroBlock } from '../blocks/HeroBlock'
import { RichTextBlock } from '../blocks/RichTextBlock'
import { FaqBlock } from '../blocks/FaqBlock'
import { ComparisonTableBlock } from '../blocks/ComparisonTableBlock'
import { ToolInputBlock } from '../blocks/ToolInputBlock'
import { ToolResultBlock } from '../blocks/ToolResultBlock'
import { CtaBlock } from '../blocks/CtaBlock'
import { AdSlotBlock } from '../blocks/AdSlotBlock'
import { RelatedLinksBlock } from '../blocks/RelatedLinksBlock'
import { VideoEmbedBlock } from '../blocks/VideoEmbedBlock'
import { DetailsBlock } from '../blocks/DetailsBlock'
import { ArticleContentBlock } from '../blocks/ArticleContentBlock'

interface BlockRendererProps {
  blocks: Block[]
  publisherId?: string
  testMode?: boolean
}

export function BlockRenderer({ blocks, publisherId, testMode = false }: BlockRendererProps) {
  return (
    <div className="block-renderer">
      {blocks.map((block, index) => {
        if (!VALID_BLOCK_TYPES.includes(block.type as never)) {
          throw new Error(
            `[RendererError] Tipo de bloco não suportado: "${block.type}"`
          )
        }

        const key = `${block.type}-${index}`

        switch (block.type) {
          case 'hero':
            return <HeroBlock key={key} block={block} />
          case 'richText':
            return <RichTextBlock key={key} block={block} />
          case 'faq':
            return <FaqBlock key={key} block={block} />
          case 'comparisonTable':
            return <ComparisonTableBlock key={key} block={block} />
          case 'toolInput':
            return <ToolInputBlock key={key} block={block} />
          case 'toolResult':
            return <ToolResultBlock key={key} block={block} />
          case 'cta':
            return <CtaBlock key={key} block={block} />
          case 'adSlot':
            return (
              <AdSlotBlock
                key={key}
                block={block}
                publisherId={publisherId}
                testMode={testMode}
              />
            )
          case 'relatedLinks':
            return <RelatedLinksBlock key={key} block={block} />
          case 'videoEmbed':
            return <VideoEmbedBlock key={key} block={block} />
          case 'details':
            return <DetailsBlock key={key} block={block} />
          case 'articleContent':
            return <ArticleContentBlock key={key} block={block} />
          default:
            // TypeScript garante exhaustiveness aqui
            const _exhaustive: never = block
            throw new Error(`[RendererError] Bloco não mapeado: ${JSON.stringify(_exhaustive)}`)
        }
      })}
    </div>
  )
}
