import { PageHeader } from '@/components/ui/PageHeader'
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
