import type { Metadata } from 'next'

export type RootLocale = 'en' | 'pt'

interface RootCopy {
  metaTitle: string
  metaDescription: string
  ogLocale: 'en_US' | 'pt_BR'
  inLanguage: 'en-US' | 'pt-BR'
  canonicalPath: '/' | '/pt'
  pretitle: string
  headline: string
  paragraphs: [string, string]
}

const ROOT_COPY: Record<RootLocale, RootCopy> = {
  en: {
    metaTitle: 'Aura Pro Consulting | Digital Infrastructure and Process Consulting',
    metaDescription:
      'Aura Pro Consulting helps small and medium-sized businesses adopt more modern digital infrastructure and clearer operational processes.',
    ogLocale: 'en_US',
    inLanguage: 'en-US',
    canonicalPath: '/',
    pretitle: 'Aura Pro Consulting',
    headline:
      'We are a consulting company that helps small and medium-sized businesses use more modern digital infrastructure and processes.',
    paragraphs: [
      'Our work is focused on practical organization, lightweight systems, and digital tools that make operations clearer and easier to run.',
      'We usually work with setups involving Google Workspace, Notion, and simple process design adapted to the real stage of each business.',
    ],
  },
  pt: {
    metaTitle: 'Aura Pro Consulting | Consultoria em Infraestrutura e Processos Digitais',
    metaDescription:
      'A Aura Pro Consulting ajuda pequenas e medias empresas a adotar infraestrutura digital mais moderna e processos operacionais mais claros.',
    ogLocale: 'pt_BR',
    inLanguage: 'pt-BR',
    canonicalPath: '/pt',
    pretitle: 'Aura Pro Consulting',
    headline:
      'Somos uma consultoria que ajuda pequenas e medias empresas a usar infraestrutura digital e processos mais modernos.',
    paragraphs: [
      'Nosso trabalho e focado em organizacao pratica, sistemas leves e ferramentas digitais que deixam a operacao mais clara e facil de executar.',
      'Atuamos com setups envolvendo Google Workspace, Notion e desenho de processos simples, adaptados ao estagio real de cada negocio.',
    ],
  },
}

export function getRootPageContent(locale: RootLocale): RootCopy {
  return ROOT_COPY[locale]
}

export function getRootPageMetadata(locale: RootLocale): Metadata {
  const copy = getRootPageContent(locale)

  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: {
      canonical: copy.canonicalPath,
      languages: {
        'en-US': '/',
        'pt-BR': '/pt',
      },
    },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      url: copy.canonicalPath,
      siteName: 'Aura Pro Consulting',
      type: 'website',
      locale: copy.ogLocale,
    },
    twitter: {
      card: 'summary',
      title: copy.metaTitle,
      description: copy.metaDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}
