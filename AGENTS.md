<!-- SPECKIT START -->
For additional context about technologies to be used, project structure,
shell commands, and other important information, read the current plan
specs/001-animated-landing-page/plan.md
<!-- SPECKIT END -->

<!-- SERVICES MINI LANDING PAGES PLAN START -->

## Mini Landing Pages de Servicos

### Objetivo
Implementar mini landing pages para cada servico listado em `src/constants/services.ts`, usando rota dinamica em `/services/[id]`, sem backend, mantendo o padrao arquitetural atual do projeto e evitando codigo acoplado ou duplicado.

### Regras obrigatorias
- Nao usar backend para essa funcionalidade.
- A rota deve ser `/services/[id]`.
- O `id` da rota deve usar os slugs atuais:
  - `landing-page`
  - `pdv`
  - `crm`
  - `automacao`
  - `financeiro`
  - `erp`
- Sempre evitar `index.ts` agregador nessa feature.
- Sempre evitar `index.ts` agregador tambem nas constantes dessa feature.
- Manter o padrao do projeto: `app` fino, `features` para composicao de UI, `constants` para conteudo estatico e `types` para contratos.
- Usar `notFound()` quando o servico nao existir.
- Nao usar `category` como identificador de rota sem formalizar um `id` estavel.
- Nao duplicar conteudo entre componentes e constantes.
- Nao criar uma pagina manual solta por servico fora do padrao de pastas definido abaixo.

### Estrutura esperada

```txt
src/
  app/
    services/
      page.tsx
      [id]/
        page.tsx

  constants/
    landing-pages-services/
      landing-page.ts
      pdv.ts
      crm.ts
      automacao.ts
      financeiro.ts
      erp.ts

  components/
    landing-pages-services/
      ServiceShowcaseMockup.tsx

  features/
    LandingPagesServices/
      shared/
        ServiceLandingLayout.tsx
        ServiceLandingHero.tsx
        ServiceLandingShowcase.tsx
        ServiceLandingFaq.tsx
        ServiceLandingCta.tsx
      LandingPage/
        LandingPageHero.tsx
        LandingPageShowcase.tsx
        LandingPageFaq.tsx
        LandingPageCta.tsx
        LandingPageServicePage.tsx
      PDV/
        PDVHero.tsx
        PDVShowcase.tsx
        PDVFaq.tsx
        PDVCta.tsx
        PDVServicePage.tsx
      CRM/
        CRMHero.tsx
        CRMShowcase.tsx
        CRMFaq.tsx
        CRMCta.tsx
        CRMServicePage.tsx
      Automacao/
        AutomacaoHero.tsx
        AutomacaoShowcase.tsx
        AutomacaoFaq.tsx
        AutomacaoCta.tsx
        AutomacaoServicePage.tsx
      Financeiro/
        FinanceiroHero.tsx
        FinanceiroShowcase.tsx
        FinanceiroFaq.tsx
        FinanceiroCta.tsx
        FinanceiroServicePage.tsx
      ERP/
        ERPHero.tsx
        ERPShowcase.tsx
        ERPFaq.tsx
        ERPCta.tsx
        ERPServicePage.tsx
      LandingPageServiceRouter.tsx
```

### Convencoes de nomenclatura
- Preferir subpastas com estes nomes:
  - `LandingPage`
  - `PDV`
  - `CRM`
  - `Automacao`
  - `Financeiro`
  - `ERP`
- Nao criar barrel exports nessa area.

### Dados e tipagem
- `src/types/services.ts` deve ter um `id` estavel por servico.
- `src/constants/services.ts` continua sendo a fonte da listagem dos cards.
- O conteudo das mini landing pages deve ficar separado em:
  - `src/constants/landing-pages-services/landing-page.ts`
  - `src/constants/landing-pages-services/pdv.ts`
  - etc.
- Cada arquivo de constante deve exportar somente os dados do respectivo servico.

### Navegacao
- A pagina `/services` continua sendo a listagem principal com cards.
- Cada card deve ter botao ou CTA `Ver detalhes`.
- Esse CTA deve apontar para `/services/[id]`.
- O footer deve ter:
  - link para `/services`
  - links individuais para cada mini landing page de servico
- Preferir `next/link` para navegacao entre paginas internas.

### Secoes iniciais das mini landing pages
Na primeira versao, todas as mini landing pages devem conter:
- Apresentacao
- Demonstracoes / projetos
- FAQ
- CTA final

Observacao:
- Precos serao definidos depois, entao a estrutura pode prever essa secao como opcional, mas sem travar a entrega inicial.

### Mockups temporarios
- Os mockups de demonstracao devem ficar em `src/components/landing-pages-services/`.
- Nome sugerido:
  - `ServiceShowcaseMockup.tsx`
- Esse mockup deve ficar facil de localizar e remover/trocar depois por conteudo real.

### Componentizacao
- Separar por secoes sempre.
- Criar componentes compartilhados apenas quando houver repeticao real entre servicos.
- Evitar componente gigante unico para todas as paginas.
- Cada servico deve poder evoluir isoladamente dentro da propria subpasta.

### Arquivos existentes que devem entrar na mudanca
- `src/features/Services/ServiceCard.tsx`
- `src/features/Services/ServiceGrid.tsx`
- `src/types/services.ts`
- `src/constants/services.ts`
- `src/features/Footer/Footer.tsx`
- `src/app/services/[id]/page.tsx` novo
- `src/features/LandingPagesServices/**` novos
- `src/constants/landing-pages-services/**` novos

### Cuidados importantes
- Trocar `key={service.category}` por `key={service.id}` quando necessario.
- Nao usar `category` como unica chave futura.
- Nao espalhar textos dos servicos em multiplos componentes.
- Nao colocar a logica de resolucao do servico dentro do card.
- Centralizar resolucao da pagina em `LandingPageServiceRouter.tsx`.
- Manter SEO por pagina de servico com `generateMetadata`.
- Usar `notFound()` para ids invalidos.

### Sequencia recomendada de implementacao
1. Ajustar `src/types/services.ts` para suportar `id`.
2. Atualizar `src/constants/services.ts` para usar `id` estavel.
3. Adicionar CTA `Ver detalhes` nos cards.
4. Criar `src/app/services/[id]/page.tsx`.
5. Criar `LandingPageServiceRouter.tsx`.
6. Criar a base compartilhada em `features/LandingPagesServices/shared`.
7. Criar a subpasta `LandingPage/` completa.
8. Repetir o padrao para `PDV`, `CRM`, `Automacao`, `Financeiro` e `ERP`.
9. Criar constantes separadas por servico em `constants/landing-pages-services/`.
10. Atualizar footer com link para `/services` e links individuais.
11. Validar `lint`, `build` e navegacao.

### Validacao esperada
- Navegacao de `/services` para `/services/[id]` funcionando.
- Footer apontando para a listagem e para as paginas detalhadas.
- `notFound()` funcionando para ids invalidos.
- Build sem erros.
- Lint sem erros.

<!-- SERVICES MINI LANDING PAGES PLAN END -->
