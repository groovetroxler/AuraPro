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
- [ ] sitemap está acessível em produção.
- [ ] robots está acessível em produção.
- [x] metadata mínima está presente em todas as páginas exigidas.

### Analytics
- [x] GA4 está configurado por site sem hardcodes paralelos.
- [ ] pageviews chegam no Analytics em produção.
- [ ] a separação por site está operacionalmente verificável.

### Monetização
- [x] contrato de ads existe e está integrado ao framework.
- [x] contrato de afiliados existe e está integrado ao framework.
- [x] slots declarativos renderizam corretamente.
- [ ] anúncios aparecem em modo real ou em modo de teste operacionalmente verificável.

### Publicação
- [ ] projeto está publicado no Vercel.
- [ ] ambiente de preview funciona.
- [ ] ambiente de produção funciona.
- [ ] as 3 rotas-base dos sites estão acessíveis publicamente.
- [ ] as páginas internas mínimas dos 3 sites estão acessíveis publicamente.

### Critério final
- [ ] o framework está funcional.
- [ ] os 3 sites estão publicados.
- [ ] as páginas estão acessíveis.
- [ ] o Analytics está recebendo dados.
- [ ] a exibição de anúncios está operacionalmente verificável.

Se qualquer item acima estiver falso, a Fase 1A não deve ser considerada concluída.

---

## Histórico de progresso

### Sessão 1 — 2026-03-27
- Estrutura-base criada: app/, core/, config/, sites/
- Contratos centrais implementados (contracts.ts + contract-validator.ts)
- Registry central com validação na inicialização
- 12 blocos implementados
- Renderer central com exhaustive check
- SEO: metadata, canonical, JSON-LD (Article + WebSite), sitemap, robots
- GA4: componente isolado por site, derivado do registry, validação de formato
- AdSense: script condicional, slots com pré-reserva de espaço (anti-CLS)
- 3 sites iniciais com home + 2 páginas internas cada
- Config de ambiente com resolução por modo (dev/preview/prod)
- Build limpo: 15 páginas estáticas, zero erros TypeScript

### Sessão 2 — 2026-03-27
- Diagnóstico completo: 9 problemas identificados
- Correção: HTML inválido (tags duplicadas no site layout)
- Correção: metadataBase configurada no root layout
- Correção: @tailwindcss/typography instalado
- Correção: cores hardcoded substituídas por var(--color-primary) em 5 blocos
- Correção: dark mode removido do globals.css
- Correção: defaultOgImage para arquivos inexistentes removido
- Correção: typo agroflorestaaBrSite → agroflorestaBrSite
- Correção: dead code validateLinks removido
- Correção: resolveBaseUrl simplificado
- Build limpo pós-correções: 15 páginas, zero erros

### Pendente para próximas sessões
- Deploy no Vercel (requer token)
- Configuração de variáveis de ambiente no Vercel
- Validação de URLs públicas, sitemap, robots em produção
- GA4: IDs reais + validação de pageviews
- AdSense: publisherId real ou validação de modo teste em produção
- OG images por site (quando disponíveis)
