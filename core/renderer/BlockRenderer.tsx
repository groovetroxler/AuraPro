/**
 * core/renderer/BlockRenderer.tsx
 * Renderer central — mapeia tipos de bloco para componentes React.
 * Não aceita blocos não declarados no catálogo.
 * AdsConfig passada diretamente do config do site.
 */

import React from 'react'
import type { Block, AdsConfig } from '../types/contracts'
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
import { ImageBlock } from '../blocks/ImageBlock'
import { CalloutBlock } from '../blocks/CalloutBlock'
import { DividerBlock } from '../blocks/DividerBlock'
import { BreadcrumbBlock } from '../blocks/BreadcrumbBlock'
import { QuoteBlock } from '../blocks/QuoteBlock'
import { ProsConsBlock } from '../blocks/ProsConsBlock'
import { StatsBlock } from '../blocks/StatsBlock'
import { TableOfContentsBlock } from '../blocks/TableOfContentsBlock'
import { AuthorBoxBlock } from '../blocks/AuthorBoxBlock'
import { TestimonialBlock } from '../blocks/TestimonialBlock'
import { CardsGridBlock } from '../blocks/CardsGridBlock'
import { LogoStripBlock } from '../blocks/LogoStripBlock'
import { AffiliateCardBlock } from '../blocks/AffiliateCardBlock'

interface BlockRendererProps {
  blocks: Block[]
  ads: AdsConfig
}

export function BlockRenderer({ blocks, ads }: BlockRendererProps) {
  return (
    <div className="block-renderer">
      {blocks.map((block, index) => {
        if (!VALID_BLOCK_TYPES.includes(block.type as never)) {
          throw new Error(`[RendererError] Tipo de bloco não suportado: "${block.type}"`)
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
            return <AdSlotBlock key={key} block={block} ads={ads} />
          case 'relatedLinks':
            return <RelatedLinksBlock key={key} block={block} />
          case 'videoEmbed':
            return <VideoEmbedBlock key={key} block={block} />
          case 'details':
            return <DetailsBlock key={key} block={block} />
          case 'articleContent':
            return <ArticleContentBlock key={key} block={block} />
          case 'image':
            return <ImageBlock key={key} block={block} />
          case 'callout':
            return <CalloutBlock key={key} block={block} />
          case 'divider':
            return <DividerBlock key={key} block={block} />
          case 'breadcrumb':
            return <BreadcrumbBlock key={key} block={block} />
          case 'quote':
            return <QuoteBlock key={key} block={block} />
          case 'prosCons':
            return <ProsConsBlock key={key} block={block} />
          case 'stats':
            return <StatsBlock key={key} block={block} />
          case 'tableOfContents':
            return <TableOfContentsBlock key={key} block={block} />
          case 'authorBox':
            return <AuthorBoxBlock key={key} block={block} />
          case 'testimonial':
            return <TestimonialBlock key={key} block={block} />
          case 'cardsGrid':
            return <CardsGridBlock key={key} block={block} />
          case 'logoStrip':
            return <LogoStripBlock key={key} block={block} />
          case 'affiliateCard':
            return <AffiliateCardBlock key={key} block={block} />
          default:
            const _exhaustive: never = block
            throw new Error(`[RendererError] Bloco não mapeado: ${JSON.stringify(_exhaustive)}`)
        }
      })}
    </div>
  )
}
