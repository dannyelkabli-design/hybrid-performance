'use client'

import Image from 'next/image'
import { testimonials } from '@/data/testimonials'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const photos = [
  { src: '/images/hero.jpg', alt: 'Training sessie' },
  { src: '/images/coach.jpg', alt: 'Coach in actie' },
  { src: '/images/training.jpg', alt: 'Resultaat' },
]

export function ResultatenSection() {
  const photosRef = useScrollReveal<HTMLDivElement>({
    selector: '.result-photo',
    stagger: 0.12,
    y: 40,
  })
  const quotesRef = useScrollReveal<HTMLDivElement>({
    selector: '.testimonial',
    stagger: 0.15,
    y: 30,
  })

  return (
    <section id="resultaten" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <SectionLabel className="mb-3 block">Bewezen resultaten</SectionLabel>
          <h2 className="font-condensed font-black italic uppercase text-5xl md:text-6xl text-white leading-none">
            RESULTATEN
          </h2>
        </div>

        {/* Foto grid */}
        <div ref={photosRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="result-photo relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div ref={quotesRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
