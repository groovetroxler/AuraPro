/**
 * config/site-url.ts
 * Resolve baseUrl para pacotes de site.
 */

export function resolveSiteBaseUrl(routePath: string): string {
  const base = resolveGlobalBase()
  return `${base}/${routePath}`
}

function resolveGlobalBase(): string {
  const explicit = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '')
  if (explicit) return explicit

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  return 'http://localhost:3000'
}
