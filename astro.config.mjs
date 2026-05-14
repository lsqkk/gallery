import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lsqkk.github.io',
  base: '/',
  outDir: 'dist',
  build: {
    assets: 'assets',
  },
});
