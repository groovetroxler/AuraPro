# ARCHITECTURE

## Stack fechada da base

A stack estrutural do projeto está definida como:

- Next.js
- App Router
- TypeScript
- Tailwind CSS
- arquitetura code-first
- conteúdo orientado por schema
- páginas compostas por blocos modulares
- configuração por site
- registry central explícito
- deploy inicial em Vercel

## Direção arquitetural

O sistema deve ser organizado em 5 camadas:

1. `app/`
   - runtime de entrega;
   - roteamento;
   - layout global;
   - sitemap;
   - robots.

2. `core/`
   - renderer;
   - blocos;
   - analytics;
   - SEO;
   - monetização;
   - helpers;
   - tipos compartilhados.

3. `sites/`
   - pacotes de site;
   - config por site;
   - páginas por site;
   - conteúdo específico;
   - registry central.

4. `config/`
   - resolução de ambiente;
   - baseUrl;
   - integrações externas;
   - validações de variáveis obrigatórias.

5. `scripts/`
   - scaffold de criação de novos sites (ver `SITE_CREATION.md`);
   - automações operacionais mínimas.

## Estrutura-base esperada

```text
app/
core/
config/
sites/
  registry.ts
  financas-br/
  energia-solar-br/
  agrofloresta-br/
scripts/   # scaffold de novo site (ver SITE_CREATION.md)
```

## Registry

O `registry` é:
- explícito;
- central;
- obrigatório;
- fonte única operacional.

Ele deve governar:
- sites ativos;
- `routePath`;
- config;
- pages package;
- analytics;
- monetização;
- SEO derivado.

Regra:
**site não registrado não existe para o runtime**.

## Domínio e roteamento

Na Fase 1:
- um único projeto publicado no Vercel;
- um único domínio base por ambiente;
- um prefixo por site.

Exemplo:
- `/financas/...`
- `/energia-solar/...`
- `/agrofloresta/...`

O site ativo é resolvido a partir do `routePath` registrado.

## Publicação e operação

A arquitetura da Fase 1 deve suportar explicitamente:
- deploy contínuo no Vercel;
- resolução correta de `baseUrl` por ambiente;
- configuração de variáveis de ambiente para development, preview e production;
- Analytics e monetização sem hardcodes paralelos fora do registry e da camada de config;
- validação de ambiente para impedir publicação quebrada por ausência de chaves essenciais.

## Contratos arquiteturais

A base deve ser regida por contratos formais para:
- site;
- página;
- bloco;
- analytics config;
- ads config;
- affiliate config;
- runtime env.

O núcleo do contrato é rígido.
As bordas são extensíveis.

## Política de automação

A automação futura deve ser suportada, mas não dominar a Fase 1.

A Fase 1A prepara:
- contratos;
- defaults;
- runtime;
- governança;
- publicação operacional mínima.

A Fase 1B cria:
- scaffold de criação de novos sites (ver `SITE_CREATION.md`).

A Fase 1C cria:
- expansão do contrato de tema (`SiteTheme`) com variáveis visuais opcionais;
- regras e instruções de conteúdo e estilização (ver `CONTENT_GUIDE.md`).

Estilização visual é responsabilidade do pacote de cada site, não do core.
O core entrega blocos funcionais e neutros. A personalização visual é controlada pelas variáveis de tema definidas no contrato.

Integrações com Notion/planilha:
- não entram no núcleo da Fase 1;
- ficam previstas apenas como expansão futura.
