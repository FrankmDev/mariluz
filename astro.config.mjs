// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://asesoraenergetica.es',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES'
        }
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});