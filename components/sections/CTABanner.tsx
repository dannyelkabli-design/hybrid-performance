'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { WhatsAppButton } from '@/components/ui/Button'

export function CTABanner() {
  const ref = useScrollReveal<HTMLElement>({ y: 30, duration: 0.7 })

  return (
    <section ref={ref} className="bg-accent py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <h2 className="font-condensed font-black italic uppercase text-5xl md:text-6xl text-white leading-none">
          KLAAR OM TE<br />BEGINNEN?
        </h2>
        <WhatsAppButton label="Neem contact op" className="!bg-white !text-accent hover:opacity-90 shrink-0" />
      </div>
    </section>
  )
}
