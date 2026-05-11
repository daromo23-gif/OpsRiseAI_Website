---
name: daniel-rojas-design
description: Use this skill to generate well-branded interfaces and assets for Daniel Rojas (AI · Consultoría · Educación), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

- **Tokens & fonts:** `colors_and_type.css` — drop into a project, add `class="dr"` to `<body>`, opt into `data-theme="light"` for the cream surface.
- **Logos & assets:** `assets/` (three logomark variants + brand guideline PDF).
- **UI kits:** `ui_kits/marketing/` (landing) and `ui_kits/app/` (Aula app).
- **Preview cards:** `preview/` (one card per concept — palette, type, buttons, etc).

## Brand voice — non-negotiables

- **Spanish first.** Peer-to-peer, first-person, concrete.
- **No hype words:** never "revolucionario", "apasionado", "transformamos", "el futuro", etc.
- **No emoji.** Use the monoline icon style (Lucide stand-in until a custom set ships).
- **`//` is the brand's signature** — use it as an eyebrow prefix in mono labels.
- Numbers & timeframes are credibility — use them when real.

## Visual non-negotiables

- Default surface is **Ink (#1C1A17)**. Cream theme exists for long-form.
- **Ember (#D85A2B)** is the only accent — use it on CTAs, focus, the principal element of icons. Never as a fill across large surfaces (except the Ember-on-cream button).
- Type families are **strict-role**: Silkscreen = display caps, DM Serif Display = headings, Space Mono = labels/CTA/code, DM Sans Light = body.
- **Borders, not shadows**, on dark.
- **No** gradients (except faint dot-grid backgrounds), glassmorphism, blurs, neon. The brand is warm-and-quiet, not flashy.
