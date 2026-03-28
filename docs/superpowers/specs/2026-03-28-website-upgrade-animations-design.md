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
| `components/ui/` | `Button.tsx`, `PageHeader.tsx`, `SectionLabel.tsx` |
| `hooks/` | `useScrollReveal.ts` (import path: `@/hooks/useScrollReveal`) |
| `components/` | `Navbar.tsx`, `Footer.tsx` |

`HeroSection` currently uses a `SplitWords` helper + GSAP `gsap.context()` timeline for its entrance animation. All three upgrades must integrate without breaking this pattern.

`app/page.tsx` is a Server Component and must remain one. Do NOT add `'use client'` to it.

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
  delay?: number        — ms to wait before starting, default 0

Returns:
  displayText: string   — render this directly

Behaviour:
  - Character set: 0-9 A-Z # @ ! $ %
  - Reveals left-to-right: each position cycles random chars then locks
  - Uses setInterval; clears interval on unmount and resets when trigger becomes false
  - The delay is implemented via setTimeout inside useEffect before starting the interval
```

#### `components/ui/ScrambleText.tsx`

```
'use client'

Props:
  text: string
  className?: string
  triggerOnScroll?: boolean   — default false (triggers on mount)
  delay?: number              — ms delay before scramble starts (forwarded to useScramble)

Internals:
  - Renders: <span aria-label={text}>{displayText}</span>
    (aria-label always shows the real text to screen readers)
  - If triggerOnScroll=false: passes trigger=true on mount (respects delay prop)
  - If triggerOnScroll=true:
      useEffect creates a GSAP ScrollTrigger (from lib/gsap.ts):
        trigger: the span element
        start: "top 80%"   (20% inside viewport)
        once: true
        onEnter: () => setTrigger(true)
      Returns cleanup: () => st.kill()
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
| Page headline "HYBRID PERFORMANCE" | `HeroSection.tsx` | On mount | 300 ms (via `delay` prop) |
| Section H2 — Diensten | `DienstenSection.tsx` | Scroll (start: "top 80%") | — |
| Section H2 — Resultaten | `ResultatenSection.tsx` | Scroll | — |
| Section H2 — Prijzen | `PrijzenSection.tsx` | Scroll | — |
| Section H2 — Coach | `CoachSection.tsx` | Scroll | — |
| Section H2 — Contact | `ContactSection.tsx` | Scroll | — |
| Section H2 — CTABanner | `CTABanner.tsx` | Scroll | — |
| `StatBar.tsx` | No scramble — leave as-is (counter animation already applied) | — | — |
| Glitch lines | Between major sections in `app/page.tsx` | CSS only | — |

**`HeroSection.tsx` change:** Replace the `<SplitWords>` spans inside `<h1>` with two `<ScrambleText>` components (`triggerOnScroll={false}` with `delay={300}`). Remove the existing `word-reveal` segment from the GSAP timeline; keep other timeline entries (eyebrow, sub, CTA) unchanged.

**Section H2 change:** Wrap each H2's text content with `<ScrambleText triggerOnScroll={true} />`. Remove `useScrollReveal` from `DienstenSection` (it will be replaced by the horizontal scroll hook anyway).

**Glitch lines in `app/page.tsx`:** Add `<div className="glitch-line" />` as a Server Component-safe HTML element between major `<section>` blocks. No `'use client'` needed; the animation is CSS-only.

---

## Upgrade 2 — Horizontal Scroll Sections

### Goal

Two sections pin the page while their content scrolls horizontally, then release. Adds a visible progress bar and touch support.

### New file: `hooks/useHorizontalScroll.ts`

```
'use client'

Accepts:
  containerRef:  RefObject<HTMLElement>   — the pinned outer element
  trackRef:      RefObject<HTMLElement>   — the inner scrolling track
  progressRef:   RefObject<HTMLElement>   — the progress bar element (scaleX 0→1)

Behaviour:
  - Imports gsap, ScrollTrigger from lib/gsap.ts
  - Inside useEffect (runs client-side only):
      const distance = trackRef.current.scrollWidth - containerRef.current.offsetWidth
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + distance,
        }
      })
      tl.to(trackRef.current, { x: -distance, ease: 'none' })
      tl.to(progressRef.current, { scaleX: 1, ease: 'none' }, 0)
  - ScrollTrigger.config({ ignoreMobileResize: true }) called once at module level
    (this is the correct GSAP mobile config — NOT touch: true which is invalid)
  - Returns cleanup: () => ScrollTrigger.getAll().forEach(st => st.kill())
    (or store the specific ScrollTrigger and kill only that one)
```

### `DienstenSection.tsx` — updated structure

The existing `DienstenSection` imports from `@/data/diensten` and renders a 3-column vertical grid with `useScrollReveal`. This section is a **near-total rewrite**:

- Remove `useScrollReveal` import and usage
- Remove the vertical grid layout
- Map the existing `diensten` data array to the horizontal cards. If the array has more than 4 items, show only the first 4. Each card uses the same fields already in the data objects (title, description, etc.)
- Add `containerRef`, `trackRef`, `progressRef` refs and call `useHorizontalScroll`

```tsx
<section ref={containerRef} id="diensten" className="relative overflow-hidden">

  {/* Section header — pinned above the track */}
  <div className="max-w-7xl mx-auto px-6 py-16">
    <SectionLabel>Diensten</SectionLabel>
    <ScrambleText text="WAT WIJ BIEDEN" triggerOnScroll className="...h2 styles..." />
  </div>

  {/* Horizontal track */}
  <div ref={trackRef} className="flex">
    {diensten.slice(0, 4).map((item, i) => (
      <DienstCard key={i} index={i + 1} {...item} />
    ))}
  </div>

  {/* Progress bar — passed as progressRef */}
  <div ref={progressRef} style={{
    position: 'absolute', bottom: 0, left: 0,
    height: '3px', width: '100%',
    background: '#ff3c00',
    transformOrigin: 'left',
    transform: 'scaleX(0)'
  }} />

  {/* Scroll hint */}
  <p className="font-condensed text-muted text-xs tracking-widest uppercase px-6 py-3">
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

Same `useHorizontalScroll` hook pattern with `containerRef`, `trackRef`, `progressRef`. Photo cards:

| Property | Value |
|---|---|
| Width | `min-w-[280px]` desktop / `min-w-[80vw]` mobile |
| Default state | `filter: grayscale(100%)` |
| Hover state | `filter: grayscale(0%)`, `transition: filter 0.3s ease` |
| Overlay | Client name + result stat (e.g., "+12 kg spiermassa") positioned bottom-left, Barlow Condensed |

Progress bar is also passed as a separate `ref` (same `progressRef` pattern as DienstenSection).

---

## Upgrade 3 — Page Transitions (Orange Curtain Wipe)

### Goal

Navigating between pages triggers a full-screen `#ff3c00` curtain that sweeps in from the left, waits for the route change, then sweeps out to the right.

### New files

#### `lib/transitionContext.tsx`

```
'use client'

Exports:
  TransitionProvider  — React context provider
  useTransition()     — returns { navigate: (href: string) => void }

State:
  overlayRef: RefObject<HTMLDivElement>   — points to the PageTransition overlay div

navigate(href):
  1. gsap.set(overlay, { x: '-100%' })            — ensure starting position
  2. gsap.to(overlay, { x: '0%', duration: 0.4, ease: 'power2.inOut', onComplete:
       router.push(href)
       then: gsap.to(overlay, { x: '100%', duration: 0.5, ease: 'power2.inOut', onComplete:
         gsap.set(overlay, { x: '-100%' })          — reset to idle position
       })
     })

popstate handling:
  - window.addEventListener('popstate', handler) in useEffect
  - The popstate fires when the user hits Back/Forward
  - At this point the overlay is at x: '-100%' (idle, off-screen left)
  - Run a full in-then-out sequence:
      gsap.fromTo(overlay, { x: '-100%' }, { x: '0%', duration: 0.4, ease: 'power2.inOut', onComplete:
        gsap.to(overlay, { x: '100%', duration: 0.5, ease: 'power2.inOut', onComplete:
          gsap.set(overlay, { x: '-100%' })
        })
      })
  - Cleanup: removeEventListener on unmount
```

#### `components/ui/PageTransition.tsx`

```
'use client'

A fixed full-screen div rendered INSIDE TransitionProvider (not layout):
  position: fixed
  inset: 0
  z-index: 9999
  background: #ff3c00
  initial x: '-100%'  (set via gsap.set on mount, or via inline style transform)
  pointer-events: none (always — never blocks clicks)

Contains centered text:
  "HYBRID PERFORMANCE"
  font: Barlow Condensed, italic, 900 weight
  color: white
  letter-spacing: 6px
  text-transform: uppercase
  opacity: controlled separately — fade in during sweep-in (0→1 at 0.2s),
           fade out during sweep-out (1→0 at 0.3s)
```

#### `components/ui/TransitionLink.tsx`

```
'use client'

Drop-in replacement for Next.js <Link>:
  - Accepts same props as next/link: href, className, children, etc.
  - On click:
      1. Check if href is a hash-only link (starts with '#') or same-page hash
         (e.g. '/#diensten', '/#resultaten', '/#prijzen'):
           if (href.startsWith('#') || href.match(/^\/?#/)):
             do NOT call navigate(); let default browser scroll happen
             return
      2. Otherwise: e.preventDefault(), call navigate(href) from useTransition()
```

### Integration

**`app/layout.tsx`** — `TransitionProvider` must wrap BOTH `<Navbar />` and `{children}` so that `useTransition()` is available inside `<Navbar />`:

```tsx
import { TransitionProvider } from '@/lib/transitionContext'
// …
<body …>
  <TransitionProvider>
    <Navbar />
    {children}
  </TransitionProvider>
</body>
```

`<PageTransition />` is rendered inside `TransitionProvider`'s JSX (not in layout.tsx directly).

**`components/Navbar.tsx`** — replace internal `<Link>` navigation items with `<TransitionLink>`:
- Hash anchor links (`/#diensten`, `/#resultaten`, etc.) → use `<TransitionLink>` — the component itself detects and bypasses the curtain for these (see TransitionLink spec above)
- Route links (`/contact`, `/over-ons`, etc.) → `<TransitionLink>` triggers curtain normally
- External links (WhatsApp, social) → keep as plain `<a>` tags

**`components/Footer.tsx`** — same rule: internal route `<Link>`s → `<TransitionLink>`, external `<a>` tags unchanged.

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
| Client components | All animated components/hooks must have `'use client'` at the top |
| New npm packages | None — GSAP (including ScrollTrigger) already installed |
| Scramble engine | Pure `setInterval` in `useScramble.ts` — no GSAP needed for character cycling |
| ScrollTrigger for scramble | Used only for the scroll-triggered variant in `ScrambleText` (cleanup: `st.kill()` on unmount) |
| Horizontal scroll mobile | `ScrollTrigger.config({ ignoreMobileResize: true })` — this is the correct GSAP mobile config. Test on iOS Safari. If pinning is unreliable on mobile (<768px), use `ScrollTrigger.matchMedia` to disable pin on mobile and fall back to native overflow-x scroll. |
| Cleanup | Every `useEffect` that creates GSAP ScrollTriggers must return cleanup that kills the instance |
| Accessibility | `ScrambleText` renders the real `text` in `aria-label` on its container span |
| `app/page.tsx` | Remains a Server Component — no `'use client'`. Glitch line divs are plain HTML. |
| `useScrollReveal` removal | `DienstenSection` currently uses `useScrollReveal` — remove it; the horizontal scroll hook replaces it. Other sections keep their existing scroll reveals unless replaced by ScrambleText. |

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
  app/layout.tsx                          — wrap Navbar + children in TransitionProvider
  app/page.tsx                            — add <div className="glitch-line" /> dividers (Server Component)
  components/sections/HeroSection.tsx     — replace SplitWords headline with ScrambleText
  components/sections/DienstenSection.tsx — full rewrite: horizontal scroll + ScrambleText H2
  components/sections/ResultatenSection.tsx — horizontal scroll + ScrambleText H2
  components/sections/PrijzenSection.tsx  — ScrambleText H2 only
  components/sections/CoachSection.tsx    — ScrambleText H2 only
  components/sections/ContactSection.tsx  — ScrambleText H2 only
  components/sections/CTABanner.tsx       — ScrambleText H2 only
  components/Navbar.tsx                   — Link → TransitionLink
  components/Footer.tsx                   — Link → TransitionLink
```
