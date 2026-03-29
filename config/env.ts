/**
 * config/env.ts
 * Resolve ambiente de runtime e baseUrl.
 * Em produção, exige NEXT_PUBLIC_BASE_URL ou VERCEL_URL para evitar fallback inválido.
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

  // Produção sem configuração de URL deve falhar cedo.
  if (mode === 'production') {
    throw new Error(
      '[EnvError] NEXT_PUBLIC_BASE_URL e VERCEL_URL não definidos em produção. ' +
      'Configure pelo menos uma dessas variáveis no ambiente de deploy.'
    )
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
