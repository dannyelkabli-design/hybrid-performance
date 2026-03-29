import type { Metadata } from 'next'
import { PageHeader } from '@/components/ui/PageHeader'

export const metadata: Metadata = {
  title: 'Pakketten & Prijzen — Personal Trainer Obdam | Alkmaar & Heerhugowaard',
  description: 'Bekijk de tarieven van Hybrid Performance in Obdam. Online coaching vanaf €79/maand. Personal training op aanvraag. Bereikbaar vanuit Alkmaar, Heerhugowaard en omgeving.',
  alternates: { canonical: 'https://hybrid-performance.nl/prijzen' },
}
import { PrijzenSection } from '@/components/sections/PrijzenSection'
import { Footer } from '@/components/Footer'

export default function PrijzenPage() {
  return (
    <main>
      <PageHeader label="Transparante prijzen" title="PAKKETTEN" />
      <PrijzenSection />
      <Footer />
    </main>
  )
}
