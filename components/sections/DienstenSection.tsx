'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { diensten } from '@/data/diensten'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll'

export function DienstenSection() {
  const containerRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useHorizontalScroll({ containerRef, trackRef, progressRef })

  return (
    <section
      ref={containerRef}
      id="diensten"
      className="relative overflow-hidden bg-background"
    >
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <SectionLabel className="mb-3 block">Wat wij doen</SectionLabel>
        <h2 className="font-condensed font-black italic uppercase text-4xl md:text-6xl text-white leading-none">
          <span className="block">ONZE</span>
          <span className="block">DIENSTEN</span>
        </h2>
      </div>

      {/* Horizontal track */}
      <div ref={trackRef} className="flex flex-col md:flex-row">
        {diensten.map((d) => (
          <div
            key={d.id}
            className="flex-shrink-0 w-full md:min-w-[400px] md:w-auto h-auto md:h-[400px] bg-surface border border-border flex flex-col justify-between p-6 md:p-8 transition-colors hover:border-accent/50"
          >
            <span className="font-condensed font-black italic text-[60px] md:text-[80px] text-accent/10 leading-none select-none">
              {d.label}
            </span>
            <div className="flex flex-col gap-4">
              <h3 className="font-condensed font-black uppercase text-2xl text-white leading-tight">
                {d.title}
              </h3>
              <p className="text-muted font-light text-sm leading-relaxed">
                {d.description}
              </p>
              <Link
                href={d.href}
                className="font-condensed font-bold text-xs tracking-widest uppercase text-accent hover:opacity-70 transition-opacity"
              >
                {d.cta} →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Progress bar — driven by useHorizontalScroll via progressRef */}
      <div
        ref={progressRef}
        className="absolute bottom-0 left-0 h-[3px] w-full bg-accent origin-left hidden md:block"
        style={{ transform: 'scaleX(0)' }}
      />

      {/* Scroll hint — desktop only */}
      <p className="hidden md:block font-condensed text-xs tracking-widest uppercase text-muted px-6 py-4">
        Scroll → voor meer
      </p>
    </section>
  )
}
