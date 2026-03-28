# Website Upgrade — Scramble, Horizontal Scroll & Page Transitions

**Date:** 2026-03-28
**Project:** Hybrid Performance (`/Users/dannyelkabli/Website's/hybrid-performance/`)
**Status:** Spec — ready for implementation

---

## Codebase Context

| File | Notes |
|---|---|
| `app/globals.css` | Design tokens via `@theme`: `--color-accent: #ff3c00`, `--color-background: #0a0a0a`, fonts Barlow Condensed + Inter |
| `lib/gsap.ts` | `'use client'`, registers `ScrollTrigger` on window; exports `{ gsap, ScrollTrigger }` |
| `app/layout.tsx` | Root layout — renders `<Navbar />` then `{children}`; no existing provider wrapping |
| `components/sections/` | `HeroSection.tsx`, `DienstenSection.tsx`, `ResultatenSection.tsx`, `PrijzenSection.tsx`, `CoachSection.tsx`, `ContactSection.tsx`, `CTABanner.tsx`, `StatBar.tsx` |
| `components/ui/` | `Button.tsx`, `PageHeader.tsx`, `SectionLabel.tsx`, `useScrollReveal.ts` |
| `components/` | `Navbar.tsx`, `Footer.tsx` |

`HeroSection` currently uses a `SplitWords` helper + GSAP `gsap.context()` timeline for its entrance animation. All three upgrades must integrate without breaking this pattern.

---

## Upgrade 1 — Text Scramble + Glitch Effect

### Goal

Headlines animate on load or scroll-into-view by cycling random characters before resolving to their real text, giving a digital/glitch feel consistent with the brand.

### New files

#### `hooks/useScramble.ts`

```
Accepts:
  text: string          — target string to reveal
  trigger: boolean      — starts the animation when true
  speed?: number        — ms per frame, default 30

Returns:
  displayText: string   — render this directly

Behaviour:
  - Character set: 0-9 A-Z # @ ! $ %
  - Reveals left-to-right: each position cycles random chars then locks
  - Uses setInterval; clears on unmount and on trigger reset
```

#### `components/ui/ScrambleText.tsx`

```
Props:
  text: string
  className?: string
  triggerOnScroll?: boolean   — default false (triggers on mount)

Internals:
  - If triggerOnScroll=false: passes trigger=true immediately to useScramble
  - If triggerOnScroll=true: uses GSAP ScrollTrigger (imported from lib/gsap.ts)
    to set trigger=true once when element is 20% inside viewport (once: true)
  - Renders: <span>{displayText}</span>
  - Must be 'use client'
```

### Glitch scan-lines

CSS-only, no JS. Add to `globals.css`:

```css
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

### Where to apply

| Location | Component | Trigger | Delay |
|---|---|---|---|
| Page headline "HYBRID PERFORMANCE" | `HeroSection.tsx` | On mount | 0.3 s |
| Every section H2 | `DienstenSection`, `ResultatenSection`, `PrijzenSection`, `CoachSection`, `ContactSection` | Scroll (20% in viewport) | — |
| Glitch lines | Between major sections in page layout | CSS only | — |

**`HeroSection.tsx` change:** Replace the `<SplitWords>` spans inside `<h1>` with two `<ScrambleText>` components (`triggerOnScroll={false}`). Remove the existing `word-reveal` GSAP animation from the timeline (or keep it running on other elements — eyebrow, sub, CTA — and replace only the headline).

**Section H2 change:** Wrap each H2's text content with `<ScrambleText triggerOnScroll={true} />`.

**Glitch lines:** Add `<div className="glitch-line" />` as a direct child between major `<section>` blocks in the page's main file (e.g., `app/page.tsx`).

---

## Upgrade 2 — Horizontal Scroll Sections

### Goal

Two sections pin the page while their content scrolls horizontally, then release. Adds a visible progress bar and touch support.

### New file: `hooks/useHorizontalScroll.ts`

```
Accepts:
  containerRef: RefObject<HTMLElement>   — the pinned outer element
  trackRef: RefObject<HTMLElement>       — the inner scrolling track

Behaviour:
  - Imports gsap, ScrollTrigger from lib/gsap.ts
  - Creates a ScrollTrigger on containerRef:
      pin: true
      scrub: 1
      end: () => "+=" + (trackRef.current.scrollWidth - containerRef.current.offsetWidth)
  - Animates trackRef x from 0 to -(trackWidth - containerWidth)
  - Animates a ".hscroll-progress" child of containerRef from scaleX 0→1
  - touch: true for mobile support
  - Returns cleanup: kills the ScrollTrigger instance on unmount

Must be 'use client'
```

### `DienstenSection.tsx` — updated structure

```
<section ref={containerRef} id="diensten" style={{ overflow: 'hidden' }}>

  {/* Section header — stays pinned above the track */}
  <div className="max-w-7xl mx-auto px-6 py-16">
    <SectionLabel>Diensten</SectionLabel>
    <ScrambleText text="WAT WIJ BIEDEN" triggerOnScroll className="...h2 styles..." />
  </div>

  {/* Horizontal track */}
  <div ref={trackRef} className="flex">
    {/* Card 01 — Personal Training */}
    {/* Card 02 — Online Coaching */}
    {/* Card 03 — Voeding & Leefstijl */}
    {/* Card 04 — Krachtraining */}
  </div>

  {/* Progress bar */}
  <div className="hscroll-progress" style={{
    position: 'absolute', bottom: 0, left: 0,
    height: '3px', width: '100%',
    background: '#ff3c00',
    transformOrigin: 'left',
    transform: 'scaleX(0)'
  }} />

  {/* Scroll hint — visible until user has scrolled */}
  <p className="scroll-hint font-condensed text-muted text-xs tracking-widest uppercase">
    Scroll →
  </p>

</section>
```

**Card design (Diensten):**

| Property | Value |
|---|---|
| Width | `min-w-[320px]` desktop / `min-w-[85vw]` mobile |
| Height | Full container height (`h-full`) |
| Content | Large italic number (01, 02…), service title (Barlow Condensed black italic), short description (Inter light), CTA arrow `→` |
| Background | `bg-surface` (`#141414`) with `1px` border `--color-border` |
| Hover | Accent top border `border-t-2 border-accent` transition |

### `ResultatenSection.tsx` — updated structure

Same `useHorizontalScroll` hook pattern. Photo cards:

| Property | Value |
|---|---|
| Width | `min-w-[280px]` desktop / `min-w-[80vw]` mobile |
| Default state | `filter: grayscale(100%)` |
| Hover state | `filter: grayscale(0%)`, `transition: filter 0.3s ease` |
| Overlay | Client name + result stat (e.g., "+12 kg spiermassa") positioned bottom-left, Barlow Condensed |

---

## Upgrade 3 — Page Transitions (Orange Curtain Wipe)

### Goal

Navigating between pages triggers a full-screen `#ff3c00` curtain that sweeps in from the left, waits for the route change, then sweeps out to the right.

### New files

#### `lib/transitionContext.tsx`

```
Exports:
  TransitionProvider  — React context provider, 'use client'
  useTransition()     — returns { navigate: (href: string) => void }

State:
  isTransitioning: boolean
  overlayRef: RefObject<HTMLDivElement>

navigate(href):
  1. Animates overlay: x '-100%' → '0%', duration 0.4s, ease 'power2.inOut'
  2. On complete: calls router.push(href) (useRouter from next/navigation)
  3. After push: animates overlay x '0%' → '100%', duration 0.5s, ease 'power2.inOut'
  4. On complete: resets x to '-100%' (ready for next transition)

popstate handling:
  - Listens to window popstate
  - On fire: runs curtain-out only (x '100%' is already visible from browser nav)
```

#### `components/ui/PageTransition.tsx`

```
'use client'

A fixed full-screen div rendered inside TransitionProvider:
  position: fixed
  inset: 0
  z-index: 9999
  background: #ff3c00
  initial x: '-100%'
  pointer-events: none during idle

Contains centered text:
  "HYBRID PERFORMANCE"
  font: Barlow Condensed, italic, 900 weight
  color: white
  letter-spacing: 6px
  text-transform: uppercase
  opacity: fades in during sweep-in, fades out during sweep-out
```

#### `components/ui/TransitionLink.tsx`

```
'use client'

Drop-in replacement for Next.js <Link>:
  - Same props interface as next/link (href, className, children, …)
  - onClick: calls navigate(href) from useTransition() instead of native routing
  - Prevents default browser navigation
```

### Integration

**`app/layout.tsx`** — wrap body children:

```tsx
import { TransitionProvider } from '@/lib/transitionContext'
// …
<body …>
  <Navbar />
  <TransitionProvider>
    {children}
  </TransitionProvider>
</body>
```

**`components/Navbar.tsx`** — replace all `<Link>` nav items with `<TransitionLink>`.

**`components/Footer.tsx`** — replace all internal `<Link>` elements with `<TransitionLink>`.

**External links** (WhatsApp, social) — keep as plain `<a>` tags; do not wrap in `TransitionLink`.

### Timing summary

| Phase | Duration | Easing |
|---|---|---|
| Curtain sweep in | 0.4 s | `power2.inOut` |
| Route change | ~0 (async) | — |
| Curtain sweep out | 0.5 s | `power2.inOut` |
| Total | ~0.9 s | — |

---

## Architecture & Constraints

| Constraint | Detail |
|---|---|
| GSAP import | Always via `lib/gsap.ts` — never import directly from `gsap` package |
| Client components | All animated components must have `'use client'` at the top |
| New npm packages | None — GSAP (including ScrollTrigger) already installed |
| Scramble engine | Pure `setInterval` in `useScramble.ts` — no GSAP needed for the character cycling |
| ScrollTrigger for scramble | Used only for the scroll-triggered variant in `ScrambleText` (20% threshold) |
| Horizontal scroll mobile | `ScrollTrigger` config must include touch-friendly scrub — test on iOS Safari |
| Cleanup | Every `useEffect` that creates GSAP ScrollTriggers must return `() => ctx.revert()` or `st.kill()` |
| Accessibility | `ScrambleText` must render the final `text` in an `aria-label` on its container span so screen readers read the real value, not the scrambled characters |

---

## File Changeset Summary

```
New files:
  hooks/useScramble.ts
  hooks/useHorizontalScroll.ts
  components/ui/ScrambleText.tsx
  components/ui/PageTransition.tsx
  components/ui/TransitionLink.tsx
  lib/transitionContext.tsx

Modified files:
  app/globals.css                         — add .glitch-line + @keyframes
  app/layout.tsx                          — wrap with TransitionProvider
  app/page.tsx                            — add <div className="glitch-line" /> dividers
  components/sections/HeroSection.tsx     — replace SplitWords headline with ScrambleText
  components/sections/DienstenSection.tsx — horizontal scroll + ScrambleText H2
  components/sections/ResultatenSection.tsx — horizontal scroll + ScrambleText H2
  components/sections/PrijzenSection.tsx  — ScrambleText H2
  components/sections/CoachSection.tsx    — ScrambleText H2
  components/sections/ContactSection.tsx  — ScrambleText H2
  components/Navbar.tsx                   — Link → TransitionLink
  components/Footer.tsx                   — Link → TransitionLink
```
