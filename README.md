# what-is-markdown

Static page explaining Markdown basics.

Substack: [lostinai.substack.com](https://lostinai.substack.com)

## Subscriptions and discovery

- RSS: `/what-is-markdown/rss.xml`. Generated from the article collection on every build; readers paste the published URL into their feed reader. This feed contains summaries and links, not full article bodies.
- Newsletter: no email service is connected yet. Newsletter signup links are hidden until a provider is configured. RSS works independently.
- Astro builds static HTML, including article text, canonical URLs, RSS discovery, and JSON-LD metadata. No executable client JavaScript is required for reading or subscription links.
- `/what-is-markdown/sitemap-index.xml` is generated on each build. After deploying, submit its full public URL in Search Console.
- Production URLs derive from `site` and `base` in `astro.config.mjs`. Update both when moving to a custom domain. Preview URLs intentionally retain production canonical URLs.
- Structured data helps describe content; it does not guarantee search ranking or citation by AI systems. Keep articles accurate, well sourced, clearly headed, and directly useful to readers.

## Design previews

Published comparison: https://joshsgoldstein.github.io/what-is-markdown/concepts/

All six concepts share the same article collection: `magazine`, `notebook`, `stories`, `cabinet`, `pocket`, and `atlas`. Each is available under `/what-is-markdown/concepts/<name>/`. Preview pages are excluded from the sitemap and marked noindex. The main publication footer links to the comparison page.
