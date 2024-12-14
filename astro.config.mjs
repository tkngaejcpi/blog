// @ts-check
import { defineConfig } from 'astro/config';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://satlyun.pages.dev',

	integrations: [sitemap()],

	markdown: {
		syntaxHighlight: false,

		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
});
