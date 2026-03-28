'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from '@/lib/gsap'
import { WhatsAppButton } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'

// Splits tekst in spans per woord voor de animatie
function SplitWords({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split(' ').map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden mr-[0.2em] last:mr-0"
        >
          <span className="inline-block word-reveal">{word}</span>
        </span>
      ))}
    </span>
  )
}

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!heroRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      // Eyebrow label
      tl.from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.6 }, 0.3)

      // Woorden van de headline vallen van onder in
      tl.from(
        '.word-reveal',
        { y: '110%', duration: 0.8, stagger: 0.08 },
        0.5
      )

      // Subtekst + CTA knoppen
      tl.from('.hero-sub', { y: 20, opacity: 0, duration: 0.6 }, 1.1)
      tl.from('.hero-cta', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, 1.3)

      // Scroll indicator
      tl.from('.scroll-indicator', { opacity: 0, duration: 0.5 }, 1.8)
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-[600px] flex flex-col"
    >
      {/* Achtergrond foto */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Hybrid Performance training"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Gradient overlay: links donker (tekst), rechts transparant */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/60 to-[#0a0a0a]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 pt-16">
        <SectionLabel className="hero-eyebrow mb-4 block">
          Krachttraining &amp; Coaching
        </SectionLabel>

        <h1 className="font-condensed font-black italic uppercase leading-none text-white mb-6">
          <SplitWords
            text="HYBRID"
            className="block text-[clamp(64px,12vw,160px)]"
          />
          <SplitWords
            text="PERFORMANCE"
            className="block text-[clamp(64px,12vw,160px)]"
          />
        </h1>

        <p className="hero-sub text-muted font-light text-base md:text-lg max-w-md mb-8">
          Professionele begeleiding voor optimale prestaties. Personal training,
          online coaching en voeding op maat.
        </p>

        <div className="flex flex-wrap gap-4">
          <WhatsAppButton label="Start vandaag" className="hero-cta" />
          <a
            href="/#diensten"
            className="hero-cta inline-flex items-center gap-2 font-condensed font-bold text-sm tracking-widest uppercase px-7 py-4 border border-white text-white hover:opacity-70 transition-opacity"
          >
            Onze diensten
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator relative z-10 flex justify-center pb-8">
        <span className="font-condensed text-xs tracking-[4px] uppercase text-muted animate-bounce">
          ▼ scroll
        </span>
      </div>
    </section>
  )
}
