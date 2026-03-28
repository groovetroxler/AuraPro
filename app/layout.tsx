import type { Metadata } from 'next'
import { getBaseUrl } from '../config/env'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
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
