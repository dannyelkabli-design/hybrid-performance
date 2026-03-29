'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { WhatsAppButton } from '@/components/ui/Button'

export function CTABanner() {
  const ref = useScrollReveal<HTMLElement>({ y: 30, duration: 0.7 })

  return (
    <section ref={ref} className="bg-accent py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="font-condensed font-black italic uppercase text-4xl md:text-6xl text-white leading-none mb-3">
            <span className="block">KLAAR OM TE</span>
            <span className="block">BEGINNEN?</span>
          </h2>
          <p className="font-condensed text-xs tracking-widest uppercase text-white/70">30 min · gratis · geen verplichtingen</p>
        </div>
        <WhatsAppButton label="Plan gratis kennismakingsgesprek" className="!bg-white !text-accent hover:opacity-90 shrink-0" />
      </div>
    </section>
  )
}
