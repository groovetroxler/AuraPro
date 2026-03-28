# SITE_CREATION — Instruções para criação de novo site

> **Status:** em validação — este documento pode ser alterado até a conclusão da Fase 1B.
> Após validação, torna-se instrução operacional permanente do framework.

## Propósito

Este documento define a sequência completa para criar, validar e publicar um novo site dentro do framework multi-site AuraPro.

## Pré-requisitos

- Fase 1A concluída e estável.
- Repositório com auto-deploy via GitHub → Vercel.
- Arquivo `_credentials.env` na raiz local com token Git válido.
- Node.js e dependências do projeto instalados.

## Comando

```bash
npx tsx scripts/create-site.ts
```

## Inputs obrigatórios

| Input | Exemplo | Descrição |
|---|---|---|
| `siteKey` | `saude-br` | Identificador único do site no registry |
| `publicName` | `Saúde BR` | Nome público exibido no site |
| `routePath` | `saude` | Prefixo de rota (URL) — deve ser único |
| `primaryColor` | `#16a34a` | Cor primária do tema (hex) |

## Inputs configurados após a criação

| Input | Exemplo | Quando configurar |
|---|---|---|
| `ga4MeasurementId` | `G-XXXXXXXXXX` | Após criar propriedade no Google Analytics |

Mesma abordagem da Fase 1A: o site nasce publicado e funcional, depois o GA4 é configurado no Google, o ID é inserido no código, push, e o auto-deploy atualiza.

## Defaults automáticos

O scaffold preenche os seguintes valores sem exigir input:

| Campo | Valor padrão |
|---|---|
| `locale` | `'pt-BR'` |
| `market` | `'BR'` |
| `status` | `'active'` |
| `analytics.enabled` | `false` |
| `analytics.ga4MeasurementId` | `''` |
| `monetization.ads.provider` | `'adsense'` |
| `monetization.ads.publisherId` | Publisher ID global do projeto |
| `monetization.ads.enabled` | Derivado de `NEXT_PUBLIC_ADS_TEST_MODE` |
| `monetization.affiliates.enabled` | `false` |
| `monetization.affiliates.programs` | `[]` |
| `seo.siteTitle` | Derivado de `publicName` |
| `seo.defaultTitleTemplate` | `'%s | <publicName>'` |
| `seo.defaultDescription` | Placeholder marcado — substituir depois |
| `seo.baseUrl` | Derivado de `routePath` via `config/site-url.ts` |
| `theme.brandName` | Igual a `publicName` |

## O que o scaffold gera

1. **Arquivo do site:** `sites/<siteKey>/index.ts`
   - Config válida com todos os campos obrigatórios
   - Página home placeholder (status `published`)
   - Uma página interna placeholder (status `published`)
   - Conteúdo placeholder claramente marcado como temporário

2. **Atualização do registry:** `sites/registry.ts`
   - Import do novo site adicionado
   - Entrada adicionada ao array `ALL_ENTRIES`

## Sequência de execução

1. Coleta dos inputs obrigatórios
2. Valida que `siteKey` e `routePath` não existem no registry
3. Gera `sites/<siteKey>/index.ts` com config e páginas placeholder
4. Atualiza `sites/registry.ts` com import e entrada
5. Executa validação de contrato no registry completo
6. Executa build para confirmar que não há erros
7. Commit automático com mensagem descritiva
8. Push automático para o GitHub (usando token do `_credentials.env`)
9. Vercel faz auto-deploy
10. Site acessível em `<NEXT_PUBLIC_BASE_URL>/<routePath>`

## O que o scaffold NÃO faz

- Não cria conteúdo real — apenas placeholders marcados
- Não configura GA4 no Google Analytics
- Não configura domínio próprio
- Não cria OG images
- Não configura programas de afiliados

## Pós-criação — sequência manual

Após o scaffold publicar o site:

1. Criar propriedade no Google Analytics (GA4)
2. Inserir `ga4MeasurementId` no config do site
3. Ativar `analytics.enabled: true`
4. Substituir conteúdo placeholder por conteúdo real
5. Push — auto-deploy atualiza tudo

## Validações de segurança

O scaffold deve impedir a criação se:

- `siteKey` já existir no registry
- `routePath` já existir no registry
- `siteKey` estiver vazio
- `routePath` estiver vazio
- `publicName` estiver vazio
- `primaryColor` não for hex válido
- O site gerado não passar na validação de contrato
- O build falhar após a geração
