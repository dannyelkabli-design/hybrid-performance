'use client'

import { pakketten } from '@/data/prijzen'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { WhatsAppButton } from '@/components/ui/Button'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { ScrambleText } from '@/components/ui/ScrambleText'

export function PrijzenSection() {
  const ref = useScrollReveal<HTMLElement>({
    selector: '.pakket-card',
    stagger: 0.15,
    y: 40,
  })

  return (
    <section
      id="prijzen"
      ref={ref}
      className="py-24 bg-surface"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <SectionLabel className="mb-3 block">Transparante prijzen</SectionLabel>
          <h2 className="font-condensed font-black italic uppercase text-5xl md:text-6xl text-white leading-none">
            <ScrambleText text="PAKKETTEN" triggerOnScroll />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pakketten.map((pakket) => (
            <div
              key={pakket.id}
              className={`pakket-card flex flex-col p-8 border ${
                pakket.highlight
                  ? 'border-accent bg-background'
                  : 'border-border bg-surface'
              }`}
            >
              {pakket.highlight && (
                <span className="font-condensed font-bold text-xs tracking-[4px] uppercase text-accent mb-6">
                  Meest gekozen
                </span>
              )}
              <h3 className="font-condensed font-black italic uppercase text-3xl text-white mb-2">
                {pakket.name}
              </h3>
              <div className="flex items-end gap-1 mb-8">
                <span className="font-condensed font-black text-4xl text-white">
                  {pakket.price}
                </span>
                {pakket.period && (
                  <span className="text-muted text-sm mb-1">{pakket.period}</span>
                )}
              </div>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {pakket.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted font-light">
                    <span className="text-accent mt-0.5 shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <WhatsAppButton label={`Start met ${pakket.name}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
