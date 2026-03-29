import type { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { TransitionLink } from '@/components/ui/TransitionLink'
import { WhatsAppButton } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Online coaching vs. personal training — Hybrid Performance Blog',
  description: 'Beide hebben hun voordelen. We zetten de verschillen op een rij zodat jij de juiste keuze maakt.',
}

export default function BlogPost() {
  return (
    <main>
      <article className="max-w-2xl mx-auto px-6 pt-32 pb-24">

        <TransitionLink href="/blog" className="font-condensed text-xs tracking-widest uppercase text-muted hover:text-white transition-colors mb-12 block">
          ← Terug naar blog
        </TransitionLink>

        <div className="flex items-center gap-4 mb-6">
          <SectionLabel>Coaching</SectionLabel>
          <span className="font-condensed text-xs tracking-widest uppercase text-muted">3 min lezen</span>
          <span className="font-condensed text-xs tracking-widest uppercase text-muted">1 februari 2026</span>
        </div>

        <h1 className="font-condensed font-black italic uppercase text-4xl md:text-6xl text-white leading-none mb-4">
          <span className="block">ONLINE COACHING</span>
          <span className="block">VS. PERSONAL</span>
          <span className="block">TRAINING</span>
        </h1>

        <div className="flex items-center gap-3 border-t border-border pt-6 mb-12">
          <div>
            <p className="font-condensed font-bold text-sm uppercase tracking-widest text-white">Brendon</p>
            <p className="font-condensed text-xs tracking-widest uppercase text-muted">Coach — Hybrid Performance</p>
          </div>
        </div>

        <div className="prose-custom">

          <p>
            Een van de vragen die ik het vaakst krijg: "Wat is beter — online coaching of
            personal training?" Het eerlijke antwoord is dat het afhangt van je situatie,
            je doelen en je manier van werken. Beide vormen van begeleiding zijn effectief
            bewezen — maar voor verschillende mensen en omstandigheden.
          </p>

          <h2>Wat zegt de wetenschap over begeleiding in het algemeen?</h2>
          <p>
            Begeleiding werkt. Dat is wetenschappelijk onomstreden. Een studie van
            Ratamess et al. (2008) in het <em>Journal of Strength and Conditioning Research</em>
            toonde aan dat deelnemers die trainden met een personal trainer significant meer
            gewicht tilden en hogere trainingsintensiteiten haalden dan deelnemers die
            zelfstandig trainden — ook bij gelijke ervaring. Structuur, accountability en
            expertise maken het verschil.
          </p>

          <h2>Personal training: wanneer is het de beste keuze?</h2>
          <p>
            Personal training — op locatie, één-op-één — is het meest directe en intensieve
            begeleidingsvorm. De coach is fysiek aanwezig, corrigeert je techniek in real-time
            en past de belasting aan op basis van wat hij direct waarneemt.
          </p>
          <p>
            Dit is met name waardevol voor:
          </p>
          <ul>
            <li><strong>Beginners</strong> — die techniek moeten aanleren voordat ze zelfstandig kunnen trainen</li>
            <li><strong>Mensen met blessures of bewegingsbeperkingen</strong> — waar live correctie essentieel is</li>
            <li><strong>Mensen die externe structuur nodig hebben</strong> — een vaste afspraak is moeilijker te missen</li>
            <li><strong>Gevorderden die een plateau doorbreken</strong> — die de directe intensiteitssturing nodig hebben</li>
          </ul>
          <p>
            Burke et al. (2006) lieten in een RCT (randomized controlled trial) zien dat
            deelnemers met live supervisie hun trainingsconsistentie significant beter
            aanhielden dan een controlegroep zonder begeleiding. De sociale component —
            een coach die op je wacht — verhoogt de intrinsieke motivatie aanzienlijk.
          </p>

          <h2>Online coaching: wanneer werkt het net zo goed?</h2>
          <p>
            Online coaching heeft de afgelopen jaren enorm aan kwaliteit gewonnen.
            Een gepersonaliseerd schema, wekelijkse check-ins via video of WhatsApp,
            voedingsbegeleiding en video-analyse van je uitvoering zijn bij Hybrid Performance
            allemaal onderdeel van het programma.
          </p>
          <p>
            Onderzoek van Sforzo et al. (2018) in het <em>American Journal of Health
            Promotion</em> naar "health coaching" op afstand concludeerde dat digitale
            begeleiding met regelmatige contact-momenten vergelijkbare gedragsverandering
            en gezondheidsresultaten oplevert als face-to-face coaching — mits de begeleiding
            gestructureerd en persoonlijk is.
          </p>
          <p>
            Online coaching is ideaal voor:
          </p>
          <ul>
            <li><strong>Mensen met een druk of wisselend schema</strong> — je traint wanneer het uitkomt</li>
            <li><strong>Gevorderden die de basisprincipes kennen</strong> — en voornamelijk structuur en accountability nodig hebben</li>
            <li><strong>Mensen die niet in de buurt wonen</strong> — of liever vanuit eigen gym of thuis trainen</li>
            <li><strong>Budgetbewuste sporters</strong> — online coaching is toegankelijker geprijsd</li>
          </ul>

          <h2>De combinatie: het beste van beide werelden</h2>
          <p>
            Bij Hybrid Performance kiezen sommige klanten voor een hybride aanpak:
            online coaching als basis, aangevuld met periodieke live sessies voor
            techniekcheck, programma-evaluatie en intensiteitspieken. Dit is voor
            veel mensen de meest effectieve én efficiënte optie.
          </p>

          <h2>Hoe kies je?</h2>
          <p>
            Stel jezelf drie vragen:
          </p>
          <ul>
            <li>Hoe zeker ben ik van mijn techniek op basisoefeningen zoals squat, deadlift en bench press?</li>
            <li>Heb ik externe accountability nodig om consistent te blijven?</li>
            <li>Wat past bij mijn agenda en budget?</li>
          </ul>
          <p>
            Weet je het antwoord nog niet? Dan is een gratis kennismakingsgesprek de snelste
            manier om helderheid te krijgen. Ik kijk samen met je naar wat het beste bij je past.
          </p>

        </div>

        <div className="mt-16 border-t border-border pt-8">
          <p className="font-condensed font-bold text-xs tracking-widest uppercase text-white mb-4">Bronnen</p>
          <ul className="flex flex-col gap-2">
            {[
              'Ratamess, N.A., Faigenbaum, A.D., Hoffman, J.R., & Kang, J. (2008). Self-selected resistance training intensity in healthy women: the influence of a personal trainer. Journal of Strength and Conditioning Research, 22(1), 103–111.',
              'Burke, S.M., Carron, A.V., Eys, M.A., Ntoumanis, N., & Estabrooks, P.A. (2006). Group versus individual approach? A meta-analysis of the effectiveness of interventions to promote physical activity. Sport and Exercise Psychology Review, 2(1), 19–35.',
              'Sforzo, G.A., Kaye, M.P., Todorova, I., et al. (2018). Compendium of the Health and Wellness Coaching Literature. American Journal of Health Promotion, 32(7), 1663–1697.',
            ].map((ref, i) => (
              <li key={i} className="text-muted font-light text-xs leading-relaxed">
                {ref}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 bg-surface border border-border p-8">
          <p className="font-condensed font-black italic uppercase text-2xl text-white mb-2">Nog niet zeker welke vorm bij je past?</p>
          <p className="text-muted font-light text-sm mb-6">Plan een gratis gesprek met Brendon en we bepalen samen de beste aanpak voor jou.</p>
          <WhatsAppButton label="Plan gratis kennismaking" />
        </div>

      </article>
      <Footer />
    </main>
  )
}
