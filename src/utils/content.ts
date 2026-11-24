import { getCollection, type CollectionEntry } from 'astro:content';

export async function getPublishedBlogPosts(): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection('blog', (entry) => {
    return import.meta.env.PROD ? !entry.data.draft : true;
  });

  return posts.sort(
    (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );
}

export async function getPublishedPages(): Promise<CollectionEntry<'pages'>[]> {
  const pages = await getCollection('pages', (entry) => {
    return import.meta.env.PROD ? !entry.data.draft : true;
  });

  return pages.sort((a, b) => (a.data.navOrder ?? 10) - (b.data.navOrder ?? 10));
}

export function getPostSlug(post: CollectionEntry<'blog'>): string {
  return post.data.slug || post.id.replace(/\.[^/.]+$/, '');
}

export function getPageSlug(page: CollectionEntry<'pages'>): string {
  return page.data.slug || page.id.replace(/\.[^/.]+$/, '');
}
