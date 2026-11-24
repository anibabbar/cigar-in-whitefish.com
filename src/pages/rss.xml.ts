import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import site from '../data/site.json';
import { getPublishedBlogPosts, getPostSlug } from '../utils/content';

export async function GET(context: APIContext) {
  const posts = await getPublishedBlogPosts();

  return rss({
    title: `${site.siteName} - Blog & Guides`,
    description: site.defaultMetaDescription,
    site: context.site || 'https://example.com',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.pubDate),
      description: post.data.seo?.metaDescription || post.data.title,
      link: `/blog/${getPostSlug(post)}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
