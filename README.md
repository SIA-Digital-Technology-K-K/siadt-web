# siadt-web

ＳＩＡデジタルテクノロジー株式会社 コーポレートサイト（https://siadt.jp）
WordPress からの静的サイト移行版（Astro + Tailwind CSS + Netlify）。

## 技術スタック

- **Astro 5**（静的出力・SSR 不使用）+ **Tailwind CSS 4**
- **Netlify**（ホスティング / Netlify Forms / `_redirects` による 301）
- **Stripe Payment Links**（オンラインストア決済。カート機能なし）
- GA4: `G-LQX050E2ZN`（現行サイトから移植）

## 開発コマンド

```bash
npm install        # 依存関係のインストール
npm run dev        # 開発サーバー (localhost:4321)
npm run build      # 本番ビルド → dist/
npm run preview    # ビルド結果のプレビュー
npm run images     # _mirror/media の画像を WebP 変換して public/images へ
```

## ディレクトリ構成

- `src/layouts/Base.astro` — 共通レイアウト（ヘッダー / フッター / OGP / GA4）
- `src/pages/` — 各ページ。**日本語ファイル名 = 旧 WordPress の URL パスをそのまま維持**
- `src/data/products.json` — オンラインストア商品データ。`stripePaymentLink` が
  `STRIPE_LINK_TODO` のままの商品は「購入する（準備中）」表示になり、
  実際の Payment Link URL に差し替えるだけで購入ボタンが有効化される
- `public/_redirects` — 旧 URL の 301 定義（Netlify 標準機能）
- `public/images|videos|files` — WebP 変換済み画像 / 動画 / PDF（旧ファイル名を保持）
- `_mirror/` — 現行サイトのミラー・WXR 抽出データ（移行作業用。デプロイ対象外）

## フォーム（Netlify Forms）

| form name | ページ | 旧 WPForms |
|---|---|---|
| `contact` | `/inquiries/` | #501 お問い合わせ |
| `contact-zh` | `/bankhelp/` | #556 華人服務聯繫我們 |
| `enterprise-order` | `/order/` | #730 企業服務訂單確認 |

- 全フォーム honeypot（`data-netlify-honeypot="bot-field"`）設定済み
- 送信成功後は `/thanks/` に遷移
- 通知先メールは Netlify 管理画面 → Forms → Notifications で設定（発注者タスク）

## デプロイ運用ルール（Netlify Personal プラン）

- Netlify は Personal プラン（$9/月・1,000 クレジット、engawa-app.jp と共有）。本番デプロイ 1 回 = 15 クレジット
- Production branch: `main` / Build command: `npm run build` / Publish directory: `dist`
- 動作確認は Deploy Preview（PR プレビュー。クレジット消費なし）で行う
- 修正はなるべく PR に溜めてまとめてマージする（1 修正 1 デプロイの乱発は避ける）
- **リリース時期の制約なし**: 検収完了次第、本番デプロイ → DNS 切替を実施してよい
  （旧サーバーは日割りでコストが発生し続けるため、早いほど良い）
- DNS 切替時、**MX / SPF / DKIM / DMARC レコードは絶対に変更しない**

## 発注者タスク（残作業）

1. ~~Stripe Payment Link 作成・設定~~ → 全 2 商品設定済み。Stripe 側で決済完了後の
   リダイレクト先を `https://siadt.jp/thanks/` に指定すること
2. Netlify に GitHub リポジトリ `SIA-Digital-Technology-K-K/siadt-web` を連携
   （Forms の「Enable form detection」を ON にすること）
3. Netlify Forms の通知先メールアドレス設定（3 フォーム分）
4. 検収後の DNS 切替と旧レンタルサーバー解約（解約前に WP 完全バックアップ取得）
