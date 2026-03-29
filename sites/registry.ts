/**
 * sites/registry.ts
 * Registry central e explícito — fonte única de verdade dos sites ativos.
 * Site não registrado aqui não existe para o runtime.
 */

import type { SiteEntry } from '../core/types/contracts'
import { validateRegistry } from '../core/types/contract-validator'

import { financasBrSite } from './financas-br'
import { energiaSolarBrSite } from './energia-solar-br'
import { agroflorestaBrSite } from './agrofloresta-br'
import { saudeBrSite } from './saude-br'
import { meliponiculturaBrSite } from './meliponicultura-br'

const ALL_ENTRIES: SiteEntry[] = [
  financasBrSite,
  energiaSolarBrSite,
  agroflorestaBrSite,
  saudeBrSite,
  meliponiculturaBrSite,
]

// Validação executada na inicialização — erros bloqueiam, warnings são logados
validateRegistry(ALL_ENTRIES)

// Runtime expõe apenas sites ativos
const REGISTRY: SiteEntry[] = ALL_ENTRIES.filter(
  (e) => e.config.status === 'active'
)

export { REGISTRY }

export function getSiteByRoutePath(routePath: string): SiteEntry | undefined {
  return REGISTRY.find((e) => e.config.routePath === routePath)
}

export function getSiteBySiteKey(siteKey: string): SiteEntry | undefined {
  return REGISTRY.find((e) => e.config.siteKey === siteKey)
}

export function getAllRoutePaths(): string[] {
  return REGISTRY.map((e) => e.config.routePath)
}

export function getAllSiteEntries(): SiteEntry[] {
  return REGISTRY
}
