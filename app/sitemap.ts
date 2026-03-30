/**
 * app/sitemap.ts
 * Sitemap derivado do registry.
 * Usa seo.baseUrl de cada site — respeita configuração por site.
 * Inclui apenas páginas publicadas (status === 'published').
 */

import type { MetadataRoute } from 'next'
import { getBaseUrl } from '../config/env'
import { getAllSiteEntries } from '../sites/registry'

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = getAllSiteEntries()
  const rootUrl = getBaseUrl().replace(/\/$/, '')
  const urls: MetadataRoute.Sitemap = [
    {
      url: rootUrl,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]

  for (const entry of entries) {
    const { seo } = entry.config
    const baseUrl = seo.baseUrl.replace(/\/$/, '')

    for (const page of entry.pages) {
      if (page.status !== 'published') continue

      const slug = page.slug === 'home' ? '' : `/${page.slug}`
      urls.push({
        url: `${baseUrl}${slug}`,
        changeFrequency: page.slug === 'home' ? 'weekly' : 'monthly',
        priority: page.slug === 'home' ? 1.0 : 0.8,
      })
    }
  }

  return urls
}
