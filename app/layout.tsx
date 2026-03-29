import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { TransitionProvider } from '@/lib/transitionContext'
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp'
import { LoadingScreen } from '@/components/ui/LoadingScreen'

export const metadata: Metadata = {
  title: 'Hybrid Performance — Krachttraining & Coaching',
  description:
    'Professionele krachttraining en coaching in Nederland. Personal training, online coaching en voedingsadvies op maat.',
  openGraph: {
    title: 'Hybrid Performance — Krachttraining & Coaching',
    description:
      'Professionele krachttraining en coaching in Nederland. Personal training, online coaching en voedingsadvies op maat.',
    url: 'https://hybrid-performance.nl',
    siteName: 'Hybrid Performance',
    images: [{ url: 'https://hybrid-performance.nl/images/hp-over-1.jpg', width: 960, height: 720 }],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hybrid Performance — Krachttraining & Coaching',
    description: 'Professionele krachttraining en coaching in Nederland.',
    images: ['https://hybrid-performance.nl/images/hp-over-1.jpg'],
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
                'Professionele krachttraining en coaching in Nederland. Personal training, online coaching en voedingsadvies op maat.',
              url: 'https://hybrid-performance.nl',
              telephone: '+31600000000',
              email: 'Hybridperformance@outlook.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Vaart 8',
                addressLocality: 'Obdam',
                addressCountry: 'NL',
              },
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
