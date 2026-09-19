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
  numberOfEmployees: 3,
  founder: '劉 亜烜（リュウ アケン）',
  capital: '15,000,000円',
  description:
    'SIAデジタルテクノロジー株式会社は、大阪を拠点にAI・ビッグデータ・IoTを活用し、日本の伝統を守りながら未来を創るデジタルソリューションを提供します。',
  slogan: '日本の伝統を守り、日本の未来を創る',
  address: {
    postalCode: '559-0015',
    addressRegion: '大阪府',
    addressLocality: '大阪市住之江区',
    streetAddress: '南加賀屋3-8-26 Y.S.ビル6B',
    addressCountry: 'JP',
  },
  addressDisplay: '〒559-0015 大阪府大阪市住之江区南加賀屋3-8-26 Y.S.ビル6B',
  openingHours: 'Mo-Fr 10:00-17:00',
  sameAs: [
    'https://x.com/SIADTJP0721',
    'https://www.facebook.com/profile.php?id=61585306392063',
    'https://www.instagram.com/siadt.jp/',
    'https://note.com/siadt',
  ],
  knowsAbout: [
    '人工知能',
    'AI',
    'DX',
    'IoT',
    'エッジコンピューティング',
    '中小企業のデジタル化',
    '小売店舗向けAI',
    '自動車ディーラー向けAI分析',
    'AI経理',
    'AI採用',
    '生成AI',
    '高齢者見守り',
    '見守り支援システム',
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
];

/** 一覧にまだ載せていない特許出願がほかにもある */
export const additionalPatentApplicationsPending = false;

export function patentHref(patent: Patent) {
  return `/企業情報/#patent-${patent.slug}`;
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
    description: 'SIAデジタルテクノロジー株式会社が提供する、プロンプトから画像・動画・文章を生成できるAIクリエイティブツール。',
    applicationCategory: 'MultimediaApplication',
  },
  {
    id: `${siteUrl}/sia-talenteye/#product`,
    name: 'SIA TalentEye',
    url: `${siteUrl}/sia-talenteye/`,
    appUrl: 'https://talenteye.siadt.jp/',
    image: `${siteUrl}/images/sia-talenteye-hero.png`,
    description: 'SIAデジタルテクノロジー株式会社が提供する、PDF・Word履歴書をAIで解析し候補者比較を支援する採用ツール。',
    applicationCategory: 'BusinessApplication',
  },
  {
    id: `${siteUrl}/sia-choba/#product`,
    name: 'SIA帳場',
    url: `${siteUrl}/sia-choba/`,
    appUrl: 'https://choba.siadt.jp/',
    image: `${siteUrl}/images/sia-choba-hero.png`,
    description: 'SIAデジタルテクノロジー株式会社が提供する、領収書・請求書から仕訳と帳簿を自動生成する中小企業向けAI経理プラットフォーム。',
    applicationCategory: 'FinanceApplication',
  },
  {
    id: `${siteUrl}/人工知能アシスタント/#product`,
    name: 'SIA AI Assist',
    url: `${siteUrl}/人工知能アシスタント/`,
    appUrl: 'https://assist.siadt.jp/',
    image: `${siteUrl}/images/sia-ai-assist-hero.png`,
    description: 'SIAデジタルテクノロジー株式会社が提供する、社内検索・数値分析・文書作成などを一つの画面から進める社内AIワークスペース。',
    applicationCategory: 'BusinessApplication',
  },
  {
    id: `${siteUrl}/ハードウェア製品/#product`,
    name: 'AIエッジ計算製品',
    url: `${siteUrl}/ハードウェア製品/`,
    image: `${siteUrl}/images/edge1.webp`,
    description: 'SIAデジタルテクノロジー株式会社が提供する、現場で映像を解析するAIエッジサーバー。',
  },
  {
    id: 'https://engawa-app.jp/#product',
    name: '緣側（えんがわ）',
    url: 'https://engawa-app.jp/',
    description: 'SIAデジタルテクノロジー株式会社が提供する、高齢者向けAI会話・見守りサービス。関連技術は特許第7917241号として登録されています。',
  },
  {
    id: 'https://livein-japan.com/#product',
    name: '日本通（LIVE IN JAPAN）',
    url: 'https://livein-japan.com',
    description: 'SIAデジタルテクノロジー株式会社が提供する、在日外国人向け多言語生活支援サービス。',
  },
];

export function patentSchema() {
  const org = { '@id': `${siteUrl}/#organization` };
  return patents.map((p) => ({
    '@type': 'Patent',
    '@id': patentId(p),
    name: p.name,
    ...(p.status === 'registered' ? { patentNumber: p.patentNumber, datePublished: p.registrationDate } : {}),
    identifier: [p.status === 'registered' ? p.patentNumber : undefined, p.applicationNumber].filter(Boolean),
    filingDate: p.filingDate,
    inventor: p.inventor ? { '@type': 'Person', name: p.inventor } : undefined,
    copyrightHolder: org,
    sourceOrganization: org,
    url: patentId(p),
    description:
      p.status === 'registered'
        ? `${organization.name}が保有する日本国特許。発明の名称は「${p.name}」。${p.registrationDateDisplay}設定登録。ほかにも特許出願中。`
        : `${organization.name}が出願中の発明。発明の名称は「${p.name}」（${patentStatusLabel.pending}）。`,
  }));
}

type Faq = { q: string; a: string };

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
      ...('appUrl' in product && product.appUrl ? { sameAs: product.appUrl } : {}),
      ...('applicationCategory' in product && product.applicationCategory
        ? {
            applicationCategory: product.applicationCategory,
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'JPY',
              url: 'appUrl' in product && product.appUrl ? product.appUrl : product.url,
              availability: 'https://schema.org/InStock',
            },
          }
        : {}),
    },
  ];
  if (faqs.length) {
    nodes.push({
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }
  return nodes;
}
