import { z } from 'astro:content';

export const schema = z.object({
	title: z.string(),
	createdDate: z.date(),

	tags: z.array(z.string()).default([]),
	copyrightReserved: z.boolean().default(false),
});

export type Model = z.infer<typeof schema>;
