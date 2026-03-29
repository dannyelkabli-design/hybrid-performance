import type { Metadata } from 'next'
import { PageHeader } from '@/components/ui/PageHeader'
import { Footer } from '@/components/Footer'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { blogPosts } from '@/data/blog'
import { TransitionLink } from '@/components/ui/TransitionLink'

export const metadata: Metadata = {
  title: 'Blog & Tips — Hybrid Performance | Personal Trainer Obdam',
  description: 'Trainingstips, voedingsadvies en coaching inzichten van Brendon — personal trainer in Obdam (regio Alkmaar & Heerhugowaard). Gebaseerd op wetenschappelijk onderzoek.',
  alternates: { canonical: 'https://hybrid-performance.nl/blog' },
}

export default function BlogPage() {
  return (
    <main>
      <PageHeader label="Kennis & Tips" title="BLOG" />
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <TransitionLink
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-surface border border-border hover:border-accent/50 transition-colors p-6 gap-4"
            >
              <div className="flex items-center justify-between">
                <SectionLabel>{post.category}</SectionLabel>
                <span className="font-condensed text-xs tracking-widest uppercase text-muted">
                  {post.readTime}
                </span>
              </div>
              <h2 className="font-condensed font-black italic uppercase text-xl text-white leading-tight group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              <p className="text-muted font-light text-sm leading-relaxed flex-1">
                {post.excerpt}
              </p>
              <span className="font-condensed font-bold text-xs tracking-widest uppercase text-accent">
                Lees meer →
              </span>
            </TransitionLink>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
