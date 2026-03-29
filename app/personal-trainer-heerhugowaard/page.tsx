import type { Metadata } from 'next'
import Image from 'next/image'
import { Footer } from '@/components/Footer'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { WhatsAppButton } from '@/components/ui/Button'
import { CTABanner } from '@/components/sections/CTABanner'
import { TransitionLink } from '@/components/ui/TransitionLink'

export const metadata: Metadata = {
  title: 'Personal Trainer Heerhugowaard — Hybrid Performance | Obdam (10 min)',
  description: 'Op zoek naar een personal trainer in Heerhugowaard? Hybrid Performance zit in Obdam — op 10 minuten van Heerhugowaard. Personal training, online coaching en voedingsadvies. Gratis kennismaking.',
  keywords: [
    'personal trainer Heerhugowaard', 'personal trainer bij Heerhugowaard', 'krachttraining Heerhugowaard',
    'gym Heerhugowaard', 'sportschool Heerhugowaard', 'afvallen Heerhugowaard', 'spieropbouw Heerhugowaard',
    'online coach Heerhugowaard', 'voedingsadvies Heerhugowaard', 'Hybrid Performance Heerhugowaard',
  ],
  alternates: { canonical: 'https://hybrid-performance.nl/personal-trainer-heerhugowaard' },
}

export default function PersonalTrainerHeerhugowaard() {
  return (
    <main>

      {/* Hero */}
      <section className="relative min-h-[60vh] flex flex-col justify-center bg-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/hp-2.jpg" alt="Personal training Heerhugowaard" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <SectionLabel className="mb-4 block">Personal Trainer · Regio Heerhugowaard</SectionLabel>
          <h1 className="font-condensed font-black italic uppercase text-5xl md:text-7xl text-white leading-none mb-6">
            <span className="block">PERSONAL TRAINER</span>
            <span className="block text-accent">HEERHUGOWAARD</span>
          </h1>
          <p className="text-muted font-light text-base md:text-lg max-w-lg mb-8">
            Hybrid Performance zit in Obdam — op 10 minuten van Heerhugowaard.
            Professionele krachttraining, online coaching en voedingsadvies met bewezen resultaten.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppButton label="Plan gratis kennismaking" />
            <TransitionLink
              href="/diensten"
              className="inline-flex items-center gap-2 font-condensed font-bold text-sm tracking-widest uppercase px-7 py-4 border border-white text-white hover:opacity-70 transition-opacity"
            >
              Bekijk diensten
            </TransitionLink>
          </div>
        </div>
      </section>

      {/* Afstand & bereikbaarheid */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: '10 min', label: 'Rijden vanuit Heerhugowaard' },
              { stat: 'Gratis', label: 'Parkeren direct bij de gym' },
              { stat: 'Online', label: 'Coaching beschikbaar vanuit huis' },
            ].map((s) => (
              <div key={s.label} className="text-center border-t border-border pt-8">
                <p className="font-condensed font-black italic text-4xl text-accent mb-2">{s.stat}</p>
                <p className="font-condensed text-xs tracking-widest uppercase text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <SectionLabel className="mb-3 block">Wat we bieden</SectionLabel>
        <h2 className="font-condensed font-black italic uppercase text-4xl md:text-5xl text-white leading-none mb-12">
          <span className="block">JOUW OPTIES</span>
          <span className="block">ALS HEERHUGOWAARDER</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              nr: '01',
              title: 'Personal Training op Locatie',
              body: 'Rijd naar onze privégym in Obdam voor een één-op-één sessie. 10 minuten vanuit Heerhugowaard, gratis parkeren, 100% persoonlijke aandacht.',
              href: '/diensten#personal-training',
            },
            {
              nr: '02',
              title: 'Online Coaching',
              body: 'Wil je niet rijden? Train vanuit je eigen gym in Heerhugowaard met een persoonlijk schema, wekelijkse check-ins en directe WhatsApp support.',
              href: '/diensten#online-coaching',
            },
            {
              nr: '03',
              title: 'Voeding & Leefstijl',
              body: 'Een voedingsplan dat past bij jouw leven. Geen onnodige restricties — wel structurele, langetermijn resultaten.',
              href: '/diensten#voeding',
            },
          ].map((d) => (
            <TransitionLink
              key={d.nr}
              href={d.href}
              className="group bg-surface border border-border hover:border-accent/50 transition-colors p-8 flex flex-col gap-4"
            >
              <span className="font-condensed font-black italic text-5xl text-accent/10 leading-none select-none">{d.nr}</span>
              <h3 className="font-condensed font-black italic uppercase text-xl text-white group-hover:text-accent transition-colors">{d.title}</h3>
              <p className="text-muted font-light text-sm leading-relaxed flex-1">{d.body}</p>
              <span className="font-condensed font-bold text-xs tracking-widest uppercase text-accent">Meer info →</span>
            </TransitionLink>
          ))}
        </div>
      </section>

      {/* Waarom Hybrid Performance */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel className="mb-3 block">Waarom wij</SectionLabel>
            <h2 className="font-condensed font-black italic uppercase text-4xl text-white leading-none mb-6">
              <span className="block">DICHT BIJ</span>
              <span className="block">HEERHUGOWAARD</span>
            </h2>
            <div className="flex flex-col gap-6">
              {[
                { title: '10 minuten van je deur', body: 'Obdam ligt direct boven Heerhugowaard. Via de Westfrisiaweg ben je er in 10 minuten — sneller dan de meeste sportscholen in de stad zelf.' },
                { title: 'Privégym zonder massale drukte', body: 'Geen wachtrijen bij de squat rack, geen afleiding. Jij traint met de coach, op het moment dat jij wilt.' },
                { title: '15+ jaar ervaring', body: 'Brendon heeft meer dan 400 klanten begeleid uit Heerhugowaard, Alkmaar, Obdam en heel Noord-Holland.' },
                { title: 'Gratis kennismakingssessie', body: 'Geen verplichtingen. Kom langs, bekijk de gym, leer Brendon kennen en beslis dan pas.' },
              ].map((item) => (
                <div key={item.title} className="border-t border-border pt-4">
                  <h3 className="font-condensed font-bold text-sm uppercase tracking-widest text-white mb-1">{item.title}</h3>
                  <p className="text-muted font-light text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image src="/images/hp-over-2.jpg" alt="Hybrid Performance gym Obdam" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Route */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <SectionLabel className="mb-3 block">Route vanuit Heerhugowaard</SectionLabel>
        <h2 className="font-condensed font-black italic uppercase text-4xl text-white leading-none mb-6">
          <span className="block">HOE VIND</span>
          <span className="block">JE ONS?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-muted font-light text-base leading-relaxed mb-4">
              Hybrid Performance bevindt zich op <strong className="text-white">Vaart 8 in Obdam</strong> — op zo&apos;n 10 minuten rijden van Heerhugowaard via de Westfrisiaweg richting Hoorn. Gratis parkeren direct bij de ingang.
            </p>
            <p className="text-muted font-light text-sm mb-6">Vaart 8 · 1713 SH Obdam · Noord-Holland</p>
            <a
              href="https://maps.google.com/?q=Vaart+8,+Obdam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-condensed font-bold text-xs tracking-widest uppercase text-accent hover:opacity-70 transition-opacity"
            >
              Open in Google Maps →
            </a>
          </div>
          <div className="aspect-video overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.0!2d4.8967!3d52.6794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVaart+8%2C+Obdam!5e0!3m2!1snl!2snl!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(90%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Route naar Hybrid Performance vanuit Heerhugowaard"
            />
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  )
}
