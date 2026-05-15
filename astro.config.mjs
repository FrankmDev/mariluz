// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.luzaria.es',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES'
        }
      },
      // Exclude legal pages from sitemap
      filter(page) {
        const excluded = ['/cookies', '/privacidad', '/legal'];
        return !excluded.some(path => page.includes(path));
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});