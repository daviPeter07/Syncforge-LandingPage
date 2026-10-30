# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

SyncForge marketing site (pt-BR content) built with Next.js 16 (App Router, React 19, React Compiler enabled), Tailwind CSS v4, shadcn/ui (`radix-nova` style), and Motion for animations. `AGENTS.md` holds the binding rules for the service mini landing pages feature; read it before touching `LandingPagesServices`.

## Commands

```bash
npm run dev      # next dev on http://localhost:3000
npm run build    # production build (also the type check; there is no separate tsc script)
npm run lint     # biome check (lint + format check + import ordering)
npm run format   # biome format --write
npm run seed     # tsx scripts/seed.ts: seeds blog posts into the database
```

There is no test suite. Validate changes with `lint` + `build`. Both `package-lock.json` and `pnpm-lock.yaml` exist.

Biome (not ESLint/Prettier) is the linter/formatter: 2-space indent, `next` and `react` rule domains, organize-imports on.

## Architecture

Path alias `@/*` → `src/*`. Layering convention:

- `src/app/` stays thin: routing, `generateMetadata`, `generateStaticParams`, `notFound()`. Pages compose `SiteBackground` + `Navbar` + feature components + `Footer` + `BackToTop`.
- `src/features/<Feature>/`: section-level UI composition. Most older features expose an `index.ts` barrel (`@/features/Faq`) and the home page (`src/app/page.tsx`) lazy-loads them with `next/dynamic`. **Exception:** `LandingPagesServices` and `constants/landing-pages-services` must NOT have barrel `index.ts` files; import by file path.
- `src/constants/`: all static copy/content. Components take content as props and must not hardcode service text.
- `src/types/`: shared contracts (e.g. `ServiceId`, `ServiceLandingPageEntry` in `types/services.ts`).
- `src/components/`: generic UI. `ui/` is shadcn-generated, `magicui/` and `reactbits/` are third-party animated components, `landing-pages-services/` holds temporary showcase mockups/cards meant to be swapped for real content.
- `src/lib/`: server-side helpers (DB, blog queries, admin auth, email, SEO URL).

### Service mini landing pages

Each service has a stable `ServiceId` slug (`landing-page`, `pdv`, `crm`, `automacao`, `financeiro`, `erp`); never route or key by `category`.

- `constants/services.ts`: card listing source; `getServiceById`.
- `constants/landing-pages-services/<id>.ts`: per-service page content (hero, why, showcase, pricing, faq, cta, SEO).
- `constants/landing-pages-services/routes.ts`: `SERVICE_LANDING_PAGE_IDS`, `isServiceLandingPageId`, `getServiceLandingPageLinks` (used by the footer).
- `constants/landing-pages-services/registry.ts`: maps id → `{ service, content }`, typed with `satisfies Record<id, ServiceLandingPageEntry>` so a missing service fails the build.
- `features/LandingPagesServices/LandingPageServiceRouter.tsx`: a `switch` on id that renders the per-service `<X>ServicePage`.
- Each service subfolder (`LandingPage/`, `PDV/`, `CRM/`, `Automacao/`, `Financeiro/`, `ERP/`) has its own Hero/Showcase/Pricing/Faq/Cta wrappers over `shared/ServiceLanding*` components, so each service can diverge on its own.

Adding a service means touching the `ServiceId` union, `constants/services.ts`, a new content file, `routes.ts`, `registry.ts`, the router switch, and a new feature subfolder.

**Route mismatch to be aware of:** the dynamic page currently lives at `src/app/produtos/[id]/page.tsx` (with `dynamicParams = false`), and the navbar/footer/sitemap use `/produtos`. But `ServiceCard`, `routes.ts`, the shared Hero/CTA, and the canonical URL in `generateMetadata` point to `/services/...`, and `src/app/services/` does not exist. `AGENTS.md` specifies `/services/[id]`. Settle on one route before adding links.

### Blog (the only backend feature)

- DB: libSQL via `src/lib/db.ts`. It uses `TURSO_DATABASE_URL`/`TURSO_AUTH_TOKEN` when set, otherwise the local file `data/blog.db`. The schema is created lazily on first connection (`initSchema`).
- Queries live in `src/lib/blog.ts`; row mapping, slug, summary, and reading time live in `src/utils/blog.ts`.
- API: `src/app/api/blog/**` (CRUD, plus `upload` to Vercel Blob via `BLOB_READ_WRITE_TOKEN`). Mutations and `?admin=true` reads require `Authorization: Bearer $BLOG_API_TOKEN` (`requireAdmin` in `lib/auth.ts`).
- Admin UI: `src/app/admin/**` with `features/AdminBlog`.
- Contact form posts to `src/app/api/contact` → nodemailer (`SMTP_*` env vars). See `.env.example`.

### Other

- `/consulta` is a guided service-recommendation flow (`features/ServiceConsultation`, `constants/service-consultation.ts`).
- SEO: `lib/seo.ts#getSiteUrl` (`NEXT_PUBLIC_SITE_URL` with a fallback), `app/sitemap.ts`, `robots.ts`, and generated OG/Twitter images.
- Remote images are allowed only from `**.public.blob.vercel-storage.com` (`next.config.ts`).

## Commits

Follow `.agents/rules/commit-convention.md`: `type(area): short summary`, with type in `feat|fix|docs|chore`, followed by a bulleted body listing what changed.
