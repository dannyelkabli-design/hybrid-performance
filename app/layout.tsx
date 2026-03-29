import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { TransitionProvider } from '@/lib/transitionContext'

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
      <body className="bg-background text-white antialiased">
        <TransitionProvider>
          <Navbar />
          {children}
        </TransitionProvider>
      </body>
    </html>
  )
}
