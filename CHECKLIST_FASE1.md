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
- [ ] sitemap está acessível em produção. ← verificar manualmente
- [ ] robots está acessível em produção. ← verificar manualmente
- [x] metadata mínima está presente em todas as páginas exigidas.

### Analytics
- [x] GA4 está configurado por site sem hardcodes paralelos.
- [ ] pageviews chegam no Analytics em produção. ← requer IDs reais
- [ ] a separação por site está operacionalmente verificável. ← requer IDs reais

### Monetização
- [x] contrato de ads existe e está integrado ao framework.
- [x] contrato de afiliados existe e está integrado ao framework.
- [x] slots declarativos renderizam corretamente.
- [x] anúncios aparecem em modo de teste operacionalmente verificável.

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
- [ ] o Analytics está recebendo dados. ← requer IDs reais
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

### Pendente
- Confirmar sitemap.xml e robots.txt em produção
- GA4: IDs reais para os 3 sites
- AdSense: publisherId quando conta aprovada
- OG images por site
