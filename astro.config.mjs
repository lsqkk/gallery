import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lsqkk.github.io',
  base: '/gallery',
  outDir: 'dist',
  build: {
    assets: '_assets',
  },
});
