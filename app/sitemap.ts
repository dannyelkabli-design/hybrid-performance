import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://hybrid-performance.nl'
  const now = new Date()

  return [
    { url: base,                                          lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/diensten`,                            lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/over-ons`,                            lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/prijzen`,                             lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`,                             lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/personal-trainer-alkmaar`,            lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/personal-trainer-heerhugowaard`,      lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/blog`,                                lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${base}/blog/fouten-bij-krachttraining`,      lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${base}/blog/voeding-bij-spieropbouw`,        lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${base}/blog/online-coaching-vs-personal-training`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/blog/belang-van-herstel`,             lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${base}/blog/beginnen-met-krachttraining`,    lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },
  ]
}
