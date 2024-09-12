import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

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
		extensions: ['.md']
	})]
};