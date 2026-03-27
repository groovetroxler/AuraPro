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

O arquivo de implementação é `core/types/contracts.ts`.
O validador de runtime é `core/types/contract-validator.ts`.
Em caso de conflito entre este documento e o código, o código prevalece.

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
    primaryColor: string       // hex, ex: '#1d4ed8'
  }
  seo: {
    siteTitle: string
    defaultTitleTemplate: string  // ex: '%s | Finanças BR'
    defaultDescription: string
    baseUrl: string               // URL base do site incluindo prefixo de rota
    defaultOgImage?: string       // URL absoluta da imagem OG padrão
  }
  analytics: {
    ga4MeasurementId: string      // formato G-XXXXXXXXXX
    enabled: boolean              // false = GA4 não carregado mesmo com id presente
  }
  monetization: {
    ads: {
      enabled: boolean
      provider: 'adsense'
      publisherId?: string        // formato pub-XXXXXXXXXXXXXXXX; opcional
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

### Regras de validação do SiteConfig

- `siteKey` vazio → erro bloqueante
- `routePath` vazio → erro bloqueante
- `publicName` vazio → erro bloqueante
- `seo.baseUrl` vazio → erro bloqueante
- `seo.siteTitle` vazio → erro bloqueante
- `seo.defaultDescription` vazio → erro bloqueante
- `theme.brandName` vazio → erro bloqueante
- `theme.primaryColor` vazio → erro bloqueante
- site com `status: 'active'` e `analytics.enabled: true` e `ga4MeasurementId` com formato inválido → erro bloqueante
- `monetization.ads.publisherId` presente mas com formato inválido → erro bloqueante

### Comportamento por status

- `status: 'draft'` → site validado pelo contrato mas **não servido** pelo runtime
- `status: 'active'` → site validado e servido

### Kit mínimo obrigatório de site

Todo site deve nascer com:
- config válida;
- home publicada (`status: 'published'`);
- pelo menos uma página interna publicada;
- SEO mínimo;
- analytics configurado (pode estar com `enabled: false`);
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
  title: string                   // título editorial
  status: 'draft' | 'published'
  meta: {
    title: string                 // título SEO
    description: string
    canonical?: string            // gerado automaticamente se omitido
    ogImage?: string              // URL absoluta; usa defaultOgImage do site se omitido
    noIndex?: boolean
  }
  blocks: Block[]
}
```

### Comportamento por status

- `status: 'draft'` → página validada mas não servida pelo runtime nem incluída no sitemap
- `status: 'published'` → página servida e incluída no sitemap

### Regras de validação de página

- `id` vazio → erro bloqueante
- `siteKey` vazio → erro bloqueante
- `type` fora do catálogo → erro bloqueante
- `slug` vazio → erro bloqueante
- `title` vazio → erro bloqueante
- `meta.title` vazio → erro bloqueante
- `meta.description` vazio → erro bloqueante
- `blocks` vazio → erro bloqueante
- bloco com tipo fora do catálogo → erro bloqueante
- bloco com props obrigatórias ausentes → erro bloqueante
- combinação inválida de tipo de página e blocos → erro bloqueante
- `siteKey` da página diferente do `siteKey` do site container → erro bloqueante

## Tipos de página aceitos

| Tipo | Blocos obrigatórios |
|---|---|
| `home` | ao menos um bloco de conteúdo real (hero, richText, articleContent, faq, comparisonTable, details) |
| `article` | ao menos um bloco de conteúdo real |
| `tool` | `toolInput` + `toolResult` |
| `faq` | `faq` |
| `video` | `videoEmbed` |
| `comparison` | livre (recomendado: comparisonTable) |
| `tutorial` | livre (recomendado: articleContent) |
| `hub` | livre (recomendado: relatedLinks) |

## Catálogo inicial de blocos

Blocos oficialmente suportados na Fase 1A e suas props obrigatórias:

| Bloco | Props obrigatórias |
|---|---|
| `hero` | `heading` |
| `richText` | `html` |
| `faq` | `items` (array com `question` e `answer`) |
| `comparisonTable` | `headers`, `rows` |
| `toolInput` | `toolId`, `label` |
| `toolResult` | `toolId` |
| `cta` | `label`, `href` |
| `adSlot` | `slotId` |
| `relatedLinks` | `links` (array com `label` e `href`) |
| `videoEmbed` | `url` |
| `details` | `summary`, `content` |
| `articleContent` | `html` |

## SEO técnico — comportamento do framework

- `meta.title` de páginas internas é formatado via `seo.defaultTitleTemplate` do site (ex: `%s | Finanças BR`)
- `meta.title` da home é usado diretamente, sem template
- `canonical` é gerado automaticamente como `seo.baseUrl + '/' + slug` se não declarado
- `og:image` usa `meta.ogImage` da página ou `seo.defaultOgImage` do site como fallback
- `twitter:card` é sempre `summary_large_image`
- JSON-LD `Article` é gerado automaticamente para páginas do tipo `article`
- JSON-LD `WebSite` é gerado automaticamente na home de cada site
- Sitemap inclui apenas páginas com `status: 'published'`
- Robots usa `seo.baseUrl` para a referência do sitemap

## Analytics — comportamento do framework

- GA4 carrega **apenas** se `analytics.enabled === true` E `ga4MeasurementId` tem formato `G-XXXXXXX`
- Com `enabled: false` ou id com formato inválido, o script não é injetado (sem hits inválidos)
- GA4 é isolado por site — cada site tem seu próprio measurement ID
- O `ga4MeasurementId` vem sempre do registry — sem hardcodes paralelos

## Monetização — comportamento do framework

- AdSense carrega **apenas** se `ads.enabled === true` E `publisherId` tem formato `pub-XXXXXXXX`
- Com `enabled: false` ou publisherId ausente/inválido, o script não é injetado
- Slots de anúncio (`adSlot`) exibem placeholder visual quando ads não está em modo real
- Placeholder pré-reserva o espaço visual (evita CLS — crítico para Core Web Vitals)
- `cta` com `programId` appends `?ref=<programId>` na URL para rastreamento de afiliados

## Defaults automáticos

O framework pode preencher automaticamente:
- `canonical` → derivado de `seo.baseUrl + slug`
- `og:image` → fallback para `seo.defaultOgImage`
- `meta.title` → formatado via `defaultTitleTemplate`
- `twitter:card` → sempre `summary_large_image`
- JSON-LD → gerado por tipo de página

O framework **não** deve inferir livremente:
- `siteKey`
- `routePath`
- `status`
- `ga4MeasurementId`
- ausência de home publicada
- ausência de páginas internas publicadas

## Regras de bloqueio

### Bloqueiam (erros fatais)

- `siteKey` duplicado
- `routePath` duplicado
- site sem config mínima
- site ativo sem home publicada
- site ativo sem página interna publicada
- página sem `id`
- página sem `siteKey` coerente com o site
- página sem `type` válido
- página sem `slug`
- página sem `title`
- página sem metadata mínima (`meta.title`, `meta.description`)
- bloco inválido (tipo fora do catálogo)
- bloco sem props obrigatórias
- combinação inválida de tipo de página e bloco
- site ativo com GA4 habilitado e id com formato inválido
- publisherId presente com formato inválido

### Warnings (não fatais — logados no build)

- ausência de `relatedLinks` em páginas publicadas
- ausência de `cta` em páginas publicadas
- ausência de `adSlot` em páginas publicadas
- ausência de `meta.ogImage` em páginas publicadas (usa default do site como fallback)

## Variáveis de ambiente

| Variável | Ambiente | Efeito |
|---|---|---|
| `NEXT_PUBLIC_BASE_URL` | todos | URL base global; obrigatória em produção |
| `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID` | produção | Publisher ID AdSense; habilita ads reais se formato pub-XX |
| `NEXT_PUBLIC_ADS_TEST_MODE` | todos | `true` = ads desabilitados (modo teste visual) |

### Dados hardcoded no config do site

GA4 Measurement IDs são declarados diretamente no `SiteConfig.analytics.ga4MeasurementId` de cada site.
Não são dados secretos (aparecem no HTML público) e ficam no código para simplificar a automação futura.

Consulte `.env.example` para o template completo.
