import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { TransitionProvider } from '@/lib/transitionContext'
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp'
import { LoadingScreen } from '@/components/ui/LoadingScreen'

export const metadata: Metadata = {
  title: 'Hybrid Performance — Personal Trainer Obdam | Alkmaar & Heerhugowaard',
  description:
    'Personal trainer in Obdam (regio Alkmaar & Heerhugowaard). Krachttraining, online coaching en voedingsadvies op maat. Gratis kennismakingssessie. ✓ 15+ jaar ervaring ✓ 400+ klanten',
  keywords: [
    'personal trainer Obdam', 'personal trainer Alkmaar', 'personal trainer Heerhugowaard',
    'krachttraining Obdam', 'krachttraining Alkmaar', 'gym Obdam', 'sportschool Obdam',
    'personal trainer Hensbroek', 'personal trainer Langedijk', 'online coach Noord-Holland',
    'afvallen Alkmaar', 'spieropbouw Heerhugowaard', 'voedingsadvies Obdam',
    'Hybrid Performance', 'personal training Noord-Holland',
  ],
  openGraph: {
    title: 'Hybrid Performance — Personal Trainer Obdam | Alkmaar & Heerhugowaard',
    description:
      'Personal trainer in Obdam (regio Alkmaar & Heerhugowaard). Krachttraining, online coaching en voedingsadvies op maat. Gratis kennismakingssessie.',
    url: 'https://hybrid-performance.nl',
    siteName: 'Hybrid Performance',
    images: [{ url: 'https://hybrid-performance.nl/images/hp-over-1.jpg', width: 960, height: 720 }],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hybrid Performance — Personal Trainer Obdam | Alkmaar & Heerhugowaard',
    description: 'Personal trainer in Obdam (regio Alkmaar & Heerhugowaard). Krachttraining, online coaching en voedingsadvies op maat.',
    images: ['https://hybrid-performance.nl/images/hp-over-1.jpg'],
  },
  alternates: {
    canonical: 'https://hybrid-performance.nl',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SportsActivityLocation',
              name: 'Hybrid Performance',
              description:
                'Personal trainer in Obdam (regio Alkmaar & Heerhugowaard). Krachttraining, online coaching en voedingsadvies op maat. 15+ jaar ervaring, 400+ klanten.',
              url: 'https://hybrid-performance.nl',
              telephone: '+31600000000',
              email: 'Hybridperformance@outlook.com',
              priceRange: '€€',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Vaart 8',
                addressLocality: 'Obdam',
                postalCode: '1713 SH',
                addressRegion: 'Noord-Holland',
                addressCountry: 'NL',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 52.6794,
                longitude: 4.8967,
              },
              areaServed: [
                { '@type': 'City', name: 'Obdam' },
                { '@type': 'City', name: 'Alkmaar' },
                { '@type': 'City', name: 'Heerhugowaard' },
                { '@type': 'City', name: 'Hensbroek' },
                { '@type': 'City', name: 'Langedijk' },
                { '@type': 'City', name: 'Broek op Langedijk' },
                { '@type': 'City', name: 'Sint Pancras' },
                { '@type': 'City', name: 'Nieuwe Niedorp' },
                { '@type': 'City', name: 'Avenhorn' },
              ],
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '06:00',
                  closes: '22:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Saturday'],
                  opens: '08:00',
                  closes: '18:00',
                },
              ],
              sameAs: [
                'https://instagram.com/hybrid.performance.gym',
                'https://facebook.com/Hybridperformance.nl',
              ],
            }),
          }}
        />
      </head>
      <body className="bg-background text-white antialiased">
        <TransitionProvider>
          <LoadingScreen />
          <Navbar />
          {children}
          <FloatingWhatsApp />
        </TransitionProvider>
      </body>
    </html>
  )
}
