import type { MetadataRoute } from 'next'
import { getCanonicalBaseUrl } from '../config/env'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getCanonicalBaseUrl()
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
