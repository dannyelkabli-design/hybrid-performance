import { HeroSection } from '@/components/sections/HeroSection'
import { StatBar } from '@/components/sections/StatBar'
import { DienstenSection } from '@/components/sections/DienstenSection'
import { ResultatenSection } from '@/components/sections/ResultatenSection'
import { CoachSection } from '@/components/sections/CoachSection'
import { PrijzenSection } from '@/components/sections/PrijzenSection'
import { InstagramSection } from '@/components/sections/InstagramSection'
import { CTABanner } from '@/components/sections/CTABanner'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatBar />
      <div className="glitch-line" />
      <DienstenSection />
      <div className="glitch-line" />
      <ResultatenSection />
      <div className="glitch-line" />
      <CoachSection />
      <div className="glitch-line" />
      <PrijzenSection />
      <InstagramSection />
      <CTABanner />
      <ContactSection />
      <Footer />
    </main>
  )
}
