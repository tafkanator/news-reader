import react from '@vitejs/plugin-react';
import path from 'path';
import postcssCustomMedia from 'postcss-custom-media';
import postcssNested from 'postcss-nested';
import { defineConfig, loadEnv } from 'vite';
import codegen from 'vite-plugin-graphql-codegen';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		base: env.BASE ?? '/',
		plugins: [react(), codegen({ runOnBuild: false })],
		resolve: {
			alias: {
				src: path.resolve(__dirname, './src'),
			},
		},
		css: {
			postcss: {
				plugins: [postcssCustomMedia(), postcssNested()],
			},
		},
	};
});
