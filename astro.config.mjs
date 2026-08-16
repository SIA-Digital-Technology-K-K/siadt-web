import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://siadt.jp',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) =>
        !['/thanks/', '/recruit/test/'].some((path) => page.includes(path)),
      changefreq: 'monthly',
      priority: 0.7,
      serialize(item) {
        item.lastmod = new Date();
        if (item.url === 'https://siadt.jp/') {
          item.changefreq = 'weekly';
          item.priority = 1.0;
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
