/**
 * config/site-url.ts
 * Resolve baseUrl para pacotes de site.
 * Usa getBaseUrl() de config/env.ts como fonte única de verdade.
 */

import { getBaseUrl } from './env'

export function resolveSiteBaseUrl(routePath: string): string {
  const base = getBaseUrl()
  return `${base}/${routePath}`
}
