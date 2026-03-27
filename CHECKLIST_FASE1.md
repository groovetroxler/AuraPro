# CHECKLIST_FASE1

## Fechamento operacional da Fase 1A

Marcar a Fase 1A como concluída apenas quando todos os itens abaixo estiverem verdadeiros.

### Estrutura
- [ ] `app/`, `core/`, `config/` e `sites/` existem e estão coerentes.
- [ ] `sites/registry.ts` é a fonte única de verdade dos sites ativos.
- [ ] não há `routePath` duplicado.
- [ ] cada site possui home e ao menos páginas internas válidas.

### Runtime
- [ ] o roteamento por prefixo resolve corretamente o site ativo.
- [ ] site não registrado não entra no runtime.
- [ ] erros essenciais de contrato bloqueiam build ou validação.

### SEO
- [ ] `baseUrl` resolve corretamente por ambiente.
- [ ] canonical está correta em produção.
- [ ] sitemap está acessível em produção.
- [ ] robots está acessível em produção.
- [ ] metadata mínima está presente em todas as páginas exigidas.

### Analytics
- [ ] GA4 está configurado por site sem hardcodes paralelos.
- [ ] pageviews chegam no Analytics em produção.
- [ ] a separação por site está operacionalmente verificável.

### Monetização
- [ ] contrato de ads existe e está integrado ao framework.
- [ ] contrato de afiliados existe e está integrado ao framework.
- [ ] slots declarativos renderizam corretamente.
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
