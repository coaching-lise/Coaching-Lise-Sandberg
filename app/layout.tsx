import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Script from 'next/script'
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-E4F5VN7BQ5"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-E4F5VN7BQ5');
        `}
      </Script>
      <body className={`${cormorantGaramond.variable} ${jost.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
