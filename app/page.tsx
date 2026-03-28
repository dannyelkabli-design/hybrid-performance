import { HeroSection } from '@/components/sections/HeroSection'
import { StatBar } from '@/components/sections/StatBar'
import { DienstenSection } from '@/components/sections/DienstenSection'
import { ResultatenSection } from '@/components/sections/ResultatenSection'
import { CoachSection } from '@/components/sections/CoachSection'
import { PrijzenSection } from '@/components/sections/PrijzenSection'
import { CTABanner } from '@/components/sections/CTABanner'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatBar />
      <DienstenSection />
      <ResultatenSection />
      <CoachSection />
      <PrijzenSection />
      <CTABanner />
      <ContactSection />
      <Footer />
    </main>
  )
}
