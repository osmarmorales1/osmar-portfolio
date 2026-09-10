import { build } from 'vite';
import { readFile, writeFile, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
const root = resolve(import.meta.dirname, '..');
await build({ root, build: { outDir: 'dist', emptyOutDir: true } });
await build({ root, publicDir: false, build: {
  ssr: resolve(root, 'app/prerender.tsx'), outDir: '.ssr', emptyOutDir: true,
  rollupOptions: { output: { entryFileNames: 'render.mjs' } },
} });
const { render } = await import(new URL('../.ssr/render.mjs', import.meta.url));
const template = await readFile(resolve(root, 'dist/index.html'), 'utf8');
const output = template.replace('<div id="root"></div>', '<div id="root">' + render() + '</div>');
for (const expected of ['500+', 'Try cloud agent', 'id="lab"', 'id="elygent"']) {
  if (!output.includes(expected)) throw new Error('Incomplete static render: ' + expected);
}
await writeFile(resolve(root, 'dist/index.html'), output);
await rm(resolve(root, '.ssr'), { recursive: true, force: true });
console.log('Built static HTML, interactive React, local assets and public profile data in dist/.');
