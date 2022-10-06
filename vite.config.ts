import react from '@vitejs/plugin-react';
import path from 'path';
import postcssCustomMedia from 'postcss-custom-media';
import postcssNested from 'postcss-nested';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
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
});
