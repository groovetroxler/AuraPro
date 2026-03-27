/**
 * SYSTEM_CONTRACTS — Contratos centrais do framework multi-site
 * Fonte de verdade para tipos, validações e regras de runtime.
 * Qualquer alteração aqui deve ser refletida em SYSTEM_CONTRACTS.md
 */

// ─────────────────────────────────────────────
// BLOCO — unidade mínima de conteúdo
// ─────────────────────────────────────────────

export const VALID_BLOCK_TYPES = [
  'hero',
  'richText',
  'faq',
  'comparisonTable',
  'toolInput',
  'toolResult',
  'cta',
  'adSlot',
  'relatedLinks',
  'videoEmbed',
  'details',
  'articleContent',
] as const

export type BlockType = typeof VALID_BLOCK_TYPES[number]

export interface HeroBlock {
  type: 'hero'
  heading: string
  subheading?: string
  ctaLabel?: string
  ctaHref?: string
}

export interface RichTextBlock {
  type: 'richText'
  html: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface FaqBlock {
  type: 'faq'
  items: FaqItem[]
}

export interface ComparisonRow {
  label: string
  values: string[]
}

export interface ComparisonTableBlock {
  type: 'comparisonTable'
  headers: string[]
  rows: ComparisonRow[]
}

export interface ToolInputBlock {
  type: 'toolInput'
  toolId: string
  label: string
  placeholder?: string
}

export interface ToolResultBlock {
  type: 'toolResult'
  toolId: string
}

export interface CtaBlock {
  type: 'cta'
  label: string
  href: string
  programId?: string   // ID do programa de afiliados (opcional, para rastreamento)
  variant?: 'primary' | 'secondary'
}

export interface AdSlotBlock {
  type: 'adSlot'
  slotId: string
  format?: 'banner' | 'rectangle' | 'leaderboard' | 'responsive'
}

export interface RelatedLink {
  label: string
  href: string
}

export interface RelatedLinksBlock {
  type: 'relatedLinks'
  links: RelatedLink[]
}

export interface VideoEmbedBlock {
  type: 'videoEmbed'
  url: string
  title?: string
}

export interface DetailsBlock {
  type: 'details'
  summary: string
  content: string
}

export interface ArticleContentBlock {
  type: 'articleContent'
  html: string
  author?: string
  publishedAt?: string
}

export type Block =
  | HeroBlock
  | RichTextBlock
  | FaqBlock
  | ComparisonTableBlock
  | ToolInputBlock
  | ToolResultBlock
  | CtaBlock
  | AdSlotBlock
  | RelatedLinksBlock
  | VideoEmbedBlock
  | DetailsBlock
  | ArticleContentBlock

// ─────────────────────────────────────────────
// PAGE SCHEMA — página declarativa
// ─────────────────────────────────────────────

export interface PageMeta {
  title: string
  description: string
  canonical?: string   // gerado automaticamente se omitido
  noIndex?: boolean
}

export interface PageSchema {
  slug: string          // ex: 'home', 'financiamento'
  meta: PageMeta
  blocks: Block[]
}

// ─────────────────────────────────────────────
// ANALYTICS CONFIG
// ─────────────────────────────────────────────

export interface AnalyticsConfig {
  ga4Id: string         // ex: 'G-XXXXXXXXXX' ou 'PLACEHOLDER_GA4_ID'
}

// ─────────────────────────────────────────────
// ADS CONFIG
// ─────────────────────────────────────────────

export interface AdsConfig {
  publisherId: string   // ex: 'pub-XXXXXXXXXXXXXXXX' ou 'PLACEHOLDER_PUBLISHER_ID'
  testMode: boolean     // true = modo de teste; false = modo real
}

// ─────────────────────────────────────────────
// AFFILIATE CONFIG
// ─────────────────────────────────────────────

export interface AffiliateProgram {
  programId: string
  name: string
  trackingUrl: string
}

export interface AffiliateConfig {
  programs: AffiliateProgram[]
}

// ─────────────────────────────────────────────
// SITE CONFIG — configuração por site
// ─────────────────────────────────────────────

export interface SiteConfig {
  siteId: string        // ex: 'financas-br'
  name: string          // ex: 'Finanças BR'
  routePath: string     // ex: 'financas' (prefixo de rota, único)
  defaultLocale: string // ex: 'pt-BR'
  analytics: AnalyticsConfig
  ads: AdsConfig
  affiliates: AffiliateConfig
}

// ─────────────────────────────────────────────
// SITE ENTRY — entrada no registry
// ─────────────────────────────────────────────

export interface SiteEntry {
  config: SiteConfig
  pages: PageSchema[]
}

// ─────────────────────────────────────────────
// RUNTIME ENV
// ─────────────────────────────────────────────

export type RuntimeEnvMode = 'development' | 'preview' | 'production'

export interface RuntimeEnv {
  mode: RuntimeEnvMode
  baseUrl: string
}
