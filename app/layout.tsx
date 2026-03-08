import type { Metadata } from 'next'
import './globals.css'
import CustomCursor from './CustomCursor'

export const metadata: Metadata = {
  title: 'Roger Paniagua — Creative & Communication Leader',
  description: 'Creative & communication leader with 10+ years building and scaling high-performance teams. Based in El Salvador.',
  openGraph: {
    title: 'Roger Paniagua — Creative & Communication Leader',
    description: 'Creative & communication leader with 10+ years building and scaling high-performance teams.',
    url: 'https://rogerpaniagua.com',
    siteName: 'Roger Paniagua',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
