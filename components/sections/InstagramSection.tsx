import Image from 'next/image'
import { SectionLabel } from '@/components/ui/SectionLabel'

const posts = [
  { src: '/images/hp-1.jpg',      alt: 'Personal training sessie' },
  { src: '/images/hp-2.jpg',      alt: 'Groepstraining' },
  { src: '/images/hp-3.jpg',      alt: 'Training in de gym' },
  { src: '/images/hp-over-3.jpg', alt: 'Gymruimte' },
  { src: '/images/hp-over-5.jpg', alt: 'Bokskamer' },
  { src: '/images/hp-over-2.jpg', alt: 'Nutrition bar' },
]

export function InstagramSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <SectionLabel className="mb-3 block">Volg ons</SectionLabel>
            <h2 className="font-condensed font-black italic uppercase text-5xl text-white leading-none">
              <span className="block">@HYBRID.</span>
              <span className="block">PERFORMANCE.GYM</span>
            </h2>
          </div>
          <a
            href="https://instagram.com/hybrid.performance.gym"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 font-condensed font-bold text-xs tracking-widest uppercase px-7 py-4 border border-white text-white hover:opacity-70 transition-opacity"
          >
            Volg op Instagram →
          </a>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {posts.map((post) => (
            <a
              key={post.src}
              href="https://instagram.com/hybrid.performance.gym"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
