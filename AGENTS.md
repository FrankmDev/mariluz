# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev       # Start dev server (localhost:4321)
bun run build     # Production build
bun run preview   # Preview production build
```

## Architecture

Single-page landing site for a Spanish energy advisor (Mariluz García). Built with Astro 6 + Tailwind CSS v4 (via `@tailwindcss/vite` plugin — no `tailwind.config.js`).

**Page structure** (`src/pages/index.astro`): Navbar → Hero → HowItWorks → SavingsCalculator → About → Benefits → Testimonials → FAQ → FinalCTA → Footer

**Key files:**
- `src/config/site.ts` — single source of truth for all site data (contact info, savings rates, advisor profile, SEO metadata). Update this to change phone numbers, WhatsApp URL, savings percentages, etc.
- `src/utils/savings.ts` — `calculateSavings(monthlyBill, isBusiness)` and formatting helpers (`formatEuros`, `formatNumber`)
- `src/styles/global.css` — custom design system imported via `@import "tailwindcss"`. Defines the iOS 26 Liquid Glass visual language

**Design system** (defined in `src/styles/global.css`):
- Glass morphism classes: `.glass`, `.liquid-glass`, `.liquid-glass-premium` — each uses a three-layer technique (border+shadow, inset highlight, backdrop-filter). **The Hero defines the definitive premium formula** — see below.
- Typography scale: `.text-large-title`, `.text-title-1`, `.text-title-2`, `.text-headline`, `.text-body`, `.text-callout`, `.text-caption`
- Buttons: `.btn-primary`, `.btn-secondary`, `.btn-tertiary`, `.btn-green`
- Layout: `.container-custom` (max-width 1200px), `.section` (standard vertical padding)
- Scroll reveal: add `.reveal` class to elements — the Layout script observes them and adds `.visible` on intersection
- The SVG distortion filter `#glass-distortion` is injected as a hidden SVG in `Layout.astro`

**CSS variable tokens** (in `:root`): `--ios-blue`, `--ios-green`, `--ios-orange`, `--ios-indigo`, `--label-primary/secondary/tertiary/quaternary`, `--bg-primary/secondary/tertiary`, `--separator`, `--radius-*`, `--shadow-*`, `--ease-ios`, `--ease-ios-decel`, `--ease-ios-spring`, `--space-*`, `--font-display`

## Definitive Liquid Glass formula (set by Hero — apply to all new components)

`src/components/sections/Hero.astro` is the **design reference**. All new glass surfaces must match this quality level:

```css
/* Panel / card glass */
background: rgba(255, 255, 255, 0.70);           /* tint with accent color for themed cards */
backdrop-filter: blur(40px) saturate(200%) brightness(1.03);
-webkit-backdrop-filter: blur(40px) saturate(200%) brightness(1.03);
border: 1px solid rgba(255, 255, 255, 0.72);
border-radius: 22px;                              /* 22px cards · 26px islands · var(--radius-pill) pills */
box-shadow:
  inset 0 1px 0 rgba(255, 255, 255, 0.98),       /* luminous top edge */
  inset 0 -1px 0 rgba(0, 0, 0, 0.025),           /* bottom depth */
  0 4px 6px rgba(0, 0, 0, 0.04),                 /* crisp shadow */
  0 12px 40px rgba(0, 0, 0, 0.09),               /* ambient */
  0 32px 80px rgba(0, 0, 0, 0.06);               /* deep glow */

/* Specular highlight — add a dedicated .specular child div or ::before */
background: linear-gradient(180deg,
  rgba(255,255,255,0.88) 0%,
  rgba(255,255,255,0.40) 35%,
  rgba(255,255,255,0.08) 65%,
  transparent 100%
);
/* covers top 50–55% of the element, pointer-events: none, z-index above blur */

/* Accent gradient text ("Reducida." pattern) */
background: linear-gradient(135deg, var(--ios-blue) 0%, #5AC8FA 55%, #34AADC 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;

/* Pill surfaces (eyebrow, trust pills) */
background: rgba(255,255,255,0.68);
backdrop-filter: blur(24px) saturate(180%);
border: 1px solid rgba(255,255,255,0.65);
box-shadow: inset 0 1px 0 rgba(255,255,255,0.92), 0 2px 8px rgba(0,0,0,0.04);
border-radius: var(--radius-pill);

/* Hero background atmosphere */
background:
  radial-gradient(ellipse 100% 60% at 30% -5%, rgba(0,122,255,0.09) 0%, transparent 55%),
  radial-gradient(ellipse 70% 40% at 75% 0%, rgba(90,200,250,0.06) 0%, transparent 50%),
  #F2F5FA;
```

**Key rules derived from Hero:**
- Specular highlight is a **separate DOM element** (`.card-specular`, `.stats-specular`), not just a pseudo-element, so it stacks above content correctly
- Per-element **color tints** in the glass background (`rgba(238,255,245,0.72)` green, `rgba(236,246,255,0.72)` blue, `rgba(243,240,255,0.72)` purple)
- Headline weight is **800**, letter-spacing **-0.055em**, size `clamp(3rem, 9vw, 6.5rem)` for hero-level typography
- CTA buttons use an animated `background-position` shimmer (see `.cta-btn-bg` in Hero)
- Orbs use `filter: blur(110px)` and opacity 0.42–0.50 for vivid atmosphere without washing out

The site is in Spanish. All copy and user-facing text must remain in Spanish.
