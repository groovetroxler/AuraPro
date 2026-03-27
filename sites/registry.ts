/**
 * sites/registry.ts
 * Registry central e explícito — fonte única de verdade dos sites ativos.
 * Site não registrado aqui não existe para o runtime.
 *
 * Para adicionar um novo site:
 * 1. Criar pasta sites/<site-id>/
 * 2. Criar config e pages
 * 3. Importar e adicionar ao array REGISTRY abaixo
 * 4. Garantir que routePath é único
 */

import type { SiteEntry } from '../core/types/contracts'
import { validateRegistry } from '../core/types/contract-validator'

// Importações dos pacotes de site
import { financasBrSite } from './financas-br'
import { energiaSolarBrSite } from './energia-solar-br'
import { agroflorestaaBrSite } from './agrofloresta-br'

const REGISTRY: SiteEntry[] = [
  financasBrSite,
  energiaSolarBrSite,
  agroflorestaaBrSite,
]

// Validação executada na inicialização — erros bloqueiam, não são silenciados
validateRegistry(REGISTRY)

export { REGISTRY }

/**
 * Resolve o site ativo pelo routePath (prefixo de rota).
 * Retorna undefined se o site não estiver registrado.
 */
export function getSiteByRoutePath(routePath: string): SiteEntry | undefined {
  return REGISTRY.find((entry) => entry.config.routePath === routePath)
}

/**
 * Resolve o site ativo pelo siteId.
 */
export function getSiteBySiteId(siteId: string): SiteEntry | undefined {
  return REGISTRY.find((entry) => entry.config.siteId === siteId)
}

/**
 * Retorna todos os routePaths registrados (para geração de rotas estáticas).
 */
export function getAllRoutePaths(): string[] {
  return REGISTRY.map((entry) => entry.config.routePath)
}

/**
 * Retorna todas as entradas para o sitemap.
 */
export function getAllSiteEntries(): SiteEntry[] {
  return REGISTRY
}
