import type React from "react"
import type { Metadata } from "next"
import { Noto_Kufi_Arabic, Noto_Naskh_Arabic } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const notoKufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-kufi",
})

const notoNaskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-naskh",
})

export const metadata: Metadata = {
  title: "مكتب المستشار محمد القاضي | استشارات قانونية واقتصادية متخصصة",
  description: "مكتب المستشار محمد القاضي متخصص في الاستشارات القانونية والاقتصادية للشركات والمؤسسات. خبرة 10+ سنوات في القانون والاستثمار والامتثال. احجز استشارتك اليوم.",
  keywords: [
    "استشارات قانونية",
    "مكتب محاماة",
    "استشارات اقتصادية",
    "المستشار القانوني",
    "محمد القاضي",
    "الاستثمار والقانون",
    "حماية قانونية",
    "استشارات عمل",
    "قانون الشركات",
    "استشارات ضريبية",
    "محاسبة قانونية",
    "تدقيق قانوني",
    "امتثال قانوني",
    "استشارات تجارية"
  ].join(", "),
  
  openGraph: {
    title: "مكتب المستشار محمد القاضي | استشارات قانونية واقتصادية متخصصة",
    description: "حلول قانونية واقتصادية متكاملة لحماية أعمالكم وتحقيق أعلى مستويات النجاح والامتثال. فريق متخصص بخبرة 10+ سنوات.",
    url: "https://mohamedalgadi.com",
    siteName: "مكتب المستشار محمد القاضي",
    images: [
      {
        url: "/hero2.jpeg",
        width: 1200,
        height: 630,
        alt: "مكتب المستشار محمد القاضي"
      }
    ],
    type: "website",
    locale: "ar_SA"
  },

  twitter: {
    card: "summary_large_image",
    title: "مكتب المستشار محمد القاضي | استشارات قانونية واقتصادية متخصصة",
    description: "استشارات قانونية واقتصادية متكاملة مع فريق متخصص بخبرة 10+ سنوات",
    images: ["/hero2.jpeg"]
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://mohamedalgadi.com",
  },

  icons: {
    icon: [
      {
        url: "/favicon.jpeg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon.jpeg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon.jpeg",
        type: "image/svg+xml",
      },
    ],
    apple: "/favicon.jpeg",
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },

  category: "Legal Services",
  authors: [
    {
      name: "محمد القاضي",
      url: "https://mohamedalgadi.com",
    }
  ],

  creator: "محمد القاضي",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "مكتب المستشار محمد القاضي",
              image: "https://mohamedalgadi.com/hero2.jpeg",
              description: "استشارات قانونية واقتصادية متكاملة للشركات والمؤسسات",
              url: "https://mohamedalgadi.com",
              telephone: "+201093998856",
              priceRange: "$$",
              areaServed: {
                "@type": "Country",
                name: "SA"
              },
              sameAs: [
                "https://www.facebook.com/share/1BdhjpSR1n/?mibextid=wwXIfr",
            
              ],
              founder: {
                "@type": "Person",
                name: "محمد القاضي"
              },
              foundingDate: "2014",
              knowsAbout: [
                "القانون التجاري",
                "استشارات ضريبية",
                "قانون الشركات",
                "قانون العمل",
                "استشارات استثمارية",
                "الامتثال القانوني"
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "500",
                bestRating: "5",
                worstRating: "1"
              }
            })
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "مكتب المستشار محمد القاضي",
              url: "https://mohamedalgadi.com",
              logo: "https://mohamedalgadi.com/logo.jpeg",
              description: "استشارات قانونية واقتصادية متخصصة",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                telephone: "+201093998856",
                email: "info@mohamedalgadi.com",
                areaServed: "SA",
                availableLanguage: ["ar", "en"]
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=100090355825726"
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "بني سويف",
                addressCountry: "ُEG"
              }
            })
          }}
        />
      </head>
      <body className={`${notoKufi.variable} ${notoNaskh.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
