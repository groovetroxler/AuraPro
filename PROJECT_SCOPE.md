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

## Casos iniciais

Os 3 sites iniciais do framework são:
- `financas-br`
- `energia-solar-br`
- `agrofloresta-br`

Nenhum deles é “site principal”.
Todos são pacotes pares dentro do framework.

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

## Critério de sucesso da Fase 1

A Fase 1 só é considerada concluída quando existir um **framework funcional publicado em produção**, com:
- inclusão e exclusão de sites de forma limpa;
- 3 sites iniciais válidos e publicados;
- URLs acessíveis em produção;
- GA4 isolado corretamente por site e recebendo eventos/página vista;
- SEO técnico correto em produção;
- AdSense e afiliados encaixados no framework;
- exibição de anúncios em produção, em modo real ou modo de teste operacionalmente verificável, conforme disponibilidade de `publisherId` e aprovação da conta;
- possibilidade futura de geração automática sem refactor do core.

## Observação operacional crítica

Na Fase 1, publicação e operação não são detalhe posterior.
Elas fazem parte do próprio escopo de fechamento.
Framework não publicado, não acessível ou não monitorado não conclui a Fase 1.
