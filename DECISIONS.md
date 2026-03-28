# DECISIONS

## Decisões estruturais fechadas

1. O projeto nasce como **framework neutro multi-site**.
2. Nenhum site é tratado como fundação principal.
3. Os 3 sites iniciais são:
   - `financas-br`
   - `energia-solar-br`
   - `agrofloresta-br`
4. A stack estrutural está fechada em:
   - Next.js
   - App Router
   - TypeScript
   - Tailwind CSS
   - code-first
   - schema-driven
   - blocos modulares
   - registry central
   - deploy em Vercel na Fase 1
5. O `registry` é explícito, central e obrigatório.
6. Na Fase 1, a estratégia é:
   - um domínio base por ambiente;
   - sites por prefixo de rota.
7. GA4 é parte crítica da fundação e deve funcionar corretamente desde a Fase 1A.
8. SEO técnico deve ser real desde a Fase 1A, inclusive em produção publicada.
9. AdSense e afiliados entram de forma estruturalmente real e operacionalmente verificável na Fase 1.
10. O contrato do sistema é forte no núcleo e extensível nas bordas.
11. Erros essenciais bloqueiam.
12. A IA deve preencher modelos, não inventar estrutura livremente.
13. A Fase 1B conterá scaffold mínimo de novo site.
14. Notion/planilha não entram no núcleo da Fase 1.
15. Não haverá CMS pesado na Fase 1.
16. A Fase 1 só fecha com deploy funcional em Vercel.
17. Variáveis de ambiente e configuração operacional fazem parte do escopo da Fase 1A.
18. Publicação, acessibilidade, monitoramento e monetização não são pós-etapa; são condição de conclusão.
19. O modo de teste para anúncios é aceitável apenas como contingência explícita quando a conta real ainda não permitir renderização final.
20. Documentação estrutural, código e ambiente publicado devem permanecer coerentes entre si.

## Regras de governança

- decisões estruturais fechadas não devem ser reabertas sem motivo técnico forte;
- o projeto deve priorizar simplicidade e coerência;
- o framework deve sobreviver sem qualquer um dos sites iniciais;
- fonte única de verdade tem prioridade sobre conveniência local;
- documentação, implementação e ambiente publicado devem permanecer coerentes entre si.

## Decisões operacionais — Sessão 2 (2026-03-27)

21. O site layout (`app/[site]/layout.tsx`) não deve renderizar `<html>`, `<body>` ou `<head>` — essas tags pertencem exclusivamente ao root layout. Layout de site usa `<div>` como wrapper.
22. `metadataBase` deve ser configurada no root layout para garantir resolução correta de og:image e twitter:image em produção.
23. `@tailwindcss/typography` é dependência obrigatória para formatação de conteúdo editorial (classes `prose`/`prose-lg`).
24. Todos os blocos devem usar `var(--color-primary)` em vez de cores hardcoded, garantindo que o theming por site funcione corretamente.
25. Dark mode não faz parte do escopo da Fase 1. CSS de dark mode não deve existir no globals.css.
26. `defaultOgImage` só deve ser declarado no config de um site quando o arquivo existir. Referências a arquivos inexistentes devem ser removidas.
27. O Git é a memória persistente do projeto entre sessões. Documentos de controle (CHECKLIST, DECISIONS, ROADMAP) devem ser atualizados e commitados junto com alterações de código.
28. O root layout não deve ter title template — cada site define seu próprio template via `seo.defaultTitleTemplate`. Evita duplicação de sufixo nos títulos.
29. A resolução de `baseUrl` para sites é centralizada em `config/site-url.ts`, com fallback para `VERCEL_URL` quando `NEXT_PUBLIC_BASE_URL` não está definida. Elimina duplicação nos pacotes de site.
30. O primeiro deploy no Vercel não deve bloquear por falta de variáveis de ambiente. O código usa fallbacks seguros e emite warnings em vez de erros fatais.
31. GA4 Measurement IDs são hardcoded no config de cada site, não em variáveis de ambiente. Não são dados secretos (aparecem no HTML público), simplifica a configuração e a automação futura de novos sites.
32. AdSense Publisher ID é hardcoded no config de cada site pelo mesmo motivo. O formato correto é `ca-pub-XXXX` (não `pub-XXXX`).
33. O script do AdSense carrega sempre que publisherId é válido, independente do modo teste. Isso é necessário para o Google verificar e aprovar o site. O flag `ads.enabled` controla apenas se os slots exibem anúncios reais ou placeholders.

## Decisões operacionais — Sessão 3 (2026-03-27)

34. O root layout (`app/layout.tsx`) não deve carregar o script do AdSense. O carregamento do AdSense é responsabilidade do componente `AdSenseScript` no layout de cada site, que já valida publisherId. Evita duplicação de script e carregamento incondicional.
35. A validação de `publisherId` no contrato é feita independente de `ads.enabled`, conforme SYSTEM_CONTRACTS. Se o publisherId está presente com formato inválido, é erro bloqueante mesmo que ads esteja desabilitado.
36. A resolução de baseUrl global tem fonte única em `config/env.ts` (`getBaseUrl()`). O módulo `config/site-url.ts` importa de `config/env.ts` em vez de duplicar a lógica.
37. Arquivos de prompt operacional (`Prompt-Base.txt`) não devem ser versionados no repositório. Adicionados ao `.gitignore`.
38. O arquivo de credenciais local se chama `_credentials.env` (com underscore). O `.gitignore` deve usar esse nome exato.
