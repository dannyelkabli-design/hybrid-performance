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
          <SectionLabel className="mb-3 block">Kom in contact</SectionLabel>
          <h2 className="font-condensed font-black italic uppercase text-4xl md:text-5xl text-white leading-none mb-6">
            <span className="block">NEEM</span>
            <span className="block">CONTACT OP</span>
          </h2>
          <p className="text-muted font-light text-base leading-relaxed mb-8">
            Heb je een vraag of wil je direct starten? Stuur een berichtje via
            het formulier of app ons op WhatsApp.
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
          <input
            name="naam"
            type="text"
            required
            placeholder="Naam"
            className="bg-surface border border-border text-white placeholder-muted font-light text-sm px-4 py-4 focus:outline-none focus:border-accent transition-colors"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="E-mailadres"
            className="bg-surface border border-border text-white placeholder-muted font-light text-sm px-4 py-4 focus:outline-none focus:border-accent transition-colors"
          />
          <textarea
            name="bericht"
            required
            rows={5}
            placeholder="Jouw bericht"
            className="bg-surface border border-border text-white placeholder-muted font-light text-sm px-4 py-4 focus:outline-none focus:border-accent transition-colors resize-none"
          />
          <Button type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Versturen...' : 'Verstuur bericht'}
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
