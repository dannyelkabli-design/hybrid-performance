import Image from 'next/image'
import { PageHeader } from '@/components/ui/PageHeader'
import { CTABanner } from '@/components/sections/CTABanner'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Over Ons — Hybrid Performance',
  description:
    'Leer de gym en coach kennen. Hybrid Performance is een privé gym gericht op krachttraining, coaching en voeding — in een serieuze maar toegankelijke omgeving.',
}

export default function OverOnsPage() {
  return (
    <main>
      <PageHeader label="Wie wij zijn" title="OVER ONS" />

      {/* Intro */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <SectionLabel className="mb-3 block">#keepitmoving</SectionLabel>
            <h2 className="font-condensed font-black italic uppercase text-4xl md:text-5xl text-white leading-none mb-6">
              <span className="block">BEWEGING.</span>
              <span className="block">MINDSET.</span>
              <span className="block">VOEDING.</span>
            </h2>
            <p className="text-muted font-light text-base leading-relaxed mb-4">
              Hybrid Performance is meer dan een gym — het is een omgeving waar serieuze
              progressie centraal staat. Of je nu voor het eerst traint of al jarenlang
              bezig bent, hier word je persoonlijk begeleid door iemand die er volledig
              voor gaat.
            </p>
            <p className="text-muted font-light text-base leading-relaxed mb-8">
              Geen massale groepen, geen standaard schema&apos;s. Kleine setting, maximale
              aandacht. Dat is hoe wij werken.
            </p>
            <WhatsAppButton label="Kom kennismaken" />
          </div>

          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/images/hp-over-1.jpg"
              alt="Hybrid Performance gym exterieur"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Drie pijlers */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                label: '01',
                title: 'Beweging',
                body: 'Training is de basis. We werken met bewezen methodes voor kracht, conditie en lichaamssamenstelling — afgestemd op jouw niveau en doelen.',
              },
              {
                label: '02',
                title: 'Mindset',
                body: 'Consistentie wint van motivatie. We helpen je de juiste gewoontes op te bouwen zodat je op de lange termijn resultaten boekt — ook als het moeilijk is.',
              },
              {
                label: '03',
                title: 'Voeding',
                body: 'Goede voeding hoeft niet ingewikkeld te zijn. We geven praktisch advies dat past bij jouw leven, zonder onnodige restricties.',
              },
            ].map((p) => (
              <div key={p.label} className="border-t border-border pt-8">
                <span className="font-condensed font-black italic text-6xl text-accent/10 leading-none block mb-4 select-none">
                  {p.label}
                </span>
                <h3 className="font-condensed font-black italic uppercase text-2xl text-white mb-3">
                  {p.title}
                </h3>
                <p className="text-muted font-light text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foto grid — gym impressie */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <SectionLabel className="mb-3 block">De gym</SectionLabel>
        <h2 className="font-condensed font-black italic uppercase text-4xl md:text-5xl text-white leading-none mb-12">
          <span className="block">ONZE</span>
          <span className="block">LOCATIE</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { src: '/images/hp-over-2.jpg', alt: 'Receptie en nutrition bar' },
            { src: '/images/hp-over-3.jpg', alt: 'Gymruimte met trap en kettlebells' },
            { src: '/images/hp-over-4.jpg', alt: 'Gymvloer met barbells' },
            { src: '/images/hp-over-5.jpg', alt: 'Bokskamer met bokszakken' },
            { src: '/images/hp-over-6.jpg', alt: 'Hybrid Performance boksmateriaal' },
            { src: '/images/hp-1.jpg',      alt: 'Personal training bench press' },
          ].map((photo) => (
            <div key={photo.src} className="relative aspect-square overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '15+', label: 'Jaar ervaring' },
              { stat: '400+', label: 'Klanten begeleid' },
              { stat: '3', label: 'Trainingsruimtes' },
              { stat: '1:1', label: 'Persoonlijke begeleiding' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-condensed font-black italic text-4xl md:text-5xl text-accent leading-none mb-2">
                  {s.stat}
                </p>
                <p className="font-condensed text-xs tracking-widest uppercase text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  )
}
