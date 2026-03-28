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

## Sites iniciais

Os três sites iniciais da Fase 1 são:
- `financas-br`
- `energia-solar-br`
- `agrofloresta-br`

Nenhum deles é o site principal. Todos são instâncias pares dentro do framework.

## Critério real de conclusão

A Fase 1 só fecha quando o sistema estiver:
- publicado no Vercel;
- acessível publicamente;
- com os 3 sites ativos por prefixo;
- com `baseUrl`, canonical, sitemap e robots válidos em produção;
- com pageview chegando no GA4 por site;
- com slots de anúncios renderizando em modo real ou modo de teste operacionalmente verificável.

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

## Próximo degrau após a Fase 1A

A Fase 1B implementa e valida o scaffold de criação automática de novos sites.
As instruções operacionais estão em `SITE_CREATION.md`.
