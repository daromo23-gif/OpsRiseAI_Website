# OpsRiseAI — Design System

A design system for **OpsRiseAI**, a Spanish-language **AI · Consultoría ·
Educación** practice. The positioning line is *"AI para consultores"* (AI for
consultants), aimed at Spanish-speaking professionals who want to integrate
AI into their work **without writing code**.

> 🎨 **Logo status.** The original brand kit shipped under a different name
> ("Daniel Rojas") with three logomark variants. The visual language —
> palette, type, voice, iconography, spacing — is confirmed and unchanged.
> The logo is being re-designed for OpsRiseAI: see **`logo-concepts.html`**
> for six in-system directions to choose from.

---

## Sources

| File | What it is |
| --- | --- |
| `uploads/daniel-rojas-brand-guidelines.pdf` | Official 1-page brand guidelines (v1.0 — 2026) |
| `uploads/daniel-rojas-brand-guidelines.png` | Same, rasterised (used as the visual reference) |
| `uploads/DR-logomark-dark.png` | Logomark — dark background variant (white/cream stroke) |
| `uploads/DR-logomark-ember.png` | Logomark — Ember (accent) on dark backgrounds |
| `uploads/DR-logomark-light.png` | Logomark — for light/cream backgrounds (Ink stroke) |

A copy of each lives in `assets/` so files in this design system do not
reach across into `uploads/`.

No codebase, Figma file, or slide deck was provided — only the brand
guidelines. **The UI kits in `ui_kits/` are interpretations** built from the
guideline's primitives (palette, type, button styles, voice, iconography
direction). They are **not recreations of an existing product**, since none was
shared. Treat them as a starting point.

---

## Index

```
README.md                     ← you are here
SKILL.md                      ← skill manifest (Claude Code compatible)
colors_and_type.css           ← all design tokens as CSS custom properties

assets/                       ← logos, brand reference image, source PDF
preview/                      ← Design System tab cards (one HTML file each)

ui_kits/
  marketing/                  ← Daniel Rojas marketing site (landing, posts, CTAs)
    index.html
    Hero.jsx, Nav.jsx, Footer.jsx, ProofRow.jsx, ModuleCard.jsx, ...
  app/                        ← "Aula" — a hypothetical learning/AI-workspace app
    index.html
    Sidebar.jsx, ChatComposer.jsx, FlowCard.jsx, TopBar.jsx, ...

(no slides/ — no slide template was provided)
```

---

## Content Fundamentals

The brand voice is **direct, peer-to-peer, and outcomes-led** — written by a
practitioner for other practitioners, not a marketer for an audience.

### Language
- **Spanish (Latin American / neutral).** All public copy should be in
  Spanish first. English is an internal/working language only.
- Tildes and ñ are always preserved — never strip them.
- Quotation: use straight `"..."` in monospace contexts (CTAs, labels, code),
  curly `"..."` in serif/sans body copy.

### Tone
- **Concrete > abstract.** Lead with what happened or what you'll do.
- **First-person singular ("yo / hoy cerré / pasé 12 años")** — the brand
  is a person.
- **Second-person tú** when addressing readers (informal, peer).
- No hype, no "revolucionario," no "apasionado," no "transformamos."
  The guidelines call these out explicitly as ❌.
- Numbers and timeframes are credibility signals — use them when real
  ("12 años en Fortune 500", "cerré una propuesta hoy").
- Imperatives are fine for CTAs ("Únete ahora", "Ver casos reales", "Leer más").

### Casing
- **UPPERCASE** for buttons, labels, eyebrows, code-style metadata
  (always paired with Space Mono and tracked letter-spacing).
- **Sentence case** for headlines, subheadlines, body copy. Never Title Case.
- Brand name: **Daniel Rojas** (two words, both capitalised). Logomark
  abbreviation **DR** only in compact/icon contexts.

### Examples — straight from the guidelines

✅ Sí — sounds like the brand
- *"Hoy cerré una propuesta usando este flujo exacto."*
- *"Sin código. Sin perder tu voz."*
- *"Pasé 12 años dentro de Fortune 500. Ahora enseño a consultores a integrar AI sin código."*

❌ No — does not sound like the brand
- *"La IA va a revolucionar el mundo."*
- *"Soy apasionado por la tecnología."*

### Emoji
**Not used.** The guidelines establish a precise typographic
iconography (Monoline · Stroke 1.5px). Substitute with the icon set or with
a Space-Mono symbol like `→ · // ×` when you need a glyph.

### Punctuation flourishes
- **`//`** is the brand's signature punctuation — used as an eyebrow prefix
  before mono labels (e.g. `// AI para consultores`, `// DOCUMENTO OFICIAL`).
- **`·`** (middle dot) is preferred over `|` or `-` as a separator in mono
  metadata (e.g. `AI · CONSULTORÍA · EDUCACIÓN`).
- **`→`** appears inside primary CTAs (`UNIRSE AHORA →`).

---

## Visual Foundations

### Palette
The brand is **warm, earthy, and high-contrast**. The default surface is
**Ink** (a near-black warm brown), accented sparingly with **Ember** (a
deep terracotta orange). Cream is the only true light surface; Stone /
Ember Light / Line are the supporting tones.

| Token | Hex | Use |
| --- | --- | --- |
| Ink | `#1C1A17` | Default page background, body text on light |
| Cream | `#F4F1EB` | Light surfaces, body text on dark |
| Ember | `#D85A2B` | Accent, primary CTAs, hover/focus emphasis |
| Stone | `#8C8377` | Secondary / muted text |
| Ember Light | `#F8C4B0` | Soft tags, badges, low-emphasis accents |
| Line | `#D8D2C8` | Borders, dividers (full-opacity on light, ≤22% alpha on dark) |

The dark theme is the **preferred default** ("Fondo oscuro preferido" in the
guidelines). Use the cream theme for long-form documents, education materials,
and printable artefacts.

### Typography
Four families, each with a strict role:

- **Silkscreen Bold** — the "display" face. A pixel/technical face used only
  for hero headlines, big numerals, and rare technical emphasis.
  ALL-CAPS only. Tight tracking. Never used below ~28px.
- **DM Serif Display** — the "elegant" face. Subheadlines, section titles,
  any time the brand wants a more editorial feel. Sentence case.
- **Space Mono** — the "system" face. Labels, CTAs, code, metadata, tags,
  eyebrows. Almost always paired with `text-transform: uppercase` and
  letter-spacing of `0.10em`–`0.14em`. Carries the `//` motif.
- **DM Sans Light (300)** — the body face. Long-form text, descriptions,
  paragraphs. Never bold; emphasis is achieved via Ember color or by
  swapping to Space Mono.

Default rule: if you reach for bold weights on body type, you're probably
doing it wrong — switch family instead.

### Backgrounds
- Ink fields are flat, not gradient.
- A faint **dot/grid texture** (1px Cream dots @ ~3% alpha, 24px grid) is
  used in marketing hero sections — see the brand guidelines page itself.
- **No** painterly gradients, blurred orbs, mesh backgrounds, glassmorphism,
  or noise overlays.
- **No** photo backgrounds with overlays.
- Full-bleed photography is rare. When used, it should be warm, slightly
  desaturated, and grain-friendly.

### Borders
- 1px is default. 2px exists for emphasised cards.
- On dark surfaces: `rgba(216, 210, 200, 0.12)` (Line @ 12% alpha).
- On light surfaces: solid `#D8D2C8`.
- Cards on dark show borders before they show shadows.

### Corner radii
- **`4px`** is the workhorse — buttons, inputs, badges, small cards.
- **`6–10px`** for medium cards and modal panels.
- **`16px`** for hero/feature cards.
- **`999px` (pill)** is allowed for tags but used sparingly.
- **No** radius `0` ("hard square") — feels too brutalist for the warmth.
- **No** radius >24px — feels too consumery / soft.

### Shadows / elevation
The dark theme uses **borders, not shadows**, for separation. Shadows only
appear on:
- raised modals / popovers (`--shadow-3`),
- the Ember CTA on hover (a soft Ember-tinted glow, `--shadow-ember`).

The light theme uses subtle warm shadows (`rgba(28,26,23,0.06–0.10)`).
Never blue/grey shadows.

### Hover, press, focus
- **Hover** on neutral surfaces: lighten by one Ink step
  (`--bg-elev-2 → --bg-hover`); never a color shift.
- **Hover** on the Ember CTA: deepen to `--dr-ember-hover` (#BF4D22) **and**
  add the `--shadow-ember` glow.
- **Press**: scale 0.98 for `var(--dur-fast)`, no color change.
- **Focus**: 2px Ember outline offset by 2px from the bg
  (`--focus-ring`). No glowing rings or pulsing animations.

### Transparency & blur
- Used **only** for:
  - the 12% / 22% Line border tints on dark,
  - the 12% Ember-tint highlight (e.g. selected list item background).
- **No** backdrop-filter blurs. No frosted glass.

### Motion
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` for entrances,
  `cubic-bezier(0.65, 0, 0.35, 1)` for in-out.
- Durations: 120ms (micro), 200ms (default), 400ms (deliberate).
- **No** bounce or elastic. **No** parallax. **No** auto-rotating carousels.
- Page transitions are crossfades only.
- The cursor blink in monospace contexts (`▍`) is an acceptable
  one-off animation flourish.

### Layout
- Max content width: **1200px** for marketing, **880px** for long-form
  reading.
- Generous vertical rhythm — at least `--space-7` (48px) between major
  sections, often `--space-9` (96px) on landing pages.
- A consistent **8px grid** drives the spacing scale.
- **Fixed elements:** top navigation may be sticky on scroll;
  the brand bug (DR logomark) sits in the top-left and never moves.

### Imagery vibe
Warm and earthy. If photography is used: high film grain, slight
desaturation, neutral or terracotta-leaning color cast. Black-and-white
is acceptable. Cool/blue photography is **off-brand**.

---

## Iconography

The guidelines specify a single icon style:

> **Estilo: Monoline · Stroke 1.5px · Sin relleno**
> **Acento Ember en elemento principal del icono.**

Translation: thin (1.5px) outline icons, no fill, with the **single most
important stroke or accent** in Ember (`#D85A2B`). The reference page shows
this style for: Node, Doc, Alert, Check, Upload, Search.

### What this design system uses
The guidelines do not ship an icon font or sprite. The closest open-source
match is **[Lucide](https://lucide.dev/)** (1.5px monoline strokes, no
fills). It's loaded from CDN and its icons are colored with `currentColor`
so the Ember-on-principal-element rule is enforced via a small wrapper
component (`<DRIcon name="check" emberOn="dot" />`).

> **Substitution flag.** Lucide is used as a stand-in. If Daniel Rojas has
> a custom icon set, please share it (SVG sprite or individual SVGs) and
> we'll swap it in.

### Rules
- Always 1.5px stroke, regardless of icon size.
- Default color is `currentColor` (inherits from text).
- Apply Ember to the **single most defining stroke** of an icon — never
  apply it to the whole icon.
- Icons sit in a 24px box. 16px and 20px variants exist for inline use.
- **No emoji.** **No** filled / duotone / 3D icon styles.
- Unicode glyphs (`→ · // × ✓`) are used as ad-hoc icons in mono contexts.

### Logomark
A square frame with a centered crosshair / circuit motif — read as a
"node in a system" or "consultant at the center". Three official variants
shipped:

- `assets/DR-logomark-dark.png` — for dark backgrounds (cream stroke)
- `assets/DR-logomark-ember.png` — for solid Ember backgrounds
- `assets/DR-logomark-light.png` — for cream/light backgrounds (ink stroke)

Clearspace = the height of the letter "D" on every side. Never tilt,
distort, recolor, or place under 16px.

---

## How to use this system

1. Copy `colors_and_type.css` into your project.
2. Add the Google Fonts `<link>` tags from the file's header comment.
3. Add `class="dr"` to your `<body>` (defaults = dark theme), or
   `class="dr" data-theme="light"` for the cream theme.
4. Use the semantic CSS variables (`--bg`, `--fg-1`, `--accent`, …) — do
   **not** reference raw palette tokens (`--dr-ink`, `--dr-ember`)
   directly in components. The semantic layer is what enables theming.
5. For composed UI, lift components from `ui_kits/marketing/` or
   `ui_kits/app/`.

---

*Document version 1.0 — generated from official brand guidelines v1.0 (2026).*
