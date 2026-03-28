import { PageHeader } from '@/components/ui/PageHeader'
import { DienstenSection } from '@/components/sections/DienstenSection'
import { CTABanner } from '@/components/sections/CTABanner'
import { Footer } from '@/components/Footer'

export default function DienstenPage() {
  return (
    <main>
      <PageHeader label="Wat wij bieden" title="DIENSTEN" />
      <DienstenSection />
      <CTABanner />
      <Footer />
    </main>
  )
}
