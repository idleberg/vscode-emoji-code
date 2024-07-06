import { defineConfig } from 'tsup';

export default defineConfig({
	bundle: true,
	clean: true,
	entry: ['src/extension.ts'],
	external: ['vscode'],
	format: 'cjs',
	minify: true,
  noExternal: ['emojibase-data', 'memoize', 'nano-memoize', 'vscode-insert-text'],
	target: 'es2020',
	outDir: 'lib',
	treeshake: true,
	cjsInterop: true,
	platform: 'node',
});
