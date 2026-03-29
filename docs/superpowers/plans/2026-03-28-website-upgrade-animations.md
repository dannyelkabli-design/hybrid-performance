# Website Upgrade — Scramble, Horizontal Scroll & Page Transitions Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add text scramble/glitch effects, horizontal scroll sections, and orange curtain page transitions to the existing Hybrid Performance Next.js site.

**Architecture:** Three independent animation upgrades layered onto an existing Next.js 16 + Tailwind v4 + GSAP 3 site. Each upgrade is self-contained: new hooks/components then integration into existing sections. No new npm packages.

**Tech Stack:** Next.js 16 (App Router), TypeScript, GSAP 3 + ScrollTrigger, Tailwind v4 (CSS `@theme` tokens). All GSAP imported via `@/lib/gsap` (never direct from `gsap` package).

**Verification:** No Jest setup exists. Each task verifies via `npm run build` (TypeScript + Next.js compile) and visual browser check at `http://localhost:3000`.

---

## File Map

```
New files:
  hooks/useScramble.ts               — character cycling logic (setInterval)
  hooks/useHorizontalScroll.ts       — GSAP pin + x-scroll + progress
  components/ui/ScrambleText.tsx     — renders scrambled text, handles scroll trigger
  components/ui/PageTransition.tsx   — fixed full-screen orange overlay (accepts overlayRef prop)
  components/ui/TransitionLink.tsx   — link that triggers curtain on click
  lib/transitionContext.tsx          — usePageTransition() hook + TransitionProvider

Modified files:
  app/globals.css                    — add .glitch-line + @keyframes glitch-scan
  app/layout.tsx                     — wrap Navbar + children in TransitionProvider
  app/page.tsx                       — add <div className="glitch-line" /> dividers
  components/sections/HeroSection.tsx      — replace SplitWords h1 with ScrambleText
  components/sections/DienstenSection.tsx  — full rewrite: horizontal scroll layout
  components/sections/ResultatenSection.tsx — add horizontal scroll to photo strip
  components/sections/PrijzenSection.tsx   — ScrambleText on H2
  components/sections/CoachSection.tsx     — ScrambleText on H2
  components/sections/ContactSection.tsx   — ScrambleText on H2
  components/sections/CTABanner.tsx        — ScrambleText on H2
  components/Navbar.tsx              — Link → TransitionLink
  components/Footer.tsx              — Link → TransitionLink (needs 'use client')
```

---

## Task 1: `useScramble` hook

**Files:**
- Create: `hooks/useScramble.ts`

- [ ] **Step 1: Create the file**

```typescript
'use client'

import { useState, useEffect, useRef } from 'react'

const CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ#@!$%'

interface UseScrambleOptions {
  text: string
  trigger: boolean
  speed?: number   // ms per frame, default 30
  delay?: number   // ms before starting, default 0
}

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)]
}

function scrambledVersion(text: string): string {
  return text
    .split('')
    .map((c) => (c === ' ' ? ' ' : randomChar()))
    .join('')
}

export function useScramble({
  text,
  trigger,
  speed = 30,
  delay = 0,
}: UseScrambleOptions): string {
  // Start with scrambled text when trigger is already true (avoids real-text flash)
  // Start with real text when trigger is false (visible before scroll reveals it)
  const [displayText, setDisplayText] = useState(() =>
    trigger ? scrambledVersion(text) : text
  )
  const frameRef = useRef(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!trigger) {
      setDisplayText(text)
      return
    }

    // Show scrambled immediately before the delay fires
    setDisplayText(scrambledVersion(text))

    function startScramble() {
      frameRef.current = 0

      intervalRef.current = setInterval(() => {
        const frame = frameRef.current
        const next = text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' '
            if (i < frame) return char
            return randomChar()
          })
          .join('')

        setDisplayText(next)
        frameRef.current++

        if (frameRef.current > text.length) {
          clearInterval(intervalRef.current!)
          intervalRef.current = null
          setDisplayText(text)
        }
      }, speed)
    }

    if (delay > 0) {
      timeoutRef.current = setTimeout(startScramble, delay)
    } else {
      startScramble()
    }

    return () => {
      clearInterval(intervalRef.current!)
      clearTimeout(timeoutRef.current!)
    }
  }, [trigger, text, speed, delay])

  return displayText
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd "/Users/dannyelkabli/Website's/hybrid-performance" && npx tsc --noEmit 2>&1 | head -30
```

Expected: no errors about `hooks/useScramble.ts`

- [ ] **Step 3: Commit**

```bash
cd "/Users/dannyelkabli/Website's/hybrid-performance"
git add hooks/useScramble.ts
git commit -m "feat: add useScramble hook — character cycling left-to-right reveal, no real-text flash"
```

---

## Task 2: `ScrambleText` component

**Files:**
- Create: `components/ui/ScrambleText.tsx`

- [ ] **Step 1: Create the file**

```tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { ScrollTrigger } from '@/lib/gsap'
import { useScramble } from '@/hooks/useScramble'

interface ScrambleTextProps {
  text: string
  className?: string
  triggerOnScroll?: boolean   // default false = triggers on mount
  delay?: number              // ms delay before scramble, forwarded to useScramble
}

export function ScrambleText({
  text,
  className,
  triggerOnScroll = false,
  delay = 0,
}: ScrambleTextProps) {
  const [triggered, setTriggered] = useState(!triggerOnScroll)
  const spanRef = useRef<HTMLSpanElement>(null)

  // Scroll-triggered variant: set trigger=true when 20% into viewport
  useEffect(() => {
    if (!triggerOnScroll || !spanRef.current) return

    const st = ScrollTrigger.create({
      trigger: spanRef.current,
      start: 'top 80%',
      once: true,
      onEnter: () => setTriggered(true),
    })

    return () => st.kill()
  }, [triggerOnScroll])

  const displayText = useScramble({ text, trigger: triggered, delay })

  return (
    <span ref={spanRef} className={className} aria-label={text}>
      {displayText}
    </span>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd "/Users/dannyelkabli/Website's/hybrid-performance" && npx tsc --noEmit 2>&1 | head -30
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
cd "/Users/dannyelkabli/Website's/hybrid-performance"
git add components/ui/ScrambleText.tsx
git commit -m "feat: add ScrambleText component — mount or scroll-triggered with aria-label"
```

---

## Task 3: Glitch CSS + page.tsx section dividers

**Files:**
- Modify: `app/globals.css`
- Modify: `app/page.tsx`

- [ ] **Step 1: Add glitch CSS to `app/globals.css`**

Append at the end of `app/globals.css`:

```css
/* Glitch scan-line — CSS-only section divider */
@keyframes glitch-scan {
  0%   { opacity: 0; transform: translateX(-100%); }
  20%  { opacity: 1; }
  80%  { opacity: 1; }
  100% { opacity: 0; transform: translateX(100%); }
}

.glitch-line {
  position: relative;
  height: 1px;
  overflow: hidden;
  pointer-events: none;
}

.glitch-line::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, #ff3c00, transparent);
  animation: glitch-scan 2.4s ease-in-out infinite;
}
```

- [ ] **Step 2: Update `app/page.tsx`**

`page.tsx` is a Server Component — no `'use client'` directive. Replace the entire file:

```tsx
import { HeroSection } from '@/components/sections/HeroSection'
import { StatBar } from '@/components/sections/StatBar'
import { DienstenSection } from '@/components/sections/DienstenSection'
import { ResultatenSection } from '@/components/sections/ResultatenSection'
import { CoachSection } from '@/components/sections/CoachSection'
import { PrijzenSection } from '@/components/sections/PrijzenSection'
import { CTABanner } from '@/components/sections/CTABanner'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatBar />
      <div className="glitch-line" />
      <DienstenSection />
      <div className="glitch-line" />
      <ResultatenSection />
      <div className="glitch-line" />
      <CoachSection />
      <div className="glitch-line" />
      <PrijzenSection />
      <CTABanner />
      <ContactSection />
      <Footer />
    </main>
  )
}
```

- [ ] **Step 3: Build check**

```bash
cd "/Users/dannyelkabli/Website's/hybrid-performance" && npm run build 2>&1 | tail -20
```

Expected: build succeeds

- [ ] **Step 4: Commit**

```bash
cd "/Users/dannyelkabli/Website's/hybrid-performance"
git add app/globals.css app/page.tsx
git commit -m "feat: add glitch-line CSS dividers between homepage sections"
```

---

## Task 4: Apply ScrambleText to HeroSection headline

**Files:**
- Modify: `components/sections/HeroSection.tsx`

**Context:** The hero currently has a `SplitWords` helper + GSAP timeline. The `word-reveal` segment animates H1 words flying up. We replace the H1 with `ScrambleText` (which handles its own animation) and remove the `word-reveal` step from the timeline. All other timeline entries (eyebrow, sub, CTA, scroll indicator) stay unchanged.

- [ ] **Step 1: Update `HeroSection.tsx`**

```tsx
'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from '@/lib/gsap'
import { WhatsAppButton } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrambleText } from '@/components/ui/ScrambleText'

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!heroRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      // Eyebrow label
      tl.from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.6 }, 0.3)

      // Subtekst + CTA (word-reveal removed — ScrambleText handles the headline)
      tl.from('.hero-sub', { y: 20, opacity: 0, duration: 0.6 }, 1.1)
      tl.from('.hero-cta', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, 1.3)

      // Scroll indicator
      tl.from('.scroll-indicator', { opacity: 0, duration: 0.5 }, 1.8)
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-[600px] flex flex-col"
    >
      {/* Achtergrond foto */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Hybrid Performance training"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/60 to-[#0a0a0a]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 pt-16">
        <SectionLabel className="hero-eyebrow mb-4 block">
          Krachttraining &amp; Coaching
        </SectionLabel>

        <h1 className="font-condensed font-black italic uppercase leading-none text-white mb-6">
          <ScrambleText
            text="HYBRID"
            delay={300}
            className="block text-[clamp(64px,12vw,160px)]"
          />
          <ScrambleText
            text="PERFORMANCE"
            delay={300}
            className="block text-[clamp(64px,12vw,160px)]"
          />
        </h1>

        <p className="hero-sub text-muted font-light text-base md:text-lg max-w-md mb-8">
          Professionele begeleiding voor optimale prestaties. Personal training,
          online coaching en voeding op maat.
        </p>

        <div className="flex flex-wrap gap-4">
          <WhatsAppButton label="Start vandaag" className="hero-cta" />
          <a
            href="/#diensten"
            className="hero-cta inline-flex items-center gap-2 font-condensed font-bold text-sm tracking-widest uppercase px-7 py-4 border border-white text-white hover:opacity-70 transition-opacity"
          >
            Onze diensten
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator relative z-10 flex justify-center pb-8">
        <span className="font-condensed text-xs tracking-[4px] uppercase text-muted animate-bounce">
          ▼ scroll
        </span>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Build check**

```bash
cd "/Users/dannyelkabli/Website's/hybrid-performance" && npm run build 2>&1 | tail -20
```

Expected: build succeeds, no TypeScript errors

- [ ] **Step 3: Visual check in browser**

```bash
cd "/Users/dannyelkabli/Website's/hybrid-performance" && npm run dev
```

Open `http://localhost:3000`. On page load: "HYBRID" and "PERFORMANCE" should show scrambled characters immediately, then resolve to real text ~300ms in. Eyebrow/sub/CTA still animate in normally.

- [ ] **Step 4: Commit**

```bash
cd "/Users/dannyelkabli/Website's/hybrid-performance"
git add components/sections/HeroSection.tsx
git commit -m "feat: replace hero headline SplitWords with ScrambleText — 300ms delay on mount"
```

---

## Task 5: Apply ScrambleText to section H2s

**Files:**
- Modify: `components/sections/PrijzenSection.tsx`
- Modify: `components/sections/CoachSection.tsx`
- Modify: `components/sections/ContactSection.tsx`
- Modify: `components/sections/CTABanner.tsx`

For each section: add `import { ScrambleText } from '@/components/ui/ScrambleText'` at the top, then wrap H2 text with `<ScrambleText triggerOnScroll />`. Keep all parent `<h2>` tags and their classes unchanged.

- [ ] **Step 1: Update `PrijzenSection.tsx`**

Add import:
```tsx
import { ScrambleText } from '@/components/ui/ScrambleText'
```

Change the H2:
```tsx
// Before:
<h2 className="font-condensed font-black italic uppercase text-5xl md:text-6xl text-white leading-none">
  PAKKETTEN
</h2>

// After:
<h2 className="font-condensed font-black italic uppercase text-5xl md:text-6xl text-white leading-none">
  <ScrambleText text="PAKKETTEN" triggerOnScroll />
</h2>
```

- [ ] **Step 2: Update `CoachSection.tsx`**

Add import:
```tsx
import { ScrambleText } from '@/components/ui/ScrambleText'
```

Change the H2 (use two `ScrambleText` components to preserve the line break):
```tsx
// Before:
<h2 className="font-condensed font-black italic uppercase text-5xl text-white leading-none">
  JOUW<br />BEGELEIDER
</h2>

// After:
<h2 className="font-condensed font-black italic uppercase text-5xl text-white leading-none">
  <ScrambleText text="JOUW" triggerOnScroll className="block" />
  <ScrambleText text="BEGELEIDER" triggerOnScroll className="block" />
</h2>
```

- [ ] **Step 3: Update `ContactSection.tsx`**

Add import:
```tsx
import { ScrambleText } from '@/components/ui/ScrambleText'
```

Change the H2:
```tsx
// Before:
<h2 className="font-condensed font-black italic uppercase text-5xl text-white leading-none mb-6">
  NEEM<br />CONTACT OP
</h2>

// After:
<h2 className="font-condensed font-black italic uppercase text-5xl text-white leading-none mb-6">
  <ScrambleText text="NEEM" triggerOnScroll className="block" />
  <ScrambleText text="CONTACT OP" triggerOnScroll className="block" />
</h2>
```

- [ ] **Step 4: Update `CTABanner.tsx`**

Add import:
```tsx
import { ScrambleText } from '@/components/ui/ScrambleText'
```

Change the H2:
```tsx
// Before:
<h2 className="font-condensed font-black italic uppercase text-5xl md:text-6xl text-white leading-none">
  KLAAR OM TE<br />BEGINNEN?
</h2>

// After:
<h2 className="font-condensed font-black italic uppercase text-5xl md:text-6xl text-white leading-none">
  <ScrambleText text="KLAAR OM TE" triggerOnScroll className="block" />
  <ScrambleText text="BEGINNEN?" triggerOnScroll className="block" />
</h2>
```

- [ ] **Step 5: Build check**

```bash
cd "/Users/dannyelkabli/Website's/hybrid-performance" && npm run build 2>&1 | tail -20
```

Expected: build succeeds

- [ ] **Step 6: Commit**

```bash
cd "/Users/dannyelkabli/Website's/hybrid-performance"
git add components/sections/PrijzenSection.tsx components/sections/CoachSection.tsx \
  components/sections/ContactSection.tsx components/sections/CTABanner.tsx
git commit -m "feat: apply ScrambleText to section H2s — scroll-triggered scramble on all sections"
```

---

## Task 6: `useHorizontalScroll` hook

**Files:**
- Create: `hooks/useHorizontalScroll.ts`

- [ ] **Step 1: Create the file**

```typescript
'use client'

import { RefObject, useEffect } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

interface UseHorizontalScrollOptions {
  containerRef: RefObject<HTMLElement | null>
  trackRef: RefObject<HTMLElement | null>
  progressRef: RefObject<HTMLElement | null>
}

export function useHorizontalScroll({
  containerRef,
  trackRef,
  progressRef,
}: UseHorizontalScrollOptions) {
  useEffect(() => {
    // ScrollTrigger.config must run client-side only
    ScrollTrigger.config({ ignoreMobileResize: true })

    const container = containerRef.current
    const track = trackRef.current
    const progress = progressRef.current
    if (!container || !track || !progress) return

    const distance = track.scrollWidth - container.offsetWidth
    if (distance <= 0) return  // content fits — nothing to scroll

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => '+=' + distance,
        invalidateOnRefresh: true,
      },
    })

    tl.to(track, { x: -distance, ease: 'none' }, 0)
    tl.to(progress, { scaleX: 1, ease: 'none' }, 0)

    const st = tl.scrollTrigger!

    return () => {
      st.kill()
      tl.kill()
    }
  }, [containerRef, trackRef, progressRef])
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd "/Users/dannyelkabli/Website's/hybrid-performance" && npx tsc --noEmit 2>&1 | head -30
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
cd "/Users/dannyelkabli/Website's/hybrid-performance"
git add hooks/useHorizontalScroll.ts
git commit -m "feat: add useHorizontalScroll hook — GSAP pin + x-scroll + progress ref"
```

---

## Task 7: Rewrite DienstenSection — horizontal scroll

**Files:**
- Modify: `components/sections/DienstenSection.tsx`

**Context:** Current section imports `@/data/diensten` (3 items: Personal Training, Online Coaching, Voeding & Leefstijl) and renders a 3-column vertical grid. We rewrite it as a horizontal pinned scroll. The `diensten` data array (3 items) maps directly to the 3 cards.

- [ ] **Step 1: Rewrite `DienstenSection.tsx`**

```tsx
'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { diensten } from '@/data/diensten'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrambleText } from '@/components/ui/ScrambleText'
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll'

export function DienstenSection() {
  const containerRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useHorizontalScroll({ containerRef, trackRef, progressRef })

  return (
    <section
      ref={containerRef}
      id="diensten"
      className="relative overflow-hidden bg-background"
    >
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <SectionLabel className="mb-3 block">Wat wij doen</SectionLabel>
        <h2 className="font-condensed font-black italic uppercase text-5xl md:text-6xl text-white leading-none">
          <ScrambleText text="ONZE" triggerOnScroll className="block" />
          <ScrambleText text="DIENSTEN" triggerOnScroll className="block" />
        </h2>
      </div>

      {/* Horizontal track */}
      <div ref={trackRef} className="flex">
        {diensten.map((d) => (
          <div
            key={d.id}
            className="flex-shrink-0 min-w-[320px] md:min-w-[400px] h-[400px] bg-surface border border-border flex flex-col justify-between p-8 transition-colors hover:border-accent/50"
          >
            <span className="font-condensed font-black italic text-[80px] text-accent/10 leading-none select-none">
              {d.label}
            </span>
            <div className="flex flex-col gap-4">
              <h3 className="font-condensed font-black uppercase text-2xl text-white leading-tight">
                {d.title}
              </h3>
              <p className="text-muted font-light text-sm leading-relaxed">
                {d.description}
              </p>
              <Link
                href={d.href}
                className="font-condensed font-bold text-xs tracking-widest uppercase text-accent hover:opacity-70 transition-opacity"
              >
                {d.cta} →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Progress bar — driven by useHorizontalScroll via progressRef */}
      <div
        ref={progressRef}
        className="absolute bottom-0 left-0 h-[3px] w-full bg-accent origin-left"
        style={{ transform: 'scaleX(0)' }}
      />

      {/* Scroll hint */}
      <p className="font-condensed text-xs tracking-widest uppercase text-muted px-6 py-4">
        Scroll → voor meer
      </p>
    </section>
  )
}
```

- [ ] **Step 2: Build check**

```bash
cd "/Users/dannyelkabli/Website's/hybrid-performance" && npm run build 2>&1 | tail -20
```

Expected: build succeeds

- [ ] **Step 3: Visual check**

```bash
cd "/Users/dannyelkabli/Website's/hybrid-performance" && npm run dev
```

Open `http://localhost:3000`. Scroll to the Diensten section. Expected: section pins while 3 service cards scroll horizontally. Orange progress bar fills at the bottom. H2 scrambles when visible.

- [ ] **Step 4: Commit**

```bash
cd "/Users/dannyelkabli/Website's/hybrid-performance"
git add components/sections/DienstenSection.tsx
git commit -m "feat: rewrite DienstenSection — horizontal pin-scroll with GSAP ScrollTrigger"
```

---

## Task 8: Rewrite ResultatenSection — horizontal filmstrip

**Files:**
- Modify: `components/sections/ResultatenSection.tsx`

**Context:** Current section has a 3-photo grid + testimonials grid, both with `useScrollReveal`. We replace the photo grid with a pinned horizontal filmstrip. Testimonials remain below as a normal vertical grid with their existing scroll reveal.

- [ ] **Step 1: Rewrite `ResultatenSection.tsx`**

```tsx
'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { testimonials } from '@/data/testimonials'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrambleText } from '@/components/ui/ScrambleText'
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const photos = [
  { src: '/images/hero.jpg',     alt: 'Training sessie', name: 'Mark V.',  detail: '-12kg · 4 maanden' },
  { src: '/images/coach.jpg',    alt: 'Coach in actie',  name: 'Sarah K.', detail: '+8kg spier · 6 maanden' },
  { src: '/images/training.jpg', alt: 'Resultaat',       name: 'Daan R.',  detail: 'PR squat +40kg · 3 maanden' },
]

export function ResultatenSection() {
  const containerRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const quotesRef = useScrollReveal<HTMLDivElement>({
    selector: '.testimonial',
    stagger: 0.15,
    y: 30,
  })

  useHorizontalScroll({ containerRef, trackRef, progressRef })

  return (
    <section id="resultaten" className="bg-surface">
      {/* Pinned horizontal photo strip */}
      <section
        ref={containerRef}
        className="relative overflow-hidden bg-surface"
      >
        {/* Section header */}
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
          <SectionLabel className="mb-3 block">Bewezen resultaten</SectionLabel>
          <h2 className="font-condensed font-black italic uppercase text-5xl md:text-6xl text-white leading-none">
            <ScrambleText text="RESULTATEN" triggerOnScroll />
          </h2>
        </div>

        {/* Horizontal filmstrip */}
        <div ref={trackRef} className="flex gap-3 px-6">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative flex-shrink-0 min-w-[280px] md:min-w-[360px] h-[420px] overflow-hidden"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-condensed font-bold text-sm uppercase tracking-widest text-white">
                  {photo.name}
                </p>
                <p className="font-condensed text-xs tracking-widest uppercase text-muted">
                  {photo.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div
          ref={progressRef}
          className="absolute bottom-0 left-0 h-[3px] w-full bg-accent origin-left"
          style={{ transform: 'scaleX(0)' }}
        />

        {/* Scroll hint */}
        <p className="font-condensed text-xs tracking-widest uppercase text-muted px-6 py-4">
          Scroll → voor meer
        </p>
      </section>

      {/* Testimonials — normal vertical layout below the filmstrip */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div ref={quotesRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial border-t border-border pt-8">
              <p className="text-white font-light text-sm leading-relaxed mb-6 italic">
                {t.quote}
              </p>
              <div>
                <p className="font-condensed font-bold text-sm uppercase tracking-widest text-white">
                  {t.name}
                </p>
                <p className="font-condensed text-xs tracking-widest uppercase text-muted">
                  {t.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Build check**

```bash
cd "/Users/dannyelkabli/Website's/hybrid-performance" && npm run build 2>&1 | tail -20
```

Expected: build succeeds

- [ ] **Step 3: Visual check**

Open `http://localhost:3000`. Scroll to Resultaten. Expected: 3 photos scroll horizontally as filmstrip; grayscale by default, color on hover; client name/stat overlay visible. Testimonials appear below after the filmstrip unpins.

- [ ] **Step 4: Commit**

```bash
cd "/Users/dannyelkabli/Website's/hybrid-performance"
git add components/sections/ResultatenSection.tsx
git commit -m "feat: rewrite ResultatenSection — horizontal photo filmstrip + testimonials below"
```

---

## Task 9: Page transition system

**Files:**
- Create: `lib/transitionContext.tsx`
- Create: `components/ui/PageTransition.tsx`
- Create: `components/ui/TransitionLink.tsx`

**Important:** The context hook is named `usePageTransition` (not `useTransition`) to avoid conflict with React's built-in `useTransition` hook. `PageTransition` accepts `overlayRef` as a regular prop (no `forwardRef`) to keep the code simple and type-safe.

- [ ] **Step 1: Create `components/ui/PageTransition.tsx`**

```tsx
'use client'

import { useEffect } from 'react'
import { gsap } from '@/lib/gsap'

interface PageTransitionProps {
  overlayRef: React.RefObject<HTMLDivElement | null>
}

export function PageTransition({ overlayRef }: PageTransitionProps) {
  useEffect(() => {
    if (!overlayRef.current) return
    // Set initial off-screen position on mount
    gsap.set(overlayRef.current, { x: '-100%' })
  }, [overlayRef])

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] bg-accent flex items-center justify-center pointer-events-none"
      style={{ transform: 'translateX(-100%)' }}
    >
      <span className="font-condensed font-black italic uppercase tracking-[6px] text-white text-xl md:text-2xl select-none">
        HYBRID PERFORMANCE
      </span>
    </div>
  )
}
```

- [ ] **Step 2: Create `lib/transitionContext.tsx`**

```tsx
'use client'

import {
  createContext,
  useContext,
  useRef,
  useEffect,
  ReactNode,
} from 'react'
import { useRouter } from 'next/navigation'
import { gsap } from '@/lib/gsap'
import { PageTransition } from '@/components/ui/PageTransition'

interface PageTransitionContextValue {
  navigate: (href: string) => void
}

const PageTransitionContext = createContext<PageTransitionContextValue | null>(null)

export function usePageTransition() {
  const ctx = useContext(PageTransitionContext)
  if (!ctx) throw new Error('usePageTransition must be used inside TransitionProvider')
  return ctx
}

export function TransitionProvider({ children }: { children: ReactNode }) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  function navigate(href: string) {
    const overlay = overlayRef.current
    if (!overlay) {
      router.push(href)
      return
    }

    // Ensure starting position is off-screen left
    gsap.set(overlay, { x: '-100%' })

    // Sweep in → navigate → sweep out
    gsap.to(overlay, {
      x: '0%',
      duration: 0.4,
      ease: 'power2.inOut',
      onComplete: () => {
        router.push(href)
        gsap.to(overlay, {
          x: '100%',
          duration: 0.5,
          ease: 'power2.inOut',
          delay: 0.1,
          onComplete: () => {
            gsap.set(overlay, { x: '-100%' })
          },
        })
      },
    })
  }

  // Handle browser Back/Forward buttons
  useEffect(() => {
    const overlay = overlayRef.current
    if (!overlay) return

    function handlePopState() {
      if (!overlay) return
      // Overlay is at x: '-100%' (idle). Run full in-then-out sequence.
      gsap.fromTo(
        overlay,
        { x: '-100%' },
        {
          x: '0%',
          duration: 0.4,
          ease: 'power2.inOut',
          onComplete: () => {
            gsap.to(overlay, {
              x: '100%',
              duration: 0.5,
              ease: 'power2.inOut',
              onComplete: () => {
                gsap.set(overlay, { x: '-100%' })
              },
            })
          },
        }
      )
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return (
    <PageTransitionContext.Provider value={{ navigate }}>
      <PageTransition overlayRef={overlayRef} />
      {children}
    </PageTransitionContext.Provider>
  )
}
```

- [ ] **Step 3: Create `components/ui/TransitionLink.tsx`**

**Known limitation:** The hash detection regex catches `#foo` and `/#foo` but not `/path#foo`. For this site, all hash nav links use the `/#section` pattern, so this is sufficient.

```tsx
'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { usePageTransition } from '@/lib/transitionContext'

interface TransitionLinkProps {
  href: string
  className?: string
  children: ReactNode
  onClick?: () => void
}

export function TransitionLink({ href, className, children, onClick }: TransitionLinkProps) {
  const { navigate } = usePageTransition()

  function handleClick(e: React.MouseEvent) {
    // Hash-only links (e.g. '#section') or same-page hash links (e.g. '/#diensten')
    // should NOT trigger the curtain — let the browser handle native scroll
    const isHashLink = href.startsWith('#') || /^\/?#/.test(href)
    if (isHashLink) {
      onClick?.()
      return
    }

    e.preventDefault()
    onClick?.()
    navigate(href)
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
```

- [ ] **Step 4: Build check**

```bash
cd "/Users/dannyelkabli/Website's/hybrid-performance" && npm run build 2>&1 | tail -20
```

Expected: build succeeds

- [ ] **Step 5: Commit**

```bash
cd "/Users/dannyelkabli/Website's/hybrid-performance"
git add lib/transitionContext.tsx components/ui/PageTransition.tsx components/ui/TransitionLink.tsx
git commit -m "feat: add page transition system — orange curtain wipe, usePageTransition hook"
```

---

## Task 10: Wire transitions into layout, Navbar, and Footer

**Files:**
- Modify: `app/layout.tsx`
- Modify: `components/Navbar.tsx`
- Modify: `components/Footer.tsx`

- [ ] **Step 1: Update `app/layout.tsx`**

`TransitionProvider` must wrap both `<Navbar />` and `{children}` so that `usePageTransition()` is accessible inside Navbar (which is a child of the provider).

```tsx
import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { TransitionProvider } from '@/lib/transitionContext'

export const metadata: Metadata = {
  title: 'Hybrid Performance — Krachttraining & Coaching',
  description:
    'Professionele krachttraining en coaching in Nederland. Personal training, online coaching en voedingsadvies op maat.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="bg-background text-white antialiased">
        <TransitionProvider>
          <Navbar />
          {children}
        </TransitionProvider>
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Update `components/Navbar.tsx`**

Add import (keep the `Link` import for the logo):
```tsx
import { TransitionLink } from '@/components/ui/TransitionLink'
```

In the desktop `<ul>` section, replace `<Link>` with `<TransitionLink>` for nav items (the logo `<Link href="/">` stays as-is):

```tsx
// Desktop nav — replace Link with TransitionLink
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
```

In the mobile drawer `<ul>`:

```tsx
// Mobile drawer — replace Link with TransitionLink
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
```

The `links` array has `Diensten/Resultaten/Prijzen` as `/#hash` links (TransitionLink bypasses curtain) and `Contact` as `/contact` (TransitionLink triggers curtain).

- [ ] **Step 3: Update `components/Footer.tsx`**

`Footer.tsx` currently has no `'use client'` directive but uses only `next/link` and `next/image` (both work in server components). Adding `TransitionLink` (a client component that calls `usePageTransition`) works from a server component since client components can be used as children. However, `Footer.tsx` itself needs `'use client'` if it were calling hooks directly — but here it just renders `<TransitionLink>` as a child, which is fine without `'use client'`.

Replace the entire `Footer.tsx`:

```tsx
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
              { label: 'Home',      href: '/' },
              { label: 'Diensten', href: '/diensten' },
              { label: 'Over Ons', href: '/over-ons' },
              { label: 'Resultaten', href: '/resultaten' },
              { label: 'Prijzen',  href: '/prijzen' },
              { label: 'Contact',  href: '/contact' },
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
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors text-xs font-condensed uppercase tracking-widest">
              Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors text-xs font-condensed uppercase tracking-widest">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 4: Full build check**

```bash
cd "/Users/dannyelkabli/Website's/hybrid-performance" && npm run build 2>&1 | tail -30
```

Expected: clean build, no TypeScript errors

- [ ] **Step 5: End-to-end visual check**

```bash
cd "/Users/dannyelkabli/Website's/hybrid-performance" && npm run dev
```

Open `http://localhost:3000`. Test:
1. Hero headline scrambles on load (random chars → "HYBRID PERFORMANCE")
2. Scroll down → each section H2 scrambles when entering viewport
3. Glitch lines visible between sections (thin orange animated line)
4. Diensten section pins and 3 cards scroll horizontally — progress bar fills
5. Resultaten section photos scroll horizontally as filmstrip — grayscale → color on hover
6. Click "Contact" in nav → orange curtain sweeps in, `/contact` loads, curtain sweeps out
7. Click "Diensten" in nav → no curtain, page scrolls to section
8. Click footer links → curtain transitions to each page
9. Hit browser back → curtain animates

- [ ] **Step 6: Commit**

```bash
cd "/Users/dannyelkabli/Website's/hybrid-performance"
git add app/layout.tsx components/Navbar.tsx components/Footer.tsx
git commit -m "feat: wire TransitionProvider into layout — Navbar + Footer use TransitionLink"
```

---

## Final check

- [ ] **Production build**

```bash
cd "/Users/dannyelkabli/Website's/hybrid-performance" && npm run build
```

Expected: ✓ Compiled successfully, no errors or warnings

- [ ] **Push to GitHub**

```bash
cd "/Users/dannyelkabli/Website's/hybrid-performance" && git push origin main
```
