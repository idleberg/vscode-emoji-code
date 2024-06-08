import { defineConfig } from 'tsup';

export default defineConfig({
	clean: true,
	entry: ['src/extension.ts'],
	external: ['vscode'],
	format: 'cjs',
	minify: true,
	target: 'es2020',
	outDir: 'lib',
});
