---
name: "luzaria"
description: "Landing page for Mariluz Marín, a Spanish energy advisor who reviews electricity bills with honest, transparent advice."
colors:
  liquid-glass-blue: "#007AFF"
  liquid-glass-blue-hover: "#0051D5"
  liquid-glass-blue-light: "#E8F4FF"
  liquid-glass-blue-glow: "rgba(0, 122, 255, 0.3)"
  cyan-accent: "#5AC8FA"
  cyan-deep: "#34AADC"
  success-green: "#34C759"
  success-green-hover: "#248A3D"
  success-green-light: "#E8F9ED"
  success-green-glow: "rgba(52, 199, 89, 0.3)"
  secondary-purple: "#5856D6"
  secondary-purple-hover: "#4B48B8"
  accent-orange: "#FF9500"
  accent-orange-light: "#FFF3E0"
  error-red: "#FF3B30"
  text-primary: "#000000"
  text-secondary: "#6E6E73"
  text-tertiary: "#8E8E93"
  text-quaternary: "#C7C7CC"
  text-inverse: "#FFFFFF"
  bg-primary: "#FFFFFF"
  bg-secondary: "#F5F5F7"
  bg-tertiary: "#E5E5EA"
  glass-bg: "rgba(255, 255, 255, 0.68)"
  glass-bg-hover: "rgba(255, 255, 255, 0.84)"
  glass-border: "rgba(255, 255, 255, 0.58)"
  surface-tint-blue: "rgba(236, 246, 255, 0.74)"
  surface-tint-green: "rgba(238, 255, 245, 0.74)"
  surface-tint-violet: "rgba(243, 240, 255, 0.74)"
  separator: "rgba(0, 0, 0, 0.04)"
  separator-strong: "rgba(0, 0, 0, 0.08)"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, SF Pro Text, Helvetica Neue, sans-serif"
    fontSize: "clamp(2.5rem, 8vw, 6rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.055em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, SF Pro Text, Helvetica Neue, sans-serif"
    fontSize: "clamp(2rem, 6vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.045em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, SF Pro Text, Helvetica Neue, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, SF Pro Text, Helvetica Neue, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.02em"
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, SF Pro Text, Helvetica Neue, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.02em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "22px"
  2xl: "26px"
  3xl: "28px"
  pill: "9999px"
spacing:
  1: "0.25rem"
  2: "0.5rem"
  3: "0.75rem"
  4: "1rem"
  5: "1.25rem"
  6: "1.5rem"
  8: "2rem"
  10: "2.5rem"
  12: "3rem"
  16: "4rem"
  20: "5rem"
  24: "6rem"
  32: "8rem"
  40: "10rem"
components:
  button-primary:
    backgroundColor: "{colors.liquid-glass-blue}"
    textColor: "{colors.text-inverse}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.liquid-glass-blue-hover}"
    textColor: "{colors.text-inverse}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.5rem"
  button-secondary:
    backgroundColor: "rgba(0, 122, 255, 0.08)"
    textColor: "{colors.liquid-glass-blue}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.5rem"
  button-green:
    backgroundColor: "{colors.success-green}"
    textColor: "{colors.text-inverse}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.5rem"
  glass-card:
    backgroundColor: "{colors.glass-bg}"
    rounded: "{rounded.xl}"
    padding: "1.5rem"
  surface-panel:
    backgroundColor: "{colors.glass-bg}"
    rounded: "{rounded.2xl}"
    padding: "2rem"
  input-field:
    backgroundColor: "rgba(255, 255, 255, 0.62)"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "14px 1rem"
---

# Design System: luzaria

## 1. Overview

**Creative North Star: "The Liquid Light System"**

The luzaria design system is a warm, transparent interface that embodies the honesty of a personal energy advisor. Every surface behaves like light passing through polished glass: luminous, refractive, and impossible to hide behind. The aesthetic is unmistakably Apple-inspired — liquid glass panels, spring-physics interactions, and a cool-but-approachable palette — but the voice is human, not corporate. The page is for a single person (Mariluz Marín) offering a single service (reviewing your electricity bill), and the design never pretends to be an institution.

The system explicitly rejects the visual language of Spanish energy comparison sites: no aggressive pop-ups, no fake urgency, no stock-photo handshakes. It also avoids the generic SaaS landing-page default of beige backgrounds and identical card grids. The glass metaphor is not decorative; it is the core argument of the brand: transparency, literally.

**Key Characteristics:**
- Cool-neutral palette with a single saturated blue accent (Liquid Glass Blue)
- Glass-morphism as the dominant surface treatment, not an occasional flourish
- SF Pro Display / Text system stack: native, premium, readable
- Spring-physics micro-interactions (cubic-bezier(0.34, 1.56, 0.64, 1))
- Mobile-first confidence: the design feels native on phones
- Honesty-first hierarchy: the "no saving = no change" message is central, not a footnote

## 2. Colors

The palette is built around a single primary accent — Liquid Glass Blue — supported by a functional color system (green for savings, purple for secondary, orange for ratings). The gray scale is cool-tinted, not warm. The background is a near-white with subtle blue atmospheric gradients, never beige or cream.

### Primary
- **Liquid Glass Blue** (#007AFF): The dominant brand color. Used for primary buttons, links, focus states, and the hero gradient accent. It carries the "liquid light" metaphor.
- **Liquid Glass Blue Hover** (#0051D5): Darker state for primary interactive elements.
- **Liquid Glass Blue Light** (#E8F4FF): Subtle tint backgrounds for icon tiles, badge fills, and hover states.
- **Cyan Accent** (#5AC8FA): Gradient endpoint and glow color. Used sparingly in gradients and atmospheric orbs.

### Secondary
- **Secondary Purple** (#5856D6): Used for secondary accent cards, tier badges, and icon tiles. Rare on any single screen.

### Tertiary
- **Accent Orange** (#FF9500): Ratings, warnings, and trust signals. Used only when a warm contrast is needed.

### Functional
- **Success Green** (#34C759): Savings calculations, positive outcomes, and trust indicators. The "you saved money" color.
- **Error Red** (#FF3B30): Rare; used only for form validation errors.

### Neutral
- **Text Primary** (#000000): Headlines and body text on light backgrounds.
- **Text Secondary** (#6E6E73): Supporting copy, descriptions, and secondary labels.
- **Text Tertiary** (#8E8E93): Placeholders, captions, and metadata.
- **Text Quaternary** (#C7C7CC): Disabled states and the faintest hints.
- **Background Primary** (#FFFFFF): The base canvas for all glass panels.
- **Background Secondary** (#F5F5F7): The page background behind the glass system. Cool gray, not warm beige.
- **Glass Background** (rgba(255, 255, 255, 0.68)): The default glass panel fill. Semi-transparent white.
- **Glass Border** (rgba(255, 255, 255, 0.58)): The subtle edge of every glass surface.

### Named Rules
**The Transparency-First Rule.** Glass panels are the default surface, not a special effect. If a section doesn't use glass, it needs a reason. The background is always visible through the surface.

**The One-Accent Rule.** Liquid Glass Blue is the only saturated color on any given screen. Green, purple, and orange appear only in their functional contexts (savings, secondary badges, ratings). Never combine them decoratively.

## 3. Typography

**Display Font:** SF Pro Display / SF Pro Text / -apple-system (with Helvetica Neue fallback)
**Body Font:** Same stack — the system uses a single type family across all roles.

**Character:** The typeface is the invisible hand of the interface. It is native, confident, and never self-conscious. Because the visual system is already rich (glass, gradients, motion), the typography stays quiet and readable. Weight contrast between Display (800) and Body (400) carries the hierarchy; the font itself does not need to shout.

### Hierarchy
- **Display** (800, clamp(2.5rem, 8vw, 6rem), line-height 1, letter-spacing -0.055em): Hero headlines only. Used once per page at the top of the hero section.
- **Headline** (800, clamp(2rem, 6vw, 4rem), line-height 1.05, letter-spacing -0.045em): Section titles. Bold, tight, and readable.
- **Title** (700, 1.375rem, line-height 1.15, letter-spacing -0.02em): Card titles, feature headings, and sub-section headers.
- **Body** (400, 1.0625rem, line-height 1.6, letter-spacing -0.02em): Primary reading text. Max line length: 65–75ch.
- **Label** (600, 0.875rem, line-height 1, letter-spacing 0.02em, uppercase): Badges, eyebrow text, and CTAs. Used sparingly; never on every section.

### Named Rules
**The Single-Voice Rule.** One font family carries every role. Do not introduce a second typeface for "contrast" or "personality." The personality lives in the glass and the motion, not in the typography.

**The No-All-Caps Body Rule.** Uppercase is reserved for short labels and badges only. Never set a sentence or paragraph in all caps.

## 4. Elevation

The system uses **Liquid Depth** — a glass-morphism vocabulary where surfaces float above a cool gray background with real physical depth. Depth is conveyed through three simultaneous layers: (1) a semi-transparent white background with backdrop-filter blur, (2) a subtle white border that catches light, and (3) a specular highlight gradient on the top 55% of the surface that simulates reflected light. Shadows are secondary; they are soft, diffuse, and never harsh. The primary depth cue is the blur and the specular highlight, not the drop shadow.

### Shadow Vocabulary
- **Glass Shadow** (`inset 0 1px 0 rgba(255, 255, 255, 0.98), inset 0 -1px 0 rgba(15, 23, 42, 0.012), 0 1px 0 rgba(255, 255, 255, 0.42)`): The default resting shadow for all glass panels. Simulates the edge of a physical glass sheet.
- **Glass Hover Shadow** (`inset 0 1px 0 rgba(255, 255, 255, 1), inset 0 -1px 0 rgba(15, 23, 42, 0.014), 0 1px 0 rgba(255, 255, 255, 0.52), 0 10px 30px rgba(15, 23, 42, 0.024)`): Applied on hover. Slightly deeper and more luminous.
- **Ambient Glow Blue** (`0 0 60px rgba(0, 122, 255, 0.15)`): Used for hero-level accent elements and CTA buttons. A soft, diffuse color glow.
- **Ambient Glow Green** (`0 0 60px rgba(52, 199, 89, 0.15)`): Used for savings-related elements and positive outcome cards.

### Named Rules
**The Glass-Default Rule.** Surfaces are glass at rest. Cards, panels, pills, and input fields all use the glass treatment. Flat white is reserved only for the absolute base canvas and for the "solid" button variant when contrast is needed.

**The No-Harsh-Shadows Rule.** Never use a shadow with a blur radius greater than 16px and an opacity greater than 0.12. The depth is in the blur and the highlight, not in a dark drop shadow.

## 5. Components

Components are tactile and confident: they respond to touch with spring-physics motion, and their hover states are always visible and rewarding. Every interactive element has a `:focus-visible` ring for keyboard users.

### Buttons
- **Shape:** Fully rounded pill (border-radius: 9999px)
- **Primary:** Liquid Glass Blue background (#007AFF), white text, padding 0.75rem 1.5rem. On hover: background shifts to #0051D5, scales to 1.04, and gains a blue glow shadow.
- **Secondary:** Transparent background with 8% blue tint, blue text. On hover: background shifts to 15% blue tint, scales to 1.04.
- **Green:** Success Green background (#34C759), white text. On hover: shifts to #248A3D, scales to 1.04, gains green glow.
- **Tertiary:** Transparent background, blue text. On hover: 6% blue tint background.
- **Hover / Focus:** All buttons use cubic-bezier(0.34, 1.56, 0.64, 1) for the transform transition, creating a spring-physics feel. Focus-visible: a 4px blue ring at 20% opacity.

### Glass Cards / Panels
- **Corner Style:** 22px (xl) for standard cards, 26px (2xl) for feature panels.
- **Background:** Glass Background (rgba(255, 255, 255, 0.68)) with backdrop-filter: blur(44px) saturate(240%) brightness(1.05).
- **Border:** 1px solid Glass Border (rgba(255, 255, 255, 0.58)).
- **Shadow:** Glass Shadow at rest, Glass Hover Shadow on hover.
- **Specular Highlight:** A dedicated child element or ::before pseudo-element covering the top 55% with a gradient from rgba(255,255,255,0.92) to transparent. This is non-negotiable; it is what makes the glass feel real.
- **Internal Padding:** 1.5rem to 2rem depending on density.
- **Hover:** Cards lift by 4px and scale to 1.003 on hover. The background shifts to Glass Background Hover (0.84 opacity). The transition uses spring easing.

### Inputs / Fields
- **Style:** Glass-like background at 62% opacity white, 1px border at rgba(15, 23, 42, 0.08), 16px radius, 14px vertical padding.
- **Focus:** Border shifts to Liquid Glass Blue, background shifts to 90% opacity white, and a 4px blue glow ring appears at 10% opacity.
- **Placeholder:** Text Tertiary color (#8E8E93).

### Badges / Pills
- **Shape:** Pill (9999px radius), inline-flex.
- **Neutral:** Background rgba(15, 23, 42, 0.04), border rgba(15, 23, 42, 0.06), text secondary.
- **Blue:** Background #E8F4FF, border rgba(0, 122, 255, 0.15), text blue.
- **Green:** Background #E8F9ED, border rgba(52, 199, 89, 0.15), text green.

### Navigation
- **Style:** Glass pill background at 72% opacity, blur(28px), pill shape. Fixed at top of viewport.
- **Typography:** 14px medium weight, secondary text color.
- **Hover:** Scale to 1.02, background shifts to 82% opacity.
- **Mobile:** Hamburger menu with glass panel dropdown.

## 6. Do's and Don'ts

### Do:
- **Do** use glass panels as the default surface for cards, sections, and inputs.
- **Do** include a specular highlight on every glass surface (top 55%, gradient from white to transparent).
- **Do** use Liquid Glass Blue (#007AFF) as the only saturated accent on any screen.
- **Do** use spring-physics easing (cubic-bezier(0.34, 1.56, 0.64, 1)) for hover and entrance animations.
- **Do** keep the background a cool gray (#F5F5F7), never warm beige or cream.
- **Do** use the single SF Pro / system font stack for all typography.
- **Do** ensure body text stays within 65–75ch line length.
- **Do** include visible focus-visible rings on all interactive elements.

### Don't:
- **Don't** use border-left or border-right greater than 1px as a colored accent on cards or callouts. Use background tints or full borders instead.
- **Don't** use gradient text (background-clip: text) for headings. Use a single solid color or the Liquid Glass Blue gradient only when it is the primary brand voice.
- **Don't** use glassmorphism as a decorative flourish on an otherwise flat surface. Either commit to the glass system or don't use it.
- **Don't** use the hero-metric template (big number + small label + gradient accent). SaaS cliché.
- **Don't** create identical card grids with icon + heading + text repeated endlessly. Vary the structure per section.
- **Don't** put tiny uppercase tracked eyebrows above every section. One deliberate label is voice; repeated eyebrows are AI scaffolding.
- **Don't** use numbered section markers (01 / 02 / 03) as default scaffolding. Numbers only when the section is literally a sequence.
- **Don't** use border-radius greater than 28px on cards or panels. 22px is the standard card radius; 9999px is for pills only.
- **Don't** pair a 1px border with a soft wide drop shadow (blur >= 16px) on the same element. Pick one or the other.
- **Don't** use corporate stock photos, handshakes, or generic "professional" imagery. The advisor is a real person; the photos should reflect that.
- **Don't** use all-caps for body copy or sentences. Reserve uppercase for short labels and badges only.
- **Don't** use marketing buzzwords: streamline, empower, supercharge, unleash, transform, seamless, world-class, enterprise-grade, next-generation, cutting-edge, game-changer, mission-critical.
- **Don't** use em dashes (—) or double hyphens (--) in copy. Use commas, colons, semicolons, periods, or parentheses.
- **Don't** default to dark mode without a reason. The system is light-first; the glass metaphor depends on light passing through surfaces.
