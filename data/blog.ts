export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'fouten-bij-krachttraining',
    title: '5 fouten die je progressie saboteren',
    excerpt: 'De meeste mensen trainen hard maar maken dezelfde fouten. Ontdek wat jou tegenhoudt en hoe je het oplost.',
    date: '2026-03-01',
    category: 'Training',
    readTime: '4 min',
  },
  {
    slug: 'voeding-bij-spieropbouw',
    title: 'Hoe werkt voeding bij spieropbouw?',
    excerpt: 'Spieren bouwen is voor 40% training en 60% voeding. We leggen uit wat je echt moet weten — zonder dieet-onzin.',
    date: '2026-02-15',
    category: 'Voeding',
    readTime: '5 min',
  },
  {
    slug: 'online-coaching-vs-personal-training',
    title: 'Online coaching vs. personal training: wat past bij jou?',
    excerpt: 'Beide hebben hun voordelen. We zetten de verschillen op een rij zodat jij de juiste keuze maakt.',
    date: '2026-02-01',
    category: 'Coaching',
    readTime: '3 min',
  },
  {
    slug: 'belang-van-herstel',
    title: 'Waarom herstel net zo belangrijk is als training',
    excerpt: 'Progressie maak je niet in de gym — maar erna. Slaap, rust en herstel zijn de vergeten pijlers van elk resultaat.',
    date: '2026-01-20',
    category: 'Lifestyle',
    readTime: '4 min',
  },
  {
    slug: 'beginnen-met-krachttraining',
    title: 'Beginnen met krachttraining: alles wat je moet weten',
    excerpt: 'Nog nooit met gewichten getraind? Geen probleem. Dit is alles wat je nodig hebt om goed te starten.',
    date: '2026-01-05',
    category: 'Training',
    readTime: '6 min',
  },
]
