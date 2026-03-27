# SYSTEM_CONTRACTS

## Política geral

O sistema usa contratos fortes para impedir:
- drift arquitetural;
- improviso de IA;
- configuração paralela;
- páginas inválidas;
- sites inválidos.

O contrato é dividido em:
- contrato de site;
- contrato de página;
- contrato de bloco;
- regras de validação.

## Contrato mínimo de site

Todo site válido deve ter:

- `siteKey`
- `publicName`
- `routePath`
- `locale`
- `market`
- `status`
- `theme`
- `seo`
- `analytics`
- `monetization`
- `pages`

### Estrutura de referência

```ts
type SiteConfig = {
  siteKey: string
  publicName: string
  routePath: string
  locale: 'pt-BR'
  market: 'BR'
  status: 'draft' | 'active'
  theme: {
    brandName: string
    primaryColor: string
  }
  seo: {
    siteTitle: string
    defaultTitleTemplate: string
    defaultDescription: string
    baseUrl: string
  }
  analytics: {
    ga4MeasurementId: string
    enabled: boolean
  }
  monetization: {
    ads: {
      enabled: boolean
      provider: 'adsense'
      publisherId?: string
    }
    affiliates: {
      enabled: boolean
      programs: Array<{
        id: string
        name: string
        baseUrl: string
      }>
    }
  }
}
```

### Kit mínimo obrigatório de site

Todo site deve nascer com:
- config válida;
- home válida;
- pelo menos uma página interna válida;
- SEO mínimo;
- analytics mínimo;
- monetização estrutural mínima.

## Contrato mínimo de página

Toda página válida deve ter:

- `id`
- `siteKey`
- `type`
- `slug`
- `title`
- `status`
- `meta.title`
- `meta.description`
- `blocks`

### Estrutura de referência

```ts
type PageSchema = {
  id: string
  siteKey: string
  type: 'home' | 'article' | 'tool' | 'faq' | 'comparison' | 'tutorial' | 'video' | 'hub'
  slug: string
  title: string
  status: 'draft' | 'published'
  meta: {
    title: string
    description: string
  }
  blocks: Block[]
}
```

## Tipos de página aceitos

- `home`
- `article`
- `tool`
- `faq`
- `comparison`
- `tutorial`
- `video`
- `hub`

## Catálogo inicial de blocos

Blocos oficialmente suportados na Fase 1A:

- `hero`
- `richText`
- `faq`
- `comparisonTable`
- `toolInput`
- `toolResult`
- `cta`
- `adSlot`
- `relatedLinks`
- `videoEmbed`
- `details`
- `articleContent`

## Regras de composição

A composição é flexível, mas não livre de regras.

### Regras mínimas por tipo

- página `tool` deve ter `toolInput` e `toolResult`
- página `faq` deve ter `faq`
- página `video` deve ter `videoEmbed`
- página publicada deve ter metadata mínima e blocos válidos
- home e article devem conter pelo menos um bloco real de conteúdo

## Defaults automáticos

O framework pode preencher automaticamente:
- templates de título;
- descrição padrão;
- defaults visuais não críticos;
- textos auxiliares;
- parâmetros editoriais não críticos.

O framework não deve inferir livremente:
- `siteKey`
- `routePath`
- `status`
- `ga4MeasurementId`
- ausência de home
- ausência de páginas válidas

## Regras de bloqueio

### Bloqueiam

- `siteKey` duplicado
- `routePath` duplicado
- site sem config mínima
- site sem home
- site sem página interna válida
- página sem `slug`
- página sem metadata mínima
- bloco inválido
- bloco sem props obrigatórias
- combinação inválida de página e bloco
- site ativo sem GA4 válido
- links fora do prefixo correto

### Warnings

- ausência de related links
- ausência de CTA
- ausência de ad slot
- conteúdo ainda curto
- campos enriquecedores ausentes
