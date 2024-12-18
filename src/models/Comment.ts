import { reference, z } from 'astro:content';

export const commenter = z.object({
	name: z.string(),
	website: z.string().optional(),
});

export const comment = z.object({
	post: reference('posts'),

	commenter: commenter,
	content: z.string(),
	createdTime: z.coerce.date(),
});

export const commentSet = z.array(comment);

export type Comment = z.infer<typeof comment>;

export type CommentSet = z.infer<typeof commentSet>;
