import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import path from 'path'

const config: UserConfig = {
	plugins: [sveltekit()],
	resolve: {
        alias: {
          '$': path.resolve('src') // Styles in src/styles will be accessible as '@/styles/whatever.scss'
        }
    },
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
