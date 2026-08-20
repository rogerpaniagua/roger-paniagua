import type { Metadata } from "next"
import "./globals.css"
import CustomCursor from "./CustomCursor"

export const metadata: Metadata = {
  title: "Roger Paniagua — Brand & Creative Strategy Lead",
  description: "Strategy, creative systems, and AI-driven development. Working with brands across LATAM and the U.S. from El Salvador.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Roger Paniagua — Brand & Creative Strategy Lead",
    description: "Strategy, creative systems, and AI-driven development. Working with brands across LATAM and the U.S. from El Salvador.",
    url: "https://www.rogerpaniagua.com",
    siteName: "Roger Paniagua",
    images: [
      {
        url: "https://www.rogerpaniagua.com/roger-og.png",
        width: 1200,
        height: 630,
        alt: "Roger Paniagua — Brand & Creative Strategy Lead",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roger Paniagua — Brand & Creative Strategy Lead",
    description: "Strategy, creative systems, and AI-driven development. Working with brands across LATAM and the U.S. from El Salvador.",
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
  jobTitle: "Brand & Creative Strategy Lead",
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
  description: "Strategy, creative systems, and AI-driven development. Working with brands across LATAM and the U.S. from El Salvador.",
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
