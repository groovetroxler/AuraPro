/**
 * config/env.ts
 * Resolve ambiente de runtime e baseUrl.
 * Impede build quebrado por ausência de configuração essencial.
 */

import type { RuntimeEnv, RuntimeEnvMode } from '../core/types/contracts'

function resolveMode(): RuntimeEnvMode {
  const vercelEnv = process.env.VERCEL_ENV
  if (vercelEnv === 'production') return 'production'
  if (vercelEnv === 'preview') return 'preview'
  return 'development'
}

function resolveBaseUrl(mode: RuntimeEnvMode): string {
  // 1. Variável explícita sempre tem prioridade
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL.replace(/\/$/, '')
  }

  // 2. Em produção, exige configuração explícita
  if (mode === 'production') {
    const url = process.env.NEXT_PUBLIC_BASE_URL
    if (!url) {
      throw new Error(
        '[EnvError] NEXT_PUBLIC_BASE_URL é obrigatória em produção. ' +
        'Configure no Vercel: Settings > Environment Variables.'
      )
    }
    return url.replace(/\/$/, '')
  }

  // 3. Preview: usa URL do Vercel automaticamente
  if (mode === 'preview' && process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  // 4. Development: localhost
  return 'http://localhost:3000'
}

export function getRuntimeEnv(): RuntimeEnv {
  const mode = resolveMode()
  const baseUrl = resolveBaseUrl(mode)
  return { mode, baseUrl }
}

/**
 * Retorna baseUrl de forma segura para uso em componentes Server.
 * Em client components, use NEXT_PUBLIC_BASE_URL diretamente.
 */
export function getBaseUrl(): string {
  return getRuntimeEnv().baseUrl
}
