import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';

import { post } from '@models/Post';
import { commentSet } from '@models/Comment';

const posts = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/data/posts' }),
	schema: post,
});

const comments = defineCollection({
	loader: glob({ pattern: '**/*.json', base: './src/data/comments' }),
	schema: commentSet,
});

export const collections = { posts, comments };
