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
- `https://aurapro-consulting.com/`
- `https://aurapro-consulting.com/financas`
- `https://aurapro-consulting.com/financas/investimentos`
- `https://aurapro-consulting.com/energia-solar`
- `https://aurapro-consulting.com/agrofloresta`
- `https://aurapro-consulting.com/meliponicultura`
- `https://aurapro-consulting.com/meliponicultura/legalizacao-meliponicultura`

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

## Proxima Sessao - Prioridades
1. Retomar Fase 1C: redigir `CONTENT_GUIDE.md` usando insumos consolidados
2. Implementar injecao de CSS variables expandidas no layout de site
3. Validar Rotina 2 aplicando CONTENT_GUIDE num site existente
4. Confirmar no Google AdSense (Sites) que `aurapro-consulting.com` esta apto para exibicao
5. Quando aprovado: substituir slotIds semanticos por IDs reais, virar `NEXT_PUBLIC_ADS_TEST_MODE` para `false`

## Instrucoes para novas sessoes
1. Ler este arquivo antes de iniciar alteracoes
2. Validar build local com `npm run validate`
3. Para redirects, usar painel do Vercel como fonte unica (nao versionar em codigo)
4. Atualizar este documento ao final do ciclo
