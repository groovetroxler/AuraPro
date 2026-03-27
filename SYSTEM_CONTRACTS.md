# SYSTEM_CONTRACTS

Este documento descreve os contratos centrais do framework multi-site.
O arquivo de implementação é `core/types/contracts.ts` — em caso de conflito, o código é a fonte de verdade.

## Contratos centrais

### Block

Unidade mínima de conteúdo de uma página. Toda página é composta por uma lista de blocos.

**Tipos válidos (catálogo fechado):**
- `hero` — seção de destaque com título, subtítulo e CTA opcional
- `richText` — HTML livre renderizado com tipografia
- `faq` — lista de perguntas e respostas com accordion
- `comparisonTable` — tabela comparativa com cabeçalhos e linhas
- `toolInput` — campo de entrada para ferramentas interativas
- `toolResult` — área de resultado de ferramentas interativas
- `cta` — botão de chamada para ação, com suporte a `programId` de afiliados
- `adSlot` — slot de anúncio declarativo (AdSense ou modo teste)
- `relatedLinks` — lista de links relacionados
- `videoEmbed` — vídeo embed (YouTube ou URL direta)
- `details` — bloco expansível (accordion nativo HTML)
- `articleContent` — conteúdo de artigo com autor e data

Bloco com tipo fora do catálogo **bloqueia** — não é silenciado.

---

### PageSchema

Página declarativa. Composta por slug, metadata e lista de blocos.

```ts
interface PageSchema {
  slug: string       // único por site; 'home' é obrigatório
  meta: PageMeta     // title e description obrigatórios
  blocks: Block[]    // ao menos um bloco
}
```

**Regras:**
- `slug` vazio → erro de contrato
- `meta.title` vazio → erro de contrato
- `meta.description` vazio → erro de contrato
- `blocks` vazio → erro de contrato
- bloco inválido → erro de contrato

---

### SiteConfig

Configuração de um site. Fonte única de verdade para runtime, SEO, analytics e monetização.

```ts
interface SiteConfig {
  siteId: string          // único no registry
  name: string
  routePath: string       // prefixo de rota; único no registry
  defaultLocale: string
  analytics: AnalyticsConfig
  ads: AdsConfig
  affiliates: AffiliateConfig
}
```

---

### AnalyticsConfig

```ts
interface AnalyticsConfig {
  ga4Id: string   // 'G-XXXXXXXXXX' ou placeholder marcado
}
```

GA4 é isolado por site. O `ga4Id` vem sempre do registry — sem listas paralelas.

---

### AdsConfig

```ts
interface AdsConfig {
  publisherId: string   // 'pub-XXXXXXXXXXXXXXXX' ou placeholder marcado
  testMode: boolean     // true = slots visuais de teste; false = AdSense real
}
```

`testMode: true` é o padrão até que a conta AdSense esteja aprovada e o `publisherId` seja real.

---

### AffiliateConfig

```ts
interface AffiliateConfig {
  programs: AffiliateProgram[]
}

interface AffiliateProgram {
  programId: string
  name: string
  trackingUrl: string
}
```

O `programId` é referenciado no bloco `cta` para rastreamento de afiliados.

---

### SiteEntry

Entrada completa no registry. Agrupa config e páginas.

```ts
interface SiteEntry {
  config: SiteConfig
  pages: PageSchema[]
}
```

---

### RuntimeEnv

```ts
type RuntimeEnvMode = 'development' | 'preview' | 'production'

interface RuntimeEnv {
  mode: RuntimeEnvMode
  baseUrl: string
}
```

`baseUrl` é resolvida por `config/env.ts` com a seguinte hierarquia:
1. `NEXT_PUBLIC_BASE_URL` (explícita — sempre tem prioridade)
2. `https://${VERCEL_URL}` em preview
3. `http://localhost:3000` em development
4. Erro bloqueante em production sem `NEXT_PUBLIC_BASE_URL`

---

## Regras de contrato (validadas em runtime)

| Regra | Consequência |
|---|---|
| site não registrado | não existe para o runtime |
| `routePath` duplicado | erro bloqueante |
| `siteId` duplicado | erro bloqueante |
| site sem home | erro bloqueante |
| site sem página interna | erro bloqueante |
| página sem slug | erro bloqueante |
| página sem `meta.title` | erro bloqueante |
| página sem `meta.description` | erro bloqueante |
| bloco com tipo fora do catálogo | erro bloqueante |
| renderer recebendo bloco não mapeado | erro TypeScript em build |

---

## Variáveis de ambiente obrigatórias

| Variável | Ambiente | Obrigatória | Descrição |
|---|---|---|---|
| `NEXT_PUBLIC_BASE_URL` | production | ✅ | URL base do deploy |
| `NEXT_PUBLIC_GA4_FINANCAS_BR` | todos | recomendada | GA4 ID financas-br |
| `NEXT_PUBLIC_GA4_ENERGIA_SOLAR_BR` | todos | recomendada | GA4 ID energia-solar-br |
| `NEXT_PUBLIC_GA4_AGROFLORESTA_BR` | todos | recomendada | GA4 ID agrofloresta-br |
| `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID` | production | para ads reais | Publisher ID AdSense |
| `NEXT_PUBLIC_ADS_TEST_MODE` | todos | não | `true` ativa modo teste (padrão) |

Consulte `.env.example` para o template completo.
