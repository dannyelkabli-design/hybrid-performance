import { SectionLabel } from '@/components/ui/SectionLabel'

const faqs = [
  {
    question: 'Hoe start ik?',
    answer:
      'Stuur ons een bericht via WhatsApp of het contactformulier. We plannen een gratis kennismakingsgesprek en kijken samen wat het beste bij je past.',
  },
  {
    question: 'Kan ik gratis proeftraining?',
    answer:
      'Ja, we bieden een gratis kennismakingssessie aan. Zo kun je de gym bekijken, de coach leren kennen en voelen of het bij je past — zonder verplichtingen.',
  },
  {
    question: 'Wat kost personal training?',
    answer:
      'De kosten zijn afhankelijk van het pakket. Online coaching start vanaf €79/maand, personal training op locatie op aanvraag. Bekijk onze pakketten of neem contact op voor een persoonlijke offerte.',
  },
  {
    question: 'Hoe lang duurt een sessie?',
    answer:
      'Een personal training sessie duurt gemiddeld 60 minuten. De intake en evaluatiegesprekken duren 30-45 minuten.',
  },
  {
    question: 'Is er parkeergelegenheid?',
    answer:
      'Ja, er is gratis parkeergelegenheid direct bij de gym. Ons adres is Vaart 8, Obdam.',
  },
  {
    question: 'Kan ik ook online begeleid worden?',
    answer:
      'Absoluut. Ons online coachingprogramma is precies even persoonlijk als live begeleiding — inclusief schema op maat, wekelijkse check-ins en directe WhatsApp support.',
  },
  {
    question: 'Voor wie is Hybrid Performance?',
    answer:
      'Voor iedereen die serieus aan de slag wil — of je nu beginner bent of gevorderd. We werken met mensen van alle niveaus en passen de aanpak volledig aan op jouw situatie.',
  },
]

export function FAQSection() {
  return (
    <section className="py-24 bg-background">
      <style>{`
        .faq-icon {
          display: inline-block;
          transition: transform 0.2s;
        }
        details[open] .faq-icon {
          transform: rotate(45deg);
        }
      `}</style>

      <div className="max-w-3xl mx-auto px-6">
        <SectionLabel>Veelgestelde vragen</SectionLabel>
        <h2 className="font-condensed font-black italic uppercase text-4xl md:text-5xl text-white leading-none mb-12">
          <span className="block">VEEL</span>
          <span className="block">GESTELDE VRAGEN</span>
        </h2>

        {faqs.map((item) => (
          <details key={item.question} className="border-t border-border">
            <summary className="font-condensed font-bold text-sm md:text-base uppercase tracking-widest text-white py-5 cursor-pointer list-none flex justify-between items-center">
              {item.question}
              <span className="faq-icon ml-4 text-accent text-xl leading-none">+</span>
            </summary>
            <p className="text-muted font-light text-sm leading-relaxed pb-5">
              {item.answer}
            </p>
          </details>
        ))}

        <div className="border-t border-border" />
      </div>
    </section>
  )
}
