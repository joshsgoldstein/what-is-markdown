import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { publication, publicUrl } from '../lib/publication';
export async function GET() {
  const articles = (await getCollection('articles')).sort((a,b) => b.data.date.valueOf()-a.data.date.valueOf());
  return rss({
    title: publication.name,
    description: publication.description,
    site: publicUrl(),
    items: articles.map(article => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.date,
      link: publicUrl(`articles/${article.slug}/`),
      categories: article.data.tags,
    })),
    customData: '<language>en-us</language>',
  });
}
