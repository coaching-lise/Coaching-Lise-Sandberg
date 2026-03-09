import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Lise Sandberg Coaching | Professionel Coaching i Odense',
  description: 'Professionel coaching der skaber varig forandring. Livscoaching, karrierecoaching og personlig udvikling med Lise Sandberg i Odense.',
  keywords: ['coaching', 'livscoaching', 'karrierecoaching', 'Odense', 'personlig udvikling', 'Lise Sandberg'],
  authors: [{ name: 'Lise Sandberg' }],
  generator: 'v0.app',
  icons: {
    icon: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="da">
      <body className={`${cormorantGaramond.variable} ${jost.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
