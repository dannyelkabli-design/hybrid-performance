import Link from 'next/link'
import Image from 'next/image'
import { TransitionLink } from '@/components/ui/TransitionLink'

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Hybrid Performance" width={32} height={32} className="rounded-full" />
            <span className="font-condensed font-black text-sm tracking-[3px] uppercase">
              Hybrid Performance
            </span>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: 'Home',        href: '/' },
              { label: 'Diensten',   href: '/diensten' },
              { label: 'Over Ons',   href: '/over-ons' },
              { label: 'Resultaten', href: '/resultaten' },
              { label: 'Prijzen',    href: '/prijzen' },
              { label: 'Blog',       href: '/blog' },
              { label: 'Contact',    href: '/contact' },
            ].map((l) => (
              <TransitionLink
                key={l.label}
                href={l.href}
                className="font-condensed text-xs tracking-widest uppercase text-muted hover:text-white transition-colors"
              >
                {l.label}
              </TransitionLink>
            ))}
          </nav>
        </div>

        <div className="border-t border-border pt-8 pb-8 flex flex-col md:flex-row gap-6 md:gap-16">
          <div>
            <p className="font-condensed font-bold text-xs tracking-widest uppercase text-white mb-3">Openingstijden</p>
            <div className="flex flex-col gap-1">
              <p className="text-muted text-xs font-light">Ma – Vr: 06:00 – 22:00</p>
              <p className="text-muted text-xs font-light">Za: 08:00 – 18:00</p>
              <p className="text-muted text-xs font-light">Zo: Gesloten</p>
            </div>
          </div>
          <div>
            <p className="font-condensed font-bold text-xs tracking-widest uppercase text-white mb-3">Locatie</p>
            <p className="text-muted text-xs font-light">Vaart 8, Obdam</p>
            <a href="https://maps.google.com/?q=Vaart+8,+Obdam" target="_blank" rel="noopener noreferrer"
               className="font-condensed text-xs tracking-widest uppercase text-accent hover:opacity-70 transition-opacity mt-1 block">
              Route plannen →
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-xs font-light">
            © {new Date().getFullYear()} Hybrid Performance. Alle rechten voorbehouden.
          </p>
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex gap-4">
              <a href="https://instagram.com/hybrid.performance.gym" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors text-xs font-condensed uppercase tracking-widest py-2 px-1">
                Instagram
              </a>
              <a href="https://facebook.com/Hybridperformance.nl" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors text-xs font-condensed uppercase tracking-widest py-2 px-1">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
