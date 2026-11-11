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
        !['/thanks/', '/recruit/test/', '/404/'].some((path) => page.includes(path)),
      changefreq: 'monthly',
      priority: 0.7,
      serialize(item) {
        const decoded = decodeURIComponent(item.url);
        item.lastmod = new Date();
        if (decoded === 'https://siadt.jp/') {
          item.changefreq = 'weekly';
          item.priority = 1.0;
        } else if (
          [
            '/sia-choba/',
            '/sia-talenteye/',
            '/sia-studio/',
            '/人工知能アシスタント/',
            '/ハードウェア製品/',
            '/中小企業向けIT基盤サービス/',
            '/shop/',
            '/car/',
            '/企業情報/',
            '/知的財産/',
          ].some((p) => decoded.endsWith(p))
        ) {
          item.changefreq = 'weekly';
          item.priority = 0.9;
        } else if (
          [
            '/製品情報/',
            '/ソリューション紹介/',
            '/AI-DX白書/',
            '/サイバー攻撃と人材組織技術基盤の再構築/',
            '/リテールモビリティDX推進ガイド/',
            '/企業金融技術服務/',
            '/私たちについて/',
            '/連絡先/',
            '/inquiries/',
          ].some((p) => decoded.endsWith(p))
        ) {
          item.changefreq = 'monthly';
          item.priority = 0.8;
        } else if (
          [
            '/プライバシーポリシー/',
            '/利用規約（草案）/',
            '/特定商取引法に基づく表記/',
            '/暴力団等反社会勢力排除宣言/',
            '/サービス契約書/',
          ].some((p) => decoded.endsWith(p))
        ) {
          item.changefreq = 'yearly';
          item.priority = 0.5;
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
