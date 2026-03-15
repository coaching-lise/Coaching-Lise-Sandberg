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
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'Lise Sandberg Coaching',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Lise Sandberg Coaching",
              "image": "https://lise-sandberg.dk/Lise-billede.jpg",
              "@id": "https://lise-sandberg.dk",
              "url": "https://lise-sandberg.dk",
              "telephone": "+4526147331",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Hunderup Ege 22",
                "addressLocality": "Odense",
                "postalCode": "5230",
                "addressCountry": "DK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 55.3857,
                "longitude": 10.3813
              },
              "url_social": [
                "https://www.instagram.com/lilunda/",
                "https://www.facebook.com/lise.l.andersen.50",
                "https://www.linkedin.com/in/lise-lund-sandberg-7bb58419/"
              ],
              "founder": {
                "@type": "Person",
                "name": "Lise Sandberg",
                "jobTitle": "Certificeret Coach"
              },
              "description": "Professionel coaching der skaber varig forandring. Livscoaching, karrierecoaching og personlig udvikling med Lise Sandberg i Odense.",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              }
            })
          }}
        />
      </body>
    </html>
  )
}
