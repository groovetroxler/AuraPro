/**
 * core/types/contracts.ts
 * Contratos centrais do framework multi-site.
 * Fonte de verdade para tipos, validações e regras de runtime.
 * Alinhado com SYSTEM_CONTRACTS.md — em caso de conflito, este arquivo prevalece.
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

export type BlockType = (typeof VALID_BLOCK_TYPES)[number]

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
  programId?: string
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
// PAGE TYPE — tipos aceitos pelo sistema
// ─────────────────────────────────────────────

export const VALID_PAGE_TYPES = [
  'home',
  'article',
  'tool',
  'faq',
  'comparison',
  'tutorial',
  'video',
  'hub',
] as const

export type PageType = (typeof VALID_PAGE_TYPES)[number]

// ─────────────────────────────────────────────
// PAGE SCHEMA — página declarativa
// ─────────────────────────────────────────────

export interface PageMeta {
  title: string
  description: string
  canonical?: string   // gerado automaticamente se omitido
  ogImage?: string     // URL absoluta da imagem OG; usa default do site se omitida
  noIndex?: boolean
}

export interface PageSchema {
  id: string                    // identificador único da página (ex: 'financas-home')
  siteKey: string               // vínculo explícito com o site
  type: PageType                // tipo da página — governa regras de composição
  slug: string                  // ex: 'home', 'financiamento'
  title: string                 // título editorial (usado em breadcrumbs, listas)
  status: 'draft' | 'published' // draft = não servido pelo runtime
  meta: PageMeta
  blocks: Block[]
}

// ─────────────────────────────────────────────
// SITE CONFIG — configuração por site
// Alinhado com SYSTEM_CONTRACTS.md
// ─────────────────────────────────────────────

export interface SiteTheme {
  brandName: string
  primaryColor: string   // hex, ex: '#1d4ed8'
}

export interface SiteSeo {
  siteTitle: string              // ex: 'Finanças BR'
  defaultTitleTemplate: string   // ex: '%s | Finanças BR'
  defaultDescription: string
  baseUrl: string                // ex: 'https://aura.vercel.app/financas'
  defaultOgImage?: string        // URL absoluta da imagem OG padrão do site
}

export interface SiteAnalytics {
  ga4MeasurementId: string       // ex: 'G-XXXXXXXXXX'
  enabled: boolean
}

export interface AdsConfig {
  enabled: boolean
  provider: 'adsense'
  publisherId?: string           // opcional — ausente = sem ads reais
}

export interface AffiliateProgram {
  id: string
  name: string
  baseUrl: string
}

export interface AffiliateConfig {
  enabled: boolean
  programs: AffiliateProgram[]
}

export interface SiteMonetization {
  ads: AdsConfig
  affiliates: AffiliateConfig
}

export interface SiteConfig {
  siteKey: string                 // único no registry; ex: 'financas-br'
  publicName: string              // ex: 'Finanças BR'
  routePath: string               // prefixo de rota único; ex: 'financas'
  locale: 'pt-BR'
  market: 'BR'
  status: 'draft' | 'active'     // draft = site não servido
  theme: SiteTheme
  seo: SiteSeo
  analytics: SiteAnalytics
  monetization: SiteMonetization
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
  baseUrl: string   // baseUrl global — cada site tem sua própria em config.seo.baseUrl
}

// ─────────────────────────────────────────────
// RESULTADO DE VALIDAÇÃO — suporte a warnings
// ─────────────────────────────────────────────

export type ValidationSeverity = 'error' | 'warning'

export interface ValidationResult {
  severity: ValidationSeverity
  code: string
  message: string
  context: string
}
