/**
 * contract-validator.ts
 * Valida contratos do framework. Erros essenciais bloqueiam — não são silenciados.
 */

import type { SiteEntry, Block, PageSchema } from './contracts'
import { VALID_BLOCK_TYPES } from './contracts'

// ─────────────────────────────────────────────
// VALIDAÇÃO DE BLOCO
// ─────────────────────────────────────────────

export function validateBlock(block: Block, context: string): void {
  if (!VALID_BLOCK_TYPES.includes(block.type as never)) {
    throw new Error(
      `[ContractError] Bloco inválido: tipo "${block.type}" não está no catálogo. Contexto: ${context}`
    )
  }
}

// ─────────────────────────────────────────────
// VALIDAÇÃO DE PÁGINA
// ─────────────────────────────────────────────

export function validatePage(page: PageSchema, siteId: string): void {
  if (!page.slug || page.slug.trim() === '') {
    throw new Error(`[ContractError] Página sem slug no site "${siteId}"`)
  }
  if (!page.meta?.title || page.meta.title.trim() === '') {
    throw new Error(
      `[ContractError] Página "${page.slug}" no site "${siteId}" está sem meta.title`
    )
  }
  if (!page.meta?.description || page.meta.description.trim() === '') {
    throw new Error(
      `[ContractError] Página "${page.slug}" no site "${siteId}" está sem meta.description`
    )
  }
  if (!Array.isArray(page.blocks) || page.blocks.length === 0) {
    throw new Error(
      `[ContractError] Página "${page.slug}" no site "${siteId}" não tem blocos`
    )
  }
  for (const block of page.blocks) {
    validateBlock(block, `${siteId}/${page.slug}`)
  }
}

// ─────────────────────────────────────────────
// VALIDAÇÃO DE SITE
// ─────────────────────────────────────────────

export function validateSiteEntry(entry: SiteEntry): void {
  const { config, pages } = entry
  const siteId = config.siteId

  if (!siteId || siteId.trim() === '') {
    throw new Error('[ContractError] Site sem siteId')
  }
  if (!config.routePath || config.routePath.trim() === '') {
    throw new Error(`[ContractError] Site "${siteId}" sem routePath`)
  }
  if (!Array.isArray(pages) || pages.length === 0) {
    throw new Error(`[ContractError] Site "${siteId}" não tem páginas`)
  }

  const hasHome = pages.some((p) => p.slug === 'home')
  if (!hasHome) {
    throw new Error(`[ContractError] Site "${siteId}" não tem página home`)
  }

  const internalPages = pages.filter((p) => p.slug !== 'home')
  if (internalPages.length === 0) {
    throw new Error(
      `[ContractError] Site "${siteId}" não tem nenhuma página interna válida além da home`
    )
  }

  for (const page of pages) {
    validatePage(page, siteId)
  }
}

// ─────────────────────────────────────────────
// VALIDAÇÃO DO REGISTRY COMPLETO
// ─────────────────────────────────────────────

export function validateRegistry(entries: SiteEntry[]): void {
  if (!Array.isArray(entries) || entries.length === 0) {
    throw new Error('[ContractError] Registry vazio — nenhum site registrado')
  }

  const routePaths = new Set<string>()
  const siteIds = new Set<string>()

  for (const entry of entries) {
    const { siteId, routePath } = entry.config

    if (siteIds.has(siteId)) {
      throw new Error(`[ContractError] siteId duplicado: "${siteId}"`)
    }
    siteIds.add(siteId)

    if (routePaths.has(routePath)) {
      throw new Error(`[ContractError] routePath duplicado: "${routePath}"`)
    }
    routePaths.add(routePath)

    validateSiteEntry(entry)
  }
}
