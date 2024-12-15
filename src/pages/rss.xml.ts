import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

import { config } from '@config';

export const GET = async (context: { site: string }) => {
	const posts = await getCollection('posts');

	return rss({
		title: config.name,
		description: config.name,
		site: context.site,

		stylesheet: '/rss.xsl',
		trailingSlash: false,

		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.createdDate,

			link: `${context.site}posts/${post.id}`,
		})),
	});
};
