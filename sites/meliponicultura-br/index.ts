/**
 * sites/meliponicultura-br/index.ts
 * Meliponicultura BR — Guia completo de criação de abelhas sem ferrão
 */

import type {
  BreadcrumbBlock,
  PageSchema,
  RelatedLinksBlock,
  SiteEntry,
} from '../../core/types/contracts'
import { resolveSiteBaseUrl } from '../../config/site-url'

const SITE_KEY = 'meliponicultura-br'
const ROUTE_PATH = 'meliponicultura'
const BASE_URL = resolveSiteBaseUrl(ROUTE_PATH)
const PUBLISHED_AT = '2026-04-04'

const SLUG_O_QUE_SAO = 'o-que-sao-abelhas-sem-ferrao'
const SLUG_COMO_COMECAR = 'como-comecar-meliponario'
const SLUG_CAIXAS = 'caixas-e-equipamentos'
const SLUG_CAPTURA = 'como-conseguir-primeiro-enxame'
const SLUG_MANEJO = 'manejo-alimentacao-e-inspecao'
const SLUG_MEL = 'mel-e-produtos'
const SLUG_ED_PLANTAS = 'plantas-para-abelhas'
const SLUG_ED_URBANA = 'meliponicultura-urbana'
const SLUG_ED_ERROS = 'erros-comuns-meliponicultura'

const AGRO_SITE = '/agrofloresta'

const pageHref = (slug: string) =>
  slug === 'home' ? `/${ROUTE_PATH}` : `/${ROUTE_PATH}/${slug}`

function breadcrumb(label: string, slug: string): BreadcrumbBlock {
  return {
    type: 'breadcrumb',
    items: [
      { label: 'Início', href: pageHref('home') },
      { label, href: pageHref(slug) },
    ],
  }
}

function allGuideLinks(currentSlug: string): RelatedLinksBlock {
  return {
    type: 'relatedLinks',
    links: [
      { label: 'Página inicial: guia de meliponicultura', slug: 'home' },
      { label: 'O que são abelhas sem ferrão', slug: SLUG_O_QUE_SAO },
      { label: 'Como montar um meliponário', slug: SLUG_COMO_COMECAR },
      { label: 'Caixas e equipamentos', slug: SLUG_CAIXAS },
      { label: 'Como conseguir o primeiro enxame', slug: SLUG_CAPTURA },
      { label: 'Manejo, alimentação e inspeção', slug: SLUG_MANEJO },
      { label: 'Mel e produtos', slug: SLUG_MEL },
    ]
      .filter((item) => item.slug !== currentSlug)
      .map((item) => ({ label: item.label, href: pageHref(item.slug) })),
  }
}

// HOME

const homePage: PageSchema = {
  id: 'mel-home', siteKey: SITE_KEY, type: 'home', slug: 'home',
  title: 'Início', status: 'published',
  meta: { title: 'Meliponicultura: guia completo para criar abelhas sem ferrão', description: 'Aprenda a criar abelhas nativas sem ferrão do zero. Caixas, espécies, alimentação, captura, manejo e produção de mel — passo a passo detalhado.' },
  blocks: [
    { type: 'hero', heading: 'Meliponicultura: como criar abelhas sem ferrão', subheading: 'Um guia passo a passo para quem nunca criou abelhas e quer começar do zero — sem medo, sem mistério, com detalhe.' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1200&q=80', alt: 'Abelha coletando néctar em flor — polinizadores são essenciais para o ecossistema' },
    {
      type: 'articleContent',
      html: `
<p>Meliponicultura é a criação de abelhas nativas sem ferrão. Essas abelhas são diferentes das abelhas comuns (aquelas amarelas e pretas que você conhece): elas são menores, não picam e produzem um mel especial que pode valer até R$ 300 o quilo. O Brasil tem mais de 250 espécies — e muita gente não sabe que dá para criar em casa, no quintal ou até na varanda de um apartamento.</p>

<p>Este guia foi feito para quem nunca criou abelhas e quer começar do zero. Explicamos tudo em detalhe: como as abelhas vivem, que caixa comprar, como conseguir o primeiro enxame, como alimentar, como cuidar e como colher mel. Se você sabe nada sobre o assunto, está no lugar certo.</p>

<h2>O que você vai aprender</h2>
      `,
      author: 'Equipe Meliponicultura BR',
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'cardsGrid',
      cards: [
        { title: '1. O que são abelhas sem ferrão', description: 'Como vivem, como se organizam, por que não picam e quais espécies existem no Brasil.', href: pageHref(SLUG_O_QUE_SAO) },
        { title: '2. Como montar um meliponário', description: 'Onde colocar as caixas, qual direção, que sombra, que plantas ter por perto.', href: pageHref(SLUG_COMO_COMECAR) },
        { title: '3. Caixas e equipamentos', description: 'Caixa INPA, tamanhos por espécie, materiais, alimentadores — o que comprar e quanto custa.', href: pageHref(SLUG_CAIXAS) },
        { title: '4. Como conseguir o primeiro enxame', description: 'Isca com garrafa PET, compra de colônia, transferência para a caixa — passo a passo.', href: pageHref(SLUG_CAPTURA) },
        { title: '5. Manejo, alimentação e inspeção', description: 'Como fazer xarope, quando alimentar, como abrir a caixa, o que olhar, como dividir.', href: pageHref(SLUG_MANEJO) },
        { title: '6. Mel e produtos', description: 'Quando colher, como extrair, quanto rende, quanto vale e como vender.', href: pageHref(SLUG_MEL) },
      ],
    },
    {
      type: 'articleContent',
      html: `
<h2>Por que criar abelhas sem ferrão</h2>

<p><strong>Não picam.</strong> Abelhas sem ferrão não têm ferrão funcional. Algumas espécies mordem de leve se você mexer muito no ninho, mas não injeta veneno e não dói. Isso torna a criação segura para crianças, idosos e animais de estimação.</p>

<p><strong>Produzem mel especial.</strong> O mel de abelha sem ferrão tem sabor diferente do mel comum — mais ácido, mais floral, com notas que variam conforme a espécie e as flores da região. É valorizado por chefs, por quem busca propriedades medicinais e por consumidores dispostos a pagar R$ 100-300/kg (contra R$ 30-50/kg do mel de Apis).</p>

<p><strong>Polinizam seu quintal e sua região.</strong> Abelhas sem ferrão polinizam até 90% das espécies vegetais da Mata Atlântica. Se você tem horta, pomar ou agrofloresta, ter abelhas por perto aumenta a produção de frutas e sementes. Veja como integrar com agrofloresta no nosso <a href="${AGRO_SITE}">guia de agrofloresta</a>.</p>

<p><strong>Dá para criar em cidade.</strong> Diferente de abelhas com ferrão, muitas espécies sem ferrão vivem bem em ambiente urbano. Jataí, manduri e mirim são pequenas, discretas e adaptadas a quintais e varandas.</p>

<h2>Quanto custa começar</h2>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'stats',
      items: [
        { value: 'R$ 150-500', label: 'Para começar com 1 caixa + 1 colônia' },
        { value: 'R$ 100-300/kg', label: 'Valor do mel de abelha sem ferrão' },
        { value: '250+', label: 'Espécies de abelhas sem ferrão no Brasil' },
      ],
    },
    { type: 'adSlot', slotId: 'mel-home-mid', format: 'responsive' },
    {
      type: 'articleContent',
      html: `
<h2>Por onde começar</h2>

<p><strong>Se você não sabe nada:</strong> comece entendendo como as abelhas vivem e se organizam. Vai te ajudar a tomar todas as decisões que vêm depois. → <a href="${pageHref(SLUG_O_QUE_SAO)}">O que são abelhas sem ferrão</a></p>

<p><strong>Se já tem noção do assunto:</strong> vá direto para montar o meliponário e escolher os equipamentos. → <a href="${pageHref(SLUG_COMO_COMECAR)}">Como montar um meliponário</a></p>

<p><strong>Se quer saber o passo a passo de cuidar:</strong> → <a href="${pageHref(SLUG_MANEJO)}">Manejo, alimentação e inspeção</a></p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'callout',
      content: 'Abelhas sem ferrão e agrofloresta são parceiros naturais. As abelhas polinizam as frutíferas do SAF, e a diversidade de flores alimenta as abelhas o ano inteiro. Veja como integrar em <a href="/agrofloresta">nosso guia de agrofloresta</a>.',
      calloutType: 'info',
    },
    allGuideLinks('home'),
    { type: 'adSlot', slotId: 'mel-home-bottom', format: 'responsive' },
  ],
}

// PÁGINA 1: O QUE SÃO ABELHAS SEM FERRÃO

const pageOQueSao: PageSchema = {
  id: 'mel-oquesao', siteKey: SITE_KEY, type: 'article', slug: SLUG_O_QUE_SAO,
  title: 'O que são abelhas sem ferrão', status: 'published',
  meta: { title: 'O que são abelhas sem ferrão e como vivem', description: 'Entenda como as abelhas sem ferrão se organizam, por que não picam, quais espécies existem no Brasil e como escolher a certa para criar.' },
  blocks: [
    breadcrumb('O que são', SLUG_O_QUE_SAO),
    {
      type: 'articleContent',
      html: `
<p>Abelhas sem ferrão são abelhas nativas do Brasil que perderam o ferrão ao longo da evolução. Elas ainda têm uma estrutura parecida com um ferrão, mas é tão pequena que não consegue penetrar a pele humana. Por isso são chamadas de "sem ferrão" — não picam de verdade.</p>

<p>Existem mais de 250 espécies no Brasil. Elas variam muito de tamanho: a menor (lambe-olhos) tem 2 milímetros, e a maior (uruçu) tem quase 2 centímetros. Cada espécie tem comportamento, produção de mel e necessidades diferentes.</p>

<h2>Como uma colônia funciona (por dentro)</h2>

<p>Uma colônia de abelhas sem ferrão funciona como uma cidade pequena com funções definidas:</p>

<p><strong>A rainha:</strong> é a única fêmea que bota ovos. Ela é maior que as outras abelhas e fica dentro do ninho o tempo todo. Sem a rainha, a colônia morre lentamente. Uma colônia saudável tem uma rainha ativa — se ela morrer ou ficar velha, as operárias criam uma nova rainha a partir de uma larva especial.</p>

<p><strong>As operárias:</strong> são as abelhas que você vê voando. Fazem tudo: coletam néctar e pólen, constroem os potes de mel e de cera, cuidam das larvas, defendem a entrada do ninho, limpam o interior e regulam a temperatura. Uma colônia pode ter de 300 (espécies pequenas como jataí) a 10.000+ operárias (espécies grandes como uruçu).</p>

<p><strong>Os machos (zangões):</strong> nascem para acasalar com rainhas de outras colônias. Depois do acasalamento, morrem. Não coletam alimento, não defendem o ninho, não fazem cera.</p>

<p><strong>O ninho:</strong> fica no centro da caixa ou do oco de árvore. É formado por discos de cria — estruturas circulares feitas de cerume (mistura de cera + própolis) onde a rainha deposita os ovos. Os discos ficam empilhados horizontalmente, como andares de um prédio. Cada célula de cria contém um ovo que vai virar larva, depois pupa e depois abelha adulta. Esse processo leva 30-50 dias dependendo da espécie.</p>

<p><strong>Os potes de mel e pólen:</strong> ficam ao redor do ninho, na parte externa. São potes ovalados feitos de cerume, onde as operárias armazenam mel (energia) e pólen (proteína). Numa colônia saudável, você vê os potes bem cheios e organizados — é sinal de que a colônia está produzindo bem.</p>

<p><strong>O invólucro:</strong> é uma camada de cerume que envolve os discos de cria como uma capa protetora. Serve para manter a temperatura estável (as larvas precisam de calor constante). Em espécies de clima frio, o invólucro é mais grosso.</p>

<h2>As espécies mais criadas no Brasil</h2>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'comparisonTable',
      headers: ['Espécie', 'Tamanho', 'Mel por colônia/ano', 'Temperamento', 'Onde ocorre', 'Dificuldade'],
      rows: [
        { label: 'Jataí (T. angustula)', values: ['4-5 mm', '0,5-1,5 kg', 'Muito dócil', 'Todo o Brasil', '⭐ Fácil — ideal para começar'] },
        { label: 'Mandaçaia (M. quadrifasciata)', values: ['10-11 mm', '2-4 kg', 'Dócil', 'Sul, Sudeste, Centro-Oeste', '⭐ Fácil-médio'] },
        { label: 'Uruçu-amarela (M. rufiventris)', values: ['10-12 mm', '3-8 kg', 'Dócil', 'Sudeste, Centro-Oeste', '⭐⭐ Médio'] },
        { label: 'Uruçu-nordestina (M. scutellaris)', values: ['12-14 mm', '5-10 kg', 'Morde de leve', 'Nordeste, Mata Atlântica', '⭐⭐ Médio'] },
        { label: 'Jandaíra (M. subnitida)', values: ['8-10 mm', '1-3 kg', 'Dócil', 'Nordeste (Caatinga)', '⭐⭐ Médio'] },
        { label: 'Mirim (Plebeia spp.)', values: ['3-4 mm', '0,3-0,8 kg', 'Muito dócil', 'Sul, Sudeste', '⭐ Fácil'] },
        { label: 'Manduri (M. marginata)', values: ['6-7 mm', '0,5-1,5 kg', 'Muito dócil', 'Sul, Sudeste', '⭐ Fácil'] },
        { label: 'Tiúba (M. fasciculata)', values: ['8-10 mm', '3-5 kg', 'Dócil', 'Norte, Nordeste', '⭐⭐ Médio'] },
      ],
    },
    {
      type: 'articleContent',
      html: `
<h3>Como escolher sua espécie</h3>

<p><strong>Regra número um:</strong> crie apenas espécies nativas da sua região. Se você mora no Sul e tenta criar uruçu-nordestina, ela pode morrer no inverno. Se mora no Nordeste e tenta criar mandaçaia, pode não se adaptar ao calor. A natureza já fez a seleção — respeite.</p>

<p><strong>Para quem nunca criou:</strong> comece com jataí. É a espécie mais fácil, mais resistente, mais dócil e ocorre em quase todo o Brasil. Produz pouco mel (0,5-1,5 kg/ano), mas o aprendizado vale mais que o mel no começo.</p>

<p><strong>Para quem quer produção de mel:</strong> mandaçaia (Sudeste/Sul) ou uruçu (Nordeste) são as melhores opções. Produzem 3-10 kg/ano por colônia e o mel tem altíssimo valor de mercado.</p>

<h2>Próximo passo</h2>
<p>Agora que você entende como as abelhas vivem, o próximo passo é escolher onde colocar as caixas e montar o meliponário. → <a href="${pageHref(SLUG_COMO_COMECAR)}">Como montar um meliponário</a></p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    allGuideLinks(SLUG_O_QUE_SAO),
    { type: 'adSlot', slotId: 'mel-oquesao-bottom', format: 'responsive' },
  ],
}

// PÁGINA 2: COMO MONTAR MELIPONÁRIO

const pageComoComecar: PageSchema = {
  id: 'mel-comecar', siteKey: SITE_KEY, type: 'article', slug: SLUG_COMO_COMECAR,
  title: 'Como montar um meliponário', status: 'published',
  meta: { title: 'Como montar um meliponário: escolha do local, posição e plantas', description: 'Passo a passo para montar seu meliponário: local, orientação, sombra, proteção contra formigas, plantas melíferas e distância entre caixas.' },
  blocks: [
    breadcrumb('Montar meliponário', SLUG_COMO_COMECAR),
    {
      type: 'articleContent',
      html: `
<p>O meliponário é o local onde ficam suas caixas de abelhas. Pode ser um quintal, uma varanda, uma área coberta no sítio ou até o terraço de um prédio. O importante é que o local atenda a algumas condições básicas que as abelhas precisam para viver bem.</p>

<h2>Passo 1: Escolha o local</h2>

<p>O local ideal tem:</p>

<ul>
<li><strong>Sombra parcial:</strong> as caixas não podem ficar no sol direto o dia inteiro, especialmente no verão. O calor excessivo (acima de 35°C) pode derreter a cera interna, destruir os discos de cria e matar a colônia. Uma árvore que faz sombra à tarde, um telhado com cobertura parcial ou uma pergolada resolvem.</li>
<li><strong>Proteção contra chuva:</strong> a caixa não pode ficar encharcada. Um telhado, uma cobertura de telha ou até uma lona bem presa acima das caixas protege o suficiente.</li>
<li><strong>Ventilação:</strong> não pode ser lugar abafado e fechado. As abelhas regulam a temperatura do ninho ventilando com as asas — se o ar não circula, elas não conseguem.</li>
<li><strong>Longe de agrotóxicos:</strong> se o vizinho pulveriza veneno nas plantas, suas abelhas vão morrer. Precisa de um raio de pelo menos 500 metros sem uso de agrotóxico.</li>
<li><strong>Flores por perto:</strong> as abelhas precisam de néctar e pólen para se alimentar. Se não tem flores num raio de 500 metros a 2 km (dependendo da espécie), elas não conseguem se sustentar. Plante flores se necessário — veja o editorial <a href="${pageHref(SLUG_ED_PLANTAS)}">Plantas para abelhas</a>.</li>
</ul>

<h2>Passo 2: Posicione as caixas</h2>

<p><strong>Entrada voltada para o leste (nascente).</strong> O sol da manhã aquece a entrada da caixa e estimula as abelhas a saírem cedo para coletar. A entrada nunca deve ficar voltada para o sul (o lado mais frio) nem para o oeste (sol forte da tarde).</p>

<p><strong>Altura de 1 a 1,5 metro do chão.</strong> Use um suporte de madeira, uma prateleira ou um cavalete. Caixas no chão ficam expostas a formigas, sapos, umidade e animais. Caixas muito altas dificultam o manejo.</p>

<p><strong>Distância entre caixas:</strong> mínimo de 30-50 cm entre uma caixa e outra. Se forem da mesma espécie, as abelhas podem confundir as entradas e entrar na caixa errada (as guardas matam abelhas de outras colônias). Se forem de espécies diferentes, pode colocar mais próximo — elas se reconhecem pela entrada.</p>

<h2>Passo 3: Proteja contra formigas</h2>

<p>Formigas são o maior inimigo das abelhas sem ferrão em meliponários. Uma coluna de formigas pode saquear uma colônia inteira em uma noite, levando mel, pólen e larvas.</p>

<p><strong>Como proteger:</strong> passe graxa (vaselina) ou óleo queimado nos pés do suporte. As formigas não conseguem subir em superfícies escorregadias. Renove a graxa a cada 15-30 dias, especialmente na época de chuva. Existem também protetores de PVC (canecas invertidas nos pés do cavalete com água ou óleo) que funcionam como barreira física.</p>

<h2>Passo 4: Prepare a área</h2>

<p>Mantenha o entorno limpo — sem frutas caídas no chão (atraem formigas e forídeos), sem lixo orgânico, sem acúmulo de água parada. As abelhas precisam de água limpa por perto — um prato com água e pedrinhas (para elas pousarem sem se afogar) basta.</p>

<h2>Quantas caixas para começar</h2>

<p>Comece com <strong>uma ou duas caixas</strong>. Não mais. Você precisa aprender a observar e cuidar antes de ampliar. Com uma colônia saudável, você pode dividir e ter duas em 6-12 meses. Com duas, pode ter quatro no próximo ano. O crescimento é natural e orgânico.</p>

<h2>Próximo passo</h2>
<p>Agora que o local está escolhido, você precisa da caixa certa. → <a href="${pageHref(SLUG_CAIXAS)}">Caixas e equipamentos</a></p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    allGuideLinks(SLUG_COMO_COMECAR),
    { type: 'adSlot', slotId: 'mel-comecar-bottom', format: 'responsive' },
  ],
}

// PÁGINA 3: CAIXAS E EQUIPAMENTOS

const pageCaixas: PageSchema = {
  id: 'mel-caixas', siteKey: SITE_KEY, type: 'article', slug: SLUG_CAIXAS,
  title: 'Caixas e equipamentos', status: 'published',
  meta: { title: 'Caixas e equipamentos para meliponicultura: INPA, tamanhos e preços', description: 'Caixa INPA explicada módulo a módulo, tamanhos por espécie, materiais, alimentadores, seringas e ferramentas — com preços atualizados.' },
  blocks: [
    breadcrumb('Caixas e equipamentos', SLUG_CAIXAS),
    {
      type: 'articleContent',
      html: `
<p>A caixa é a casa da sua colônia. Escolher a caixa certa e do tamanho certo para a sua espécie é fundamental — uma caixa grande demais para jataí faz a colônia perder calor e enfraquecer; uma caixa pequena demais para uruçu sufoca a colônia e impede o crescimento.</p>

<h2>A caixa INPA: como funciona (módulo por módulo)</h2>

<p>A caixa mais usada no Brasil é a <strong>caixa INPA</strong>, desenvolvida pelo pesquisador Fernando Oliveira no Instituto Nacional de Pesquisas da Amazônia. É uma caixa modular — feita de peças empilhadas que você pode separar para inspecionar, colher mel ou dividir a colônia sem destruir nada.</p>

<p>Vamos abrir uma caixa INPA de baixo para cima e explicar cada peça:</p>

<p><strong>1. Fundo (com lixeira):</strong> a base da caixa. Tem uma gaveta que funciona como "lixeira" — as abelhas jogam resíduos ali (asas de zangões mortos, pedaços de cera velha, restos). Você puxa a gaveta, limpa e coloca de volta. Sem essa gaveta, o lixo acumula e atrai forídeos (pequenas moscas que são inimigas das abelhas).</p>

<p><strong>2. Ninho:</strong> é o módulo mais importante. É onde a rainha vive e onde ficam os discos de cria (os "berçários" dos ovos e larvas). Você nunca mexe no ninho sem necessidade. Se a rainha fugir ou morrer durante uma inspeção mal feita, a colônia pode acabar.</p>

<p><strong>3. Sobreninho:</strong> módulo intermediário. As abelhas usam para expandir o ninho quando a população cresce. Quando o ninho está cheio de discos de cria e as abelhas começam a construir no sobreninho, é sinal de que a colônia está forte e pode ser dividida.</p>

<p><strong>4. Melgueira:</strong> módulo onde as abelhas armazenam mel em potes de cerume. Fica no topo, acima do sobreninho. Na hora de colher mel, você remove só a melgueira — sem mexer no ninho. Esse é o grande benefício do sistema modular.</p>

<p><strong>5. Tampa:</strong> fecha a caixa por cima. Deve vedar bem para não entrar chuva, formigas ou forídeos.</p>

<p>Entre o ninho e o sobreninho (e entre o sobreninho e a melgueira) vai uma <strong>divisória</strong> — uma placa fina de plástico ou madeira com furos que permitem a passagem das operárias mas impedem a rainha de subir para botar ovos na melgueira. Assim, a melgueira fica só com potes de mel, sem cria misturada.</p>

<h2>Tamanhos de caixa por espécie</h2>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'comparisonTable',
      headers: ['Espécie', 'Medida interna (cm)', 'Altura dos módulos', 'Material', 'Preço médio da caixa'],
      rows: [
        { label: 'Jataí, Mirim, Manduri', values: ['12x12', '7 cm', 'Pinus ou eucalipto (2,5-3 cm)', 'R$ 50-80'] },
        { label: 'Mandaçaia, Jandaíra', values: ['15x15', '7,5 cm', 'Pinus ou eucalipto (3 cm)', 'R$ 70-120'] },
        { label: 'Uruçu-amarela', values: ['18x18', '7,5 cm', 'Eucalipto (3 cm)', 'R$ 90-150'] },
        { label: 'Uruçu-nordestina, Tiúba', values: ['20x20', '8 cm', 'Eucalipto (3-4 cm)', 'R$ 120-200'] },
      ],
    },
    {
      type: 'articleContent',
      html: `
<p><strong>Onde comprar caixas:</strong> lojas especializadas como <a href="https://www.asfcaixas.com/" target="_blank" rel="noopener">ASF Caixas</a>, <a href="https://www.agrobees.com.br/" target="_blank" rel="noopener">Agrobees</a>, <a href="https://www.casadomel.com.br/" target="_blank" rel="noopener">Casa do Mel</a>, <a href="https://www.madervalia.com.br/" target="_blank" rel="noopener">Madervalia</a>, <a href="https://www.cerradovivo.com/" target="_blank" rel="noopener">Cerrado Vivo</a> e Santuário das Abelhas vendem caixas prontas por R$ 50-200 dependendo do tamanho e acabamento. Dá para fazer em casa também — os planos estão disponíveis gratuitamente no site <a href="https://www.criarabelhas.com.br/caixas-inpa/" target="_blank" rel="noopener">Criar Abelhas</a>.</p>

<h2>Outros equipamentos</h2>

<p><strong>Alimentador interno:</strong> copinho que fica dentro da caixa para oferecer xarope às abelhas. Pode ser um copinho de café descartável, uma tampa de garrafa PET ou um alimentador específico de cerâmica/plástico. R$ 2-15.</p>

<p><strong>Seringa de 20 ml:</strong> para aplicar o xarope dentro do alimentador sem derramar. Compra em farmácia por R$ 2-5.</p>

<p><strong>Fita crepe ou fita adesiva:</strong> para vedar frestas entre módulos quando necessário. R$ 5-10.</p>

<p><strong>Espátula fina (ou faca sem fio):</strong> para separar módulos que ficaram colados com própolis. As abelhas colam tudo com própolis — abrir módulos grudados exige uma espátula. R$ 10-20.</p>

<p><strong>Suporte/cavalete:</strong> para erguer as caixas a 1-1,5 m do chão. Pode ser de madeira, metal ou até tijolos empilhados. O importante é que seja estável e tenha proteção contra formigas nos pés (graxa ou vaselina). R$ 30-100 (ou faça você mesmo).</p>

<p><strong>Protetor contra formigas:</strong> canecas de PVC invertidas nos pés do suporte, preenchidas com óleo ou água. Funciona como barreira física. R$ 10-30.</p>

<h2>Investimento inicial total</h2>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'comparisonTable',
      headers: ['Item', 'Preço', 'Observação'],
      rows: [
        { label: 'Caixa INPA (1 unidade)', values: ['R$ 50-200', 'Depende do tamanho/espécie'] },
        { label: 'Colônia (1 enxame)', values: ['R$ 100-600', 'Jataí ~R$ 100 | Mandaçaia ~R$ 200 | Uruçu ~R$ 400-600'] },
        { label: 'Suporte/cavalete', values: ['R$ 30-100', 'Pode fazer com madeira reaproveitada'] },
        { label: 'Alimentador + seringa', values: ['R$ 5-20', 'Copa de café + seringa de farmácia'] },
        { label: 'Proteção contra formigas', values: ['R$ 10-30', 'Graxa ou caneca de PVC com óleo'] },
        { label: 'Total para começar', values: ['R$ 195-950', 'Com 1 caixa e 1 colônia'] },
      ],
    },
    {
      type: 'articleContent',
      html: `
<h2>Próximo passo</h2>
<p>Caixa comprada — agora você precisa das abelhas. Existem duas formas de conseguir: comprando uma colônia ou capturando um enxame com isca. → <a href="${pageHref(SLUG_CAPTURA)}">Como conseguir o primeiro enxame</a></p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    allGuideLinks(SLUG_CAIXAS),
    { type: 'adSlot', slotId: 'mel-caixas-bottom', format: 'responsive' },
  ],
}

// PÁGINA 4: COMO CONSEGUIR O PRIMEIRO ENXAME (detalhe extremo)

const pageCaptura: PageSchema = {
  id: 'mel-captura', siteKey: SITE_KEY, type: 'article', slug: SLUG_CAPTURA,
  title: 'Como conseguir o primeiro enxame', status: 'published',
  meta: { title: 'Como conseguir o primeiro enxame: compra, isca e transferência passo a passo', description: 'Duas formas de conseguir abelhas sem ferrão: comprar colônia de criador ou capturar com isca de garrafa PET. Passo a passo detalhado de cada método.' },
  blocks: [
    breadcrumb('Primeiro enxame', SLUG_CAPTURA),
    {
      type: 'articleContent',
      html: `
<p>Você tem a caixa, o suporte e o local preparado. Agora precisa das abelhas. Existem duas formas de conseguir: comprando uma colônia pronta ou capturando um enxame livre com isca. Vamos detalhar as duas.</p>

<h2>Opção 1: Comprar uma colônia (mais seguro para iniciantes)</h2>

<p>Comprar uma colônia já estabelecida é a forma mais rápida e segura de começar. Você recebe uma caixa com rainha, operárias, discos de cria, potes de mel e pólen — tudo funcionando. É só colocar no meliponário e cuidar.</p>

<h3>Onde comprar</h3>

<ul>
<li><strong>Meliponicultores locais:</strong> a melhor opção. Procure associações de meliponicultores do seu estado ou grupos de meliponicultura no Facebook e WhatsApp. Colônias de criadores locais já estão adaptadas ao seu clima.</li>
<li><strong>Lojas especializadas:</strong> <a href="https://www.cerradovivo.com/" target="_blank" rel="noopener">Cerrado Vivo</a>, <a href="https://www.casadomel.com.br/" target="_blank" rel="noopener">Casa do Mel</a> e Santuário das Abelhas vendem colônias com envio para todo o Brasil.</li>
<li><strong>Preços típicos:</strong> Jataí R$ 80-150 | Mandaçaia R$ 150-300 | Uruçu R$ 300-600 | Manduri R$ 80-120</li>
</ul>

<h3>O que verificar na hora da compra</h3>

<ul>
<li>A colônia deve ter rainha viva e ativa (pergunte ao vendedor)</li>
<li>Deve ter pelo menos 3-4 discos de cria com ovos e larvas</li>
<li>Deve ter potes de mel e pólen (sinal de que está saudável e produzindo)</li>
<li>Não deve ter cheiro forte de fermentação (sinal de problemas)</li>
<li>O vendedor deve ser registrado ou pelo menos reconhecido na comunidade</li>
</ul>

<h3>Como transportar</h3>

<p>Feche a entrada da caixa com fita crepe antes de mover. Transporte com a caixa na posição normal (sem virar de lado ou de cabeça para baixo). Evite calor extremo — leve de manhã cedo ou à tardinha. Ao chegar no meliponário, coloque a caixa na posição definitiva e tire a fita da entrada. As abelhas vão sair, voar ao redor por alguns minutos reconhecendo o local e voltar. Em 2-3 dias elas já memorizaram a posição e estão trabalhando normalmente.</p>

<h2>Opção 2: Capturar com isca (mais barato, mais demorado)</h2>

<p>As abelhas sem ferrão, quando a colônia fica grande demais, enviam grupos de operárias para procurar novos locais para morar. Isso se chama <strong>enxameação</strong> e acontece principalmente na primavera e no verão (setembro a março). Você pode atrair essas abelhas exploradoras com uma isca.</p>

<h3>Como montar uma isca com garrafa PET (passo a passo)</h3>

<p><strong>Material:</strong></p>
<ul>
<li>1 garrafa PET de 2 litros (escura — marrom é melhor que transparente)</li>
<li>Um pedaço de cerume ou própolis de abelha sem ferrão (consiga com um meliponicultor)</li>
<li>Um pedaço de papelão enrolado (simula o interior oco de uma árvore)</li>
<li>Fita crepe</li>
<li>Braçadeira de nylon (opcional)</li>
</ul>

<p><strong>Montagem:</strong></p>
<ol>
<li>Corte a garrafa ao meio. Descarte a metade de baixo (ou use como base).</li>
<li>Enrole o papelão e coloque dentro da metade de cima da garrafa, formando um tubo interno. Isso cria o "oco" que as abelhas procuram.</li>
<li>Esfregue o cerume ou a própolis na entrada da garrafa e no interior. O cheiro atrai as abelhas exploradoras — elas reconhecem o aroma e associam a um local já habitado.</li>
<li>Faça um furo de entrada de 1-1,5 cm de diâmetro (para jataí, menor; para mandaçaia, maior). A entrada não pode ser grande demais — as abelhas preferem entradas pequenas que elas possam defender.</li>
<li>Feche a base com fita crepe e pendure a isca a 1,5-2 metros do chão, em local sombreado, de preferência perto de árvores com flores.</li>
</ol>

<p><strong>Quando colocar:</strong> setembro a dezembro (primavera/início de verão) é a melhor época. As abelhas enxameiam nesse período.</p>

<p><strong>Quanto tempo esperar:</strong> pode levar de 2 semanas a 3 meses. Ou pode não vir nenhuma abelha. Depende de quantas colônias existem na região e se estão enxameando. Coloque 3-5 iscas em locais diferentes para aumentar as chances.</p>

<p><strong>Como saber se funcionou:</strong> observe a entrada da isca. Se vir abelhas entrando e saindo com regularidade (não só passando), provavelmente uma colônia se instalou. Espere 30-60 dias antes de mover a isca — a colônia precisa se estabelecer.</p>

<h3>Como transferir da isca para a caixa INPA</h3>

<p>Depois que a colônia se estabeleceu na isca (30-60 dias), você precisa transferir para uma caixa INPA para poder manejar. Esse é o momento mais delicado — vá devagar.</p>

<ol>
<li><strong>Escolha um dia quente e sem vento.</strong> As abelhas ficam mais calmas em dias quentes.</li>
<li><strong>Feche a entrada da isca com fita crepe no fim da tarde</strong> (quando todas as abelhas estiverem dentro). Espere até o dia seguinte.</li>
<li><strong>De manhã, leve a isca para perto da caixa INPA.</strong> Abra a isca com cuidado (usando uma faca ou tesoura).</li>
<li><strong>Identifique os discos de cria</strong> — são estruturas circulares escuras, com células hexagonais. Transfira os discos para o módulo ninho da caixa INPA, mantendo a mesma posição (não vire de cabeça para baixo).</li>
<li><strong>Transfira os potes de mel e pólen</strong> junto com os discos. Coloque tudo dentro do ninho da caixa.</li>
<li><strong>Sacuda gentilmente as abelhas restantes</strong> da isca para dentro da caixa. A rainha deve ir junto — se você vir uma abelha maior que as outras (barriga mais inchada), essa é a rainha. Garanta que ela entrou na caixa.</li>
<li><strong>Feche a caixa</strong> e posicione no local definitivo com a entrada voltada para o leste.</li>
<li><strong>Tire a fita da entrada</strong> e deixe as abelhas se orientarem.</li>
</ol>

<p><strong>Importante:</strong> não mexa mais na caixa por pelo menos 15 dias após a transferência. As abelhas precisam reconstruir o ninho, reorganizar os potes e se acalmar. Interferir nesse período pode fazer a colônia abandonar a caixa.</p>

<h2>Legislação</h2>

<p>A criação de abelhas sem ferrão é permitida no Brasil, mas pode exigir cadastro no órgão ambiental do seu estado (IBAMA ou secretaria estadual de meio ambiente). As regras variam por estado. Em muitos lugares, a criação de até 50 colônias é liberada com cadastro simples. Consulte o órgão ambiental da sua região antes de começar.</p>

<h2>Próximo passo</h2>
<p>Enxame instalado — agora vem o trabalho contínuo: alimentar, inspecionar, proteger e, no futuro, dividir. → <a href="${pageHref(SLUG_MANEJO)}">Manejo, alimentação e inspeção</a></p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    allGuideLinks(SLUG_CAPTURA),
    { type: 'adSlot', slotId: 'mel-captura-bottom', format: 'responsive' },
  ],
}

// PÁGINA 5: MANEJO, ALIMENTAÇÃO E INSPEÇÃO (detalhe máximo)

const pageManejo: PageSchema = {
  id: 'mel-manejo', siteKey: SITE_KEY, type: 'article', slug: SLUG_MANEJO,
  title: 'Manejo, alimentação e inspeção', status: 'published',
  meta: { title: 'Manejo, alimentação e inspeção de abelhas sem ferrão: guia detalhado', description: 'Como fazer xarope passo a passo, quando alimentar, como abrir a caixa para inspecionar, como dividir colônias e como proteger contra inimigos.' },
  blocks: [
    breadcrumb('Manejo', SLUG_MANEJO),
    {
      type: 'articleContent',
      html: `
<p>Manejo é o cuidado contínuo com suas colônias. Não é complicado, mas exige atenção e regularidade. Os três pilares do manejo são: alimentar quando necessário, inspecionar periodicamente e proteger contra inimigos.</p>

<h2>Alimentação: como, quando e por quê</h2>

<p>Na natureza, as abelhas se alimentam de néctar (energia) e pólen (proteína) coletados nas flores. Mas em períodos de escassez — inverno, seca prolongada, desmatamento da região — pode não ter flores suficientes. Nesses momentos, você precisa fornecer alimento suplementar para que a colônia não enfraqueça e morra.</p>

<h3>Como saber se precisa alimentar</h3>

<p>Observe a entrada da caixa. Se as abelhas estão entrando e saindo com frequência, carregando pólen (bolinhas amarelas ou alaranjadas nas pernas traseiras), a colônia está bem e não precisa de alimento extra. Se poucas abelhas saem, se a atividade diminuiu muito ou se ao abrir a caixa os potes de mel estão vazios, é hora de alimentar.</p>

<p>Períodos críticos que quase sempre exigem alimentação:</p>
<ul>
<li>Inverno no Sul e Sudeste (junho-agosto) — poucas flores</li>
<li>Seca prolongada no Nordeste e Centro-Oeste</li>
<li>Após transferência de isca para caixa (a colônia está fraca e reorganizando)</li>
<li>Após divisão de colônia (as duas metades estão com população reduzida)</li>
</ul>

<h3>Receita do xarope energético (passo a passo)</h3>

<p>O xarope imita o néctar que as abelhas coletariam nas flores. É a forma mais comum de alimentação suplementar.</p>

<p><strong>Ingredientes:</strong></p>
<ul>
<li>1 copo (200 ml) de açúcar demerara (ou mascavo — nunca refinado, que pode ter químicos). O demerara é o mais recomendado: mais nutrientes que o cristal e menos resíduos que o mascavo.</li>
<li>1 copo (200 ml) de água filtrada (sem cloro — se sua água é de torneta com cloro, deixe descansar 24 horas em recipiente aberto ou ferva)</li>
<li>1 colher de chá de suco de limão (ajuda a "inverter" o açúcar, tornando mais fácil para as abelhas digerir)</li>
<li>1 pitada de sal (fornece minerais)</li>
</ul>

<p><strong>Modo de fazer:</strong></p>
<ol>
<li>Coloque a água numa panela e leve ao fogo.</li>
<li>Quando começar a fazer bolhas (não precisa ferver forte), desligue o fogo.</li>
<li>Adicione o açúcar e o sal. Mexa até dissolver completamente.</li>
<li>Deixe esfriar até a temperatura ambiente. <strong>Nunca dê xarope quente para as abelhas</strong> — pode matar.</li>
<li>Quando estiver frio, adicione o suco de limão e mexa.</li>
<li>Pronto. O xarope pode ser armazenado na geladeira por até 7 dias em recipiente fechado.</li>
</ol>

<h3>Como oferecer o xarope para as abelhas</h3>

<p>Você não joga o xarope dentro da caixa. Precisa colocar num recipiente pequeno que as abelhas consigam acessar sem se afogar.</p>

<ol>
<li>Pegue um <strong>copinho de café descartável</strong> (aqueles pequenos de plástico) ou uma <strong>tampa de garrafa PET</strong>.</li>
<li>Coloque <strong>2-3 palitos de picolé quebrados</strong> dentro do copinho. Os palitos funcionam como "escada" — as abelhas pousam neles para beber sem cair no líquido e se afogar. Sem os palitos, elas morrem afogadas.</li>
<li>Encha o copinho com xarope até a metade (não até a borda).</li>
<li>Abra a caixa pela tampa, com cuidado e rapidez.</li>
<li>Coloque o copinho dentro da melgueira (parte de cima da caixa), num canto onde não atrapalhe os potes de mel.</li>
<li>Feche a caixa.</li>
</ol>

<p><strong>Frequência:</strong> 1-2 vezes por semana em períodos críticos. A cada 15 dias em períodos normais (se achar necessário). Não alimente todos os dias — excesso de xarope pode fermentar dentro da caixa e causar problemas.</p>

<p><strong>Quantidade:</strong> coloque pouco — o que as abelhas consigam consumir em 1 dia. Se no dia seguinte ainda tiver xarope sobrando, você colocou demais. Diminua na próxima vez.</p>

<h3>Bombom de pólen (alimentação proteica)</h3>

<p>Além de energia (xarope), as abelhas precisam de proteína (pólen) para alimentar as larvas. Se as abelhas não estão conseguindo coletar pólen suficiente, você pode oferecer um "bombom de pólen":</p>

<ol>
<li>Compre <strong>pólen desidratado de Apis</strong> (abelha comum) — encontra em casas de produtos naturais ou lojas de apicultura. R$ 40-80/100g.</li>
<li>Triture o pólen no liquidificador até virar pó fino.</li>
<li>Misture com um pouco de mel até formar uma massinha que dê para moldar.</li>
<li>Faça bolinhas do tamanho de uma bolinha de gude (para jataí) ou de uma cereja (para uruçu).</li>
<li>Derreta um pouco de cera de abelha e mergulhe as bolinhas para criar uma "casca" de cera. Isso protege o conteúdo e as abelhas vão roer a cera quando quiserem acessar o pólen.</li>
<li>Coloque 1-2 bombons dentro da caixa, na melgueira.</li>
</ol>

<p><strong>Quando usar:</strong> apenas em períodos de escassez real de pólen (inverno, seca). Se a colônia está trazendo pólen normalmente, não precisa.</p>

<h2>Inspeção: como abrir a caixa sem causar dano</h2>

<p>Inspecionar é abrir a caixa para ver se está tudo bem. A frequência ideal é <strong>a cada 15-30 dias</strong>. Não abra toda semana — cada abertura estressa as abelhas e elas gastam dias reconstruindo o que você perturbou.</p>

<h3>Passo a passo da inspeção</h3>

<ol>
<li><strong>Escolha um dia quente, ensolarado e sem vento</strong> (acima de 20°C). As abelhas ficam mais calmas no calor.</li>
<li><strong>Lave as mãos</strong> — abelhas sem ferrão não picam, mas são sensíveis a cheiros fortes (perfume, álcool, repelente). Mãos limpas e sem cheiro.</li>
<li><strong>Abra pela tampa</strong>, com calma. Use a espátula se estiver grudado com própolis. Não force — vá desprendendo devagar.</li>
<li><strong>Observe a melgueira primeiro:</strong> os potes de mel estão cheios? Têm potes novos sendo construídos? Se sim, a colônia está produzindo bem. Se os potes estão vazios ou são poucos, pode ser escassez de alimento.</li>
<li><strong>Se precisar ver o ninho</strong> (faça isso com menos frequência — a cada 2-3 meses): separe a melgueira do sobreninho, depois o sobreninho do ninho. Observe os discos de cria: devem estar escuros (com larvas), organizados e cobertos pelo invólucro de cerume. Se os discos estão secos, com células abertas vazias ou com cheiro ruim, pode haver problema com a rainha ou contaminação.</li>
<li><strong>Feche tudo na ordem inversa</strong> — ninho, sobreninho, melgueira, tampa. Garanta que não ficou nenhuma abelha esmagada entre os módulos.</li>
</ol>

<h3>O que observar em cada inspeção</h3>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'comparisonTable',
      headers: ['Sinal', 'Significa', 'O que fazer'],
      rows: [
        { label: 'Muita atividade na entrada', values: ['Colônia forte e saudável', 'Nada — está tudo bem'] },
        { label: 'Poucas abelhas saindo', values: ['Colônia fraca, frio ou falta de alimento', 'Alimentar com xarope, verificar rainha'] },
        { label: 'Potes de mel cheios', values: ['Produção boa, colônia com excedente', 'Pode colher mel se tiver potes de sobra'] },
        { label: 'Potes vazios', values: ['Falta de néctar no entorno', 'Alimentar com xarope imediatamente'] },
        { label: 'Discos de cria abundantes', values: ['Rainha ativa, população crescendo', 'Considerar divisão se estiver muito cheia'] },
        { label: 'Cheiro ruim ao abrir', values: ['Possível contaminação ou rainha morta', 'Investigar, limpar, buscar ajuda de criador experiente'] },
        { label: 'Pequenas moscas dentro da caixa', values: ['Forídeos (inimigos)', 'Limpar lixeira, reduzir entrada, fortalecer colônia'] },
        { label: 'Formigas na caixa', values: ['Proteção insuficiente', 'Graxa nos pés do suporte, limpar entorno'] },
      ],
    },
    {
      type: 'adSlot',
      slotId: 'mel-manejo-mid',
      format: 'responsive',
    },
    {
      type: 'articleContent',
      html: `
<h2>Inimigos das abelhas e como proteger</h2>

<p><strong>Forídeos:</strong> pequenas moscas da família Phoridae — parecem mosquitinhos. Elas entram na caixa, botam ovos e as larvas devoram o mel, o pólen e até as larvas das abelhas. Uma infestação grave pode destruir uma colônia fraca. Prevenção: manter a lixeira limpa (limpar a cada 15 dias), não deixar mel derramado, garantir que a entrada da caixa seja do tamanho certo (pequena o suficiente para as abelhas defenderem).</p>

<p><strong>Formigas:</strong> como já explicamos — graxa ou óleo nos pés do suporte. Inspecione os pés a cada 15 dias e reaplique quando necessário.</p>

<p><strong>Lagartixas e sapos:</strong> ficam perto da entrada e comem abelhas que entram e saem. Solução: elevar a caixa a pelo menos 1,5 metro e manter o entorno limpo.</p>

<p><strong>Calor excessivo:</strong> se a temperatura interna da caixa passar de 35°C, a cera derrete, os discos de cria colam e as larvas morrem. Solução: sombra, nunca sol direto na caixa, especialmente à tarde.</p>

<h2>Divisão de colônias: como multiplicar seus enxames</h2>

<p>Quando uma colônia está forte (muitos discos de cria, potes cheios, muitas abelhas), você pode dividi-la para criar uma nova colônia. Isso é equivalente a "reproduzir" o enxame de forma controlada.</p>

<p><strong>Quando dividir:</strong> na primavera (setembro-novembro), quando as flores estão abundantes. Nunca divida no inverno ou em período de seca — as duas colônias resultantes ficarão fracas e podem morrer.</p>

<p><strong>Como dividir (resumo):</strong></p>
<ol>
<li>Prepare uma caixa INPA nova vazia.</li>
<li>Abra a colônia forte e separe o sobreninho (com discos de cria novos) do ninho.</li>
<li>Coloque o sobreninho na caixa nova como se fosse o novo ninho.</li>
<li>Adicione sobreninho e melgueira vazios por cima.</li>
<li>As abelhas que ficaram sem rainha na metade nova vão criar uma rainha nova a partir de uma larva jovem — isso leva 30-50 dias.</li>
<li>Alimente as duas colônias com xarope nas semanas seguintes à divisão.</li>
</ol>

<p>A divisão é um procedimento que exige prática. Se é sua primeira vez, procure um meliponicultor experiente para acompanhar ou assistir a vídeos detalhados antes de tentar.</p>

<h2>Próximo passo</h2>
<p>Colônia cuidada e produzindo — agora é hora de entender quando e como colher mel. → <a href="${pageHref(SLUG_MEL)}">Mel e produtos</a></p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    allGuideLinks(SLUG_MANEJO),
    { type: 'adSlot', slotId: 'mel-manejo-bottom', format: 'responsive' },
  ],
}

// PÁGINA 6: MEL E PRODUTOS

const pageMel: PageSchema = {
  id: 'mel-mel', siteKey: SITE_KEY, type: 'article', slug: SLUG_MEL,
  title: 'Mel e produtos', status: 'published',
  meta: { title: 'Mel de abelha sem ferrão: como colher, quanto rende e quanto vale', description: 'Como extrair mel de abelhas sem ferrão, rendimento por espécie, valor de mercado, própolis e como vender legalmente.' },
  blocks: [
    breadcrumb('Mel e produtos', SLUG_MEL),
    {
      type: 'articleContent',
      html: `
<p>O mel de abelha sem ferrão é diferente do mel comum em tudo: sabor, textura, umidade, propriedades e preço. É mais líquido (tem mais água), mais ácido, com notas florais que variam conforme a espécie e as flores da região. E vale muito mais — R$ 100-300 o quilo, contra R$ 30-50 do mel de Apis.</p>

<h2>Quando colher</h2>

<p>Colha mel apenas quando a colônia tiver <strong>potes de sobra</strong> — ou seja, mais potes cheios do que ela precisa para se alimentar. Nunca colha todo o mel: deixe sempre pelo menos metade dos potes para as abelhas. Se você esvaziar todos os potes, a colônia vai passar fome e pode morrer.</p>

<p><strong>Melhor época:</strong> final da primavera e verão (novembro a março), quando as flores estão abundantes e a produção é alta. Nunca colha no inverno — as abelhas precisam de todo o mel armazenado para sobreviver o período de escassez.</p>

<h2>Como colher (passo a passo)</h2>

<ol>
<li><strong>Abra a caixa pela tampa.</strong> Retire a melgueira inteira — é o módulo de cima, onde ficam os potes de mel.</li>
<li><strong>Identifique os potes cheios de mel.</strong> São potes arredondados de cerume, bem fechados. Potes abertos ou com líquido muito claro podem ser néctar fresco (ainda não processado) — não colha esses.</li>
<li><strong>Fure os potes com uma seringa de 20 ml</strong> (sem agulha) e aspire o mel. Esse método é o mais limpo e permite colher sem destruir a estrutura dos potes. As abelhas reconstroem os potes depois.</li>
<li><strong>Transfira o mel da seringa para um recipiente limpo de vidro.</strong> Plástico pode contaminar o sabor. Peneire com um tecido fino (voal) para remover pedaços de cera.</li>
<li><strong>Feche a melgueira e coloque de volta na caixa.</strong></li>
<li><strong>Guarde o mel na geladeira.</strong> O mel de abelha sem ferrão tem mais umidade que o mel comum e pode fermentar se ficar fora da geladeira por muito tempo (especialmente em clima quente).</li>
</ol>

<h2>Quanto rende</h2>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'comparisonTable',
      headers: ['Espécie', 'Produção anual por colônia', 'Valor do mel/kg', 'Receita possível/colônia/ano'],
      rows: [
        { label: 'Jataí', values: ['0,5-1,5 kg', 'R$ 150-300', 'R$ 75-450'] },
        { label: 'Mandaçaia', values: ['2-4 kg', 'R$ 120-250', 'R$ 240-1.000'] },
        { label: 'Manduri', values: ['0,5-1,5 kg', 'R$ 100-200', 'R$ 50-300'] },
        { label: 'Uruçu-amarela', values: ['3-8 kg', 'R$ 100-200', 'R$ 300-1.600'] },
        { label: 'Uruçu-nordestina', values: ['5-10 kg', 'R$ 100-200', 'R$ 500-2.000'] },
        { label: 'Jandaíra', values: ['1-3 kg', 'R$ 150-300', 'R$ 150-900'] },
      ],
    },
    {
      type: 'articleContent',
      html: `
<h2>Outros produtos</h2>

<p><strong>Própolis:</strong> resina que as abelhas coletam de plantas e usam para vedar frestas e proteger o ninho. A própolis de abelha sem ferrão tem propriedades antimicrobianas diferentes da própolis de Apis e é valorizada em cosméticos e saúde natural. Coleta cuidadosa — retire apenas o excesso, sem comprometer a vedação do ninho.</p>

<p><strong>Cerume:</strong> mistura de cera + própolis usada para construir potes e invólucro. Pode ser usada para confecção de iscas, cosméticos naturais e velas. Pequenas quantidades — o excedente da divisão de colônias.</p>

<p><strong>Pólen:</strong> armazenado em potes separados do mel. Tem alto valor nutricional (proteínas, vitaminas, minerais) e pode ser consumido in natura ou desidratado. Sabor levemente ácido e fermentado.</p>

<p><strong>Colônias:</strong> a multiplicação de colônias por divisão pode ser a fonte de renda mais significativa. Uma colônia de jataí vale R$ 80-150; uma de uruçu, R$ 300-600. Com 10 colônias fazendo 1 divisão por ano cada, são 10 novas colônias para vender.</p>

<h2>Como vender legalmente</h2>

<p>Para vender mel de abelha sem ferrão, você precisa de:</p>

<ul>
<li><strong>SIF, SIE ou SIM:</strong> Serviço de Inspeção Federal (para venda nacional), Estadual (para venda no estado) ou Municipal (para venda na cidade). O SIM é o mais acessível para pequenos produtores. Consulte a vigilância sanitária do seu município.</li>
<li><strong>Registro de meliponicultor:</strong> cadastro no órgão ambiental (varia por estado). Em muitos estados, o cadastro para até 50 colônias é gratuito e simples.</li>
<li><strong>Rótulo adequado:</strong> nome do produto, espécie da abelha, peso, data de produção, dados do produtor, informações nutricionais.</li>
</ul>

<p>Canais de venda: feiras orgânicas/agroecológicas, venda direta (WhatsApp, Instagram), restaurantes e chefs, lojas de produtos naturais, casas de mel especializadas.</p>

<h2>Conclusão do guia</h2>

<p>Você percorreu o guia completo: entendeu <a href="${pageHref(SLUG_O_QUE_SAO)}">o que são abelhas sem ferrão</a>, aprendeu <a href="${pageHref(SLUG_COMO_COMECAR)}">como montar o meliponário</a>, conheceu <a href="${pageHref(SLUG_CAIXAS)}">as caixas e equipamentos</a>, sabe <a href="${pageHref(SLUG_CAPTURA)}">como conseguir o primeiro enxame</a>, domina <a href="${pageHref(SLUG_MANEJO)}">o manejo e a alimentação</a> e agora sabe como colher e vender mel.</p>

<p>Comece com uma colônia. Observe. Aprenda. E se tiver dúvidas, procure um meliponicultor experiente na sua região — a comunidade de meliponicultura no Brasil é generosa e adora ajudar quem está começando.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    allGuideLinks(SLUG_MEL),
    { type: 'adSlot', slotId: 'mel-mel-bottom', format: 'responsive' },
  ],
}

// EDITORIAIS

const editorialPlantas: PageSchema = {
  id: 'mel-ed-plantas', siteKey: SITE_KEY, type: 'article', slug: SLUG_ED_PLANTAS,
  title: 'Plantas para abelhas sem ferrão', status: 'published',
  meta: { title: 'Plantas que atraem abelhas sem ferrão: o que plantar no quintal', description: 'Lista de plantas melíferas que alimentam abelhas sem ferrão o ano inteiro: flores, frutíferas, aromáticas e nativas por região.' },
  blocks: [
    breadcrumb('Plantas para abelhas', SLUG_ED_PLANTAS),
    {
      type: 'articleContent',
      html: `
<p>Abelhas sem ferrão precisam de flores o ano inteiro — néctar para energia e pólen para proteína. Se o entorno do seu meliponário não tem flores suficientes, as colônias enfraquecem, produzem menos mel e podem morrer no inverno. A solução é plantar espécies que floresçam em épocas diferentes, criando um "calendário de florada" que garante alimento constante.</p>

<h2>Plantas que florescem o ano inteiro</h2>

<p>Estas espécies são as mais versáteis — florescem por longos períodos e são muito visitadas por abelhas sem ferrão:</p>

<ul>
<li><strong>Manjericão:</strong> flores pequenas e brancas, ricas em néctar. Floresce o ano inteiro em clima quente. Plante vários pés — dura de 6 meses a 1 ano.</li>
<li><strong>Alecrim:</strong> flores azuladas, muito visitadas por jataí e manduri. Perene — plante uma vez e dura anos. Precisa de sol e solo drenado.</li>
<li><strong>Girassol:</strong> flor grande, cheia de pólen. Ciclo curto (60-90 dias) — plante a cada 2-3 meses para ter florada constante.</li>
<li><strong>Lavanda:</strong> flores perfumadas que atraem diversas espécies. Mais adaptada ao Sul e Sudeste.</li>
<li><strong>Amor-perfeito e boca-de-leão:</strong> flores de inverno que mantêm a oferta quando outras plantas estão sem flor.</li>
</ul>

<h2>Frutíferas e nativas</h2>

<ul>
<li><strong>Maracujá:</strong> florada abundante e precisa de polinizador. Abelhas sem ferrão (especialmente mamangavas e uruçu) polinizam maracujá. Parceria perfeita.</li>
<li><strong>Citros (laranja, limão, bergamota):</strong> florada explosiva na primavera, muito visitada por abelhas. Mel de flor de laranjeira é dos mais valorizados.</li>
<li><strong>Goiabeira, jabuticabeira, pitangueira:</strong> frutíferas nativas com florada apreciada por abelhas sem ferrão.</li>
<li><strong>Aroeira, ingá, angico:</strong> árvores nativas que fornecem néctar e são importantes para manter a biodiversidade.</li>
</ul>

<h2>Dica para quintal pequeno</h2>

<p>Se você não tem muito espaço, concentre em temperos e aromáticas em vasos: manjericão, alecrim, sálvia, orégano, lavanda e hortelã. São plantas pequenas, florescem muito e as abelhas adoram. Três ou quatro vasos na varanda já ajudam uma colônia de jataí.</p>

<p>Se você tem mais espaço e quer criar um sistema integrado com frutíferas, adubação verde e abelhas, veja nosso <a href="${AGRO_SITE}">guia de agrofloresta</a> — SAF e meliponicultura são parceiros naturais.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    allGuideLinks(SLUG_ED_PLANTAS),
  ],
}

const editorialUrbana: PageSchema = {
  id: 'mel-ed-urbana', siteKey: SITE_KEY, type: 'article', slug: SLUG_ED_URBANA,
  title: 'Meliponicultura urbana', status: 'published',
  meta: { title: 'Meliponicultura urbana: como criar abelhas sem ferrão na cidade', description: 'É possível criar abelhas sem ferrão em apartamento ou quintal urbano. Espécies indicadas, cuidados, legislação e dicas para vizinhança.' },
  blocks: [
    breadcrumb('Meliponicultura urbana', SLUG_ED_URBANA),
    {
      type: 'articleContent',
      html: `
<p>Sim, dá para criar abelhas sem ferrão na cidade — em casa, no quintal ou até na varanda de um apartamento. Como elas não picam, não oferecem risco para vizinhos, crianças ou animais. Mas existem alguns cuidados específicos para quem mora em área urbana.</p>

<h2>Espécies ideais para cidade</h2>

<p><strong>Jataí (Tetragonisca angustula):</strong> a melhor opção para ambiente urbano. É pequenininha (5 mm), muito dócil, discreta e se adapta bem a quintais e varandas. A entrada do ninho é minúscula — a maioria das pessoas nem nota que tem abelhas ali. Produz pouco mel (0,5-1,5 kg/ano), mas o valor educativo e ecológico compensa.</p>

<p><strong>Manduri (Melipona marginata):</strong> um pouco maior que a jataí, igualmente dócil. Boa produtora para áreas urbanas com jardim.</p>

<p><strong>Mirim (Plebeia spp.):</strong> muito pequena (3-4 mm), praticamente invisível. Ideal para quem quer abelhas discretas.</p>

<p><strong>Evite em área urbana:</strong> uruçu e outras espécies grandes que precisam de muita flora e espaço. Em apartamento, o raio de coleta é limitado e a colônia pode passar fome.</p>

<h2>Onde colocar as caixas</h2>

<ul>
<li><strong>Quintal:</strong> melhor opção urbana. Sol da manhã, sombra da tarde, espaço para plantas.</li>
<li><strong>Varanda:</strong> funciona para jataí e mirim, desde que tenha boa ventilação e acesso livre para as abelhas saírem.</li>
<li><strong>Terraço:</strong> cuidado com sol direto e vento forte. Proteja com telhado e quebre-vento.</li>
<li><strong>Muro externo:</strong> algumas pessoas fixam a caixa na parte externa do muro, com a entrada voltada para fora. Funciona bem.</li>
</ul>

<h2>Vizinhança</h2>

<p>A vantagem de abelhas sem ferrão é que elas não incomodam. Mesmo assim, vale conversar com vizinhos para explicar: as abelhas não picam, são pequenas, ajudam a polinizar jardins e não fazem barulho. A maioria das pessoas fica curiosa e interessada quando descobre.</p>

<p>O curso gratuito <strong>Meliponicultura Urbana</strong> da <a href="https://www.embrapa.br/" target="_blank" rel="noopener">EMBRAPA</a> em parceria com a <a href="https://abelha.org.br/" target="_blank" rel="noopener">A.B.E.L.H.A.</a> (Associação Brasileira de Estudos das Abelhas) é excelente para quem quer começar na cidade. Disponível online e gratuito no <a href="https://ava.sede.embrapa.br/" target="_blank" rel="noopener">AVA EMBRAPA</a> (12 horas de conteúdo). O <a href="https://ead.senar.org.br/" target="_blank" rel="noopener">SENAR</a> também oferece cursos gratuitos de meliponicultura a distância.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    allGuideLinks(SLUG_ED_URBANA),
  ],
}

const editorialErros: PageSchema = {
  id: 'mel-ed-erros', siteKey: SITE_KEY, type: 'article', slug: SLUG_ED_ERROS,
  title: 'Erros comuns na meliponicultura', status: 'published',
  meta: { title: '7 erros comuns na meliponicultura que iniciantes cometem', description: 'Erros que matam colônias: caixa no sol, não proteger contra formigas, mexer demais, escolher espécie errada e colher mel cedo demais.' },
  blocks: [
    breadcrumb('Erros comuns', SLUG_ED_ERROS),
    {
      type: 'articleContent',
      html: `
<p>Abelhas sem ferrão são resistentes, mas não são indestrutíveis. Estes são os erros que mais causam perda de colônias — e todos são evitáveis.</p>

<h2>1. Caixa no sol direto</h2>
<p>É o erro que mais mata colônias. Sol da tarde derrete a cera interna, os discos de cria desabam e as larvas morrem cozidas. Basta uma tarde de 35°C com sol direto. Solução: sombra, sempre. Um telhado, uma árvore, qualquer coisa. Ver <a href="${pageHref(SLUG_COMO_COMECAR)}">Como montar um meliponário</a>.</p>

<h2>2. Não proteger contra formigas</h2>
<p>Uma trilha de formigas descobre sua caixa à noite, entra por uma fresta e saqueia tudo — mel, pólen, larvas. Pela manhã, a colônia está destruída. Graxa nos pés do suporte resolve. Verificar a cada 15 dias. Custa R$ 5.</p>

<h2>3. Abrir a caixa toda semana</h2>
<p>Cada vez que você abre, as abelhas gastam dias reconstruindo o que você perturbou: vedação com própolis, invólucro, potes deslocados. Abrir toda semana enfraquece a colônia. A cada 15-30 dias é suficiente. A cada 2-3 meses para inspeção do ninho.</p>

<h2>4. Escolher espécie errada para sua região</h2>
<p>Uruçu-nordestina no Rio Grande do Sul morre no primeiro inverno. Mandaçaia no semiárido pode não se adaptar ao calor. Crie espécies nativas do seu bioma — a natureza já fez a seleção. Ver <a href="${pageHref(SLUG_O_QUE_SAO)}">tabela de espécies por região</a>.</p>

<h2>5. Colher mel cedo demais</h2>
<p>Colônia nova (menos de 6 meses) não tem mel de sobra. Se você colher tudo, ela morre de fome. Espere pelo menos 1 ano e só colha quando houver potes de sobra — nunca mais da metade do mel disponível.</p>

<h2>6. Não alimentar quando precisa</h2>
<p>No inverno ou na seca, a colônia pode estar passando fome e você não percebeu. Se a atividade na entrada diminuiu muito, ofereça xarope. Ver receita detalhada em <a href="${pageHref(SLUG_MANEJO)}">Manejo e alimentação</a>.</p>

<h2>7. Movimentar a caixa depois de instalada</h2>
<p>As abelhas memorizam a posição exata da entrada. Se você mover a caixa 1 metro para o lado, as abelhas que estão coletando no campo voltam para o local antigo e não encontram a casa. Ficam desorientadas e morrem. Se precisar mover, faça em deslocamentos de 30 cm por dia — dando tempo para elas remapearem.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    allGuideLinks(SLUG_ED_ERROS),
  ],
}

// EXPORT

export const meliponiculturaBrSite: SiteEntry = {
  config: {
    siteKey: SITE_KEY,
    publicName: 'Meliponicultura BR',
    routePath: ROUTE_PATH,
    locale: 'pt-BR',
    market: 'BR',
    status: 'active',
    ui: { showAllSitesLink: false },
    theme: {
      brandName: 'Meliponicultura BR',
      primaryColor: '#a16207',
      accentColor: '#92400e',
      surfaceColor: '#fefce8',
      textColor: '#1c1917',
      radius: '12px',
      fontFamilyHeading: 'system-ui, -apple-system, sans-serif',
    },
    seo: {
      siteTitle: 'Meliponicultura BR',
      defaultTitleTemplate: '%s | Meliponicultura BR',
      defaultDescription: 'Guia completo de meliponicultura. Como criar abelhas nativas sem ferrão: espécies, caixas, captura, alimentação, manejo e produção de mel.',
      baseUrl: BASE_URL,
    },
    analytics: { ga4MeasurementId: 'G-G04VC9SZ3Z', enabled: true },
    monetization: {
      ads: { enabled: process.env.NEXT_PUBLIC_ADS_TEST_MODE !== 'true', provider: 'adsense', publisherId: 'ca-pub-7072076910984234' },
      affiliates: { enabled: false, programs: [] },
    },
  },
  pages: [
    homePage,
    pageOQueSao,
    pageComoComecar,
    pageCaixas,
    pageCaptura,
    pageManejo,
    pageMel,
    editorialPlantas,
    editorialUrbana,
    editorialErros,
  ],
}
