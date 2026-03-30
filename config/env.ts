/**
 * config/env.ts
 * Resolve runtime mode and baseUrl.
 * In production, uses the canonical domain as safe fallback.
 */

import type { RuntimeEnv, RuntimeEnvMode } from '../core/types/contracts'

const CANONICAL_PRODUCTION_BASE_URL = 'https://aurapro-consulting.com'

function resolveMode(): RuntimeEnvMode {
  const vercelEnv = process.env.VERCEL_ENV
  if (vercelEnv === 'production') return 'production'
  if (vercelEnv === 'preview') return 'preview'
  return 'development'
}

function resolveBaseUrl(mode: RuntimeEnvMode): string {
  const explicit = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '')

  // Production fallback is pinned to canonical domain.
  if (mode === 'production') {
    return CANONICAL_PRODUCTION_BASE_URL
  }

  // Explicit env var wins outside production.
  if (explicit) return explicit

  // Preview fallback on Vercel URL.
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  // Local development fallback.
  return 'http://localhost:3000'
}

export function getRuntimeEnv(): RuntimeEnv {
  const mode = resolveMode()
  const baseUrl = resolveBaseUrl(mode)
  return { mode, baseUrl }
}

/**
 * Safe helper for Server Components.
 */
export function getBaseUrl(): string {
  return getRuntimeEnv().baseUrl
}

/**
 * Canonical domain used for production SEO surfaces.
 */
export function getCanonicalBaseUrl(): string {
  return CANONICAL_PRODUCTION_BASE_URL
}
