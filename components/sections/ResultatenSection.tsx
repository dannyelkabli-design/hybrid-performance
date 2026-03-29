'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { testimonials } from '@/data/testimonials'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrambleText } from '@/components/ui/ScrambleText'
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const photos = [
  { src: '/images/hero.jpg',     alt: 'Training sessie', name: 'Mark V.',  detail: '-12kg · 4 maanden' },
  { src: '/images/coach.jpg',    alt: 'Coach in actie',  name: 'Sarah K.', detail: '+8kg spier · 6 maanden' },
  { src: '/images/training.jpg', alt: 'Resultaat',       name: 'Daan R.',  detail: 'PR squat +40kg · 3 maanden' },
]

export function ResultatenSection() {
  const containerRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const quotesRef = useScrollReveal<HTMLDivElement>({
    selector: '.testimonial',
    stagger: 0.15,
    y: 30,
  })

  useHorizontalScroll({ containerRef, trackRef, progressRef })

  return (
    <section id="resultaten" className="bg-surface">
      {/* Pinned horizontal photo strip */}
      <section
        ref={containerRef}
        className="relative overflow-hidden bg-surface"
      >
        {/* Section header */}
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
          <SectionLabel className="mb-3 block">Bewezen resultaten</SectionLabel>
          <h2 className="font-condensed font-black italic uppercase text-5xl md:text-6xl text-white leading-none">
            <ScrambleText text="RESULTATEN" triggerOnScroll />
          </h2>
        </div>

        {/* Horizontal filmstrip */}
        <div ref={trackRef} className="flex gap-3 px-6">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative flex-shrink-0 min-w-[280px] md:min-w-[360px] h-[420px] overflow-hidden"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-condensed font-bold text-sm uppercase tracking-widest text-white">
                  {photo.name}
                </p>
                <p className="font-condensed text-xs tracking-widest uppercase text-muted">
                  {photo.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div
          ref={progressRef}
          className="absolute bottom-0 left-0 h-[3px] w-full bg-accent origin-left"
          style={{ transform: 'scaleX(0)' }}
        />

        {/* Scroll hint */}
        <p className="font-condensed text-xs tracking-widest uppercase text-muted px-6 py-4">
          Scroll → voor meer
        </p>
      </section>

      {/* Testimonials — normal vertical layout below the filmstrip */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div ref={quotesRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial border-t border-border pt-8">
              <p className="text-white font-light text-sm leading-relaxed mb-6 italic">
                {t.quote}
              </p>
              <div>
                <p className="font-condensed font-bold text-sm uppercase tracking-widest text-white">
                  {t.name}
                </p>
                <p className="font-condensed text-xs tracking-widest uppercase text-muted">
                  {t.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
