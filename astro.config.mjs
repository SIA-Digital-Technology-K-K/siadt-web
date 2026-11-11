import { execFileSync } from 'node:child_process';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE = 'https://siadt.jp';

// macOS (APFS) の NFD / Linux (Git) の NFC 差異を吸収するため、src/pages を走査してマップ化
const pageFileMap = new Map();
function scanPages(dir, prefix = '') {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      scanPages(full, `${prefix}${entry.name}/`);
    } else if (entry.name.endsWith('.astro')) {
      const rawSlug = `${prefix}${entry.name.slice(0, -6)}`;
      const routePath =
        rawSlug === 'index'
          ? '/'
          : rawSlug.endsWith('/index')
            ? `/${rawSlug.slice(0, -6)}/`
            : `/${rawSlug}/`;
      pageFileMap.set(routePath.normalize('NFC'), full);
    }
  }
}
scanPages('src/pages');

function getGitLastmod(pathnameNfc) {
  const file = pageFileMap.get(pathnameNfc);
  if (file) {
    try {
      // NFC / NFD 両方のパスで git log を試行
      for (const candidate of [file.normalize('NFC'), file.normalize('NFD')]) {
        const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', candidate], {
          encoding: 'utf8',
        }).trim();
        if (out) return out;
      }
    } catch {
      // ignore fallback
    }
  }
  return new Date().toISOString();
}

const pageMedia = {
  '/': {
    img: [
      {
        url: `${SITE}/images/hero-robot-girl.webp`,
        title: 'SIAデジタルテクノロジー株式会社｜中小企業向け自社開発AIプロダクト＆DX支援',
      },
    ],
  },
  '/私たちについて/': {
    img: [
      {
        url: `${SITE}/images/representative-liu-yaxuan.webp`,
        title: 'SIAデジタルテクノロジー株式会社 代表取締役 劉 亜烜',
      },
    ],
    video: [
      {
        thumbnail_loc: `${SITE}/images/u9455418563_Please_create_an_artificial_intelligence_product__271f944f-3f58-4d91-8ec4-59cf7cd11e18_0-e1727503718218.webp`,
        title: 'SIAデジタルテクノロジー株式会社 会社紹介ムービー',
        description:
          'AI・ビッグデータ・IoTを活用し、日本の中小企業と社会の課題を解決するSIAデジタルテクノロジー株式会社の紹介動画。',
        content_loc: `${SITE}/videos/sia-company-intro.mp4`,
        duration: 30,
        publication_date: '2026-01-10T00:00:00+09:00',
        family_friendly: 'yes',
      },
    ],
  },
  '/sia-choba/': {
    img: [
      {
        url: `${SITE}/images/sia-choba-hero.png`,
        title: 'SIA 帳場｜中小企業向けAI経理プラットフォーム（IT導入補助金対応）',
      },
      {
        url: `${SITE}/images/sia-choba-infographic.png`,
        title: 'SIA 帳場のAI自動仕訳・証憑管理ワークフロー',
      },
    ],
  },
  '/sia-talenteye/': {
    img: [
      {
        url: `${SITE}/images/sia-talenteye-hero.png`,
        title: 'SIA TalentEye｜日本語採用AI履歴書解析・候補者比較システム',
      },
      {
        url: `${SITE}/images/sia-talenteye-ranking.png`,
        title: 'SIA TalentEye 候補者スコアリング・比較画面',
      },
    ],
  },
  '/sia-studio/': {
    img: [
      {
        url: `${SITE}/images/sia-studio-hero.png`,
        title: 'SIA Studio｜法人向け生成AIクリエイティブ制作プラットフォーム',
      },
    ],
  },
  '/人工知能アシスタント/': {
    img: [
      {
        url: `${SITE}/images/sia-ai-assist-hero.png`,
        title: 'SIA AI Assist｜複数生成AI協調による社内AIワークスペース',
      },
    ],
  },
  '/ハードウェア製品/': {
    img: [
      {
        url: `${SITE}/images/edge1.webp`,
        title: 'SIA AIエッジ計算サーバー製品ラインナップ',
      },
    ],
  },
  '/shop/': {
    img: [
      {
        url: `${SITE}/images/shop6.webp`,
        title: '小売店舗向けAI万引き防止・客流分析システム',
      },
    ],
    video: [
      {
        thumbnail_loc: `${SITE}/images/shop6.webp`,
        title: '小売店舗向けAI万引き防止システム デモ映像',
        description:
          '既存の防犯カメラ映像をAIがリアルタイム解析し、不審行動や万引きの兆候を検知してスタッフへ即時通知するソリューション。',
        content_loc: `${SITE}/videos/20260110_1959_01kekrwbhrewsvma88beh1t22f.mp4`,
        duration: 15,
        publication_date: '2026-01-10T00:00:00+09:00',
        family_friendly: 'yes',
      },
      {
        thumbnail_loc: `${SITE}/images/shop6.webp`,
        title: '小売店舗向けAI客流分析システム デモ映像',
        description:
          '店舗カメラ映像から来店客の動線・属性・滞在時間を匿名解析し、売場改善や販促立案を支援するAI客流分析システム。',
        content_loc: `${SITE}/videos/20260110_2000_01kekryq70fhxak42ycbhstd5m.mp4`,
        duration: 15,
        publication_date: '2026-01-10T00:00:00+09:00',
        family_friendly: 'yes',
      },
    ],
  },
  '/car/': {
    img: [
      {
        url: `${SITE}/images/car.webp`,
        title: '自動車販売店・ディーラー向けAIスマートショールーム分析システム',
      },
    ],
    video: [
      {
        thumbnail_loc: `${SITE}/images/car.webp`,
        title: '自動車ディーラー店舗向けAI分析システム デモ映像',
        description:
          '自動車販売店の既設カメラと小型AIエッジサーバーで来客動線・ヒートマップ・注目車種ランキングを可視化するスマートショールーム。',
        content_loc: `${SITE}/videos/20260110_2016_01kekswhw1e20rrzgmg43hdsvn.mp4`,
        duration: 15,
        publication_date: '2026-01-10T00:00:00+09:00',
        family_friendly: 'yes',
      },
    ],
  },
  '/AI-DX白書/': {
    img: [
      {
        url: `${SITE}/images/888.webp`,
        title: '中小企業のためのAI×DX推進ホワイトペーパー',
      },
    ],
  },
  '/サイバー攻撃と人材組織技術基盤の再構築/': {
    img: [
      {
        url: `${SITE}/images/cyber-hr-rebuild.jpg`,
        title: 'サイバー攻撃対策と人材・組織・技術基盤の再構築コラム',
      },
    ],
  },
};

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) =>
        !['/thanks/', '/recruit/test/', '/404/'].some((path) => page.includes(path)),
      namespaces: {
        news: false,
        xhtml: false,
        image: true,
        video: true,
      },
      changefreq: 'monthly',
      priority: 0.7,
      serialize(item) {
        const pathname = decodeURIComponent(new URL(item.url).pathname).normalize('NFC');
        item.lastmod = getGitLastmod(pathname);

        const media = pageMedia[pathname];
        if (media?.img) item.img = media.img;
        if (media?.video) item.video = media.video;

        if (pathname === '/') {
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
            '/私たちについて/',
            '/知的財産/',
          ].includes(pathname)
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
            '/企業理念・行動指針/',
            '/連絡先/',
            '/inquiries/',
          ].includes(pathname)
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
          ].includes(pathname)
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
