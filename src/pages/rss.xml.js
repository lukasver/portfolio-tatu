import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, HERO_DESCRIPTION } from '@/config/consts';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: SITE_TITLE,
    description: HERO_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
    })),
  });
}
