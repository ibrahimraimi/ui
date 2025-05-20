import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';
import autolinkHeadings from 'rehype-autolink-headings';
import slugPlugin from 'rehype-slug';
import remarkToc from 'remark-toc';
import rehypeExternalLinks from 'rehype-external-links';
import containers from 'remark-containers';
import rehypeToc from '@jsdevtools/rehype-toc';

const theme = 'github-dark';
const highlighter = await createHighlighter({
	themes: [theme],
	langs: ['javascript', 'typescript', 'bash', 'html', 'svelte']
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.svx', '.md', '.svex'],

	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svx', '.md', '.svex'],
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));
					return `{@html \`${html}\` }`;
				}
			},
			remarkPlugins: [remarkToc, containers],
			rehypePlugins: [
				slugPlugin,
				[
					autolinkHeadings,
					{
						behavior: 'wrap'
					}
				],
				[
					rehypeExternalLinks,
					{
						target: '_blank',
						rel: ['nofollow', 'noopener', 'noreferrer']
					}
				],
				[
					rehypeToc,
					{
						nav: true,
						headings: ['h2', 'h3'],
						position: 'afterbegin',
						className: 'toc'
					}
				]
			]
		})
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			split: true,
			edge: false
		})
	}
};

export default config;
