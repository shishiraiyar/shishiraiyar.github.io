import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import relativeImages from "mdsvex-relative-images";
import remarkCaptions from 'remark-captions';

export default {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
	},
	extensions: ['.svelte', '.md'],
	preprocess: [mdsvex ({
		extensions: ['.md'],
		remarkPlugins: [relativeImages, remarkCaptions],
	})]
};