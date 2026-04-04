# CHECKLIST_FASE1

## Fechamento operacional da Fase 1A

Marcar a Fase 1A como concluída apenas quando todos os itens abaixo estiverem verdadeiros.

### Estrutura
- [x] `app/`, `core/`, `config/` e `sites/` existem e estão coerentes.
- [x] `sites/registry.ts` é a fonte única de verdade dos sites ativos.
- [x] não há `routePath` duplicado.
- [x] cada site possui home e ao menos páginas internas válidas.

### Runtime
- [x] o roteamento por prefixo resolve corretamente o site ativo.
- [x] site não registrado não entra no runtime.
- [x] erros essenciais de contrato bloqueiam build ou validação.

### SEO
- [x] `baseUrl` resolve corretamente por ambiente.
- [x] canonical está correta em produção.
- [x] sitemap está acessível em produção. ✅ verificado — 9 URLs dos 3 sites
- [x] robots está acessível em produção. ✅ verificado — usa baseUrl correta
- [x] metadata mínima está presente em todas as páginas exigidas.

### Analytics
- [x] GA4 está configurado por site sem hardcodes paralelos.
- [x] pageviews chegam no Analytics em produção. ✅ validado
- [x] a separação por site está operacionalmente verificável. ✅ validado

### Monetização
- [x] contrato de ads existe e está integrado ao framework.
- [x] contrato de afiliados existe e está integrado ao framework.
- [x] slots declarativos renderizam corretamente.
- [x] anúncios aparecem em modo de teste operacionalmente verificável.
- [ ] slotIds substituídos por IDs reais do AdSense (pendente: aprovação da conta).
- [ ] modo real ativado em produção (pendente: aprovação + slotIds reais).

### Publicação
- [x] projeto está publicado no Vercel.
- [x] ambiente de preview funciona.
- [x] ambiente de produção funciona.
- [x] as 3 rotas-base dos sites estão acessíveis publicamente.
- [x] as páginas internas mínimas dos 3 sites estão acessíveis publicamente.

### Critério final
- [x] o framework está funcional.
- [x] os 3 sites estão publicados.
- [x] as páginas estão acessíveis.
- [x] o Analytics está recebendo dados. ✅ validado
- [x] a exibição de anúncios está operacionalmente verificável.

Se qualquer item acima estiver falso, a Fase 1A não deve ser considerada concluída.

---

## Checklist da Fase 1B — Scaffold de criação de site ✅

- [x] Script `scripts/create-site.ts` existe e executa sem erro
- [x] Coleta inputs obrigatórios: siteKey, publicName, routePath, primaryColor
- [x] Valida que siteKey não existe no registry
- [x] Valida que routePath não existe no registry
- [x] Valida inputs não vazios e primaryColor hex válido
- [x] Gera `sites/<siteKey>/index.ts` com config válida e páginas placeholder
- [x] Atualiza `sites/registry.ts` com import e entrada no ALL_ENTRIES
- [x] Validação de contrato passa no registry completo após geração
- [x] Build passa sem erro após geração
- [x] Testado com criação de sites reais (`saude-br`, `apicultura-br`/`meliponicultura-br`)
- [x] Fluxo local-first validado: commit e push manuais pelo operador (decisão #57)

Nota: os itens originais "commit automático" e "push automático" foram substituídos pelo fluxo local-first, conforme decisão #57.

Se qualquer item acima estiver falso, a Fase 1B não deve ser considerada concluída.

---

## Checklist da Fase 1C — Regras de conteúdo e estilização

- [x] Contrato `SiteTheme` expandido com variáveis visuais opcionais
- [x] Sites existentes continuam válidos sem alteração (campos opcionais)
- [ ] Validator atualizado para os novos campos de tema
- [ ] CSS variables injection no layout de site atualizado para campos expandidos
- [ ] Documento `CONTENT_GUIDE.md` criado com:
  - [ ] Regras de uso de blocos por tipo de página/nicho
  - [ ] Instruções de SEO editorial
  - [ ] Instruções de estilização por site
  - [ ] Instruções de monetização (ads, afiliados, CTAs)
  - [ ] Checklist de qualidade por site
- [x] Experimentação prática realizada em `meliponicultura-br` (insumo consolidado em `VSCode_DevTestRef.md`)
- [ ] Regras formais validadas aplicando num dos sites iniciais
- [ ] Rotina 2 é executável seguindo apenas o CONTENT_GUIDE.md

Insumos disponíveis para redação do CONTENT_GUIDE.md:
- `VSCode_DevTestRef.md` — preferências consolidadas da experimentação
- Templates SEO carregados (metadados, estrutura de páginas, checklist operacional, template editorial)
- Site `meliponicultura-br` como referência de implementação editorial

Se qualquer item acima estiver falso, a Fase 1C não deve ser considerada concluída.

---

## Histórico de progresso

### Sessão 1 — 2026-03-27
- Estrutura-base, contratos, validador, registry, renderer, 12 blocos
- SEO, GA4, AdSense, 3 sites com conteúdo
- Build limpo: 15 páginas, zero erros

### Sessão 2 — 2026-03-27
- Diagnóstico + 9 correções de qualidade
- Deploy no Vercel realizado
- 12 URLs públicas validadas
- Env vars configuradas (NEXT_PUBLIC_BASE_URL, NEXT_PUBLIC_ADS_TEST_MODE)
- Títulos SEO corretos em produção
- Ads em modo teste verificável em produção

### Sessão 3 — 2026-03-27
- Diagnóstico completo pré-Fase 2: documentação, código, build, TypeScript, ESLint
- 8 problemas identificados, todos corrigidos
- Decisões 34-38 registradas

### Sessão 4 — 2026-03-28
- Análise de relatório diagnóstico externo
- Correção baseUrl no root layout (fonte única via getBaseUrl)
- Correção hardcode cor no DetailsBlock
- Scripts typecheck e validate adicionados
- Catálogo de blocos expandido de 12 para 25 tipos
- Bloco affiliateCard para monetização de afiliados
- Diagnóstico completo de coerência documentação ↔ código
- Decisões 39-44 registradas

### Sessão 5 — 2026-03-28
- Discussão estrutural: distinção entre fase (desenvolvimento) e rotina (execução)
- Fase 1C criada: regras e instruções de conteúdo e estilização
- Roadmap reestruturado com disciplina fase/rotina
- Fases futuras reorganizadas (Fase 2: OG images + domínios; Fase 3: automação)
- Melhorias contínuas definidas como categoria separada
- Decisões 45-50 registradas
- Documentação atualizada: ROADMAP, PROJECT_SCOPE, ARCHITECTURE, DECISIONS, CHECKLIST

### Sessão 6 — 2026-03-28 (Claude + VSCode/Codex)
- Fase 1B implementada: scaffold `scripts/create-site.ts`
- `saude-br` criado via scaffold
- `apicultura-br` criado via scaffold
- Decisões 51-52 registradas

### Sessões 7-9 — 2026-03-28 a 2026-03-30 (VSCode/Codex)
- SiteTheme expandido com campos opcionais (Fase 1C parcial)
- `apicultura-br` refinado editorialmente → renomeado para `meliponicultura-br`
- Redirect 301 `/apicultura` → `/meliponicultura`
- Root institucional bilíngue (EN/PT) com GA4 próprio
- Domínio canônico fixado: `aurapro-consulting.com`
- Governança de redirects migrada para Vercel
- `VSCode_DevTestRef.md` criado como registro da experimentação
- Validações de AdSense em produção
- Decisões 53-61 registradas retroativamente

### Sessão 10 — 2026-04-04 (Claude)
- Diagnóstico completo: git, código, documentação, arquivos de experimentação
- Atualização de todos os documentos-base para refletir estado real
- Preparação para retomada da Fase 1C

### Pendente
- **Fase 1C:** `CONTENT_GUIDE.md` + injeção de CSS variables expandidas + validação da Rotina 2
- AdSense: aguardando aprovação do Google (script já carregando)
- Quando aprovado: criar unidades de anúncio no painel, substituir slotIds placeholder por IDs reais, mudar NEXT_PUBLIC_ADS_TEST_MODE para false no Vercel
- OG images por site (Fase 2A)
- Correção de `<html lang>` para root bilíngue (melhoria contínua)
- Inclusão de `/pt` no sitemap (melhoria contínua)
