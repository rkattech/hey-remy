import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heading: z.string().optional(),
    lede: z.string().optional(),
    eyebrow: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().default('Rohit, founder of Remy'),
    draft: z.boolean().default(false),
    // Short question this page is the answer to (used for FAQPage schema).
    question: z.string().optional(),
    answer: z.string().optional(),
  }),
});

export const collections = { blog };
