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
