import { SectionLabel } from '@/components/ui/SectionLabel'

const reviews = [
  {
    quote:
      'Na jarenlang op eigen houtje trainen was ik vast gelopen. Hybrid Performance heeft mij laten zien hoe ik écht progressie kan boeken. Al 6 maanden bezig en sterker dan ooit.',
    name: 'Mark V.',
    type: 'Personal Training klant',
  },
  {
    quote:
      'De online coaching is perfect voor mijn drukke schema. Ik train wanneer het uitkomt en heb altijd iemand die meekijkt. Binnen 4 maanden mijn eerste 100kg squat.',
    name: 'Sarah K.',
    type: 'Online Coaching klant',
  },
  {
    quote:
      'Eindelijk een coach die niet alleen naar je training kijkt maar ook naar je voeding en slaap. Het totaalplaatje maakt het verschil.',
    name: 'Daan R.',
    type: 'VIP klant',
  },
  {
    quote:
      'Ik was sceptisch over online coaching maar dit werkt echt. Wekelijkse check-ins houden je scherp en de WhatsApp support is goud waard.',
    name: 'Femke de B.',
    type: 'Online Coaching klant',
  },
  {
    quote:
      'Professioneel, to the point en echt resultaatgericht. Geen onzin, gewoon werken aan je doel. Ik ben inmiddels 14kg afgevallen en voel me beter dan ooit.',
    name: 'Rens M.',
    type: 'Personal Training klant',
  },
]

export function ReviewsSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel>Wat klanten zeggen</SectionLabel>
        <h2 className="font-condensed font-black italic uppercase text-4xl md:text-5xl text-white leading-none mb-12">
          <span className="block">ECHTE</span>
          <span className="block">RESULTATEN</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-surface border border-border p-6 flex flex-col gap-4"
            >
              <span className="text-accent text-sm">★★★★★</span>
              <p className="text-white font-light text-sm leading-relaxed italic flex-1">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div>
                <p className="font-condensed font-bold text-xs tracking-widest uppercase text-white">
                  {review.name}
                </p>
                <p className="font-condensed text-xs tracking-widest uppercase text-muted">
                  {review.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
