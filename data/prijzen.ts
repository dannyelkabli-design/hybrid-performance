export type Pakket = {
  id: string
  name: string
  price: string
  period: string
  highlight: boolean
  features: string[]
}

export const pakketten: Pakket[] = [
  {
    id: 'basis',
    name: 'Basis',
    price: '€ 79',
    period: '/ maand',
    highlight: false,
    features: [
      'Online trainingsschema',
      'Maandelijkse check-in',
      'WhatsApp support',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '€ 149',
    period: '/ maand',
    highlight: true,
    features: [
      'Alles uit Basis',
      'Wekelijkse check-ins',
      'Voedingsschema op maat',
      'Video feedback op techniek',
    ],
  },
  {
    id: 'vip',
    name: 'VIP',
    price: 'Op aanvraag',
    period: '',
    highlight: false,
    features: [
      'Alles uit Premium',
      '2x/week personal training',
      'Directe lijn 24/7',
      'Volledig maatwerk',
    ],
  },
]
