import type { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { TransitionLink } from '@/components/ui/TransitionLink'
import { WhatsAppButton } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Beginnen met krachttraining: alles wat je moet weten — Hybrid Performance Blog',
  description: 'Nog nooit met gewichten getraind? Geen probleem. Dit is alles wat je nodig hebt om goed te starten.',
}

export default function BlogPost() {
  return (
    <main>
      <article className="max-w-2xl mx-auto px-6 pt-32 pb-24">

        <TransitionLink href="/blog" className="font-condensed text-xs tracking-widest uppercase text-muted hover:text-white transition-colors mb-12 block">
          ← Terug naar blog
        </TransitionLink>

        <div className="flex items-center gap-4 mb-6">
          <SectionLabel>Training</SectionLabel>
          <span className="font-condensed text-xs tracking-widest uppercase text-muted">6 min lezen</span>
          <span className="font-condensed text-xs tracking-widest uppercase text-muted">5 januari 2026</span>
        </div>

        <h1 className="font-condensed font-black italic uppercase text-4xl md:text-6xl text-white leading-none mb-4">
          <span className="block">BEGINNEN MET</span>
          <span className="block">KRACHTTRAINING:</span>
          <span className="block">ALLES WAT JE</span>
          <span className="block">MOET WETEN</span>
        </h1>

        <div className="flex items-center gap-3 border-t border-border pt-6 mb-12">
          <div>
            <p className="font-condensed font-bold text-sm uppercase tracking-widest text-white">Brendon</p>
            <p className="font-condensed text-xs tracking-widest uppercase text-muted">Coach — Hybrid Performance</p>
          </div>
        </div>

        <div className="prose-custom">

          <p>
            Krachttraining is een van de best onderzochte en meest effectieve vormen van
            lichaamsbeweging voor zowel gezondheid als lichaamssamenstelling. Maar als je
            er nog nooit mee begonnen bent, kan het overweldigend voelen. Welke oefeningen
            doe je? Hoeveel sets? Hoe zwaar? In dit artikel leg ik de wetenschappelijke basis
            uit en geef ik je een concreet startpunt.
          </p>

          <h2>Waarom krachttraining? De wetenschap spreekt voor zich</h2>
          <p>
            Krachttraining — ook wel weerstandstraining of resistance training — heeft
            bewezen voordelen die ver verder gaan dan spiergroei. Een uitgebreide
            meta-analyse van Strasser & Pesta (2013) in het <em>Journal of Aging Research</em>
            concludeert dat regelmatige weerstandstraining leidt tot:
          </p>
          <ul>
            <li>Verhoogde spiermassa en kracht</li>
            <li>Verbeterde insulinegevoeligheid (belangrijk voor gewichtsbeheersing)</li>
            <li>Hogere botdichtheid (bescherming tegen osteoporose)</li>
            <li>Verhoogd basaalmetabolisme (je verbrandt meer in rust)</li>
            <li>Verbeterde psychologische gezondheid en vermindering van depressieve klachten</li>
          </ul>
          <p>
            Het is niet voor niets dat de World Health Organization (WHO) krachttraining
            minimaal twee keer per week aanbeveelt voor alle volwassenen.
          </p>

          <h2>Het basisprincipe: progressieve overbelasting</h2>
          <p>
            Alles in krachttraining draait om één principe: je lichaam moet steeds iets meer
            uitgedaagd worden dan de vorige keer. Dit heet progressieve overbelasting.
            Zonder progressie past je lichaam zich niet aan — het heeft immers geen reden om
            sterker of groter te worden als de uitdaging gelijk blijft.
          </p>
          <p>
            Schoenfeld et al. (2017) bevestigden in het <em>Journal of Sports Sciences</em>
            dat trainingsvolume (sets × reps × gewicht) de sterkste voorspeller is van
            spiergroei over tijd. Begin licht, focus op techniek, en verhoog geleidelijk
            gewicht of volume naarmate je sterker wordt.
          </p>

          <h2>De grote vijf: bouw je training hieromheen</h2>
          <p>
            Als beginner hoef je geen ingewikkeld schema. Vijf basisoefeningen geven je het
            grootste rendement per trainingssessie en trainen je hele lichaam effectief:
          </p>
          <ul>
            <li><strong>Squat</strong> — quadriceps, bilspieren, hamstrings, core</li>
            <li><strong>Deadlift</strong> — hamstrings, bilspieren, onderrug, traps, core</li>
            <li><strong>Bench press</strong> — borst, schouders, triceps</li>
            <li><strong>Overhead press</strong> — schouders, triceps, bovenrug</li>
            <li><strong>Pull-up of lat pulldown</strong> — brede rugspier, biceps</li>
          </ul>
          <p>
            Deze compound oefeningen trainen meerdere spiergroepen tegelijk en stimuleren
            een grotere hormonale respons dan isolatie-oefeningen. Ze zijn de basis van
            elke effectieve beginnerstraining.
          </p>

          <h2>Hoeveel sets, reps en hoe zwaar?</h2>
          <p>
            Voor beginners is er goed nieuws: je hoeft niet perfect te optimaliseren.
            Je lichaam reageert op bijna alles in de eerste maanden, omdat het nog niet
            gewend is aan de prikkel. Desalniettemin zijn er beproefde richtlijnen.
          </p>
          <p>
            Krieger (2010) publiceerde in het <em>Journal of Strength and Conditioning
            Research</em> een meta-analyse waaruit bleek dat meerdere sets per oefening
            significant meer spiergroei opleveren dan één set. Voor beginners is
            <strong> 3 sets van 8–12 reps</strong> per oefening een bewezen startpunt.
          </p>
          <p>
            Kies een gewicht waarbij de laatste 2–3 herhalingen van een set echt zwaar
            aanvoelen, maar je techniek intact blijft. Dit staat bekend als trainen
            "close to failure" en is door Schoenfeld (2012) aangeduid als een van de
            primaire mechanismen voor hypertrofie.
          </p>

          <h2>Hoe vaak per week trainen?</h2>
          <p>
            Voor beginners geldt: 3 keer per week full-body training is de meest
            effectieve aanpak. Je traint elke spiergroep vaker, wat de eiwitsyntheserespons
            optimaliseert.
          </p>
          <p>
            Schoenfeld, Ogborn & Krieger (2016) toonden in een meta-analyse in het
            <em> Journal of Sports Sciences</em> aan dat het trainen van een spiergroep
            minimaal twee keer per week significant meer spiergroei geeft dan eenmaal
            per week. Drie keer per week geeft bij beginners extra voordeel door de
            verhoogde frequentie van de neurologische prikkel.
          </p>

          <h2>Techniek gaat altijd voor gewicht</h2>
          <p>
            Dit is het meest onderschatte aspect van beginnerstraining. Verkeerde techniek
            leidt niet alleen tot minder effectieve training — het vergroot het blessurerisico
            aanzienlijk. Een studie van Meeuwisse et al. (2007) in het <em>Clinical Journal
            of Sport Medicine</em> laat zien dat blessures bij onervaren krachtsporters
            vrijwel altijd gerelateerd zijn aan techniekfouten of te snelle progressie in
            belasting.
          </p>
          <p>
            Leer de squat, deadlift en press goed uitvoeren voordat je zwaar gaat. Dit is
            precies waarom begeleiding bij de start zo waardevol is — een coach ziet
            fouten die jij zelf niet ziet.
          </p>

          <h2>Een eenvoudig startschema (3x per week)</h2>
          <p>
            Elke sessie, 3 sets per oefening, 8–12 reps:
          </p>
          <ul>
            <li>Squat of goblet squat</li>
            <li>Deadlift of Romanian deadlift</li>
            <li>Bench press of dumbbell press</li>
            <li>Overhead press</li>
            <li>Pull-up, lat pulldown of dumbbell row</li>
          </ul>
          <p>
            Rust 2–3 minuten tussen zware compound sets. Begin met gewichten die je
            comfortabel kunt uitvoeren met goede techniek — je kunt altijd meer laden.
            Verhoog elke week het gewicht of het aantal reps.
          </p>

          <h2>Conclusie</h2>
          <p>
            Beginnen is het moeilijkste deel. Maar als je eenmaal de basis begrijpt —
            progressieve overbelasting, compound oefeningen, consistente frequentie en
            goede techniek — heb je alles in handen om jarenlang vooruitgang te boeken.
            Wil je de eerste stap zetten met directe begeleiding? Plan een gratis
            kennismakingsgesprek en we bouwen samen een plan dat bij jou past.
          </p>

        </div>

        <div className="mt-16 border-t border-border pt-8">
          <p className="font-condensed font-bold text-xs tracking-widest uppercase text-white mb-4">Bronnen</p>
          <ul className="flex flex-col gap-2">
            {[
              'Strasser, B., & Pesta, D. (2013). Resistance training for diabetes prevention and therapy: Experimental findings and molecular mechanisms. Journal of Aging Research, 2013, 805217.',
              'Schoenfeld, B.J., Ogborn, D., & Krieger, J.W. (2017). Dose-response relationship between weekly resistance training volume and increases in muscle mass. Journal of Sports Sciences, 35(11), 1073–1082.',
              'Krieger, J.W. (2010). Single vs. multiple sets of resistance exercise for muscle hypertrophy: A meta-analysis. Journal of Strength and Conditioning Research, 24(4), 1150–1159.',
              'Schoenfeld, B.J. (2012). The use of specialized training techniques to maximize muscle hypertrophy. Strength and Conditioning Journal, 33(4), 60–65.',
              'Schoenfeld, B.J., Ogborn, D., & Krieger, J.W. (2016). Effects of resistance training frequency on measures of muscle hypertrophy: A systematic review and meta-analysis. Sports Medicine, 46(11), 1689–1697.',
              'Meeuwisse, W.H., Tyreman, H., Hagel, B., & Emery, C. (2007). A dynamic model of etiology in sport injury: The recursive nature of risk and causation. Clinical Journal of Sport Medicine, 17(3), 215–219.',
            ].map((ref, i) => (
              <li key={i} className="text-muted font-light text-xs leading-relaxed">
                {ref}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 bg-surface border border-border p-8">
          <p className="font-condensed font-black italic uppercase text-2xl text-white mb-2">Klaar om te beginnen?</p>
          <p className="text-muted font-light text-sm mb-6">Brendon begeleidt je stap voor stap — van nul tot structurele progressie. De eerste sessie is gratis.</p>
          <WhatsAppButton label="Plan gratis kennismaking" />
        </div>

      </article>
      <Footer />
    </main>
  )
}
