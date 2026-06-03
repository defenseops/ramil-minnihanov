import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const SITE_URL = "https://minnihanov.kz"; // TODO: заменить на реальный домен

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Рамиль Минниханов — Финансовый консультант для бизнеса в Казахстане",
    template: "%s | Рамиль Минниханов",
  },
  description:
    "Финансовый консультант для малого и среднего бизнеса в Казахстане. Внедрю систему управленческого учёта (ОПиУ, ДДС, Баланс, Дашборды) за 7 дней. Аудит финансовой отчётности, сопровождение с CFO на аутсорсе. Алматы и дистанционно.",

  keywords: [
    "финансовый консультант Казахстан",
    "финансовый консультант Алматы",
    "управленческий учёт малый бизнес",
    "внедрение финансового учёта",
    "ОПиУ ДДС баланс",
    "финансовый директор на аутсорсе",
    "CFO аутсорсинг Казахстан",
    "аудит финансовой отчётности",
    "финансовая система для бизнеса",
    "Рамиль Минниханов",
    "антикризисное управление финансами",
    "финансовый учёт для ИП",
    "управленческая отчётность",
    "кассовый разрыв как избежать",
    "финансовый консультант для магазина",
  ],

  authors: [{ name: "Рамиль Минниханов", url: SITE_URL }],
  creator: "Рамиль Минниханов",
  publisher: "Рамиль Минниханов",

  alternates: {
    canonical: SITE_URL,
    languages: { "ru-KZ": SITE_URL },
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    locale: "ru_KZ",
    siteName: "Рамиль Минниханов — Финансовый консультант",
    title: "Рамиль Минниханов — Финансовый консультант для бизнеса в Казахстане",
    description:
      "Внедрю понятную систему контроля прибыли, расходов и движения денег за 7 дней. Работаю с малым и средним бизнесом Казахстана.",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Рамиль Минниханов — финансовый консультант, Алматы, Казахстан",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Рамиль Минниханов — Финансовый консультант",
    description:
      "Финансовая система для малого и среднего бизнеса за 7 дней. Аудит, внедрение учёта, CFO на аутсорсе. Казахстан.",
    images: ["/images/og-cover.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    // google: "ВСТАВЬ_VERIFICATION_TOKEN",
    // yandex: "ВСТАВЬ_VERIFICATION_TOKEN",
  },

  category: "finance",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Рамиль Минниханов",
      jobTitle: "Финансовый консультант",
      description:
        "Финансовый консультант для малого и среднего бизнеса. Помогаю собственникам навести порядок в деньгах и выстроить систему управленческого учёта.",
      url: SITE_URL,
      image: `${SITE_URL}/images/ramil-1.jpg`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Алматы",
        addressCountry: "KZ",
      },
      knowsAbout: [
        "Управленческий учёт",
        "Финансовое планирование",
        "Бюджетирование",
        "ОПиУ",
        "ДДС",
        "Управленческий баланс",
        "Финансовый анализ",
        "CFO на аутсорсе",
      ],
      sameAs: [
        // "https://instagram.com/ТВОЙ_АККАУНТ",
        // "https://wa.me/ТВОЙ_НОМЕР",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: "Рамиль Минниханов — финансовый консультант",
      description:
        "Внедрение системы управленческого учёта, аудит финансовой отчётности, сопровождение с финансовым директором на аутсорсе для малого и среднего бизнеса в Казахстане.",
      url: SITE_URL,
      telephone: "", // TODO: добавить номер
      address: {
        "@type": "PostalAddress",
        addressLocality: "Алматы",
        addressRegion: "Алматинская область",
        addressCountry: "KZ",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "43.2220",
        longitude: "76.8512",
      },
      areaServed: {
        "@type": "Country",
        name: "Казахстан",
      },
      priceRange: "₸₸",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Услуги финансового консультанта",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Аудит финансовой отчётности",
              description:
                "Детальный разбор и проверка отчётов, исходных данных и документации с обратной связью.",
            },
            price: "50000",
            priceCurrency: "KZT",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Внедрение системы управленческого и финансового учёта",
              description:
                "ОПиУ, ДДС, Баланс, Дашборды с последующим обучением. Полный цикл за 7–10 дней.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: "250000",
              maxPrice: "400000",
              priceCurrency: "KZT",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Сопровождение системы с финансовым директором",
              description:
                "Внесение данных, настройка автоматизации, отчёты и стратегические сессии.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: "50000",
              maxPrice: "300000",
              priceCurrency: "KZT",
              unitText: "MONTH",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Рамиль Минниханов — финансовый консультант",
      inLanguage: "ru-KZ",
      author: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Сколько времени занимает внедрение финансовой системы?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Базовое внедрение системы управленческого учёта (ОПиУ, ДДС, Баланс) занимает 7–10 рабочих дней с момента первой встречи.",
          },
        },
        {
          "@type": "Question",
          name: "Для каких видов бизнеса вы работаете?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Работаю с офлайн и онлайн магазинами, производственными предприятиями, сервисными компаниями, медицинскими и учебными центрами, компаниями с филиальной сетью и Kaspi-магазинами.",
          },
        },
        {
          "@type": "Question",
          name: "Работаете ли вы дистанционно?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да, работаю дистанционно по всему Казахстану, а также лично в Алматы.",
          },
        },
        {
          "@type": "Question",
          name: "Что такое ОПиУ, ДДС и управленческий баланс?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ОПиУ (Отчёт о прибылях и убытках) показывает реальную прибыль бизнеса. ДДС (Движение денежных средств) контролирует кассовый поток. Управленческий баланс отражает активы и обязательства. Вместе они дают полную картину финансового состояния бизнеса.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,500;12..96,600;12..96,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ background: "var(--bg)", color: "var(--ink)" }}>
        {children}
      </body>
    </html>
  );
}
