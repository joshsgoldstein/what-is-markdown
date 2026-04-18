import { defineCollection, z } from 'astro:content';

const TAGS = ['basics', 'markdown', 'git', 'CLI', 'Docker', 'AI'] as const;

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    date: z.date(),
    image: z.string().optional(),
    tags: z.array(z.enum(TAGS)).default([]),
    author: z.string().default('Josh'),
  }),
});

export const collections = { articles };
