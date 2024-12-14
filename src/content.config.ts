import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';

import { schema as postSchema } from '@models/Post';

const posts = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/data/posts' }),
	schema: postSchema,
});

export const collections = { posts };
