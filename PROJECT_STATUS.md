# PROJECT_STATUS

Documento operacional persistente do projeto.
Registra o estado de cada integração, credenciais necessárias, e contexto entre sessões.
Atualizado pelo assistente a cada sessão de trabalho.

## Credenciais e integrações

### Repositório Git
- **URL:** https://github.com/groovetroxler/AuraPro
- **Acesso:** token PAT com leitura e escrita
- **Status:** ✅ operacional
- **Nota:** token deve ser re-fornecido a cada sessão (não pode ser commitado — GitHub revoga automaticamente)

### Vercel
- **Token:** ❌ não fornecido
- **Projeto:** não criado ainda
- **Domínio:** não definido
- **Status:** ⏳ aguardando token

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
- **Nota:** quando programas reais forem definidos, atualizar em cada sites/*/index.ts

## Variáveis de ambiente necessárias no Vercel

| Variável | Status | Valor |
|---|---|---|
| `NEXT_PUBLIC_BASE_URL` | ⏳ | URL de produção (ex: https://aurapro.vercel.app) |
| `NEXT_PUBLIC_GA4_FINANCAS_BR` | ⏳ | G-XXXXXXXXXX |
| `NEXT_PUBLIC_GA4_ENERGIA_SOLAR_BR` | ⏳ | G-XXXXXXXXXX |
| `NEXT_PUBLIC_GA4_AGROFLORESTA_BR` | ⏳ | G-XXXXXXXXXX |
| `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID` | ⏳ | pub-XXXXXXXXXXXXXXXX |
| `NEXT_PUBLIC_ADS_TEST_MODE` | ⏳ | true (até ter conta AdSense aprovada) |

## Histórico de sessões

### Sessão 1 — 2026-03-27
- Estrutura-base completa criada
- Contratos, validador, registry, renderer, 12 blocos
- SEO, GA4, AdSense, 3 sites com conteúdo
- Build limpo: 15 páginas, zero erros
- 47 arquivos commitados

### Sessão 2 — 2026-03-27
- Diagnóstico completo da base
- 9 correções executadas:
  1. HTML inválido (site layout sem html/body/head duplicados)
  2. metadataBase configurada
  3. @tailwindcss/typography instalado
  4. Cores hardcoded → var(--color-primary) em 5 blocos
  5. Dark mode removido
  6. defaultOgImage para arquivos inexistentes removido
  7. Typo agroflorestaaBrSite corrigido
  8. Dead code validateLinks removido
  9. resolveBaseUrl simplificado
- Documentação atualizada (CHECKLIST, DECISIONS, ROADMAP)
- 19 arquivos alterados, build limpo

### Próxima sessão — o que fazer
1. Receber token do Git (re-fornecido pelo usuário)
2. Clonar repo e ler PROJECT_STATUS.md para recuperar contexto
3. Avançar para Etapa 8 (deploy Vercel) se token Vercel disponível
4. Configurar variáveis de ambiente
5. Validar em produção

## Instruções para o assistente em novas sessões

1. O usuário fornece o token Git no início da sessão
2. Clonar o repo e ler PROJECT_STATUS.md PRIMEIRO
3. Este documento é o contexto operacional — substitui a necessidade de reler todo o histórico
4. Atualizar este documento ao final de cada sessão com o que foi feito
5. Commitar e fazer push antes de encerrar
