import type { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { TransitionLink } from '@/components/ui/TransitionLink'
import { WhatsAppButton } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Waarom herstel net zo belangrijk is als training — Hybrid Performance Blog',
  description: 'Progressie maak je niet in de gym — maar erna. Slaap, rust en herstel zijn de vergeten pijlers van elk resultaat.',
}

export default function BlogPost() {
  return (
    <main>
      <article className="max-w-2xl mx-auto px-6 pt-32 pb-24">

        <TransitionLink href="/blog" className="font-condensed text-xs tracking-widest uppercase text-muted hover:text-white transition-colors mb-12 block">
          ← Terug naar blog
        </TransitionLink>

        <div className="flex items-center gap-4 mb-6">
          <SectionLabel>Lifestyle</SectionLabel>
          <span className="font-condensed text-xs tracking-widest uppercase text-muted">4 min lezen</span>
          <span className="font-condensed text-xs tracking-widest uppercase text-muted">20 januari 2026</span>
        </div>

        <h1 className="font-condensed font-black italic uppercase text-4xl md:text-6xl text-white leading-none mb-4">
          <span className="block">WAAROM HERSTEL</span>
          <span className="block">NET ZO BELANGRIJK</span>
          <span className="block">IS ALS TRAINING</span>
        </h1>

        <div className="flex items-center gap-3 border-t border-border pt-6 mb-12">
          <div>
            <p className="font-condensed font-bold text-sm uppercase tracking-widest text-white">Brendon</p>
            <p className="font-condensed text-xs tracking-widest uppercase text-muted">Coach — Hybrid Performance</p>
          </div>
        </div>

        <div className="prose-custom">

          <p>
            De meeste sporters begrijpen dat training essentieel is. Maar wat velen onderschatten
            is wat er <em>buiten</em> de gym gebeurt. Progressie — het sterker worden, de spiergroei,
            de vetverbranding — vindt niet plaats tijdens de training zelf. Het vindt plaats in de
            uren en dagen erna, terwijl jij herstelt. Slaap, rust en stressmanagement zijn geen
            bijzaak. Ze zijn de helft van het verhaal.
          </p>

          <h2>Wat er tijdens herstel in je lichaam gebeurt</h2>
          <p>
            Tijdens een intensieve trainingssessie beschadig je spierweefsel op microscopisch
            niveau. Dat klinkt alarmerend, maar het is precies het mechanisme achter spiergroei.
            Het lichaam reageert door de beschadigde vezels te repareren en te versterken —
            een proces dat eiwitsynthese heet. Dit proces vereist tijd, voedingsstoffen én rust.
          </p>
          <p>
            Onderzoek van Dattilo et al. (2011) in <em>Medical Hypotheses</em> beschrijft hoe
            slaap de primaire fase is voor musculaire herstel: tijdens diepe NREM-slaap piekt
            de afgifte van groeihormoon (GH), dat direct spierreparatie aanstuurt. Minder slaap
            betekent letterlijk minder groeihormoon en daarmee minder spiergroei — ongeacht
            hoe goed je training was.
          </p>

          <h2>Slaap: de meest onderschatte prestatievariabele</h2>
          <p>
            Slaaptekort heeft directe, meetbare effecten op sportprestatie. Een studie van
            Mah et al. (2011) in <em>Sleep</em> onderzocht basketballers van Stanford University.
            Spelers die hun slaap verlengden naar 10 uur per nacht verbeterden significant op
            sprintsnelheid, reactietijd en schietnauwkeurigheid. De onderzoekers concludeerden
            dat slaapverlengng een van de meest impactvolle en ondergewaardeerde
            prestatiebevorderende interventies is.
          </p>
          <p>
            Voor krachttraining geldt hetzelfde principe. Leproult & Van Cauter (2011)
            publiceerden in <em>JAMA</em> dat één week van slaapbeperking tot 5 uur per nacht
            de testosteronspiegels bij jonge mannen met 10–15% verlaagde — vergelijkbaar
            met het effect van 10–15 jaar ouder worden. Testosteron is één van de
            voornaamste anabole hormonen. Structureel te weinig slapen saboteert je hormoonprofiel.
          </p>
          <p>
            Streef naar <strong>7–9 uur kwalitatieve slaap</strong> per nacht. Dit is geen luxe —
            het is een trainingsvariabele.
          </p>

          <h2>Overtraining: wanneer meer minder wordt</h2>
          <p>
            Overtraining — het trainen met onvoldoende herstel — leidt tot het tegenovergestelde
            van wat je wilt. Chronisch verhoogde cortisolniveaus, verminderde kracht,
            verslechterd immuunsysteem en verhoogd blessurerisico zijn de gevolgen.
          </p>
          <p>
            Meeusen et al. (2013) publiceerden in het <em>European Journal of Sport Science</em>
            een uitgebreide consensus over het overtrainingssyndroom. Zij concludeerden dat
            het primaire hersteldeficit — niet het trainingsvolume op zichzelf — de oorzaak is
            van prestatieverlies en fysiologische schade. De oplossing is niet minder hard
            trainen, maar slimmer plannen: voldoende rustdagen inbouwen en periodisering
            toepassen.
          </p>

          <h2>Actief herstel: bewegen zonder te belasten</h2>
          <p>
            Volledige rust is niet altijd de beste strategie op herstelsdagen.
            Lichte activiteit — wandelen, fietsen op lage intensiteit, zwemmen of mobiliteitswerk —
            stimuleert de doorbloeding en versnelt de afvoer van afvalstoffen uit spierweefsel
            zonder nieuwe schade te veroorzaken.
          </p>
          <p>
            Dupuy et al. (2018) voerden in <em>Frontiers in Physiology</em> een meta-analyse
            uit naar verschillende herstelmethoden. Actief herstel en massagetherapie bleken
            het meest effectief in het verminderen van spierpijn (DOMS) en het versnellen
            van krachtherstel na intensieve training. Passieve rust scoorde lager dan actieve
            alternatieven.
          </p>

          <h2>Stress: de verborgen blokker</h2>
          <p>
            Chronische psychologische stress verhoogt cortisol — hetzelfde hormoon dat bij
            overtraining omhoog gaat. Je lichaam maakt geen onderscheid tussen werkstress
            en fysieke stress. Beiden verhogen cortisol, beiden remmen het anabole proces.
          </p>
          <p>
            Stressmanagement is daarom onderdeel van een goed trainingsplan. Dat betekent
            niet dat je een meditatiegoeroe hoeft te worden — maar het betekent wel dat je
            serieus kijkt naar je totale belasting: werk, relaties, slaap, training. Alles telt mee.
          </p>

          <h2>Praktisch: zo optimaliseer je je herstel</h2>
          <ul>
            <li>Slaap 7–9 uur per nacht, op vaste tijden</li>
            <li>Plan minimaal 1–2 volledige rustdagen per week</li>
            <li>Gebruik hersteldagen voor lichte activiteit, niet voor extra training</li>
            <li>Eet voldoende — calorietekort vertraagt herstel</li>
            <li>Minimaliseer alcohol: het verstoort slaapkwaliteit en eiwitsynthese</li>
            <li>Beheer werkstress als onderdeel van je sportprogramma</li>
          </ul>

          <p>
            Herstel is niet passief. Het is een actieve keuze die je elke dag maakt.
            De sporters die het best presteren op de lange termijn zijn niet de mensen
            die het hardst trainen — maar de mensen die het slimst herstellen.
          </p>

        </div>

        <div className="mt-16 border-t border-border pt-8">
          <p className="font-condensed font-bold text-xs tracking-widest uppercase text-white mb-4">Bronnen</p>
          <ul className="flex flex-col gap-2">
            {[
              'Dattilo, M., Antunes, H.K.M., Medeiros, A., et al. (2011). Sleep and muscle recovery: Endocrinological and molecular basis for a new and promising hypothesis. Medical Hypotheses, 77(2), 220–222.',
              'Mah, C.D., Mah, K.E., Kezirian, E.J., & Dement, W.C. (2011). The effects of sleep extension on the athletic performance of collegiate basketball players. Sleep, 34(7), 943–950.',
              'Leproult, R., & Van Cauter, E. (2011). Effect of 1 week of sleep restriction on testosterone levels in young healthy men. JAMA, 305(21), 2173–2174.',
              'Meeusen, R., Duclos, M., Foster, C., et al. (2013). Prevention, diagnosis, and treatment of the overtraining syndrome: joint consensus statement of the European College of Sport Science and the American College of Sports Medicine. European Journal of Sport Science, 13(1), 1–24.',
              'Dupuy, O., Douzi, W., Theurot, D., Bosquet, L., & Dugué, B. (2018). An evidence-based approach for choosing post-exercise recovery techniques to reduce markers of muscle damage, soreness, fatigue, and inflammation. Frontiers in Physiology, 9, 403.',
            ].map((ref, i) => (
              <li key={i} className="text-muted font-light text-xs leading-relaxed">
                {ref}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 bg-surface border border-border p-8">
          <p className="font-condensed font-black italic uppercase text-2xl text-white mb-2">Wil je een programma dat ook herstel meeneemt?</p>
          <p className="text-muted font-light text-sm mb-6">Bij Hybrid Performance kijken we naar het complete plaatje. Plan een gratis kennismaking.</p>
          <WhatsAppButton label="Plan gratis kennismaking" />
        </div>

      </article>
      <Footer />
    </main>
  )
}
