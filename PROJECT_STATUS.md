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
- **Project ID:** prj_Es65QbtrnifMtH9M86KFJAsGl7ZQ
- **Domínio:** aura-pro-eosin.vercel.app
- **URL de produção:** https://aura-pro-eosin.vercel.app
- **Status:** ✅ deploy funcionando, auto-deploy via GitHub ativo
- **Pendente:** configurar NEXT_PUBLIC_BASE_URL no painel do Vercel

### Google Analytics (GA4)
- **financas-br:** ❌ ID não fornecido (analytics.enabled = false)
- **energia-solar-br:** ❌ ID não fornecido (analytics.enabled = false)
- **agrofloresta-br:** ❌ ID não fornecido (analytics.enabled = false)
- **Status:** ⏳ código pronto, aguardando IDs reais

### Google AdSense
- **Publisher ID:** ❌ não fornecido
- **Status:** ⏳ código pronto, rodando em modo teste visual
- **Nota:** quando fornecido, configurar NEXT_PUBLIC_ADSENSE_PUBLISHER_ID no Vercel

### Afiliados
- **Status:** estrutura pronta com placeholders

## Variáveis de ambiente necessárias no Vercel

| Variável | Status | Valor |
|---|---|---|
| `NEXT_PUBLIC_BASE_URL` | ⚠️ CONFIGURAR | `https://aura-pro-eosin.vercel.app` |
| `NEXT_PUBLIC_GA4_FINANCAS_BR` | ⏳ | G-XXXXXXXXXX |
| `NEXT_PUBLIC_GA4_ENERGIA_SOLAR_BR` | ⏳ | G-XXXXXXXXXX |
| `NEXT_PUBLIC_GA4_AGROFLORESTA_BR` | ⏳ | G-XXXXXXXXXX |
| `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID` | ⏳ | pub-XXXXXXXXXXXXXXXX |
| `NEXT_PUBLIC_ADS_TEST_MODE` | ⏳ | true |

## Validação de produção

### URLs públicas
- ✅ https://aura-pro-eosin.vercel.app/ (root — lista de sites)
- ✅ https://aura-pro-eosin.vercel.app/financas (home financas-br)
- ✅ https://aura-pro-eosin.vercel.app/financas/financiamento
- ✅ https://aura-pro-eosin.vercel.app/financas/investimentos
- ✅ https://aura-pro-eosin.vercel.app/energia-solar (home energia-solar-br)
- ✅ https://aura-pro-eosin.vercel.app/energia-solar/custo-instalacao
- ✅ https://aura-pro-eosin.vercel.app/energia-solar/financiamento-solar
- ✅ https://aura-pro-eosin.vercel.app/agrofloresta (home agrofloresta-br)
- ✅ https://aura-pro-eosin.vercel.app/agrofloresta/como-implantar
- ✅ https://aura-pro-eosin.vercel.app/agrofloresta/especies

### SEO
- ⏳ sitemap.xml — acessível mas usando VERCEL_URL até NEXT_PUBLIC_BASE_URL ser configurada
- ⏳ robots.txt — idem
- ⏳ canonicals — idem

### Monetização
- ✅ slots de anúncios renderizando em modo teste visual em produção

## Histórico de sessões

### Sessão 1 — 2026-03-27
- Estrutura-base completa criada
- Contratos, validador, registry, renderer, 12 blocos
- SEO, GA4, AdSense, 3 sites com conteúdo
- Build limpo: 15 páginas, zero erros
- 47 arquivos commitados

### Sessão 2 — 2026-03-27
- Diagnóstico completo: 9 problemas identificados e corrigidos
- Primeiro deploy no Vercel realizado com sucesso
- 12 URLs públicas validadas (3 homes + 9 internas)
- Correção: título duplicado (root template removido)
- Correção: baseUrl centralizada via config/site-url.ts
- Pendente: configurar NEXT_PUBLIC_BASE_URL no Vercel

### Próxima sessão — o que fazer
1. Verificar se NEXT_PUBLIC_BASE_URL foi configurada no Vercel
2. Validar sitemap.xml e robots.txt com URLs corretas
3. Configurar GA4 IDs quando disponíveis
4. Configurar AdSense publisherId quando disponível

## Instruções para o assistente em novas sessões

1. Ler credenciais de /mnt/project/_credentials.env
2. Clonar o repo e ler PROJECT_STATUS.md PRIMEIRO
3. Este documento é o contexto operacional
4. Atualizar este documento ao final de cada sessão
5. Commitar e fazer push antes de encerrar
