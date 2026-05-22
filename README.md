# Portfolio Workshop

A minimal, fill-in-the-blank personal site template for the
**"From Vibe to Spec — Ship Your First Personal Site with AI"** workshop
(Code for Taiwan / TDF, Taitung 2026).

Based on the [Magic UI portfolio template](https://github.com/dillionverma/portfolio),
trimmed down to a single page with placeholder content so you can make it
your own with AI.

## Quick start

```bash
git clone https://github.com/Michael0520/portfolio-workshop.git portfolio
cd portfolio
pnpm install
pnpm dev
```

Open http://localhost:3000 to see the site.

## Make it yours

Everything shown on the site lives in **one file**: `src/data/resume.tsx`.

Replace the `Your ...` / `Lorem ipsum ...` placeholders with your own
content — or just ask Claude:

> Read `src/data/resume.tsx` and replace name, location, and description
> with mine, then swap the first work entry for my current job.

### Section config

Each section's heading and visibility is config-driven, under
`DATA.sections` in the same file:

- `badge` / `title` / `subtitle` — the text above each section
- `enabled` — set to `false` to hide a whole section (e.g. `hackathons`
  is hidden by default until you add entries)

## Deploy

Push to GitHub, then import the repo at [vercel.com](https://vercel.com) —
Vercel auto-detects Next.js and gives you a live URL.

## Tech

Next.js · React · Tailwind CSS · Motion · TypeScript

## Credit

Template by [Dillion Verma](https://github.com/dillionverma/portfolio) (Magic UI). MIT licensed.
