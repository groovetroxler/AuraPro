import Link from 'next/link'
import { getAllSiteEntries } from '../sites/registry'

export default function RootPage() {
  const sites = getAllSiteEntries()
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Framework Multi-Site</h1>
      <p className="text-gray-500 mb-10">Sites disponíveis neste framework:</p>
      <ul className="space-y-4 w-full max-w-sm">
        {sites.map((entry) => (
          <li key={entry.config.siteId}>
            <Link
              href={`/${entry.config.routePath}`}
              className="block w-full text-center bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors"
            >
              {entry.config.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
