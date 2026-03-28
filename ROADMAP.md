# ROADMAP

## Conceitos-chave

| Conceito | Definição | Frequência |
|----------|-----------|------------|
| **Fase** | Desenvolvimento de regras, ferramentas e instruções | Feita uma vez |
| **Rotina** | Execução do que uma fase produziu | Executada N vezes |
| **Melhoria contínua** | Ajustes pontuais no framework | Feita quando necessário |

Fases e rotinas são conceitos distintos. O roadmap registra fases de desenvolvimento. As rotinas são documentadas em seus respectivos guias operacionais.

---

## Fase 1 — Construção do sistema de produção

Objetivo: ao final da Fase 1, existem todas as ferramentas e instruções para criar um site real do zero, de ponta a ponta, sem improvisar.

### Fase 1A — Fundação técnica ✅

Desenvolveu: framework multi-site, contratos centrais, catálogo de 25 blocos, runtime por prefixo de rota, SEO técnico, GA4 isolado por site, monetização estrutural (AdSense + afiliados), configuração operacional, publicação em Vercel.

Entregou: 3 sites iniciais publicados com placeholders (financas-br, energia-solar-br, agrofloresta-br), 12 URLs públicas validadas, analytics recebendo dados, ads em modo teste operacional.

Não produz rotina diretamente — é a fundação sobre a qual as rotinas operam.

### Fase 1B — Regras e ferramenta de criação de site (scaffold)

Desenvolve:
- Script `scripts/create-site.ts`
- Regras operacionais em `SITE_CREATION.md`
- Validações de segurança (siteKey/routePath únicos, inputs válidos)
- Atualização automática do registry
- Commit + push automático (publicação via auto-deploy)

Produz → **Rotina 1: Criar site novo**

Critério de conclusão: é possível executar o comando e obter um site novo que passa na validação de contrato, aparece no registry, faz build sem erro, é publicado automaticamente via auto-deploy, e fica acessível na URL pública.

### Fase 1C — Regras e instruções de conteúdo e estilização

Desenvolve:
- Expansão do contrato de tema (SiteTheme) com variáveis visuais opcionais (campos opcionais — não quebra sites existentes)
- Atualização do validator e da injeção de CSS variables
- Documento `CONTENT_GUIDE.md` com:
  - Regras de uso de blocos por tipo de página/nicho
  - Instruções de SEO editorial (titles, descriptions, headings)
  - Instruções de estilização por site (variáveis de tema)
  - Instruções de monetização (posicionamento de ads, configuração de afiliados, CTAs)
  - Checklist de qualidade por site
- Validação aplicando as regras num dos sites iniciais

Produz → **Rotina 2: Conteúdo e estilização de site**

Critério de conclusão: é possível pegar o output da Rotina 1 e, seguindo apenas o `CONTENT_GUIDE.md`, transformá-lo num site com conteúdo real publicável — sem improvisar, sem depender de conhecimento implícito.

### Critério de conclusão da Fase 1

A Fase 1 está completa quando:
- A Rotina 1 (scaffold) existe e funciona
- A Rotina 2 (conteúdo e estilização) existe e funciona
- As duas rotinas estão documentadas e foram validadas
- O ciclo completo Rotina 1 → Rotina 2 → push → site real no ar é reproduzível

---

## Rotinas de operação

Rotinas são processos executados repetidamente. Cada rotina tem seu guia operacional.

| Rotina | Origem | Guia | Quando executar |
|--------|--------|------|-----------------|
| **Rotina 1:** Criar site | Fase 1B | `SITE_CREATION.md` | Cada site novo |
| **Rotina 2:** Conteúdo e estilização | Fase 1C | `CONTENT_GUIDE.md` | Cada site novo, após Rotina 1 |
| **Rotina 3:** OG images | Fase 2A | (a definir) | Cada site novo, após Rotina 2 |
| **Rotina 4:** Domínio próprio | Fase 2B | (a definir) | Quando um site justificar domínio dedicado |

Ciclo de produção de um site novo: **Rotina 1 → Rotina 2 → (Rotina 3) → push → site real no ar.**

---

## Fase 2 — Capacidades adicionais de produção

Cada subfase desenvolve uma capacidade nova e pode produzir uma rotina.

### Fase 2A — Sistema de geração de OG images

Desenvolve: script ou sistema para gerar OG images por site e por página.

Produz → **Rotina 3: Gerar OG images**

### Fase 2B — Suporte a domínios próprios

Desenvolve: adaptação do framework para suportar domínios dedicados por site (além do modelo de prefixo de rota).

Produz → **Rotina 4: Configurar domínio por site**

---

## Fase 3 — Automação e escala

Objetivo: reduzir trabalho manual e aumentar volume de produção.

- Geração massiva de páginas (clusters SEO)
- Integração com Notion/planilha como fonte de conteúdo
- Pipeline automatizado: briefing → Rotina 1 → Rotina 2 → deploy
- Modelos matemáticos reais (calculadoras, simuladores)
- CMS leve se necessário

Pode produzir rotinas automatizadas que substituem ou aceleram as rotinas manuais.

---

## Melhorias contínuas

Não são fases nem rotinas. São ajustes feitos quando necessário:

- Implementar eventos de analytics nos blocos (clique em CTA, affiliate card)
- Corrigir bugs e ajustar contratos
- Expandir catálogo de blocos
- Ajustes de responsividade ou acessibilidade no core
- Ativação de AdSense em modo real (quando aprovado pelo Google)
