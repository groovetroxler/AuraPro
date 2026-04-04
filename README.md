# Multi-Site Framework — Fase 1

Este repositório contém a base de um **framework neutro multi-site** para criação, publicação e operação de sites monetizáveis.

O foco da Fase 1 não é apenas estruturar código local. O foco é fechar uma base que já possa ser **publicada, acessada, monitorada e monetizada**.

## Objetivo da Fase 1

Entregar um framework funcional em produção, hospedado no Vercel, com três sites iniciais publicados por prefixo de rota, cada um com:
- páginas acessíveis;
- SEO técnico válido;
- monitoramento por GA4;
- estrutura de anúncios e afiliados integrada;
- operação mínima validada em ambiente publicado.

## Sites iniciais (Fase 1A)

Os três sites que formaram a fundação na Fase 1A:
- `financas-br`
- `energia-solar-br`
- `agrofloresta-br`

## Estado atual do registry

| siteKey | routePath | status | Observação |
|---------|-----------|--------|------------|
| `financas-br` | `financas` | active | Site inicial Fase 1A |
| `energia-solar-br` | `energia-solar` | active | Site inicial Fase 1A |
| `agrofloresta-br` | `agrofloresta` | active | Site inicial Fase 1A |
| `meliponicultura-br` | `meliponicultura` | active | Criado via scaffold (Fase 1B), refinado editorialmente |
| `saude-br` | `saude` | draft | Criado via scaffold (Fase 1B), aguarda Rotina 2 |

Além dos sites, existe uma **root institucional bilíngue** (`/` em inglês, `/pt` em português) que opera como entidade separada do registry.

Nenhum site é tratado como fundação principal. Todos são instâncias pares dentro do framework.

## Critério real de conclusão

A Fase 1 só fecha quando:
- o framework estiver publicado no Vercel e acessível publicamente;
- a Rotina 1 (scaffold de criação de site) existir e funcionar;
- a Rotina 2 (conteúdo e estilização) existir e funcionar;
- o ciclo completo Rotina 1 → Rotina 2 → push → site real no ar for reproduzível;
- `baseUrl`, canonical, sitemap e robots estiverem válidos em produção;
- pageview chegando no GA4 por site;
- slots de anúncios renderizando em modo real ou modo de teste operacionalmente verificável.

Sem publicação, monitoramento e monetização operacional, a Fase 1 não está concluída.

## Estrutura esperada

```text
app/
core/
config/
sites/
  registry.ts
  financas-br/
  energia-solar-br/
  agrofloresta-br/
  meliponicultura-br/
  saude-br/
scripts/
```

## Documentos-base do projeto

Os documentos abaixo são a fonte de verdade estrutural do projeto e devem acompanhar o código no próprio repositório:
- `PROJECT_SCOPE.md`
- `ARCHITECTURE.md`
- `SYSTEM_CONTRACTS.md`
- `DECISIONS.md`
- `ROADMAP.md`
- `SITE_CREATION.md`

Se a implementação alterar escopo, arquitetura, contratos, organização estrutural ou regras de publicação/operação, os documentos relevantes também devem ser atualizados.

## Stack fechada

- Next.js
- App Router
- TypeScript
- Tailwind CSS
- renderer central por blocos
- registry central explícito
- deploy inicial em Vercel

## Regras de trabalho da Fase 1

- não tratar nenhum site inicial como fundação principal;
- não introduzir CMS pesado;
- não expandir para automação ampla;
- não criar abstrações desnecessárias;
- manter fonte única de verdade para runtime, SEO, analytics e monetização;
- bloquear erros essenciais de contrato em vez de mascará-los.

## Operação mínima obrigatória

A Fase 1 precisa conter, além do código:
- configuração de ambiente para development, preview e production;
- resolução correta de `baseUrl`;
- variáveis necessárias para GA4 e ads;
- deploy funcional no Vercel;
- validação de URLs públicas;
- validação de sitemap, robots e metadata em produção.

## Estado das fases

- **Fase 1A** — Fundação técnica: ✅ concluída
- **Fase 1B** — Scaffold de criação de site: ✅ concluída
- **Fase 1C** — Regras de conteúdo e estilização: 🔄 em desenvolvimento

As instruções da Rotina 1 (criação de site) estão em `SITE_CREATION.md`.
As instruções da Rotina 2 (conteúdo e estilização) serão definidas em `CONTENT_GUIDE.md` (Fase 1C).
