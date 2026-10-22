export const publication = {
  name: 'Lost In AI Land',
  description: 'Plain-language articles on AI and the tools, concepts, and ideas shaping how we work.',
};
// Resolve against Astro's production site and base, never the local preview host.
export function publicUrl(path = '') {
  const root = new URL(import.meta.env.BASE_URL.replace(/\/?$/, '/'), import.meta.env.SITE);
  return new URL(path.replace(/^\//, ''), root).href;
}
