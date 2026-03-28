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

### Pendente
- AdSense: aguardando aprovação do Google (script já carregando)
- Quando aprovado: criar unidades de anúncio no painel, substituir slotIds placeholder por IDs reais, mudar NEXT_PUBLIC_ADS_TEST_MODE para false no Vercel
- OG images por site (9 warnings pendentes)
- Implementar Fase 1B — scaffold de criação de novo site
