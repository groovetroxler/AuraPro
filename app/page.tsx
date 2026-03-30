import type { Metadata } from 'next'
import { RootLanding } from './_components/RootLanding'
import { getRootPageMetadata } from './_components/rootLandingContent'

export const metadata: Metadata = getRootPageMetadata('en')

export default function RootPage() {
  return <RootLanding locale="en" />
}
