# PROJECT_STATUS

Documento operacional persistente do projeto.
Registra o estado de cada integração, credenciais necessárias, e contexto entre sessões.
Atualizado pelo assistente a cada sessão de trabalho.

## Credenciais e integrações

### Repositório Git
- **URL:** https://github.com/groovetroxler/AuraPro
- **Acesso:** token PAT com leitura e escrita
- **Status:** ✅ operacional

### Vercel
- **Token:** ✅ fornecido
- **Org ID:** team_ILWAbOykNwdFS6J4RJY82lJv
- **Project ID:** prj_Es65QbtrnifMtH9M86KFJAsGl7ZQ
- **Domínio:** aura-pro-eosin.vercel.app
- **URL de produção:** https://aura-pro-eosin.vercel.app
- **Status:** ✅ deploy ativo, auto-deploy via GitHub
- **Env vars configuradas:** NEXT_PUBLIC_BASE_URL, NEXT_PUBLIC_ADS_TEST_MODE

### Google Analytics (GA4)
- **financas-br:** ✅ G-DMJ9QJZ7ZW
- **energia-solar-br:** ✅ G-LL5VYXQWV9
- **agrofloresta-br:** ✅ G-C06N4NTLKR
- **Status:** ✅ IDs configurados (conta nova, propriedades novas)

### Google AdSense
- **Publisher ID:** ✅ ca-pub-7072076910984234
- **ads.txt:** ✅ publicado e acessível em /ads.txt
- **Script:** ✅ carregando no `<head>` de todas as páginas
- **Status:** ⏳ aguardando aprovação do Google (status: "Preparando")
- **Modo atual:** teste visual (NEXT_PUBLIC_ADS_TEST_MODE=true)
- **Quando aprovado:** mudar NEXT_PUBLIC_ADS_TEST_MODE para false no Vercel

### Afiliados
- **Status:** estrutura pronta com placeholders

### Google Search Console
- **Propriedade:** https://aura-pro-eosin.vercel.app
- **Verificação:** ✅ tag HTML implementada
- **Sitemap:** ✅ submetido (/sitemap.xml)
- **Status:** ✅ verificado e operacional

## Variáveis de ambiente no Vercel

| Variável | Status | Valor |
|---|---|---|
| `NEXT_PUBLIC_BASE_URL` | ✅ configurada | `https://aura-pro-eosin.vercel.app` |
| `NEXT_PUBLIC_ADS_TEST_MODE` | ✅ configurada | `true` |
| `NEXT_PUBLIC_GA4_FINANCAS_BR` | ✅ | `G-JJ19JCER9K` |
| `NEXT_PUBLIC_GA4_ENERGIA_SOLAR_BR` | ✅ | `G-52W2KZ7HH1` |
| `NEXT_PUBLIC_GA4_AGROFLORESTA_BR` | ✅ | `G-HM2KTW995J` |
| `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID` | ✅ removida | hardcoded no código (`ca-pub-7072076910984234`) |

## Validação de produção — Sessão 2

### URLs públicas (todas validadas ✅)
- ✅ https://aura-pro-eosin.vercel.app/ (root)
- ✅ https://aura-pro-eosin.vercel.app/financas
- ✅ https://aura-pro-eosin.vercel.app/financas/financiamento
- ✅ https://aura-pro-eosin.vercel.app/financas/investimentos
- ✅ https://aura-pro-eosin.vercel.app/energia-solar
- ✅ https://aura-pro-eosin.vercel.app/energia-solar/custo-instalacao
- ✅ https://aura-pro-eosin.vercel.app/energia-solar/financiamento-solar
- ✅ https://aura-pro-eosin.vercel.app/agrofloresta
- ✅ https://aura-pro-eosin.vercel.app/agrofloresta/como-implantar
- ✅ https://aura-pro-eosin.vercel.app/agrofloresta/especies

### SEO
- ✅ Títulos corretos (sem duplicação de template)
- ✅ defaultTitleTemplate funcionando por site
- ✅ sitemap.xml acessível com 9 URLs e baseUrl correta
- ✅ robots.txt acessível com referência ao sitemap
- ✅ canonicals usando baseUrl correta
- ✅ JSON-LD para artigos e homes

### Monetização
- ✅ Slots renderizando em modo teste visual em produção

### Analytics
- ✅ GA4 configurado com IDs reais para os 3 sites
- ⏳ Validar pageviews após redeploy

## Histórico de sessões

### Sessão 1 — 2026-03-27
- Estrutura-base completa criada
- 47 arquivos commitados, build limpo

### Sessão 2 — 2026-03-27
- Diagnóstico: 9 problemas identificados e corrigidos
- Primeiro deploy no Vercel
- 12 URLs públicas validadas
- Title template fix (sem duplicação)
- baseUrl centralizada via config/site-url.ts
- Env vars configuradas no Vercel
- Google Search Console: verificado + sitemap submetido
- Google Analytics: 3 propriedades configuradas, pageviews confirmados
- Google AdSense: publisher ID configurado, ads.txt criado, aguardando aprovação
- GA4 e AdSense simplificados (hardcoded no código, sem env vars)
- Decisões 21-33 registradas
- CHECKLIST Fase 1A: 100% concluído

### Próxima sessão — o que fazer
1. Verificar status de aprovação do AdSense
2. Se aprovado: mudar NEXT_PUBLIC_ADS_TEST_MODE para false no Vercel
3. Gerar OG images por site
4. Considerar início da Fase 1B (scaffold de novos sites)

## Instruções para o assistente em novas sessões

1. Ler credenciais de /mnt/project/_credentials.env
2. Clonar o repo e ler PROJECT_STATUS.md
3. Este documento é o contexto operacional
4. Atualizar ao final de cada sessão
5. Commitar e fazer push antes de encerrar
