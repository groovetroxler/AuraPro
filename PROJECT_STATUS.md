# PROJECT_STATUS

Documento operacional persistente do projeto.
Registra estado de integracoes, configuracoes de ambiente e contexto entre sessoes.
Atualizado pelo assistente ao final de cada ciclo relevante.

## Credenciais e Integracoes

### Repositorio Git
- **URL:** https://github.com/groovetroxler/AuraPro
- **Status:** operacional

### Vercel
- **Org ID:** team_ILWAbOykNwdFS6J4RJY82lJv
- **Project ID:** prj_Es65QbtrnifMtH9M86KFJAsGl7ZQ
- **Dominio canonico:** https://aurapro-consulting.com
- **Dominio legado (redirect 301):** https://aura-pro-eosin.vercel.app
- **Status:** deploy ativo, auto-deploy via GitHub
- **Governanca de redirects:** 100% no painel do Vercel (sem redirects versionados no repo)
- **Guardrail de runtime:** em producao, `config/env.ts` usa fallback canonico `https://aurapro-consulting.com` quando `NEXT_PUBLIC_BASE_URL` nao estiver definida

### Google Analytics (GA4)
- **financas-br:** G-DMJ9QJZ7ZW
- **energia-solar-br:** G-LL5VYXQWV9
- **agrofloresta-br:** G-C06N4NTLKR
- **meliponicultura-br:** G-G04VC9SZ3Z
- **Status:** IDs configurados por site

### Google AdSense
- **Publisher ID:** ca-pub-7072076910984234
- **ads.txt:** publicado em `/ads.txt`
- **Script:** carregando via `AdSenseScript` por site quando publisherId e valido
- **Modo atual:** teste visual (`NEXT_PUBLIC_ADS_TEST_MODE=true`)
- **Checagem 2026-03-30:** `https://aurapro-consulting.com/ads.txt` retornando `200` com linha correta; `https://aurapro-consulting.com/financas` contem `client=ca-pub-7072076910984234`
- **Pendente externo:** confirmar no painel AdSense (Sites) que `aurapro-consulting.com` esta apto para exibicao + substituicao futura de slotIds semanticos por IDs numericos reais

### Google Search Console
- **Propriedade alvo:** https://aurapro-consulting.com
- **Sitemap:** `/sitemap.xml`
- **Status:** ativo

## Variaveis de Ambiente no Vercel

| Variavel | Valor esperado em producao |
|---|---|
| `NEXT_PUBLIC_BASE_URL` | `https://aurapro-consulting.com` |
| `NEXT_PUBLIC_ADS_TEST_MODE` | `true` (trocar para `false` quando AdSense estiver aprovado) |

Observacao:
- IDs de GA4 e Publisher ID do AdSense permanecem hardcoded no config de cada site, por decisao arquitetural do projeto.

## Validacao de Producao

### URLs publicas validas
- `https://aurapro-consulting.com/` (root institucional)
- `https://aurapro-consulting.com/pt` (root PT-BR)
- 4 sites ativos com 10 paginas cada (40 URLs totais):
  - `https://aurapro-consulting.com/financas` + 9 subpaginas
  - `https://aurapro-consulting.com/energia-solar` + 9 subpaginas
  - `https://aurapro-consulting.com/agrofloresta` + 9 subpaginas
  - `https://aurapro-consulting.com/meliponicultura` + 9 subpaginas
- 1 site draft: `https://aurapro-consulting.com/saude` (3 paginas placeholder)

### SEO tecnico
- `https://aurapro-consulting.com/robots.txt` acessivel
- `https://aurapro-consulting.com/sitemap.xml` acessivel
- Canonicals, `og:url` e JSON-LD devem usar dominio canonico `aurapro-consulting.com`

### Redirects
- Dominio legado redireciona para dominio canonico com `301`
- Path e query devem ser preservados no redirect
- Redirect legado de rota `/apicultura` deve ser mantido no Vercel para `/meliponicultura`

## Historico de Sessoes

### Sessao 1 - 2026-03-27
- Estrutura base do framework criada e validada

### Sessao 2 - 2026-03-27
- Diagnostico e correcoes iniciais
- Primeiro deploy no Vercel

### Sessao 3 - 2026-03-27
- Diagnostico pre-Fase 2 e correcoes de coerencia tecnica

### Sessao 4 - 2026-03-28
- Expansao de blocos para 25 tipos
- Hardening de contratos, validacao e documentacao

### Sessao 5 - 2026-03-28
- Formalizacao de fase vs rotina
- Planejamento da Fase 1C

### Sessao 6 - 2026-03-29
- Refinamento da root institucional
- Governanca de navegacao entre root e verticais

### Sessao 7 - 2026-03-30
- Diagnostico completo pos-mudancas recentes
- Identificado drift de dominio canonicamente (old host em canonical/og/sitemap)
- Plano definido para alinhar dominio canonico novo

### Sessao 8 - 2026-03-30
- Implementado: redirects removidos do repo (fonte unica no Vercel)
- Implementado: documentacao operacional atualizada para dominio canonico novo
- Validado: checks locais de codigo e endpoints publicos criticos

### Sessao 9 - 2026-03-30
- Validado: dominio canonico em `config/env.ts` mantido como `https://aurapro-consulting.com`
- Validado: `public/ads.txt` e publisher IDs dos sites/scaffold alinhados em `ca-pub-7072076910984234`
- Validado: `npm run validate` sem erros bloqueantes
- Validado em producao: `ads.txt` com `200` e script AdSense com client correto em pagina ativa
- Pendente externo: confirmacao final do status do site em Google AdSense > Sites

### Sessao 10 - 2026-04-04 (Claude)
- Diagnostico completo: git history, codigo, documentacao, arquivos de experimentacao do Codex
- Atualizado: README, PROJECT_SCOPE, ARCHITECTURE, DECISIONS (#53-61), CHECKLIST_FASE1, SITE_CREATION, ROADMAP, PROJECT_STATUS
- Fase 1B marcada como concluida; Fase 1C parcialmente avancada (contrato expandido, experimentacao feita)
- Drift documental corrigido: estado real do registry, fluxo local-first, root institucional documentada
- Preparacao para retomada da Fase 1C (CONTENT_GUIDE.md)

### Sessao 11 - 2026-04-04 (Claude)
- CONTENT_GUIDE.md formalizado (11 secoes, 550+ linhas, 10 etapas de trabalho)
- Novas etapas: 1B (checagem de contexto real), 2 (mapeamento de players)
- 4 sites reescritos com conteudo editorial completo:
  - energia-solar-br: 10 paginas, ~21.000 palavras, 1303 linhas
  - agrofloresta-br: 10 paginas, ~20.000 palavras, 1204 linhas
  - financas-br: 10 paginas, ~18.000 palavras, 891 linhas
  - meliponicultura-br: 10 paginas, ~22.000 palavras, 878 linhas
- Total: 40 paginas, ~81.000 palavras de conteudo editorial
- 9 imagens contextuais distribuidas
- Decisoes 62-67 registradas
- Fase 1C concluida — Fase 1 inteira concluida
- Documentacao atualizada: DECISIONS, CHECKLIST_FASE1, ROADMAP, PROJECT_STATUS

## Estado atual dos sites

| Site | Status | Paginas | Palavras | GA4 |
|------|--------|---------|----------|-----|
| financas-br | active | 10 | ~18.000 | G-DMJ9QJZ7ZW |
| energia-solar-br | active | 10 | ~21.000 | G-LL5VYXQWV9 |
| agrofloresta-br | active | 10 | ~20.000 | G-C06N4NTLKR |
| meliponicultura-br | active | 10 | ~22.000 | G-G04VC9SZ3Z |
| saude-br | draft | 3 (placeholder) | ~500 | — |

## Proxima Sessao - Prioridades
1. **Fase 2A:** sistema de geracao de OG images por site/pagina
2. **Fase 2B:** suporte a dominios proprios por site
3. **Novo site:** executar ciclo completo Rotina 1 → Rotina 2 para validar reprodutibilidade
4. **saude-br:** decidir se desenvolve com conteudo editorial ou remove do registry
5. Confirmar no Google AdSense (Sites) que `aurapro-consulting.com` esta apto para exibicao
6. Quando AdSense aprovado: substituir slotIds semanticos por IDs reais, virar `NEXT_PUBLIC_ADS_TEST_MODE` para `false`
7. CSS variables expandidas no layout (melhoria continua)

## Instrucoes para novas sessoes
1. Ler este arquivo antes de iniciar alteracoes
2. Validar build local com `npm run validate`
3. Para redirects, usar painel do Vercel como fonte unica (nao versionar em codigo)
4. Atualizar este documento ao final do ciclo
