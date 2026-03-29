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

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-xs font-light">
            © {new Date().getFullYear()} Hybrid Performance. Alle rechten voorbehouden.
          </p>
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-muted text-xs font-light">Vaart 8, Obdam</p>
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
