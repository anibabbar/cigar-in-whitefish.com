import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const featuredImageSchema = z.object({
  src: z.string(),
  alt: z.string().default(''),
  caption: z.string().optional(),
});

export const seoSchema = z.object({
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  primaryKeyword: z.string().optional(),
  secondaryKeywords: z.array(z.string()).default([]),
  canonicalUrl: z.string().optional(),
  ogImage: z.string().optional(),
  noIndex: z.boolean().default(false),
});

export type FeaturedImage = z.infer<typeof featuredImageSchema>;
export type SEOMetadata = z.infer<typeof seoSchema>;

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    featuredImage: featuredImageSchema.optional(),
    seo: seoSchema.optional().default({}),
    draft: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    showInNav: z.boolean().default(true),
    navOrder: z.number().default(10),
    heroSubtitle: z.string().optional(),
    featuredImage: featuredImageSchema.optional(),
    seo: seoSchema.optional().default({}),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
  pages,
};
