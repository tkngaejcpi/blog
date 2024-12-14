import rss from '@astrojs/rss';

import sanitizeHtml from 'sanitize-html';

import { config } from '@config';
import { type Model as Frontmatter } from '@models/Post';

interface Posts {
	[x: string]: {
		frontmatter: Frontmatter;
		compiledContent: () => Promise<string>;
	};
}

export const GET = async (context) => {
	const posts: Posts = import.meta.glob('../data/posts/**/*.md', {
		eager: true,
	});

	const postIds = Object.keys(posts);
	const strip = (postId: string) => postId.slice(14, postId.length - 3);

	return rss({
		title: config.name,
		description: config.name,
		site: context.site,

		stylesheet: '/rss.xsl',
		trailingSlash: false,

		items: await Promise.all(
			postIds.map(async (postId) => {
				const { title, createdDate } = posts[postId].frontmatter;

				return {
					title,
					pubDate: createdDate,
					link: `/posts/${strip(postId)}`,
					content: sanitizeHtml(await posts[postId].compiledContent()),
				};
			}),
		),
	});
};
