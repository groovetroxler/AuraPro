# CONTENT_GUIDE — Instruções da Rotina 2

> **Status:** em desenvolvimento (Fase 1C)
> Após validação, torna-se instrução operacional permanente da Rotina 2.

## Propósito

Este documento define como transformar um site criado pela Rotina 1 (scaffold) em um site com conteúdo real, publicável e monetizável — sem improvisar, sem depender de conhecimento implícito.

## Pré-requisitos

- Site criado e registrado via Rotina 1 (`SITE_CREATION.md`)
- Build passando sem erros
- Definição do nicho/tema do site

---

## 1. Arquitetura de conteúdo

Todo site tem duas camadas de conteúdo:

### Camada 1 — Guia (estrutura permanente)

- **Home:** guia introdutório que apresenta o tema e aponta para aprofundamentos
- **Páginas internas:** 5-8 páginas profundas (~3000 palavras cada), cobrindo os subtemas centrais
- É o esqueleto do site; muda pouco depois de pronto

### Camada 2 — Editoriais (conteúdo vivo)

- Artigos mais curtos (~800-1500 palavras)
- Mistura de conteúdo atemporal e datado
- Aparecem em todas as páginas do site via bloco com data e título ("Leituras complementares")
- Alguns nascem na Rotina 2, outros são adicionados ao longo do tempo
- Funcionam como leitura complementar do guia, não como conteúdo solto

### Relação entre as camadas

O guia organiza. Os editoriais enriquecem.
Nenhum editorial deve existir sem conexão com alguma página do guia.
Nenhuma página do guia deve parecer incompleta sem os editoriais.

---

## 2. Ordem de trabalho da Rotina 2

### Etapa 1 — Pesquisa de referência

Antes de escrever qualquer coisa:

1. Pesquisar 3-5 sites institucionais ou editoriais de referência sobre o nicho
2. Priorizar: sites de autoridade no tema, guias práticos, publicações especializadas
3. Evitar: agregadores de SEO genérico, conteúdo raso, portais de notícias
4. Usar essas referências para calibrar: profundidade, tom, vocabulário técnico, nível do leitor
5. Não pedir aprovação prévia das referências — usar direto, o operador corrige se necessário

**Critérios para selecionar referências:**
- O site é reconhecido no nicho? (instituição, associação, especialista)
- O conteúdo tem profundidade real? (dados, exemplos, detalhes técnicos)
- O tom é informativo sem ser acadêmico?
- O site tem boa estrutura de navegação e conteúdo?

### Etapa 2 — Estrutura completa

Definir antes de escrever qualquer conteúdo:

1. Mapa de páginas do guia (5-8 páginas)
2. Para cada página: slug, título (H1), intenção principal, subtemas
3. Mapa de editoriais iniciais (2-4 artigos complementares)
4. Arquitetura de links internos: qual página aponta para qual
5. Apresentar o mapa completo para aprovação

### Etapa 3 — Metadados

Para cada página definida:

- **Title SEO:** 50-65 caracteres, keyword principal + intenção clara
- **Meta description:** 120-160 caracteres, linguagem direta, 2-4 elementos concretos
- **Slug:** curto, direto, sem palavras desnecessárias
- **Keywords secundárias:** variações naturais da busca principal

Regra: metadado bom descreve exatamente o conteúdo, corresponde à busca real e gera clique sem ser enganoso.

### Etapa 4 — Home

Escrever a home como validação de tom. Estrutura:

1. Hero com título forte
2. Resposta imediata (2-4 linhas: o que é, para quem, o que a página entrega)
3. Guia introdutório: visão geral do tema com transições para cada subtema
4. Apontar para as páginas internas com contexto (não apenas links soltos)
5. Seção de editoriais recentes (bloco com data e título)
6. Navegação final

**Submeter a home para aprovação antes de avançar.** Se o tom estiver bom, as internas seguem sem parar.

### Etapa 5 — Páginas internas

Após aprovação da home, escrever cada página interna em sequência:

1. Breadcrumb
2. H1 claro e específico
3. Resposta imediata (2-4 linhas, sem introdução)
4. Corpo principal (~3000 palavras) dividido por H2
5. Apoio visual pontual (tabelas, callouts, listas) quando fizer sentido
6. Monetização contextual onde couber
7. Bloco de editoriais relacionados
8. Bloco final de navegação consistente (links para todas as outras páginas do guia)

### Etapa 6 — Editoriais iniciais

Criar 2-4 artigos complementares (800-1500 palavras):

1. Cada editorial deve complementar uma página do guia
2. Formato mais leve: título, data, corpo curto, conclusão prática
3. Usar tipo de página `article` no sistema
4. Incluir links de volta para a página do guia correspondente

### Etapa 7 — Estilização

Aplicar tema visual do site usando campos do `SiteTheme`:

- `primaryColor` — cor principal
- `accentColor` — cor de destaque (links, botões, destaques)
- `surfaceColor` — cor de fundo de cards/blocos
- `textColor` — cor principal do texto
- `radius` — arredondamento de bordas
- `fontFamilyHeading` — fonte dos títulos

A estilização é local ao site. Não alterar globals.css nem componentes do core.

### Etapa 8 — Validação final

Aplicar o checklist de qualidade (seção 8 deste documento) em todas as páginas antes de publicar.

---

## 3. Regras de escrita

### Tom

O texto deve soar como **um amigo que entende do assunto e está te orientando** — direto, confiável, sem formalidade excessiva nem floreio.

### O que dá credibilidade

- Dados concretos: números, nomes, exemplos reais
- Opinião clara: "faça isso", "evite aquilo"
- Detalhes específicos que só quem conhece o assunto sabe
- Sequências lógicas e passos práticos

### Anti-padrões obrigatórios (bloquear sempre)

1. **Frases bonitas que não dizem nada prático.** Se a frase não ajuda a entender ou decidir, cortar.
2. **Introduções longas antes de chegar no ponto.** A página começa com resposta, não com contexto.
3. **Repetição da mesma ideia com palavras diferentes.** Dizer uma vez, bem dito.
4. **Frases atmosféricas sem utilidade.** Nada de "o mundo fascinante de..." sem resolver uma dúvida concreta logo em seguida.
5. **Seções meta sobre o próprio site.** Nada de "Como este guia foi pensado" ou "Nosso compromisso com a qualidade".
6. **Cabeçalhos decorativos.** Cada H2 deve fazer sentido sozinho como busca real no Google.

### Regra prática

Se o texto levanta uma dúvida implícita, deve responder essa dúvida logo em seguida. Se não responde, o texto está incompleto.

### Parágrafos

- 2-5 linhas por parágrafo
- Quebrar blocos longos
- Cada seção resolve uma subdúvida real

---

## 4. Regras de estrutura de página

### H1

- 1 por página
- Deve fazer sentido sozinho
- Não pode ser genérico
- Deve representar a pergunta principal da página

### Resposta imediata (obrigatória)

Logo abaixo do H1:
- Máximo 4 linhas
- Sem introdução, sem enrolação
- Responde a pergunta principal diretamente
- Pode incluir 1 alternativa ou condição relevante

### H2

Cada H2 deve passar neste teste: **"Se eu ler esse H2 isoladamente, ele faz sentido como uma busca real?"**

Ruim: `O que considerar`
Bom: `O que considerar ao escolher a espécie de abelha sem ferrão`

- Evitar H2 vagos
- Preferir H2 que carreguem contexto semântico suficiente
- Não repetir mecanicamente

### H3

- Serve para detalhar um H2
- Pode ser mais leve, mas não completamente solto
- Usar quando houver subdivisão real, não por estética

### Elemento objetivo (obrigatório)

Toda página deve conter pelo menos um:
- Tabela comparativa
- Checklist
- Lista de erros comuns
- Comparação prós/contras
- Resumo operacional

### Bloco de decisão rápida (quando aplicável)

Para páginas que envolvem escolha:
- Formato: cenário → decisão
- Simples e direto
- Sem explicação longa

---

## 5. Regras de layout

### Direção geral

- **Texto corrido como espinha dorsal** com apoio visual pontual
- Referência estética: Wirecutter / The Spruce — guia prático, opinião clara, estrutura limpa
- Editorial natural premium: não infantil, não rústico, não portal SEO genérico
- Cor como acento, não como estrutura gritante
- Mais tipografia, espaço em branco, divisores finos e hierarquia
- Menos caixas pesadas, menos gradiente, menos decoração "mostrando serviço"

### Blocos recomendados por posição

**Topo da página:**
- `breadcrumb` (páginas internas)
- `hero` (home) ou título via `articleContent`
- Resposta imediata via `articleContent` ou `richText`

**Corpo principal:**
- `articleContent` como espinha (texto corrido com H2, H3)
- `callout` para destaques pontuais (tip, warning, info)
- `comparisonTable` ou `prosCons` quando houver decisão
- `stats` para dados de impacto
- `image` para apoio visual real
- `quote` para citações relevantes

**Apoio de monetização (contextual):**
- `affiliateCard` — quando o contexto pedir produto concreto
- `adSlot` — máximo 2 por página, um no meio real da leitura, outro no fechamento

**Fechamento:**
- `relatedLinks` — bloco final consistente com links para todas as outras páginas do guia
- `cta` — próximo passo claro e útil

### O que evitar no layout

- Excesso de cards (`cardsGrid` em série)
- FAQ como preenchimento automático
- Blocos muito visíveis em sequência (cara de "template montado")
- Chips, selos e decoração excessiva
- Hero genérico com frase vazia

### Escopo visual

- Personalização é local ao site
- Não alterar padrão visual dos outros sites para resolver um caso específico
- Se só der para resolver mexendo em algo global, parar e avisar

---

## 6. Regras de SEO editorial

### Title (tag title)

- 50-65 caracteres
- Incluir keyword principal
- Incluir intenção (como, qual, guia, por que)
- Não ser genérico
- Formato: `[Keyword principal]: [intenção/resultado] + [contexto]`

### Meta description

- 120-160 caracteres
- Linguagem direta
- Listar 2-4 itens concretos do conteúdo
- Evitar frase genérica
- Formato: `[O que é] + [o que vai aprender] + [elementos concretos]`

### Slug

- Curto e direto
- Sem palavras desnecessárias
- Sem preposições quando possível

### Headings e semântica

- O tema principal deve aparecer ao longo da página
- Usar variações naturais (não repetição mecânica)
- H2 devem parecer buscas reais no Google
- H2 não devem depender do H1 para fazer sentido

### Interlinking (obrigatório)

Toda página deve conter:
- Link para a home/hub do site
- Link para o próximo passo lógico
- 2-4 links para conteúdos relacionados
- Nenhuma página isolada

Regra: link bom fecha o raciocínio. Link ruim parece menu técnico ou CTA artificial. Links de aprofundamento devem nascer no fim natural do raciocínio, não como linha solta.

---

## 7. Regras de monetização

### Princípio

Conteúdo primeiro, entendimento depois, monetização por consequência.

### Ads (AdSense)

- Máximo 2 slots por página
- Um no meio real da leitura (não no primeiro terço)
- Outro no fechamento
- Não empilhar ads nem colar no bloco final de navegação
- Usar `adSlot` com slotId semântico (substituir por ID real quando AdSense aprovar)

### Afiliados

- Pode aparecer cedo, desde que seja contextual e discreto
- Imagem real do produto ajuda muito
- Usar `affiliateCard` padrão (funciona melhor que banner customizado)
- Em páginas críticas ou neutras, monetização mais contida
- Sempre com `rel="sponsored"` e `programId`

### CTA

- Contextual e tardio
- Não deve competir com o entendimento
- Deve indicar o próximo passo claro
- Não genérico ("Saiba mais") — específico ("Ver modelos de caixa para jataí")

---

## 8. Checklist de qualidade (aplicar antes de publicar)

### Identidade da página

- [ ] A página tem UMA intenção principal clara
- [ ] A página responde uma pergunta dominante
- [ ] O H1 representa exatamente essa pergunta

### Topo da página

- [ ] Existe resposta imediata logo abaixo do H1
- [ ] A resposta tem no máximo 4 linhas
- [ ] A resposta não começa com introdução ou contexto

### Headings

- [ ] Cada H2 faz sentido sozinho
- [ ] Cada H2 poderia ser uma busca real no Google
- [ ] Nenhum H2 é genérico

### Conteúdo

- [ ] O conteúdo está dividido por H2
- [ ] Não existem blocos longos de texto sem divisão
- [ ] Cada seção resolve uma subdúvida clara
- [ ] Existe pelo menos um elemento objetivo (tabela, checklist, comparação)
- [ ] Nenhuma frase é floreio sem utilidade prática

### SEO

- [ ] Title tem 50-65 caracteres e keyword principal
- [ ] Description tem 120-160 caracteres com elementos concretos
- [ ] Slug é curto e direto
- [ ] O tema principal aparece ao longo da página com variações naturais

### Interlinking

- [ ] A página linka para a home/hub
- [ ] A página linka para o próximo passo
- [ ] A página linka para 2-4 conteúdos relacionados
- [ ] A página não está isolada

### Monetização

- [ ] Ads não estão empilhados nem no primeiro terço
- [ ] Afiliados são contextuais e discretos
- [ ] CTA indica próximo passo específico

### Finalização

- [ ] A página não termina "solta"
- [ ] Existe fechamento funcional (resumo ou direção)
- [ ] O leitor entende o que fazer depois

**SE QUALQUER ITEM = NÃO → NÃO PUBLICAR**

---

## 9. Imagens

### Quando usar

- Imagens reais são essenciais para credibilidade
- Toda página do guia deve ter pelo menos 1-2 imagens relevantes
- Editoriais podem ter ou não, dependendo do conteúdo

### Fontes aceitas

- Imagens fornecidas pelo operador
- Bancos livres (Unsplash, Pexels, Pixabay)
- Imagens dos produtos de afiliado (quando disponíveis)
- Diagramas ou infográficos gerados

### Regras

- Alt text descritivo e relevante (não genérico)
- Imagem deve apoiar o texto, não substituí-lo
- Não depender da imagem para sustentar toda a identidade da página

---

## 10. Fluxo de revisão

1. O operador fornece o tema/nicho e opcionalmente referências de tom
2. O assistente pesquisa referências se não foram fornecidas
3. O assistente apresenta a estrutura completa (mapa de páginas + metadados)
4. O operador aprova a estrutura
5. O assistente escreve a home
6. O operador aprova o tom da home
7. Se aprovado: as internas e editoriais seguem sem parar
8. O operador revisa e corrige o resultado final

---

## 11. Regras de governança

- Refinamento de conteúdo acontece dentro do pacote do site (`sites/<siteKey>/index.ts`)
- Não tocar em `app/globals.css`, `app/[site]/layout.tsx`, `core/blocks/*` ou padrão global
- Se só der para resolver mexendo em algo global, parar e avisar
- Commit e push são responsabilidade manual do operador
- Mudanças devem ser pequenas, rastreáveis e reversíveis
