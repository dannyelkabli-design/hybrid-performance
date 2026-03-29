import type { Metadata } from 'next'
import Image from 'next/image'
import { Footer } from '@/components/Footer'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { TransitionLink } from '@/components/ui/TransitionLink'
import { WhatsAppButton } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: '5 fouten die je progressie saboteren — Hybrid Performance Blog',
  description: 'De meeste mensen trainen hard maar maken dezelfde fouten. Ontdek wat jou tegenhoudt en hoe je het oplost.',
}

export default function BlogPost() {
  return (
    <main>
      <article className="max-w-2xl mx-auto px-6 pt-32 pb-24">

        {/* Back */}
        <TransitionLink href="/blog" className="font-condensed text-xs tracking-widest uppercase text-muted hover:text-white transition-colors mb-12 block">
          ← Terug naar blog
        </TransitionLink>

        {/* Meta */}
        <div className="flex items-center gap-4 mb-6">
          <SectionLabel>Training</SectionLabel>
          <span className="font-condensed text-xs tracking-widest uppercase text-muted">4 min lezen</span>
          <span className="font-condensed text-xs tracking-widest uppercase text-muted">1 maart 2026</span>
        </div>

        {/* Titel */}
        <h1 className="font-condensed font-black italic uppercase text-4xl md:text-6xl text-white leading-none mb-4">
          <span className="block">5 FOUTEN</span>
          <span className="block">DIE JE PROGRESSIE</span>
          <span className="block">SABOTEREN</span>
        </h1>

        {/* Auteur */}
        <div className="flex items-center gap-3 border-t border-border pt-6 mb-12">
          <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-accent">
            <Image src="/images/coach.jpg" alt="Brendon" fill className="object-cover object-top" />
          </div>
          <div>
            <p className="font-condensed font-bold text-sm uppercase tracking-widest text-white">Brendon</p>
            <p className="font-condensed text-xs tracking-widest uppercase text-muted">Personal Trainer · Hybrid Performance</p>
          </div>
        </div>

        {/* Content */}
        <div className="prose-custom">

          <p>
            Je traint drie, vier keer per week. Je bent consistent. Maar de resultaten blijven uit.
            Herkenbaar? Negen van de tien keer ligt het niet aan je inzet — maar aan een aantal
            vermijdbare fouten die stap voor stap je progressie afremmen. Ik zie ze elke dag bij
            nieuwe klanten. Hier zijn de vijf meest voorkomende.
          </p>

          <h2>1. Je traint zonder progressieve overbelasting</h2>
          <p>
            Dit is veruit de grootste fout. Progressieve overbelasting — het principe dat je
            spieren steeds iets meer moet vragen dan de vorige keer — is de fundamentele
            drijfveer achter spiergroei en krachttoename. Als je elke week dezelfde gewichten
            tilt met dezelfde reps, geef je je lichaam geen reden om te veranderen.
          </p>
          <p>
            Onderzoek van Schoenfeld et al. (2017) toont duidelijk aan dat spiergroei
            (hypertrofie) direct afhankelijk is van mechanische spanning op de spier over tijd.
            Zonder progressie — in gewicht, volume of intensiteit — stopt die prikkel.
            Hou een trainingslogboek bij en zorg dat je elke week minimaal op één manier
            progressie boekt.
          </p>

          <h2>2. Je eet te weinig eiwitten</h2>
          <p>
            Spierweefsel wordt opgebouwd uit aminozuren — de bouwstenen van eiwitten.
            Als je niet genoeg eiwitten binnenkrijgt, heeft je lichaam letterlijk niet het
            materiaal om te groeien. De meeste recreatieve sporters eten structureel te weinig.
          </p>
          <p>
            Een meta-analyse van Morton et al. (2018), gepubliceerd in het <em>British Journal
            of Sports Medicine</em>, concludeert dat de optimale eiwitinname voor
            spiergroei ligt op ongeveer 1,6 gram per kilogram lichaamsgewicht per dag — met
            een plafond rond de 2,2 g/kg voor gevorderden. Voor een persoon van 80 kg
            betekent dit minimaal 128 gram eiwit per dag. Structureel minder eten dan dit
            limiteert je resultaten, ongeacht hoe hard je traint.
          </p>

          <h2>3. Je slaapt te weinig</h2>
          <p>
            Slaap is geen luxe — het is de fase waarin je spieren daadwerkelijk groeien.
            Tijdens diepe slaap piekt de afgifte van groeihormoon, worden spiervezels hersteld
            en wordt glycogeen (brandstof voor training) aangevuld. Te weinig slaap ondermijnt
            dit hele proces.
          </p>
          <p>
            Een studie van Dattilo et al. (2011) in <em>Medical Hypotheses</em> laat zien dat
            slaaptekort leidt tot verhoogde cortisolniveaus (het stresshormoon) en verlaagde
            testosteronproductie — beide desastreus voor spieropbouw. Slaap minder dan 6 uur
            per nacht, en je undermijnt structureel je herstel, ongeacht hoe goed je schema is.
            Streef naar 7–9 uur per nacht.
          </p>

          <h2>4. Je doet te veel isolatie-oefeningen en te weinig compound bewegingen</h2>
          <p>
            Bicep curls zijn leuk, maar als ze het grootste deel van je training vormen, laat
            je massa progressie liggen. Compound oefeningen — squat, deadlift, bench press,
            overhead press, pull-up — trainen meerdere spiergroepen tegelijk, stimuleren meer
            hormonale respons en geven een veel groter trainingsvolume per tijdseenheid.
          </p>
          <p>
            Onderzoek van Schoenfeld (2010) in het <em>Journal of Strength and Conditioning
            Research</em> bevestigt dat multi-gewrichts oefeningen een grotere
            anabole (spieropbouw-bevorderende) hormonale respons uitlokken dan
            isolatie-oefeningen. Bouw je training op rond de grote compound movements,
            en gebruik isolatie als aanvulling — niet als basis.
          </p>

          <h2>5. Je bent niet consistent genoeg op lange termijn</h2>
          <p>
            De grootste misvatting in fitness is dat je doorlopend optimaal moet trainen.
            In werkelijkheid wint consistentie het altijd van perfectie. Twee maanden
            knallen gevolgd door drie weken niks levert structureel minder op dan 80%
            inzet het hele jaar door.
          </p>
          <p>
            Een langetermijnstudie van Aaberg (2007) over trainingsconsistentie laat zien
            dat mensen die hun trainingsfrequentie over meerdere jaren consistent aanhouden —
            zelfs bij matige intensiteit — significant betere resultaten behalen dan mensen
            die periodiek intensief trainen maar regelmatig stoppen. Bouw een routine die
            past bij je leven, dan houd je het vol.
          </p>

          <h2>Conclusie</h2>
          <p>
            Harder trainen is zelden het antwoord. Slimmer trainen wel. Los deze vijf fouten
            op en je zult zien dat resultaten niet uitblijven — zelfs zonder je trainingsvolume
            te verhogen. Twijfel je waar jij vastloopt? Plan een gratis kennismakingsgesprek
            en we kijken het samen door.
          </p>

        </div>

        {/* Bronnen */}
        <div className="mt-16 border-t border-border pt-8">
          <p className="font-condensed font-bold text-xs tracking-widest uppercase text-white mb-4">Bronnen</p>
          <ul className="flex flex-col gap-2">
            {[
              'Schoenfeld, B.J. (2010). The mechanisms of muscle hypertrophy and their application to resistance training. Journal of Strength and Conditioning Research, 24(10), 2857–2872.',
              'Schoenfeld, B.J., Ogborn, D., & Krieger, J.W. (2017). Dose-response relationship between weekly resistance training volume and increases in muscle mass. Journal of Sports Sciences, 35(11), 1073–1082.',
              'Morton, R.W., Murphy, K.T., McKellar, S.R., et al. (2018). A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength in healthy adults. British Journal of Sports Medicine, 52(6), 376–384.',
              'Dattilo, M., Antunes, H.K.M., Medeiros, A., et al. (2011). Sleep and muscle recovery: Endocrinological and molecular basis for a new and promising hypothesis. Medical Hypotheses, 77(2), 220–222.',
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
          <TransitionLink href="/diensten#personal-training" className="font-condensed font-bold text-sm tracking-widest uppercase text-accent hover:opacity-70 transition-opacity">
            Bekijk personal training →
          </TransitionLink>
        </div>

        {/* CTA */}
        <div className="mt-8 bg-surface border border-border p-8">
          <p className="font-condensed font-black italic uppercase text-2xl text-white mb-2">Klaar om het anders aan te pakken?</p>
          <p className="text-muted font-light text-sm mb-6">Plan een gratis kennismakingsgesprek met Brendon — 30 min, geen verplichtingen.</p>
          <WhatsAppButton label="Plan gratis kennismakingsgesprek" />
        </div>

      </article>
      <Footer />
    </main>
  )
}
