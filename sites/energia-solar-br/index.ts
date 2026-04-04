/**
 * sites/energia-solar-br/index.ts
 * Energia Solar BR — Guia completo de energia solar residencial no Brasil
 */

import type {
  BreadcrumbBlock,
  PageSchema,
  RelatedLinksBlock,
  SiteEntry,
} from '../../core/types/contracts'
import { resolveSiteBaseUrl } from '../../config/site-url'

const SITE_KEY = 'energia-solar-br'
const ROUTE_PATH = 'energia-solar'
const BASE_URL = resolveSiteBaseUrl(ROUTE_PATH)
const PUBLISHED_AT = '2026-04-04'

const SLUG_COMO_FUNCIONA = 'como-funciona-energia-solar'
const SLUG_CUSTO = 'quanto-custa-e-quanto-economiza'
const SLUG_EQUIPAMENTOS = 'como-escolher-equipamentos'
const SLUG_INSTALADOR = 'como-escolher-instalador'
const SLUG_PASSO_A_PASSO = 'passo-a-passo-instalacao'
const SLUG_LEGISLACAO = 'legislacao-e-financiamento'
const SLUG_EDITORIAL_ERROS = 'erros-comuns-energia-solar'
const SLUG_EDITORIAL_MERCADO = 'mercado-solar-2026'
const SLUG_EDITORIAL_APTO = 'energia-solar-apartamento'

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
      { label: 'Página inicial: guia de energia solar', slug: 'home' },
      { label: 'Como funciona a energia solar residencial', slug: SLUG_COMO_FUNCIONA },
      { label: 'Quanto custa e quanto você economiza', slug: SLUG_CUSTO },
      { label: 'Como escolher painel e inversor', slug: SLUG_EQUIPAMENTOS },
      { label: 'Como escolher uma empresa instaladora', slug: SLUG_INSTALADOR },
      { label: 'Passo a passo da instalação', slug: SLUG_PASSO_A_PASSO },
      { label: 'Legislação, Fio B e financiamento', slug: SLUG_LEGISLACAO },
    ]
      .filter((item) => item.slug !== currentSlug)
      .map((item) => ({ label: item.label, href: pageHref(item.slug) })),
  }
}

// HOME

const homePage: PageSchema = {
  id: 'solar-home',
  siteKey: SITE_KEY,
  type: 'home',
  slug: 'home',
  title: 'Início',
  status: 'published',
  meta: {
    title: 'Energia Solar Residencial: guia completo para instalar em 2026',
    description: 'Guia prático de energia solar residencial. Veja como funciona, quanto custa, como escolher equipamento e instalador, e o que diz a legislação em 2026.',
  },
  blocks: [
    {
      type: 'hero',
      heading: 'Energia solar residencial: vale a pena em 2026?',
      subheading: 'Um guia direto para quem quer entender custos reais, economia possível e o que mudou na legislação — sem promessa de marketing.',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80',
      alt: 'Painéis solares instalados no telhado de uma residência sob céu azul',
      caption: 'Sistema fotovoltaico residencial: painéis no telhado geram energia que reduz a conta de luz em até 90%.',
    },
    {
      type: 'articleContent',
      html: `
<p>O Brasil tem mais de 3,7 milhões de sistemas solares instalados. A fonte fotovoltaica já é a segunda maior da matriz elétrica brasileira, com 64 GW de capacidade e mais de R$ 280 bilhões em investimentos acumulados desde 2012, segundo dados da <a href="https://www.absolar.org.br/" target="_blank" rel="noopener">ABSOLAR</a> atualizados em janeiro de 2026.</p>

<p>Mas números grandes não respondem a pergunta que realmente importa: <strong>faz sentido para a sua casa, com a sua conta de luz, no cenário de hoje?</strong></p>

<p>A resposta curta é: para a maioria das residências com conta acima de R$ 300/mês, sim. Um sistema bem dimensionado reduz a conta de luz entre 70% e 90%, se paga em 4 a 6 anos, e dura mais de 25. Mas existem armadilhas — desde empresas mal qualificadas até regras novas da <a href="https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14300.htm" target="_blank" rel="noopener">Lei 14.300/2022</a> que muita gente não conhece.</p>

<p>Este guia explica tudo o que você precisa saber para tomar uma decisão informada. Sem enrolação, com números reais e com os cuidados que ninguém costuma mencionar.</p>

<h2>O que você vai encontrar neste guia</h2>

<p>Organizamos o conteúdo na ordem em que as decisões acontecem na prática. Você pode ler tudo de uma vez ou ir direto ao ponto que precisa:</p>
      `,
      author: 'Equipe Energia Solar BR',
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'cardsGrid',
      cards: [
        { title: '1. Como funciona', description: 'Painel, inversor, medidor bidirecional, créditos de energia — o sistema explicado sem jargão técnico.', href: pageHref(SLUG_COMO_FUNCIONA) },
        { title: '2. Quanto custa e quanto economiza', description: 'Valores reais de mercado em 2026, simulação por faixa de consumo e comparação com outros investimentos.', href: pageHref(SLUG_CUSTO) },
        { title: '3. Como escolher equipamentos', description: 'Critérios para painel e inversor: eficiência, garantia, certificação e o que realmente diferencia marcas.', href: pageHref(SLUG_EQUIPAMENTOS) },
        { title: '4. Como escolher o instalador', description: 'O que verificar antes de contratar, erros comuns e as perguntas que evitam dor de cabeça.', href: pageHref(SLUG_INSTALADOR) },
        { title: '5. Passo a passo da instalação', description: 'Do orçamento à ativação: cada etapa com prazo real e o que depende de você vs. o que depende da concessionária.', href: pageHref(SLUG_PASSO_A_PASSO) },
        { title: '6. Legislação e financiamento', description: 'Lei 14.300, Fio B, isenção de ICMS e linhas de crédito — o que mudou e como isso afeta quem instala agora.', href: pageHref(SLUG_LEGISLACAO) },
      ],
    },
    {
      type: 'articleContent',
      html: `
<h2>O cenário de energia solar no Brasil em 2026</h2>

<p>Energia solar não é mais novidade no Brasil. É um mercado maduro, com mais de 1,9 milhão de empregos gerados e presença em todos os estados. Mas 2026 traz um cenário específico que vale entender antes de investir:</p>

<p><strong>O que está a seu favor:</strong> as tarifas de energia subiram acima da inflação nos últimos anos, e a tendência não é de queda. Cada reajuste aumenta a economia que o sistema solar gera. Além disso, os preços dos equipamentos caíram significativamente na última década — um sistema que custava R$ 50 mil em 2015 hoje sai por menos da metade.</p>

<p><strong>O que exige atenção:</strong> a <a href="https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14300.htm" target="_blank" rel="noopener">Lei 14.300/2022</a> introduziu a cobrança progressiva do Fio B — uma tarifa pelo uso da rede de distribuição — para novos sistemas. Em 2026, a cobrança está em 60% do valor cheio. Isso não inviabiliza o investimento (a economia ainda fica entre 70% e 82% da conta), mas muda o cálculo. Quem instala agora garante as condições atuais, que são melhores do que serão em 2027.</p>

<p>A Selic continua alta, perto de 15% ao ano, o que encarece o financiamento. Mas mesmo financiado, o sistema costuma se pagar antes do fim das parcelas — a economia mensal na conta de luz cobre parte ou todo o valor da prestação.</p>

<h2>Para quem este guia serve (e para quem não serve)</h2>

<p>Este guia foi pensado para quem mora em casa própria e paga mais de R$ 250/mês de luz. Se esse é o seu caso, a energia solar quase certamente faz sentido financeiro para você.</p>

<p>Se você mora em apartamento, também existem opções — como a geração distribuída por assinatura (GD compartilhada). Escrevemos um editorial específico sobre isso: <a href="${pageHref(SLUG_EDITORIAL_APTO)}">Energia solar para quem mora em apartamento</a>.</p>

<p>Se sua conta de luz é baixa (menos de R$ 150/mês), o sistema pode demorar mais para se pagar. Não é que não funcione — é que o retorno financeiro fica mais apertado. Nesse caso, vale calcular com cuidado antes de decidir.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'adSlot',
      slotId: 'solar-home-mid',
      format: 'responsive',
    },
    {
      type: 'articleContent',
      html: `
<h2>O que você precisa decidir (e em que ordem)</h2>

<p>A maioria das pessoas começa perguntando "quanto custa?" — e essa é a pergunta errada para começar. O custo depende de várias coisas que vêm antes:</p>

<p><strong>Primeiro:</strong> entenda como o sistema funciona. Não precisa virar engenheiro, mas saber o básico evita que você dependa 100% do vendedor. → <a href="${pageHref(SLUG_COMO_FUNCIONA)}">Como funciona a energia solar residencial</a></p>

<p><strong>Segundo:</strong> faça as contas. Não confie em "economia de até 95%" que aparece em propaganda. O número real depende do seu consumo, da sua tarifa e da sua região. → <a href="${pageHref(SLUG_CUSTO)}">Quanto custa e quanto você realmente economiza</a></p>

<p><strong>Terceiro:</strong> entenda o equipamento. Painel barato pode sair caro. Inversor subdimensionado limita o sistema. Garantia curta é risco. → <a href="${pageHref(SLUG_EQUIPAMENTOS)}">Como escolher painel solar e inversor</a></p>

<p><strong>Quarto:</strong> escolha bem o instalador. Essa é a decisão que mais gente erra, e a que mais custa quando dá errado. → <a href="${pageHref(SLUG_INSTALADOR)}">Como escolher uma empresa de energia solar</a></p>

<p><strong>Quinto:</strong> saiba o que vai acontecer. A instalação em si é rápida (1-3 dias), mas o processo completo envolve projeto, aprovação da concessionária e vistoria. → <a href="${pageHref(SLUG_PASSO_A_PASSO)}">Passo a passo da instalação</a></p>

<p><strong>Sexto:</strong> conheça as regras. A legislação solar brasileira mudou recentemente e afeta diretamente o retorno do investimento. Se for financiar, conheça as opções reais. → <a href="${pageHref(SLUG_LEGISLACAO)}">Legislação, Fio B e financiamento</a></p>

<h2>Três números que resumem a decisão</h2>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'stats',
      items: [
        { value: '70-90%', label: 'Redução na conta de luz com sistema bem dimensionado' },
        { value: '4-6 anos', label: 'Payback médio para residência no Sudeste' },
        { value: '25+ anos', label: 'Vida útil dos painéis solares' },
      ],
    },
    {
      type: 'articleContent',
      html: `
<p>Esses números são médias reais de mercado, não cenário otimista de vendedor. O payback varia conforme a região (no Nordeste tende a ser mais curto por causa da irradiação), a tarifa local e o dimensionamento do sistema.</p>

<h2>Erros mais comuns de quem instala energia solar</h2>

<p>Antes de mergulhar no guia, vale conhecer os erros que mais vemos. Eles aparecem em detalhe no editorial <a href="${pageHref(SLUG_EDITORIAL_ERROS)}">7 erros que mais custam caro na instalação de energia solar</a>, mas os principais são:</p>

<ul>
<li><strong>Escolher pelo menor preço.</strong> O equipamento mais barato quase sempre tem garantia curta, eficiência menor ou inversor subdimensionado. A diferença de preço se paga em 2-3 anos de produção perdida.</li>
<li><strong>Não verificar a empresa.</strong> Instalador sem homologação na <a href="https://www.aneel.gov.br/" target="_blank" rel="noopener">ANEEL</a>, sem CNPJ ativo ou sem portfólio verificável é risco alto. O mercado tem muita empresa oportunista.</li>
<li><strong>Superdimensionar o sistema.</strong> Instalar mais painéis do que o necessário não gera economia extra — você acumula créditos que podem virar prejuízo com as novas regras do Fio B.</li>
<li><strong>Ignorar sombreamento.</strong> Uma árvore, prédio vizinho ou caixa d'água mal posicionada pode reduzir a eficiência em até 50%. Nem toda empresa faz análise de sombra correta.</li>
</ul>

<h2>Comece pelo que importa</h2>

<p>Se você está começando do zero, a leitura mais útil é <a href="${pageHref(SLUG_COMO_FUNCIONA)}">Como funciona a energia solar residencial</a> — 10 minutos que vão fazer toda diferença nas conversas que você vai ter com integradores.</p>

<p>Se já sabe como funciona e quer ir direto aos números, vá para <a href="${pageHref(SLUG_CUSTO)}">Quanto custa e quanto você realmente economiza</a>.</p>

<p>Se já decidiu instalar e quer evitar erros, comece por <a href="${pageHref(SLUG_INSTALADOR)}">Como escolher uma empresa de energia solar</a>.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'callout',
      content: 'A energia solar é a segunda maior fonte da matriz elétrica brasileira, com 24,5% da capacidade de geração. São 64 GW instalados e 3,7 milhões de sistemas em operação em todo o país.',
      calloutType: 'info',
    },
    allGuideLinks('home'),
    {
      type: 'adSlot',
      slotId: 'solar-home-bottom',
      format: 'responsive',
    },
  ],
}

// PÁGINAS INTERNAS (stubs — expandir após aprovação do tom da home)

const pageComoFunciona: PageSchema = {
  id: 'solar-como-funciona', siteKey: SITE_KEY, type: 'article', slug: SLUG_COMO_FUNCIONA,
  title: 'Como funciona a energia solar residencial', status: 'published',
  meta: { title: 'Como funciona a energia solar residencial: do painel à conta de luz', description: 'Entenda como painéis solares geram energia, o papel do inversor, como funciona o medidor bidirecional e o sistema de créditos com a concessionária.' },
  blocks: [
    breadcrumb('Como funciona', SLUG_COMO_FUNCIONA),
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80',
      alt: 'Painéis solares fotovoltaicos de perto sob luz solar intensa',
    },
    {
      type: 'articleContent',
      html: `
<p>Antes de pedir orçamento ou conversar com qualquer instalador, vale investir 10 minutos para entender como um sistema solar residencial realmente funciona. Não é complicado — e esse conhecimento básico evita que você dependa exclusivamente do vendedor para tomar decisões.</p>

<p>A lógica é simples: painéis no telhado captam a luz do sol e a transformam em eletricidade. Um aparelho chamado inversor converte essa eletricidade para o formato que sua casa usa. E um medidor especial registra quanta energia você consumiu da rede e quanta injetou nela. Fim.</p>

<p>O que torna o assunto mais interessante são os detalhes — porque cada um deles afeta diretamente o quanto você vai economizar.</p>

<h2>O que são painéis solares e como geram eletricidade</h2>

<p>Os painéis solares fotovoltaicos são compostos por células feitas de silício — o mesmo material base dos chips de computador. Quando a luz do sol atinge essas células, ela provoca um movimento de elétrons que gera corrente elétrica. Esse fenômeno se chama efeito fotovoltaico, e foi descoberto em 1839 pelo físico francês Edmond Becquerel.</p>

<p>Na prática, cada painel é formado por 60 ou 72 células fotovoltaicas conectadas em série. Um painel residencial típico em 2026 tem potência entre 400 e 600 watts-pico (Wp) e mede aproximadamente 1,7 x 1,1 metros. A eficiência dos painéis comerciais atuais fica entre 20% e 22% — ou seja, eles convertem cerca de um quinto da energia solar que recebem em eletricidade.</p>

<p>Um detalhe importante: os painéis geram corrente contínua (CC), que é o mesmo tipo de corrente de uma pilha ou bateria. Mas os aparelhos da sua casa funcionam com corrente alternada (CA). Por isso existe o inversor.</p>

<h2>O inversor solar: o cérebro do sistema</h2>

<p>O inversor é o equipamento que converte a corrente contínua (CC) gerada pelos painéis em corrente alternada (CA), compatível com as tomadas da sua casa. Mas ele faz mais do que isso:</p>

<ul>
<li><strong>Otimiza a geração:</strong> o inversor busca constantemente o ponto de máxima potência dos painéis (MPPT), ajustando tensão e corrente para extrair o máximo de energia em cada momento.</li>
<li><strong>Monitora o sistema:</strong> inversores modernos se conectam ao Wi-Fi e permitem que você acompanhe a geração de energia em tempo real pelo celular.</li>
<li><strong>Protege a rede:</strong> em caso de queda de energia da concessionária, o inversor on-grid desliga automaticamente o sistema. Isso protege os técnicos que estão trabalhando na rede.</li>
</ul>

<p>Existem dois tipos principais de inversor para sistemas residenciais: o <strong>inversor string</strong> (um único inversor central para todos os painéis) e os <strong>microinversores</strong> (um pequeno inversor por painel ou par de painéis). O string é mais comum e mais barato. Os microinversores são melhores para telhados com sombreamento parcial, porque o problema em um painel não afeta os outros.</p>

<h2>O medidor bidirecional: como a concessionária conta o saldo</h2>

<p>Quando você instala um sistema on-grid (conectado à rede), a concessionária substitui seu medidor de energia antigo por um <strong>medidor bidirecional</strong>. Esse equipamento mede duas coisas:</p>

<ul>
<li><strong>Quanto você consumiu da rede:</strong> a energia que veio da concessionária para sua casa.</li>
<li><strong>Quanto você injetou na rede:</strong> a energia excedente que seus painéis geraram e foi enviada de volta para a rede.</li>
</ul>

<p>A diferença entre essas duas medições é o que define o valor da sua conta. Se você injetou mais do que consumiu, os créditos ficam armazenados por até 60 meses e podem ser usados nos meses seguintes — ou até em outros imóveis no mesmo CPF, dentro da mesma concessionária.</p>

<p>Esse sistema se chama <strong>compensação de energia</strong> (ou net metering), regulamentado pela <a href="https://www.aneel.gov.br/" target="_blank" rel="noopener">ANEEL</a> através da Resolução Normativa 1.000/2021.</p>

<h2>On-grid, off-grid e híbrido: qual é o seu caso</h2>

<p>A grande maioria das instalações residenciais no Brasil é <strong>on-grid</strong> (conectada à rede). E faz sentido: é o modelo mais barato, mais simples e que oferece o melhor retorno financeiro. Mas vale conhecer as três opções:</p>

<h3>Sistema on-grid (conectado à rede)</h3>

<p>É o mais comum. Seus painéis geram energia, o que você não usa vai para a rede, e você recebe créditos. À noite ou em dias nublados, você consome da rede normalmente. Não tem bateria — a rede funciona como seu "armazenamento".</p>

<p><strong>Vantagem:</strong> custo mais baixo, melhor payback, manutenção mínima.</p>
<p><strong>Limitação:</strong> se cair a luz da rua, seu sistema também para. Isso é uma proteção de segurança (anti-ilhamento), não um defeito.</p>

<h3>Sistema off-grid (isolado)</h3>

<p>Não tem conexão com a rede. Toda a energia gerada é armazenada em baterias e consumida pelo imóvel. É a solução para propriedades rurais ou locais sem acesso à rede elétrica.</p>

<p><strong>Vantagem:</strong> independência total da concessionária.</p>
<p><strong>Limitação:</strong> custo significativamente maior (as baterias podem custar mais que os próprios painéis), manutenção mais frequente e risco de ficar sem energia se o banco de baterias não for bem dimensionado.</p>

<h3>Sistema híbrido</h3>

<p>Combina on-grid com baterias. No dia a dia funciona como on-grid, mas quando cai a luz, as baterias assumem cargas prioritárias (geladeira, luzes, internet). É a solução mais cara, mas faz sentido para quem tem equipamentos que não podem parar.</p>

<p><strong>Vantagem:</strong> economia do on-grid + segurança do backup.</p>
<p><strong>Limitação:</strong> o custo adicional das baterias (R$ 30-40 mil a mais para um sistema residencial típico) pode não se justificar em regiões com rede estável.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'comparisonTable',
      headers: ['Característica', 'On-grid', 'Off-grid', 'Híbrido'],
      rows: [
        { label: 'Conexão com a rede', values: ['Sim', 'Não', 'Sim'] },
        { label: 'Baterias', values: ['Não', 'Sim (obrigatório)', 'Sim (backup)'] },
        { label: 'Custo relativo', values: ['Menor', 'Alto', 'Mais alto'] },
        { label: 'Payback', values: ['4-6 anos', '8-12 anos', '7-10 anos'] },
        { label: 'Funciona na queda de luz', values: ['Não', 'Sim', 'Sim (cargas prioritárias)'] },
        { label: 'Indicado para', values: ['Área urbana', 'Área remota', 'Quem precisa de backup'] },
      ],
    },
    {
      type: 'adSlot',
      slotId: 'solar-como-funciona-mid',
      format: 'responsive',
    },
    {
      type: 'articleContent',
      html: `
<h2>O que acontece de noite e em dias nublados</h2>

<p>Essa é a pergunta mais frequente — e a resposta é simples:</p>

<p><strong>De noite:</strong> os painéis não geram energia. Sua casa consome da rede normalmente, usando os créditos que acumulou durante o dia. Por isso é que o sistema on-grid funciona tão bem: a rede atua como sua bateria virtual, sem custo de equipamento.</p>

<p><strong>Em dias nublados:</strong> os painéis continuam gerando, mas com eficiência reduzida — entre 10% e 30% da capacidade nominal, dependendo da densidade das nuvens. Painéis modernos são mais sensíveis à luz difusa do que as gerações anteriores, mas não espere produção cheia num dia cinzento.</p>

<p><strong>Em dias de chuva:</strong> geração mínima, mas ainda existente. O sistema compensa nos dias bons — por isso o dimensionamento leva em conta a média anual de irradiação da sua região, não o pior dia do ano.</p>

<h2>Autoconsumo vs. injeção na rede: por que isso importa</h2>

<p>Quando seus painéis geram energia, ela é consumida primeiro pela sua casa. Se naquele momento seus aparelhos estão usando menos do que os painéis produzem, o excedente vai para a rede e vira crédito.</p>

<p>Essa distinção entre <strong>autoconsumo</strong> (energia usada direto) e <strong>injeção</strong> (energia enviada para a rede) ficou mais importante depois da <a href="https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14300.htm" target="_blank" rel="noopener">Lei 14.300/2022</a>. Isso porque a cobrança do Fio B incide sobre a energia que passa pela rede (injetada e depois recuperada), mas não sobre o autoconsumo. Em termos práticos: quanto mais energia você consumir no momento em que ela é gerada, melhor.</p>

<p>Dicas para aumentar o autoconsumo:</p>

<ul>
<li>Programar a máquina de lavar, lava-louças e bomba da piscina para o período diurno</li>
<li>Carregar veículo elétrico durante o dia, se aplicável</li>
<li>Usar aquecedor de água elétrico com timer para o meio do dia</li>
<li>Manter o ar-condicionado ligado de tarde (quando a geração é alta) em vez de à noite</li>
</ul>

<h2>O que afeta a eficiência do seu sistema</h2>

<p>Nem todo telhado produz a mesma quantidade de energia. Os fatores que mais influenciam são:</p>

<p><strong>Orientação:</strong> no Brasil (hemisfério sul), o ideal é que os painéis apontem para o Norte. Painéis voltados para Leste ou Oeste ainda funcionam, mas com geração 10-15% menor. Voltados para o Sul, a perda pode chegar a 25%.</p>

<p><strong>Inclinação:</strong> o ângulo ideal varia conforme a latitude da sua cidade. Em São Paulo, fica em torno de 23°. Em Fortaleza, cerca de 4°. A maioria dos telhados residenciais tem inclinação entre 15° e 25°, o que funciona bem na maior parte do Brasil.</p>

<p><strong>Sombreamento:</strong> é o fator que mais gente ignora e que mais estrago faz. Uma sombra parcial sobre os painéis — causada por árvores, antenas, caixas d'água ou prédios vizinhos — pode reduzir a geração em até 50%. Em sistemas com inversor string, a sombra em um painel afeta toda a série. Com microinversores, o impacto fica localizado.</p>

<p><strong>Temperatura:</strong> parece contraintuitivo, mas painéis solares produzem menos em temperaturas muito altas. Para cada grau acima de 25°C, a eficiência cai cerca de 0,4%. Regiões muito quentes do Brasil (como o sertão nordestino) têm muita irradiação, mas também sofrem com essa perda térmica. Telhados com boa ventilação por baixo dos painéis ajudam a mitigar isso.</p>

<p><strong>Limpeza:</strong> poeira, folhas e fezes de pássaros acumulados sobre os painéis reduzem a geração gradualmente. Uma limpeza a cada 6-12 meses com água e pano macio é suficiente na maioria dos casos.</p>

<h2>Componentes adicionais do sistema</h2>

<p>Além dos painéis e do inversor, um sistema fotovoltaico inclui:</p>

<ul>
<li><strong>String box (caixa de junção):</strong> quadro de proteção elétrica que fica entre os painéis e o inversor. Contém fusíveis, disjuntores e DPS (dispositivo de proteção contra surtos) para proteger o sistema de descargas atmosféricas e sobrecargas.</li>
<li><strong>Estrutura de fixação:</strong> suportes de alumínio que prendem os painéis ao telhado. O tipo de estrutura depende do material do telhado (cerâmica, metálico, fibrocimento, laje).</li>
<li><strong>Cabeamento:</strong> cabos solares específicos (geralmente 4mm² ou 6mm²) que conectam os painéis ao inversor. São cabos resistentes a UV e intempéries.</li>
<li><strong>Medidor bidirecional:</strong> fornecido e instalado pela concessionária após a aprovação do sistema.</li>
</ul>

<h2>Quanto tempo dura o sistema</h2>

<p>Os painéis solares têm garantia de desempenho de 25 a 30 anos dos fabricantes, com degradação média de 0,5% ao ano. Isso significa que, após 25 anos, seus painéis ainda estarão produzindo cerca de 87% da capacidade original. Na prática, muitos sistemas duram 30-35 anos com manutenção mínima.</p>

<p>O inversor tem vida útil mais curta — entre 10 e 15 anos. É o componente que você provavelmente vai precisar trocar uma vez durante a vida do sistema. O custo de um inversor novo em 2026 está entre R$ 2.000 e R$ 6.000, dependendo da potência.</p>

<p>A manutenção ao longo desse período é mínima: limpeza periódica dos painéis, verificação visual das conexões e monitoramento da geração pelo aplicativo do inversor.</p>

<h2>Próximo passo: entender os custos reais</h2>

<p>Agora que você sabe como o sistema funciona, a próxima pergunta natural é: <a href="${pageHref(SLUG_CUSTO)}">quanto custa e quanto você realmente economiza?</a> Lá você vai encontrar valores de mercado atualizados, simulações por faixa de consumo e a comparação honesta com outros investimentos.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'callout',
      content: 'Dica: antes de receber orçamentos, use o aplicativo do Google Project Sunroof ou o Atlas Solar do INPE para ter uma estimativa da irradiação no seu endereço. Isso ajuda a comparar propostas com mais segurança.',
      calloutType: 'tip',
    },
    allGuideLinks(SLUG_COMO_FUNCIONA),
    {
      type: 'adSlot',
      slotId: 'solar-como-funciona-bottom',
      format: 'responsive',
    },
  ],
}

const pageCusto: PageSchema = {
  id: 'solar-custo', siteKey: SITE_KEY, type: 'article', slug: SLUG_CUSTO,
  title: 'Quanto custa e quanto você economiza', status: 'published',
  meta: { title: 'Quanto custa instalar energia solar e quanto você realmente economiza', description: 'Valores reais de mercado em 2026, simulação por faixa de consumo, payback, comparação com investimentos e impacto do Fio B.' },
  blocks: [
    breadcrumb('Quanto custa', SLUG_CUSTO),
    {
      type: 'articleContent',
      html: `
<p>A pergunta "quanto custa?" é a mais comum — e a mais mal respondida na internet. A maioria dos sites dá faixas genéricas ou valores otimistas para atrair leads. Aqui vamos ser honestos: os números reais de mercado em 2026, com as regras atuais da <a href="https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14300.htm" target="_blank" rel="noopener">Lei 14.300</a>, e uma comparação justa com outros investimentos.</p>

<h2>Quanto custa um sistema solar residencial em 2026</h2>

<p>O custo de um sistema fotovoltaico residencial on-grid depende basicamente de dois fatores: o tamanho do sistema (medido em kWp) e a qualidade dos equipamentos escolhidos. O tamanho, por sua vez, depende do seu consumo mensal de energia.</p>

<p>Em março de 2026, o custo médio por watt-pico instalado no Brasil está em torno de R$ 2,30/Wp para sistemas residenciais, incluindo equipamentos, mão de obra, projeto e homologação. Esse valor vem caindo ano a ano — em 2020 era cerca de R$ 4,50/Wp.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'comparisonTable',
      headers: ['Consumo mensal', 'Sistema necessário', 'Custo médio instalado', 'Nº de painéis (550Wp)'],
      rows: [
        { label: 'Baixo', values: ['200 kWh/mês', '2,0 kWp', 'R$ 9.000 – 12.000', '4'] },
        { label: 'Médio', values: ['350 kWh/mês', '3,5 kWp', 'R$ 14.000 – 18.000', '6-7'] },
        { label: 'Médio-alto', values: ['500 kWh/mês', '5,0 kWp', 'R$ 19.000 – 24.000', '9-10'] },
        { label: 'Alto', values: ['800 kWh/mês', '8,0 kWp', 'R$ 28.000 – 36.000', '14-15'] },
        { label: 'Muito alto', values: ['1.200 kWh/mês', '12,0 kWp', 'R$ 40.000 – 52.000', '22'] },
      ],
    },
    {
      type: 'articleContent',
      html: `
<p>Esses valores incluem todos os componentes (painéis, inversor, string box, estrutura, cabeamento) e os serviços (projeto elétrico, instalação, homologação na concessionária). Não incluem o medidor bidirecional, que é fornecido pela concessionária.</p>

<p>A variação dentro de cada faixa depende principalmente da marca dos equipamentos. Painéis de primeira linha (Canadian Solar, JA Solar, Trina Solar, LONGi) com inversor de qualidade (Fronius, SMA, Growatt, Goodwe) ficam na faixa superior. Equipamentos de marcas menos conhecidas ou sem representação no Brasil ficam na faixa inferior — mas atenção: economia no equipamento pode significar perda de eficiência, garantia mais curta e dificuldade de assistência técnica.</p>

<h2>Quanto você realmente economiza por mês</h2>

<p>A economia mensal depende de três variáveis: seu consumo, a tarifa da sua concessionária e o tamanho do sistema instalado. Com a <a href="https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14300.htm" target="_blank" rel="noopener">Lei 14.300</a> e a cobrança progressiva do Fio B (em 60% em 2026), a economia real para novos sistemas fica entre 70% e 82% da conta — não os "até 95%" que muitos sites ainda prometem.</p>

<p>Vamos a exemplos concretos para a região Sudeste, com tarifa média de R$ 0,85/kWh:</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'comparisonTable',
      headers: ['Consumo', 'Conta sem solar', 'Conta com solar', 'Economia mensal'],
      rows: [
        { label: '200 kWh', values: ['R$ 220', 'R$ 60-70', 'R$ 150-160'] },
        { label: '350 kWh', values: ['R$ 380', 'R$ 80-100', 'R$ 280-300'] },
        { label: '500 kWh', values: ['R$ 530', 'R$ 100-130', 'R$ 400-430'] },
        { label: '800 kWh', values: ['R$ 830', 'R$ 140-180', 'R$ 650-690'] },
      ],
    },
    {
      type: 'callout',
      content: 'Mesmo com solar, você continua pagando a taxa mínima da concessionária (custo de disponibilidade), que varia de R$ 50 a R$ 100/mês dependendo da categoria (monofásico, bifásico, trifásico). Esse valor não é eliminável.',
      calloutType: 'warning',
    },
    {
      type: 'adSlot',
      slotId: 'solar-custo-mid',
      format: 'responsive',
    },
    {
      type: 'articleContent',
      html: `
<h2>Payback: em quanto tempo o investimento se paga</h2>

<p>O payback é o cálculo mais importante da decisão. Ele mostra quantos meses de economia são necessários para recuperar o valor investido.</p>

<p>A conta é simples: <strong>payback = custo do sistema ÷ economia mensal</strong>.</p>

<p>Para um sistema de 5 kWp (consumo de ~500 kWh/mês) no Sudeste:</p>

<ul>
<li>Custo: R$ 22.000</li>
<li>Economia mensal: ~R$ 415</li>
<li>Payback: ~53 meses (4,4 anos)</li>
</ul>

<p>Após o payback, toda a economia é lucro líquido. Considerando que o sistema dura 25+ anos e o payback é de 4-6 anos, você tem 19-21 anos de energia praticamente gratuita.</p>

<p>O payback varia conforme a região. No Nordeste, a irradiação solar mais alta e as tarifas geralmente mais altas resultam em payback mais curto (3-4 anos). No Sul, a irradiação menor e os dias mais curtos no inverno estendem o payback para 5-7 anos.</p>

<h2>Energia solar como investimento: comparação honesta</h2>

<p>Uma forma útil de avaliar a energia solar é compará-la com outros investimentos de mesmo valor. Considere R$ 22.000 investidos:</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'comparisonTable',
      headers: ['Investimento', 'Rendimento anual', 'Retorno em 25 anos', 'Risco'],
      rows: [
        { label: 'Energia solar (5 kWp)', values: ['~23% a.a. (economia)', '~R$ 125.000', 'Baixo (equipamento no telhado)'] },
        { label: 'Poupança', values: ['~7% a.a.', '~R$ 52.000', 'Baixo'] },
        { label: 'CDB 100% CDI', values: ['~10% a.a. (bruto)', '~R$ 78.000', 'Baixo'] },
        { label: 'Tesouro IPCA+', values: ['~6% a.a. + inflação', '~R$ 85.000', 'Baixo-médio'] },
      ],
    },
    {
      type: 'articleContent',
      html: `
<p>A comparação revela por que energia solar é um dos melhores investimentos disponíveis para pessoa física no Brasil: o retorno anualizado supera qualquer aplicação de renda fixa, com risco comparável (o equipamento está no seu telhado, não num banco). A principal diferença é que o "rendimento" vem na forma de economia, não de dinheiro na conta.</p>

<p>Um ponto que os críticos levantam é válido: o dinheiro investido em solar fica "preso" (ilíquido) — você não pode resgatar. Mas considerando que a economia começa no primeiro mês e os painéis duram 25+ anos, a falta de liquidez é compensada pelo retorno consistente.</p>

<h2>O impacto do Fio B na sua economia</h2>

<p>A <a href="https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14300.htm" target="_blank" rel="noopener">Lei 14.300/2022</a> criou uma cobrança gradual chamada Fio B, que incide sobre a energia injetada na rede e depois recuperada como crédito. A transição é assim:</p>

<ul>
<li>2023: 15% do Fio B cobrado</li>
<li>2024: 30%</li>
<li>2025: 45%</li>
<li><strong>2026: 60%</strong></li>
<li>2027: 75%</li>
<li>2028: 90%</li>
<li>2029 em diante: 100%</li>
</ul>

<p>Na prática, para quem instala em 2026, o Fio B representa uma redução de 8-15% na economia em comparação com quem instalou antes de 2023. Mas a economia ainda é muito expressiva — entre 70% e 82% da conta. O ponto importante: quem instala agora garante a progressão a partir de 60%. Quem esperar para 2027, começa em 75%.</p>

<p>Outro detalhe: o Fio B incide apenas sobre a energia que passa pela rede (injetada e depois compensada). A energia que você consome diretamente dos painéis (autoconsumo) não paga Fio B. Por isso, sistemas bem dimensionados que maximizam o autoconsumo são mais eficientes financeiramente do que sistemas superdimensionados que injetam muito na rede.</p>

<h2>Financiar ou pagar à vista?</h2>

<p>Se você tem o capital disponível, pagar à vista é sempre melhor — o payback é mais curto e não há juros. Mas a realidade é que muita gente financia, e existem linhas de crédito específicas para energia solar com taxas menores que o crédito pessoal.</p>

<p>A lógica do financiamento solar é interessante: se a parcela mensal do financiamento for menor que a economia mensal na conta de luz, o sistema se paga sozinho desde o primeiro mês. Em muitos casos isso acontece, especialmente com financiamentos de 60-84 meses.</p>

<p>Os detalhes sobre linhas de crédito disponíveis estão em <a href="${pageHref(SLUG_LEGISLACAO)}">Legislação, Fio B e financiamento</a>.</p>

<h2>Erros de dimensionamento que custam caro</h2>

<p><strong>Subdimensionar:</strong> instalar um sistema menor do que o necessário para "economizar" no investimento. Resultado: você continua pagando uma conta de luz alta e o payback se alonga.</p>

<p><strong>Superdimensionar:</strong> instalar um sistema maior do que o necessário. Resultado: você gera créditos que não consegue usar, e com o Fio B progressivo, cada kWh injetado na rede rende menos do que o kWh consumido direto. Dinheiro jogado fora.</p>

<p>O dimensionamento correto parte do seu consumo médio dos últimos 12 meses (não do mês de pico) e considera a irradiação da sua região. Uma boa empresa entrega essa análise antes do orçamento — se alguém te propõe um sistema sem olhar suas últimas 12 contas, desconfie.</p>

<h2>Próximo passo: escolher os equipamentos certos</h2>

<p>Agora que você sabe quanto custa e quanto economiza, o próximo passo é entender o que diferencia um equipamento bom de um ruim — e por que a diferença de preço nem sempre significa a diferença que parece. Veja em <a href="${pageHref(SLUG_EQUIPAMENTOS)}">Como escolher painel solar e inversor</a>.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    allGuideLinks(SLUG_CUSTO),
    {
      type: 'adSlot',
      slotId: 'solar-custo-bottom',
      format: 'responsive',
    },
  ],
}

const pageEquipamentos: PageSchema = {
  id: 'solar-equipamentos', siteKey: SITE_KEY, type: 'article', slug: SLUG_EQUIPAMENTOS,
  title: 'Como escolher painel e inversor', status: 'published',
  meta: { title: 'Como escolher painel solar e inversor: o que importa de verdade', description: 'Critérios técnicos para escolher painel e inversor solar: eficiência, garantia, certificação INMETRO, marcas e dimensionamento.' },
  blocks: [
    breadcrumb('Equipamentos', SLUG_EQUIPAMENTOS),
    {
      type: 'articleContent',
      html: `
<p>O equipamento é o coração do sistema e onde a diferença entre um investimento bom e um ruim se define. A tentação de economizar aqui é grande — e perigosa. Um painel 15% mais barato pode render 10% menos por 25 anos. Um inversor genérico pode parar de funcionar em 5 anos em vez de 12. E uma garantia que não tem representante no Brasil é o mesmo que não ter garantia.</p>

<p>Neste guia, vamos separar o que realmente importa do que é marketing.</p>

<h2>Painéis solares: o que olhar antes de comprar</h2>

<h3>Potência (Wp)</h3>

<p>A potência de um painel é medida em watts-pico (Wp) — a capacidade máxima de geração em condições ideais de teste (irradiação de 1.000 W/m², temperatura de 25°C). Painéis residenciais em 2026 têm entre 400 Wp e 600 Wp. Quanto maior a potência por painel, menos painéis você precisa para o mesmo sistema — o que pode ser vantagem em telhados menores.</p>

<h3>Eficiência</h3>

<p>Eficiência é a porcentagem de luz solar que o painel converte em eletricidade. Painéis comerciais atuais ficam entre 20% e 22,5%. A diferença de 2 pontos percentuais pode parecer pequena, mas ao longo de 25 anos representa milhares de kWh a mais.</p>

<p>Na prática, a eficiência importa mais quando o espaço no telhado é limitado. Se você tem telhado de sobra, painéis ligeiramente menos eficientes (mas mais baratos) podem fazer sentido. Se o telhado é pequeno, cada ponto de eficiência conta.</p>

<h3>Garantia</h3>

<p>Existem duas garantias distintas para painéis:</p>

<ul>
<li><strong>Garantia de produto:</strong> cobre defeitos de fabricação. Painéis bons oferecem 12-15 anos. Painéis baratos oferecem 5-10 anos.</li>
<li><strong>Garantia de desempenho:</strong> garante que o painel manterá determinada porcentagem da potência original. O padrão bom é 87,4% após 25 anos (degradação de ~0,5%/ano). Painéis de primeira linha já oferecem 88-90% após 30 anos.</li>
</ul>

<p>A garantia só vale se o fabricante tiver representação no Brasil. Verifique: a marca tem CNPJ no país? Tem estoque de reposição? Tem assistência técnica acessível? Se a resposta for não, a garantia existe no papel, mas não na prática.</p>

<h3>Certificação</h3>

<p>Todo painel vendido no Brasil precisa ter certificação do <a href="https://www.inmetro.gov.br/" target="_blank" rel="noopener">INMETRO</a>. Sem essa certificação, o painel não pode ser homologado pela concessionária — e sem homologação, você não entra no sistema de compensação de energia. É obrigatório, não opcional.</p>

<h3>Principais marcas no Brasil em 2026</h3>

<p>As marcas mais presentes no mercado residencial brasileiro, com representação local e bom histórico:</p>

<ul>
<li><strong>Canadian Solar:</strong> uma das maiores do mundo. Boa relação custo-benefício, garantia sólida, ampla rede de distribuição no Brasil.</li>
<li><strong>JA Solar:</strong> chinesa com forte presença global. Competitiva em preço, boa eficiência.</li>
<li><strong>Trina Solar:</strong> referência em inovação. Lançou painéis com tecnologia N-type de alta eficiência.</li>
<li><strong>LONGi:</strong> maior fabricante de silício monocristalino do mundo. Painéis Hi-MO de alto desempenho.</li>
<li><strong>BYD:</strong> conhecida por baterias e carros elétricos, também fabrica painéis com boa reputação.</li>
</ul>

<p>Existem dezenas de outras marcas no mercado. O critério mínimo é: certificação INMETRO, garantia de produto ≥12 anos, garantia de desempenho ≥25 anos, e representação técnica no Brasil.</p>

<h2>Inversores: o componente que mais diferencia um sistema bom de um ruim</h2>

<p>Se o painel é o músculo, o inversor é o cérebro. Um inversor ruim limita a geração, falha mais cedo e não permite monitoramento adequado. A diferença de preço entre um inversor bom e um medíocre costuma ser R$ 1.000-2.000 — valor que se paga em menos de um ano de geração extra.</p>

<h3>Inversor string vs. microinversor</h3>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'comparisonTable',
      headers: ['Critério', 'Inversor string', 'Microinversor'],
      rows: [
        { label: 'Custo', values: ['Menor', 'Maior (30-50% a mais)'] },
        { label: 'Instalação', values: ['1 aparelho central', '1 por painel ou par'] },
        { label: 'Sombreamento parcial', values: ['Afeta toda a série', 'Afeta só o painel sombreado'] },
        { label: 'Monitoramento', values: ['Geração total do sistema', 'Geração por painel individual'] },
        { label: 'Expansão futura', values: ['Limitada pela potência do inversor', 'Adiciona painéis facilmente'] },
        { label: 'Vida útil', values: ['10-15 anos', '15-25 anos'] },
        { label: 'Indicado para', values: ['Telhados sem sombra', 'Telhados com sombra parcial'] },
      ],
    },
    {
      type: 'adSlot',
      slotId: 'solar-equipamentos-mid',
      format: 'responsive',
    },
    {
      type: 'articleContent',
      html: `
<h3>Principais marcas de inversor no Brasil</h3>

<ul>
<li><strong>Fronius (Áustria):</strong> referência premium. Excelente monitoramento, alta eficiência, garantia de 10 anos extensível. Mais caro, mas reconhecido como o melhor do mercado.</li>
<li><strong>SMA (Alemanha):</strong> tradição e confiabilidade. Forte no segmento de usinas, presente também no residencial.</li>
<li><strong>Growatt (China):</strong> melhor custo-benefício do mercado. Monitoramento via app, garantia de 10 anos, suporte no Brasil. Domina o mercado residencial.</li>
<li><strong>Goodwe (China):</strong> concorrente direto do Growatt, com boa presença no Brasil e garantia competitiva.</li>
<li><strong>Enphase (EUA):</strong> líder global em microinversores. Preço premium, mas excelente para telhados complexos.</li>
<li><strong>Deye (China):</strong> forte em inversores híbridos (com bateria). Boa opção para quem quer backup.</li>
</ul>

<h3>Como dimensionar o inversor</h3>

<p>O inversor precisa ter potência compatível com os painéis. A regra geral é que a potência do inversor pode ser entre 75% e 100% da potência total dos painéis. Exemplo: para 10 painéis de 550 Wp (total: 5,5 kWp), o inversor pode ser de 4,0 a 5,5 kW.</p>

<p>Subdimensionar demais (inversor muito pequeno) limita a geração nos horários de pico. Superdimensionar (inversor muito grande) desperdiça dinheiro. Um bom integrador calcula isso considerando a irradiação da sua região e a orientação do telhado.</p>

<h2>Estrutura de fixação: o que ninguém te conta</h2>

<p>A estrutura de fixação é o componente mais ignorado — e que mais causa problema quando malfeito. Ela precisa:</p>

<ul>
<li>Suportar o peso dos painéis (20-25 kg cada) por 25+ anos</li>
<li>Resistir a ventos fortes sem soltar</li>
<li>Não comprometer a impermeabilização do telhado</li>
<li>Ser de alumínio anodizado ou aço inoxidável (não corroer)</li>
</ul>

<p>Estruturas baratas de aço galvanizado podem corroer em 5-8 anos, especialmente em regiões litorâneas. A economia de R$ 500-1.000 na estrutura pode virar um custo de R$ 5.000+ para refazer a fixação e tratar infiltrações no telhado.</p>

<h2>O que pedir no orçamento</h2>

<p>Quando receber uma proposta, verifique se inclui:</p>

<ul>
<li>Marca e modelo exato dos painéis (não apenas "painéis de 550 Wp")</li>
<li>Marca e modelo do inversor</li>
<li>Material da estrutura de fixação</li>
<li>Tipo e seção dos cabos</li>
<li>Projeto elétrico assinado por engenheiro</li>
<li>Homologação na concessionária incluída</li>
<li>Garantia de mão de obra (além da garantia do fabricante)</li>
<li>Seguro durante a instalação</li>
</ul>

<p>Se a proposta diz apenas "sistema de 5 kWp" sem especificar marcas e modelos, peça detalhamento. Propostas genéricas escondem equipamentos de qualidade duvidosa.</p>

<h2>Próximo passo: escolher quem vai instalar</h2>

<p>Equipamento bom nas mãos de um instalador ruim vira problema. A escolha da empresa é tão importante quanto a escolha do equipamento — e é onde mais gente erra. Veja em <a href="${pageHref(SLUG_INSTALADOR)}">Como escolher uma empresa de energia solar</a>.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    allGuideLinks(SLUG_EQUIPAMENTOS),
    {
      type: 'adSlot',
      slotId: 'solar-equipamentos-bottom',
      format: 'responsive',
    },
  ],
}

const pageInstalador: PageSchema = {
  id: 'solar-instalador', siteKey: SITE_KEY, type: 'article', slug: SLUG_INSTALADOR,
  title: 'Como escolher uma empresa instaladora', status: 'published',
  meta: { title: 'Como escolher uma empresa de energia solar sem cair em armadilha', description: 'O que verificar antes de contratar: homologação ANEEL, portfólio, garantia, perguntas essenciais e erros comuns.' },
  blocks: [ breadcrumb('Escolher instalador', SLUG_INSTALADOR), { type: 'articleContent', html: '<h2>Como escolher uma empresa de energia solar</h2><p>Conteúdo completo em desenvolvimento.</p>', publishedAt: PUBLISHED_AT }, allGuideLinks(SLUG_INSTALADOR) ],
}

const pagePassoAPasso: PageSchema = {
  id: 'solar-passo-a-passo', siteKey: SITE_KEY, type: 'article', slug: SLUG_PASSO_A_PASSO,
  title: 'Passo a passo da instalação', status: 'published',
  meta: { title: 'Passo a passo da instalação de energia solar: do orçamento ao primeiro kWh', description: 'Cada etapa da instalação solar com prazos reais: análise de consumo, projeto, aprovação, instalação, vistoria e ativação.' },
  blocks: [ breadcrumb('Passo a passo', SLUG_PASSO_A_PASSO), { type: 'articleContent', html: '<h2>Passo a passo da instalação</h2><p>Conteúdo completo em desenvolvimento.</p>', publishedAt: PUBLISHED_AT }, allGuideLinks(SLUG_PASSO_A_PASSO) ],
}

const pageLegislacao: PageSchema = {
  id: 'solar-legislacao', siteKey: SITE_KEY, type: 'article', slug: SLUG_LEGISLACAO,
  title: 'Legislação, Fio B e financiamento', status: 'published',
  meta: { title: 'Lei 14.300, Fio B e financiamento solar: o que muda para quem instala agora', description: 'Marco legal da energia solar, regras de compensação, cobrança do Fio B, isenção de ICMS e linhas de crédito em 2026.' },
  blocks: [ breadcrumb('Legislação e financiamento', SLUG_LEGISLACAO), { type: 'articleContent', html: '<h2>Legislação, Fio B e financiamento</h2><p>Conteúdo completo em desenvolvimento.</p>', publishedAt: PUBLISHED_AT }, allGuideLinks(SLUG_LEGISLACAO) ],
}

// EDITORIAIS (stubs)

const editorialErros: PageSchema = {
  id: 'solar-editorial-erros', siteKey: SITE_KEY, type: 'article', slug: SLUG_EDITORIAL_ERROS,
  title: '7 erros que mais custam caro na instalação de energia solar', status: 'published',
  meta: { title: '7 erros que mais custam caro na instalação de energia solar', description: 'Erros comuns ao instalar energia solar: escolher pelo preço, ignorar sombreamento, superdimensionar e contratar empresa sem verificar.' },
  blocks: [ breadcrumb('Erros comuns', SLUG_EDITORIAL_ERROS), { type: 'articleContent', html: '<h2>7 erros que mais custam caro</h2><p>Conteúdo completo em desenvolvimento.</p>', publishedAt: PUBLISHED_AT }, allGuideLinks(SLUG_EDITORIAL_ERROS) ],
}

const editorialMercado: PageSchema = {
  id: 'solar-editorial-mercado', siteKey: SITE_KEY, type: 'article', slug: SLUG_EDITORIAL_MERCADO,
  title: 'Energia solar em 2026: o que mudou e o que esperar', status: 'published',
  meta: { title: 'Energia solar em 2026: o que mudou e o que esperar', description: 'Cenário do mercado solar brasileiro em 2026: dados ABSOLAR, impacto do Fio B, projeções de investimento e o que muda para o consumidor.' },
  blocks: [ breadcrumb('Mercado 2026', SLUG_EDITORIAL_MERCADO), { type: 'articleContent', html: '<h2>Energia solar em 2026</h2><p>Conteúdo completo em desenvolvimento.</p>', publishedAt: PUBLISHED_AT }, allGuideLinks(SLUG_EDITORIAL_MERCADO) ],
}

const editorialApartamento: PageSchema = {
  id: 'solar-editorial-apto', siteKey: SITE_KEY, type: 'article', slug: SLUG_EDITORIAL_APTO,
  title: 'Energia solar para quem mora em apartamento', status: 'published',
  meta: { title: 'Mora em apartamento? Como usar energia solar mesmo sem telhado', description: 'Opções de energia solar para apartamento: GD compartilhada, assinatura solar e cooperativas — como funcionam e quanto economizam.' },
  blocks: [ breadcrumb('Solar em apartamento', SLUG_EDITORIAL_APTO), { type: 'articleContent', html: '<h2>Energia solar em apartamento</h2><p>Conteúdo completo em desenvolvimento.</p>', publishedAt: PUBLISHED_AT }, allGuideLinks(SLUG_EDITORIAL_APTO) ],
}

// EXPORT

export const energiaSolarBrSite: SiteEntry = {
  config: {
    siteKey: SITE_KEY,
    publicName: 'Energia Solar BR',
    routePath: ROUTE_PATH,
    locale: 'pt-BR',
    market: 'BR',
    status: 'active',
    ui: { showAllSitesLink: false },
    theme: {
      brandName: 'Energia Solar BR',
      primaryColor: '#d97706',
      accentColor: '#b45309',
      surfaceColor: '#fffbeb',
      textColor: '#1c1917',
      radius: '12px',
      fontFamilyHeading: 'system-ui, -apple-system, sans-serif',
    },
    seo: {
      siteTitle: 'Energia Solar BR',
      defaultTitleTemplate: '%s | Energia Solar BR',
      defaultDescription: 'Guia prático de energia solar residencial no Brasil. Custos reais, equipamentos, instalação, legislação e financiamento em 2026.',
      baseUrl: BASE_URL,
    },
    analytics: { ga4MeasurementId: 'G-LL5VYXQWV9', enabled: true },
    monetization: {
      ads: { enabled: process.env.NEXT_PUBLIC_ADS_TEST_MODE !== 'true', provider: 'adsense', publisherId: 'ca-pub-7072076910984234' },
      affiliates: { enabled: false, programs: [] },
    },
  },
  pages: [
    homePage,
    pageComoFunciona,
    pageCusto,
    pageEquipamentos,
    pageInstalador,
    pagePassoAPasso,
    pageLegislacao,
    editorialErros,
    editorialMercado,
    editorialApartamento,
  ],
}
