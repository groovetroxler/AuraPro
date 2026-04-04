/**
 * sites/agrofloresta-br/index.ts
 * Agrofloresta BR — Guia completo de sistemas agroflorestais no Brasil
 */

import type {
  BreadcrumbBlock,
  PageSchema,
  RelatedLinksBlock,
  SiteEntry,
} from '../../core/types/contracts'
import { resolveSiteBaseUrl } from '../../config/site-url'

const SITE_KEY = 'agrofloresta-br'
const ROUTE_PATH = 'agrofloresta'
const BASE_URL = resolveSiteBaseUrl(ROUTE_PATH)
const PUBLISHED_AT = '2026-04-04'

const SLUG_O_QUE_E = 'o-que-e-sistema-agroflorestal'
const SLUG_PLANEJAR = 'como-planejar-sua-agrofloresta'
const SLUG_EQUIPAMENTOS = 'equipamentos-e-ferramentas'
const SLUG_MANEJO = 'manejo-poda-e-biomassa'
const SLUG_CUSTO = 'quanto-custa-e-quanto-rende'
const SLUG_FINANCIAMENTO = 'financiamento-e-legislacao'
const SLUG_ED_ERROS = 'erros-comuns-agrofloresta'
const SLUG_ED_SOLAR = 'agrofloresta-e-energia-solar'
const SLUG_ED_ESPECIES = 'especies-para-cada-bioma'

const SOLAR_SITE = '/energia-solar'
const MELIPO_SITE = '/meliponicultura'

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
      { label: 'Página inicial: guia de agrofloresta', slug: 'home' },
      { label: 'O que é um sistema agroflorestal', slug: SLUG_O_QUE_E },
      { label: 'Como planejar sua agrofloresta', slug: SLUG_PLANEJAR },
      { label: 'Equipamentos e ferramentas', slug: SLUG_EQUIPAMENTOS },
      { label: 'Manejo, poda e biomassa', slug: SLUG_MANEJO },
      { label: 'Quanto custa e quanto rende', slug: SLUG_CUSTO },
      { label: 'Financiamento e legislação', slug: SLUG_FINANCIAMENTO },
    ]
      .filter((item) => item.slug !== currentSlug)
      .map((item) => ({ label: item.label, href: pageHref(item.slug) })),
  }
}

// ─────────────────────────────────────────────
// HOME
// ─────────────────────────────────────────────

const homePage: PageSchema = {
  id: 'agro-home',
  siteKey: SITE_KEY,
  type: 'home',
  slug: 'home',
  title: 'Início',
  status: 'published',
  meta: {
    title: 'Agrofloresta: guia prático para começar um sistema agroflorestal',
    description: 'Guia completo de agrofloresta para iniciantes. Aprenda a planejar, implantar e manejar um SAF — com espécies, equipamentos, custos e financiamento.',
  },
  blocks: [
    {
      type: 'hero',
      heading: 'Agrofloresta: como começar um sistema agroflorestal',
      subheading: 'Um guia passo a passo para quem quer produzir alimentos, restaurar solo e gerar renda — tudo no mesmo sistema.',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=80',
      alt: 'Terraços de cultivo diversificado em sistema agroflorestal — múltiplas espécies ocupando diferentes estratos',
      caption: 'Agrofloresta combina árvores, frutíferas, hortaliças e adubação verde no mesmo espaço — imitando a lógica da floresta.',
    },
    {
      type: 'articleContent',
      html: `
<p>Um sistema agroflorestal (SAF) é, na essência, uma forma de produzir alimentos imitando a lógica da floresta. Em vez de limpar o terreno e plantar uma só cultura, você combina árvores, frutíferas, hortaliças, grãos e plantas de adubação no mesmo espaço — cada espécie ocupando um estrato diferente (chão, meio, copa) e cumprindo uma função no sistema.</p>

<p>O resultado é um terreno que produz comida, melhora o solo a cada ano, dispensa agrotóxicos, retém água e sequestra carbono. Parece bom demais? Funciona — mas exige planejamento, conhecimento e trabalho nos primeiros anos.</p>

<p>Este guia foi pensado para quem quer começar: desde o conceito até o financiamento, passando por planejamento, escolha de espécies, equipamentos, manejo e custos reais. Tudo com dados concretos e referências de quem já faz.</p>

<h2>O que você vai encontrar neste guia</h2>

<p>Organizamos o conteúdo na ordem em que as decisões acontecem na prática:</p>
      `,
      author: 'Equipe Agrofloresta BR',
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'cardsGrid',
      cards: [
        { title: '1. O que é um SAF', description: 'Conceito, princípios da sucessão ecológica, estratificação e por que funciona melhor que monocultura no longo prazo.', href: pageHref(SLUG_O_QUE_E) },
        { title: '2. Como planejar', description: 'Análise do terreno, escolha de espécies, consórcios, espaçamento, cronograma — o projeto antes do plantio.', href: pageHref(SLUG_PLANEJAR) },
        { title: '3. Equipamentos e ferramentas', description: 'Do facão ao motocultivador: o que você precisa, marcas, faixas de preço e o que é dispensável no começo.', href: pageHref(SLUG_EQUIPAMENTOS) },
        { title: '4. Manejo, poda e biomassa', description: 'O trabalho contínuo que faz a agrofloresta funcionar: poda de condução, capina seletiva, cobertura de solo.', href: pageHref(SLUG_MANEJO) },
        { title: '5. Quanto custa e quanto rende', description: 'Investimento por hectare, receita por fase, payback e comparação honesta com monocultura convencional.', href: pageHref(SLUG_CUSTO) },
        { title: '6. Financiamento e legislação', description: 'PRONAF Floresta, Código Florestal, CAR, SAF em Reserva Legal — as regras e o dinheiro disponível.', href: pageHref(SLUG_FINANCIAMENTO) },
      ],
    },
    {
      type: 'articleContent',
      html: `
<h2>Por que agrofloresta está crescendo no Brasil</h2>

<p>O Brasil é referência mundial em sistemas agroflorestais. A combinação de clima tropical, biodiversidade e tradição de agricultura familiar criou um ambiente onde a agrofloresta faz sentido prático — não só ambiental. Segundo a <a href="https://www.embrapa.br/agrobiologia/fazendinha-agroecologica/sistemas-agroflorestais" target="_blank" rel="noopener">EMBRAPA</a>, SAFs bem manejados podem superar a produtividade por hectare de monoculturas convencionais quando considerados todos os produtos gerados ao longo do tempo.</p>

<p>Na safra 2025/2026, o <a href="https://www.gov.br/mda/pt-br/acesso-a-informacao/acoes-e-programas/programas-projetos-acoes-obras-e-atividades/plano-safra-da-agricultura-familiar" target="_blank" rel="noopener">Plano Safra da Agricultura Familiar</a> destinou R$ 89 bilhões para o setor, com juros de apenas 2% ao ano para cultivos orgânicos e agroecológicos. O <a href="https://www.bb.com.br/site/agronegocios/investimentos/pronaf-abc-mais-floresta/" target="_blank" rel="noopener">PRONAF Floresta</a> financia especificamente sistemas agroflorestais, com prazo de até 20 anos e carência de 12.</p>

<p>Além do financiamento, a legislação brasileira incentiva: o <a href="https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12651.htm" target="_blank" rel="noopener">Código Florestal (Lei 12.651/2012)</a> permite o uso de SAF em áreas de Reserva Legal e em APPs de pequenas propriedades rurais, o que significa que você pode cumprir a lei ambiental e gerar renda ao mesmo tempo.</p>

<h2>Para quem este guia serve</h2>

<p>Este guia foi pensado para três perfis:</p>

<p><strong>Pequeno produtor rural</strong> que quer diversificar a produção, melhorar o solo e acessar financiamento para implantar um SAF. Se você já tem terra e trabalha com agricultura familiar, a agrofloresta pode ser a evolução mais inteligente do seu sistema.</p>

<p><strong>Sitiante ou dono de chácara</strong> que quer produzir alimentos de qualidade, restaurar uma área degradada ou simplesmente fazer algo mais útil com o terreno. Agrofloresta funciona a partir de 1.000 m² — não precisa de fazenda.</p>

<p><strong>Curioso com intenção séria</strong> que está pesquisando antes de comprar terra ou investir. Este guia dá as ferramentas para calcular custos, entender o trabalho envolvido e decidir com informação.</p>

<h2>O que você precisa saber antes de plantar</h2>

<p>Agrofloresta não é plantar árvore e esperar. Os primeiros 2-3 anos exigem trabalho intenso de manejo — poda, capina seletiva, cobertura de solo, replantio. Se você não tem disponibilidade (própria ou contratada) para esse manejo inicial, o sistema não vai se estabelecer.</p>

<p>A boa notícia: depois que o sistema se estabiliza (3-5 anos), o trabalho diminui drasticamente e a produção aumenta. Uma agrofloresta madura produz mais com menos esforço do que uma lavoura convencional — e melhora o solo em vez de degradá-lo.</p>

<p><strong>Comece pelo conceito:</strong> entender o que é um SAF e por que funciona é o primeiro passo. → <a href="${pageHref(SLUG_O_QUE_E)}">O que é um sistema agroflorestal</a></p>

<p><strong>Se já conhece o conceito:</strong> vá direto para o planejamento — é a etapa mais importante e a que mais gente pula. → <a href="${pageHref(SLUG_PLANEJAR)}">Como planejar sua agrofloresta</a></p>

<p><strong>Se quer saber quanto vai gastar:</strong> → <a href="${pageHref(SLUG_CUSTO)}">Quanto custa e quanto rende uma agrofloresta</a></p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'stats',
      items: [
        { value: '2-3 anos', label: 'Para o sistema se estabilizar e reduzir trabalho' },
        { value: 'R$ 89 bi', label: 'Plano Safra 2025/2026 para agricultura familiar' },
        { value: '2% a.a.', label: 'Juros PRONAF para cultivo orgânico/agroecológico' },
      ],
    },
    {
      type: 'adSlot',
      slotId: 'agro-home-mid',
      format: 'responsive',
    },
    {
      type: 'callout',
      content: 'Convergência: sistemas agroflorestais combinam naturalmente com energia solar (para bombeamento e irrigação) e com meliponicultura (abelhas sem ferrão como polinizadoras). Se esses temas te interessam, veja nossos guias de <a href="/energia-solar">energia solar residencial</a> e <a href="/meliponicultura">meliponicultura</a>.',
      calloutType: 'info',
    },
    allGuideLinks('home'),
    {
      type: 'adSlot',
      slotId: 'agro-home-bottom',
      format: 'responsive',
    },
  ],
}

// ─────────────────────────────────────────────
// PÁGINA 1: O QUE É UM SISTEMA AGROFLORESTAL
// ─────────────────────────────────────────────

const pageOQueE: PageSchema = {
  id: 'agro-o-que-e', siteKey: SITE_KEY, type: 'article', slug: SLUG_O_QUE_E,
  title: 'O que é um sistema agroflorestal', status: 'published',
  meta: { title: 'O que é um sistema agroflorestal e por que funciona', description: 'Entenda o conceito de agrofloresta, os princípios de sucessão ecológica e estratificação, os tipos de SAF e por que superam a monocultura.' },
  blocks: [
    breadcrumb('O que é SAF', SLUG_O_QUE_E),
    {
      type: 'articleContent',
      html: `
<p>Um sistema agroflorestal (SAF) é uma forma de uso da terra que combina deliberadamente árvores com cultivos agrícolas e/ou criação animal no mesmo espaço e ao longo do tempo. A ideia central é imitar os processos da floresta natural — sucessão ecológica, estratificação vertical, ciclagem de nutrientes — para produzir alimentos, madeira, fibras e serviços ambientais de forma integrada.</p>

<p>Não é simplesmente plantar árvores no meio da lavoura. É desenhar um sistema onde cada espécie cumpre uma função específica: sombrear, adubar o solo, atrair polinizadores, produzir biomassa, fixar nitrogênio ou gerar renda. Quando bem planejado, o resultado é um terreno que produz mais por metro quadrado do que uma monocultura — e que melhora a cada ano em vez de degradar.</p>

<h2>Os dois princípios fundamentais</h2>

<h3>Sucessão ecológica</h3>

<p>Na natureza, quando um terreno é abandonado, ele não permanece vazio. Primeiro surgem gramíneas e ervas pioneiras. Depois arbustos. Depois árvores de crescimento rápido. Por fim, árvores de grande porte que formam a floresta madura. Cada fase prepara o ambiente para a seguinte — as pioneiras melhoram o solo para as secundárias, que criam sombra para as que virão depois.</p>

<p>Na agrofloresta, você reproduz essa sequência de forma acelerada e intencional. Planta espécies de ciclo curto (hortaliças, milho, mandioca) junto com espécies de ciclo médio (bananeira, mamão, ingá) e espécies de ciclo longo (frutíferas, madeireiras). Conforme as de ciclo curto são colhidas, as de ciclo médio assumem. E quando as de ciclo médio envelhecem, as de ciclo longo já estão dominando o estrato superior.</p>

<p>Esse conceito foi desenvolvido e sistematizado no Brasil por <strong>Ernst Götsch</strong>, agricultor e pesquisador suíço-brasileiro que transformou 500 hectares de pasto degradado no sul da Bahia em floresta produtiva usando exclusivamente princípios de sucessão. Seu trabalho é referência mundial em agrofloresta sucessional, e a <a href="https://agendagotsch.com/" target="_blank" rel="noopener">Agenda Götsch</a> oferece cursos e formações sobre o método.</p>

<h3>Estratificação</h3>

<p>Na floresta, as plantas ocupam diferentes alturas: o estrato rasteiro (até 0,5 m), o baixo (0,5-2 m), o médio (2-8 m), o alto (8-20 m) e o emergente (acima de 20 m). Cada estrato recebe uma quantidade diferente de luz e tem condições diferentes de umidade e temperatura.</p>

<p>Na agrofloresta, você preenche todos os estratos com espécies úteis. Exemplo prático para Mata Atlântica:</p>

<ul>
<li><strong>Rasteiro:</strong> batata-doce, amendoim, morango</li>
<li><strong>Baixo:</strong> mandioca, abacaxi, gengibre</li>
<li><strong>Médio:</strong> bananeira, mamão, café</li>
<li><strong>Alto:</strong> abacate, jaca, citros</li>
<li><strong>Emergente:</strong> eucalipto (madeira), jequitibá, cedro</li>
</ul>

<p>O objetivo é que nenhuma luz solar chegue ao chão sem ser aproveitada por alguma planta. Isso maximiza a fotossíntese por metro quadrado — e é exatamente por isso que SAFs podem superar monoculturas em produtividade total.</p>

<h2>Tipos de sistemas agroflorestais</h2>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'comparisonTable',
      headers: ['Tipo de SAF', 'O que combina', 'Exemplo', 'Complexidade'],
      rows: [
        { label: 'Agrossilvicultural', values: ['Árvores + cultivos agrícolas', 'Café sombreado com ingá e banana', 'Média'] },
        { label: 'Silvipastoril', values: ['Árvores + pastagem + gado', 'Eucalipto + braquiária + gado de corte', 'Baixa-média'] },
        { label: 'Agrossilvipastoril', values: ['Árvores + cultivos + animais', 'Frutíferas + milho + galinhas', 'Alta'] },
        { label: 'Quintal agroflorestal', values: ['Tudo junto em pequena escala', 'Horta + frutíferas + ervas + galinhas', 'Variável'] },
        { label: 'SAF sucessional', values: ['Baseado em sucessão ecológica', 'Plantio denso com espécies de todos os ciclos', 'Alta'] },
      ],
    },
    {
      type: 'articleContent',
      html: `
<h2>Por que funciona melhor que monocultura no longo prazo</h2>

<p>A monocultura extrai nutrientes do solo ano após ano, exigindo reposição constante com fertilizantes. Ela elimina a cobertura do solo (causando erosão), destrói a vida biológica (exigindo agrotóxicos) e concentra o risco em um único produto (se o preço cair ou a safra falhar, a renda é zero).</p>

<p>A agrofloresta inverte essa lógica:</p>

<ul>
<li><strong>Solo:</strong> a queda de folhas, a poda e as raízes profundas das árvores devolvem nutrientes ao solo continuamente. Após 3-5 anos, o solo de um SAF é mais fértil do que era no início — o oposto do que acontece em monocultura.</li>
<li><strong>Água:</strong> a cobertura de solo e a matéria orgânica aumentam a infiltração de água e reduzem a erosão. SAFs recarregam lençóis freáticos e mantêm nascentes ativas.</li>
<li><strong>Pragas:</strong> a diversidade de espécies cria um equilíbrio biológico natural. Predadores de pragas encontram habitat no sistema. O resultado é que SAFs maduros raramente precisam de qualquer tipo de defensivo.</li>
<li><strong>Renda:</strong> em vez de um produto por ano, você colhe diferentes produtos em diferentes épocas — hortaliças em semanas, frutas em meses, madeira em anos. Isso diversifica a renda e reduz o risco.</li>
<li><strong>Clima:</strong> árvores capturam CO2 da atmosfera e armazenam carbono no solo e na biomassa. Uma agrofloresta é um sumidouro de carbono, não uma fonte de emissão.</li>
</ul>

<p>A <a href="https://www.embrapa.br/en/agrobiologia/fazendinha-agroecologica/sistemas-agroflorestais" target="_blank" rel="noopener">EMBRAPA</a> documenta casos de SAFs no Brasil que produzem o equivalente a R$ 15.000-40.000/hectare/ano em produtos diversificados, com custo de manutenção decrescente ao longo do tempo. Monoculturas de grãos no mesmo tipo de solo e região geram R$ 3.000-8.000/hectare/ano com custos crescentes.</p>

<h2>O que a agrofloresta NÃO é</h2>

<p><strong>Não é abandono.</strong> Deixar o mato crescer não é agrofloresta. SAF exige planejamento, plantio intencional e manejo constante nos primeiros anos.</p>

<p><strong>Não é horta orgânica com árvore do lado.</strong> A integração entre espécies precisa ser funcional — cada planta tem um papel no sistema.</p>

<p><strong>Não é solução mágica sem trabalho.</strong> Os primeiros 2-3 anos exigem dedicação intensa. O sistema se paga depois, mas o investimento inicial de tempo e trabalho é real.</p>

<p><strong>Não é incompatível com máquinas.</strong> SAFs bem desenhados permitem o uso de motocultivador, roçadeira e até trator nas entrelinhas. A <a href="https://pretaterra.com/" target="_blank" rel="noopener">Pretaterra</a> demonstra isso em projetos de escala comercial com café sombreado.</p>

<h2>Próximo passo: planejar antes de plantar</h2>

<p>O erro mais comum de quem começa é sair plantando sem plano. A agrofloresta exige um projeto — escolha de espécies, espaçamento, consórcios, cronograma. Esse projeto é a diferença entre um sistema que funciona e um que vira mato. Veja em <a href="${pageHref(SLUG_PLANEJAR)}">Como planejar sua agrofloresta</a>.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1574943320219-555f076ef3e0?w=1200&q=80',
      alt: 'Canteiros de hortaliças em sistema agroflorestal com cobertura de solo e diversidade de espécies',
    },
    allGuideLinks(SLUG_O_QUE_E),
    { type: 'adSlot', slotId: 'agro-oque-bottom', format: 'responsive' },
  ],
}

// ─────────────────────────────────────────────
// PÁGINA 2: COMO PLANEJAR (profundidade extra)
// ─────────────────────────────────────────────

const pagePlanejar: PageSchema = {
  id: 'agro-planejar', siteKey: SITE_KEY, type: 'article', slug: SLUG_PLANEJAR,
  title: 'Como planejar sua agrofloresta', status: 'published',
  meta: { title: 'Como planejar sua agrofloresta: do terreno ao primeiro plantio', description: 'Planejamento completo de um SAF: análise do terreno, escolha de espécies, consórcios, espaçamento, cronograma de implantação e desenho do sistema.' },
  blocks: [
    breadcrumb('Como planejar', SLUG_PLANEJAR),
    {
      type: 'articleContent',
      html: `
<p>Planejar é a etapa mais importante da agrofloresta — e a que mais gente pula. Um SAF mal planejado gera três anos de trabalho para descobrir que as espécies não combinam, o espaçamento está errado ou o terreno não era adequado. Um SAF bem planejado gera renda no primeiro ano e se estabiliza no terceiro.</p>

<p>Este guia cobre o planejamento completo: análise do terreno, escolha de espécies, desenho dos consórcios, espaçamento, cronograma e as decisões que você precisa tomar antes de colocar a primeira semente no chão.</p>

<h2>Passo 1: Conheça seu terreno</h2>

<p>Antes de escolher espécies, você precisa entender o que tem em mãos. O diagnóstico do terreno determina tudo o que vem depois.</p>

<h3>Solo</h3>

<p>O tipo de solo define quais espécies vão se adaptar melhor e quanto trabalho de correção será necessário. Os pontos a verificar:</p>

<ul>
<li><strong>Textura:</strong> arenoso (drena rápido, retém pouco nutriente), argiloso (retém água e nutrientes, compacta fácil) ou franco (ideal — equilíbrio entre os dois). Teste simples: pegue um punhado de terra úmida e tente moldar. Se desmancha, é arenoso. Se molda fácil e fica grudento, é argiloso.</li>
<li><strong>pH:</strong> a maioria das culturas prefere pH entre 5,5 e 6,5. Solos ácidos (pH < 5) são comuns no Cerrado e precisam de calagem. Um kit de teste de pH custa R$ 30-50 e vale muito a pena.</li>
<li><strong>Matéria orgânica:</strong> solos escuros geralmente têm mais matéria orgânica. Solos claros e compactados indicam degradação — que a agrofloresta vai corrigir, mas leva tempo.</li>
<li><strong>Análise de solo:</strong> o ideal é enviar uma amostra para laboratório (custo de R$ 80-150). O resultado mostra pH, matéria orgânica, fósforo, potássio, cálcio, magnésio e saturação de bases. A <a href="https://www.embrapa.br/" target="_blank" rel="noopener">EMBRAPA</a> e as EMATERs estaduais podem orientar sobre como coletar e interpretar.</li>
</ul>

<h3>Água</h3>

<p>Identifique as fontes de água disponíveis: nascentes, córregos, poços, cisterna, rede pública. Nos primeiros meses após o plantio, irrigação pode ser necessária se a chuva falhar — especialmente para mudas pequenas. Um tanque de 1.000-2.500 litros com bomba (manual ou solar) resolve a maioria dos casos em pequenas áreas.</p>

<h3>Relevo e orientação</h3>

<p>Terrenos inclinados exigem plantio em curvas de nível para evitar erosão. A orientação do terreno (norte, sul, leste, oeste) afeta a incidência de sol — terrenos voltados para o norte recebem mais sol no hemisfério sul. Áreas sombreadas por morros ou construções podem limitar espécies que precisam de sol pleno.</p>

<h3>Vegetação existente</h3>

<p>O que já cresce no terreno diz muito sobre as condições. Capim braquiária indica solo compactado mas com alguma fertilidade. Samambaias indicam solo ácido e úmido. Árvores nativas remanescentes são patrimônio — não remova, incorpore ao sistema.</p>

<h3>Histórico de uso</h3>

<p>Pasto antigo, lavoura de cana, área de mineração — cada histórico deixa marcas no solo. Pastagem de 10+ anos provavelmente tem solo compactado na superfície mas com raízes profundas que criaram canais de drenagem. Lavoura intensiva pode ter solo empobrecido mas relativamente descompactado.</p>

<h2>Passo 2: Defina o objetivo do sistema</h2>

<p>Antes de escolher espécies, responda: o que você quer do sistema? Essa resposta define tudo.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'comparisonTable',
      headers: ['Objetivo principal', 'Espécies priorizadas', 'Produção começa em', 'Renda principal'],
      rows: [
        { label: 'Subsistência familiar', values: ['Hortaliças, mandioca, frutas', '2-6 meses', 'Alimentos para consumo'] },
        { label: 'Renda com frutas', values: ['Banana, citros, abacate, açaí', '1-3 anos', 'Venda de frutas'] },
        { label: 'Café sombreado', values: ['Café, ingá, banana, mogno', '2-3 anos', 'Café de qualidade premium'] },
        { label: 'Madeira de lei', values: ['Cedro, mogno, ipê + cultivos iniciais', '8-20 anos', 'Madeira nobre'] },
        { label: 'Restauração + renda', values: ['Nativas + frutíferas + adubadeiras', '1-5 anos', 'Frutas + serviços ambientais'] },
        { label: 'Horta agroflorestal', values: ['Folhosas, temperos, frutas, medicinais', '1-3 meses', 'Venda direta/feira'] },
      ],
    },
    {
      type: 'adSlot',
      slotId: 'agro-planejar-mid1',
      format: 'responsive',
    },
    {
      type: 'articleContent',
      html: `
<h2>Passo 3: Escolha as espécies</h2>

<p>A escolha de espécies é o coração do planejamento. Cada espécie precisa cumprir pelo menos uma função no sistema e ser compatível com as outras. As funções possíveis são:</p>

<ul>
<li><strong>Produtiva:</strong> gera alimento, fruta, grão, madeira ou produto comercializável</li>
<li><strong>Adubadora:</strong> fixa nitrogênio ou produz biomassa para cobertura (ex: crotalária, feijão-de-porco, guandu, mucuna, ingá)</li>
<li><strong>Sombreadora:</strong> cria sombra para espécies que precisam (ex: café, cacau, palmito)</li>
<li><strong>Estrutural:</strong> árvore de grande porte que define o estrato superior do sistema</li>
<li><strong>Protetora:</strong> cerca viva, quebra-vento, atração de polinizadores</li>
</ul>

<h3>Regra prática de proporção</h3>

<p>Para um SAF diversificado, uma proporção inicial que funciona bem é:</p>

<ul>
<li><strong>40-50%</strong> espécies produtivas de ciclo curto e médio (hortaliças, mandioca, banana, mamão)</li>
<li><strong>20-30%</strong> espécies adubadeiras e de biomassa (crotalária, feijão-de-porco, guandu, ingá)</li>
<li><strong>20-30%</strong> espécies produtivas de ciclo longo (frutíferas, madeireiras)</li>
</ul>

<p>Essa proporção garante renda rápida (ciclo curto), manutenção da fertilidade (adubadeiras) e formação da estrutura permanente (ciclo longo).</p>

<h3>Espécies por bioma</h3>

<p>A escolha deve priorizar espécies adaptadas ao seu bioma e clima. Detalhamos isso no editorial <a href="${pageHref(SLUG_ED_ESPECIES)}">Espécies para agrofloresta por bioma</a>, mas os exemplos principais:</p>

<p><strong>Mata Atlântica:</strong> banana, palmito-juçara, café, cacau, abacate, jaca, louro-pardo, guapuruvu, ingá.</p>

<p><strong>Cerrado:</strong> baru, pequi, mangaba, cagaita, gueroba, buriti, aroeira, angico, eucalipto (como pioneira).</p>

<p><strong>Amazônia:</strong> açaí, cupuaçu, cacau, castanha-do-pará, andiroba, mogno, paricá, pupunha.</p>

<p>A <a href="https://www.embrapa.br/" target="_blank" rel="noopener">EMBRAPA</a> publica cartilhas gratuitas com listas de espécies recomendadas por região. O <a href="https://www.senar.org.br/" target="_blank" rel="noopener">SENAR</a> oferece cursos presenciais de SAF com orientação específica para cada estado.</p>

<h2>Passo 4: Desenhe o arranjo espacial</h2>

<p>O arranjo espacial define onde cada espécie vai ficar no terreno. Existem vários modelos, mas o mais usado em SAFs brasileiros é o sistema de linhas (ou canteiros):</p>

<h3>Modelo em linhas</h3>

<p>O terreno é dividido em linhas paralelas. Cada linha recebe um consórcio diferente:</p>

<ul>
<li><strong>Linha de árvores:</strong> a cada 1-2 metros na linha, árvores de grande porte (madeireiras, frutíferas de copa). Distância entre linhas de árvores: 6-12 metros (dependendo da espécie e do equipamento que vai transitar).</li>
<li><strong>Entrelinhas de cultivo:</strong> no espaço entre as linhas de árvores, canteiros de 1-1,5 m de largura para hortaliças, mandioca, milho, feijão, adubação verde.</li>
<li><strong>Corredor de manejo:</strong> faixa de 2-3 metros entre canteiros para passagem de motocultivador ou trator.</li>
</ul>

<p>Esse modelo permite mecanização nas entrelinhas e manejo diferenciado para cada grupo de espécies. É o modelo que a <a href="https://pretaterra.com/" target="_blank" rel="noopener">Pretaterra</a> usa em projetos comerciais de café agroflorestal.</p>

<h3>Espaçamento por tipo de espécie</h3>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'comparisonTable',
      headers: ['Tipo', 'Espaçamento na linha', 'Entre linhas', 'Exemplos'],
      rows: [
        { label: 'Hortaliças', values: ['0,2-0,5 m', '0,5-1,0 m', 'Alface, couve, temperos'] },
        { label: 'Ciclo curto', values: ['0,5-1,0 m', '1,0-1,5 m', 'Mandioca, milho, feijão'] },
        { label: 'Frutíferas médias', values: ['2-4 m', '4-6 m', 'Banana, mamão, citros'] },
        { label: 'Frutíferas grandes', values: ['6-10 m', '8-12 m', 'Abacate, jaca, manga'] },
        { label: 'Madeireiras', values: ['3-6 m', '8-12 m', 'Cedro, mogno, eucalipto'] },
        { label: 'Adubadeiras', values: ['0,5-2 m', 'Entre outras', 'Ingá, crotalária, guandu'] },
      ],
    },
    {
      type: 'articleContent',
      html: `
<h2>Passo 5: Monte o cronograma de implantação</h2>

<p>O plantio não acontece todo de uma vez. A implantação segue a lógica da sucessão:</p>

<p><strong>Mês 1-2 (preparo):</strong></p>
<ul>
<li>Roçar a área (sem queimar — a biomassa vira cobertura)</li>
<li>Marcar as linhas e canteiros com estacas e barbante</li>
<li>Fazer a calagem se necessário (aplicar calcário 30-60 dias antes do plantio)</li>
<li>Abrir covas para as árvores</li>
</ul>

<p><strong>Mês 2-3 (plantio principal):</strong></p>
<ul>
<li>Semear adubação verde nas entrelinhas (crotalária, feijão-de-porco)</li>
<li>Plantar mudas de árvores nas covas</li>
<li>Plantar banana, mandioca, abacaxi nas posições definidas</li>
<li>Semear milho e feijão nas entrelinhas</li>
<li>Cobrir todo o solo com matéria orgânica disponível (capim roçado, folhas, serragem)</li>
</ul>

<p><strong>Mês 3-6 (estabelecimento):</strong></p>
<ul>
<li>Capina seletiva (tirar apenas o que compete diretamente com as mudas)</li>
<li>Irrigar mudas se não chover por mais de 15 dias</li>
<li>Primeira colheita de folhosas (alface, couve) se plantou horta</li>
<li>Podar adubação verde e distribuir a biomassa como cobertura</li>
</ul>

<p><strong>Mês 6-12:</strong></p>
<ul>
<li>Colheita de milho, feijão, mandioca</li>
<li>Segunda rodada de adubação verde</li>
<li>Primeira poda de condução nas árvores</li>
<li>Replantio de falhas</li>
</ul>

<p><strong>Ano 2-3:</strong></p>
<ul>
<li>Banana e mamão começam a produzir</li>
<li>Poda regular das adubadeiras para gerar biomassa</li>
<li>Redução gradual das capinas (o sistema começa a se fechar)</li>
<li>Primeiras frutas de ciclo médio</li>
</ul>

<p><strong>Ano 3-5+:</strong></p>
<ul>
<li>Sistema estabilizado — trabalho de manejo diminui significativamente</li>
<li>Frutíferas em plena produção</li>
<li>Solo visivelmente melhorado (mais escuro, mais úmido, mais vida)</li>
<li>Madeireiras em crescimento — receita futura acumulando</li>
</ul>

<h2>Passo 6: Defina a escala e comece pequeno</h2>

<p>Um erro comum é querer implantar 1 hectare de SAF de uma vez sem experiência. O manejo nos primeiros meses é intenso, e sem prática você não vai dar conta.</p>

<p><strong>Recomendação prática:</strong></p>

<ul>
<li><strong>Primeira experiência:</strong> comece com 500-1.000 m² (meio hectare ou menos). Isso é suficiente para aprender o manejo, testar espécies e gerar alimento para a família.</li>
<li><strong>Expansão:</strong> depois de um ciclo completo (1 ano), amplie para a área desejada. Você vai errar menos e gastar menos.</li>
<li><strong>Escala comercial:</strong> SAFs comerciais no Brasil operam com 2-10 hectares por família, dependendo do grau de mecanização e da mão de obra disponível.</li>
</ul>

<h2>Passo 7: Onde buscar orientação técnica</h2>

<p>Se você nunca implantou um SAF, buscar orientação técnica faz diferença enorme. Opções disponíveis:</p>

<ul>
<li><strong>EMATER do seu estado:</strong> assistência técnica gratuita para agricultura familiar. Qualidade varia por estado, mas é o primeiro recurso a consultar.</li>
<li><strong><a href="https://www.senar.org.br/" target="_blank" rel="noopener">SENAR</a>:</strong> cursos presenciais gratuitos de SAF em vários estados. Calendário no site.</li>
<li><strong><a href="https://www.embrapa.br/" target="_blank" rel="noopener">EMBRAPA</a>:</strong> publicações técnicas gratuitas (livro "Agrofloresta – Aprendendo a produzir com a natureza" é excelente para iniciantes).</li>
<li><strong><a href="https://pretaterra.com/" target="_blank" rel="noopener">Pretaterra</a>:</strong> consultoria especializada em design agroflorestal. Projeta sistemas comerciais com análise de viabilidade econômica.</li>
<li><strong><a href="https://agendagotsch.com/" target="_blank" rel="noopener">Agenda Götsch</a>:</strong> cursos e formações sobre agrofloresta sucessional, baseados no método Ernst Götsch.</li>
<li><strong>Grupos locais:</strong> redes de agroecologia e associações de produtores orgânicos existem em quase todos os estados. O contato com quem já faz é insubstituível.</li>
</ul>

<h2>Próximo passo: saber o que comprar</h2>

<p>Com o plano em mãos, o próximo passo prático é entender os equipamentos e ferramentas necessários — e o que é dispensável no começo. Veja em <a href="${pageHref(SLUG_EQUIPAMENTOS)}">Equipamentos e ferramentas para agrofloresta</a>.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'callout',
      content: 'Dica: o livro gratuito "Sistemas Agroflorestais na Agricultura Familiar" da FAEP/SENAR-PR é um dos melhores materiais em português para planejamento de SAF. Disponível para download no site da FAEP.',
      calloutType: 'tip',
    },
    allGuideLinks(SLUG_PLANEJAR),
    { type: 'adSlot', slotId: 'agro-planejar-bottom', format: 'responsive' },
  ],
}

// ─────────────────────────────────────────────
// PÁGINA 3: EQUIPAMENTOS E FERRAMENTAS
// ─────────────────────────────────────────────

const pageEquipamentos: PageSchema = {
  id: 'agro-equipamentos', siteKey: SITE_KEY, type: 'article', slug: SLUG_EQUIPAMENTOS,
  title: 'Equipamentos e ferramentas para agrofloresta', status: 'published',
  meta: { title: 'Equipamentos e ferramentas para agrofloresta: do facão ao motocultivador', description: 'O que você precisa para implantar e manejar um SAF: ferramentas manuais, motocultivador, roçadeira, trincha — com marcas e faixas de preço.' },
  blocks: [
    breadcrumb('Equipamentos', SLUG_EQUIPAMENTOS),
    {
      type: 'articleContent',
      html: `
<p>A agrofloresta não exige maquinário pesado — na verdade, máquinas grandes podem causar mais mal do que bem se usadas sem critério (compactação de solo, dano a raízes, destruição de mudas). O que você precisa depende da escala: para uma horta agroflorestal de 500 m², ferramentas manuais resolvem. Para 1+ hectare, algum grau de mecanização leve economiza muito trabalho.</p>

<p>Aqui está o que funciona, dividido por fase e por escala — com marcas reais e faixas de preço atualizadas.</p>

<h2>Ferramentas manuais essenciais</h2>

<p>Essas ferramentas são a base do trabalho em qualquer escala. Invista em qualidade aqui — uma boa foice ou tesoura de poda dura anos e faz diferença enorme na produtividade diária.</p>

<ul>
<li><strong>Foice:</strong> para roçada manual e corte de biomassa. Modelos com lâmina curva são melhores para capim alto. Tramontina e Corneta são marcas confiáveis. R$ 30-80.</li>
<li><strong>Facão:</strong> uso geral — corte de galhos, abertura de trilha, preparo de estacas. Tramontina Bolo ou Corneta. R$ 25-60.</li>
<li><strong>Enxadão:</strong> para cavar covas, revolver solo e incorporar matéria orgânica. Prefira cabo longo e lâmina larga. R$ 40-90.</li>
<li><strong>Cavadeira articulada:</strong> para abrir covas para mudas de árvore. Muito mais eficiente que enxadão para esse fim. R$ 80-150.</li>
<li><strong>Tesoura de poda:</strong> para poda de condução, colheita de frutas e manejo fino. Tramontina Supercort ou Felco (premium). R$ 40-250.</li>
<li><strong>Serrote de poda:</strong> para galhos mais grossos (3-10 cm). Prefira modelos com lâmina curva e dentes alternados. R$ 30-100.</li>
<li><strong>Podadora de altura (tesoura com extensão):</strong> para podar galhos altos sem escada. Essencial a partir do ano 3, quando as árvores crescem. R$ 100-300.</li>
<li><strong>Carrinho de mão:</strong> transporte de mudas, terra, biomassa. R$ 150-350.</li>
<li><strong>Regador ou mangueira:</strong> irrigação das mudas nos primeiros meses. R$ 20-100.</li>
</ul>

<p><strong>Investimento total em ferramentas manuais:</strong> R$ 500-1.500 para um kit completo de qualidade.</p>

<h2>Mecanização leve: motocultivador e implementos</h2>

<img src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=900&q=80" alt="Agricultor preparando solo com equipamento em pequena propriedade" style="width:100%;border-radius:8px;margin:1em 0" />

<p>O motocultivador (também chamado de tratorito) é o equipamento que mais transforma a produtividade de um SAF a partir de 2.000 m². Ele prepara o solo, roça entrelinhas, tritura biomassa e até transporta carga com carreta acoplada. É compacto o suficiente para passar entre linhas de árvores sem causar dano.</p>

<h3>Principais modelos no Brasil</h3>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'comparisonTable',
      headers: ['Modelo', 'Potência', 'Combustível', 'Peso', 'Faixa de preço', 'Indicação'],
      rows: [
        { label: 'Branco BTTG 6.5', values: ['6,5 HP', 'Gasolina', '85 kg', 'R$ 3.500-4.500', 'Hortas e pequenas áreas'] },
        { label: 'Stihl MH-710', values: ['6,3 HP', 'Gasolina', '67 kg', 'R$ 5.000-6.500', 'Uso versátil, mais leve'] },
        { label: 'Toyama TT90R', values: ['9 HP', 'Diesel', '135 kg', 'R$ 6.000-8.000', 'Solos pesados, uso intenso'] },
        { label: 'Branco BTTD 10', values: ['10 HP', 'Diesel', '158 kg', 'R$ 7.000-9.500', 'Maior área, uso profissional'] },
        { label: 'Husqvarna TR 430', values: ['5,5 HP', 'Gasolina', '55 kg', 'R$ 4.500-5.500', 'Leve, hortas intensivas'] },
      ],
    },
    {
      type: 'articleContent',
      html: `
<h3>Implementos para motocultivador</h3>

<p>O motocultivador sozinho ara o solo com enxadas rotativas. Mas os implementos ampliam enormemente sua utilidade no SAF:</p>

<ul>
<li><strong>Roçadeira frontal (MáquinaFort RF-500):</strong> acopla na frente do motocultivador e roça entrelinhas com 50 cm de largura. R$ 1.500-2.500. Fundamental para manejo de capim nas entrelinhas sem usar herbicida.</li>
<li><strong>Trincha trituradora:</strong> tritura galhos e capim e distribui como cobertura de solo. Usada pela <a href="https://pretaterra.com/" target="_blank" rel="noopener">Pretaterra</a> em SAFs comerciais para substituir a roçadeira com vantagem — o material triturado protege o solo melhor. R$ 2.000-4.000.</li>
<li><strong>Sulcador:</strong> abre sulcos uniformes para plantio em linha. Útil para milho, feijão e mandioca. R$ 300-600.</li>
<li><strong>Carreta:</strong> transforma o motocultivador em veículo de transporte. Capacidade de 200-500 kg. R$ 1.000-2.500.</li>
<li><strong>Polia redutora:</strong> reduz a velocidade para trabalhos que exigem mais tração e menos velocidade (solo compactado). R$ 200-500.</li>
</ul>

<h2>Roçadeira costal</h2>

<p>Para áreas onde o motocultivador não entra (entre árvores, terrenos inclinados, áreas com muitas mudas pequenas), a roçadeira costal é a ferramenta certa. Principais opções:</p>

<ul>
<li><strong>Stihl FS 235:</strong> referência de mercado, 2,2 HP, boa relação peso/potência. R$ 2.500-3.500.</li>
<li><strong>Husqvarna 236R:</strong> concorrente direto, motor 2 tempos, boa potência. R$ 2.800-3.800.</li>
<li><strong>Stihl FS 120:</strong> modelo mais leve, bom para capim fino e manutenção leve. R$ 1.500-2.200.</li>
</ul>

<p><strong>Dica importante:</strong> em SAF, prefira usar fio de nylon ou lâmina de 2 pontas em vez de disco de 3 pontas. O disco corta mudas e raízes com facilidade — um descuido e você perde uma frutífera de 2 anos.</p>

<h2>Irrigação</h2>

<p>Para SAFs em fase de implantação (primeiros 6-12 meses), irrigação pode ser necessária se a chuva falhar. Opções por escala:</p>

<ul>
<li><strong>Pequena escala (até 500 m²):</strong> mangueira + regador. R$ 50-200.</li>
<li><strong>Média escala (500 m²-5.000 m²):</strong> motobomba pequena + mangueira ou aspersores. Motobomba Branco ou Toyama 2" custa R$ 800-1.500.</li>
<li><strong>Maior escala (5.000 m²+):</strong> sistema de gotejamento ou microaspersão com bomba solar. Kit de gotejamento para 1.000 m² custa R$ 300-600. Bomba solar de superfície: R$ 1.500-4.000.</li>
</ul>

<p>Quando a agrofloresta amadurece (3-5 anos), a cobertura de solo e a sombra das árvores retêm umidade suficiente para dispensar irrigação na maioria dos biomas brasileiros — exceto em semiárido prolongado.</p>

<p>Aliás, se você tem propriedade rural e precisa de bombeamento com energia solar, veja nosso <a href="${SOLAR_SITE}">guia de energia solar</a> — uma bomba solar pode irrigar seu SAF sem custo de energia.</p>

<h2>O que NÃO comprar no início</h2>

<p>Não caia na tentação de equipar-se antes de plantar. Muita gente compra trator, perfurador de solo e pulverizador antes de ter um SAF funcionando. Comece com ferramentas manuais + um motocultivador (se a área justificar). Expanda o arsenal conforme a necessidade real aparece.</p>

<h2>Próximo passo: o trabalho que vem depois do plantio</h2>

<p>Equipamento comprado, SAF implantado — agora começa o manejo. Poda, capina seletiva, cobertura de solo: o trabalho contínuo que faz a agrofloresta funcionar. Veja em <a href="${pageHref(SLUG_MANEJO)}">Manejo, poda e biomassa</a>.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    allGuideLinks(SLUG_EQUIPAMENTOS),
    { type: 'adSlot', slotId: 'agro-equip-bottom', format: 'responsive' },
  ],
}

// ─────────────────────────────────────────────
// PÁGINA 4: MANEJO, PODA E BIOMASSA (profundidade extra)
// ─────────────────────────────────────────────

const pageManejo: PageSchema = {
  id: 'agro-manejo', siteKey: SITE_KEY, type: 'article', slug: SLUG_MANEJO,
  title: 'Manejo, poda e biomassa', status: 'published',
  meta: { title: 'Manejo, poda e biomassa: como cuidar da agrofloresta depois de plantar', description: 'O trabalho contínuo que faz o SAF funcionar: poda de condução, capina seletiva, cobertura de solo, adubação verde e manejo da fertilidade.' },
  blocks: [
    breadcrumb('Manejo', SLUG_MANEJO),
    {
      type: 'articleContent',
      html: `
<p>Plantar é 20% do trabalho. Os outros 80% são manejo — e é aqui que a agrofloresta se diferencia de qualquer outro sistema agrícola. O manejo agroflorestal não é "manutenção" no sentido de consertar o que quebra. É a prática ativa de conduzir o sistema rumo à maturidade, imitando os processos que a floresta faz naturalmente mas em ritmo acelerado.</p>

<p>Esta página cobre tudo o que você precisa fazer depois de plantar — dividido por tipo de manejo e por fase do sistema.</p>

<h2>Poda: a operação mais importante do SAF</h2>

<p>A poda é o que diferencia um SAF funcional de um matagal. Sem poda, as espécies de crescimento rápido sufocam as de crescimento lento, e o sistema perde produtividade. Com poda bem feita, você controla a luz, produz biomassa para o solo e estimula a produção de frutos.</p>

<h3>Tipos de poda em agrofloresta</h3>

<p><strong>Poda de condução (formação):</strong> feita nas árvores jovens para direcionar o crescimento. Remove brotos laterais baixos e define a forma da copa. Objetivo: árvore com tronco reto e copa alta, deixando luz para os estratos inferiores. Frequência: a cada 3-6 meses nos primeiros 2 anos.</p>

<p><strong>Poda de produção:</strong> feita em frutíferas para estimular floração e frutificação. Cada espécie tem seu momento ideal — citros após a colheita, mangueira no início da seca, bananeira após o cacho. Consultar o calendário da sua região.</p>

<p><strong>Poda drástica (rebaixamento):</strong> corte severo de espécies adubadeiras (ingá, leucena, gliricídia) para gerar grande volume de biomassa de uma vez. A planta rebrota e o ciclo se repete. Frequência: 2-4 vezes por ano, dependendo do crescimento.</p>

<p><strong>Poda de luz:</strong> remoção seletiva de galhos que estão sombreando demais espécies que precisam de sol. É a poda mais delicada — exige observação do sistema e decisão caso a caso.</p>

<h3>Regras práticas de poda</h3>

<ul>
<li>Sempre cortar acima de um nó ou gema — corte no internó mata o ramo</li>
<li>Usar ferramenta afiada e limpa — corte rasgado favorece doenças</li>
<li>Todo material podado fica no sistema — distribuir como cobertura de solo na base das plantas</li>
<li>Podar preferencialmente no período seco — reduz risco de fungos no corte</li>
<li>Nunca podar mais de 50% da copa de uma árvore produtiva de uma vez — estresse excessivo reduz produção</li>
</ul>

<img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80" alt="Manejo de plantas em sistema diversificado com diferentes espécies crescendo juntas" style="width:100%;border-radius:8px;margin:1em 0" />

<h2>Capina seletiva: o que tirar e o que deixar</h2>

<p>Na agrofloresta, você não capina tudo — capina seletivamente. A ideia é remover apenas as plantas que competem diretamente com as espécies produtivas por luz, água ou nutrientes. O resto fica, porque contribui com cobertura de solo, raízes que descompactam e habitat para insetos benéficos.</p>

<p><strong>O que tirar:</strong></p>
<ul>
<li>Gramíneas agressivas (braquiária, capim-colonião) que sufocam mudas</li>
<li>Trepadeiras que cobrem copas de frutíferas</li>
<li>Espécies alelopáticas que inibem o crescimento de vizinhas</li>
</ul>

<p><strong>O que deixar:</strong></p>
<ul>
<li>Espécies de cobertura rasteira que protegem o solo</li>
<li>Espontâneas que fixam nitrogênio (leguminosas nativas)</li>
<li>Plantas que atraem polinizadores (flores diversas)</li>
<li>Ervas que servem de indicador de fertilidade do solo</li>
</ul>

<p>Com o tempo, a capina seletiva se torna menos frequente. Conforme as árvores crescem e sombreiam o solo, as gramíneas agressivas perdem vigor e são substituídas por espécies de sombra mais dóceis.</p>

<h2>Cobertura de solo: a regra número um</h2>

<p>Solo exposto em agrofloresta é proibido. Sempre. O solo precisa estar coberto — com matéria orgânica (folhas, capim roçado, galhos triturados), com plantas vivas rasteiras ou com ambos.</p>

<p>A cobertura faz quatro coisas essenciais:</p>

<ul>
<li><strong>Protege contra erosão:</strong> a chuva não bate direto no solo</li>
<li><strong>Mantém umidade:</strong> reduz evaporação em até 70%</li>
<li><strong>Alimenta o solo:</strong> a matéria orgânica se decompõe e vira nutriente</li>
<li><strong>Suprime mato:</strong> camada espessa de cobertura impede germinação de gramíneas</li>
</ul>

<p><strong>Quanto colocar:</strong> camada de 10-20 cm de material sobre o solo, reaplicada sempre que afinar. Parece muito, mas essa camada reduz em 2-3 vezes a necessidade de capina e irrigação.</p>

<p><strong>De onde vem o material:</strong> da própria agrofloresta. Poda das adubadeiras, capina seletiva, folhas caídas, galhos triturados. Em SAF maduro, o sistema produz biomassa suficiente para se autocobrir. Nos primeiros anos, pode ser necessário trazer material de fora (capim de beira de estrada, serragem, bagaço).</p>

<h2>Adubação verde: a fábrica de fertilidade</h2>

<p>Espécies de adubação verde são o motor de fertilidade do SAF. Elas fixam nitrogênio do ar, produzem biomassa rapidamente e, quando podadas ou incorporadas ao solo, liberam nutrientes para as plantas vizinhas.</p>

<h3>Espécies mais usadas</h3>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'comparisonTable',
      headers: ['Espécie', 'Ciclo', 'Fixação de N', 'Biomassa', 'Uso no SAF'],
      rows: [
        { label: 'Crotalária juncea', values: ['90-120 dias', 'Alta', 'Alta (20-40 t/ha)', 'Entrelinha, corte antes da semente'] },
        { label: 'Feijão-de-porco', values: ['90-150 dias', 'Alta', 'Média', 'Entrelinha, tolera sombra parcial'] },
        { label: 'Mucuna-preta', values: ['150-180 dias', 'Muito alta', 'Alta', 'Cobertura densa, cuidado: pode cobrir mudas'] },
        { label: 'Guandu (feijão-guandu)', values: ['Perene (2-3 anos)', 'Alta', 'Alta', 'Entrelinha permanente, poda frequente'] },
        { label: 'Ingá (I. edulis)', values: ['Perene (árvore)', 'Muito alta', 'Muito alta', 'Linha de árvores, sombreamento + biomassa'] },
        { label: 'Gliricídia', values: ['Perene (árvore)', 'Alta', 'Alta', 'Cerca viva, poda drástica, estacas vivas'] },
      ],
    },
    {
      type: 'adSlot',
      slotId: 'agro-manejo-mid',
      format: 'responsive',
    },
    {
      type: 'articleContent',
      html: `
<h2>Calendário de manejo por fase do sistema</h2>

<p><strong>Ano 1 (estabelecimento):</strong> trabalho intenso. Capina seletiva a cada 15-30 dias. Irrigação quando necessário. Primeira poda de condução. Replantio de falhas. Cobertura constante do solo.</p>

<p><strong>Ano 2 (crescimento):</strong> trabalho moderado. Capina menos frequente (mensal). Podas de condução e produção. Poda drástica das adubadeiras para gerar biomassa. Primeiras colheitas significativas de frutas.</p>

<p><strong>Ano 3-5 (estabilização):</strong> trabalho diminui pela metade. O sistema começa a se autogerir. Capina esporádica. Podas de produção e luz. Solo se mantém coberto naturalmente. Colheita diversificada.</p>

<p><strong>Ano 5+ (maturidade):</strong> manejo leve. Podas anuais de produção. Colheita como principal atividade. Solo fértil e autossuficiente em nutrientes. Eventual raleamento de árvores que competem demais.</p>

<h2>Manejo da fertilidade sem adubo químico</h2>

<p>SAF maduro não precisa de adubo externo — mas SAF em implantação pode precisar de correção inicial:</p>

<ul>
<li><strong>Calagem:</strong> calcário para corrigir pH ácido. Aplicar 30-60 dias antes do plantio. Quantidade definida pela análise de solo. R$ 200-500/tonelada.</li>
<li><strong>Fosfato natural:</strong> fonte de fósforo de liberação lenta, ideal para SAF. Termofosfato Yoorin ou fosfato de rocha. Aplicar nas covas no plantio. R$ 80-150/saco 25 kg.</li>
<li><strong>Composto orgânico:</strong> se disponível, aplicar nas covas e como cobertura. Esterco curtido de gado, cama de frango, composto de feira. R$ 100-300/m³.</li>
<li><strong>Bokashi:</strong> fertilizante orgânico fermentado, rico em microrganismos benéficos. Pode ser feito em casa ou comprado pronto. R$ 30-80/kg.</li>
</ul>

<p>A partir do ano 2-3, a ciclagem de nutrientes pelas folhas caídas, poda das adubadeiras e atividade microbiana do solo geralmente supre as necessidades do sistema. Se alguma espécie apresentar deficiência visível (folhas amareladas, crescimento lento), o diagnóstico deve ser pontual — não aplicação generalizada de adubo.</p>

<h2>Polinização: aliadas naturais do SAF</h2>

<p>SAFs são ambientes ideais para abelhas e outros polinizadores. A diversidade de flores ao longo do ano garante alimento contínuo. Se o tema te interessa, abelhas sem ferrão (meliponas) são especialmente compatíveis com SAF — veja nosso <a href="${MELIPO_SITE}">guia de meliponicultura</a> para saber como integrar.</p>

<h2>Próximo passo: saber quanto vai custar</h2>

<p>Agora que você entende o trabalho envolvido, é hora de calcular os custos — tanto de implantação quanto de manutenção — e entender quando o sistema começa a dar retorno. Veja em <a href="${pageHref(SLUG_CUSTO)}">Quanto custa e quanto rende uma agrofloresta</a>.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    allGuideLinks(SLUG_MANEJO),
    { type: 'adSlot', slotId: 'agro-manejo-bottom', format: 'responsive' },
  ],
}

// ─────────────────────────────────────────────
// PÁGINA 5: QUANTO CUSTA E QUANTO RENDE
// ─────────────────────────────────────────────

const pageCusto: PageSchema = {
  id: 'agro-custo', siteKey: SITE_KEY, type: 'article', slug: SLUG_CUSTO,
  title: 'Quanto custa e quanto rende uma agrofloresta', status: 'published',
  meta: { title: 'Quanto custa implantar e quanto rende uma agrofloresta', description: 'Custos reais de implantação de SAF por hectare, receita por fase, payback e comparação honesta com monocultura convencional.' },
  blocks: [
    breadcrumb('Quanto custa', SLUG_CUSTO),
    {
      type: 'articleContent',
      html: `
<p>A pergunta sobre custo em agrofloresta é mais complexa do que em outros investimentos, porque o retorno não é imediato nem uniforme. Você planta 30 espécies diferentes, colhe em momentos diferentes e a produtividade muda a cada ano conforme o sistema amadurece. Mas os números existem — e contam uma história favorável para quem tem paciência.</p>

<h2>Custo de implantação por hectare</h2>

<p>O custo varia enormemente conforme a escala, a região e o grau de mecanização. Aqui estão faixas realistas para diferentes perfis:</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'comparisonTable',
      headers: ['Item', 'Pequeno (até 0,5 ha)', 'Médio (0,5-2 ha)', 'Comercial (2-5 ha)'],
      rows: [
        { label: 'Preparo do solo', values: ['R$ 500-1.000', 'R$ 2.000-5.000', 'R$ 5.000-15.000'] },
        { label: 'Mudas e sementes', values: ['R$ 800-2.000', 'R$ 3.000-8.000', 'R$ 8.000-25.000'] },
        { label: 'Correção do solo (calagem + fósforo)', values: ['R$ 300-600', 'R$ 1.000-3.000', 'R$ 3.000-8.000'] },
        { label: 'Ferramentas e equipamentos', values: ['R$ 500-1.500', 'R$ 3.000-8.000', 'R$ 8.000-20.000'] },
        { label: 'Mão de obra (implantação)', values: ['Própria', 'R$ 2.000-5.000', 'R$ 10.000-30.000'] },
        { label: 'Irrigação (se necessário)', values: ['R$ 200-500', 'R$ 1.000-3.000', 'R$ 3.000-10.000'] },
        { label: 'Total estimado', values: ['R$ 2.300-5.600', 'R$ 12.000-32.000', 'R$ 37.000-108.000'] },
      ],
    },
    {
      type: 'articleContent',
      html: `
<p>Esses valores incluem o primeiro ano de implantação. A partir do ano 2, o custo de manutenção cai para 30-50% do custo inicial (principalmente mão de obra para poda e capina).</p>

<h2>Receita por fase</h2>

<p>A agrofloresta gera receita em ondas, conforme cada grupo de espécies entra em produção:</p>

<p><strong>Curto prazo (3-12 meses):</strong> hortaliças, milho, feijão, mandioca. Receita modesta mas imediata. R$ 2.000-8.000/ha/ano.</p>

<p><strong>Médio prazo (1-3 anos):</strong> banana, mamão, abacaxi, maracujá. Receita crescente. R$ 5.000-20.000/ha/ano.</p>

<p><strong>Longo prazo (3-10 anos):</strong> frutíferas perenes (citros, abacate, açaí), café sombreado, cacau. Receita estável e crescente. R$ 10.000-40.000/ha/ano.</p>

<p><strong>Muito longo prazo (10-20+ anos):</strong> madeira de lei (cedro, mogno, ipê). Uma única árvore de mogno com 20 anos pode valer R$ 3.000-10.000 em madeira serrada.</p>

<h2>Payback e comparação com monocultura</h2>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'comparisonTable',
      headers: ['Critério', 'SAF diversificado', 'Monocultura de grãos', 'Pasto extensivo'],
      rows: [
        { label: 'Investimento inicial/ha', values: ['R$ 8.000-25.000', 'R$ 3.000-5.000', 'R$ 1.000-3.000'] },
        { label: 'Receita bruta/ha/ano (estabilizado)', values: ['R$ 15.000-40.000', 'R$ 3.000-8.000', 'R$ 1.000-3.000'] },
        { label: 'Custo anual de manutenção/ha', values: ['R$ 3.000-8.000', 'R$ 2.000-4.000', 'R$ 500-1.500'] },
        { label: 'Payback', values: ['2-4 anos', '1-2 anos', '2-5 anos'] },
        { label: 'Tendência do solo', values: ['Melhora', 'Degrada', 'Degrada'] },
        { label: 'Diversificação de renda', values: ['Alta (5-20 produtos)', 'Nenhuma (1 produto)', 'Baixa'] },
        { label: 'Necessidade de agrotóxico', values: ['Zero', 'Alta', 'Moderada'] },
      ],
    },
    {
      type: 'callout',
      content: 'Dado importante: segundo a EMBRAPA, SAFs no bioma Mata Atlântica que combinam café, banana, palmito e madeira alcançam receita líquida de R$ 12.000-25.000/ha/ano a partir do ano 5, com custo de manutenção decrescente.',
      calloutType: 'info',
    },
    {
      type: 'adSlot',
      slotId: 'agro-custo-mid',
      format: 'responsive',
    },
    {
      type: 'articleContent',
      html: `
<img src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=900&q=80" alt="Diversidade de frutas e legumes orgânicos colhidos — resultado de sistema agroflorestal diversificado" style="width:100%;border-radius:8px;margin:1em 0" />

<h2>Onde vender a produção</h2>

<p>A diversidade de produtos do SAF abre canais de venda que monocultura não acessa:</p>

<ul>
<li><strong>Feiras orgânicas e agroecológicas:</strong> melhor margem por produto. Exige presença regular e certificação (ou OCS — Organismo de Controle Social).</li>
<li><strong>Venda direta (porta a porta, cestas):</strong> cresceu muito pós-pandemia. Modelo de assinatura mensal funciona bem para hortifruti diversificado.</li>
<li><strong>PAA e PNAE:</strong> Programa de Aquisição de Alimentos e Programa Nacional de Alimentação Escolar compram direto da agricultura familiar. Garantia de venda com preço justo. Limite de R$ 20.000/agricultor/ano no PAA.</li>
<li><strong>Restaurantes e chefs:</strong> demanda crescente por ingredientes frescos, orgânicos e diversos. SAF produz exatamente o que esse mercado quer.</li>
<li><strong>Agroindústria caseira:</strong> polpas congeladas, geleias, desidratados. Agrega valor e permite vender em épocas fora da safra.</li>
</ul>

<h2>Próximo passo: financiar a implantação</h2>

<p>Se os custos parecem altos para o seu bolso, existem linhas de crédito específicas para SAF com juros muito baixos e prazos longos. Veja em <a href="${pageHref(SLUG_FINANCIAMENTO)}">Financiamento e legislação</a>.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    allGuideLinks(SLUG_CUSTO),
    { type: 'adSlot', slotId: 'agro-custo-bottom', format: 'responsive' },
  ],
}

// ─────────────────────────────────────────────
// PÁGINA 6: FINANCIAMENTO E LEGISLAÇÃO
// ─────────────────────────────────────────────

const pageFinanciamento: PageSchema = {
  id: 'agro-financiamento', siteKey: SITE_KEY, type: 'article', slug: SLUG_FINANCIAMENTO,
  title: 'Financiamento e legislação para SAF', status: 'published',
  meta: { title: 'PRONAF Floresta, Código Florestal e financiamento para SAF', description: 'Linhas de crédito para agrofloresta, como acessar o PRONAF Floresta, SAF em Reserva Legal, CAR e regularização ambiental.' },
  blocks: [
    breadcrumb('Financiamento e legislação', SLUG_FINANCIAMENTO),
    {
      type: 'articleContent',
      html: `
<p>A agrofloresta é uma das atividades rurais com melhor suporte de financiamento público no Brasil. O governo federal, através do <a href="https://www.gov.br/pt-br/servicos/acessar-o-programa-nacional-de-fortalecimento-da-agricultura-familiar-pronaf" target="_blank" rel="noopener">PRONAF</a> e do Plano Safra, oferece linhas de crédito específicas para SAF com juros de 2-4% ao ano — muito abaixo do mercado. E a legislação ambiental incentiva o uso de SAF em áreas de Reserva Legal e APP, o que significa que você pode regularizar sua propriedade e gerar renda ao mesmo tempo.</p>

<h2>PRONAF Floresta: a linha de crédito para SAF</h2>

<p>O <a href="https://www.bb.com.br/site/agronegocios/investimentos/pronaf-abc-mais-floresta/" target="_blank" rel="noopener">PRONAF ABC+ Floresta</a> (anteriormente PRONAF Floresta) é a linha de crédito específica para financiar sistemas agroflorestais dentro da agricultura familiar.</p>

<h3>Condições do PRONAF Floresta (Safra 2025/2026)</h3>

<ul>
<li><strong>Teto:</strong> até R$ 60.000 para máquinas e equipamentos; até R$ 40.000 para demais finalidades</li>
<li><strong>Prazo:</strong> até 20 anos para SAF, com até 12 anos de carência</li>
<li><strong>Juros:</strong> 4% ao ano (para renda bruta familiar até R$ 100 mil)</li>
<li><strong>Requisito:</strong> Cadastro da Agricultura Familiar (CAF) ativo e projeto técnico</li>
<li><strong>Onde contratar:</strong> <a href="https://www.bb.com.br/" target="_blank" rel="noopener">Banco do Brasil</a>, <a href="https://www.bnb.gov.br/pronaf-floresta" target="_blank" rel="noopener">Banco do Nordeste</a>, <a href="https://www.bancoamazonia.com.br/" target="_blank" rel="noopener">Banco da Amazônia</a>, <a href="https://www.sicredi.com.br/" target="_blank" rel="noopener">Sicredi</a>, <a href="https://www.sicoob.com.br/" target="_blank" rel="noopener">Sicoob</a>, <a href="https://www.cresol.com.br/" target="_blank" rel="noopener">Cresol</a></li>
</ul>

<p>Detalhe importante: o prazo de 20 anos com carência de 12 é pensado para a realidade do SAF. Nos primeiros anos a renda é baixa e o trabalho é alto. A carência longa permite que o sistema amadureça e comece a gerar receita antes de você começar a pagar.</p>

<h2>Outras linhas de crédito</h2>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'comparisonTable',
      headers: ['Linha', 'Para quem', 'Teto', 'Juros', 'Prazo'],
      rows: [
        { label: 'PRONAF Floresta', values: ['Agricultura familiar com CAF', 'R$ 40-60 mil', '4% a.a.', 'Até 20 anos'] },
        { label: 'PRONAF B Agroecologia', values: ['Renda até R$ 50 mil/ano', 'R$ 12 mil', '0,5% a.a.', 'Até 3 anos'] },
        { label: 'PRONAF Custeio', values: ['Custeio de safra familiar', 'R$ 250 mil', '2-4% a.a.', 'Até 2 anos'] },
        { label: 'PRONAF Investimento', values: ['Infraestrutura na propriedade', 'R$ 400 mil', '4-6% a.a.', 'Até 10 anos'] },
        { label: 'Programa ABC+', values: ['Médios e grandes produtores', 'R$ 5 milhões', '7-8,5% a.a.', 'Até 12 anos'] },
      ],
    },
    {
      type: 'articleContent',
      html: `
<h3>Como acessar o crédito</h3>

<ol>
<li><strong>Obter o CAF</strong> (Cadastro da Agricultura Familiar) — feito gratuitamente nas EMATERs ou sindicatos rurais.</li>
<li><strong>Elaborar o projeto técnico</strong> — a EMATER do seu estado pode ajudar gratuitamente. Também vale contratar técnico particular (custo: R$ 500-2.000).</li>
<li><strong>Procurar a agência bancária</strong> mais próxima que opera com PRONAF (BB, BNB, Basa, cooperativas).</li>
<li><strong>Apresentar CAF + projeto + documentos</strong> da propriedade (escritura ou posse, CAR).</li>
<li><strong>Aguardar aprovação</strong> — prazo médio de 30-60 dias.</li>
</ol>

<h2>Legislação ambiental: SAF como solução</h2>

<p>O <a href="https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12651.htm" target="_blank" rel="noopener">Código Florestal (Lei 12.651/2012)</a> permite o uso de sistemas agroflorestais em duas situações estratégicas:</p>

<p><strong>Reserva Legal:</strong> em propriedades de até 4 módulos fiscais, a Reserva Legal pode ser recomposta com SAF, desde que mantenha espécies nativas no sistema. Isso significa que a área que legalmente precisa ser preservada pode também gerar renda — algo impossível com monocultura.</p>

<p><strong>APP de pequenas propriedades:</strong> em propriedades familiares, as Áreas de Preservação Permanente podem ser recompostas com SAF que incluam espécies nativas. Consultar a regra específica do seu estado.</p>

<h3>CAR e PRA</h3>

<p>O <strong>CAR</strong> (Cadastro Ambiental Rural) é obrigatório para todas as propriedades rurais e é pré-requisito para acessar crédito rural. Pode ser feito gratuitamente no <a href="https://www.car.gov.br/" target="_blank" rel="noopener">SICAR</a>.</p>

<p>O <strong>PRA</strong> (Programa de Regularização Ambiental) permite que proprietários com passivo ambiental (desmatamento em RL ou APP) regularizem a situação implantando SAF — ou seja, transformem uma obrigação legal em oportunidade de renda.</p>

<img src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=900&q=80" alt="Propriedade rural com áreas de cultivo diversificado e árvores em diferentes estágios" style="width:100%;border-radius:8px;margin:1em 0" />

<h2>Certificação orgânica para SAF</h2>

<p>Produtos de SAF podem ser certificados como orgânicos, o que agrega valor na venda. As duas formas mais acessíveis:</p>

<ul>
<li><strong>OCS (Organismo de Controle Social):</strong> certificação participativa gratuita, válida para venda direta ao consumidor e em feiras. Exige grupo de pelo menos 2 produtores e cadastro no MAPA.</li>
<li><strong>Certificação por auditoria:</strong> feita por certificadoras como IBD, Ecocert ou IMO. Custo anual de R$ 2.000-5.000. Necessária para vender em supermercados com selo orgânico.</li>
</ul>

<h2>Conclusão do guia</h2>

<p>Você percorreu todo o guia: entendeu <a href="${pageHref(SLUG_O_QUE_E)}">o que é um SAF</a>, aprendeu <a href="${pageHref(SLUG_PLANEJAR)}">como planejar</a>, conheceu <a href="${pageHref(SLUG_EQUIPAMENTOS)}">os equipamentos</a>, sabe <a href="${pageHref(SLUG_MANEJO)}">como fazer o manejo</a>, calculou <a href="${pageHref(SLUG_CUSTO)}">custos e receitas</a> e agora conhece o financiamento e a legislação que viabilizam tudo isso.</p>

<p>O próximo passo é prático: faça uma análise do seu terreno, visite a EMATER da sua região, converse com quem já faz e comece — de preferência pequeno, com um pedaço do terreno que você possa manejar nos primeiros meses sem se sobrecarregar.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    allGuideLinks(SLUG_FINANCIAMENTO),
    { type: 'adSlot', slotId: 'agro-financiamento-bottom', format: 'responsive' },
  ],
}

// ─────────────────────────────────────────────
// EDITORIAIS
// ─────────────────────────────────────────────

const editorialErros: PageSchema = {
  id: 'agro-ed-erros', siteKey: SITE_KEY, type: 'article', slug: SLUG_ED_ERROS,
  title: '6 erros que travam uma agrofloresta nos primeiros anos', status: 'published',
  meta: { title: '6 erros que travam uma agrofloresta nos primeiros anos', description: 'Erros comuns em SAF: não planejar, escolher espécies erradas, abandonar o manejo, plantar tudo de uma vez e ignorar o solo.' },
  blocks: [
    breadcrumb('Erros comuns', SLUG_ED_ERROS),
    {
      type: 'articleContent',
      html: `
<p>A maioria dos SAFs que falham não falham por falta de chuva ou solo ruim. Falham por erros de planejamento ou manejo que poderiam ter sido evitados. Aqui estão os seis mais comuns.</p>

<h2>1. Plantar sem planejamento</h2>
<p>O erro número um. Sair colocando mudas no chão sem definir espaçamento, consórcios, cronograma e objetivo. Resultado: espécies que competem entre si, entrelinhas intransitáveis, impossibilidade de mecanização e frustração no ano 2. Solução: leia <a href="${pageHref(SLUG_PLANEJAR)}">Como planejar sua agrofloresta</a> antes de comprar a primeira muda.</p>

<h2>2. Escolher espécies por entusiasmo, não por adequação</h2>
<p>Plantar açaí no Cerrado ou cacau em clima subtropical porque "viu no YouTube". Cada bioma tem espécies que funcionam e espécies que morrem. Consulte a <a href="https://www.embrapa.br/" target="_blank" rel="noopener">EMBRAPA</a> da sua região antes de investir em mudas exóticas ao seu clima.</p>

<h2>3. Abandonar o manejo nos primeiros meses</h2>
<p>Agrofloresta não é "plantar e esquecer". Os primeiros 6 meses exigem capina seletiva frequente (quinzenal), irrigação quando não chove e replantio de falhas. Quem planta e volta só em 3 meses encontra mato cobrindo tudo e mudas mortas. Se não tem tempo para manejar, não implante mais área do que consegue cuidar.</p>

<h2>4. Querer escala antes de ter experiência</h2>
<p>Implantar 2 hectares de SAF na primeira tentativa sem nunca ter manejado um canteiro. O resultado quase sempre é desistência. Comece com 500-1.000 m², aprenda os ritmos, erre barato. Depois amplie.</p>

<h2>5. Não cobrir o solo</h2>
<p>Solo exposto em SAF é garantia de erosão, perda de umidade e mato agressivo. A cobertura de solo (capim roçado, folhas, galhos triturados) é a operação mais barata e mais impactante que você pode fazer. Camada de 10-20 cm, sempre. Ver detalhes em <a href="${pageHref(SLUG_MANEJO)}">Manejo, poda e biomassa</a>.</p>

<h2>6. Ignorar o mercado</h2>
<p>Produzir 500 kg de fruta sem saber para quem vender. Antes de plantar, mapeie: tem feira orgânica na região? Tem restaurante que compra direto? Tem PAA ou PNAE operando? A melhor agrofloresta do mundo não funciona como negócio se a produção não encontra comprador.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    allGuideLinks(SLUG_ED_ERROS),
  ],
}

const editorialSolar: PageSchema = {
  id: 'agro-ed-solar', siteKey: SITE_KEY, type: 'article', slug: SLUG_ED_SOLAR,
  title: 'Energia solar na propriedade rural: como combinar com agrofloresta', status: 'published',
  meta: { title: 'Energia solar na propriedade rural: como combinar com agrofloresta', description: 'Como usar energia solar para irrigação, bombeamento e eletrificação em propriedades rurais com SAF — equipamentos, custos e financiamento.' },
  blocks: [
    breadcrumb('Agrofloresta e energia solar', SLUG_ED_SOLAR),
    {
      type: 'articleContent',
      html: `
<p>Propriedades rurais que operam com agrofloresta frequentemente precisam de energia para irrigação, bombeamento de água, cerca elétrica, iluminação e processamento de alimentos (polpas, desidratados). Em muitos casos, a rede elétrica não chega — ou chega cara. Energia solar resolve esse problema de forma limpa e com retorno financeiro comprovado.</p>

<h2>Três aplicações práticas de energia solar em SAF</h2>

<h3>1. Bombeamento de água solar</h3>
<p>Uma bomba solar de superfície (R$ 1.500-4.000) alimentada por 1-2 painéis fotovoltaicos pode irrigar 1-5 hectares de SAF em fase de implantação. Não tem custo de energia, não precisa de rede elétrica e funciona exatamente quando mais se precisa — nos dias de sol. Marcas como <strong>Anauger</strong>, <strong>Shurflo</strong> e <strong>Grundfos</strong> têm modelos específicos para uso rural.</p>

<h3>2. Eletrificação off-grid</h3>
<p>Para propriedades sem rede elétrica, um sistema solar off-grid com baterias fornece energia para iluminação, geladeira (conservação de alimentos), celular e ferramentas elétricas. Um kit básico (4 painéis + baterias + inversor) custa R$ 8.000-15.000 e atende as necessidades básicas de uma casa rural.</p>

<h3>3. Cerca elétrica solar</h3>
<p>Eletrificadores solares para cerca custam R$ 300-800 e protegem a agrofloresta contra gado e animais silvestres sem necessidade de rede elétrica. Marcas como <strong>Zebu</strong> e <strong>Sentinela</strong> têm modelos compactos com painel embutido.</p>

<h2>Financiamento integrado</h2>

<p>O <a href="https://www.bb.com.br/site/agronegocios/investimentos/pronaf-abc-mais-floresta/" target="_blank" rel="noopener">PRONAF Floresta</a> permite financiar máquinas e equipamentos vinculados ao SAF — incluindo sistemas de irrigação solar. Ou seja, você pode financiar a agrofloresta e o sistema de bombeamento solar no mesmo contrato.</p>

<p>Para um guia completo sobre energia solar — como funciona, quanto custa, como escolher equipamentos e instalador — veja nosso <a href="${SOLAR_SITE}">Guia de Energia Solar Residencial</a>.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    allGuideLinks(SLUG_ED_SOLAR),
  ],
}

const editorialEspecies: PageSchema = {
  id: 'agro-ed-especies', siteKey: SITE_KEY, type: 'article', slug: SLUG_ED_ESPECIES,
  title: 'Espécies para agrofloresta por bioma', status: 'published',
  meta: { title: 'Espécies para agrofloresta por bioma: Mata Atlântica, Cerrado e Amazônia', description: 'Lista de espécies recomendadas para SAF por bioma brasileiro, com função no sistema, estrato e ciclo de produção.' },
  blocks: [
    breadcrumb('Espécies por bioma', SLUG_ED_ESPECIES),
    {
      type: 'articleContent',
      html: `
<p>A escolha de espécies é decisiva para o sucesso do SAF — e depende fundamentalmente do bioma onde você está. Uma espécie que prospera na Mata Atlântica pode morrer no Cerrado. Este editorial lista espécies testadas e documentadas pela <a href="https://www.embrapa.br/" target="_blank" rel="noopener">EMBRAPA</a> e por produtores experientes em cada bioma.</p>

<h2>Mata Atlântica</h2>
<p>Bioma com alta umidade, solo geralmente fértil e boa disponibilidade hídrica. Excelente para SAF diversificado com frutíferas tropicais e subtropicais.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'comparisonTable',
      headers: ['Espécie', 'Estrato', 'Função', 'Início de produção'],
      rows: [
        { label: 'Banana (Musa spp.)', values: ['Médio (3-5m)', 'Produtiva + sombreamento', '8-12 meses'] },
        { label: 'Café (Coffea arabica)', values: ['Baixo-médio (2-3m)', 'Produtiva (precisa de sombra)', '2-3 anos'] },
        { label: 'Palmito-juçara (Euterpe edulis)', values: ['Alto (8-15m)', 'Produtiva (palmito + polpa)', '6-8 anos'] },
        { label: 'Abacate (Persea americana)', values: ['Alto (8-12m)', 'Produtiva + estrutural', '3-5 anos'] },
        { label: 'Ingá (Inga edulis)', values: ['Médio-alto (6-15m)', 'Adubadora (fixa N) + sombra', '2-3 anos (fruto)'] },
        { label: 'Guapuruvu (Schizolobium parahyba)', values: ['Emergente (15-25m)', 'Pioneira rápida + madeira', '5-8 anos (madeira)'] },
        { label: 'Louro-pardo (Cordia trichotoma)', values: ['Alto (10-20m)', 'Madeira nobre', '12-20 anos'] },
      ],
    },
    {
      type: 'articleContent',
      html: `
<h2>Cerrado</h2>
<p>Solo ácido e pobre em fósforo, estação seca prolongada. Exige espécies adaptadas à seca e calagem na implantação. Mas o Cerrado tem frutas nativas de altíssimo valor de mercado.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'comparisonTable',
      headers: ['Espécie', 'Estrato', 'Função', 'Início de produção'],
      rows: [
        { label: 'Baru (Dipteryx alata)', values: ['Alto (10-15m)', 'Produtiva (castanha) + madeira', '5-8 anos'] },
        { label: 'Pequi (Caryocar brasiliense)', values: ['Alto (8-12m)', 'Produtiva (fruto)', '5-8 anos'] },
        { label: 'Mangaba (Hancornia speciosa)', values: ['Médio (3-6m)', 'Produtiva (fruto)', '3-5 anos'] },
        { label: 'Gueroba (Syagrus oleracea)', values: ['Alto (8-12m)', 'Produtiva (palmito amargo)', '5-7 anos'] },
        { label: 'Aroeira (Myracrodruon urundeuva)', values: ['Alto (10-15m)', 'Madeira + medicinal', '8-15 anos'] },
        { label: 'Eucalipto (Eucalyptus spp.)', values: ['Emergente (15-30m)', 'Pioneira rápida + lenha/madeira', '5-7 anos'] },
        { label: 'Mandioca', values: ['Baixo (1-2m)', 'Produtiva + renda imediata', '8-12 meses'] },
      ],
    },
    {
      type: 'articleContent',
      html: `
<h2>Amazônia</h2>
<p>Alta umidade e temperatura constante. Solo muitas vezes pobre (laterítico), mas com ciclagem de nutrientes intensa pela biomassa. O berço original dos SAFs tradicionais indígenas.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'comparisonTable',
      headers: ['Espécie', 'Estrato', 'Função', 'Início de produção'],
      rows: [
        { label: 'Açaí (Euterpe oleracea)', values: ['Alto (12-20m)', 'Produtiva (fruto de alto valor)', '3-5 anos'] },
        { label: 'Cacau (Theobroma cacao)', values: ['Médio (3-6m)', 'Produtiva (precisa sombra)', '3-4 anos'] },
        { label: 'Cupuaçu (Theobroma grandiflorum)', values: ['Médio (4-8m)', 'Produtiva (polpa + semente)', '3-5 anos'] },
        { label: 'Castanha-do-pará (Bertholletia excelsa)', values: ['Emergente (30-50m)', 'Produtiva + estrutural', '10-15 anos'] },
        { label: 'Pupunha (Bactris gasipaes)', values: ['Alto (10-15m)', 'Produtiva (palmito + fruto)', '2-3 anos (palmito)'] },
        { label: 'Paricá (Schizolobium amazonicum)', values: ['Emergente (20-30m)', 'Madeira de crescimento rápido', '5-7 anos'] },
        { label: 'Andiroba (Carapa guianensis)', values: ['Alto (15-25m)', 'Produtiva (óleo) + madeira', '8-12 anos'] },
      ],
    },
    {
      type: 'articleContent',
      html: `
<p><strong>Onde buscar mudas:</strong> viveiros credenciados pelo MAPA (Ministério da Agricultura), EMATERs estaduais, viveiros de nativas da sua região. Evite comprar mudas de procedência desconhecida — a qualidade genética e fitossanitária da muda afeta anos de produção.</p>

<p>Para o planejamento completo de quais espécies usar e como combinar em consórcios, veja <a href="${pageHref(SLUG_PLANEJAR)}">Como planejar sua agrofloresta</a>.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    allGuideLinks(SLUG_ED_ESPECIES),
  ],
}

// ─────────────────────────────────────────────
// EXPORT
// ─────────────────────────────────────────────

export const agroflorestaBrSite: SiteEntry = {
  config: {
    siteKey: SITE_KEY,
    publicName: 'Agrofloresta BR',
    routePath: ROUTE_PATH,
    locale: 'pt-BR',
    market: 'BR',
    status: 'active',
    ui: { showAllSitesLink: false },
    theme: {
      brandName: 'Agrofloresta BR',
      primaryColor: '#15803d',
      accentColor: '#166534',
      surfaceColor: '#f0fdf4',
      textColor: '#1a2e1a',
      radius: '12px',
      fontFamilyHeading: 'system-ui, -apple-system, sans-serif',
    },
    seo: {
      siteTitle: 'Agrofloresta BR',
      defaultTitleTemplate: '%s | Agrofloresta BR',
      defaultDescription: 'Guia prático de agrofloresta no Brasil. Planejamento, espécies, manejo, equipamentos, custos e financiamento para sistemas agroflorestais.',
      baseUrl: BASE_URL,
    },
    analytics: { ga4MeasurementId: 'G-C06N4NTLKR', enabled: true },
    monetization: {
      ads: { enabled: process.env.NEXT_PUBLIC_ADS_TEST_MODE !== 'true', provider: 'adsense', publisherId: 'ca-pub-7072076910984234' },
      affiliates: { enabled: false, programs: [] },
    },
  },
  pages: [
    homePage,
    pageOQueE,
    pagePlanejar,
    pageEquipamentos,
    pageManejo,
    pageCusto,
    pageFinanciamento,
    editorialErros,
    editorialSolar,
    editorialEspecies,
  ],
}
