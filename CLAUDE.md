# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page personal portfolio site, intended as a fill-in-the-blank template for a
workshop. Built on Next.js 16 (App Router) + React 19 + Tailwind CSS v4, derived from the
Magic UI portfolio template and trimmed to one page with placeholder content.

## Commands

Package manager is **pnpm** (Node >= 18).

```bash
pnpm install      # install deps
pnpm dev          # dev server at http://localhost:3000
pnpm build        # production build
pnpm start        # serve the production build
pnpm lint         # eslint
pnpm lint:fix     # eslint --fix
```

There is no test setup and no `type-check` script; type errors surface through `pnpm build`
or the editor (`tsc --noEmit` if needed — `noEmit` is already set in tsconfig).

## Architecture

This is a **config-driven** site. The single source of truth for all visible content is
`src/data/resume.tsx`, which exports a `DATA` object declared `as const`. Everything else
just reads from it:

```
src/data/resume.tsx   →  DATA (content + section config), the only file users edit
src/app/page.tsx      →  composes the page; reads DATA for hero/about/work/education/skills
                         and conditionally renders Projects/Hackathons/Contact via
                         DATA.sections.<name>.enabled
src/app/layout.tsx    →  root layout, fonts, ThemeProvider, TooltipProvider, Navbar,
                         SEO metadata (all derived from DATA)
src/components/section/*  →  one component per toggleable section; each reads its own
                             heading text from DATA.sections.<name>
src/components/navbar.tsx →  bottom dock; renders DATA.navbar + social links where
                             social.navbar === true, plus the theme toggle
src/app/opengraph-image.tsx →  dynamic OG image (next/og, edge runtime); reads DATA and
                               loads bundled fonts from public/fonts/ via import.meta.url
```

Key consequences when making changes:

- **To change content, edit `DATA` in `src/data/resume.tsx`** — do not hardcode strings in
  components. Section headings live under `DATA.sections`, not in the section components.
- **To show/hide a section**, flip `DATA.sections.<name>.enabled`. `page.tsx` gates
  Projects, Hackathons, and Contact on this flag. `hackathons` ships disabled (empty data).
- `DATA` is `as const`, so its shape is a literal type. Adding a new field that components
  read is fine; if you remove or rename a field that a component references, update the
  component too (there is no separate type definition file to keep in sync).
- The contact section links to `DATA.contact.social.X.url` specifically — if that social
  block is removed, update `contact-section.tsx`.

## UI conventions

- **shadcn/ui** (new-york style) in `src/components/ui/`; aliases per `components.json`
  (`@/components`, `@/lib/utils`, etc.). Use `cn()` from `src/lib/utils.ts` to merge classes.
- **Magic UI** animation primitives in `src/components/magicui/` (BlurFade, Dock,
  FlickeringGrid). Page sections stagger entrance with `BLUR_FADE_DELAY` multipliers.
- **Tailwind CSS v4**, configured in CSS, not JS. Theme tokens and the `dark` variant live in
  `src/app/globals.css` (`@import "tailwindcss"`, `@theme inline`, `@custom-variant dark`).
  There is **no `tailwind.config.ts`** despite the reference in `components.json` — do not
  create one or look for it. Dark mode is class-based via `next-themes` (defaults to light).
- Brand/skill SVGs live in `src/components/ui/svgs/`; general icons in
  `src/components/icons.tsx`. Skills in `DATA.skills` reference these SVG components directly.
- Images are plain `<img>` (next/image is not used; files have `eslint-disable
  @next/next/no-img-element`). Static assets go in `public/`.

## Conventions to respect

- Path alias `@/*` → `src/*` (tsconfig). Use it for imports.
- TypeScript `strict` is on; avoid `any`.
- `next.config.mjs` sets security headers (X-Frame-Options, etc.) for all routes — keep these
  if editing that file.
- Server Components by default; only `work-section.tsx` and theme/tooltip providers are
  `"use client"`. Add `"use client"` only when a component needs hooks or browser APIs.
