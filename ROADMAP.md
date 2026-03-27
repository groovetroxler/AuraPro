# ROADMAP

## Fase 1A — Fundação confiável e operação publicada

### Etapa 1 — Fundação do repositório ✅
- criar novo repositório/framework;
- estruturar `app/`, `core/`, `config/`, `sites/`, `registry`;
- formalizar contratos centrais.

### Etapa 2 — Runtime multi-site ✅
- implementar roteamento por prefixo;
- resolver site ativo via registry;
- conectar runtime às páginas declarativas.

### Etapa 3 — Renderer e blocos ✅
- implementar renderer central;
- implementar catálogo inicial de blocos;
- alinhar types e renderer.

### Etapa 4 — SEO técnico ✅
- metadata centralizada;
- canonical;
- sitemap derivado;
- robots;
- baseUrl resolvida por ambiente.

### Etapa 5 — Analytics ✅ (código pronto — validação em produção pendente)
- GA4 isolado por site;
- resolução pelo registry;
- sem hardcodes paralelos;
- pageview funcional em produção. ← pendente: requer deploy + IDs reais

### Etapa 6 — Monetização ✅ (código pronto — validação em produção pendente)
- contrato de ads;
- contrato de afiliados;
- slots declarativos;
- CTA preparado para `programId`;
- modo real ou modo de teste operacional para ads. ← pendente: requer deploy

### Etapa 7 — Sites iniciais ✅
Subir os três sites iniciais:

#### financas-br
- home
- financiamento
- investimentos

#### energia-solar-br
- home
- 2 páginas internas válidas

#### agrofloresta-br
- home
- 2 páginas internas válidas

### Etapa 8 — Configuração operacional ⏳ (próximo passo)
- configurar projeto no Vercel; ← requer token Vercel
- configurar variáveis de ambiente por ambiente;
- definir `baseUrl` de produção;
- conectar domínio principal ou domínio operacional inicial;
- validar build, preview e produção;
- garantir que registry, SEO, analytics e monetização usem configuração coerente de ambiente.

### Etapa 9 — Publicação ⏳
- publicar a base no Vercel;
- validar URLs públicas dos 3 sites;
- validar acessibilidade básica das páginas;
- validar que o sitemap e robots estão acessíveis em produção;
- validar metadata/canonical renderizadas em produção.

### Etapa 10 — Validação de fechamento da Fase 1A ⏳
- validar inclusão/exclusão limpa de sites;
- validar consistência de rota;
- validar GA4 recebendo dados por site;
- validar SEO técnico em produção;
- validar monetização estrutural e renderização operacional dos slots;
- validar que o framework está publicado, acessível e utilizável.

## Fase 1B — Scaffold mínimo

- criar comando/script de novo site;
- gerar pacote-base válido;
- registrar automaticamente no registry;
- aplicar defaults do framework.

## Fora da Fase 1

Não entra agora:
- automação completa de sites;
- integração com Notion;
- integração com planilha;
- CMS;
- geração massiva de páginas;
- eventos avançados de analytics;
- otimização avançada de monetização;
- refinamento visual avançado;
- modelos matemáticos reais.
