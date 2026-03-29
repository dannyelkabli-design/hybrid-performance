'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function CoachSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !photoRef.current) return

    const ctx = gsap.context(() => {
      // Parallax: foto beweegt langzamer dan de pagina bij scrollen
      gsap.to(photoRef.current, {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Tekst fade-in
      gsap.from('.coach-text > *', {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="over-ons"
      ref={sectionRef}
      className="py-24 max-w-7xl mx-auto px-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Foto met parallax */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <div ref={photoRef} className="absolute inset-[-15%]">
            <Image
              src="/images/coach.jpg"
              alt="De coach"
              fill
              className="object-cover"
            />
          </div>
          {/* Oranje accent lijn */}
          <div className="absolute bottom-0 left-0 w-16 h-1 bg-accent" />
        </div>

        {/* Tekst */}
        <div className="coach-text flex flex-col gap-6">
          <SectionLabel>Over de coach</SectionLabel>
          <h2 className="font-condensed font-black italic uppercase text-5xl text-white leading-none">
            <span className="block">JOUW</span>
            <span className="block">BEGELEIDER</span>
          </h2>
          <p className="text-muted font-light text-base leading-relaxed">
            Met meer dan 5 jaar ervaring in krachttraining en coaching help ik
            mensen hun fysieke doelen te bereiken. Mijn aanpak is direct,
            eerlijk en resultaatgericht — geen onzin, wel progressie.
          </p>
          <p className="text-muted font-light text-base leading-relaxed">
            Of je nu wilt afvallen, spiermassa wilt opbouwen of simpelweg
            sterker wilt worden: ik stel een plan op dat past bij jouw leven.
          </p>
          <div className="flex flex-col gap-2 border-t border-border pt-6">
            <span className="font-condensed font-bold text-sm uppercase tracking-widest text-white">
              Certified Personal Trainer
            </span>
            <span className="font-condensed text-xs tracking-widest uppercase text-muted">
              5+ jaar ervaring · 100+ klanten begeleid
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
