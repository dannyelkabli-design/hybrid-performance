'use client'

import Link from 'next/link'
import { diensten } from '@/data/diensten'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function DienstenSection() {
  const ref = useScrollReveal<HTMLElement>({
    selector: '.dienst-card',
    stagger: 0.15,
    y: 50,
  })

  return (
    <section
      id="diensten"
      ref={ref}
      className="py-24 max-w-7xl mx-auto px-6"
    >
      <div className="mb-16">
        <SectionLabel className="mb-3 block">Wat wij doen</SectionLabel>
        <h2 className="font-condensed font-black italic uppercase text-5xl md:text-6xl text-white leading-none">
          ONZE<br />DIENSTEN
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {diensten.map((d) => (
          <div
            key={d.id}
            className="dienst-card bg-surface border border-border p-8 flex flex-col gap-6 hover:border-accent/50 transition-colors"
          >
            <span className="font-condensed font-black italic text-5xl text-accent/20 leading-none">
              {d.label}
            </span>
            <div>
              <h3 className="font-condensed font-black uppercase text-2xl text-white mb-3">
                {d.title}
              </h3>
              <p className="text-muted font-light text-sm leading-relaxed">
                {d.description}
              </p>
            </div>
            <Link
              href={d.href}
              className="mt-auto font-condensed font-bold text-xs tracking-widest uppercase text-accent hover:opacity-70 transition-opacity"
            >
              {d.cta} →
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
