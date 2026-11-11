export const siteUrl = 'https://siadt.jp';

export const organization = {
  name: 'SIAデジタルテクノロジー株式会社',
  alternateName: [
    'SIA Digital Technology Co., Ltd.',
    'SIA Digital Technology K.K.',
    'SIA Digital Technology',
    'ＳＩＡデジタルテクノロジー株式会社',
    'SIADT',
  ],
  legalName: 'SIAデジタルテクノロジー株式会社',
  englishName: 'SIA Digital Technology Co., Ltd.',
  url: siteUrl,
  logo: `${siteUrl}/images/siadt-logo-mark.webp`,
  email: 'service@siadt.jp',
  telephone: '+81-6-4400-2968',
  telephoneDisplay: '06-4400-2968',
  foundingDate: '2022-07',
  taxID: '3120001247658',
  iso6523Code: '0188:3120001247658',
  numberOfEmployees: 3,
  founder: '劉 亜烜',
  capital: '15,000,000円',
  capitalNumber: 15000000,
  description:
    'SIAデジタルテクノロジー株式会社（大阪市住之江区・法人番号3120001247658）は、AI経理「SIA帳場」、AI採用「SIA TalentEye」、生成AI制作「SIA Studio」、社内AI「SIA AI Assist」、店舗・工場向けエッジAIを開発・提供するテクノロジー企業です。特許第7917241号保有、IT導入支援事業者採択済み（ITP07-0006526）、IPA SECURITY ACTION二つ星宣言済み。',
  slogan: '日本の伝統を守り、日本の未来を創る',
  address: {
    postalCode: '559-0015',
    addressRegion: '大阪府',
    addressLocality: '大阪市住之江区',
    streetAddress: '南加賀屋3-8-26 Y.S.ビル6B',
    addressCountry: 'JP',
  },
  geo: {
    latitude: 34.6092,
    longitude: 135.4728,
  },
  hasMap: 'https://maps.app.goo.gl/y5sWWEem8hMMLE8r5',
  addressDisplay: '〒559-0015 大阪府大阪市住之江区南加賀屋3-8-26 Y.S.ビル6B',
  openingHours: 'Mo-Fr 10:00-17:00',
  sameAs: [
    'https://x.com/SIADTJP0721',
    'https://www.facebook.com/profile.php?id=61585306392063',
    'https://www.instagram.com/siadt.jp/',
    'https://note.com/siadt',
  ],
  awards: [
    '中小企業デジタル化・AI導入支援事業費補助金 IT導入支援事業者採択（登録番号：ITP07-0006526、2026年10月19日）',
    'IPA 独立行政法人情報処理推進機構 SECURITY ACTION 二つ星宣言事業者',
    '日本国特許第7917241号 設定登録（見守り支援システム、見守り支援方法及びプログラム）',
  ],
  credentials: [
    {
      name: '中小企業デジタル化・AI導入支援事業費補助金 IT導入支援事業者',
      identifier: 'ITP07-0006526',
      dateCreated: '2026-10-19',
      recognizedBy: '中小企業デジタル化・AI導入支援事業費補助金事務局',
      url: `${siteUrl}/files/中小企業デジタル化AI導入支援_IT導入支援事業者採択通知書.pdf`,
    },
    {
      name: 'SECURITY ACTION（セキュリティ対策自己宣言）二つ星',
      recognizedBy: '独立行政法人情報処理推進機構（IPA）',
      url: `${siteUrl}/security-policy/`,
    },
  ],
  knowsAbout: [
    '人工知能（AI）システム開発',
    '中小企業DX・デジタル化支援',
    'AI経理・自動仕訳・帳簿生成',
    'AI採用支援・履歴書解析',
    '法人向け生成AIワークスペース・オンプレミスAI',
    'AIクリエイティブ生成（画像・動画・文章）',
    'エッジAIコンピューティング・映像解析',
    '小売店舗向けAI防犯・万引き検知・客流分析',
    '自動車ディーラー向けAI来店・行動分析',
    '高齢者見守り支援AI',
    'IT導入支援事業者・補助金活用支援',
    '情報セキュリティマネジメント',
  ],
};

export const patentStatusLabel = {
  registered: '登録',
  pending: '出願中',
} as const;

export type PatentStatus = keyof typeof patentStatusLabel;

type PatentBase = {
  slug: string;
  name: string;
  holder: string;
  inventor?: string;
  applicationNumber?: string;
  filingDate?: string;
  filingDateDisplay?: string;
  certificateUrl?: string;
  jplatpatUrl?: string;
};

export type Patent =
  | (PatentBase & {
      status: 'registered';
      patentNumber: string;
      registrationDate: string;
      registrationDateDisplay: string;
      expires?: string;
      expiresDisplay?: string;
    })
  | (PatentBase & {
      status: 'pending';
    });

/** 公開できる案件はここに追加する。出願中は status: 'pending'。 */
export const patents: Patent[] = [
  {
    slug: '7917241',
    status: 'registered',
    name: '見守り支援システム、見守り支援方法及びプログラム',
    patentNumber: '特許第7917241号',
    applicationNumber: '特願2026-100459',
    filingDate: '2026-06-16',
    filingDateDisplay: '2026年6月16日',
    registrationDate: '2026-08-31',
    registrationDateDisplay: '2026年8月31日',
    expires: '2046-06-16',
    expiresDisplay: '2046年6月16日',
    inventor: '劉 亜烜',
    holder: 'ＳＩＡデジタルテクノロジー株式会社',
    certificateUrl: '/files/patent-7917241.pdf',
    jplatpatUrl: 'https://www.j-platpat.inpit.go.jp/c1800/PU/JP-7917241/11/ja',
  },
  {
    slug: '2026-210114',
    status: 'pending',
    name: '複数の生成ＡＩを協調させる業務支援システム、方法、及びプログラム',
    applicationNumber: '特願2026-210114',
    filingDate: '2026-09-18',
    filingDateDisplay: '2026年9月18日',
    holder: 'ＳＩＡデジタルテクノロジー株式会社',
  },
  {
    slug: '2026-210115',
    status: 'pending',
    name: '日本語採用候補者評価システム、方法、及びプログラム',
    applicationNumber: '特願2026-210115',
    filingDate: '2026-09-18',
    filingDateDisplay: '2026年9月18日',
    holder: 'ＳＩＡデジタルテクノロジー株式会社',
  },
  {
    slug: '2026-215614',
    status: 'pending',
    name: '会計処理支援システム、会計処理支援方法及びプログラム',
    applicationNumber: '特願2026-215614',
    filingDate: '2026-09-29',
    filingDateDisplay: '2026年9月29日',
    holder: 'ＳＩＡデジタルテクノロジー株式会社',
  },
];

/** 一覧にまだ載せていない特許出願がほかにもある */
export const additionalPatentApplicationsPending = false;

export function patentHref(patent: Patent) {
  return `/知的財産/#patent-${patent.slug}`;
}

export function patentId(patent: Patent) {
  return `${siteUrl}${patentHref(patent)}`;
}

export const registeredPatents = patents.filter(
  (p): p is Extract<Patent, { status: 'registered' }> => p.status === 'registered',
);

export const pendingPatents = patents.filter(
  (p): p is Extract<Patent, { status: 'pending' }> => p.status === 'pending',
);

export const products = [
  {
    id: `${siteUrl}/sia-studio/#product`,
    name: 'SIA Studio',
    url: `${siteUrl}/sia-studio/`,
    appUrl: 'https://studio.siadt.jp/',
    image: `${siteUrl}/images/sia-studio-hero.png`,
    description:
      'SIAデジタルテクノロジー株式会社が提供する、プロンプトから画像・動画・文章を生成できるAIクリエイティブツール。目的を選ぶだけで文案・画像・短尺動画を一括生成。',
    applicationCategory: 'MultimediaApplication',
    featureList: ['AI画像生成', 'AI短尺動画生成', 'AI文章・コピー生成', '目的別ガイド一括生成'],
  },
  {
    id: `${siteUrl}/sia-talenteye/#product`,
    name: 'SIA TalentEye',
    url: `${siteUrl}/sia-talenteye/`,
    appUrl: 'https://talenteye.siadt.jp/',
    image: `${siteUrl}/images/sia-talenteye-hero.png`,
    description:
      'SIAデジタルテクノロジー株式会社が提供する、PDF・Word履歴書をAIで解析し候補者の経験・スキル整理と比較を支援する採用ツール（関連技術：特願2026-210115出願中）。',
    applicationCategory: 'BusinessApplication',
    featureList: ['PDF・Word履歴書の自動読取', '職歴・スキルの構造化整理', '候補者比較・評価観点の統一'],
  },
  {
    id: `${siteUrl}/sia-choba/#product`,
    name: 'SIA帳場',
    url: `${siteUrl}/sia-choba/`,
    appUrl: 'https://choba.siadt.jp/',
    image: `${siteUrl}/images/sia-choba-hero.png`,
    description:
      'SIAデジタルテクノロジー株式会社が提供する、領収書・請求書から仕訳と帳簿を自動生成する中小企業向けAI経理プラットフォーム（特願2026-215614出願中）。提供元は中小企業デジタル化・AI導入支援事業費補助金のIT導入支援事業者として採択済み（ITP07-0006526）。',
    applicationCategory: 'FinanceApplication',
    award: '中小企業デジタル化・AI導入支援事業費補助金 IT導入支援事業者採択（2026年10月19日）',
    featureList: ['領収書・請求書・銀行明細のAI読取', '仕訳・総勘定元帳・試算表の自動生成', '財務・税務AIアシスタント', '主要会計ソフトCSV連携'],
  },
  {
    id: `${siteUrl}/人工知能アシスタント/#product`,
    name: 'SIA AI Assist',
    url: `${siteUrl}/人工知能アシスタント/`,
    appUrl: 'https://assist.siadt.jp/',
    image: `${siteUrl}/images/sia-ai-assist-hero.png`,
    description:
      'SIAデジタルテクノロジー株式会社が提供する社内AIワークスペース（特願2026-210114出願中）。社内検索・数値分析・文書作成・議事整理を一画面に集約し、クラウド版・買い切りオンプレミス版・自社モデル差し替えに対応。',
    applicationCategory: 'BusinessApplication',
    featureList: ['社内資料検索・ナレッジ参照', '数値分析・報告資料・議事整理', 'クラウド版／オンプレミス版／自社モデル選択対応'],
  },
  {
    id: `${siteUrl}/ハードウェア製品/#product`,
    name: 'AIエッジ計算製品',
    url: `${siteUrl}/ハードウェア製品/`,
    image: `${siteUrl}/images/edge1.webp`,
    description:
      'SIAデジタルテクノロジー株式会社が提供する現場設置型AIエッジサーバー（Rockchip RK3588搭載ゲートウェイ等）。クラウドへ映像を送らず低遅延・高セキュリティで不良検出・動線分析・危険検知を実行。',
  },
  {
    id: 'https://engawa-app.jp/#product',
    name: '緣側（えんがわ）',
    url: 'https://engawa-app.jp/',
    description:
      'SIAデジタルテクノロジー株式会社が提供する、高齢者向けAI会話・見守りサービス。関連技術は特許第7917241号として日本国に登録されています。',
  },
  {
    id: 'https://livein-japan.com/#product',
    name: '日本通（Nihontsu）',
    url: 'https://livein-japan.com/',
    description:
      'SIAデジタルテクノロジー株式会社が提供する、交通運行・災害速報・行政案内などの公式情報を多言語で集約する在日外国人向け生活情報サービス。',
  },
];

export const services = [
  {
    id: `${siteUrl}/中小企業向けIT基盤サービス/#service`,
    name: '中小企業向けIT基盤・段階的DX支援サービス',
    serviceType: 'ITインフラ構築・Web制作・DXコンサルティング',
    url: `${siteUrl}/中小企業向けIT基盤サービス/`,
    description:
      '創業期・成長期の中小企業および伝統事業者向けに、企業公式サイト制作（税込49,000円〜）、ドメイン・法人メール整備、業務の段階的デジタル化、キャッシュレス決済・EC導入、システム開発を一貫支援。',
  },
  {
    id: `${siteUrl}/shop/#service`,
    name: '小売店舗向けAI防犯・客流分析システム',
    serviceType: '店舗向けエッジAI映像解析ソリューション',
    url: `${siteUrl}/shop/`,
    description:
      '既存の防犯カメラをそのまま活用し、万引き等の不審行動のリアルタイム検知・店員通知と、匿名化された来店客の属性・滞在時間・動線分析を提供。',
  },
  {
    id: `${siteUrl}/car/#service`,
    name: '自動車販売店・ディーラー向けAI来店分析システム',
    serviceType: 'スマートショールームAI映像解析ソリューション',
    url: `${siteUrl}/car/`,
    description:
      '既設カメラと小型AIエッジサーバー（最大6台接続）により、来客動線・注目車種ランキング・ヒートマップ・接客状況を可視化する自動車販売店向けソリューション。',
  },
  {
    id: `${siteUrl}/企業金融技術服務/#service`,
    name: '企業金融・キャッシュレス決済技術サービス',
    serviceType: 'FinTech・マルチ決済導入・法人IT基盤整備',
    url: `${siteUrl}/企業金融技術服務/`,
    description:
      '法人向けのオンライン決済・QRコード決済（PayPay・Alipay・WeChat Pay等）の技術連携および事業運営に必要なIT・Web基盤整備を支援。',
  },
  {
    id: `${siteUrl}/class/#service`,
    name: 'AI技術研修・リテラシー普及サービス',
    serviceType: '法人・教育機関向けAI研修・産学連携',
    url: `${siteUrl}/class/`,
    description:
      '企業の実務担当者や教育機関向けに、生成AI・データ活用の基礎から業務実装・情報セキュリティまでを体系的に学ぶ実践型AI研修を提供。',
  },
];

export function patentSchema() {
  const org = { '@id': `${siteUrl}/#organization` };
  return patents.map((p) => ({
    '@type': 'CreativeWork',
     additionalType: 'https://schema.org/Patent',
    '@id': patentId(p),
    name: p.name,
    ...(p.status === 'registered' ? { datePublished: p.registrationDate } : {}),
    identifier: [p.status === 'registered' ? p.patentNumber : undefined, p.applicationNumber].filter(Boolean),
    dateCreated: p.filingDate,
    creator: p.inventor ? { '@type': 'Person', name: p.inventor } : org,
    copyrightHolder: org,
    publisher: org,
    inLanguage: 'ja',
    url: patentId(p),
    ...(p.jplatpatUrl ? { sameAs: p.jplatpatUrl } : {}),
    description:
      p.status === 'registered'
        ? `${organization.name}が保有する日本国特許（${p.patentNumber}）。発明の名称は「${p.name}」。${p.registrationDateDisplay}設定登録。`
        : `${organization.name}が特許庁へ出願中の発明（${p.applicationNumber}）。発明の名称は「${p.name}」（${patentStatusLabel.pending}）。`,
  }));
}

type Faq = { q: string; a: string };

export function faqSchema(faqs: Faq[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function serviceSchema(opts: {
  service: (typeof services)[number];
  faqs?: Faq[];
}) {
  const { service, faqs = [] } = opts;
  const org = { '@id': `${siteUrl}/#organization` };
  const nodes: Record<string, unknown>[] = [
    {
      '@type': 'Service',
      '@id': service.id,
      name: service.name,
      serviceType: service.serviceType,
      description: service.description,
      url: service.url,
      provider: org,
      areaServed: { '@type': 'Country', name: 'Japan' },
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: `${siteUrl}/inquiries/`,
        servicePhone: organization.telephone,
        availableLanguage: ['ja', 'zh'],
      },
    },
  ];
  if (faqs.length) {
    nodes.push(faqSchema(faqs));
  }
  return nodes;
}

export function articleSchema(opts: {
  url: string;
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  keywords?: string[];
  faqs?: Faq[];
}) {
  const org = { '@id': `${siteUrl}/#organization` };
  const nodes: Record<string, unknown>[] = [
    {
      '@type': 'TechArticle',
      '@id': `${opts.url}#article`,
      mainEntityOfPage: opts.url,
      headline: opts.headline,
      description: opts.description,
      ...(opts.image ? { image: opts.image.startsWith('http') ? opts.image : `${siteUrl}${opts.image}` } : {}),
      datePublished: opts.datePublished,
      dateModified: opts.dateModified ?? opts.datePublished,
      inLanguage: 'ja',
      author: org,
      publisher: org,
      ...(opts.keywords?.length ? { keywords: opts.keywords.join(', ') } : {}),
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.prose-body h2', '.prose-body > p:first-of-type'],
      },
    },
  ];
  if (opts.faqs?.length) {
    nodes.push(faqSchema(opts.faqs));
  }
  return nodes;
}

export function productSchema(opts: {
  product: (typeof products)[number];
  faqs?: Faq[];
}) {
  const { product, faqs = [] } = opts;
  const org = { '@id': `${siteUrl}/#organization` };
  const nodes: Record<string, unknown>[] = [
    {
      '@type': 'applicationCategory' in product && product.applicationCategory ? ['Product', 'SoftwareApplication'] : 'Product',
      '@id': product.id,
      name: product.name,
      description: product.description,
      url: product.url,
      image: 'image' in product ? product.image : undefined,
      brand: org,
      manufacturer: org,
      provider: org,
      inLanguage: 'ja',
      ...('award' in product && product.award ? { award: product.award } : {}),
      ...('featureList' in product && product.featureList ? { featureList: product.featureList } : {}),
      ...('appUrl' in product && product.appUrl ? { sameAs: product.appUrl } : {}),
      ...('applicationCategory' in product && product.applicationCategory
        ? {
            applicationCategory: product.applicationCategory,
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'JPY',
              description: '無料トライアル利用可能（詳細は公式サイトまたはお問い合わせにてご案内）',
              url: 'appUrl' in product && product.appUrl ? product.appUrl : product.url,
              availability: 'https://schema.org/InStock',
              seller: org,
            },
          }
        : {}),
    },
  ];
  if (faqs.length) {
    nodes.push(faqSchema(faqs));
  }
  return nodes;
}
