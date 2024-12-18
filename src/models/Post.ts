import { z } from 'astro:content';

export const post = z.object({
	title: z.string(),
	createdDate: z.date(),

	description: z.string().optional(),
	tags: z.array(z.string()).default([]),
	copyrightReserved: z.boolean().default(false),
});

export type Post = z.infer<typeof post>;
