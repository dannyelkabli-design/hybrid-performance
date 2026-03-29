import type { Metadata } from 'next'
import Image from 'next/image'
import { Footer } from '@/components/Footer'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { TransitionLink } from '@/components/ui/TransitionLink'
import { WhatsAppButton } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Hoe werkt voeding bij spieropbouw? — Hybrid Performance Blog',
  description: 'Spieren bouwen is voor 40% training en 60% voeding. We leggen uit wat je echt moet weten — zonder dieet-onzin.',
}

export default function BlogPost() {
  return (
    <main>
      <article className="max-w-2xl mx-auto px-6 pt-32 pb-24">

        <TransitionLink href="/blog" className="font-condensed text-xs tracking-widest uppercase text-muted hover:text-white transition-colors mb-12 block">
          ← Terug naar blog
        </TransitionLink>

        <div className="flex items-center gap-4 mb-6">
          <SectionLabel>Voeding</SectionLabel>
          <span className="font-condensed text-xs tracking-widest uppercase text-muted">5 min lezen</span>
          <span className="font-condensed text-xs tracking-widest uppercase text-muted">15 februari 2026</span>
        </div>

        <h1 className="font-condensed font-black italic uppercase text-4xl md:text-6xl text-white leading-none mb-4">
          <span className="block">HOE WERKT</span>
          <span className="block">VOEDING BIJ</span>
          <span className="block">SPIEROPBOUW?</span>
        </h1>

        <div className="flex items-center gap-3 border-t border-border pt-6 mb-12">
          <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-accent">
            <Image src="/images/coach.jpg" alt="Brendon" fill className="object-cover object-top" />
          </div>
          <div>
            <p className="font-condensed font-bold text-sm uppercase tracking-widest text-white">Brendon</p>
            <p className="font-condensed text-xs tracking-widest uppercase text-muted">Personal Trainer · Hybrid Performance</p>
          </div>
        </div>

        <div className="prose-custom">

          <p>
            Je kunt de perfecte training hebben, maar als je voeding niet klopt, bouw je
            geen spiermassa op. Voeding is niet de helft van het verhaal — het ís het fundament.
            Begrijpen hoe je lichaam spieren opbouwt op cellulair niveau helpt je betere,
            duurzame keuzes te maken — zonder crashdiëten of supplementen die beloftes doen
            die ze niet waar kunnen maken.
          </p>

          <h2>Hoe bouw je eigenlijk spierweefsel op?</h2>
          <p>
            Spiergroei — technisch hypertrofie — ontstaat wanneer spiereiwitten sneller worden
            gesynthetiseerd dan ze worden afgebroken. Dit proces heet netto eiwitbalans (NPB).
            Training veroorzaakt microscopische scheurtjes in spiervezels. Tijdens herstel worden
            deze scheurtjes gerepareerd met nieuwe eiwitstructuren — de spier wordt sterker en groter.
          </p>
          <p>
            Onderzoek van Phillips & Van Loon (2011) in het <em>Journal of Sports Sciences</em>
            legt de biochemische basis bloot: zonder voldoende aminozuren (de bouwstenen van
            eiwitten) kan dit herstelproces niet optimaal verlopen. Training is de prikkel;
            voeding levert het bouwmateriaal.
          </p>

          <h2>Hoeveel eiwit heb je nodig?</h2>
          <p>
            De wetenschappelijke consensus is duidelijker dan ooit. Een grootschalige
            meta-analyse van Morton et al. (2018) in het <em>British Journal of Sports
            Medicine</em>, die 49 studies analyseerde met 1.800 deelnemers, concludeert:
          </p>
          <ul>
            <li>Optimale eiwitinname voor spiergroei: <strong>1,6 g/kg lichaamsgewicht per dag</strong></li>
            <li>Verdere inname boven 2,2 g/kg levert geen extra spiergroei op</li>
            <li>De bron van eiwit maakt minder uit dan de totale dagelijkse hoeveelheid</li>
          </ul>
          <p>
            Voor een persoon van 80 kg betekent dit 128–176 gram eiwit per dag. Verdeel dit
            over 4–5 maaltijden voor optimale eiwitsynthese — het lichaam kan per maaltijd
            slechts een bepaalde hoeveelheid efficiënt verwerken.
          </p>

          <h2>Calorie-overschot: hoeveel is genoeg?</h2>
          <p>
            Spieropbouw vereist energie. Je kunt geen nieuw weefsel opbouwen zonder een
            calorie-overschot — meer energie binnenkrijgen dan je verbruikt. Maar het
            overschot hoeft niet groot te zijn.
          </p>
          <p>
            Onderzoek van Garthe et al. (2013) in het <em>International Journal of Sport
            Nutrition and Exercise Metabolism</em> vergeleek een grote bulk (overschot van
            +500 kcal/dag) met een kleine bulk (+250 kcal/dag). Conclusie: beide groepen
            bouwden vergelijkbare hoeveelheden spiermassa op, maar de kleine bulk groep
            vergaarde significant minder vetmassa. Een overschot van 200–300 kcal per dag
            is voor de meeste mensen ideaal — genoeg voor groei, niet genoeg voor onnodige
            vetopslag.
          </p>

          <h2>Koolhydraten: bondgenoot, geen vijand</h2>
          <p>
            Koolhydraten zijn de primaire brandstof voor intensieve krachttraining. Ze worden
            opgeslagen als glycogeen in spieren en lever en direct omgezet in energie tijdens
            zware sets. Een koolhydraatarm dieet tijdens krachttraining heeft directe
            consequenties voor je prestaties.
          </p>
          <p>
            Burke et al. (2011) toonden in een review in het <em>Journal of Sports Sciences</em>
            aan dat lage glycogeenvoorraden leiden tot verminderde trainingsprestaties,
            snellere vermoeidheid en verminderd herstel. Eet voldoende koolhydraten —
            zeker rondom je training — en je presteert beter en herstel sneller.
          </p>

          <h2>Timing: maakt het uit wanneer je eet?</h2>
          <p>
            Het "anabole venster" — het idee dat je binnen 30 minuten na training per se
            eiwitten moet eten — is grotendeels een mythe. Wat wél telt is je totale dagelijkse
            eiwitinname en een regelmatige verdeling over de dag.
          </p>
          <p>
            Schoenfeld & Aragon (2013) concludeerden in het <em>Journal of the International
            Society of Sports Nutrition</em> dat de timing van eiwitinname minder kritisch is
            dan eerder gedacht — mits de totale dagelijkse inname adequaat is. Focus op
            structurele eetpatronen, niet op het perfecte moment.
          </p>

          <h2>Praktisch samengevat</h2>
          <ul>
            <li>Eet 1,6–2,0 g eiwit per kg lichaamsgewicht per dag</li>
            <li>Zorg voor een klein calorie-overschot van 200–300 kcal</li>
            <li>Schrap koolhydraten niet — ze zijn je brandstof</li>
            <li>Verdeel eiwitten over 4–5 maaltijden per dag</li>
            <li>Consistentie in je eetpatroon is waardevoller dan perfecte timing</li>
          </ul>

          <p>
            Voeding hoeft niet ingewikkeld te zijn. Met de juiste basis gaat je lichaam
            werken voor je in plaats van tegen je. Wil je een persoonlijk voedingsplan
            dat past bij jouw leven en doelen? Neem contact op — de eerste kennismaking
            is altijd gratis.
          </p>

        </div>

        <div className="mt-16 border-t border-border pt-8">
          <p className="font-condensed font-bold text-xs tracking-widest uppercase text-white mb-4">Bronnen</p>
          <ul className="flex flex-col gap-2">
            {[
              'Phillips, S.M., & Van Loon, L.J.C. (2011). Dietary protein for athletes: From requirements to optimum adaptation. Journal of Sports Sciences, 29(S1), S29–S38.',
              'Morton, R.W., Murphy, K.T., McKellar, S.R., et al. (2018). A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength in healthy adults. British Journal of Sports Medicine, 52(6), 376–384.',
              'Garthe, I., Raastad, T., Refsnes, P.E., & Sundgot-Borgen, J. (2013). Effect of nutritional intervention on body composition and performance in elite athletes. European Journal of Sport Science, 13(3), 295–303.',
              'Burke, L.M., Hawley, J.A., Wong, S.H.S., & Jeukendrup, A.E. (2011). Carbohydrates for training and competition. Journal of Sports Sciences, 29(S1), S17–S27.',
              'Schoenfeld, B.J., & Aragon, A.A. (2013). Nutrient timing revisited: is there a post-exercise anabolic window? Journal of the International Society of Sports Nutrition, 10(1), 5.',
            ].map((ref, i) => (
              <li key={i} className="text-muted font-light text-xs leading-relaxed">
                {ref}
              </li>
            ))}
          </ul>
        </div>

        {/* Dienst link */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="font-condensed text-xs tracking-widest uppercase text-muted mb-3">Meer weten?</p>
          <TransitionLink href="/diensten#voeding" className="font-condensed font-bold text-sm tracking-widest uppercase text-accent hover:opacity-70 transition-opacity">
            Bekijk voeding &amp; leefstijl →
          </TransitionLink>
        </div>

        <div className="mt-8 bg-surface border border-border p-8">
          <p className="font-condensed font-black italic uppercase text-2xl text-white mb-2">Wil je een voedingsplan op maat?</p>
          <p className="text-muted font-light text-sm mb-6">Brendon maakt een plan dat past bij jouw leven — 30 min gratis kennismakingsgesprek, geen verplichtingen.</p>
          <WhatsAppButton label="Plan gratis kennismakingsgesprek" />
        </div>

      </article>
      <Footer />
    </main>
  )
}
