# PROJECT_SCOPE

## Natureza do projeto

Este projeto é um **framework neutro multi-site** para construção, publicação e operação de sites monetizáveis orientados a:
- conteúdo;
- SEO;
- analytics;
- anúncios;
- afiliados;
- futura automação de geração de sites e páginas.

Ele **não** deve ser tratado como evolução de um site específico.

O produto principal é o **framework**.
Os sites são **instâncias** do framework.

## Objetivo central

Criar uma base técnica estável, limpa, replicável, publicável e operacional para múltiplos sites, minimizando:
- acoplamento indevido;
- remendos históricos;
- duplicação de configuração;
- drift entre intenção arquitetural, documentação, implementação e operação publicada.

## Casos iniciais e estado atual

Os 3 sites iniciais do framework (Fase 1A):
- `financas-br`
- `energia-solar-br`
- `agrofloresta-br`

Sites criados posteriormente via scaffold (Fase 1B):
- `meliponicultura-br` (active — refinado editorialmente)
- `saude-br` (draft — aguarda Rotina 2)

Nenhum site é “site principal”.
Todos são pacotes pares dentro do framework.

A rota raiz (`/` e `/pt`) opera como página institucional bilíngue, separada do registry de sites.

## Princípios obrigatórios

1. Simplicidade estrutural.
2. Mínimo funcional antes de refinamento.
3. Evolução iterativa por fases.
4. Separação clara entre:
   - core;
   - sites;
   - conteúdo;
   - configuração;
   - SEO;
   - analytics;
   - monetização;
   - operação/deploy.
5. Fonte única de verdade sempre que possível.
6. Preparação para futura automação, sem antecipar complexidade operacional além do necessário para publicar e operar a Fase 1.

## O que o projeto não é

- Não é um site financeiro com adaptações.
- Não é um CMS pesado.
- Não é um gerador massivo de páginas já na Fase 1.
- Não é uma arquitetura enterprise prematura.
- Não é um ambiente para experimentação solta de IA sem contrato.

## Fase 1

A Fase 1 é dividida em:

### Fase 1A
Fundação confiável e operação inicial real do framework:
- core multi-site;
- registry central;
- contratos fortes;
- runtime funcional;
- SEO técnico;
- GA4 correto por site;
- monetização estrutural e operacional mínima;
- deploy funcional;
- domínio/base URL coerente;
- variáveis de ambiente configuradas;
- 3 sites iniciais publicados e acessíveis.

### Fase 1B
Scaffold de criação automática de novos sites com publicação via auto-deploy.
Instruções operacionais detalhadas em `SITE_CREATION.md`.
Produz a **Rotina 1** (criar site novo).

### Fase 1C
Regras e instruções de conteúdo e estilização de sites.
Inclui expansão do contrato de tema (`SiteTheme`) com variáveis visuais opcionais.
Instruções operacionais em `CONTENT_GUIDE.md`.
Produz a **Rotina 2** (conteúdo e estilização de site).

## Critério de sucesso da Fase 1

A Fase 1 só é considerada concluída quando:
- o framework estiver funcional e publicado em produção;
- a Rotina 1 (scaffold de criação de site) existir e funcionar;
- a Rotina 2 (conteúdo e estilização) existir e funcionar;
- o ciclo completo Rotina 1 → Rotina 2 → push → site real no ar for reproduzível;
- GA4 isolado corretamente por site e recebendo eventos/página vista;
- SEO técnico correto em produção;
- AdSense e afiliados encaixados no framework;
- exibição de anúncios em produção, em modo real ou modo de teste operacionalmente verificável;
- possibilidade futura de geração automática sem refactor do core.

## Observação operacional crítica

Na Fase 1, publicação e operação não são detalhe posterior.
Elas fazem parte do próprio escopo de fechamento.
Framework não publicado, não acessível ou não monitorado não conclui a Fase 1.
