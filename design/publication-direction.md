# Lost In AI Land publication refresh

Branch: design/publication-refresh. Standalone publication; no portfolio content.

## Research and reference lock
Refero style searches (Ghost publishing magazine, bold editorial typography, technology publication) returned no results. Used Refero screen search and retrieved full screen descriptions instead, supplemented by the skill's typography and anti-AI-slop references.

Primary: Square, The Bottom Line — https://refero.design/pages/bd90412f-0b9d-43be-a179-e66b4aa1c89e
Preserve: oversized sans masthead, white canvas, image/text feature, visible category navigation, newsletter band.
Secondary: NYT Business — https://refero.design/pages/62fbc777-7de1-408b-b422-65135aa90d9f
Borrow: thin rules, serif story headlines, differentiated headline/byline hierarchy.
Secondary: Seed Cultured — https://refero.design/pages/8b0dd1a1-2a81-4c99-82ed-caec7881a02d
Borrow: consistent editorial media slots and generous image scale.

## Decision ledger
| Decision | Source | Role |
|---|---|---|
| Large sans masthead | Square | Publication identity |
| White, black, vivid blue | Square + existing publication | Blue for links, editorial markers, subscription band |
| Serif headlines | NYT + existing DM Serif | Article titles only, no decorative italic word swaps |
| Split lead and three-column notes | Square + Seed | Article discovery |
| Existing illustrations | User's source | Article media; missing CLI/Git covers use typographic editorial graphics |
| Cheatsheets and Substack links | Existing publication + user request | Useful resources and real subscription destination |
| 18px article text | Refero typography craft | Long-form readability |

No fabricated readership, frequency, publication metrics, or new articles.

## Validation
- Astro production build: 18 generated routes; passed with temporary official esbuild-wasm fallback. Native esbuild binaries hang on this host. Original dependency files restored; manifests and lockfile unchanged.
- Internal link and image-source audit across 19 generated HTML files: passed.
- Desktop homepage and archive visually inspected. Mobile homepage and article checked at 390px: no horizontal overflow or broken homepage images.
- Preview captures: desktop-preview.png and mobile-preview.png.
