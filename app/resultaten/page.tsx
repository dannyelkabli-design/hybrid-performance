import { PageHeader } from '@/components/ui/PageHeader'
import { ResultatenSection } from '@/components/sections/ResultatenSection'
import { CTABanner } from '@/components/sections/CTABanner'
import { Footer } from '@/components/Footer'

export default function ResultatenPage() {
  return (
    <main>
      <PageHeader label="Bewezen resultaten" title="RESULTATEN" />
      <ResultatenSection />
      <CTABanner />
      <Footer />
    </main>
  )
}
