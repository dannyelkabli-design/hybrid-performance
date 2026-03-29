import type { Metadata } from 'next'
import { PageHeader } from '@/components/ui/PageHeader'

export const metadata: Metadata = {
  title: 'Diensten — Personal Training & Coaching | Obdam, Alkmaar, Heerhugowaard',
  description: 'Personal training in Obdam, online coaching en voedingsadvies. Bereikbaar vanuit Alkmaar, Heerhugowaard, Hensbroek en Langedijk. Bekijk onze diensten en tarieven.',
  alternates: { canonical: 'https://hybrid-performance.nl/diensten' },
}
import { CTABanner } from '@/components/sections/CTABanner'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/ui/Button'

export default function DienstenPage() {
  return (
    <main>
      <PageHeader label="Wat wij bieden" title="DIENSTEN" />

      {/* Personal Training */}
      <section
        id="personal-training"
        className="py-24 max-w-7xl mx-auto px-6 border-b border-border"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div>
            <span className="font-condensed font-black italic text-[70px] md:text-[120px] text-accent/10 leading-none select-none block">
              01
            </span>
            <h2 className="font-condensed font-black italic uppercase text-4xl md:text-6xl text-white leading-none mb-6">
              <span className="block">PERSONAL</span>
              <span className="block">TRAINING</span>
            </h2>
            <p className="text-muted font-light text-base leading-relaxed mb-4">
              Één-op-één begeleiding volledig afgestemd op jouw doelen en mogelijkheden.
              Elke sessie is gepland, elk programma is op maat — geen standaard schema's.
            </p>
            <p className="text-muted font-light text-base leading-relaxed mb-8">
              We trainen in een privé omgeving zodat jij je volledig kunt focussen.
              Geen afleiding, geen wachttijden — enkel jij en het resultaat.
            </p>
            <WhatsAppButton label="Start Personal Training" />
            <div className="mt-8 border-t border-border pt-6">
              <p className="font-condensed font-bold text-xs tracking-widest uppercase text-muted mb-3">Tarieven</p>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="font-condensed font-bold text-sm uppercase tracking-widest text-white">VIP pakket</span>
                  <span className="font-condensed font-black italic text-2xl text-accent">Op aanvraag</span>
                </div>
                <p className="text-muted font-light text-xs">Inclusief 2x/week personal training, directe lijn 24/7 en volledig maatwerk</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {[
              { title: 'Intake & doelanalyse', desc: 'We starten met een uitgebreide intake om jouw huidige niveau, doelen en beperkingen in kaart te brengen.' },
              { title: 'Persoonlijk schema', desc: 'Jouw programma wordt wekelijks bijgesteld op basis van progressie. Altijd up-to-date, altijd optimaal.' },
              { title: 'Begeleiding tijdens sessies', desc: 'Directe feedback op techniek en uitvoering. We zorgen voor veilige en effectieve training.' },
              { title: 'Voortgangsmetingen', desc: 'Maandelijkse metingen en evaluaties zodat je precies weet waar je staat en naartoe gaat.' },
            ].map((item) => (
              <div key={item.title} className="border-t border-border pt-6">
                <h3 className="font-condensed font-bold text-sm uppercase tracking-widest text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-muted font-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Coaching */}
      <section
        id="online-coaching"
        className="py-24 max-w-7xl mx-auto px-6 border-b border-border"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div>
            <span className="font-condensed font-black italic text-[70px] md:text-[120px] text-accent/10 leading-none select-none block">
              02
            </span>
            <h2 className="font-condensed font-black italic uppercase text-4xl md:text-6xl text-white leading-none mb-6">
              <span className="block">ONLINE</span>
              <span className="block">COACHING</span>
            </h2>
            <p className="text-muted font-light text-base leading-relaxed mb-4">
              Train overal ter wereld met een persoonlijk schema en directe begeleiding
              via WhatsApp. Zelfde kwaliteit als personal training, volledig op afstand.
            </p>
            <p className="text-muted font-light text-base leading-relaxed mb-8">
              Ideaal als je druk bent, veel reist of niet in de buurt woont.
              Wekelijkse check-ins houden je scherp en gemotiveerd.
            </p>
            <WhatsAppButton label="Start Online Coaching" />
            <div className="mt-8 border-t border-border pt-6">
              <p className="font-condensed font-bold text-xs tracking-widest uppercase text-muted mb-3">Tarieven</p>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className="font-condensed font-bold text-sm uppercase tracking-widest text-white">Basis</span>
                  <span className="font-condensed font-black italic text-2xl text-accent">€79<span className="text-muted text-sm font-normal not-italic">/maand</span></span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-condensed font-bold text-sm uppercase tracking-widest text-white">Premium</span>
                  <span className="font-condensed font-black italic text-2xl text-accent">€149<span className="text-muted text-sm font-normal not-italic">/maand</span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {[
              { title: 'Persoonlijk trainingsschema', desc: 'Wekelijks bijgewerkt schema dat past bij jouw agenda, uitrusting en doelen.' },
              { title: 'Wekelijkse check-in', desc: 'Iedere week evalueren we jouw progressie, voeding en herstel via WhatsApp of video.' },
              { title: 'Video-analyse', desc: 'Stuur trainingsvideo\'s in voor techniekfeedback. Je traint veilig, ook zonder aanwezige coach.' },
              { title: 'Directe bereikbaarheid', desc: 'Vragen tussendoor? Je coach is altijd bereikbaar via WhatsApp voor snelle antwoorden.' },
            ].map((item) => (
              <div key={item.title} className="border-t border-border pt-6">
                <h3 className="font-condensed font-bold text-sm uppercase tracking-widest text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-muted font-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voeding & Leefstijl */}
      <section
        id="voeding"
        className="py-24 max-w-7xl mx-auto px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div>
            <span className="font-condensed font-black italic text-[70px] md:text-[120px] text-accent/10 leading-none select-none block">
              03
            </span>
            <h2 className="font-condensed font-black italic uppercase text-4xl md:text-6xl text-white leading-none mb-6">
              <span className="block">VOEDING &</span>
              <span className="block">LEEFSTIJL</span>
            </h2>
            <p className="text-muted font-light text-base leading-relaxed mb-4">
              Geen crashdiëten of onhaalbare restricties. We bouwen een voedingsaanpak
              die past bij jouw leven, smaak en doelen — en die je ook op lange termijn
              kunt volhouden.
            </p>
            <p className="text-muted font-light text-base leading-relaxed mb-8">
              Voeding is de basis van elk resultaat. Of het nu om afvallen, spieropbouw
              of betere energie gaat — het begint op het bord.
            </p>
            <WhatsAppButton label="Start Voeding & Leefstijl" />
            <div className="mt-8 border-t border-border pt-6">
              <p className="font-condensed font-bold text-xs tracking-widest uppercase text-muted mb-3">Tarieven</p>
              <div className="flex justify-between items-center">
                <span className="font-condensed font-bold text-sm uppercase tracking-widest text-white">Voedingsbegeleiding</span>
                <span className="font-condensed font-black italic text-2xl text-accent">Op aanvraag</span>
              </div>
              <p className="text-muted font-light text-xs mt-2">Combineer voedingsbegeleiding met een trainingsabonnement voor de beste resultaten</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {[
              { title: 'Voedingsanalyse', desc: 'We analyseren je huidige eetpatroon en identificeren waar de meeste winst te behalen is.' },
              { title: 'Persoonlijk voedingsplan', desc: 'Een praktisch plan met calorieën en macros op maat. Flexibel genoeg voor het echte leven.' },
              { title: 'Leefstijlbegeleiding', desc: 'Slaap, stress en herstel zijn net zo belangrijk als training en voeding. We kijken naar het geheel.' },
              { title: 'Bijsturing op resultaat', desc: 'Het plan wordt aangepast op basis van jouw voortgang. Wat werkt, bouwen we uit — wat niet werkt, veranderen we.' },
            ].map((item) => (
              <div key={item.title} className="border-t border-border pt-6">
                <h3 className="font-condensed font-bold text-sm uppercase tracking-widest text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-muted font-light text-sm leading-relaxed">{item.desc}</p>
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
