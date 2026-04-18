import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const articles = (await getCollection('articles')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: 'Lost In AI Land',
    description: 'Plain-language articles on the tools, concepts, and ideas shaping how we work with AI.',
    site: context.site!,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.date,
      link: `/articles/${article.slug}/`,
    })),
  });
}
