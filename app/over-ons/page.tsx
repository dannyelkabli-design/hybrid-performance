import { PageHeader } from '@/components/ui/PageHeader'
import { CoachSection } from '@/components/sections/CoachSection'
import { Footer } from '@/components/Footer'

export default function OverOnsPage() {
  return (
    <main>
      <PageHeader label="Het verhaal" title="OVER ONS" />
      <CoachSection />
      <Footer />
    </main>
  )
}
