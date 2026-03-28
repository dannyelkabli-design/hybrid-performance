import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Hybrid Performance — Krachttraining & Coaching',
  description:
    'Professionele krachttraining en coaching in Nederland. Personal training, online coaching en voedingsadvies op maat.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="bg-background text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
