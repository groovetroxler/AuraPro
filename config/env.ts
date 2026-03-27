/**
 * config/env.ts
 * Resolve ambiente de runtime e baseUrl.
 * Impede build quebrado por ausência de configuração essencial em produção.
 */

import type { RuntimeEnv, RuntimeEnvMode } from '../core/types/contracts'

function resolveMode(): RuntimeEnvMode {
  const vercelEnv = process.env.VERCEL_ENV
  if (vercelEnv === 'production') return 'production'
  if (vercelEnv === 'preview') return 'preview'
  return 'development'
}

function resolveBaseUrl(mode: RuntimeEnvMode): string {
  const explicit = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '')

  // Variável explícita sempre tem prioridade
  if (explicit) return explicit

  // Em produção sem variável explícita → erro (impede deploy quebrado)
  if (mode === 'production') {
    throw new Error(
      '[EnvError] NEXT_PUBLIC_BASE_URL é obrigatória em produção. ' +
      'Configure no Vercel: Settings > Environment Variables.'
    )
  }

  // Preview: usa URL automática do Vercel
  if (mode === 'preview' && process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  // Development: localhost
  return 'http://localhost:3000'
}

export function getRuntimeEnv(): RuntimeEnv {
  const mode = resolveMode()
  const baseUrl = resolveBaseUrl(mode)
  return { mode, baseUrl }
}

/**
 * Retorna baseUrl de forma segura para uso em componentes Server.
 */
export function getBaseUrl(): string {
  return getRuntimeEnv().baseUrl
}
