/**
 * config/env.ts
 * Resolve ambiente de runtime e baseUrl.
 * Em produção, usa NEXT_PUBLIC_BASE_URL se definida, senão VERCEL_URL como fallback.
 * Isso permite o primeiro deploy funcionar antes de configurar a variável manual.
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

  // Vercel (produção ou preview): usa VERCEL_URL como fallback
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  // Produção sem nenhum fallback → warning (não bloqueia mais o build)
  if (mode === 'production') {
    console.warn(
      '[EnvWarning] NEXT_PUBLIC_BASE_URL não definida em produção. ' +
      'Usando fallback. Configure no Vercel: Settings > Environment Variables.'
    )
    return 'https://localhost:3000'
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
