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
