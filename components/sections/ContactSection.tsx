'use client'

import { useState } from 'react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button, WhatsAppButton } from '@/components/ui/Button'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function ContactSection() {
  const ref = useScrollReveal<HTMLElement>({ y: 30 })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" ref={ref} className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <div>
          <SectionLabel className="mb-3 block">Gratis kennismaking</SectionLabel>
          <h2 className="font-condensed font-black italic uppercase text-4xl md:text-5xl text-white leading-none mb-6">
            <span className="block">START JOUW</span>
            <span className="block">INTAKE</span>
          </h2>
          <p className="text-muted font-light text-base leading-relaxed mb-8">
            Vul het intakeformulier in en we nemen binnen 24 uur contact op voor een gratis kennismakingsgesprek.
          </p>
          <WhatsAppButton label="App ons direct" />

          <div className="mt-8 flex flex-col gap-2">
            <p className="font-condensed font-bold text-xs tracking-widest uppercase text-white">
              Locatie
            </p>
            <p className="text-muted font-light text-sm">
              Vaart 8, Obdam
            </p>
            <a
              href="https://maps.google.com/?q=Vaart+8,+Obdam"
              target="_blank"
              rel="noopener noreferrer"
              className="font-condensed font-bold text-xs tracking-widest uppercase text-accent hover:opacity-70 transition-opacity"
            >
              Route plannen →
            </a>
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <p className="font-condensed font-bold text-xs tracking-widest uppercase text-white">
              Openingstijden
            </p>
            <p className="text-muted font-light text-sm">Ma – Vr: 06:00 – 22:00</p>
            <p className="text-muted font-light text-sm">Za: 08:00 – 18:00</p>
            <p className="text-muted font-light text-sm">Zo: Gesloten</p>
          </div>
        </div>

        {/* Google Maps */}
        <div className="aspect-video md:aspect-auto md:h-full min-h-[300px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.0!2d4.8967!3d52.6794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVaart+8%2C+Obdam!5e0!3m2!1snl!2snl!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(90%)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hybrid Performance locatie"
          />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Naam */}
          <input name="naam" type="text" required placeholder="Naam"
            className="bg-surface border border-border text-white placeholder-muted font-light text-sm px-4 py-4 focus:outline-none focus:border-accent transition-colors" />

          {/* Email */}
          <input name="email" type="email" required placeholder="E-mailadres"
            className="bg-surface border border-border text-white placeholder-muted font-light text-sm px-4 py-4 focus:outline-none focus:border-accent transition-colors" />

          {/* Doel */}
          <select name="doel" required
            className="bg-surface border border-border text-white font-light text-sm px-4 py-4 focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer">
            <option value="" disabled selected>Wat is jouw doel?</option>
            <option value="afvallen">Afvallen / vetverbranding</option>
            <option value="spieropbouw">Spieropbouw</option>
            <option value="kracht">Meer kracht</option>
            <option value="conditie">Conditie verbeteren</option>
            <option value="algemeen">Algemene gezondheid</option>
          </select>

          {/* Niveau */}
          <select name="niveau" required
            className="bg-surface border border-border text-white font-light text-sm px-4 py-4 focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer">
            <option value="" disabled selected>Jouw ervaringsniveau</option>
            <option value="beginner">Beginner (0-1 jaar)</option>
            <option value="gemiddeld">Gevorderd (1-3 jaar)</option>
            <option value="ervaren">Ervaren (3+ jaar)</option>
          </select>

          {/* Interesse */}
          <select name="interesse" required
            className="bg-surface border border-border text-white font-light text-sm px-4 py-4 focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer">
            <option value="" disabled selected>Interesse in...</option>
            <option value="personal-training">Personal Training (op locatie)</option>
            <option value="online-coaching">Online Coaching</option>
            <option value="voeding">Voeding &amp; Leefstijl</option>
            <option value="weet-niet">Weet ik nog niet</option>
          </select>

          {/* Bericht */}
          <textarea name="bericht" rows={4} placeholder="Vertel iets over jezelf (optioneel)"
            className="bg-surface border border-border text-white placeholder-muted font-light text-sm px-4 py-4 focus:outline-none focus:border-accent transition-colors resize-none" />

          <Button type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Versturen...' : 'Stuur mijn intake in'}
          </Button>
          {status === 'success' && (
            <p className="text-sm text-green-400 font-light">
              Bericht verstuurd! We nemen snel contact op.
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-400 font-light">
              Er ging iets mis. Probeer het opnieuw of app ons.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
