import type { Metadata } from "next"
import "./globals.css"
import CustomCursor from "./CustomCursor"

export const metadata: Metadata = {
  title: "Roger Paniagua — Head of Creative",
  description: "Head of Creative based in El Salvador, working with brands across LATAM and the U.S. 10+ years building creative systems, teams, and campaigns that move organizations forward.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Roger Paniagua — Head of Creative",
    description: "Head of Creative based in El Salvador, working with brands across LATAM and the U.S. 10+ years building creative systems, teams, and campaigns that move organizations forward.",
    url: "https://www.rogerpaniagua.com",
    siteName: "Roger Paniagua",
    images: [
      {
        url: "https://www.rogerpaniagua.com/roger-og.png",
        width: 1200,
        height: 630,
        alt: "Roger Paniagua — Head of Creative",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roger Paniagua — Head of Creative",
    description: "Head of Creative based in El Salvador, working with brands across LATAM and the U.S. 10+ years building creative systems, teams, and campaigns that move organizations forward.",
    images: ["https://www.rogerpaniagua.com/roger-og.png"],
  },
  alternates: {
    canonical: 'https://rogerpaniagua.com',
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Roger Paniagua",
  url: "https://www.rogerpaniagua.com",
  jobTitle: "Head of Creative",
  worksFor: {
    "@type": "Organization",
    name: "Elaniin",
    url: "https://elaniin.com",
  },
  areaServed: [
    { "@type": "Country", "name": "El Salvador" },
    { "@type": "Country", "name": "United States" },
    { "@type": "Place", "name": "Latin America" },
  ],
  description: "Head of Creative based in El Salvador, working with brands across LATAM and the U.S. 10+ years building creative systems, teams, and campaigns that move organizations forward.",
  sameAs: [
    "https://www.linkedin.com/in/roger-paniagua/",
    "https://www.instagram.com/rogerpaniagua_/",
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
