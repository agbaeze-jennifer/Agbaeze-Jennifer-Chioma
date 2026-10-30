import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum(['Work Smarter', 'AI & Jobs', 'Learn & Build']),
    date: z.coerce.date().optional(), // only set when actually published
    draft: z.boolean().default(true),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    sources: z.array(z.object({ title: z.string(), url: z.string() })).optional(),
  }),
});

export const collections = { blog };