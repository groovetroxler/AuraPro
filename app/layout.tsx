import type { Metadata } from 'next'
import './globals.css'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Framework Multi-Site',
  description: 'Framework multi-site neutro para sites monetizáveis.',
  verification: {
    google: '1EX09BG-wwpGuTJqKGc5mWyzmIitwJPS74m_5X9v_o8',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
