# AGENTS.md

Guidance for AI coding agents working in this repository. Claude Code reads
`CLAUDE.md` (fuller architecture notes live there); this file is the
tool-neutral version other agents can read, plus a pointer to the design skill
installed here.

## Purpose

This repo is the practice ground for a workshop on AI coding and **SDD** —
both **Spec-Driven Development** (write a spec/requirements first, then have the
agent implement against it; the workshop arc is "From Vibe to Spec") and
**Skill-Driven Development** (lean on Claude skills like the bundled
`impeccable` to do focused, high-craft work). The portfolio site is the
*vehicle*: participants enrich it — adding sections, polishing the design,
wiring in real content — to practice driving an AI agent from intent to shipped
UI. So expect tasks framed as specs or skill invocations, not just one-off
text edits, and treat "make the portfolio better" as fair game.

## Project

A single-page personal portfolio site — a fill-in-the-blank workshop template.
Next.js 16 (App Router) + React 19 + Tailwind CSS v4, pnpm.

```bash
pnpm install && pnpm dev    # http://localhost:3000
pnpm build                  # also the type-check gate (no separate test suite)
pnpm lint
```

All visible content comes from one config object, `DATA`, in
`src/data/resume.tsx` (declared `as const`). Edit content there, not in
components. Sections toggle via `DATA.sections.<name>.enabled`, and any content
array can be emptied to hide its section without breaking the build (each is
typed — see `CLAUDE.md` for why).

## Installed skill: impeccable

This repo ships the **impeccable** design skill at
`.claude/skills/impeccable/` (committed, so it travels with a clone). It is a
production-grade frontend *design* skill — use it when the work is about how the
UI looks and feels, not backend or logic.

Since this site is a **portfolio**, impeccable treats it as the "brand" register
(the design *is* the product), which is exactly its strong suit.

**What it can do** (sub-commands — invoke as `/impeccable <command> [target]` in
Claude Code, or have your agent load the matching `reference/<command>.md`):

- **craft / shape** — design or restructure a UI from intent (shape-and-confirm
  first, then build).
- **audit / critique** — review an existing interface for design problems and
  anti-patterns.
- **polish / optimize / harden** — refine craft, performance, and edge/empty
  states of something already built.
- **bolder / quieter / delight / overdrive** — push the visual register louder
  or calmer, or add tasteful motion/flourish.
- **animate / colorize / typeset / layout** — focused passes on motion, color,
  type, or spatial layout.
- **adapt / clarify / distill** — responsive behaviour, UX copy, simplification.
- **teach / document / extract / live** — capture brand/design context
  (`PRODUCT.md` / `DESIGN.md`), or iterate live in a browser.

**Context it uses:** impeccable looks for `PRODUCT.md` (required) and `DESIGN.md`
(recommended) at the project root. Neither exists yet — running
`/impeccable teach` scaffolds `PRODUCT.md` so output is tailored to this
portfolio rather than generic. The loader is
`node .claude/skills/impeccable/scripts/load-context.mjs`.

Full details and design laws: `.claude/skills/impeccable/SKILL.md`.
