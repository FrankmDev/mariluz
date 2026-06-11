// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://luzaria.es',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES'
        }
      },
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
      filter(page) {
        const excluded = ['/gracias'];
        return !excluded.some(path => page.includes(path));
      },
      serialize(item) {
        if (item.url === 'https://luzaria.es/' || item.url === 'https://luzaria.es') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
          return item;
        }

        if (
          item.url.includes('/legal/') ||
          item.url.includes('/privacidad/') ||
          item.url.includes('/cookies/')
        ) {
          item.priority = 0.3;
          item.changefreq = 'yearly';
          return item;
        }

        return item;
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
