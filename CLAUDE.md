# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A pnpm + Turborepo monorepo of standalone Next.js website templates for different industries (Neuraltale), plus `demo-hub` — a gallery app that links out to the deployed demo of each template. Each app under `apps/` is an independent Next.js 16 (App Router) + React 19 + Tailwind CSS 4 + TypeScript site; they do not import from each other. The `shared/` workspace directories (`components`, `config`, `styles`) exist but are currently empty.

## Commands

Install from the repo root with `pnpm install` (the root `pnpm-lock.yaml` is the workspace lockfile; the per-app `pnpm-lock.yaml` files are leftovers from before the workspace existed).

```bash
pnpm dev                # run all apps in parallel (turbo run dev --parallel)
pnpm build              # build everything
pnpm lint               # lint everything

pnpm --filter transport-logistics-template dev    # run a single app
pnpm --filter demo-hub build                       # build a single app
```

There is no test setup anywhere in the repo. The root `typecheck` and `format` turbo tasks exist but no app defines those scripts yet.

## Fixed dev ports

Each app pins its dev port, so they can all run at once:

| Port | App |
|------|-----|
| 3000 | demo-hub |
| 3001 | business-corporate-template |
| 3002 | real-estate-template |
| 3003 | ecommerce-template |
| 3004 | restaurant-food-template |
| 3005 | education-school-template |
| 3006 | ngo-organisation-template |
| 3007 | portfolio-template |
| 3008 | transport-logistics-template |
| 3009 | hotel-booking-template |
| 3010 | healthcare-pharmacy-template |

## Next.js 16 warning

The apps' own CLAUDE.md/AGENTS.md files warn: Next.js 16 has breaking changes versus older training data — APIs, conventions, and file structure may differ. Read the relevant guide in `node_modules/next/dist/docs/` (inside any app) before writing Next.js code, and heed deprecation notices.

## Two kinds of apps

1. **Plain create-next-app scaffolds** (demo-hub, business-corporate, ecommerce, education-school, portfolio, real-estate, restaurant-food): minimal `app/` directory, ESLint flat config (`eslint.config.mjs`), `next.config.ts`. Most are still default scaffolds awaiting real content.

2. **v0/shadcn-style templates** (transport-logistics, hotel-booking, ngo-organisation, healthcare-pharmacy): full shadcn/ui setup (`components.json`, `components/ui/`, `lib/`, `hooks/`), Radix UI dependencies, `next.config.mjs` with `typescript.ignoreBuildErrors: true` and `images.unoptimized: true`, page sections organized as `components/<page-name>/`. They have a `lint` script but no ESLint config file. Note `ignoreBuildErrors` means `pnpm build` will NOT catch type errors in these apps — run `npx tsc --noEmit` in the app directory to typecheck them.

## demo-hub configuration

demo-hub reads the deployed URL of each template from `NEXT_PUBLIC_TEMPLATE_<NAME>_URL` env vars — see `apps/demo-hub/.env.example` (production URLs are `https://<industry>.neuraltale.com`). When adding a new template, add its env var there.
