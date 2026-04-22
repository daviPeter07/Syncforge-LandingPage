# Implementation Plan: Landing Page Animada SyncForge

**Feature**: Landing Page com Animações Motion
**Status**: Draft
**Created**: 2026-04-22

## Technical Context

### Stack
- **Framework**: Next.js 16.2 (já em uso)
- **Animation**: Motion (motion.dev)
- **Styling**: Tailwind CSS + shadcn/ui (já em uso)
- **Font**: Poppins (já configurado)

### Paleta de Cores
- Primary: `#051650`
- Secondary: `#00072d`
- Accent: `#b8c2e0`
- Background: `#000000`
- Foreground: `#ffffff`

## Seções da Landing Page

| # | Seção | Descrição |
|---|------|----------|
| 1 | Início (Hero) | Logo, tagline animada, CTA |
| 2 | Sobre | História da empresa |
| 3 | Serviços | Cards interativos |
| 4 | Clientes | Logos/parceiros |
| 5 | Como Trabalhamos | Processo/metodologia |
| 6 | Equipe | Apresentação time |
| 7 | Tecnologias | Stack tecnologias |
| 8 | Resultados | Métricas/cases |
| 9 | FAQ | Perguntas frequentes |
| 10 | Contato | Formulário/CTA |

## Fase 1: Design

### Estrutura de Componentes

```
src/
├── components/
│   ├── landing/
│   │   ├── Hero.tsx           # Seção Início
│   │   ├── About.tsx          # Seção Sobre
│   │   ├── Services.tsx       # Seção Serviços
│   │   ├── Clients.tsx         # Seção Clientes
│   │   ├── HowWeWork.tsx       # Seção Como Trabalhamos
│   │   ├── Team.tsx           # Seção Equipe
│   │   ├── Technologies.tsx   # Seção Tecnologias
│   │   ├── Results.tsx         # Seção Resultados
│   │   ├── FAQ.tsx             # Seção FAQ
│   │   └── Contact.tsx        # Seção Contato
│   └── ui/                    # Componentes shadcn existentes
└── app/
    └── page.tsx               # Landing page principal
```

### Animações por Seção

| Seção | Animação Entrada | Interação |
|------|------------------|-----------|
| Hero | Stagger reveal + fade | Scroll down indicator |
| Sobre | Slide up + fade | Hover em elementos |
| Serviços | Stagger cards | Scale + shadow no hover |
| Clientes | Fade in horizontal | Logo scale no hover |
| Como Trabalhamos | Timeline animation | Steps expand |
| Equipe | Avatar stagger | Social links hover |
| Tecnologias | Icon grid anim | Tooltip no hover |
| Resultados | Counter animation | Card flip/expand |
| FAQ | Accordion animate | Expand/collapse |
| Contato | Form shake/error | Input focus anim |

## Fase 2: Implementação

### Ordem de Desenvolvimento

1. **Setup**: Instalar Motion (`motion`)
2. **Navbar**: Atualizar com 10 seções
3. **Hero**: Animações stagger
4. **Seções 2-9**: Componentes individuais
5. **Contato**: Formulário + animações
6. **Responsividade**: Mobile adaptations
7. **Acessibilidade**: prefers-reduced-motion

### Dependências a Instalar

```bash
pnpm install motion
```

## Riscos Identificados

- Ritmo de animação em mobile pode precisar ajustes
- Many animations podem afetar Lighthouse score

## Research: Motion Best Practices

### Decisão: Biblioteca de Animação
**Selecionada**: Motion (motion.dev)

**Rationale**:
- Biblioteca moderna e leve criada pelos autores do Framer Motion
- Suporte nativo a scroll animations com `useScroll` e `useTransform`
- GPU-accelerated animations
- Alternativa ao Framer Motion com melhor performance

**Alternativas consideradas**:
- Framer Motion: Mais popular mas mais pesado
- GSAP: Mais robusto mas overkill para landing page
- CSS-only: Menos flexível para interações complexas

### Animações Recomendadas

#### Stagger (entrada de elementos)
```javascript
import { stagger, animate } from "motion"
animate(".item", { x: 300 }, { delay: stagger(0.1) })
```

#### Scroll-triggered
```javascript
const { scrollYProgress } = useScroll()
const filter = useTransform(scrollYProgress, [0, 1], ["blur(10px)", "blur(0px)"])
return <motion.div style={{ opacity: scrollYProgress, filter }} />
```

#### Page scroll progress
```javascript
const { scrollYProgress } = useScroll()
return <motion.div style={{ scaleX: scrollYProgress }} />
```

## Definition of Done

- [ ] Todas as 10 seções implementadas
- [ ] Animações funcionando em desktop e mobile
- [ ] prefers-reduced-motion testado
- [ ] Build passa sem erros
- [ ] Lighthouse performance > 80