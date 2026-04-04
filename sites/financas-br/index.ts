/**
 * sites/financas-br/index.ts
 * Finanças BR — Guia prático de finanças pessoais no Brasil
 */

import type {
  BreadcrumbBlock,
  PageSchema,
  RelatedLinksBlock,
  SiteEntry,
} from '../../core/types/contracts'
import { resolveSiteBaseUrl } from '../../config/site-url'

const SITE_KEY = 'financas-br'
const ROUTE_PATH = 'financas'
const BASE_URL = resolveSiteBaseUrl(ROUTE_PATH)
const PUBLISHED_AT = '2026-04-04'

const SLUG_ORCAMENTO = 'como-organizar-orcamento'
const SLUG_DIVIDAS = 'como-sair-das-dividas'
const SLUG_INVESTIR = 'onde-investir-com-pouco'
const SLUG_BANCOS = 'bancos-e-corretoras'
const SLUG_IR = 'imposto-de-renda-e-previdencia'
const SLUG_CREDITO = 'credito-e-financiamento'
const SLUG_ED_APPS = 'apps-controle-financeiro'
const SLUG_ED_SOLAR = 'energia-solar-como-investimento'
const SLUG_ED_ERROS = 'erros-financeiros-comuns'

const SOLAR_SITE = '/energia-solar'

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
      { label: 'Página inicial: guia de finanças', slug: 'home' },
      { label: 'Como organizar seu orçamento', slug: SLUG_ORCAMENTO },
      { label: 'Como sair das dívidas', slug: SLUG_DIVIDAS },
      { label: 'Onde investir com pouco dinheiro', slug: SLUG_INVESTIR },
      { label: 'Bancos digitais e corretoras', slug: SLUG_BANCOS },
      { label: 'Imposto de Renda e previdência', slug: SLUG_IR },
      { label: 'Crédito e financiamento', slug: SLUG_CREDITO },
    ]
      .filter((item) => item.slug !== currentSlug)
      .map((item) => ({ label: item.label, href: pageHref(item.slug) })),
  }
}

// HOME

const homePage: PageSchema = {
  id: 'fin-home',
  siteKey: SITE_KEY,
  type: 'home',
  slug: 'home',
  title: 'Início',
  status: 'published',
  meta: {
    title: 'Finanças Pessoais: guia prático para organizar seu dinheiro em 2026',
    description: 'Guia completo de finanças pessoais. Orçamento, dívidas, investimentos, bancos digitais, IR e crédito — com dados reais do cenário brasileiro em 2026.',
  },
  blocks: [
    {
      type: 'hero',
      heading: 'Finanças pessoais: como organizar seu dinheiro em 2026',
      subheading: 'Um guia direto para quem quer sair das dívidas, investir com pouco e tomar decisões financeiras com informação — não com achismo.',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
      alt: 'Planejamento financeiro com calculadora e anotações de orçamento',
    },
    {
      type: 'articleContent',
      html: `
<p>79,5% das famílias brasileiras estão endividadas. 68,6 milhões de pessoas estão negativadas. A Selic está em 15% ao ano, o que significa crédito caro e renda fixa rendendo bem. Esses são os números que definem o cenário financeiro de 2026 no Brasil — e é nesse cenário que você precisa tomar decisões.</p>

<p>A boa notícia: nunca houve tantas ferramentas acessíveis para organizar as finanças. Bancos digitais como <strong>Nubank</strong>, <strong>Inter</strong> e <strong>C6</strong> eliminaram tarifas. Apps como <strong>Mobills</strong> e <strong>Organizze</strong> automatizam o controle de gastos. O <a href="https://www.bcb.gov.br/estabilidadefinanceira/openfinance" target="_blank" rel="noopener">Open Finance</a> do Banco Central permite integrar dados de todas as suas contas em um só lugar. E o <a href="https://www.tesourodireto.com.br/" target="_blank" rel="noopener">Tesouro Direto</a> aceita investimentos a partir de R$ 30.</p>

<p>O problema não é falta de ferramenta — é falta de uma sequência clara de decisões. Este guia resolve isso.</p>

<h2>O que você vai encontrar neste guia</h2>

<p>Organizamos na ordem em que as decisões devem acontecer. Quem está endividado começa diferente de quem já poupa:</p>
      `,
      author: 'Equipe Finanças BR',
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'cardsGrid',
      cards: [
        { title: '1. Organizar o orçamento', description: 'Diagnóstico financeiro, método 50-30-20, apps de controle e como encontrar gastos invisíveis.', href: pageHref(SLUG_ORCAMENTO) },
        { title: '2. Sair das dívidas', description: 'Priorizar por juros, renegociar via Serasa e Desenrola, trocar dívida cara por barata.', href: pageHref(SLUG_DIVIDAS) },
        { title: '3. Investir com pouco', description: 'Reserva de emergência, Tesouro Selic, CDB, FIIs e ETFs — a partir de R$ 30.', href: pageHref(SLUG_INVESTIR) },
        { title: '4. Bancos e corretoras', description: 'Nubank vs Inter vs C6, corretoras para iniciantes e conta remunerada.', href: pageHref(SLUG_BANCOS) },
        { title: '5. IR e previdência', description: 'Declaração, deduções, PGBL vs VGBL, FGTS Digital e como pagar menos imposto.', href: pageHref(SLUG_IR) },
        { title: '6. Crédito e financiamento', description: 'Cartão, consignado, imobiliário e consórcio — quando faz sentido e quando é armadilha.', href: pageHref(SLUG_CREDITO) },
      ],
    },
    {
      type: 'articleContent',
      html: `
<h2>Por onde começar (depende de onde você está)</h2>

<p><strong>Se está endividado:</strong> não adianta pensar em investimento agora. Priorize pagar as dívidas com juros mais altos (cartão rotativo, cheque especial). → <a href="${pageHref(SLUG_DIVIDAS)}">Como sair das dívidas</a></p>

<p><strong>Se está no zero a zero:</strong> o primeiro passo é entender para onde seu dinheiro vai. Monte o orçamento, encontre os gastos fantasma e abra espaço para poupar. → <a href="${pageHref(SLUG_ORCAMENTO)}">Como organizar seu orçamento</a></p>

<p><strong>Se já poupa mas não investe:</strong> dinheiro parado na poupança está perdendo para a inflação. Com Selic a 15%, renda fixa rende muito mais. → <a href="${pageHref(SLUG_INVESTIR)}">Onde investir com pouco dinheiro</a></p>

<p><strong>Se já investe:</strong> revise seu portfólio para o cenário de juros altos. E veja se está aproveitando deduções legais no IR. → <a href="${pageHref(SLUG_IR)}">Imposto de Renda e previdência</a></p>

<h2>Três números que definem 2026</h2>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'stats',
      items: [
        { value: '15% a.a.', label: 'Selic — crédito caro, renda fixa rendendo bem' },
        { value: '79,5%', label: 'Das famílias brasileiras endividadas (PEIC/CNC)' },
        { value: 'R$ 30', label: 'Mínimo para investir no Tesouro Direto' },
      ],
    },
    {
      type: 'adSlot',
      slotId: 'fin-home-mid',
      format: 'responsive',
    },
    {
      type: 'articleContent',
      html: `
<h2>O que muda com juros altos</h2>

<p>A Selic a 15% cria um cenário com duas faces:</p>

<p><strong>Face ruim:</strong> crédito fica caro. Cartão rotativo cobra 400%+ ao ano. Financiamento imobiliário sobe. Parcelar sem necessidade vira armadilha. Quem está endividado sente o peso dos juros compostos trabalhando contra.</p>

<p><strong>Face boa:</strong> quem consegue poupar encontra as melhores condições de renda fixa dos últimos anos. Tesouro Selic rende ~1% ao mês. CDBs pagam 100-120% do CDI. LCIs e LCAs rendem bem e são isentas de IR. Pela primeira vez em muito tempo, guardar dinheiro é recompensado generosamente.</p>

<p>Em resumo: 2026 pune quem deve e premia quem poupa. Se você conseguir cruzar a linha do endividamento para o lado da poupança, o cenário trabalha a seu favor.</p>

<h2>Erros que mais vemos</h2>

<p>Antes de mergulhar no guia, conheça os erros mais comuns — detalhamos todos no editorial <a href="${pageHref(SLUG_ED_ERROS)}">8 erros financeiros que a maioria comete</a>. Os principais:</p>

<ul>
<li><strong>Pagar mínimo do cartão.</strong> O rotativo cobra 400%+ ao ano. Pagar o mínimo transforma R$ 1.000 em R$ 5.000 em 12 meses.</li>
<li><strong>Não ter reserva de emergência.</strong> Qualquer imprevisto vira dívida. O mínimo é 3 meses de despesas em investimento de liquidez diária.</li>
<li><strong>Deixar dinheiro na poupança.</strong> Com Selic a 15%, a poupança rende ~6% ao ano. Tesouro Selic rende ~15%. A diferença é enorme.</li>
<li><strong>Investir sem quitar dívida cara.</strong> Não faz sentido ganhar 15% ao ano investindo e pagar 200% ao ano de juros no cartão.</li>
</ul>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'callout',
      content: 'Convergência: energia solar pode ser um dos melhores investimentos para quem tem casa própria — o retorno anualizado supera a maioria das aplicações de renda fixa. Veja a comparação completa em <a href="/energia-solar/quanto-custa-e-quanto-economiza">Quanto custa e quanto economiza com energia solar</a>.',
      calloutType: 'info',
    },
    allGuideLinks('home'),
    {
      type: 'adSlot',
      slotId: 'fin-home-bottom',
      format: 'responsive',
    },
  ],
}

// PÁGINA 1: ORÇAMENTO

const pageOrcamento: PageSchema = {
  id: 'fin-orcamento', siteKey: SITE_KEY, type: 'article', slug: SLUG_ORCAMENTO,
  title: 'Como organizar seu orçamento', status: 'published',
  meta: { title: 'Como organizar seu orçamento: do salário líquido ao controle real', description: 'Diagnóstico financeiro, método 50-30-20, apps de controle, gastos fantasma e orçamento base zero — guia prático para 2026.' },
  blocks: [
    breadcrumb('Orçamento', SLUG_ORCAMENTO),
    {
      type: 'articleContent',
      html: `
<p>Organizar o orçamento é o primeiro passo de qualquer plano financeiro — e o mais ignorado. A maioria das pessoas tem uma ideia vaga de quanto ganha e quanto gasta, mas não sabe para onde vão os R$ 200-500/mês que "somem". Esse dinheiro invisível é exatamente o que faz a diferença entre endividamento e poupança.</p>

<p>Este guia mostra como fazer um diagnóstico real das suas finanças e montar um orçamento que funcione no dia a dia — sem planilha complexa.</p>

<h2>Passo 1: Descubra seu salário real</h2>

<p>Planeje com base no <strong>salário líquido</strong> — o que cai na conta depois de IR e INSS. Se você tem renda variável (comissões, freelances), use a média dos últimos 12 meses e trabalhe com o valor mais baixo. Melhor sobrar do que faltar.</p>

<h2>Passo 2: Registre tudo por 30 dias</h2>

<p>Antes de criar regras, observe. Anote cada gasto por 30 dias — do cafezinho ao aluguel. Use um app para facilitar:</p>

<ul>
<li><strong><a href="https://www.mobills.com.br/" target="_blank" rel="noopener">Mobills</a>:</strong> app brasileiro, gratuito com versão premium. Categoriza gastos automaticamente, gera gráficos e permite definir metas. O mais popular do Brasil.</li>
<li><strong><a href="https://www.organizze.com.br/" target="_blank" rel="noopener">Organizze</a>:</strong> interface simples, foco em praticidade. Bom para quem quer algo direto sem muita configuração.</li>
<li><strong><a href="https://www.guiabolso.com.br/" target="_blank" rel="noopener">GuiaBolso</a>:</strong> integra com Open Finance — puxa transações direto do banco. Automatiza muito, mas exige autorização de compartilhamento de dados.</li>
</ul>

<p>Se preferir planilha, o <a href="https://www.bcb.gov.br/cidadaniafinanceira" target="_blank" rel="noopener">Banco Central</a> disponibiliza modelos gratuitos no portal de Cidadania Financeira.</p>

<h2>Passo 3: Encontre os gastos fantasma</h2>

<p>Gastos fantasma são despesas recorrentes que você esqueceu que existem. Os mais comuns:</p>

<ul>
<li><strong>Assinaturas:</strong> streaming, app premium, revista digital, academia que não frequenta. Some tudo — muita gente paga R$ 150-300/mês em assinaturas que mal usa.</li>
<li><strong>Débito automático:</strong> seguro que renovou sozinho, serviço bancário que não pediu, taxa que nunca questionou.</li>
<li><strong>Delivery e cafezinho:</strong> R$ 15/dia de iFood = R$ 450/mês = R$ 5.400/ano. Não é para cortar tudo — é para ver o número real e decidir com consciência.</li>
<li><strong>Juros de parcelamento:</strong> parcelar em 12x "sem juros" no cartão muitas vezes tem juros embutidos no preço. Desconto à vista pode chegar a 10-15%.</li>
</ul>

<h2>Passo 4: Aplique o método 50-30-20</h2>

<p>O método mais simples e eficaz para organizar o orçamento. Divida sua renda líquida em três categorias:</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'comparisonTable',
      headers: ['Categoria', 'Percentual', 'O que inclui', 'Exemplo (renda R$ 4.000)'],
      rows: [
        { label: 'Necessidades', values: ['50%', 'Moradia, alimentação, transporte, saúde, contas essenciais', 'R$ 2.000'] },
        { label: 'Desejos', values: ['30%', 'Lazer, restaurantes, streaming, compras não essenciais', 'R$ 1.200'] },
        { label: 'Futuro', values: ['20%', 'Poupança, investimentos, pagamento de dívidas', 'R$ 800'] },
      ],
    },
    {
      type: 'adSlot',
      slotId: 'fin-orcamento-mid',
      format: 'responsive',
    },
    {
      type: 'articleContent',
      html: `
<p>Se suas necessidades passam de 50%, o problema não é falta de disciplina — é que algo estrutural precisa mudar (renegociar aluguel, trocar plano de saúde, reduzir deslocamento). Se seus desejos passam de 30%, é hora de priorizar. Se você não consegue guardar 20%, comece com 5% e aumente gradualmente.</p>

<h2>Passo 5: Automatize o que puder</h2>

<p>A melhor decisão financeira é a que você não precisa tomar todo dia. No dia do pagamento:</p>

<ul>
<li>Transferência automática de 20% para conta de investimento (Tesouro Selic, CDB de liquidez diária)</li>
<li>Débito automático das contas essenciais (aluguel, luz, internet)</li>
<li>O que sobra é o que você pode gastar — sem culpa</li>
</ul>

<p>Bancos como <strong>Nubank</strong> e <strong>Inter</strong> permitem criar "caixinhas" ou metas de poupança com rendimento automático. É uma forma simples de separar dinheiro sem precisar de conta em corretora.</p>

<h2>Passo 6: Revise mensalmente (15 minutos bastam)</h2>

<p>No último dia do mês, abra o app e verifique: gastei mais do que planejei? Em qual categoria? O que posso ajustar? Essa revisão de 15 minutos vale mais do que qualquer planilha sofisticada que você nunca vai abrir.</p>

<h2>Próximo passo</h2>

<p>Se ao montar o orçamento você descobriu que está endividado, o próximo passo é <a href="${pageHref(SLUG_DIVIDAS)}">sair das dívidas com estratégia</a>. Se já está no positivo, vá direto para <a href="${pageHref(SLUG_INVESTIR)}">onde investir com pouco dinheiro</a>.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    allGuideLinks(SLUG_ORCAMENTO),
    { type: 'adSlot', slotId: 'fin-orcamento-bottom', format: 'responsive' },
  ],
}

// PÁGINA 2: DÍVIDAS

const pageDividas: PageSchema = {
  id: 'fin-dividas', siteKey: SITE_KEY, type: 'article', slug: SLUG_DIVIDAS,
  title: 'Como sair das dívidas', status: 'published',
  meta: { title: 'Como sair das dívidas: renegociação, prioridade e estratégia real', description: 'Estratégia prática para quitar dívidas: priorizar por juros, renegociar via Serasa e Desenrola, trocar dívida cara por barata.' },
  blocks: [
    breadcrumb('Sair das dívidas', SLUG_DIVIDAS),
    {
      type: 'articleContent',
      html: `
<p>Se você está endividado, a primeira coisa a entender é: isso não é uma falha moral. 79,5% das famílias brasileiras estão na mesma situação. O que importa agora é estratégia — pagar a dívida certa primeiro, renegociar o que for possível e parar de alimentar o ciclo.</p>

<h2>Passo 1: Liste todas as dívidas</h2>

<p>Anote cada dívida com: credor, valor total, parcela mensal, taxa de juros e o que acontece se não pagar (negativação, perda de bem, etc.). Se não sabe os juros, ligue e pergunte — é seu direito.</p>

<h2>Passo 2: Priorize pela taxa de juros</h2>

<p>Pague primeiro as dívidas com juros mais altos. Essa é a regra número um — e muita gente faz o contrário (paga o que incomoda mais, não o que custa mais).</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'comparisonTable',
      headers: ['Tipo de dívida', 'Taxa de juros média (2026)', 'Prioridade'],
      rows: [
        { label: 'Cartão rotativo', values: ['~430% ao ano', '🔴 Máxima — quitar imediatamente'] },
        { label: 'Cheque especial', values: ['~150% ao ano', '🔴 Máxima — quitar imediatamente'] },
        { label: 'Crediário/carnê', values: ['~80-120% ao ano', '🟠 Alta'] },
        { label: 'Empréstimo pessoal', values: ['~50-90% ao ano', '🟠 Alta'] },
        { label: 'Empréstimo consignado', values: ['~25-35% ao ano', '🟡 Média'] },
        { label: 'Financiamento de veículo', values: ['~20-30% ao ano', '🟡 Média'] },
        { label: 'Financiamento imobiliário', values: ['~10-12% ao ano', '🟢 Baixa (juros menores)'] },
      ],
    },
    {
      type: 'articleContent',
      html: `
<h2>Passo 3: Renegocie o que puder</h2>

<p>Duas plataformas facilitam a renegociação em 2026:</p>

<ul>
<li><strong><a href="https://www.serasa.com.br/limpa-nome" target="_blank" rel="noopener">Serasa Limpa Nome</a>:</strong> plataforma de renegociação de dívidas com desconto. Bancos, financeiras, telecom e varejistas participam. Descontos podem chegar a 90% em dívidas antigas. Acesso gratuito pelo app ou site.</li>
<li><strong><a href="https://www.gov.br/fazenda/pt-br/assuntos/desenrola-brasil" target="_blank" rel="noopener">Desenrola Brasil</a>:</strong> programa do governo federal para renegociação de dívidas de até R$ 20.000. Condições especiais e parcelas acessíveis. Consulte se sua dívida é elegível.</li>
<li><strong><a href="https://www.consumidor.gov.br/" target="_blank" rel="noopener">Consumidor.gov.br</a>:</strong> plataforma do governo para reclamações e negociação direta com empresas. Taxa de resolução acima de 80%.</li>
</ul>

<h2>Passo 4: Troque dívida cara por dívida barata</h2>

<p>Se você tem R$ 5.000 no cartão rotativo (430% a.a.) e consegue um empréstimo consignado (25% a.a.) para quitar, você economiza R$ 20.000+ em juros ao longo de um ano. Isso se chama <strong>portabilidade de dívida</strong> — e é uma das melhores jogadas financeiras que você pode fazer.</p>

<p>Bancos como <strong>Nubank</strong>, <strong>Inter</strong> e <strong>C6</strong> oferecem empréstimos pessoais com taxas menores que o rotativo. O <strong>Banco do Brasil</strong> e a <strong>Caixa</strong> têm linhas de consignado para servidores públicos com taxas ainda mais baixas.</p>

<h2>Passo 5: Pare de criar dívida nova</h2>

<ul>
<li>Congele o cartão de crédito (literalmente, se precisar)</li>
<li>Cancele o cheque especial ou peça redução do limite</li>
<li>Compre à vista ou não compre</li>
<li>Não faça empréstimo para cobrir outro empréstimo (exceto portabilidade com taxa menor)</li>
</ul>

<h2>Próximo passo</h2>

<p>Quando as dívidas com juros altos estiverem quitadas, comece a construir sua reserva de emergência. Veja em <a href="${pageHref(SLUG_INVESTIR)}">Onde investir com pouco dinheiro</a>.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'callout',
      content: 'Regra de ouro: pagar 200% de juros e ganhar 15% investindo não faz sentido matemático. Quite as dívidas caras ANTES de investir. A exceção é a reserva de emergência mínima (1 mês de despesas) para não cair no cheque especial de novo.',
      calloutType: 'warning',
    },
    allGuideLinks(SLUG_DIVIDAS),
    { type: 'adSlot', slotId: 'fin-dividas-bottom', format: 'responsive' },
  ],
}

// PÁGINA 3: INVESTIMENTOS

const pageInvestir: PageSchema = {
  id: 'fin-investir', siteKey: SITE_KEY, type: 'article', slug: SLUG_INVESTIR,
  title: 'Onde investir com pouco dinheiro', status: 'published',
  meta: { title: 'Onde investir com pouco dinheiro: do Tesouro Selic ao primeiro FII', description: 'Reserva de emergência, Tesouro Direto, CDB, LCI, LCA, FIIs e ETFs — com valores mínimos, rendimentos reais e comparação honesta.' },
  blocks: [
    breadcrumb('Investir', SLUG_INVESTIR),
    {
      type: 'articleContent',
      html: `
<p>Se você quitou as dívidas caras e montou o orçamento, agora é hora de fazer o dinheiro trabalhar para você. Com a Selic a 15%, renda fixa está rendendo como não rendia há anos — e você pode começar com R$ 30. Não precisa de muito dinheiro; precisa de consistência.</p>

<h2>Primeiro: a reserva de emergência</h2>

<p>Antes de investir em qualquer coisa, monte uma reserva de emergência. Ela cobre imprevistos (perda de emprego, doença, conserto do carro) sem que você precise recorrer ao cheque especial.</p>

<p><strong>Quanto:</strong> 3 a 6 meses das suas despesas mensais. Se gasta R$ 3.000/mês, a reserva ideal é R$ 9.000-18.000.</p>

<p><strong>Onde:</strong> em investimento de <strong>liquidez diária</strong> — ou seja, que você pode resgatar a qualquer momento. As duas melhores opções:</p>

<ul>
<li><strong>Tesouro Selic:</strong> título público do governo federal. Rende ~15% ao ano (acompanha a Selic). Investimento mínimo de R$ 30. Liquidez D+1 (resgata hoje, cai amanhã). É o investimento mais seguro do Brasil.</li>
<li><strong>CDB de liquidez diária:</strong> oferecido por bancos como <strong>Nubank</strong> (100% CDI), <strong>Inter</strong> e <strong>Sofisa Direto</strong>. Rendimento similar ao Tesouro Selic, com a praticidade de resgatar direto pelo app do banco.</li>
</ul>

<p><strong>Onde NÃO deixar:</strong> na poupança. Com Selic a 15%, a poupança rende ~6% ao ano. Tesouro Selic rende ~15%. A diferença é gritante — R$ 10.000 na poupança rendem R$ 600/ano. No Tesouro Selic, R$ 1.500/ano.</p>

<h2>Depois da reserva: renda fixa para objetivos</h2>

<p>Com a reserva montada, você pode investir para objetivos de médio prazo (1-5 anos) em produtos de renda fixa mais rentáveis:</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'comparisonTable',
      headers: ['Investimento', 'Rendimento (Selic 15%)', 'Mínimo', 'Liquidez', 'IR', 'Indicado para'],
      rows: [
        { label: 'Tesouro Selic', values: ['~15% a.a.', 'R$ 30', 'D+1', 'Sim (regressivo)', 'Reserva de emergência'] },
        { label: 'CDB 100% CDI', values: ['~15% a.a.', 'R$ 1-100', 'Varia', 'Sim (regressivo)', 'Reserva + curto prazo'] },
        { label: 'CDB 120% CDI', values: ['~18% a.a.', 'R$ 1.000+', '1-3 anos', 'Sim (regressivo)', 'Médio prazo'] },
        { label: 'LCI/LCA', values: ['~13-14% a.a.', 'R$ 1.000+', '90 dias+', 'Isento', 'Quem quer isenção de IR'] },
        { label: 'Tesouro IPCA+', values: ['IPCA + 7-8%', 'R$ 30', 'D+1 (com risco)', 'Sim', 'Longo prazo (aposentadoria)'] },
        { label: 'Poupança', values: ['~6% a.a.', 'R$ 1', 'Imediata', 'Isento', '⚠️ Perde para a inflação'] },
      ],
    },
    {
      type: 'adSlot',
      slotId: 'fin-investir-mid',
      format: 'responsive',
    },
    {
      type: 'articleContent',
      html: `
<h3>O que é o IR regressivo</h3>

<p>Investimentos de renda fixa (exceto LCI/LCA) pagam Imposto de Renda sobre o rendimento, com alíquota que diminui com o tempo:</p>

<ul>
<li>Até 180 dias: 22,5%</li>
<li>181-360 dias: 20%</li>
<li>361-720 dias: 17,5%</li>
<li>Acima de 720 dias: 15%</li>
</ul>

<p>Por isso, quanto mais tempo você deixar investido, menos imposto paga. E por isso LCI/LCA (isentas de IR) são atrativas mesmo rendendo menos — o rendimento líquido pode empatar ou superar CDBs tributados.</p>

<h2>Renda variável para quem já tem base</h2>

<p>Só considere renda variável depois de ter: reserva de emergência completa, zero dívidas caras e dinheiro que você não vai precisar nos próximos 5+ anos. As opções mais acessíveis para iniciantes:</p>

<ul>
<li><strong>FIIs (Fundos Imobiliários):</strong> cotas a partir de R$ 10-100. Pagam dividendos mensais isentos de IR para pessoa física. É como ter um pedaço de um imóvel comercial sem comprar o imóvel inteiro. Exemplos populares: HGLG11, XPLG11, MXRF11.</li>
<li><strong>ETFs:</strong> fundos que replicam índices. BOVA11 replica o Ibovespa. IVVB11 replica o S&P 500 americano. Diversificação instantânea com uma única compra.</li>
<li><strong>Ações fracionárias:</strong> você pode comprar 1 ação de empresas como Itaú, Vale ou Petrobras por R$ 20-80. Mas ações exigem estudo — não compre pelo nome da empresa sem entender o negócio.</li>
</ul>

<h2>Onde abrir conta para investir</h2>

<p>Detalhamos as opções em <a href="${pageHref(SLUG_BANCOS)}">Bancos digitais e corretoras</a>, mas o resumo rápido:</p>

<ul>
<li><strong>Só quer renda fixa simples:</strong> <strong>Nubank</strong> ou <strong>Inter</strong> — já tem CDB e Tesouro Direto integrado ao app do banco.</li>
<li><strong>Quer diversificar (FIIs, ações, ETFs):</strong> <strong>Rico</strong>, <strong>Clear</strong> ou <strong>Nu Invest</strong> — corretoras com taxa zero para ações e plataforma educativa.</li>
<li><strong>Quer assessoria:</strong> <strong>XP</strong> ou <strong>BTG Pactual Digital</strong> — assessores ajudam a montar carteira, mas geralmente exigem valor mínimo.</li>
</ul>

<h2>Próximo passo</h2>

<p>Para escolher onde abrir conta com mais detalhe, veja <a href="${pageHref(SLUG_BANCOS)}">Bancos digitais e corretoras: qual escolher</a>.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    allGuideLinks(SLUG_INVESTIR),
    { type: 'adSlot', slotId: 'fin-investir-bottom', format: 'responsive' },
  ],
}

// PÁGINA 4: BANCOS E CORRETORAS

const pageBancos: PageSchema = {
  id: 'fin-bancos', siteKey: SITE_KEY, type: 'article', slug: SLUG_BANCOS,
  title: 'Bancos digitais e corretoras', status: 'published',
  meta: { title: 'Bancos digitais e corretoras: qual escolher para cada objetivo', description: 'Nubank vs Inter vs C6, corretoras para iniciantes (XP, Rico, Clear, BTG), conta remunerada e cashback — comparação prática.' },
  blocks: [
    breadcrumb('Bancos e corretoras', SLUG_BANCOS),
    {
      type: 'articleContent',
      html: `
<p>A quantidade de bancos digitais e corretoras disponíveis em 2026 é enorme — e cada um se posiciona de um jeito diferente. Em vez de listar todos, vamos focar nos que realmente fazem diferença e para qual perfil cada um serve melhor.</p>

<h2>Bancos digitais para o dia a dia</h2>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'comparisonTable',
      headers: ['Banco', 'Conta remunerada', 'Cartão de crédito', 'Investimentos', 'Diferencial', 'Ideal para'],
      rows: [
        { label: 'Nubank', values: ['100% CDI (automático)', 'Sem anuidade', 'CDB, Tesouro, FIIs (Nu Invest)', 'Experiência de uso impecável', 'Quem quer simplicidade'] },
        { label: 'Inter', values: ['100% CDI', 'Sem anuidade + cashback', 'CDB, FIIs, ações, criptos', 'Super app (shopping, seguros, viagens)', 'Quem quer tudo em um lugar'] },
        { label: 'C6 Bank', values: ['100% CDI', 'Sem anuidade (básico)', 'CDB, fundos', 'Conta global em dólar', 'Quem viaja ou quer exposição ao dólar'] },
        { label: 'PicPay', values: ['102% CDI', 'Sem anuidade', 'CDB', 'Rendimento acima de 100% CDI', 'Quem busca rendimento máximo na conta'] },
        { label: 'Mercado Pago', values: ['100% CDI', 'Sem anuidade', 'CDB', 'Integração com Mercado Livre', 'Quem já usa o ecossistema ML'] },
      ],
    },
    {
      type: 'articleContent',
      html: `
<p>Todos esses bancos são seguros (cobertos pelo FGC até R$ 250.000 por CPF/instituição) e não cobram tarifa de manutenção. A diferença está nos detalhes — e no que você mais usa.</p>

<h2>Corretoras para investimentos</h2>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'comparisonTable',
      headers: ['Corretora', 'Taxa p/ ações', 'Renda fixa', 'Assessoria', 'Plataforma', 'Ideal para'],
      rows: [
        { label: 'Rico', values: ['Zero', 'Boa variedade', 'Sim (online)', 'Educativa, conteúdo forte', 'Iniciantes que querem aprender'] },
        { label: 'XP', values: ['Zero', 'Maior variedade do mercado', 'Sim (presencial e online)', 'Completa, profissional', 'Quem quer assessoria personalizada'] },
        { label: 'BTG Digital', values: ['Zero', 'Muito boa', 'Sim (premium)', 'Sofisticada', 'Investidor intermediário/avançado'] },
        { label: 'Clear', values: ['Zero', 'Básica', 'Não', 'Foco em trading', 'Day traders e operadores ativos'] },
        { label: 'Nu Invest', values: ['Zero', 'CDB, Tesouro, FIIs', 'Não', 'Integrada ao Nubank', 'Quem já é Nubank e quer começar simples'] },
      ],
    },
    {
      type: 'adSlot',
      slotId: 'fin-bancos-mid',
      format: 'responsive',
    },
    {
      type: 'articleContent',
      html: `
<h2>Preciso de banco E corretora?</h2>

<p>Depende. Se você só quer renda fixa simples (CDB, Tesouro Direto), o app do <strong>Nubank</strong> ou <strong>Inter</strong> resolve — eles já integram investimentos básicos. Se você quer diversificar para FIIs, ETFs e ações com mais opções e melhor plataforma, vale abrir conta numa corretora como a <strong>Rico</strong> ou <strong>XP</strong>. As duas coisas são gratuitas — não tem por que não ter as duas.</p>

<h2>O que é o FGC e por que importa</h2>

<p>O <a href="https://www.fgc.org.br/" target="_blank" rel="noopener">Fundo Garantidor de Créditos (FGC)</a> protege depósitos e investimentos em CDB, LCI, LCA e poupança em até R$ 250.000 por CPF por instituição financeira. Se o banco quebrar, o FGC devolve seu dinheiro. Isso significa que CDBs de bancos menores (que geralmente pagam mais) são tão seguros quanto CDBs de bancões — desde que dentro do limite do FGC.</p>

<h2>Próximo passo</h2>

<p>Com conta aberta e investimentos funcionando, é hora de entender como pagar menos imposto legalmente. Veja em <a href="${pageHref(SLUG_IR)}">Imposto de Renda e previdência</a>.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    allGuideLinks(SLUG_BANCOS),
    { type: 'adSlot', slotId: 'fin-bancos-bottom', format: 'responsive' },
  ],
}

// PÁGINA 5: IR E PREVIDÊNCIA

const pageIR: PageSchema = {
  id: 'fin-ir', siteKey: SITE_KEY, type: 'article', slug: SLUG_IR,
  title: 'Imposto de Renda e previdência', status: 'published',
  meta: { title: 'Imposto de Renda e previdência: o que muda em 2026 e como pagar menos', description: 'Declaração de IR, deduções legais, PGBL vs VGBL, FGTS Digital e estratégias para reduzir imposto em 2026.' },
  blocks: [
    breadcrumb('IR e previdência', SLUG_IR),
    {
      type: 'articleContent',
      html: `
<p>Imposto de Renda não precisa ser bicho de sete cabeças. Na verdade, entender as regras básicas pode te fazer economizar milhares de reais por ano — legalmente. E a previdência privada, quando usada direito, é uma ferramenta de planejamento tributário poderosa.</p>

<h2>Quem precisa declarar em 2026</h2>

<p>É obrigado a declarar quem, em 2025, se enquadrou em pelo menos um destes critérios:</p>

<ul>
<li>Rendimentos tributáveis acima de R$ 33.888 no ano (aprox. R$ 2.824/mês)</li>
<li>Rendimentos isentos acima de R$ 200.000</li>
<li>Posse de bens acima de R$ 800.000</li>
<li>Operações em bolsa de valores acima de R$ 40.000 no ano</li>
<li>Receita bruta de atividade rural acima de R$ 169.440</li>
</ul>

<p>Se você não é obrigado mas teve IR retido na fonte, pode valer a pena declarar para receber a restituição.</p>

<h2>As deduções que mais gente ignora</h2>

<p>Deduções reduzem a base de cálculo do IR — ou seja, você paga imposto sobre um valor menor. As principais:</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'comparisonTable',
      headers: ['Dedução', 'Limite anual', 'O que precisa', 'Quem pode usar'],
      rows: [
        { label: 'Dependentes', values: ['R$ 2.275,08/dependente', 'CPF do dependente', 'Declaração completa'] },
        { label: 'Educação', values: ['R$ 3.561,50/pessoa', 'Comprovante da instituição', 'Declaração completa'] },
        { label: 'Saúde', values: ['Sem limite', 'Recibos e notas fiscais', 'Declaração completa'] },
        { label: 'PGBL', values: ['Até 12% da renda bruta', 'Informe do plano', 'Declaração completa'] },
        { label: 'Pensão alimentícia', values: ['Sem limite', 'Decisão judicial', 'Declaração completa'] },
        { label: 'Livro-caixa (autônomos)', values: ['Despesas profissionais', 'Notas e recibos', 'Quem emite RPA'] },
      ],
    },
    {
      type: 'articleContent',
      html: `
<h2>PGBL vs VGBL: qual escolher</h2>

<p>Previdência privada não é só para aposentadoria — é uma ferramenta tributária. A diferença entre os dois tipos:</p>

<p><strong>PGBL:</strong> você deduz até 12% da renda bruta anual do IR. Exemplo: renda de R$ 100.000 → deduz R$ 12.000 → economiza até R$ 3.300 de IR no ano. Mas na hora do resgate, paga IR sobre o valor total (contribuição + rendimento). Indicado para quem faz declaração completa.</p>

<p><strong>VGBL:</strong> não deduz nada do IR agora. Mas na hora do resgate, paga IR apenas sobre o rendimento (não sobre o que contribuiu). Indicado para quem faz declaração simplificada ou já estourou o limite de 12% no PGBL.</p>

<p>Nos dois casos, escolha a <strong>tabela regressiva de tributação</strong> se planeja manter por mais de 10 anos — a alíquota cai de 35% para 10% conforme o tempo.</p>

<h2>FGTS Digital</h2>

<p>O <a href="https://www.gov.br/trabalho-e-emprego/pt-br/servicos/empregador/fgtsdigital" target="_blank" rel="noopener">FGTS Digital</a> é o novo sistema de gestão do Fundo de Garantia. Para o trabalhador, a principal mudança é a facilidade de consulta e a possibilidade de usar o saldo para:</p>

<ul>
<li>Saque-aniversário (resgate parcial anual)</li>
<li>Compra de imóvel</li>
<li>Amortização de financiamento imobiliário</li>
<li>Complemento de aposentadoria</li>
</ul>

<p>Atenção ao saque-aniversário: ele libera um valor pequeno anualmente, mas bloqueia o saque total em caso de demissão. Para quem tem emprego estável, pode fazer sentido. Para quem tem instabilidade, é arriscado.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'adSlot',
      slotId: 'fin-ir-mid',
      format: 'responsive',
    },
    {
      type: 'articleContent',
      html: `
<h2>Investimentos e IR: o que você precisa saber</h2>

<ul>
<li><strong>Poupança, LCI, LCA e dividendos de FIIs:</strong> isentos de IR para pessoa física</li>
<li><strong>CDB, Tesouro Direto, fundos:</strong> IR regressivo (22,5% a 15% conforme o prazo)</li>
<li><strong>Ações:</strong> isenção para vendas até R$ 20.000/mês. Acima disso, 15% sobre o lucro</li>
<li><strong>Day trade:</strong> 20% sobre qualquer lucro, sem isenção</li>
</ul>

<p>Dica: o IR de renda fixa é retido na fonte (o banco já desconta). Para ações e FIIs, você é responsável por calcular e pagar via DARF. Aplicativos como <strong><a href="https://www.kinvo.com.br/" target="_blank" rel="noopener">Kinvo</a></strong> ajudam a controlar e calcular o IR dos investimentos.</p>

<h2>Próximo passo</h2>

<p>Para entender quando crédito e financiamento fazem sentido (e quando são armadilha), veja <a href="${pageHref(SLUG_CREDITO)}">Crédito e financiamento</a>.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    allGuideLinks(SLUG_IR),
    { type: 'adSlot', slotId: 'fin-ir-bottom', format: 'responsive' },
  ],
}

// PÁGINA 6: CRÉDITO E FINANCIAMENTO

const pageCredito: PageSchema = {
  id: 'fin-credito', siteKey: SITE_KEY, type: 'article', slug: SLUG_CREDITO,
  title: 'Crédito e financiamento', status: 'published',
  meta: { title: 'Crédito, financiamento e consórcio: quando faz sentido e quando é armadilha', description: 'Cartão de crédito, consignado, imobiliário, consórcio e portabilidade — taxas reais e quando cada um vale a pena.' },
  blocks: [
    breadcrumb('Crédito', SLUG_CREDITO),
    {
      type: 'articleContent',
      html: `
<p>Crédito não é dinheiro — é dinheiro do futuro que você está usando hoje, com custo. Num cenário de Selic a 15%, esse custo está alto. Mas existem situações em que usar crédito faz sentido estratégico. A questão é saber distinguir.</p>

<h2>Cartão de crédito: aliado ou inimigo</h2>

<p><strong>Quando funciona:</strong> pagar a fatura integralmente todo mês, acumular pontos/cashback, usar o prazo de 30-40 dias como float (seu dinheiro rende enquanto a fatura não vence).</p>

<p><strong>Quando vira armadilha:</strong> pagar o mínimo, usar o rotativo, parcelar compras supérfluas, ter limite maior que sua renda mensal.</p>

<p>Cartões com cashback que se pagam: <strong>Inter Black</strong> (1% cashback), <strong>C6 Carbon</strong> (pontos agressivos), <strong>Nubank Ultravioleta</strong> (1% cashback + benefícios).</p>

<h2>Tipos de crédito: do mais caro ao mais barato</h2>
      `,
      publishedAt: PUBLISHED_AT,
    },
    {
      type: 'comparisonTable',
      headers: ['Modalidade', 'Taxa média (2026)', 'Prazo', 'Garantia', 'Quando faz sentido'],
      rows: [
        { label: 'Cartão rotativo', values: ['~430% a.a.', '—', 'Nenhuma', '❌ Nunca'] },
        { label: 'Cheque especial', values: ['~150% a.a.', '—', 'Nenhuma', '❌ Emergência extrema (máx 3 dias)'] },
        { label: 'Empréstimo pessoal', values: ['~50-90% a.a.', '12-60 meses', 'Nenhuma', '⚠️ Para trocar dívida mais cara'] },
        { label: 'Consignado privado', values: ['~25-35% a.a.', '12-84 meses', 'Desconto em folha', '✅ Melhor taxa para CLT'] },
        { label: 'Consignado público', values: ['~18-25% a.a.', '12-96 meses', 'Desconto em folha', '✅ Melhor taxa disponível'] },
        { label: 'Financiamento imobiliário', values: ['~10-12% a.a.', '5-35 anos', 'O imóvel', '✅ Para quem vai morar'] },
        { label: 'Consórcio', values: ['Sem juros (+ taxa adm)', '5-15 anos', 'Carta de crédito', '✅ Para quem não tem pressa'] },
      ],
    },
    {
      type: 'articleContent',
      html: `
<h2>Financiamento imobiliário: a maior decisão financeira da vida</h2>

<p>Com Selic a 15%, as taxas de financiamento imobiliário estão entre 10-12% ao ano — altas historicamente. Isso significa parcelas mais pesadas e custo total maior. Antes de financiar, pergunte:</p>

<ul>
<li>A parcela cabe em 30% da minha renda líquida? (regra do comprometimento máximo)</li>
<li>Tenho entrada de pelo menos 20%?</li>
<li>Consigo manter a reserva de emergência mesmo pagando as parcelas?</li>
<li>Esse imóvel vai servir para mim nos próximos 5-10 anos?</li>
</ul>

<p>Se respondeu sim a tudo, faz sentido. Se respondeu não a qualquer uma, espere ou considere aluguel. Bancos que oferecem as melhores taxas em 2026: <strong>Caixa</strong> (líder de mercado), <strong>Itaú</strong>, <strong>Bradesco</strong>, <strong>Inter</strong> (100% digital).</p>

<h2>Portabilidade: sua melhor ferramenta</h2>

<p>Portabilidade de crédito é transferir sua dívida de um banco para outro com taxa menor. O <a href="https://www.bcb.gov.br/" target="_blank" rel="noopener">Banco Central</a> garante esse direito. Funciona para financiamento imobiliário, consignado e empréstimo pessoal. O processo é gratuito — o novo banco assume a dívida com condições melhores.</p>

<p>Dica: antes de pedir portabilidade, negocie com seu banco atual. Muitos oferecem redução de taxa para não perder o cliente.</p>

<h2>Consórcio: para quem não tem pressa</h2>

<p>Consórcio não tem juros — mas tem taxa de administração (15-25% do valor total ao longo do prazo). É uma forma de disciplina de poupança com a vantagem de poder ser contemplado antes do final. Funciona bem para veículos e imóveis quando você não tem pressa de comprar. Principais administradoras: <strong>Porto Seguro</strong>, <strong>Itaú</strong>, <strong>Bradesco</strong>, <strong>Volkswagen</strong> (veículos).</p>

<h2>Conclusão do guia</h2>

<p>Você percorreu todo o guia: <a href="${pageHref(SLUG_ORCAMENTO)}">organizou o orçamento</a>, entendeu <a href="${pageHref(SLUG_DIVIDAS)}">como sair das dívidas</a>, aprendeu <a href="${pageHref(SLUG_INVESTIR)}">onde investir</a>, escolheu <a href="${pageHref(SLUG_BANCOS)}">banco e corretora</a>, descobriu <a href="${pageHref(SLUG_IR)}">como pagar menos IR</a> e agora sabe quando crédito faz sentido.</p>

<p>O próximo passo é prático: abra o app, anote os gastos dos próximos 30 dias e monte seu primeiro orçamento. Tudo começa por aí.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    allGuideLinks(SLUG_CREDITO),
    { type: 'adSlot', slotId: 'fin-credito-bottom', format: 'responsive' },
  ],
}

// EDITORIAL 1: APPS

const editorialApps: PageSchema = {
  id: 'fin-ed-apps', siteKey: SITE_KEY, type: 'article', slug: SLUG_ED_APPS,
  title: '5 apps para controlar suas finanças em 2026', status: 'published',
  meta: { title: '5 apps para controlar suas finanças em 2026: qual escolher', description: 'Comparação prática de Mobills, Organizze, GuiaBolso, Kinvo e apps de banco para controle financeiro diário.' },
  blocks: [
    breadcrumb('Apps de controle', SLUG_ED_APPS),
    {
      type: 'articleContent',
      html: `
<p>O melhor app de finanças é o que você vai usar todo dia. Não adianta o mais completo do mercado se você abre uma vez e nunca mais volta. Aqui estão cinco opções testadas, cada uma com um perfil diferente.</p>

<h2>1. Mobills — o mais popular</h2>
<p>App brasileiro com mais de 10 milhões de downloads. Interface limpa, categorização automática de gastos, gráficos claros e metas de economia. Versão gratuita já resolve para a maioria. Premium (R$ 12/mês) adiciona cartões de crédito ilimitados, planejamento de objetivos e relatórios detalhados. Disponível para iOS e Android.</p>

<h2>2. Organizze — o mais simples</h2>
<p>Para quem quer anotar entradas e saídas sem configuração complexa. Interface minimalista, funciona offline, sincroniza entre dispositivos. Versão gratuita limitada a uma conta. Premium (R$ 8/mês) libera contas ilimitadas e gráficos. Ideal para quem está começando e quer algo direto.</p>

<h2>3. GuiaBolso — o mais automatizado</h2>
<p>Integra via Open Finance com seus bancos e puxa transações automaticamente. Categoriza gastos, mostra score de crédito e oferece comparações de serviços financeiros. A desvantagem: exige compartilhamento de dados bancários (via Open Finance regulado pelo Banco Central). Para quem confia no sistema e quer zero trabalho manual.</p>

<h2>4. Kinvo — para investimentos</h2>
<p>Não é app de orçamento — é app de controle de investimentos. Conecta com corretoras, calcula rentabilidade real (descontando inflação e IR), mostra diversificação da carteira e gera relatórios para declaração de IR. Essencial para quem tem investimentos em mais de uma corretora. Versão gratuita para até 1 corretora; premium (R$ 16/mês) para múltiplas.</p>

<h2>5. App do seu banco — o que você já tem</h2>
<p><strong>Nubank</strong>, <strong>Inter</strong> e <strong>C6</strong> já incluem funcionalidades de controle de gastos, categorização automática e metas de poupança. Se você não quer instalar mais um app, explore o que seu banco já oferece — pode ser suficiente para começar. O Nubank, por exemplo, mostra categorização automática de gastos do cartão e permite criar "caixinhas" com rendimento automático.</p>

<p>Para o guia completo de como montar seu orçamento com qualquer uma dessas ferramentas, veja <a href="${pageHref(SLUG_ORCAMENTO)}">Como organizar seu orçamento</a>.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    allGuideLinks(SLUG_ED_APPS),
  ],
}

// EDITORIAL 2: ENERGIA SOLAR COMO INVESTIMENTO

const editorialSolar: PageSchema = {
  id: 'fin-ed-solar', siteKey: SITE_KEY, type: 'article', slug: SLUG_ED_SOLAR,
  title: 'Energia solar como investimento', status: 'published',
  meta: { title: 'Energia solar como investimento: como se compara com renda fixa', description: 'Comparação de retorno entre energia solar residencial e investimentos tradicionais — payback, TIR e economia real em 2026.' },
  blocks: [
    breadcrumb('Solar como investimento', SLUG_ED_SOLAR),
    {
      type: 'articleContent',
      html: `
<p>Energia solar residencial é, do ponto de vista financeiro, um investimento. Você aplica R$ 15.000-35.000 na instalação e recebe "dividendos" mensais na forma de economia na conta de luz — por 25+ anos. A pergunta natural é: vale mais a pena do que aplicar esse dinheiro em renda fixa?</p>

<h2>Os números</h2>

<p>Um sistema solar residencial médio (5 kWp) em 2026:</p>

<ul>
<li><strong>Investimento:</strong> R$ 18.000-25.000</li>
<li><strong>Economia mensal:</strong> R$ 350-500 na conta de luz</li>
<li><strong>Payback:</strong> 4-6 anos</li>
<li><strong>Vida útil:</strong> 25-30 anos</li>
<li><strong>TIR (Taxa Interna de Retorno):</strong> 18-25% ao ano</li>
</ul>

<p>Compare com renda fixa em 2026:</p>

<ul>
<li>Tesouro Selic: ~15% ao ano (bruto), ~12,75% (líquido de IR)</li>
<li>CDB 120% CDI: ~18% ao ano (bruto), ~15,3% (líquido de IR)</li>
</ul>

<p>A TIR da energia solar (18-25%) supera a maioria dos investimentos de renda fixa — e com uma vantagem crucial: a economia na conta de luz é isenta de imposto. Você não paga IR sobre a energia que deixou de comprar.</p>

<h2>Quando energia solar ganha da renda fixa</h2>

<ul>
<li><strong>Conta de luz alta (> R$ 300/mês):</strong> quanto maior a conta, maior a economia e maior o retorno</li>
<li><strong>Telhado próprio com boa orientação solar:</strong> sem custo de aluguel de telhado</li>
<li><strong>Horizonte longo:</strong> depois do payback, é economia pura por 20+ anos</li>
<li><strong>Proteção contra inflação energética:</strong> tarifas sobem, sua geração não</li>
</ul>

<h2>Quando renda fixa ganha</h2>

<ul>
<li><strong>Imóvel alugado:</strong> você pode sair a qualquer momento, o sistema fica</li>
<li><strong>Conta de luz baixa (< R$ 150/mês):</strong> o investimento mínimo é o mesmo, mas a economia é menor</li>
<li><strong>Liquidez:</strong> renda fixa você resgata; painel solar você não resgata</li>
</ul>

<p>Para o guia completo de energia solar — como funciona, custos, equipamentos e instalação — veja nosso <a href="${SOLAR_SITE}">Guia de Energia Solar Residencial</a>.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    allGuideLinks(SLUG_ED_SOLAR),
  ],
}

// EDITORIAL 3: ERROS COMUNS

const editorialErros: PageSchema = {
  id: 'fin-ed-erros', siteKey: SITE_KEY, type: 'article', slug: SLUG_ED_ERROS,
  title: '8 erros financeiros comuns', status: 'published',
  meta: { title: '8 erros financeiros que a maioria dos brasileiros comete sem perceber', description: 'Os erros mais comuns em finanças pessoais: rotativo, falta de reserva, poupança, investir sem quitar dívida e outros.' },
  blocks: [
    breadcrumb('Erros comuns', SLUG_ED_ERROS),
    {
      type: 'articleContent',
      html: `
<p>Esses erros não são óbvios — se fossem, ninguém os cometeria. São hábitos que parecem inofensivos mas corroem as finanças silenciosamente.</p>

<h2>1. Pagar o mínimo do cartão de crédito</h2>
<p>O rotativo cobra ~430% ao ano. Pagar o mínimo de R$ 1.000 e carregar o resto transforma essa dívida em R$ 5.000 em 12 meses. Se não pode pagar a fatura inteira, parcele o total (juros de ~8-12% ao mês) — é muito menos que o rotativo (~25-35% ao mês). Ver <a href="${pageHref(SLUG_DIVIDAS)}">Como sair das dívidas</a>.</p>

<h2>2. Não ter reserva de emergência</h2>
<p>Sem reserva, qualquer imprevisto vira dívida no cheque especial (150% a.a.). Monte pelo menos 3 meses de despesas em Tesouro Selic ou CDB de liquidez diária. É chato, é devagar, mas é o que separa quem se endivida de quem não se endivida. Ver <a href="${pageHref(SLUG_INVESTIR)}">Onde investir com pouco</a>.</p>

<h2>3. Deixar dinheiro na poupança</h2>
<p>Com Selic a 15%, a poupança rende ~6% ao ano. Inflação está em 4-5%. Rendimento real da poupança: 1-2% ao ano. Tesouro Selic rende ~15%. A diferença em R$ 10.000 ao longo de 5 anos é de mais de R$ 5.000. Trocar poupança por Tesouro Selic leva 10 minutos e não tem desvantagem.</p>

<h2>4. Investir sem quitar dívida cara</h2>
<p>Ganhar 15% ao ano investindo e pagar 200% ao ano no cartão é matemática negativa. Quite primeiro, invista depois. Exceção: reserva de emergência mínima para não cair no cheque especial de novo.</p>

<h2>5. Confundir faturamento com lucro (autônomos e MEIs)</h2>
<p>Se você é MEI ou autônomo, o dinheiro que entra não é seu lucro — é seu faturamento. Antes de gastar, separe: impostos (DAS, IR), custos do negócio, e só o que sobra é renda pessoal. Misturar CPF e CNPJ é a forma mais rápida de perder o controle.</p>

<h2>6. Não declarar Imposto de Renda quando deveria</h2>
<p>Muita gente deixa de declarar e perde restituição. Ou declara na simplificada quando a completa daria mais vantagem. 15 minutos de análise podem devolver R$ 500-3.000. Ver <a href="${pageHref(SLUG_IR)}">IR e previdência</a>.</p>

<h2>7. Comprar carro financiado sem fazer a conta completa</h2>
<p>Um carro de R$ 60.000 financiado em 60 meses custa R$ 90.000-100.000 no total (com juros, seguro, IPVA, manutenção). Adicione combustível e estacionamento: o custo real de ter carro chega a R$ 2.000-3.000/mês. Para quem mora em cidade com transporte público, a conta muitas vezes não fecha.</p>

<h2>8. Não aproveitar o PGBL para reduzir IR</h2>
<p>Se você faz declaração completa, pode deduzir até 12% da renda bruta com PGBL. Em renda de R$ 100.000/ano, são R$ 12.000 de dedução — economia de até R$ 3.300 de IR. É dinheiro que sobra para investir. Ver <a href="${pageHref(SLUG_IR)}">IR e previdência</a>.</p>
      `,
      publishedAt: PUBLISHED_AT,
    },
    allGuideLinks(SLUG_ED_ERROS),
  ],
}

// EXPORT

export const financasBrSite: SiteEntry = {
  config: {
    siteKey: SITE_KEY,
    publicName: 'Finanças BR',
    routePath: ROUTE_PATH,
    locale: 'pt-BR',
    market: 'BR',
    status: 'active',
    ui: { showAllSitesLink: false },
    theme: {
      brandName: 'Finanças BR',
      primaryColor: '#1e40af',
      accentColor: '#1d4ed8',
      surfaceColor: '#eff6ff',
      textColor: '#1e293b',
      radius: '12px',
      fontFamilyHeading: 'system-ui, -apple-system, sans-serif',
    },
    seo: {
      siteTitle: 'Finanças BR',
      defaultTitleTemplate: '%s | Finanças BR',
      defaultDescription: 'Guia prático de finanças pessoais no Brasil. Orçamento, dívidas, investimentos, bancos digitais, IR e crédito — com dados reais de 2026.',
      baseUrl: BASE_URL,
    },
    analytics: { ga4MeasurementId: 'G-DMJ9QJZ7ZW', enabled: true },
    monetization: {
      ads: { enabled: process.env.NEXT_PUBLIC_ADS_TEST_MODE !== 'true', provider: 'adsense', publisherId: 'ca-pub-7072076910984234' },
      affiliates: { enabled: false, programs: [] },
    },
  },
  pages: [
    homePage,
    pageOrcamento,
    pageDividas,
    pageInvestir,
    pageBancos,
    pageIR,
    pageCredito,
    editorialApps,
    editorialSolar,
    editorialErros,
  ],
}
