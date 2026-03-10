import type { Metadata } from "next"
import "./globals.css"
import CustomCursor from "./CustomCursor"

export const metadata: Metadata = {
  title: "Roger Paniagua — Creative & Communication Leader",
  description: "Building the creative systems that move brands forward.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Roger Paniagua — Creative & Communication Leader",
    description: "Building the creative systems that move brands forward.",
    url: "https://www.rogerpaniagua.com",
    siteName: "Roger Paniagua",
    images: [
      {
        url: "https://www.rogerpaniagua.com/og.png",
        width: 1200,
        height: 630,
        alt: "Roger Paniagua — Creative & Communication Leader",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roger Paniagua — Creative & Communication Leader",
    description: "Building the creative systems that move brands forward.",
    images: ["https://www.rogerpaniagua.com/og.png"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Roger Paniagua",
  url: "https://www.rogerpaniagua.com",
  jobTitle: "Creative & Communication Leader",
  worksFor: {
    "@type": "Organization",
    name: "Elaniin",
    url: "https://elaniin.com",
  },
  description: "Building the creative systems that move brands forward.",
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
