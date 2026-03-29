'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gsap } from '@/lib/gsap'
import { TransitionLink } from '@/components/ui/TransitionLink'

const links = [
  { label: 'Diensten', href: '/#diensten' },
  { label: 'Resultaten', href: '/#resultaten' },
  { label: 'Prijzen', href: '/#prijzen' },
  { label: 'Over Ons', href: '/over-ons' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact', accent: true },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLUListElement>(null)

  // Background on scroll
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // GSAP drawer animation
  useEffect(() => {
    if (!drawerRef.current || !overlayRef.current || !linksRef.current) return

    if (open) {
      document.body.style.overflow = 'hidden'
      gsap.set(drawerRef.current, { x: '100%', display: 'flex' })
      gsap.set(overlayRef.current, { display: 'block', opacity: 0 })
      gsap.to(drawerRef.current, { x: '0%', duration: 0.4, ease: 'power3.out' })
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3 })
      gsap.from(linksRef.current.children, {
        x: 40,
        opacity: 0,
        duration: 0.4,
        stagger: 0.07,
        ease: 'power3.out',
        delay: 0.15,
      })
    } else {
      document.body.style.overflow = ''
      gsap.to(drawerRef.current, {
        x: '100%',
        duration: 0.35,
        ease: 'power3.in',
        onComplete: () => {
          if (drawerRef.current) gsap.set(drawerRef.current, { display: 'none' })
        },
      })
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.25,
        onComplete: () => {
          if (overlayRef.current) gsap.set(overlayRef.current, { display: 'none' })
        },
      })
    }
  }, [open])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Hybrid Performance"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="font-condensed font-black text-sm tracking-[3px] uppercase">
              Hybrid Performance
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.label}>
                <TransitionLink
                  href={l.href}
                  className={`font-condensed font-bold text-xs tracking-widest uppercase transition-opacity hover:opacity-70 ${
                    l.accent ? 'text-accent' : 'text-white'
                  }`}
                >
                  {l.label}
                </TransitionLink>
              </li>
            ))}
          </ul>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(true)}
            aria-label="Menu openen"
          >
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-4 h-0.5 bg-white" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 bg-black/70 hidden"
        onClick={() => setOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-surface flex-col p-8 hidden"
      >
        <button
          className="self-end text-muted hover:text-white text-2xl mb-12"
          onClick={() => setOpen(false)}
          aria-label="Menu sluiten"
        >
          ✕
        </button>
        <ul ref={linksRef} className="flex flex-col gap-6">
          {links.map((l) => (
            <li key={l.label}>
              <TransitionLink
                href={l.href}
                onClick={() => setOpen(false)}
                className={`font-condensed font-black text-3xl italic uppercase tracking-wide transition-opacity hover:opacity-70 ${
                  l.accent ? 'text-accent' : 'text-white'
                }`}
              >
                {l.label}
              </TransitionLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
