// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://glenncots.com',
  integrations: [
    sitemap({ filter: (page) => !page.includes('/keystatic') && !page.includes('/api/') }),
    react(),
    markdoc(),
    keystatic(),
  ],
  adapter: vercel(),
});
