import type { Metadata } from 'next'
import { PageHeader } from '@/components/ui/PageHeader'

export const metadata: Metadata = {
  title: 'Contact — Hybrid Performance Obdam | Regio Alkmaar & Heerhugowaard',
  description: 'Neem contact op met Hybrid Performance in Obdam. Gratis kennismakingsgesprek voor personal training, online coaching of voedingsadvies. Bereikbaar vanuit Alkmaar en Heerhugowaard.',
  alternates: { canonical: 'https://hybrid-performance.nl/contact' },
}
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/Footer'

export default function ContactPage() {
  return (
    <main>
      <PageHeader label="Kom in contact" title="CONTACT" />
      <ContactSection />
      <Footer />
    </main>
  )
}
