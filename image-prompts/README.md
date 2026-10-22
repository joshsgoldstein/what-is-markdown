# Article image prompts

Save each article’s image-generation JSON here using its article slug as the filename. Set `imagePrompt` in the article frontmatter to the repository-relative JSON path.

- `dinosaurs-city-original.json`: city-scene prompt supplied by Josh.
- `you-and-ai-have-been-shipping-together.json`: image prompt for Josh’s Docker cover illustration.

For close visual matches, supply both the reference image and JSON to the image generator.

## Standalone mockup artwork

Nine standalone PNGs live in `public/images/variants/`. Each has a matching JSON file here containing the exact built-in image-generation prompt, reference mockup, transparency setting, and output path. `docker-magazine`, `docker-notebook`, and `docker-stories` are distinct heroes; `cli`, `git`, and `markdown` are illustrated covers; `notebook-cli`, `notebook-git`, and `notebook-markdown` are transparent notebook spot illustrations.

Reuse the PNG directly anywhere in this publication. To create related art, supply both the saved reference mockup and matching JSON prompt. These are newly generated standalone adaptations of the original mockups, not extracted original layers. The original full-page mockups remain in `public/concept-art/`.

The artwork-only ZIP contains each PNG and its matching prompt; the full archive also preserves mockups, earlier screenshots, and article images.
