// @ts-check
import { defineConfig } from 'astro/config';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://satlyun.pages.dev',

	output: 'static',
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
			configPath: 'wrangler.toml',
		},
	}),

	integrations: [sitemap()],

	markdown: {
		syntaxHighlight: false,

		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
});
