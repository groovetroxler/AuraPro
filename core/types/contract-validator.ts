/**
 * core/types/contract-validator.ts
 * Validador de contratos do framework.
 * Erros bloqueiam. Warnings são coletados e logados — não bloqueiam.
 * Alinhado com as regras de SYSTEM_CONTRACTS.md
 */

import type {
  SiteEntry,
  SiteConfig,
  Block,
  PageSchema,
  PageType,
  ValidationResult,
} from './contracts'
import { VALID_BLOCK_TYPES, VALID_PAGE_TYPES } from './contracts'

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

function isValidGa4Id(id: string): boolean {
  return /^G-[A-Z0-9]+$/.test(id)
}

function isValidPublisherId(id: string): boolean {
  return /^ca-pub-\d+$/.test(id)
}

// ─────────────────────────────────────────────
// VALIDAÇÃO DE BLOCO — props obrigatórias por tipo
// ─────────────────────────────────────────────

export function validateBlock(block: Block, context: string): void {
  if (!VALID_BLOCK_TYPES.includes(block.type as never)) {
    throw new Error(
      `[ContractError] Bloco inválido: tipo "${block.type}" não está no catálogo. Contexto: ${context}`
    )
  }

  // Props obrigatórias por tipo
  switch (block.type) {
    case 'hero':
      if (!block.heading?.trim())
        throw new Error(`[ContractError] hero sem heading. Contexto: ${context}`)
      break
    case 'richText':
      if (!block.html?.trim())
        throw new Error(`[ContractError] richText sem html. Contexto: ${context}`)
      break
    case 'faq':
      if (!Array.isArray(block.items) || block.items.length === 0)
        throw new Error(`[ContractError] faq sem items. Contexto: ${context}`)
      for (const item of block.items) {
        if (!item.question?.trim() || !item.answer?.trim())
          throw new Error(`[ContractError] faq com item incompleto (question/answer). Contexto: ${context}`)
      }
      break
    case 'comparisonTable':
      if (!Array.isArray(block.headers) || block.headers.length === 0)
        throw new Error(`[ContractError] comparisonTable sem headers. Contexto: ${context}`)
      if (!Array.isArray(block.rows) || block.rows.length === 0)
        throw new Error(`[ContractError] comparisonTable sem rows. Contexto: ${context}`)
      break
    case 'toolInput':
      if (!block.toolId?.trim() || !block.label?.trim())
        throw new Error(`[ContractError] toolInput sem toolId ou label. Contexto: ${context}`)
      break
    case 'toolResult':
      if (!block.toolId?.trim())
        throw new Error(`[ContractError] toolResult sem toolId. Contexto: ${context}`)
      break
    case 'cta':
      if (!block.label?.trim() || !block.href?.trim())
        throw new Error(`[ContractError] cta sem label ou href. Contexto: ${context}`)
      break
    case 'adSlot':
      if (!block.slotId?.trim())
        throw new Error(`[ContractError] adSlot sem slotId. Contexto: ${context}`)
      break
    case 'relatedLinks':
      if (!Array.isArray(block.links) || block.links.length === 0)
        throw new Error(`[ContractError] relatedLinks sem links. Contexto: ${context}`)
      for (const link of block.links) {
        if (!link.label?.trim() || !link.href?.trim())
          throw new Error(`[ContractError] relatedLinks com link incompleto. Contexto: ${context}`)
      }
      break
    case 'videoEmbed':
      if (!block.url?.trim())
        throw new Error(`[ContractError] videoEmbed sem url. Contexto: ${context}`)
      break
    case 'details':
      if (!block.summary?.trim() || !block.content?.trim())
        throw new Error(`[ContractError] details sem summary ou content. Contexto: ${context}`)
      break
    case 'articleContent':
      if (!block.html?.trim())
        throw new Error(`[ContractError] articleContent sem html. Contexto: ${context}`)
      break
  }
}

// ─────────────────────────────────────────────
// VALIDAÇÃO DE COMPOSIÇÃO — regras por tipo de página
// ─────────────────────────────────────────────

function validateComposition(page: PageSchema): void {
  const blockTypes = page.blocks.map((b) => b.type)
  const ctx = `${page.siteKey}/${page.slug}`

  switch (page.type) {
    case 'tool':
      if (!blockTypes.includes('toolInput'))
        throw new Error(`[ContractError] Página tool sem toolInput. Contexto: ${ctx}`)
      if (!blockTypes.includes('toolResult'))
        throw new Error(`[ContractError] Página tool sem toolResult. Contexto: ${ctx}`)
      break
    case 'faq':
      if (!blockTypes.includes('faq'))
        throw new Error(`[ContractError] Página faq sem bloco faq. Contexto: ${ctx}`)
      break
    case 'video':
      if (!blockTypes.includes('videoEmbed'))
        throw new Error(`[ContractError] Página video sem videoEmbed. Contexto: ${ctx}`)
      break
    case 'home':
    case 'article':
      // Deve ter pelo menos um bloco de conteúdo real (não apenas ads/cta)
      const contentBlocks = ['hero', 'richText', 'articleContent', 'faq', 'comparisonTable', 'details']
      const hasContent = page.blocks.some((b) => contentBlocks.includes(b.type))
      if (!hasContent)
        throw new Error(`[ContractError] Página ${page.type} sem bloco de conteúdo real. Contexto: ${ctx}`)
      break
  }
}

// ─────────────────────────────────────────────
// WARNINGS DE PÁGINA
// ─────────────────────────────────────────────

function warnPage(page: PageSchema, warnings: ValidationResult[]): void {
  const blockTypes = page.blocks.map((b) => b.type)
  const ctx = `${page.siteKey}/${page.slug}`

  if (page.status === 'published') {
    if (!blockTypes.includes('relatedLinks'))
      warnings.push({ severity: 'warning', code: 'MISSING_RELATED_LINKS', message: 'Página sem relatedLinks — recomendado para SEO e navegação.', context: ctx })
    if (!blockTypes.includes('cta'))
      warnings.push({ severity: 'warning', code: 'MISSING_CTA', message: 'Página sem CTA — recomendado para monetização e conversão.', context: ctx })
    if (!blockTypes.includes('adSlot'))
      warnings.push({ severity: 'warning', code: 'MISSING_AD_SLOT', message: 'Página sem adSlot — recomendado para receita de anúncios.', context: ctx })
    if (!page.meta.ogImage)
      warnings.push({ severity: 'warning', code: 'MISSING_OG_IMAGE', message: 'Página sem ogImage — compartilhamentos ficam sem preview visual.', context: ctx })
  }
}

// ─────────────────────────────────────────────
// VALIDAÇÃO COMPLETA DE PÁGINA
// ─────────────────────────────────────────────

export function validatePage(page: PageSchema, warnings: ValidationResult[]): void {
  const ctx = `${page.siteKey}/${page.slug}`

  if (!page.id?.trim())
    throw new Error(`[ContractError] Página sem id. Contexto: ${ctx}`)
  if (!page.siteKey?.trim())
    throw new Error(`[ContractError] Página sem siteKey. Contexto: ${ctx}`)
  if (!VALID_PAGE_TYPES.includes(page.type as PageType))
    throw new Error(`[ContractError] Tipo de página inválido: "${page.type}". Contexto: ${ctx}`)
  if (!page.slug?.trim())
    throw new Error(`[ContractError] Página sem slug. Contexto: ${ctx}`)
  if (!page.title?.trim())
    throw new Error(`[ContractError] Página sem title editorial. Contexto: ${ctx}`)
  if (!page.meta?.title?.trim())
    throw new Error(`[ContractError] Página sem meta.title. Contexto: ${ctx}`)
  if (!page.meta?.description?.trim())
    throw new Error(`[ContractError] Página sem meta.description. Contexto: ${ctx}`)
  if (!Array.isArray(page.blocks) || page.blocks.length === 0)
    throw new Error(`[ContractError] Página sem blocos. Contexto: ${ctx}`)

  for (const block of page.blocks) {
    validateBlock(block, ctx)
  }

  validateComposition(page)
  warnPage(page, warnings)
}

// ─────────────────────────────────────────────
// VALIDAÇÃO DE SITE
// ─────────────────────────────────────────────

function validateSiteConfig(config: SiteConfig): void {
  const ctx = config.siteKey ?? 'unknown'

  if (!config.siteKey?.trim())
    throw new Error('[ContractError] Site sem siteKey')
  if (!config.routePath?.trim())
    throw new Error(`[ContractError] Site "${ctx}" sem routePath`)
  if (!config.publicName?.trim())
    throw new Error(`[ContractError] Site "${ctx}" sem publicName`)
  if (!config.seo?.baseUrl?.trim())
    throw new Error(`[ContractError] Site "${ctx}" sem seo.baseUrl`)
  if (!config.seo?.siteTitle?.trim())
    throw new Error(`[ContractError] Site "${ctx}" sem seo.siteTitle`)
  if (!config.seo?.defaultDescription?.trim())
    throw new Error(`[ContractError] Site "${ctx}" sem seo.defaultDescription`)
  if (!config.theme?.brandName?.trim())
    throw new Error(`[ContractError] Site "${ctx}" sem theme.brandName`)
  if (!config.theme?.primaryColor?.trim())
    throw new Error(`[ContractError] Site "${ctx}" sem theme.primaryColor`)

  // Site ativo requer GA4 válido
  if (config.status === 'active') {
    if (!config.analytics.enabled) {
      // Apenas warning — site pode estar ativo sem analytics temporariamente
    } else if (!isValidGa4Id(config.analytics.ga4MeasurementId)) {
      throw new Error(
        `[ContractError] Site ativo "${ctx}" tem ga4MeasurementId inválido: "${config.analytics.ga4MeasurementId}". Formato esperado: G-XXXXXXXXXX`
      )
    }
  }

  // Publisher ID — se presente, deve ter formato correto (independente de ads.enabled)
  if (config.monetization.ads.publisherId) {
    if (!isValidPublisherId(config.monetization.ads.publisherId)) {
      throw new Error(
        `[ContractError] Site "${ctx}" tem publisherId inválido: "${config.monetization.ads.publisherId}". Formato esperado: ca-pub-XXXXXXXXXXXXXXXX`
      )
    }
  }
}

export function validateSiteEntry(entry: SiteEntry, warnings: ValidationResult[]): void {
  validateSiteConfig(entry.config)

  const siteKey = entry.config.siteKey
  const { pages } = entry

  if (!Array.isArray(pages) || pages.length === 0)
    throw new Error(`[ContractError] Site "${siteKey}" sem páginas`)

  // Filtra apenas páginas publicadas para validar requisitos mínimos
  const published = pages.filter((p) => p.status === 'published')

  const hasHome = published.some((p) => p.slug === 'home')
  if (!hasHome)
    throw new Error(`[ContractError] Site "${siteKey}" sem página home publicada`)

  const internalPublished = published.filter((p) => p.slug !== 'home')
  if (internalPublished.length === 0)
    throw new Error(`[ContractError] Site "${siteKey}" sem páginas internas publicadas`)

  // Valida todas as páginas (draft e published)
  for (const page of pages) {
    if (page.siteKey !== siteKey)
      throw new Error(`[ContractError] Página "${page.slug}" tem siteKey "${page.siteKey}" mas pertence ao site "${siteKey}"`)
    validatePage(page, warnings)
  }
}

// ─────────────────────────────────────────────
// VALIDAÇÃO DO REGISTRY COMPLETO
// ─────────────────────────────────────────────

export function validateRegistry(entries: SiteEntry[]): ValidationResult[] {
  const warnings: ValidationResult[] = []

  if (!Array.isArray(entries) || entries.length === 0)
    throw new Error('[ContractError] Registry vazio — nenhum site registrado')

  const routePaths = new Set<string>()
  const siteKeys = new Set<string>()

  for (const entry of entries) {
    const { siteKey, routePath } = entry.config

    if (siteKeys.has(siteKey))
      throw new Error(`[ContractError] siteKey duplicado: "${siteKey}"`)
    siteKeys.add(siteKey)

    if (routePaths.has(routePath))
      throw new Error(`[ContractError] routePath duplicado: "${routePath}"`)
    routePaths.add(routePath)

    validateSiteEntry(entry, warnings)
  }

  // Log de warnings — imprime apenas uma vez por processo de build
  if (warnings.length > 0 && process.env.NODE_ENV !== 'test') {
    if (!(globalThis as Record<string, unknown>).__frameworkWarningsLogged) {
      ;(globalThis as Record<string, unknown>).__frameworkWarningsLogged = true
      console.warn(`\n[Framework] ${warnings.length} warning(s) de contrato:\n`)
      for (const w of warnings) {
        console.warn(`  ⚠  [${w.code}] ${w.message}\n     Contexto: ${w.context}`)
      }
      console.warn('')
    }
  }

  return warnings
}
