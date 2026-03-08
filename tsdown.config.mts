import { defineConfig } from 'tsdown';

export default defineConfig({
  clean: true,
  deps: {
    alwaysBundle: ['emojibase-data', 'memoize', 'nano-memoize', 'vscode-get-config', 'vscode-insert-text'],
    neverBundle: ['vscode'],
    onlyAllowBundle: false,
  },
  entry: ['src/extension.ts'],
  format: 'cjs',
  minify: true,
  outDir: 'lib',
  platform: 'node',
  target: 'es2020',
});
