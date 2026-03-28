import { PageHeader } from '@/components/ui/PageHeader'
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
