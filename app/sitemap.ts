import type { MetadataRoute } from 'next'
import { getAllSiteEntries } from '../sites/registry'
import { getBaseUrl } from '../config/env'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl()
  const entries = getAllSiteEntries()
  const urls: MetadataRoute.Sitemap = []

  for (const entry of entries) {
    const { routePath } = entry.config

    for (const page of entry.pages) {
      const slug = page.slug === 'home' ? '' : `/${page.slug}`
      urls.push({
        url: `${baseUrl}/${routePath}${slug}`,
        lastModified: new Date(),
        changeFrequency: page.slug === 'home' ? 'weekly' : 'monthly',
        priority: page.slug === 'home' ? 1.0 : 0.8,
      })
    }
  }

  return urls
}
