---
name: Portfolio Workshop
description: A quiet, editorial single-page portfolio — monochrome, high-contrast, type-led.
colors:
  ink: "oklch(0.145 0 0)"
  paper: "oklch(1 0 0)"
  primary: "oklch(0.205 0 0)"
  primary-foreground: "oklch(0.985 0 0)"
  muted: "oklch(0.97 0 0)"
  muted-foreground: "oklch(0.556 0 0)"
  border: "oklch(0.922 0 0)"
  ring: "oklch(0.708 0 0)"
  dark-paper: "oklch(0.18 0 0)"
  dark-card: "oklch(0.205 0 0)"
  destructive: "oklch(0.577 0.245 27.325)"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 5vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "normal"
  mono:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "normal"
rounded:
  sm: "0.225rem"
  md: "0.425rem"
  lg: "0.625rem"
  xl: "1.025rem"
  full: "9999px"
spacing:
  section-gap: "3.5rem"
  card-padding: "1.5rem"
  contact-padding: "2.5rem"
  container-max: "42rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.md}"
    padding: "0.5rem 1rem"
    height: "2.25rem"
  badge-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.muted-foreground}"
    rounded: "{rounded.md}"
    padding: "0 0.5rem"
    height: "1.5rem"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "{spacing.card-padding}"
---

# Design System: Portfolio Workshop

## 1. Overview

**Creative North Star: "The Quiet Editorial"**

This is a personal site that behaves like a well-set page rather than a
marketing surface. There is no color to lean on — the entire palette is
neutral, chroma zero. Hierarchy is built the way a good print editor builds it:
near-black ink (`oklch(0.145 0 0)`) on near-white paper (`oklch(1 0 0)`),
generous whitespace, and tightly-tracked headings that anchor each section.
Restraint is the aesthetic, not a shortfall — the calm is what reads as
confidence.

The system rejects the bought-template look and SaaS-landing reflexes named in
PRODUCT.md: no hero-over-gradient, no stock-photo filler, no buzzword-stuffed
"passionate ninja" copy, no fake logo walls. Motion exists only to ease content
in (BlurFade) and to add one atmospheric texture (a masked FlickeringGrid at the
page top and behind the contact card) — never spectacle, never a gate on
reading.

Density is airy. A single 42rem column centers everything; sections are
separated by a fixed 3.5rem rhythm; the only persistent chrome is a floating
bottom dock. The work is the subject — the design is the frame that lets it
speak.

**Key Characteristics:**
- Monochrome, chroma-zero palette in both light and dark themes.
- Type-led hierarchy: tight negative tracking on headings, relaxed body leading.
- One narrow centered column; fixed vertical rhythm.
- Flat by default; depth appears only on interaction.
- Quiet, functional motion — entrance and texture, never choreography.

## 2. Colors

A strictly neutral, chroma-zero palette. Contrast — not hue — does all the work,
which is why theme switching is lossless and the page reads as composed rather
than decorated.

### Primary
- **Ink** (`oklch(0.145 0 0)`): The default foreground — body text, headings,
  icons. The near-black that carries every word on the page.
- **Pressed Graphite** (`oklch(0.205 0 0)`): The `primary` surface — the dock's
  active fill, primary buttons, the section badge pills. Used as a solid block
  behind inverted text, never as body text.

### Neutral
- **Paper** (`oklch(1 0 0)`): The base background and card surface in light mode.
- **Muted Fog** (`oklch(0.97 0 0)`): Quiet fills — skill chips, hover states,
  code backgrounds.
- **Muted Slate** (`oklch(0.556 0 0)`): Secondary text — dates, captions, the
  long-form summary. The "supporting voice" tone.
- **Hairline** (`oklch(0.922 0 0)`): Borders, dividers, ring outlines. Always
  1px; structure, not decoration.
- **Focus Ring** (`oklch(0.708 0 0)`): The visible focus indicator on
  interactive elements.

### Dark theme
- **Charcoal Paper** (`oklch(0.18 0 0)`) / **Charcoal Card** (`oklch(0.205 0 0)`):
  The dark-mode background and raised card. Same chroma-zero discipline, inverted.
  Borders shift to translucent white (`oklch(1 0 0 / 10%)`) instead of a gray step.

### Reserved
- **Alert Red** (`oklch(0.577 0.245 27.325)`): `destructive` only. The single
  chromatic value in the system, reserved for genuine error states — not accents.

### Named Rules
**The Chroma-Zero Rule.** Every surface, text, and border color has chroma 0.
The only colored value permitted is `destructive`, and only for errors.
Introducing a brand accent is a deliberate redesign, not a tweak — if you add
one, it goes through `/impeccable colorize`, not an inline hex.

**The Hairline Rule.** Borders and dividers are 1px and use Hairline (light) or
translucent white (dark). No 2px+ colored stripes, no heavy rules.

## 3. Typography

**Display Font:** Geist (with `ui-sans-serif, system-ui, sans-serif`)
**Body Font:** Geist — the same family carries everything; hierarchy comes from
size, weight, and tracking, not from a second face.
**Label/Mono Font:** Geist Mono (with `ui-monospace, monospace`) — used only for
tabular figures like date ranges.

**Character:** A single modern grotesque, set with editorial discipline.
Headings pull tracking negative and tight; body relaxes to comfortable leading.
The restraint of one family is the point — it reads as quiet and intentional.

### Hierarchy
- **Display** (600, `clamp(1.875rem, 5vw, 3rem)`, line-height 1.1, tracking
  -0.04em): The hero greeting ("Hi, I'm …") and the large section titles on the
  Projects / Contact cards.
- **Headline** (700, 1.875rem, tracking -0.025em): Section-card titles where the
  display clamp isn't used.
- **Title** (700, 1.25rem): The "About / Work / Skills" section headers.
- **Body** (400, 1rem, line-height 1.625): The summary and all descriptions.
  Rendered through `prose`; keep measure comfortable, never edge-to-edge on wide
  screens (the 42rem column enforces this).
- **Label** (500, 0.875rem): Section badge pills, nav tooltips, skill chips.
- **Mono** (400, 0.75rem, tabular-nums): Date ranges and timeline times only.

### Named Rules
**The One-Family Rule.** Geist carries display through body. Don't introduce a
serif or a second sans for "contrast" — contrast comes from weight and tracking.

**The Tight-Heading Rule.** Headings track negative (-0.025em to -0.04em); body
stays at normal tracking. The tension between the two is the editorial signature.

## 4. Elevation

Flat by default. The system conveys depth through tonal layering and 1px
borders, not a shadow scale. A card is distinguished from the page by its border
and (in dark mode) a one-step-lighter surface, not by a drop shadow at rest.

Shadows appear almost exclusively as a *response to state* or on the single
floating element.

### Shadow Vocabulary
- **Resting card** (`box-shadow: none`): Cards, accordion rows, education rows
  sit flat on the page, defined by their `border`.
- **Hover ring** (`ring-2 ring-muted` on project cards): On hover, a card gains
  a soft tonal ring rather than a shadow — depth as a focus cue.
- **Floating dock** (`shadow-[0_0_10px_3px] shadow-primary/5`): The fixed bottom
  dock carries the only ambient shadow, a near-invisible primary-tinted glow,
  justified because it floats above content.
- **Avatar lift** (`shadow-lg ring-4 ring-muted`): The hero avatar is the one
  portrait element allowed a real shadow.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. A shadow must earn its
place — it appears for floating chrome (the dock) or as a hover response, never
as default card decoration.

## 5. Components

### Buttons
- **Shape:** Gently rounded (`rounded-md`, 0.425rem). The `icon` size is fully
  round (`rounded-full`).
- **Primary:** Pressed Graphite fill with inverted text
  (`bg-primary text-primary-foreground`), height 2.25rem, padding 0.5rem 1rem,
  a faint resting `shadow`.
- **Hover / Focus:** Hover darkens to `bg-primary/90`; focus shows a 1px
  `ring-ring` outline (`focus-visible:ring-1`). Transitions are color-only.
- **Secondary:** `bg-secondary` (Muted Fog) with `shadow-sm`, hover to /80.
  Note: the live portfolio rarely renders a literal button — most actions are
  links or dock icons. Buttons exist in the kit (shadcn) for when you add forms.

### Chips / Badges
- **Style:** Outline by default — Paper background, Hairline border,
  Muted-Slate text, `rounded-md`, height 1.5rem. Used for skill tags and project
  technologies.
- **Section badge:** A filled variant — Pressed Graphite pill with inverted text,
  centered as a label above each section ("My Projects", "Contact").

### Cards / Containers
- **Corner Style:** `rounded-xl` (1.025rem) for project cards and the contact
  block; `rounded-lg` (0.625rem) for the base Card primitive.
- **Background:** Paper (light) / Charcoal Card (dark).
- **Shadow Strategy:** None at rest — see Elevation. Project cards gain a
  `ring-2 ring-muted` on hover.
- **Border:** 1px Hairline, always present.
- **Internal Padding:** 1.5rem (cards), 2.5rem (the contact block).

### Navigation — Signature Component
The **floating dock** is the page's signature chrome: a fixed, centered,
pill-shaped bar (`rounded-3xl` icons in a `bg-card/90 backdrop-blur-3xl`
container) pinned 1rem from the bottom. It holds the home link, navbar-flagged
social icons, and the theme toggle, separated by 1px vertical rules. Icons are
muted at rest and resolve to full foreground on hover. Tooltips are Pressed
Graphite pills with inverted text. It is the only persistently-floating element
and the only one carrying an ambient shadow.

### Section divider
Sections are introduced by a centered badge pill flanked by a fading 1px
gradient rule (`from-transparent via-border to-transparent`). This is the
editorial "section break" — quiet, symmetric, type-anchored.

## 6. Do's and Don'ts

### Do:
- **Do** keep the palette chroma-zero. Build every distinction from contrast,
  weight, and 1px borders — the Chroma-Zero Rule.
- **Do** carry all type in Geist; create hierarchy with size, weight, and
  negative tracking on headings (the One-Family and Tight-Heading Rules).
- **Do** keep surfaces flat at rest; let depth appear on hover (tonal ring) or
  on the floating dock only (the Flat-By-Default Rule).
- **Do** hold content to the single 42rem centered column and the 3.5rem section
  rhythm. Whitespace is the layout.
- **Do** keep motion functional: BlurFade entrances and the masked FlickeringGrid
  texture, and respect `prefers-reduced-motion`.

### Don't:
- **Don't** ship the bought/templated source-code-sale look — no
  hero-over-gradient everyone has seen, no stock-photo filler. (PRODUCT.md
  anti-reference.)
- **Don't** write a SaaS landing page: no formulaic hero + feature-grid + CTA
  pitch, no salesy copy. A portfolio is not selling a product. (PRODUCT.md
  anti-reference.)
- **Don't** stuff buzzword soup — "passionate ninja rockstar leveraging
  synergies." Name what was actually built and for whom. (PRODUCT.md
  anti-reference.)
- **Don't** fabricate social proof — invented testimonials, logo walls of
  companies never worked with, vanity metrics. (PRODUCT.md anti-reference.)
- **Don't** over-animate. If a motion delays the visitor reading the first
  screen, it's decoration — cut it. (PRODUCT.md anti-reference.)
- **Don't** introduce a colored accent inline, add 2px colored border stripes,
  or attach drop shadows to resting cards. Those break the Chroma-Zero, Hairline,
  and Flat-By-Default rules — if you want them, redesign deliberately.
