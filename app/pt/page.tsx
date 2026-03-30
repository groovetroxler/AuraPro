import type { Metadata } from 'next'
import { RootLanding } from '../_components/RootLanding'
import { getRootPageMetadata } from '../_components/rootLandingContent'

export const metadata: Metadata = getRootPageMetadata('pt')

export default function RootPtPage() {
  return <RootLanding locale="pt" />
}
