import { z } from 'astro:content';

export const schema = z.object({
	title: z.string(),
	createdDate: z.date(),

	description: z.string().optional(),
	tags: z.array(z.string()).default([]),
	copyrightReserved: z.boolean().default(false),
});

export type Schema = z.infer<typeof schema>;
