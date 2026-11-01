import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// GitHub Pages serves project sites from a sub-path (e.g. https://user.github.io/palladia).
// The deploy workflow sets BASE_PATH accordingly. Leave it unset for local dev or a custom domain.
const base = (process.env.BASE_PATH ?? '') as '' | `/${string}`;

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter({
				// GitHub Pages serves 404.html for unknown URLs
				fallback: '404.html'
			}),
			paths: { base }
		})
	]
});
