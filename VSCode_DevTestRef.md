# VSCode_DevTestRef

## Aviso de uso

**Este documento e auxiliar, complementar e nao normativo.**

Ele foi produzido em paralelo a documentacao oficial do repositorio para registrar a etapa de experimentacao da Rotina 2 feita fora do fluxo original do Claude, cruzando historico de conversa, historico do git e sinais de ambiente.

**Nao usar este documento como fonte de verdade operacional.**

Ele nao substitui `CONTENT_GUIDE.md`, `SITE_CREATION.md`, roadmap, checklist, decisoes, contratos, nem o estado real do codigo. Ele existe para:

- registrar erros e acertos da experimentacao;
- consolidar preferencias de desenvolvimento, design, SEO e monetizacao;
- preservar conflitos entre conversa e materializacao;
- servir como baliza para discussao e redacao futura do `CONTENT_GUIDE.md`.

Ele **nao** deve ser usado para:

- operar a Rotina 2 diretamente;
- encerrar discussoes de produto/processo;
- contradizer a documentacao principal;
- promover uma regra a "padrao oficial" sem confronto com a cadeia de verdade do projeto.

## Escopo deste snapshot

- Data de corte: `2026-03-29`
- Fontes usadas:
  - esta thread atual;
  - arquivo externo `c:\Users\Mateus\OneDrive\Area de Trabalho\historico.txt`;
  - historico local do git deste clone;
  - logs locais de desenvolvimento (`.next-dev.*`);
  - documentacao existente da Fase 1C no repositorio.
- Observacao importante:
  - o `historico.txt` foi montado manualmente com copia e cola de trechos;
  - portanto, ele e rico o suficiente para revelar padroes reais, mas pode conter buracos cronologicos ou lacunas pontuais.

## Metodologia

Este relatorio cruza quatro camadas:

1. **Conversa**
   - pedidos, correcao de direcao, rejeicoes, aprovacoes, desconfortos e preferencias explicitadas.

2. **Git**
   - commits, merges, o que de fato entrou no repositorio e em que sequencia.

3. **Logs**
   - sinais de ambiente que ajudam a separar problema de produto de problema de execucao local.

4. **Documentacao-base**
   - o que o repositorio ja definia para Fase 1B/Fase 1C antes e depois da experimentacao.

Regra de leitura:

- conversa e git sao analisados em paralelo;
- divergencias nao sao reconciliadas automaticamente;
- se algo foi pedido e nao entrou no git, isso continua relevante como preferencia ou conflito;
- se algo entrou no git sem aparecer claramente como preferencia consolidada, isso continua sendo materializacao parcial, nao regra final;
- sinais de log entram apenas para explicar ruido operacional, nao para definir direcao editorial.

## Resumo executivo

O aprendizado principal desta etapa e claro:

**o usuario quer paginas que parecam leituras editoriais reais, progressivas, uteis e confiaveis, e nao sites montados por blocos visiveis, cards demais, FAQ em serie ou monetizacao na frente do entendimento.**

Em termos genericos, a direcao desejada para futuros sites do AuraPro e:

- menos portal;
- menos template;
- menos componente "aparecendo";
- mais materia util;
- mais sequencia logica;
- mais resposta concreta;
- mais profundidade organizada;
- mais monetizacao contextual e tardia;
- mais personalizacao local por site;
- menos mudanca global para resolver identidade de um site especifico.

O maior anti-padrao identificado foi este:

**tentar otimizar estrutura, blocos e "acabamento visual" antes de acertar a sensacao de leitura e a utilidade pratica.**

## Linha do tempo consolidada com relacao ao git

### 1. Rotina 1: scaffold validado, mas o usuario quer ver o estado puro antes da Rotina 2

**Evidencia de conversa**

- A primeira melhoria foi disparada cedo demais apos a criacao do site.
- O usuario corrigiu a direcao: o ideal era concluir a Rotina 1, olhar o scaffold puro e so depois iniciar a Rotina 2 com novas orientacoes.
- Houve restauracao explicita do pacote `apicultura-br` ao estado puro para avaliacao do scaffold.

**Evidencia de git**

- `b485937` - `feat: criar site apicultura-br via scaffold (Fase 1B)`

**Aprendizado consolidado**

- O scaffold da Rotina 1 precisa ser visto como artefato proprio, nao como rascunho descartavel.
- O usuario quer separar mentalmente:
  - criacao do site;
  - avaliacao do scaffold;
  - refinamento editorial posterior.

### 2. Fluxo local-first, sem credenciais locais e sem confundir commit com push

**Evidencia de conversa**

- O usuario explicitou que nao quer push automatico na nuvem.
- Houve necessidade de esclarecer diferenca entre `commit` e `push`.
- O usuario proibiu o uso de `_credentials.env` e de qualquer automacao baseada em credenciais locais herdadas de outro ambiente.
- Tambem pediu que artefatos locais nao fossem para o git e sugeriu ajuste no `.gitignore`.

**Evidencia de git**

- `322470c` - `chore: ignore next dev logs`

**Aprendizado consolidado**

- O fluxo desejado e `local first`.
- `commit` nao implica publicacao.
- `push` so acontece quando o usuario decide.
- O agente nao deve presumir integracao com credenciais do Claude nem usar `_credentials.env`.
- O agente deve ser proativo para manter `.gitignore` ajustado a artefatos locais recorrentes.

### 3. Fase 1C comecou por contratos, mas sob autorizacao pontual

**Evidencia de conversa**

- O usuario revogou pontualmente a restricao de nao alterar `core/` para permitir a expansao de contratos durante a Fase 1C.
- Depois cobrou que a restricao deveria ter sido tratada de forma mais rigida e explicitada antes de sugerir mudancas nessa area.

**Evidencia de git**

- `4d01497` - `feat(theme): expand SiteTheme with optional fields (Fase 1C)`

**Aprendizado consolidado**

- Regras de escopo do repositorio devem ser tratadas como restricoes reais.
- Se houver proibicao de mexer em `core/`, `layout` compartilhado ou documentacao estrutural, isso precisa ser dito de forma objetiva antes de sugerir alteracao.
- Excecao pontual do usuario autoriza a mudanca, mas nao apaga a regra.

### 4. Primeira tentativa forte de Rotina 2: tecnicamente rica, editorialmente errada

**Evidencia de conversa**

- A primeira grande versao da melhoria foi percebida como:
  - modular demais;
  - portal demais;
  - "framework vestido";
  - "landing page por blocos";
  - com FAQs demais;
  - com cards demais;
  - com sensacao mais correta em estrutura do que em experiencia.
- O usuario apontou uma referencia externa de "artigo com capa" como direcao melhor.
- Tambem criticou o fato de terem sido alterados elementos compartilhados de outros sites, algo expressamente proibido.

**Evidencia de git**

- Essa tentativa, na forma mais errada/global, **nao foi preservada como regra oficial**.
- O que ficou materializado depois foi uma versao refinada e muito corrigida, consolidada em:
  - `cbbe6ee` - `Refine apicultura-br editorial site`

**Aprendizado consolidado**

- A primeira passagem grande foi util como experimento, mas virou principalmente mapa de erros.
- O principal erro nao foi "copy ruim"; foi **objetivo mal calibrado**:
  - blocos antes de sensacao;
  - estrutura antes de leitura;
  - acabamento antes de identidade.

### 5. Correcao de rota: de "bloco-first" para "editorial-first"

**Evidencia de conversa**

- O proprio usuario resumiu o objetivo melhor do que as primeiras implementacoes:
  - foto forte no topo;
  - texto corrido como espinha dorsal;
  - menos blocos;
  - menos navegacao de portal;
  - mais clima de artigo/revista;
  - afiliados com imagem real e cara concreta;
  - CTAs mais raras e organicas.
- Tambem ficou explicitado que qualquer mudanca de estilo deveria valer **apenas para esse site**.

**Evidencia de git**

- `cbbe6ee` materializa a fase em que:
  - o site deixa de ser scaffold puro;
  - assume uma narrativa propria;
  - ganha foto de apoio;
  - recebe ajustes locais e depois publicacao.

**Aprendizado consolidado**

- O norte correto para a Rotina 2, em nichos parecidos, e:
  - mais materia especial;
  - menos landing page;
  - mais leitura continua;
  - menos modulos autoevidentes.

### 6. Home como peca central + aprofundamentos por etapa

**Evidencia de conversa**

- O usuario rejeitou reaproveitamento excessivo e pediu reestruturacao do zero.
- A estrutura que passou a funcionar melhor foi:
  - introducao rica;
  - logo abaixo, guia passo a passo;
  - cada passo com um aprofundamento especifico;
  - no final de cada pagina, bloco consistente com links para os demais aprofundamentos;
  - home como guia principal de verdade, nao como fachada de cards.

**Evidencia de git**

- Esta linha foi absorvida dentro do refinamento que chegou a `cbbe6ee`.

**Aprendizado consolidado**

- Para jornadas praticas, a formula mais forte foi:
  - introducao forte;
  - sequencia operacional;
  - aprofundamento por etapa.

### 7. Ajustes finos de copy: menos literario, mais resposta imediata

**Evidencia de conversa**

- O usuario rejeitou trechos como:
  - frases atmosfericas sem utilidade imediata;
  - blocos meta como "Como este site foi pensado";
  - trechos bonitos mas sem resposta pratica;
  - repeticao de ideias sem aprofundamento real.
- Tambem pediu:
  - mais passo a passo;
  - mais explicacao concreta;
  - perguntas respondidas logo na sequencia;
  - detalhamento real de especie, caixa, local, temperatura, chegada da colonia e alimentacao.

**Evidencia de git**

- Essa lapidacao faz parte do corpo final que chegou a `cbbe6ee`.

**Aprendizado consolidado**

- O tom esperado nao e "literario vazio".
- O texto pode ser bonito, mas so se continuar sendo util.
- Sempre que uma duvida implicita aparece, a pagina precisa responder logo.

### 8. Ajustes de navegacao editorial: links inline e bloco final consistente

**Evidencia de conversa**

- O usuario nao queria links soltos como:
  - "Ler o detalhamento do passo X..."
- Preferiu links incorporados naturalmente ao fim do proprio raciocinio.
- Tambem pediu o mesmo bloco completo de aprofundamentos no final de todas as paginas.

**Evidencia de git**

- O comportamento consolidado foi parte do refinamento publicado em `cbbe6ee`.

**Aprendizado consolidado**

- Link bom fecha o raciocinio.
- Link ruim parece menu tecnico ou CTA artificial.
- O bloco final de navegacao precisa parecer continuidade da leitura, nao menu de portal.

### 9. Estilo visual: primeira tentativa decorada demais, segunda contida funciona melhor

**Evidencia de conversa**

- A primeira estilizada ficou "montada demais".
- O que funcionou melhor foi:
  - revista natural premium;
  - cor como acento;
  - menos caixas pesadas;
  - menos gradiente;
  - mais tipografia, respiro e divisores finos;
  - menos elementos "mostrando servico".
- O usuario tambem mandou limpar rotulos desnecessarios como "Fechamento" e "Guia Editorial de Inicio".

**Evidencia de git**

- A etapa estetica e seus refinamentos tambem desembocam em `cbbe6ee`.

**Aprendizado consolidado**

- Beleza aqui vem de:
  - ritmo;
  - hierarquia;
  - contencao;
  - e nao de decoracao.

### 10. Monetizacao: teste temporario com afiliados em slots reservados

**Evidencia de conversa**

- O usuario quis testar banners de afiliado nos dois espacos reservados por pagina enquanto o AdSense nao estivesse aprovado.
- Depois:
  - pediu dois banners por pagina;
  - pediu que um ficasse no meio real da leitura;
  - o outro no final;
  - corrigiu quando estavam perto demais.
- O teste mostrou que:
  - imagem real do produto importa;
  - o bloco padrao de afiliado funcionou melhor que banner editorial customizado;
  - neutralidade de paginas criticas deve ser preservada.

**Evidencia de git**

- `b27f15d` - `Adjust apicultura-br affiliate slots`

**Aprendizado consolidado**

- Em paginas comerciais, o slot do meio precisa ser realmente meio.
- O banner final pode continuar no fechamento.
- O formato padrao do affiliateCard foi preferido ao banner inventado.

### 11. Indexacao e descoberta: reforco interno legitimo, nao link oculto

**Evidencia de conversa**

- O usuario pediu um link oculto na raiz para reforcar indexacao.
- A forma especifica foi recusada.
- Em seguida foi adotada uma alternativa visivel e discreta, primeiro na raiz e depois no rodape.
- A conversa revelou dois aprendizados:
  - tecnicamente, a descoberta interna legitima ja ajuda bastante;
  - comunicacionalmente, recusas precisam ser objetivas e sem tom moralista.

**Evidencia de git**

- `be5eb0a` - `Add apicultura link on root page`
- `14ea740` - `Move apicultura link to root footer`

**Aprendizado consolidado**

- Quando o objetivo for indexacao/descoberta, a preferencia real e:
  - caminho visivel, legitimo e discreto;
  - sitemap consistente;
  - interlinking normal.

### 12. Renomeacao para meliponicultura + redirect 301 + endurecimento estrutural

**Evidencia de conversa**

- Depois da fase experimental do site, houve consolidacao estrutural:
  - renomeacao de `apicultura` para `meliponicultura`;
  - preservacao de contrastes tecnicos legitimos;
  - redirect legado `301`;
  - revisao estrutural completa da `main`.

**Evidencia de git**

- `be0e7eb` - `rename apicultura site to meliponicultura`
- `fbec965` - merge da renomeacao
- `da12edd` - `add 301 redirect from apicultura to meliponicultura`
- `55b851d` - `fix vercel 301 redirect config`
- `dab170e` - `chore: harden runtime and governance structure`

**Aprendizado consolidado**

- O aprendizado da Rotina 2 nao ficou restrito ao conteudo:
  - ele retroalimentou nomenclatura;
  - SEO;
  - runtime;
  - governanca;
  - disciplina de scaffold.

## Sinais de log e ambiente que nao devem virar regra editorial

Os logs e a conversa mostram varios ruidos operacionais recorrentes. Eles sao importantes para o processo, mas **nao** devem ser confundidos com direcao de conteudo.

### Sinais recorrentes

- `spawn EPERM` em `next build` ou `next dev` dentro do sandbox;
- `safe.directory` bloqueando comandos git;
- divergencia local x Vercel causada por `NEXT_PUBLIC_ADS_TEST_MODE`;
- aviso recorrente do AdSense no head (`data-nscript`);
- erros transitivos de `registry.ts` em ambiente dev;
- necessidade de `.next/types` antes de alguns checks.

### Leitura correta

- Isso tudo explica atrito de execucao, nao preferencia editorial.
- O `CONTENT_GUIDE` nao deve herdar nada disso como regra de conteudo.
- O maximo que vale preservar como regra operacional e:
  - comparar localhost e Vercel no mesmo modo de anuncios;
  - separar bug do site de ruido do ambiente;
  - nao confundir erro de sandbox com erro de design.

## Preferencias consolidadas para desenvolvimento

### 1. Fluxo de trabalho

- `[explicito]` Preferencia por `local first`.
- `[explicito]` O usuario quer testar localmente antes de publicar.
- `[explicito]` `commit` e `push` devem ser tratados como etapas separadas e explicadas sem ambiguidade.
- `[explicito]` Nao usar `_credentials.env` nem credenciais herdadas de outro ambiente.
- `[explicito]` O agente nao deve avancar automaticamente para a Rotina 2 so porque o scaffold existe.
- `[explicito]` Quando uma restricao de escopo existir, ela deve ser sinalizada antes de sugerir excecao.
- `[inferido por repeticao]` Quando o usuario ja validou localmente e considera rollback aceitavel, ha abertura para publicacao direta em `main`.

### 2. Escopo de mudanca

- `[explicito]` Refinamento de um site deve acontecer primeiro dentro do pacote do proprio site.
- `[explicito]` Nao tocar em `app/globals.css`, `app/[site]/layout.tsx`, `core/blocks/*` ou padrao global para resolver a identidade de um site, salvo autorizacao explicita.
- `[explicito]` Se so der para chegar no resultado mexendo em algo global, o agente deve parar e avisar.

### 3. Postura de comunicacao

- `[explicito]` O usuario prefere conversa tecnica, direta e sem moralizacao.
- `[explicito]` Quando a forma especifica de um pedido nao puder ser executada, o agente deve:
  - reconhecer o objetivo;
  - explicar o limite sem drama;
  - oferecer a alternativa equivalente mais proxima.

## Preferencias consolidadas para estrutura de pagina

### 1. Home

- `[explicito]` A home nao deve parecer colagem de modulos.
- `[explicito]` A home deve funcionar como peca editorial central.
- `[explicito]` Estrutura preferida:
  - introducao forte;
  - transicao curta;
  - guia ou eixo principal logo em seguida;
  - aprofundamentos contextualizados;
  - conclusao curta;
  - navegacao final.
- `[explicito]` Em temas praticos, a home pode ser o proprio guia central.

### 2. Paginas internas

- `[explicito]` As paginas internas devem aprofundar etapas ou duvidas reais da jornada principal.
- `[explicito]` Elas nao devem parecer paginas soltas.
- `[explicito]` Estrutura preferida:
  - breadcrumb;
  - cabecalho simples e forte;
  - texto principal logo no inicio;
  - desenvolvimento em blocos de raciocinio;
  - apoio tecnico so quando ajuda;
  - CTA contextual;
  - bloco final consistente de navegacao.

### 3. Quando usar passo a passo

- `[explicito]` Em temas de decisao pratica, o formato passo a passo funciona melhor.
- `[explicito]` Cada passo deve:
  - responder uma pergunta concreta;
  - fechar uma microdecisao;
  - apontar para um aprofundamento especifico.

### 4. Regra de aprofundamento

- `[explicito]` A pagina principal nao deve tentar dizer tudo.
- `[explicito]` O detalhamento deve morar em paginas especificas.
- `[explicito]` Os links de aprofundamento devem nascer no fim natural do raciocinio, nao como CTA isolada.

## Preferencias consolidadas para escrita

### 1. Tom e densidade

- `[explicito]` Mais direto.
- `[explicito]` Mais explicativo.
- `[explicito]` Mais passo a passo.
- `[explicito]` Menos literario.
- `[explicito]` Menos "clima" sem resposta.
- `[explicito]` Mais utilidade imediata.

### 2. Regra pratica

- `[explicito]` Se o texto levanta uma duvida implicita, deve responder essa duvida logo em seguida.
- `[explicito]` Frases que nao ajudam a entender ou decidir tendem a ser descartaveis.

### 3. O que valorizar

- `[inferido por repeticao]` exemplos concretos;
- `[inferido por repeticao]` sequencias logicas;
- `[inferido por repeticao]` criterios de escolha;
- `[inferido por repeticao]` erros comuns;
- `[inferido por repeticao]` explicacao operacional;
- `[inferido por repeticao]` conclusoes sintese.

### 4. O que cortar

- `[explicito]` secoes meta sobre o proprio site;
- `[explicito]` frases atmosfericas sem utilidade real;
- `[explicito]` textos bonitos mas vazios;
- `[explicito]` repeticoes reaproveitadas sem ganho;
- `[explicito]` cabecalhos decorativos ou rotulos desnecessarios.

## Preferencias consolidadas para design

### 1. Direcao geral

- `[explicito]` Revista/guia editorial, nao landing page.
- `[explicito]` Editorial natural premium, nao infantil, nao rustico barato, nao portal SEO generico.
- `[explicito]` O site deve funcionar mesmo sem imagem forte no topo.

### 2. Tratamento visual

- `[explicito]` Mais tipografia, espaco em branco, divisores finos e hierarquia.
- `[explicito]` Cor como acento, nao como estrutura gritante.
- `[explicito]` Menos caixas pesadas.
- `[explicito]` Menos gradiente.
- `[explicito]` Menos decoracao "mostrando servico".

### 3. Escopo visual

- `[explicito]` Personalizacao local por site.
- `[explicito]` Nao alterar padrao visual dos outros sites para resolver um caso especifico.

### 4. Elementos que funcionaram pior

- `[inferido por rejeicao]` excesso de cards;
- `[inferido por rejeicao]` FAQ em serie;
- `[inferido por rejeicao]` blocos muito visiveis;
- `[inferido por rejeicao]` chips/selos demais;
- `[inferido por rejeicao]` atmosfera de "template maquiado".

## Preferencias consolidadas para SEO e interlinking

- `[explicito]` SEO deve nascer junto da copy e da arquitetura da pagina.
- `[explicito]` Slugs, titles, narrativa e links internos precisam ser coerentes.
- `[explicito]` O melhor interlinking e natural e visivel.
- `[explicito]` Link interno deve parecer continuidade da leitura, nao dispositivo tecnico.
- `[explicito]` Quando houver renomeacao importante, nomes publicos, rota, ids internos e SEO devem ser tratados juntos.
- `[explicito]` Redirect legado, quando necessario, deve ficar na camada correta e com semantica HTTP exata.

## Preferencias consolidadas para monetizacao

### 1. Regra principal

- `[explicito]` Conteudo primeiro, entendimento depois, monetizacao por consequencia.

### 2. Ads

- `[explicito]` Dois slots por pagina sao aceitaveis.
- `[explicito]` Um precisa ficar no meio real da leitura.
- `[explicito]` O outro fica no final.
- `[explicito]` Ads nao podem ficar empilhados nem colados no fechamento.

### 3. Afiliados

- `[explicito]` Afiliado entra melhor em paginas de decisao concreta.
- `[explicito]` Imagem real do produto ajuda muito.
- `[inferido por repeticao]` O bloco padrao de afiliado funcionou melhor que banner customizado.
- `[explicito]` Em paginas criticas ou neutras, monetizacao precisa ser muito mais contida.

### 4. CTA

- `[explicito]` CTA deve ser contextual e tardia.
- `[explicito]` CTA nao deve competir com o entendimento.

## Erros que devemos evitar nas proximas iteracoes

### Erros estruturais

- iniciar a Rotina 2 antes de o usuario avaliar o scaffold puro da Rotina 1;
- tratar a home como mosaico de blocos;
- usar FAQ como preenchimento automatico;
- criar paginas internas que nao pertencem a uma trilha maior;
- deixar links de aprofundamento como linhas soltas;
- repetir autoria/data ao dividir artigo em dois blocos.

### Erros de escrita

- priorizar atmosfera antes de responder a pergunta do leitor;
- usar frases literarias que nao resolvem nada;
- criar secoes meta sobre o proprio site;
- reaproveitar trechos sem perceber repeticao funcional;
- explicar de modo vago o que deveria ser passo a passo concreto.

### Erros visuais

- mudar estilo global para resolver um unico site;
- exagerar em caixas, gradientes, selos e decoracao;
- deixar o site com cara de framework/portal/template;
- depender de imagem para sustentar toda a identidade.

### Erros de monetizacao

- colocar afiliado cedo demais;
- concentrar anuncios no terco final;
- usar monetizacao em paginas que pedem neutralidade;
- fazer o anuncio parecer colado em CTA e bloco final.

### Erros de processo

- confundir `commit` com publicacao;
- usar automacao de push/credenciais local-first onde o usuario nao quer isso;
- nao explicitar limites de escopo antes de propor mudanca sensivel;
- adotar tom moralista em vez de tecnico quando um pedido tem forma problematica.

## Ledger de conflitos e pontos ambiguos

### `mudanca revertida/abandonada`

**Tema:** primeira versao muito modular e com alteracao global

- A primeira grande tentativa de refinamento incluiu mudancas compartilhadas que o usuario rejeitou.
- Depois houve restauracao total para voltar ao estado anterior.
- Logo: esse caminho e evidencia de erro, nao de preferencia consolidada.

### `materializacao sem consenso pleno`

**Tema:** foto no topo

- Em certo momento a foto no topo ajudou a calibrar direcao.
- Depois a imagem foi retirada da renderizacao e mantida apenas como `ogImage`.
- Leitura correta: foto forte pode servir como experimento, mas o layout nao deve depender dela.

### `mudanca de estrategia`

**Tema:** sem redirect x com redirect

- Na renomeacao estrutural, primeiro foi decidido nao adicionar compatibilidade de rota.
- Depois foi pedido e implementado redirect `301`.
- Logo: isso nao e incoerencia tecnica; e mudanca deliberada de estrategia.

### `interpretacao ambigua`

**Tema:** branch/merge x publicar direto em `main`

- A preferencia do usuario parece variar com o tipo de validacao necessaria.
- Quando o teste local nao basta para ele, ha inclinacao a reduzir atrito e validar direto na `main`.
- Isso ainda nao virou regra formal do projeto.

## O que esta forte o bastante para influenciar o futuro CONTENT_GUIDE

Estes pontos ja aparecem com forca suficiente para serem tratados como materia-prima real do `CONTENT_GUIDE.md`:

### 1. Estrutura-base

- home como peca editorial central;
- aprofundamentos ligados a etapas ou duvidas concretas;
- links inline no momento certo;
- bloco final consistente de navegacao;
- progressao logica acima de quantidade de modulos.

### 2. Escrita

- utilidade imediata;
- pergunta respondida logo;
- clareza acima de floreio;
- detalhamento pratico estruturado;
- texto corrido como espinha dorsal.

### 3. Design

- editorial e contido;
- local ao site;
- menos framework aparente;
- menos decoracao utilitaria;
- mais hierarquia e ritmo.

### 4. Monetizacao

- explicar antes de recomendar;
- slot do meio realmente no meio;
- slot final no fechamento;
- afiliado com contexto;
- neutralidade preservada onde necessario.

### 5. Governanca

- local first;
- sem credenciais herdadas;
- sem push automatico presumido;
- sem alterar global sem autorizacao explicita;
- sem confundir regra experimental com regra oficial.

## Formulacao quase pronta para virar regra geral

Se este historico tiver que ser reduzido a uma diretriz sintetica para a Fase 1C, ela seria:

**Cada pagina do AuraPro deve funcionar como uma leitura util, progressiva e especifica.**

Isso implica:

- menos portal, menos template, menos bloco visivel;
- mais materia, mais sequencia logica, mais resposta concreta;
- conversao como consequencia da boa orientacao;
- personalizacao local do site antes de qualquer mudanca sistemica;
- aprofundamento por etapa real da jornada do leitor;
- monetizacao contextual, nunca dominante.

## Fechamento deste snapshot

Leitura final mais importante:

- o minimo publicado funcionou, mas o caminho ate ele revelou atritos reais;
- o material mais valioso desta etapa nao e apenas o que entrou no git;
- e tambem o que foi rejeitado, revertido, criticado ou precisou ser reduzido para chegar no que o usuario considera aceitavel;
- por isso este documento deve ser lido como memoria auxiliar da experimentacao, e nao como manual de operacao.

Quando novas threads forem incorporadas, este arquivo deve ser enriquecido sem apagar o historico atual, sempre preservando:

- o que foi pedido;
- o que foi testado;
- o que foi revertido;
- o que foi materializado;
- o que de fato virou preferencia repetida ou explicita.
