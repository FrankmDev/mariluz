---
target: src/pages/index.astro
total_score: 28
p0_count: 0
p1_count: 3
timestamp: 2026-06-09T07-44-26Z
slug: src-pages-index-astro
---
# Design Critique: luzaria Landing Page

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Good feedback on hover states, focus rings, and form validation. No loading state for form submission. |
| 2 | Match System / Real World | 4 | Speaks user's language fluently. Spanish throughout, familiar terms ("factura", "comercializadora"), no jargon. |
| 3 | User Control and Freedom | 3 | Clear navigation, mobile menu with escape key. No undo after form submission. FAQ accordion allows closing. |
| 4 | Consistency and Standards | 4 | Exceptionally consistent glass system, specular highlights, spring easing, and responsive patterns across all sections. |
| 5 | Error Prevention | 3 | File upload validation (type, size). Form has required fields. No smart defaults or autocomplete hints. |
| 6 | Recognition Rather Than Recall | 3 | Navigation visible, icons labeled. FAQ answers discoverable. Contact options visible in multiple places. |
| 7 | Flexibility and Efficiency of Use | 2 | No keyboard shortcuts. No "skip to content" link. Power users must scroll through all sections. |
| 8 | Aesthetic and Minimalist Design | 3 | Rich but not cluttered. Glass system is cohesive. Gradient text and eyebrows on every section are decorative noise. |
| 9 | Error Recovery | 2 | No error states shown for form validation. No 404 page content. No fallback for failed upload. |
| 10 | Help and Documentation | 3 | FAQ is comprehensive and contextual. No inline tooltips or guided tours. |
| **Total** | | **28/40** | **Good** |

## Anti-Patterns Verdict

**LLM assessment**: The glass morphism system is genuinely distinctive and well-crafted. The specular highlights, spring physics, and layered backdrop filters create a recognizable "Liquid Light" aesthetic that is hard to confuse with generic AI output. However, three AI slop tells are present: (1) gradient text (`background-clip: text`) on hero and section headlines, which is explicitly banned as decorative noise; (2) tiny uppercase tracked eyebrows appear on every single section via the `SectionHeader` component — this is the saturated AI scaffold pattern; (3) letter-spacing values below `-0.04em` on multiple display headlines (Hero: `-0.055em`, SectionHeader: `-0.045em`, FinalCTA: `-0.048em`, Navbar brand: `-0.045em`, Mobile menu title: `-0.055em`), making letters touch on certain viewports and creating a cramped feel.

**Deterministic scan**: Found 6 warnings across 5 files:
- `layout-transition` (width animation): Footer.astro:244, HowItWorks.astro:182, RealCases.astro:377, Testimonials.astro:330 — animating `width` causes layout thrash. The HowItWorks progress line is a valid use case but should use `transform: scaleX` instead.
- `bounce-easing`: Hero.astro:370 (`icon-bounce`), SendBillCTA.astro:767 (`dot-bounce`) — these are literal bounce animations that feel dated and conflict with the smooth iOS aesthetic.

**Visual overlays**: Not applicable (CLI scan only, no browser injection performed).

## Overall Impression

This is a genuinely distinctive landing page with a committed visual identity. The glass morphism system is not decorative; it is the core argument of the brand (transparency, literally). The mobile responsive design is exceptional — breakpoint coverage down to 360px with thoughtful adjustments. The biggest opportunity is tightening the typography: removing gradient text, fixing letter-spacing floors, and reducing the eyebrow repetition so the glass system can shine without verbal scaffolding.

## What's Working

1. **The glass system is the design.** Every card, panel, and input uses the same three-layer technique (border + shadow, inset highlight, backdrop-filter) with a dedicated specular highlight DOM element. This is not an occasional flourish; it is a committed visual language that carries the brand's transparency message.
2. **Mobile responsiveness is thorough.** The page has breakpoints at 360px, 480px, 520px, 640px, 767px, 768px, 900px, 920px, 991px, 1024px, and 1199px. Each breakpoint has meaningful layout changes, not just font-size tweaks. The mobile menu is a full-screen bottom sheet with staggered entrance animations.
3. **Accessibility is not an afterthought.** `prefers-reduced-motion`, `prefers-reduced-transparency`, `prefers-contrast: high`, and visible `focus-visible` rings are all implemented. The FAQ accordion uses `grid-template-rows` for buttery-smooth height animation without jank.

## Priority Issues

**[P1] Gradient text on headlines — banned pattern**
- **What**: The `SectionHeader` component, `Hero.astro`, and `FinalCTA.astro` all use `background: linear-gradient(...)`, `-webkit-background-clip: text`, and `-webkit-text-fill-color: transparent` for headline accent words.
- **Why it matters**: This is explicitly banned in the absolute bans list as "decorative, never meaningful." It creates a visual effect that looks like a generic AI design tell. The brand's blue accent is strong enough on its own; the gradient doesn't add information, it just adds noise.
- **Fix**: Replace with a single solid color (`var(--color-primary)` or `#007AFF`). The weight contrast (800 vs 400) and the glass system already carry the hierarchy.
- **Suggested command**: `$impeccable typeset src/components/ui/SectionHeader.astro`

**[P1] Letter-spacing below -0.04em on display text — letters touch**
- **What**: The Hero uses `letter-spacing: -0.055em` on a `clamp(2.45rem, 6.3vw, 4.9rem)` headline. The SectionHeader uses `-0.045em` on `clamp(2rem, 6vw, 4rem)`. The FinalCTA uses `-0.048em`. The mobile menu title uses `-0.055em`. At the upper clamp bound on tablet viewports (e.g., 768px-1024px), these letters will touch or overlap, especially on words like "Mariluz" or "compromiso".
- **Why it matters**: This is a hard typographic ceiling violation. The text looks cramped, not designed. It reduces readability and undermines the premium feel.
- **Fix**: Raise all display letter-spacing to at least `-0.04em`. For the largest headlines (Hero), `-0.03em` is plenty tight for a grotesque display feel. For section titles, `-0.02em` is sufficient.
- **Suggested command**: `$impeccable typeset src/components/sections/Hero.astro src/components/ui/SectionHeader.astro`

**[P1] Tiny uppercase tracked eyebrow on every section — AI slop**
- **What**: The `SectionHeader` component renders a `text-transform: uppercase` pill with `letter-spacing: var(--tracking-wide)` (0.02em) above every section heading. This appears on: HowItWorks, About, ContactForm, FAQ, and any other section that uses `SectionHeader`. The eyebrow text is a single word or short phrase: "El proceso", "Tu asesora", "Estudio gratuito", "Preguntas frecuentes".
- **Why it matters**: This is the "tiny uppercase tracked eyebrow above every section" AI scaffold pattern. It appears on 55-95% of AI-generated landing pages regardless of brief. The design already has a strong visual identity (glass system); the eyebrows are verbal scaffolding that dilutes the voice.
- **Fix**: Remove the eyebrow from `SectionHeader` entirely, or keep it only on the first section (Hero/HowItWorks) as a deliberate brand system. The section titles are descriptive enough on their own: "Una revisión clara" and "Quién te atiende" don't need a subtitle.
- **Suggested command**: `$impeccable quieter src/components/ui/SectionHeader.astro`

**[P2] Width animations causing layout thrash**
- **What**: The detector found `transition: width` in Footer.astro (link underline), HowItWorks.astro (progress line), RealCases.astro, Testimonials.astro, and SendBillCTA.astro. Animating `width` triggers reflow on every frame.
- **Why it matters**: On lower-end devices, these animations will feel janky. The HowItWorks progress line is the most visible offender — it animates from 0% to 100% on scroll.
- **Fix**: Use `transform: scaleX()` with `transform-origin: left` instead of `width` for the progress line. For the footer link underline, use `transform: scaleX()` or `background-size`.
- **Suggested command**: `$impeccable optimize src/components/sections/HowItWorks.astro`

**[P2] Missing sections in index.astro**
- **What**: `AGENTS.md` documents the page structure as: Navbar → Hero → HowItWorks → SavingsCalculator → About → Benefits → Testimonials → FAQ → FinalCTA → Footer. But `index.astro` only imports: Navbar, Hero, HowItWorks, About, ContactForm, FAQ, FinalCTA, Footer. The SavingsCalculator, Benefits, Testimonials, and RealCases/SendBillCTA components exist in the filesystem but are not used.
- **Why it matters**: The page is incomplete. Users who expect a savings calculator or testimonials will not find them. The `siteConfig.savings` data is defined but unused. The `Testimonials` and `RealCases` components are orphaned code.
- **Fix**: Either add the missing sections to `index.astro` (SavingsCalculator after HowItWorks, Benefits before About, Testimonials before FAQ) or remove the unused components to reduce bundle size and confusion.
- **Suggested command**: `$impeccable layout src/pages/index.astro`

**[P2] Text contrast below WCAG AA on body text**
- **What**: The `text-secondary` color is `#6E6E73` (gray-600). The background is `#F5F5F7` (gray-100). The contrast ratio is approximately 3.5:1, which is below the 4.5:1 required for body text at normal size. The `text-tertiary` (`#8E8E93`) is even lower at ~2.4:1.
- **Why it matters**: On the glass surfaces (which are semi-transparent white), the contrast may be even lower. Users with low vision or on dim screens will struggle to read the supporting copy.
- **Fix**: Darken `text-secondary` to at least `#555555` (which hits ~4.6:1 on `#F5F5F7`). Or darken the background slightly. Or increase the font weight of body text from 400 to 500.
- **Suggested command**: `$impeccable colorize src/styles/global.css`

**[P3] Bounce animations conflict with smooth iOS aesthetic**
- **What**: The Hero has `icon-bounce` (scale 1.15 at 50%) and SendBillCTA has `dot-bounce`. These are literal bounce keyframes.
- **Why it matters**: The rest of the design uses smooth deceleration and spring physics. A literal bounce feels like a different design family sneaking in.
- **Fix**: Replace with a subtle `scale(1.05)` or `translateY(-2px)` hover effect using the existing spring easing.
- **Suggested command**: `$impeccable animate src/components/sections/Hero.astro`

## Persona Red Flags

**Jordan (Confused First-Timer)**: 
- The hero has three floating cards with technical data ("Potencia", "kWh", "Coste por kWh") that are decorative and `aria-hidden="true"`. Jordan might wonder if these are interactive or if they need to understand them before proceeding. The cards float with subtle animation, which could be distracting.
- The FAQ accordion is well-designed, but the contact card on the right side (sticky on desktop) might be missed on mobile since it appears below the FAQ list.
- The "Estudio gratuito" eyebrow and the "Sin coste inicial" badge are reassuring, but the sheer number of trust signals (pills, badges, checkmarks) could create a "too good to be true" skepticism.

**Casey (Distracted Mobile User)**:
- The primary CTA is a WhatsApp link, which is perfect for mobile. However, the form is below the fold and requires scrolling past several sections. Casey might not reach the form before getting interrupted.
- The mobile menu is a bottom sheet, which is in the thumb zone. Good. The trust pills in the hero are centered and touch-friendly. The floating cards are hidden on mobile (good), but the hero text is still large and readable.
- The file upload zone is drag-and-drop enabled, which is desktop-centric. On mobile, it works as a tap-to-select, but the "Arrastra tu factura aquí" text is misleading for touch users.

**Sam (Accessibility-Dependent User)**:
- The glass surfaces with `backdrop-filter` may cause readability issues for users with low vision or certain visual processing differences. The `prefers-reduced-transparency` media query is present, which is excellent.
- The FAQ accordion uses `details`/`summary` elements with custom JavaScript, which may break screen reader expectations. The `aria-expanded` and `aria-hidden` attributes are managed, but the `grid-template-rows` animation might cause screen readers to announce height changes as content changes.
- The floating cards in the hero have `aria-hidden="true"`, which is correct since they are decorative. However, the parallax mousemove script might be confusing for keyboard users who never trigger it.
- Focus-visible rings are present on all interactive elements. The navbar links have custom focus-visible styles. The mobile menu has `Escape` key support. Good.

## Minor Observations

1. The `sendBillCTA` and `realCases` components exist but are not imported. Orphaned code.
2. The `SavingsCalculator` section is documented in `AGENTS.md` but missing from the page.
3. The `about-cta-shift` and `shimmer-btn` keyframes are duplicated across multiple components (About, FinalCTA, ContactForm, Navbar). Could be centralized in `global.css`.
4. The `shadow-glass` formula is `inset 0 1px 0 rgba(255, 255, 255, 0.98), inset 0 -1px 0 rgba(15, 23, 42, 0.012), 0 1px 0 rgba(255, 255, 255, 0.42)`. This is a very subtle shadow that relies entirely on the specular highlight for depth. The `0 1px 0` shadow is effectively invisible on light backgrounds. The depth is carried by the blur, which is correct for the glass metaphor.
5. The `reveal` animation system uses `IntersectionObserver` (presumably in `Layout.astro`). The CSS uses `opacity: 0` and `transform: translateY(30px)` as the default state. This is correct for progressive enhancement, but if JavaScript fails, the content is invisible. The `Layout.astro` script should add a `no-js` fallback.
6. The `siteConfig` has `savings.averageYearly: 180` and `maxYearly: 300`, but the savings calculator is not rendered on the page. This data is unused.

## Questions to Consider

1. What if the gradient text were removed entirely? Would the blue accent color alone carry the brand identity?
2. Does the page need 4-5 trust signals per section, or would 1-2 strong signals be more credible?
3. What if the hero were simpler: just the headline, subhead, and CTA, without the floating cards? Would the conversion rate improve?
4. Should the savings calculator be added back, or is the form-based approach (send bill) the better conversion path?
